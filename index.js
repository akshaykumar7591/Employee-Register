const express=require('express');
const app =express();
const host=3000;
const cors=require('cors');

let posts=[];

app.use(express.json());
app.use(cors());

let idx=1;
 app.post('/createPost',(req,res)=>{

 })