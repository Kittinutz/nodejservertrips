exports.socket = (io) => {
    io.on('connection', (socket) => {
        console.log('userconnect')
        socket.emit("kittinutPramhan","helloworld")
        socket.on('subscribe', (username) => {
            console.log(username);
            socket.join(username);
        });

        socket.on('sendmessage', (data) => {
            console.log('payload', data.to);
            socket.broadcast.emit(data.to, {
                from: data.from,
                to: data.to,
                message: data.message
            });

        })
    });

};
exports.record = (data) => {
    console.log('data is on record', data)
};