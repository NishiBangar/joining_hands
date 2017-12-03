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
  	this.vol.firstName = "";
  	this.vol.lastName = "";
  	this.vol.address.country = "";
  	this.vol.address.state = "";
  	this.vol.address.city = "";
  	this.vol.address.zip = 0;
  	this.vol.gender = "";
  	this.vol.email = "";
  	this.vol.telephone = "";
  	this.vol.experience = "";
  	this.vol.skills = [
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
  		}
  		{
  			name : 'Bartender Experience',
  			selected : false
  		}
  		{
  			name : 'Food and Hygiene Certificate',
  			selected : false
  		}
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
  	];

  }

  // addVolunter()
  addVolunter(){
  	console.log("Volunteer  :  ");
  	console.log(this.vol);
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