const express = require('express');
const cors = require('cors');
const redis = require('redis');

const redisClient = redis.createClient();
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




redisClient.on('err', err => {
    console.warn('redis client error:', err);
});

function redisConnect() {
    try {
        redisClient.connect(6379, '127.0.0.1');
        console.log('redis connect successfully');
    } catch (redisConnectError) {
        console.warn(redisConnectError);
    }
};
redisConnect();
redisClient.ping("Are you there?");