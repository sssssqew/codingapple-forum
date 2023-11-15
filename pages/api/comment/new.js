import connectDB from "@/util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res){
  if(req.method === 'POST'){
    const { comment, parentId } = JSON.parse(req.body)

    if(comment === ''){
      return res.status(400).json('댓글이 비어있어요!')
    }

    const session = await getServerSession(req, res, authOptions)
    console.log(session)

    if(session){
      const commentObj = {
        content: comment,
        author: session.user?.email, // 서버에서 조회 (보안문제)
        parent: new ObjectId(parentId)
      }

      try{
        const client = await connectDB
        const db = client.db('forum')
        const result = await db.collection('comment').insertOne(commentObj)
        return res.json({ msg: '댓글저장 성공!' })
      }catch(error){
        return res.status(500).json({ msg: 'DB 저장오류 - 댓글', error})
      }
    }
  }
}