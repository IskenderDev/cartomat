import { io, Socket } from "socket.io-client";

export class SocketService {
  private static instance: SocketService;
  private socket: Socket | null = null;

  private constructor() {}

  public static getInstance(): SocketService {
    if (!SocketService.instance) {
      SocketService.instance = new SocketService();
    }
    return SocketService.instance;
  }

  public connect(url: string, qrStr: string): Socket {
    this.socket = io(url, {
      query: { qr_str: qrStr },
      transports: ["websocket"],
      autoConnect: false,
    });

    this.socket.connect();
    return this.socket;
  }

  public on<T>(key: string, callback: (data: T) => void) {
    this.socket?.on(key, callback);
  }

  public off(key: string) {
    this.socket?.off(key);
  }

  public disconnect() {
    this.socket?.disconnect();
    this.socket = null;
  }
}
