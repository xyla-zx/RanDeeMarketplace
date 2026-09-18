import { randomInt } from "crypto"
import { prisma } from "@randee/db"

const OTP_EXPIRY_MINUTES = 5

export async function generateOTP(phone: string): Promise<string> {
  const otp = randomInt(100000, 999999).toString()
  const expiresAt = new Date(Date.now() + OTP_EXPIRY_MINUTES * 60 * 1000)

  // Store OTP in database
  await prisma.otpVerification.upsert({
    where: { phone },
    update: {
      code: otp,
      expiresAt,
      attempts: 0,
    },
    create: {
      phone,
      code: otp,
      expiresAt,
      attempts: 0,
    },
  })

  // TODO: Send OTP via SMS (Twilio, MessageBird, etc.)
  console.log(`OTP for ${phone}: ${otp}`)

  return otp
}

export async function verifyOTP(phone: string, code: string): Promise<boolean> {
  const otpRecord = await prisma.otpVerification.findUnique({
    where: { phone },
  })

  if (!otpRecord) {
    return false
  }

  if (otpRecord.expiresAt < new Date()) {
    await prisma.otpVerification.delete({ where: { phone } })
    return false
  }

  if (otpRecord.attempts >= 3) {
    await prisma.otpVerification.delete({ where: { phone } })
    return false
  }

  if (otpRecord.code !== code) {
    await prisma.otpVerification.update({
      where: { phone },
      data: { attempts: otpRecord.attempts + 1 },
    })
    return false
  }

  // OTP verified successfully
  await prisma.otpVerification.delete({ where: { phone } })
  return true
}

export async function resendOTP(phone: string): Promise<boolean> {
  const otpRecord = await prisma.otpVerification.findUnique({
    where: { phone },
  })

  // Allow resend only if OTP exists and not expired
  if (!otpRecord || otpRecord.expiresAt < new Date()) {
    return false
  }

  // Generate new OTP
  await generateOTP(phone)
  return true
}
