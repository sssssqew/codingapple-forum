'use client'

import { useState, useEffect } from "react"

export default function Comment({ parentId }){
  const [comment, setComment] = useState('')
  const [commentsById, setCommentsById] = useState([])

  const handleChange = (e) => {
    setComment(e.target.value)
  } 
  const sendComment = () => {
    fetch('/api/comment/new', {method: 'POST', body: JSON.stringify({
      parentId, comment
    }) })
    .then(res => res.json())
    .then(result => {
      setComment('')
      getComments(parentId)
    })
  }
  const getComments = (parentId) => {
    fetch(`/api/comment/list?id=${parentId}`)
    .then(res => res.json())
    .then(result => {
      setCommentsById(result)
    })
  }
  useEffect(()=>{
    console.log("게시물 ID: ", parentId)
    getComments(parentId)
  }, [])

  return (
    <div>
      <h3>댓글목록</h3>
      <input type="text" onChange={handleChange} value={comment || ''}/>
      <button onClick={sendComment}>댓글전송</button>
      {commentsById.length === 0 ? 
      <p>댓글 가져오는 중...</p> :
       commentsById.map((comment => (
        <p key={comment._id}>{comment.content}</p>
      )))}
    </div>
  )
}