var messageServer = require('./src/server');

messageServer(3000)
    .then(function(server) {
        console.log('Message server listening at %s:%s', server.address().address, server.address().port);
    });
