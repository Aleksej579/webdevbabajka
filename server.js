const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001
// const { Pool } = require("pg");

// const pool = new Pool({
//     user: "easyyes_user",
//     database: "easyyesdb",
//     password: "12345678",
//     port: 5432,
//     host: "localhost",
// });

const cors = require('cors');
app.use(cors())

app.use(bodyParser.json({ limit: '50mb' }))
app.use(
    bodyParser.urlencoded({
        limit: '50mb',
        extended: true,
    })
)


const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const serviceAccount = require('./dbFirebasekey.json');
initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();
// let count = 0
const docRef = db.collection('articles').doc(`${Math.random()}`);

const createArticle = (request, response) => {
    const data = request.body
    docRef.set(data);
    // count++
}




app.get('/', (req, res) => {
    res.send(`Home page our Express server`)
})

// const articleList = (request, response) => {
//     pool.query(`SELECT id FROM posts`, (error, results) => {
//         if (error) {
//             throw error
//         }
//         response.status(200).json(results.rows)
//     })
// }

// const article = (request, response) => {
//     var id = request.params.id;
//     pool.query(`SELECT * FROM posts WHERE id=${id}`, (error, results) => {
//         if (error) {
//             throw error
//         }
//         response.status(200).json(results.rows)
//     })
// }

// const createArticle = (request, response) => {
//     const { data } = request.body
//     pool.query('INSERT INTO posts (data) VALUES ($1)', [data], (error, results) => {
//         if (error) {
//             throw error
//         }
//     })
// }

// app.get('/api/article', articleList)
// app.get('/api/article/:id', article)
app.post('/api/article', createArticle)

app.listen(port)