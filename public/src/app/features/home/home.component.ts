import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Core/services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Use styleUrls instead of styleUrl
})
export class HomeComponent implements OnInit {
  RoutesData: any;
  aboutData: any;

  constructor(private auth: AuthService, private http: HttpClient,private location: Location) {}

  ngOnInit() {
   
    this.auth.getSites().subscribe((data:any)=>{
      this.RoutesData=data?.data
      console.log(this.RoutesData)
      this.loadAbout()
    })
  }
  
  loadAbout(){
    const findAuthData=this.RoutesData?.find((x: { link: string; })=>x.link===window.location.href)
      this.auth.getAbout(findAuthData.OrganizationId).subscribe((data:any)=>{
        this.aboutData=data?.data?.result
      })
    
  }

}
