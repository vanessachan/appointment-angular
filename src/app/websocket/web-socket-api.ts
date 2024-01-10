
import {Injectable} from "@angular/core";
// @ts-ignore
import { Socket } from 'ngx-socket-io';

import {Subject} from "rxjs";
import {io} from "socket.io-client";
@Injectable()
export class WebSocketApi {
  // webSocketEndPoint: string = 'http://localhost:8080/ws';
  // topic: string = "/topic/greetings";
  // stompClient: any;
  // private $onMessage = new Subject<any>()
  //
  // constructor(){
  //
  // }
  // _connect() {
  //
  //   console.log("Initialize WebSocket Connection");
  //   let ws= new SockJS(this.webSocketEndPoint);
  //   this.stompClient = Stomp.over(ws);
  //
  //   this.stompClient.connect({},  (frame:any)=> {
  //
  //     this.stompClient.subscribe(this.topic,  (sdkEvent:any)=> {
  //       console.log(sdkEvent)
  //       this.$onMessage.next(sdkEvent.body)
  //
  //
  //     });
  //
  //   }, this.errorCallBack);
  //
  // };
  //
  // // on error, schedule a reconnection attempt
  // errorCallBack(error:any) {
  //   console.log("errorCallBack -> " + error)
  //   setTimeout(() => {
  //     this._connect();
  //   }, 5000);
  // }

  private webSocket: Socket;
  topic: string = "/topic/greetings"
  constructor() {


    this.webSocket = new Socket({
      url: "http://localhost:8080/ws",
      options: {transports: ['websocket']},



    });


  }

  // this method is used to start connection/handhshake of socket with server
  connectSocket(message:string) {
    this.webSocket.emit('connect', message);
  }

  // this method is used to get response from server
  receiveStatus() {
    return this.webSocket.fromEvent('/topic/greetings');
  }

  // this method is used to end web socket connection
  disconnectSocket() {
    this.webSocket.disconnect();
  }
}




