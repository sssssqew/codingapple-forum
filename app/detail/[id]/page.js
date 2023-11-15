import connectDB from "@/util/database"
import { ObjectId } from "mongodb"
import Comment from './Comment'

export default async function Detail({ params }){
  console.log(params)

  const client = await connectDB
  const db = client.db('forum')
  const result = await db.collection('post').findOne({ _id: new ObjectId(params.id) })
  console.log(result)
  console.log(result._id.toString())

  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
      <Comment parentId={result._id.toString()}/>
    </div>
  )
}