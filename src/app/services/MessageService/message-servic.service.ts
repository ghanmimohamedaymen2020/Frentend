import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Programe } from 'src/app/models/programe';

@Injectable({
  providedIn: 'root'
})
export class MessageServicService {
   sendObject = new Subject<any>();


  constructor() { }

  // communicateObject(obj) {
  //     this.sendObject.next(obj);
  // }
  sendMessage(msg :any){
this.sendObject.next(msg)
  }
  reciveidMessage() : Observable<any>{
return this.sendObject.asObservable() 
  }


}