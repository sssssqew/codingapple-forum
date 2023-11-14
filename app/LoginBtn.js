'use client'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function LoginBtn(){
  const router =  useRouter()
  return (
    <>
      <button onClick={()=>{ signIn() }}>로그인</button>
      <button onClick={()=> router.push('/register')}>회원가입</button>
    </>
  )
}