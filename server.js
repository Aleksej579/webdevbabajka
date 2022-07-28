const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001

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
const docRef = db.collection('List-text').doc('txt');

const createArticle = (request, response) => {
    const data = request.body
    docRef.set(data);
}

const articleList = (request, response) => {
    docRef.get().then((doc) => {
        response.json(doc.data())
    })
}

app.get('/', (req, res) => {
    res.send(`Home page our Express server`)
})

app.get('/api/article', articleList)
app.post('/api/article', createArticle)

app.listen(port)