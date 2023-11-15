import connectDB from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(req, res){
  if(req.method === 'GET'){
    try{
      const client = await connectDB
      const db = client.db('forum')
      const result = await db.collection('comment').find({
        parent: new ObjectId(req.query?.id)
      }).toArray()
      // console.log("댓글목록: ", result)
      return res.json(result)
    }catch(error){
      return res.status(500).json({ msg: 'DB 조회오류 - 댓글', error})
    }
  }
}