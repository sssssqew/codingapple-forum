import { MongoClient, ServerApiVersion } from 'mongodb'

const username = encodeURIComponent("sunrise");
const password = encodeURIComponent("rkrrlska7496");
const DB_URL = `mongodb+srv://${username}:${password}@cluster0.38tto.mongodb.net/?retryWrites=true&w=majority`

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
}
let connectDB

// next.js 파일 저장시 계속 DB에 연결하지 않도록 싱글톤으로 캐슁함
if(process.env.NODE_ENV === 'development'){
  if(!global._mongo){
    global._mongo = new MongoClient(DB_URL, options).connect()
  }
  connectDB = global._mongo
}else{
  connectDB = new MongoClient(DB_URL, options).connect()
}


export default connectDB