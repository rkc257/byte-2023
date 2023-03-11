import mongoose from "mongoose"


 const Connection = async(username, password) =>{
    
    const URL = `mongodb://${username}:${password}@ac-8ydg1bm-shard-00-00.lf4uggt.mongodb.net:27017,ac-8ydg1bm-shard-00-01.lf4uggt.mongodb.net:27017,ac-8ydg1bm-shard-00-02.lf4uggt.mongodb.net:27017/?ssl=true&replicaSet=atlas-k50444-shard-0&authSource=admin&retryWrites=true&w=majority:<>@ac-pzpmklk-shard-00-00.ncffm8j.mongodb.net:27017,ac-pzpmklk-shard-00-01.ncffm8j.mongodb.net:27017,ac-pzpmklk-shard-00-02.ncffm8j.mongodb.net:27017/?ssl=true&replicaSet=atlas-114lzb-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        
      await mongoose.connect(URL,{ useNewUrlParser: true});
      console.log('Database connected successfully');

    } catch (error) {

        console.log('Error while connecting with databse',error);

    }
}

export default Connection;