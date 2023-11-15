import connectDB from "@/util/database"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res){
  if(req.method === 'POST'){
    console.log(req.body)
    const { title, content } = req.body 
    const session = await getServerSession(req, res, authOptions)
    console.log(session)

    if(title === ''){
      return res.status(400).json('글 제목을 작성해주세요!')
    }
    if(content === ''){
      return res.status(400).json('글의 컨텐츠를 작성해주세요!')
    }

    if(session){
      try{
        const client = await connectDB
        const db = client.db('forum')
        const result = await db.collection('post').insertOne({ title, content, author: session.user?.email })
        return res.redirect(302, '/list')
      }catch(error){
        return res.status(500).json({ msg: 'DB 저장오류 - 포스트', error})
      }
    }
  }
}