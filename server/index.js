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

// Store sending data into redis
// set function to async arrow function and instantly run it, or it will
// cause await error
app.post('/', (req, res) => {
    console.log(req.body);
    const body = req.body;
    // console.log(`
    //     ${body["userEmail"]}, userName: ${body["userName"]}, userPhone: ${body["userPhone"]}
    // `);
    try {
        (async () => {
            const result = await redisClient.HSET(body["userEmail"], [
                ['userName', body["userName"].toString()],
                ['userPhone', body["userPhone"].toString()]
            ]);
            console.log(`HSET success, result ${result}`);
        })();
    } catch (e) {
        console.log(`HSET error ${e}`);
    }
    res.status(200).send('Got the data');
})

app.listen(port, () => console.log(`listening to port ${port}`));



