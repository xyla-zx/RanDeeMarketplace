"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button, Input, Card } from "@randee/ui"

export default function OTPPage() {
  const [phone, setPhone] = useState("")
  const [otp, setOtp] = useState("")
  const [step, setStep] = useState<"phone" | "verify">("phone")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [countdown, setCountdown] = useState(0)
  const router = useRouter()

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const res = await fetch("/api/auth/otp/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "ไม่สามารถส่ง OTP ได้")
      }

      setStep("verify")
      setCountdown(60)
      
      // Start countdown for resend
      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(interval)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "เกิดข้อผิดพลาด")
    } finally {
      setLoading(false)
    }
  }

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const res = await fetch("/api/auth/otp/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, code: otp }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "OTP ไม่ถูกต้อง")
      }

      // Redirect to profile setup or home
      router.push("/profile/setup?verified=true")
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : "เกิดข้อผิดพลาด")
    } finally {
      setLoading(false)
    }
  }

  const handleResendOTP = async () => {
    if (countdown > 0) return

    setError("")
    setLoading(true)

    try {
      const res = await fetch("/api/auth/otp/resend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || "ไม่สามารถส่ง OTP ใหม่ได้")
      }

      setCountdown(60)
    } catch (err) {
      setError(err instanceof Error ? err.message : "เกิดข้อผิดพลาด")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full p-6 space-y-6">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            {step === "phone" ? "ยืนยันเบอร์โทรศัพท์" : "กรอกรหัส OTP"}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {step === "phone"
              ? "กรุณากรอกเบอร์โทรศัพท์มือถือของคุณ"
              : `เราได้ส่งรหัส OTP ไปยัง ${phone}`}
          </p>
        </div>

        {step === "phone" ? (
          <form onSubmit={handleSendOTP} className="space-y-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                เบอร์โทรศัพท์
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="08XXXXXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                pattern="[0-9]{10}"
                className="mt-1"
              />
            </div>

            {error && (
              <div className="rounded-md bg-red-50 p-4">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            <Button type="submit" loading={loading} className="w-full">
              ส่งรหัส OTP
            </Button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOTP} className="space-y-6">
            <div>
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                รหัส OTP
              </label>
              <Input
                id="otp"
                type="text"
                placeholder="XXXXXX"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                maxLength={6}
                pattern="[0-9]{6}"
                className="mt-1 text-center text-2xl tracking-widest"
              />
            </div>

            {error && (
              <div className="rounded-md bg-red-50 p-4">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            <Button type="submit" loading={loading} className="w-full">
              ยืนยันรหัส
            </Button>

            <div className="text-center">
              <button
                type="button"
                onClick={handleResendOTP}
                disabled={countdown > 0 || loading}
                className="text-sm text-blue-600 hover:text-blue-500 disabled:text-gray-400 disabled:cursor-not-allowed"
              >
                {countdown > 0
                  ? `ส่งใหม่ได้ใน ${countdown} วินาที`
                  : "ส่งรหัสใหม่"}
              </button>
            </div>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setStep("phone")}
                className="text-sm text-gray-600 hover:text-gray-500"
              >
                เปลี่ยนเบอร์โทรศัพท์
              </button>
            </div>
          </form>
        )}
      </Card>
    </div>
  )
}
