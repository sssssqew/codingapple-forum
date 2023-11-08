import connectDB from "@/util/database"

export default async function List(){
  const client = await connectDB
  const db = client.db('forum')
  const result = await db.collection('post').find().toArray()
  console.log(result)

  return (
    <div className="list-bg">
      {result && result.map(post => (
        <div className="list-item">
        <h4>{post.title}</h4>
          <p>1월 1일</p>
        </div>
      ))}
    </div>
  )
}