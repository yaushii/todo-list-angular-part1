import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/';


@Injectable()
export class ApiService{
    

constructor(private http: HttpClient){}

APIurl = 'http://localhost:8080/tasks';
Apiurl1 = 'http://localhost:8080/tasks/';
fetchPoeple(): Observable<object> {
    return this.http.get(this.APIurl);
    
    
}
delete(id: number): Observable<object> {
    return this.http.delete(this.Apiurl1 + id );
    
}



}