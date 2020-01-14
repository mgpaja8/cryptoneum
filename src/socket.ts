import { io } from './index';

export function emit(event: string, data: any): void {
  io.emit(event, data);
}

export const SocketEvents = {
  QUOTE_UPDATED: 'QUOTE_UPDATED',
  STATS_UPDATED: 'STATS_UPDATED'
};
