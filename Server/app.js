const express = require('express');
const cors = require('cors')
const { MongoClient, ObjectId } = require('mongodb')
const mongodburl = 'mongodb://localhost:27017'
const mongoClient = new MongoClient(mongodburl)

const app = express();
app.use(express.json())
app.use(cors())

app.post('/newuser', async (req, res) => {
    await mongoClient.connect();
    const db = mongoClient.db('management');
    const coldb = db.collection('student');
    await coldb.insertOne(req.body);
    res.send({
        status: true,
        result: "Inserted"
    })
    //http://localhost:1609/new
})
app.get('/all', async (req, res) => {
    await mongoClient.connect();
    const db = mongoClient.db('management');
    const coldb = db.collection('student');
    const dbdata = await coldb.find().toArray();
    res.json(dbdata);
    // http://localhost:1609/all
})

app.delete('/removeuser/:id', async (req, res) => {
    await mongoClient.connect();
    const db = mongoClient.db('management');
    const coldb = db.collection('student');

    const data = await coldb.deleteOne({ _id: new ObjectId(req.params.id) })
    console.log(data);
    res.json({
        ok: true,
        message: "user removed"
    })
    //http:/localhost:1609/removeuser/${id}
})
app.get('/getone/:id', async (req, res) => {
    var id = req.params.id
    await mongoClient.connect();
    const db = mongoClient.db('management');
    const coldb = db.collection('student');
    const data = await coldb.findOne({ _id: new ObjectId(id) })
    if (!data) {
        res.json({
            ok: false,
            result: "No user exists"
        })
    } else {
        res.json({
            ok: true,
            result: data
        })
    }
    //http:/localhost:1609/getone/${id}
}
)

app.put('/updateuser', async (req, res) => {
    const newdata = req.body
    const id = req.body._id
    delete newdata._id
    await mongoClient.connect();
    const db = mongoClient.db('management');
    const coldb = db.collection('student');

    const data = await coldb.updateOne({ _id: new ObjectId(id) }, { $set: newdata })
    res.send('updateuser')
    //http:/localhost:1609/updateuser
})

app.listen('1609', () => {
    console.log("server started..");
})