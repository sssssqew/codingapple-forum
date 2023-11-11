import connectDB from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(req, res){
  if(req.method === 'POST'){
    console.log(req.body)
    const { title, content, _id } = req.body 

    if(title === ''){
      return res.status(400).json('글 제목을 작성해주세요!')
    }
    if(content === ''){
      return res.status(400).json('글의 컨텐츠를 작성해주세요!')
    }

    try{
      const client = await connectDB
      const db = client.db('forum')
      const result = await db.collection('post').updateOne(
        {_id: new ObjectId(_id) }, 
        {$set: { title, content }}
      )
      return res.redirect(302, '/list')
    }catch(error){
      return res.status(500).json({ msg: 'DB 저장오류', error})
    }
  }
}