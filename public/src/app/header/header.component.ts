import { Component } from '@angular/core';
import { AuthService } from '../Core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  RoutesData: any;
  constructor(private Auth:AuthService){}

  ngOnInit(){
    this.Auth.getRoutes().subscribe((data:any)=>{
      console.log(data)
      this.RoutesData=data?.data?.result;
      console.log(this.RoutesData)
    })
  }

}
