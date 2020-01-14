import { io } from './index';

export function emit(event: string, data: any): void {
  io.emit(event, data);
}
