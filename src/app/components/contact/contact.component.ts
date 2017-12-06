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
    // this.noImageUrl = '../../../assets/images/No_Image_Available.jpg';
  	this.noImageUrl = 'assets/images/No-Image-Available.jpg';
    // this.image = '../../../assets/images/NishiNew.jpg';
  	this.image = "assets/images/NishiNew.jpg";
    // this.bgImage = '../../../assets/images/Whitebackgroundwithcolorfulconfetti10173061.jpg';
    //this.bgImage = "assets/images/Whitebackgroundwithcolorfulconfetti10173061.jpg";
  	 
  }
  	
  

}
interface Contact{
	name : string,
	email : string,
	phone : string,
	linkedIn : string,
	image : string
}
