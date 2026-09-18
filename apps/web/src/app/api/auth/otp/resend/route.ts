import { NextRequest, NextResponse } from "next/server"
import { resendOTP } from "@/lib/otp"

export async function POST(request: NextRequest) {
  try {
    const { phone } = await request.json()

    if (!phone || !/^[0-9]{10}$/.test(phone)) {
      return NextResponse.json(
        { error: "เบอร์โทรศัพท์ไม่ถูกต้อง" },
        { status: 400 }
      )
    }

    const success = await resendOTP(phone)

    if (!success) {
      return NextResponse.json(
        { error: "ไม่สามารถส่ง OTP ใหม่ได้ กรุณารอสักครู่" },
        { status: 400 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("OTP resend error:", error)
    return NextResponse.json(
      { error: "ไม่สามารถส่ง OTP ใหม่ได้" },
      { status: 500 }
    )
  }
}
