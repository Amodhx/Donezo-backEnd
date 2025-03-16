import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import MainRoute from './routes/router';
import cors from 'cors'



dotenv.config();
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1',MainRoute.router)


async function connectToMongoDB() {
    try{
        await mongoose.connect("mongodb://localhost:27017/Donezo-TaskManager");
        console.log("Connected To MongoDB");
    }catch(err){
        console.log(err);
        process.exit(1);
        
    }
}
connectToMongoDB()

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
