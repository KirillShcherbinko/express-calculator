import express from "express";
import { evaluate } from  "mathjs";

const app = express();
app.use(express.json());

// Отправляем результат вычисления
app.post("/calculate", (req, res) => {
    try {
        const { expression } = req.body;
        if (!expression) {
            throw new Error("Выражение обязательно");
        }

        const result = evaluate(expression);
        res.json({ result });
    } catch (err) {
        return res.status(400).json({message: err.message || "Неверное выражение"});
    }
})

const PORT = 5001;
app.listen(PORT, () => {
    console.log("Север 2 слушает на порту 5001");
})

