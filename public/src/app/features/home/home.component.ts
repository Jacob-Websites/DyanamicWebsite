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
    // this.auth.getFounder().subscribe((data) => {
    //   console.log(data);
    // });
    this.auth.getSites().subscribe((data:any)=>{
      this.RoutesData=data?.data
      this.loadData()
      this.loadAbout()
    })
  }
  loadData(){
    
    const findAuthData=this.RoutesData?.find((x: { link: string; })=>x.link===window.location.href)
    sessionStorage.setItem('OrgId',findAuthData.OrganizationId)
  }
  loadAbout(){
    const Organizations=sessionStorage.getItem('OrgId');
    if(Organizations){
      this.auth.getAbout(Organizations).subscribe((data:any)=>{
        console.log(data)
        this.aboutData=data?.data?.result
        console.log(this.aboutData)
      })
    }
  }

}
