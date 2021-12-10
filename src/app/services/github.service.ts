import { Injectable } from '@angular/core';
import { HttpClient   } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(
    private http:HttpClient  
  ) { }

  private url = 'https://api.github.com/users/'; 
  getir(user:string){
    return this.http.get(this.url+user); 
  } 
  
}
