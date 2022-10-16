import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Key } from 'protractor';




var url = environment.url

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { 
  }



public selectSports(){
let header = new HttpHeaders()
header = header.append('Server', '1')
return this.http.get(url + '/sports/select/',  {headers: header} );
};

public selectCenter(){
  let header = new HttpHeaders()
  header = header.append('Server', '1')
  return this.http.get(url + '/city/select/',  {headers: header} );
  };

public selectCity(){
 let header = new HttpHeaders()
 header = header.append('Server', '1')
 return this.http.get(url + '/center/select/',  {headers: header} );
 };

public sendEnquiry(body){
  let header = new HttpHeaders()
  header = header.append('Server', '1')
  return this.http.post(url + '/center/select/', body,  {headers: header} );
   };

public login(body){
  let header = new HttpHeaders()
  header = header.append('Server', '1')
  return this.http.post(url + '/_Login/', body,  {headers: header} );
   };

   public event(){
    let header = new HttpHeaders()
    header = header.append('Server', '1')
    return this.http.get(url + '/event/select',  {headers: header} );
    };

}
