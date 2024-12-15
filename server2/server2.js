import express from "express";
import { evaluate } from  "mathjs";

const app = express();
app.use(express.json());

// Отправляем результат вычисления
app.post("/calculate", (req, res) => {
    const expression = decodeURIComponent(req.body.expression);
    if (!expression) {
        return res.status(400).json({message: ("Выражение обязательно")});
    }
    try {
        const result = evaluate(expression);
        console.log(result);
        res.json({ result });
    } catch (err) {
        res.status(400).json({message: "Неверное выражение"});
    }
})

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Сервер 2 запущен на порту ${PORT}`);
})

