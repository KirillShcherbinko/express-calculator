import axios from "axios";
import express from "express";

const app = express();
app.use(express.json());

function convertSpacesToPlus(expression) {
    return expression.replace(/(?<=\S) (?=\S)/g, '+');
}

app.get("/expression", async (req, res) => {
    const expression = convertSpacesToPlus(req.query.expression);
    if (!expression) {
        return res.status(400).json({message: "Параметр выражения обязательный"});
    } 
    try {
        const response = await axios.post("http://server2:5001/calculate", { expression });
        res.status(200).json({result: `Результат вычисления ${response.data.result}`});
    } catch (err) {
        res.status(500).json({message: "Ошибка при вычислении"});
    }
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Сервер 1 запущен на порту ${PORT}`);
}) 