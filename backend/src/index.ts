import express  from "express";
import dotenv from "dotenv";
import userRoutes from './routes/user.routes';
import funcionarioRoutes from './routes/funcionario.routes';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors({
  origin: 'http://localhost:5173'  // Permite seu frontend
}));

app.use(express.json());

app.use('/usuarios', userRoutes);
app.use('/funcionarios/',funcionarioRoutes);


app.listen(3000,() =>{
    console.log("API rodando porta 3000")
})