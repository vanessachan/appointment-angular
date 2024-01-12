
import {Injectable} from "@angular/core";
import * as Stomp from 'stompjs';
import SockJS from 'sockjs-client';

import {Subject} from "rxjs";
@Injectable()
export class WebSocketApi {
  webSocketEndPoint: string = 'http://localhost:8080/ws';
  topic: string = "/topic/greetings";
  stompClient: any;
  private $onMessage = new Subject<any>();
  onMessage = this.$onMessage.asObservable();

  constructor(){

  }
  _connect() {

    console.log("Initialize WebSocket Connection");
    let ws= new SockJS(this.webSocketEndPoint);
    this.stompClient = Stomp.over(ws);

    this.stompClient.connect({},  (frame:any)=> {

      this.stompClient.subscribe(this.topic,  (sdkEvent:any)=> {
        console.log(sdkEvent)
        this.$onMessage.next(sdkEvent.body)


      });

    }, this.errorCallBack);

  };

  // on error, schedule a reconnection attempt
  errorCallBack(error:any) {
    console.log("errorCallBack -> " + error)
  }

}




