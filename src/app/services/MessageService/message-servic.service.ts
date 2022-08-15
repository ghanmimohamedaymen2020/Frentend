import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Programe } from 'src/app/models/programe';

@Injectable({
  providedIn: 'root'
})
export class MessageServicService {
   sendObject = new Subject<Programe>();


  constructor() { }

  // communicateObject(obj) {
  //     this.sendObject.next(obj);
  // }
  sendMessage(msg :Programe){
this.sendObject.next(msg)
  }
  reciveidMessage() : Observable<Programe>{
return this.sendObject.asObservable() 
  }


}