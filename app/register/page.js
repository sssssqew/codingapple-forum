export default function Register(){
  return (
    <div>
      <form method='POST' action="/api/auth/signup">
        <input type="text" name='name' placeholder='이름'/>
        <input type="text" name='email' placeholder="이메일"/>
        <input type="text" name='password' placeholder='비번'/>
        <button type='submit'>회원가입</button>
      </form>
    </div>
  )
}