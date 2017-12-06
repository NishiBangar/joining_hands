import { Component, OnInit, TemplateRef } from '@angular/core';
import { DataService } from '../../services/data.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DomSanitizer } from '@angular/platform-browser';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	vol : Volunteer;
	//************ Carousel Slides ***************
	carouselSlides : any[];
	myInterval : number;
	noWrapSlides : boolean;
	activeSlide : number;
	noPauseSlides : boolean;


  //************* Youtube video embed *************
  safeUrl : any;
  videoUrl : string;

  //***********************************************

  bgImage : any;
  constructor(private modalService: BsModalService, private sanitizer : DomSanitizer,
              private dataService : DataService) { }

  ngOnInit() {
  	console.log("Home component's ngOnInit()");
     

    //this.bgImage = '../../../assets/images/tomorrowland-2013-aftermovie.jpg';

    //*********** Youtube video embed **************
      this.videoUrl = "https://www.youtube.com/embed/caYdSWljo1g?autoplay=1&loop=1&playlist=caYdSWljo1g&amp;showinfo=0";
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);

    //**********************************************


  	// Volunteer Data
  	this.vol = {
  		firstName : "",
  		lastName : "",
  		address : {
  			country : "",
  			state : "",
  			city : "",
  			zip : 0
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

  	// Carousel Slide Details
  	this.myInterval = 4000;
	this.noWrapSlides = false;
	//this.activeSlide : 1;
	this.noPauseSlides = true;
  	
  	this.carouselSlides = [
  		{

  			title : "Celebrate Music",
  			text : "This year’s music festivals will go down in history.",
  			image : "assets/images/LetsMakeHistoryTogether.jpg"
  		 },
  		 {

  		 	title : "Travel back in time and Relive the Madness",
  		 	text : " Hundreds and thousands of ravers converge every year in diferent parts of the world to celebrate music ",
  		 	image : "assets/images/maxresdefault.jpg"
  		 },
  		 {

  		 	title : "Life In Color Festival",
  		 	text : "Festival goers are gathering at Miami\'s Sun Life Stadium for the Life In Color festival",
  		 	image : "assets/images/ReliveUltraMiami1.jpg"
  		 },
  		
  		
  		 {

  		 	title : "The Revival",
  		 	text : " The Ultimate Ultra Music Festival Revival ",
  		 	image : "assets/images/1502623_10152132683972739_1921784036_o-1.jpg"
  		 },
  		 {

  		 	title : "UNITED WE DANCE",
  		 	text : "The festival movement where you lose yourself",
  		 	image : "assets/images/12779267_10153457458222078_8158487091733287629_o.jpg"
  		 },
  		 {

  		 	title : "Event of Electronics",
  			text : "Withness the premier event of electronics",
  		 	image : "assets/images/miami-aftermovie-2017-thumb.jpg"
  		 },
  		 {

  		 	title : "Surprise Set",
  		 	text : " Experience Surprise Set From Ultra Music Festival Miami",
  		 	image : "assets/images/ReliveUltraMiami2.jpg"
  		 },
  		 {

  		 	title : "The Ultimate Paranoia",
  		 	text : "The Ultimate paranoia of music",
  		 	image : "assets/images/tomorrowland-2013-aftermovie.jpg"
  		 },
  		 {

  		 	title : "UltraMania",
  		 	text : "  Ultra is one of the biggest music festivals in the world with 330,000 participants. ",
  		 	image : "assets/images/ultra-music-festival-2016-miami.jpg"
  		 },
  		 {

  			title : "Be part of the Journey",
  		 	text : " Join us on our journey as we relive the unforgettable weekend that was Ultra Music Festival ",
  		 	image : "assets/images/Screen-Shot-2016-05-04-at-1.38.59-AM.png"
  		 },
  		

  	];

  	 

  }

  // addVolunter()
  addVolunteer(volunteer: Volunteer){
    console.log("*************************************************************");
  	console.log("******************** Volunteer to Add ***********************  :  ");
    console.log("*************************************************************");
  	console.log(volunteer);
    console.log("*************************************************************");
    console.log("*************************************************************");

    // Add Volunteer to Service
    this.dataService.addVolunteerToList(volunteer);
  }

  // ********** Modal ************
  message : string;
  modalRef: BsModalRef;

   openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
 
  confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef.hide();
  }
 
  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
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