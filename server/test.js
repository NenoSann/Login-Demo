const redis = require('redis');
const redisClient = redis.createClient({
    socket: {
        host: '127.0.0.1',
        port: '6379',
    },
});