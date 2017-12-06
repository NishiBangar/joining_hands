import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  volunteerList = [];


  // Get all the Volunteer list
  getVolunteerList(){
  	console.log("Inside Get Volunteer list");
  	return this.volunteerList;
  }

  // Add Volunteer to the list
  addVolunteerToList(volunter){
  	console.log("Inside Add Volunteer service");
  	
  	this.volunteerList.push(volunter);

  	console.log(this.volunteerList);
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