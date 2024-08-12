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
    const Organization=sessionStorage.getItem('OrgId')
    if(Organization){
      this.Auth.getRoutes(Organization).subscribe((data: any) => {
        this.RoutesData = data?.data.sort((a: any, b: any) => a.displayOrder - b.displayOrder);
      });
      this.Auth.getOrganization(Organization).subscribe((data:any)=>{
        this.headerData=data?.data
      })
    }
   
    
  }

}
