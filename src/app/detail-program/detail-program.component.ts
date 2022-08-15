import { Component,  OnInit } from '@angular/core';
import { Programe } from '../models/programe';
import { MessageServicService } from '../services/MessageService/message-servic.service';

@Component({
  selector: 'app-detail-program',
  templateUrl: './detail-program.component.html',
  styleUrls: ['./detail-program.component.css']
})
export class DetailProgramComponent implements OnInit {

  ProgramFromList : any;

  constructor(private _messageService : MessageServicService) { }

  ngOnInit() { 
   // this._messageService._ProgramFromList.subscribe(message=>{ console.log(this.ProgramFromList)})
  //  this._messageService._ProgramFromList.subscribe(this.ProgramFromList)
  //  console.log(this.ProgramFromList)

  this._messageService.reciveidMessage().subscribe(msg=>{this.ProgramFromList= msg})
  console.log(this.ProgramFromList)
 }
}


