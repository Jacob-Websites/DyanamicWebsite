import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Use styleUrls instead of styleUrl
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService, private http: HttpClient) {}

  ngOnInit() {
    this.auth.getFounder().subscribe((data) => {
      console.log(data);
    });
  }

}
