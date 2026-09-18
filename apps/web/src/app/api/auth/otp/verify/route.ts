import { NextRequest, NextResponse } from "next/server"
import { verifyOTP } from "@/lib/otp"
import { prisma } from "@randee/db"
import bcrypt from "bcryptjs"

export async function POST(request: NextRequest) {
  try {
    const { phone, code } = await request.json()

    if (!phone || !code) {
      return NextResponse.json(
        { error: "ข้อมูลไม่ครบถ้วน" },
        { status: 400 }
      )
    }

    const isValid = await verifyOTP(phone, code)

    if (!isValid) {
      return NextResponse.json(
        { error: "รหัส OTP ไม่ถูกต้องหรือหมดอายุ" },
        { status: 400 }
      )
    }

    // Find or create user with verified phone
    let user = await prisma.user.findUnique({
      where: { phone },
    })

    if (!user) {
      // Create new user with verified phone
      user = await prisma.user.create({
        data: {
          phone,
          isVerified: true,
          role: "USER",
        },
      })
    } else if (!user.isVerified) {
      // Mark existing user as verified
      user = await prisma.user.update({
        where: { id: user.id },
        data: {
          isVerified: true,
          lastLoginAt: new Date(),
        },
      })
    } else {
      // Update last login
      await prisma.user.update({
        where: { id: user.id },
        data: { lastLoginAt: new Date() },
      })
    }

    return NextResponse.json({
      success: true,
      userId: user.id,
      isVerified: user.isVerified,
    })
  } catch (error) {
    console.error("OTP verify error:", error)
    return NextResponse.json(
      { error: "ไม่สามารถยืนยัน OTP ได้" },
      { status: 500 }
    )
  }
}
