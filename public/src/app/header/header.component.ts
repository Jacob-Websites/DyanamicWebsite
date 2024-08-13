import { Component } from '@angular/core';
import { AuthService } from '../Core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  RoutesData: any;
  headerData: any;
  constructor(private Auth:AuthService){}
  ngOnInit(){
    this.Auth.getSites().subscribe((data:any)=>{
      this.RoutesData=data?.data
      this.loadData();
    })
  }
  loadData(){
    const findAuthData=this.RoutesData?.find((x: { link: string; })=>x.link===window.location.href)
      this.Auth.getRoutes(findAuthData.OrganizationId).subscribe((data: any) => {
        this.RoutesData = data?.data.sort((a: any, b: any) => a.displayOrder - b.displayOrder);
      });
      this.Auth.getOrganization(findAuthData.OrganizationId).subscribe((data:any)=>{
        this.headerData=data?.data[0]
        console.log(this.headerData)
      })
  }

}
