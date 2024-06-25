import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/db.js'; 
import routes from './route/routes.js'; 

dotenv.config(); 


connectDB();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// route
app.use('/api', routes);

// Startet den server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});