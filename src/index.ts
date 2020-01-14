import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as socketIo from 'socket.io';
import app from './server';
import { onServerStart } from './lib';

const PORT = 8080;
const server = require('http').Server(app);
export const io = socketIo(server);

createConnection()
  .then(() => {
    io.on('connection', socket => {
      console.log('Socket connected', socket.id);

      socket.on('disconnect', () => {
        console.log('Socket disconnected', socket.id);
      });
    });

    server.listen(PORT, () => console.log('Listening on port: ', PORT));

    onServerStart()
      .then(() => console.log('On server start hook completed.'))
      .catch(e => console.log('On server start hook error: ', e));
  })
  .catch(e => console.log('Something went wrong while establishing db connection.'));
