import express  from "express";
import dotenv from "dotenv";
import userRoutes from './routes/user.routes';
import funcionarioRoutes from './routes/funcionario.routes';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/usuarios', userRoutes);
app.use('/funcionarios/',funcionarioRoutes);


app.listen(3000,() =>{
    console.log("API rodando porta 3000")
})