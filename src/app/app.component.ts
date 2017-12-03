import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcomet to Joining Hands App';
  public isCollapsed = true;

  constructor(private router : Router){
  	console.log("Main Contructor working");
  }

  ngOnInit(){
  	console.log("ngOnInit working");
  }
}
