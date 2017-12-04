import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	vol : Volunteer;

  constructor() { }

  ngOnInit() {
  	console.log("Home component's ngOnInit()");

  	this.vol = {
  		firstName : "",
  		lastName : "",
  		address : {
  			country : "",
  			state : "",
  			city : "",
  			zip : ""
  		},
  		gender : "",
  		email : "",
  		telephone : "",
  		experience : "",
  		skills : [
	  		{
	  			name : 'Certified Plumber',
	  			selected : false
	  		},
	  		{
	  			name : 'Carpentry Experience',
	  			selected : false
	  		},
	  		{
	  			name : 'Certified Electircian',
	  			selected : false
	  		},
	  		{
	  			name : 'Bartender Experience',
	  			selected : false
	  		},
	  		{
	  			name : 'Food and Hygiene Certificate',
	  			selected : false
	  		},
	  		{
	  			name : 'First Aid Course',
	  			selected : false
	  		},
	  		{
	  			name : 'Fork List Drive Certificate',
	  			selected : false
	  		},
	  		{
	  			name : 'Driver\'s Licence (Type B)',
	  			selected : false
	  		}
  		]
  	};

  	console.log("Volunteer values");
  	console.log(this.vol);

  }

  // addVolunter()
  addVolunteer(volunteer: Volunteer){
  	console.log("Volunteer  :  ");
  	console.log(volunteer);
  }
}


interface Volunteer{
	firstName : string,
	lastName : string,
	address : {
		country : string,
		state : string,
		city : string,
		zip : number
	},
	gender : string,
	email : string,
	telephone : string,
	skills : any[],
	experience : string

}