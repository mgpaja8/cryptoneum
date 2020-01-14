import * as io from 'socket.io-client';
import store from '../store';
import { updated } from '../actions/currencyActions';
import { updatedStat } from '../actions/statsActions';

export class CryptoneumWebsocket {
  private socket: SocketIOClient.Socket;

  constructor() {
    this.socket = io.connect('http://localhost:8080');

    this.socket.on(SocketEvents.QUOTE_UPDATED, this.handleQuoteUpdated);
    this.socket.on(SocketEvents.STATS_UPDATED, this.handleStatsUpdated);
  }

  private handleQuoteUpdated = (data: any) => {
    updated(store.dispatch)({
      currencyId: data.id,
      price: data.quote.price,
      marketCap: data.quote.marketCap,
      lastUpdated: new Date(data.quote.lastUpdated).getTime()
    });
  }

  private handleStatsUpdated = (data: any) => {
    updatedStat(store.dispatch)(data);
  }
}

const SocketEvents = {
  QUOTE_UPDATED: 'QUOTE_UPDATED',
  STATS_UPDATED: 'STATS_UPDATED'
};
