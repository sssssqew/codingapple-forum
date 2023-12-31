import connectDB from "@/util/database"
import ListItem from "./ListItem"

export const dynamic = 'force-dynamic' // 다이나믹 렌더링
export const revalidate = 60 // 60초동안 페이지를 캐슁함 (서버자원 절약)

// DB 조회하는 컴포넌트는 서버 컴포넌트로 작성하기
export default async function List(){
  const client = await connectDB
  const db = client.db('forum')
  const result = await db.collection('post').find().toArray()
  console.log(result)

  return (
    <div className="list-bg">
      {result && result.map(post => (
        <ListItem key={post._id} post={JSON.stringify(post)}></ListItem>
      ))}
    </div>
  )
}