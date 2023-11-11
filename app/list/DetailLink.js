'use client'

import { useRouter, usePathname, useSearchParams } from "next/navigation"

export default function DetailLink({ id }){
  const router = useRouter()
  const pathname = usePathname()
  // console.log(pathname)
  const querystring = useSearchParams()
  // console.log(querystring)

  return (
    <button onClick={()=>{router.push(`/detail/${id}`)}}>상세페이지 이동</button>
  )
}
