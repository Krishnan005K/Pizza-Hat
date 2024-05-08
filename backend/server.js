import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';



// app Config
const app = express();

const port = 4000;

// middlewares

app.use(express.json());
app.use(cors());

//db connection

connectDB();

//API endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))



app.get("/", (req, res) => {
    res.send("API Working");    
})

app.listen(port, () => {
    console.log(`server running on port: ${port}`);
})


