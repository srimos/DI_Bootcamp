import express from 'express';
import path from "path";
import { fileURLToPath } from "url";
import helmet from "helmet";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    // Add more emoji objects
];

// app.use(
//   helmet.contentSecurityPolicy({
//     directives: {
//       defaultSrc: ["'self'"],
//       connectSrc: ["'self'", "http://localhost:5002"],
//       scriptSrc: ["'self'"],
//       styleSrc: ["'self'", "'unsafe-inline'"],
//       imgSrc: ["'self'", "data:"],
//     },
//   })
// );

// get random item from array
function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// shuffle items
function shuffle(items) {
    return items.slice().sort(() => 0.5 - Math.random())
}

function newQuestion (emojis){
    const correctAnswer = randomItem(emojis)
    const wrongAnswers = shuffle(emojis)
        .filter(e => e.name !== correctAnswer.name)
        .slice(0,2)
        .map(e => e.name)
    const allAnswers = shuffle([correctAnswer.name,...wrongAnswers])

    return { 
        emoji: correctAnswer.emoji,
        correctAnswer: correctAnswer.name,
        options: allAnswers
    }
}

function checkAnswer (answer,correctAnswer){
    if (answer==correctAnswer){
        alert("Correct!")
        score+=1
    } else {
        alert("Wrong! Try again!")
        }
  }

app.listen(5002, () => {
    console.log("Server is listening on port 5002");
});

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
    let score=0
})

app.get("/api/question",(req,res)=>{
    res.json(newQuestion(emojis));
})

app.post("/api/checkAnswer",(req,res)=>{
    console.log("checkAnswer running")
    const { currentEmoji, userAnswer } = req.body;
    console.log(currentEmoji)
    console.log(userAnswer)
    const correct = emojis.find(e => e.emoji === currentEmoji)?.name;
    console.log(correct)
    res.json({ correct: userAnswer === correct });
});