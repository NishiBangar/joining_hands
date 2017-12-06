import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  volunteerList = [];


  // Get all the Volunteer list
  getVolunteerList(){
  	return this.volunteerList;
  }

  // Add Volunteer to the list
  addVolunteerToList(volunter){
  	
  	this.volunteerList.push(volunter);

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