import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.get('/',(req,res)=>{res.send("hello to memories API")});
// app.listen(5001);
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());
app.use('/posts',postRoutes); //it's means every routes of postRoutes will start with 'http://localhost:5000/posts/' instead of 'http://localhost:5000/'


const PORT = process.env.PORT|| 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));