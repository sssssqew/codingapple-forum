import connectDB from "@/util/database"
import { ObjectId } from "mongodb"
import { notFound } from "next/navigation"
import Comment from './Comment'

export default async function Detail({ params }){
  console.log(params)

  const client = await connectDB
  const db = client.db('forum')
  const result = await db.collection('post').findOne({ _id: new ObjectId(params.id) })
  console.log(result)
  console.log(result._id.toString())

  if(!result){
    return notFound()
  }

  return (
    <div>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
      <Comment parentId={result._id.toString()}/>
    </div>
  )
}