import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-enterpage',
  standalone: true,
  imports: [],
  templateUrl: './enterpage.component.html',
  styleUrl: './enterpage.component.scss'
})
export class EnterpageComponent {
  constructor(private route:Router){}
navigateforenter(){
  console.log("entered")
  this.route.navigate(['/dashboard'])
}
}
