"use client"

import { useState } from "react"
import Link from "next/link"
import { Button, Input, Card } from "@/components/ui"

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Create your account</h1>
          <p className="mt-2 text-sm text-gray-600">Start shopping smarter with AI</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <Input label="Full Name" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} />
          <Input label="Email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input label="Password" type="password" placeholder="Create a password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button className="w-full" size="lg">Create Account</Button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-brand-600 hover:text-brand-700 font-medium">Sign in</Link>
        </p>
      </Card>
    </div>
  )
}
