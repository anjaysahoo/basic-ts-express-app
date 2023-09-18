import express, {Request, Response, NextFunction} from "express";
import todosRoutes from "./routes/todos";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ message: err.message });
})

app.use(todosRoutes);

app.listen(3000);
