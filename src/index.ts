import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import MainRoute from './routes/router';
import cors from 'cors'
import dialogflow from '@google-cloud/dialogflow';
import path from 'path';
import {Request, Response} from "express";

import { v4 as uuidv4 } from 'uuid';
import TaskDTO from './dto/task.dto';
import TaskRepository from './dao/task.dao';
import TaskServices from './service/task.service';


const sessionId = uuidv4(); 



dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1',MainRoute.router)
app.use('/aiTask',detectIntentAi)


const sessionClient = new dialogflow.SessionsClient({
    keyFilename:path.resolve(__dirname,process.env.DIALOGFLOW_KEY_PATH!)
})

async function detectIntentAi(req:Request,resp:Response){
    resp.status(201).send(await detectIntent(req.body.text,sessionId));
}

const projectId = process.env.DIALOGFLOW_PROJECT_ID!;

export const detectIntent = async (text: string, sessionId: string) => {
    
    const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);

    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text,
                languageCode: 'en',
            },
        },
    };

    const responses = await sessionClient.detectIntent(request);
    const queryResult = responses[0].queryResult;
    const task = queryResult?.parameters?.fields?.task?.stringValue || 'No task specified';
    const dueTime = queryResult?.parameters?.fields?.time?.stringValue || '12:00 PM';
    let dueDate = queryResult?.parameters?.fields?.date?.stringValue || 'No due date specified';
    if (dueDate !== 'No due date specified') {
        const date = new Date(dueDate);
        if (!isNaN(date.getTime())) {
            dueDate = date.toISOString().split('T')[0];
        } else {
            dueDate = new Date().toISOString().split('T')[0];
        }
    }
    const taskObj = new TaskDTO('1',task,'New Tasks',dueDate,dueTime)
    const response = await TaskServices.saveTask(taskObj);
    return response;
    
};

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
