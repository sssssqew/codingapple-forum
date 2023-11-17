import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(request){
  // console.log(request.nextUrl)
  // console.log(request.cookies) // Map 자료형
  // console.log(request.headers) // Map 자료형

  // NextResponse.next()
  // NextResponse.redirect() // 페이지 내용과 URL 모두 변경됨
  // NextResponse.rewrite() // 페이지 내용만 변경되고, URL은 변하지 않음

  // request.cookies.get('쿠키이름')  //출력
  // request.cookies.has('쿠키이름')  //존재확인
  // request.cookies.delete('쿠키이름')  //삭제
  
  // const response = NextResponse.next()
  // response.cookies.set({
  //   name: 'mode',
  //   value: 'dark',
  //   maxAge: 3600,
  //   httpOnly : true
  // })  
  // return response  //쿠키생성


  const session = await getToken({ req: request })
  console.log(session)

  if(request.nextUrl.pathname.startsWith('/write')){ // 로그인되지 않은 상태에서 글작성하려는 경우
    if(!session){
      return NextResponse.redirect(`${process.env.NEXTAUTH_URL}api/auth/signin`, request.url)
    }
  }

  if(request.nextUrl.pathname.startsWith('/list')){
    const now = new Date()
    console.log('접속시간 (로컬): ', now.toLocaleString())
    console.log('접속 운영체제: ', request.headers.get('sec-ch-ua-platform'))
    return NextResponse.next()
  }
}