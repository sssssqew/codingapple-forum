'use client'

export default function Error({ error, reset }){
  const resetPage = () => {
    reset()
  }
  return (
    <div>
      <h4>페이지 로드중 에러가 발생하였습니다.</h4>
      <p>{error}</p>
      <button onClick={resetPage}></button>
    </div>
  )
}