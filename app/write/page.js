export default function Write(){
  return (
    <div>
      <h4>글 작성하기</h4>
      <form action="/api/post/new" method="POST" className="p-20">
        <input type="text" name="title" placeholder="글제목"/><br/>
        <input type="text" name="content" placeholder="컨텐츠"/><br/>
        <button type="submit">작성</button>
      </form>
    </div>
  )
}