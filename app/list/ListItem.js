'use client'

import Link from 'next/link'
import DetailLink from "./DetailLink"
import { useRouter } from 'next/navigation'

export default function ListItem({ post }){
  const router = useRouter()
  post = JSON.parse(post)
  const handleRemove = (e) => {
    fetch('/api/post/delete', { method: 'DELETE', body: post._id })
    .then(res => {
      if(res.status == 200){
        alert('삭제가 정상적으로 완료되었습니다.')
        // router.refresh() // 새로고침
        e.target.parentElement.classList.add('fade')
        setTimeout(() => {
          e.target.parentElement.classList.add('hidden')
        }, 500)
      }else{
        alert('서버에서 에러가 발생했습니다.')
      }
    })
  }
  return (
    <div className="list-item">
      <Link href={`/detail/${post._id}`}>
        <h4>{post.title}</h4>
        <p>1월 1일</p>
      </Link>
      <DetailLink id={post._id}/>
      <Link href={`/edit/${post._id}`}>✏️</Link>
      <span onClick={handleRemove} style={{cursor: 'pointer'}}>🗑️</span>
    </div>
  )
}