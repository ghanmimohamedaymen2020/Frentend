import { Component,  OnInit } from '@angular/core';
import { Programe } from '../models/programe';
import { MessageServicService } from '../services/MessageService/message-servic.service';
import { ProgramListeService } from '../services/programListe/program-liste.service';

@Component({
  selector: 'app-detail-program',
  templateUrl: './detail-program.component.html',
  styleUrls: ['./detail-program.component.css']
})
export class DetailProgramComponent implements OnInit {
 strc : string = "%20" 
   ProgramFromList : Programe;
  lsteElement : any
sercheProgram : string
  ListeProgramesFlter : any[]
  ListeProgrames: Programe[];
  finalSearche : string
  constructor(private _messageService : MessageServicService , private _ListProgrameService : ProgramListeService) { }

  ngOnInit() { 
  this._messageService.reciveidMessage().subscribe(msg=>{this.ProgramFromList= msg})
  
 }

getname(){
  
this.sercheProgram = this.ProgramFromList.prog
this.finalSearche = this.sercheProgram
for  (let i = this.sercheProgram.length; i <29 ; i++){
this.sercheProgram.concat(this.strc)
}
console.log(this.sercheProgram)


}
 
getPrograme() {
  console.log(this.finalSearche)

  return this._ListProgrameService.getListeProgrameByName(this.sercheProgram).subscribe(data=> this.ListeProgrames = data )
    }
  


}


