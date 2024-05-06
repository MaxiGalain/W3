import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CitiesServicesService {

  private apiUrl = '/api/cities';


  constructor(
    private http: HttpClient
  ){}

/*   obtenerUsuarios(): Observable<Cities[]> {
    return this.http.get<Cities[]>(this.apiUrl);
  } */


}