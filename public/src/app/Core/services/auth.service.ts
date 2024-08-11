import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})

export class AuthService {
    
  //private apiUrl = 'https://jssw-api.onrender.com';
  private apiUrl = 'https://jssw-api.onrender.com'
  updatedaata: any;

  constructor(private http: HttpClient,private router:Router) {}
getFounder(){
  return this.http.get(`${this.apiUrl}/api/getFounders`)
}
getRoutes(){
  return this.http.get(`${this.apiUrl}/api/GetRoutes`)
}
 
  
}
interface YouTubeResponse {
    items: any[];
  }
  
