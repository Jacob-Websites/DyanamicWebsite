import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})

export class AuthService {
    
  private apiUrl = 'https://jssw-api.onrender.com/';
  updatedaata: any;

  constructor(private http: HttpClient,private router:Router) {}

  login(obj:any) {
    console.log(obj)
   
    return this.http
      .post<{ token: string }>(`${this.apiUrl}/login`,
        obj
      )
      .pipe(
        tap((response) => {
          //console.log(response)
          localStorage.setItem('token', response.token);
        })
      );
  }
 
logout()
{
  
  localStorage.removeItem("token");
  localStorage.removeItem("logindetails");
  localStorage.removeItem("otpdetails");
  this.finalcheck()
}
finalcheck()
{
  if(localStorage.getItem('token') === null)
  {
    this.router.navigate(['/']);
  }
}

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return !!this.getToken();
  }
  
}
