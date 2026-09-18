import { NextRequest, NextResponse } from "next/server"
import { generateOTP } from "@/lib/otp"

export async function POST(request: NextRequest) {
  try {
    const { phone } = await request.json()

    if (!phone || !/^[0-9]{10}$/.test(phone)) {
      return NextResponse.json(
        { error: "เบอร์โทรศัพท์ไม่ถูกต้อง" },
        { status: 400 }
      )
    }

    await generateOTP(phone)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("OTP send error:", error)
    return NextResponse.json(
      { error: "ไม่สามารถส่ง OTP ได้" },
      { status: 500 }
    )
  }
}
