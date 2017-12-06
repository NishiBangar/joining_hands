import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	noImageUrl : any;
	contact : Contact;
	image : string;
  bgImage : string;
	 
  constructor() { }
 
  ngOnInit() {
  	this.noImageUrl = '../../../assets/images/No_Image_Available.jpg';
  	this.image = "../../../assets/images/nishi_new.jpg";
    this.bgImage = "../../../assets/images/white-background-with-colorful-confetti_1017-3061.jpg";
  	 
  }
  	
  

}
interface Contact{
	name : string,
	email : string,
	phone : string,
	linkedIn : string,
	image : string
}
