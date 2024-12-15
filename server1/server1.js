import axios from "axios";
import express from "express";
const app = express();


app.get("/expression", async (res, req) => {
    const expression = req.query.expression;
    if (!expression) {
        return res.status(400).json({message: "Параметр выражения обязательный"});
    } 
    try {
        const response = await axios.get("http://server2:5001/calculate", { expression });
        res.status(200).json({result: `Результат вычисления ${response.data.result}`});
    } catch (err) {
        res.status(500).json({message: err.message || "Ошибка при вычислении"});
    }
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Сервер 1 запущен на порту ${PORT}`);
}) 