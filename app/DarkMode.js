'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function DarkMode(){
  const router = useRouter()
  const changeMode = () => {
    const mode = ('; '+document.cookie).split(`; mode=`).pop().split(';')[0]
    
    if(mode === 'light'){
      document.cookie = `mode=dark;max-age=${3600}`
    }else if(mode === 'dark'){
      document.cookie = `mode=light;max-age=${3600}`
    }
    
    router.refresh()
  }
  useEffect(()=>{
    const mode = ('; '+document.cookie).split(`; mode=`).pop().split(';')[0]
    if(mode === ''){
      document.cookie = `mode=light;max-age=${3600}`
    }
  }, [])
  return (
    <span onClick={changeMode}>🌙</span>
  )
}