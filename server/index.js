const express = require('express');
const cors = require('cors');
const redis = require('redis');

const redisClient = redis.createClient({
    socket: {
        host: '47.108.220.227',
        port: '6379',
    },
    password: '2440060505'
});

(async () => {
    await redisClient.connect();
})();

redisClient.on('err', err => {
    console.log('redis client error:', err);
});
redisClient.on('connect', () => {
    console.log('redis client connect.');
})
const app = express();

let port = 3000
// use cors middleware
app.use(cors({ origin: '*' }), express.json());

app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: 'Hello, World!'
    })
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).send('Got the data');
})

app.listen(port, () => console.log(`listening to port ${port}`));

(async () => {
    await redisClient.ACL_LIST().then(
        (value) => {
            console.log(value);
        },
        (err) => {
            console.log(err);
        }
    );
})();