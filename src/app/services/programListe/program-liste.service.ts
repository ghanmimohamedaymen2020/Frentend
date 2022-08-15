import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Programe } from 'src/app/models/programe';


@Injectable({
  providedIn: 'root'
})
export class ProgramListeService {
 

  constructor(private http : HttpClient) { }

  
  public getListePrograme():Observable<Programe[]> {
    console.log(this.http.get<Programe[]>("http://localhost:8082/DetailleTFJ"));
      return this.http.get<Programe[]>("http://localhost:8082/DetailleTFJ");
          
    }

}
