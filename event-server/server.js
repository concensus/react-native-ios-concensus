

const app = require('express');

const Web3 = require('web3');
const web3 =  new Web3();

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

const options = {};

eventEmitter.on('vote', (option, vote) => {
    if (options[option]) {
        options[option] += 1;
    } else {
        options[option] = 1;
    }
});

const WebSocket = require('ws');
const wss = new WebSocket.Server({port: 3001});

wss.on('connection', ws => {
    ws.on('message', message => {
        console.log('Received: %s', message);
    });

    ws.send('Connection opened');
});

let subscription = '';

app.get('/votes', (req, res) => {
    subscription = web3.eth.subscribe('logs', {
        address: req.query.address,
        topics: ['vote']
    }, (error, result) => {
        if (error) {
            console.error(`Error subscribing to address, ${req.query.address}, ${error}`);
            res.status(404).end();
        } else {
            res.send(`Successfully subscribed to logs from ${subscription.id}`);
        }
    });
});

subscription.on('data', (result) => {
    eventEmitter.emit('vote', result.option, result.vote);
});

app.post('/votes', (req, res) => {
    subscription.unsubscribe((error, success) => {
        if (error) {
            console.error(`Error unsubscribing from ${subscription.id}`);
            res.status(404).end();
        } else {
            wss.broadcast = () => {
                wss.clients.forEach(client => {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(options);
                    }
                });
            };

            wss.broadcast = () => {
                wss.clients.forEach(client => {
                    if (client.readyState === WebSocket.OPEN) {
                        client.close();
                    }
                });
            };

            res.send(`Successfully unsubscribed from ${subscription.id}`);
        }
    });
});

process.on('exit', () =>{ 
    wss.close();
});

const server = app.listen(3000, () => {
    console.log(`App is listening on port ${server.address().port}...`);
});