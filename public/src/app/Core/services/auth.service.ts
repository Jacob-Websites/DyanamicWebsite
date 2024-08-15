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
  private apiUrl = 'http://34.173.79.170:3000'
  updatedaata: any;

  constructor(private http: HttpClient,private router:Router) {}
getFounder(){
  return this.http.get(`${this.apiUrl}/api/getFounders`)
}
getRoutes(id:string){
  return this.http.get(`${this.apiUrl}/api/GetRoutes?id=${id}`)
}
getSites(){
  return this.http.get(`${this.apiUrl}/api/getSites`)
}
getOrganization(id:string){
  return this.http.get(`${this.apiUrl}/api/organizations?id=${id}`)
}
getAbout(id:string){
  return this.http.get(`${this.apiUrl}/api/GetAbout?id=${id}`)
}
  
}
interface YouTubeResponse {
    items: any[];
  }
  
