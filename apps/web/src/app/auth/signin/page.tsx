"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button, Input, Card } from "@randee/ui"

export default function SignInPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const result = await signIn("credentials", {
        email,
        password,
        name: isLogin ? undefined : name,
        redirect: false,
      })

      if (result?.error) {
        setError(isLogin ? "อีเมลหรือรหัสผ่านไม่ถูกต้อง" : "ไม่สามารถสร้างบัญชีได้")
      } else {
        router.push("/")
        router.refresh()
      }
    } catch (err) {
      setError("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง")
    } finally {
      setLoading(false)
    }
  }

  const handleOAuthSignIn = async (provider: string) => {
    try {
      await signIn(provider, { callbackUrl: "/" })
    } catch (err) {
      setError(`ไม่สามารถเข้าสู่ระบบด้วย ${provider} ได้`)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full p-6 space-y-6">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            {isLogin ? "เข้าสู่ระบบ" : "สร้างบัญชีใหม่"}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {isLogin ? "ยังไม่มีบัญชี? " : "มีบัญชีอยู่แล้ว? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              {isLogin ? "สมัครสมาชิก" : "เข้าสู่ระบบ"}
            </button>
          </p>
        </div>

        {/* OAuth Buttons */}
        <div className="space-y-3">
          <Button
            variant="outline"
            onClick={() => handleOAuthSignIn("google")}
            className="w-full"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            เข้าสู่ระบบด้วย Google
          </Button>
          <Button
            variant="outline"
            onClick={() => handleOAuthSignIn("facebook")}
            className="w-full"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            เข้าสู่ระบบด้วย Facebook
          </Button>
          <Button
            variant="outline"
            onClick={() => handleOAuthSignIn("line")}
            className="w-full"
          >
            <svg className="w-5 h-5 mr-2" fill="#00C300" viewBox="0 0 24 24">
              <path d="M20.717 11.317c-1.598-3.526-5.818-6.13-10.64-6.13-5.343 0-9.702 3.356-10.053 7.596a.66.66 0 0 0 .01.175c.007.07.01.14.01.21 0 2.255 1.63 4.21 4.006 5.416.295.15.696.296.765.677.066.375-.175.947-.516 1.31-.28.298-.367.38-.367.52 0 .195.16.32.375.32.74 0 4.63-2.585 6.64-4.275 1.85.89 4.085 1.42 6.47 1.42 5.34 0 9.7-3.355 10.05-7.595a.66.66 0 0 0-.01-.175c-.007-.07-.01-.14-.01-.21 0-.86-.17-1.69-.48-2.46zM8.68 14.92l-1.96-5.82-2.24 5.82H2.69l3.08-7.71L7.6 14.92H8.68zm8.45 0l-1.96-5.82-2.24 5.82h-1.79l3.08-7.71 1.83 7.71h1.08z" />
            </svg>
            เข้าสู่ระบบด้วย LINE
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">หรือใช้อีเมล</span>
          </div>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                ชื่อ
              </label>
              <Input
                id="name"
                type="text"
                required={!isLogin}
                placeholder="ชื่อ"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1"
              />
            </div>
          )}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              อีเมล
            </label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              required
              placeholder="อีเมล"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              รหัสผ่าน
            </label>
            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="รหัสผ่าน"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1"
            />
          </div>

          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <Button type="submit" loading={loading} className="w-full">
            {loading ? "กำลังดำเนินการ..." : isLogin ? "เข้าสู่ระบบ" : "สมัครสมาชิก"}
          </Button>
        </form>

        <div className="text-center">
          <button
            onClick={() => router.push("/auth/otp")}
            className="text-sm text-blue-600 hover:text-blue-500"
          >
            เข้าสู่ระบบด้วยเบอร์โทรศัพท์
          </button>
        </div>
      </Card>
    </div>
  )
}
