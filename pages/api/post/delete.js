import connectDB from "@/util/database"
import { ObjectId } from "mongodb"
// URL 파라미터: req.query
// URL 쿼리스트링: req.query

export default async function handler(req, res){
  const id = req.body
  console.log(id)

  if(req.method === 'DELETE'){

    try{
      const client = await connectDB
      const db = client.db('forum')
      const result = await db.collection('post').deleteOne({ _id: new ObjectId(id) })
      return res.redirect(302, '/list')
    }catch(error){
      return res.status(500).json({ msg: 'DB 삭제오류', error})
    }
  }
}