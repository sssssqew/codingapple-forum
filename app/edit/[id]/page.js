import connectDB from "@/util/database"
import { ObjectId } from "mongodb"
export default async function Edit({ params }){
  console.log(params)

  const client = await connectDB
  const db = client.db('forum')
  const result = await db.collection('post').findOne({ _id: new ObjectId(params.id) })
  console.log(result)

  return (
    <div>
      <h4>글 수정하기</h4>
      <form action="/api/post/edit" method="POST" className="p-20">
        <input type="text" name="title" placeholder="글제목" defaultValue={result.title}/><br/>
        <input type="text" name="content" placeholder="컨텐츠" defaultValue={result.content}/><br/>
        <input type="text" name="_id" defaultValue={result._id.toString()} className="hidden"/>
        <button type="submit">전송</button>
      </form>
    </div>
  )
}