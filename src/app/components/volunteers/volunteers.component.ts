import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.css']
})
export class VolunteersComponent implements OnInit {

	volunteerList : Volunteer[];
	noImageUrl : any;
  	constructor(private dataService : DataService) { }

  	ngOnInit() {
  		this.noImageUrl = '../../../assets/images/No_Image_Available.jpg';
  		// Get all the Volunteer list on load
  		this.volunteerList = this.dataService.getVolunteerList();
  		console.log("Volunter List ");
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