import connectDB from '@/util/database'
import bcrypt from 'bcrypt' // 비밀번호 암호화

export default async function handler(req, res){
  if(req.method === 'POST'){
    const { name, email, password } = req.body 

    if(name === '' || email === '' || password === ''){
      return res.status(400).json({ msg: '회원가입 폼 중에서 빈칸이 있습니다. '})
    }

    try{
      const hash = await bcrypt.hash(password, 10)
      const client = await connectDB
      const db = client.db('forum')

      const user = await db.collection('user').findOne({ email })
      if(user){
        return res.status(400).json({ msg: '해당 사용자가 이미 존재합니다.' })
      }
      const result = await db.collection('user').insertOne({ name, email, hash })
      return res.redirect(302, '/')
    }catch(error){
      return res.status(500).json({ msg: '회원가입 에러', error})
    }
  }
}