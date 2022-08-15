  import { Component, EventEmitter, OnInit, Output } from '@angular/core';
  import { Router } from '@angular/router';
  import { Programe } from '../models/programe';
  import { MessageServicService } from '../services/MessageService/message-servic.service';
  import { ProgramListeService } from '../services/programListe/program-liste.service';


  @Component({
    selector: 'app-liste-prog',
    templateUrl: './liste-prog.component.html',
    styleUrls: ['./liste-prog.component.css']
  })
  export class ListeProgComponent implements OnInit {

  ListeProgrames : Programe[] ;
    programeFromListePrograme: Programe  ;

    constructor(private serviceListPrograme : ProgramListeService , private router : Router, private _messageService : MessageServicService) { }

    ngOnInit(): void {
      this.getPrograme()
    }
    getPrograme() {
      return this.serviceListPrograme.getListePrograme().subscribe(data=> this.ListeProgrames = data )
        }

//      sendObjectToDetail(program){
//           //  this._messageService._ProgramFromList.subscribe(program)
// this._messageService.communicateObject(this.programeFromListePrograme);
//           }
sendObjectToDetail(message){
  this._messageService.sendMessage(message)
}

        
        
  }
