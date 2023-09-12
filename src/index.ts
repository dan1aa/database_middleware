import express from 'express'; 
import cors from 'cors'; 
import InternRouter from './routes/intern.route';

const app = express();

app.use(express.json()); 
app.use(cors({ origin: '*' })); 

app.use('/api', InternRouter); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is online on port ${PORT}`);
});