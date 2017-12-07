# [JOINING HANDS](https://nishibangar.github.io/joining_hands/) 

## Introduction
 *Joining hands* is an application which makes it easy to volunteer to work at an event. Here people can learn about the need and cause of volunteering, witness general introduction and details of the events, know about the benefits of volunteering. 

This application has been hosted in *Github Pages* and can be accessed through  https://nishibangar.github.io/joining_hands/

## Technologies Used

This is a front-end application and is built mainly using the latest version of Angular along supporting tools and frameworks.

* **NodeJS** - v 6.9.0 or higher
* **NPM** - v 3 or higher
* **Angular CLI v1.5.5** - A command line interface to scaffold and build angular apps using nodejs        
                                           style (commonJs) modules.
* **Angular v4 or latest** - Front-end framework to build application
* **TypeScript v2.4.2** - Typed superset of JavaScript that complies to plain JavaScript
* **Bootstrap 3** - Front-end web framework for designing websites and web applications
* **ngx-bootstrap** - Bootstrap components powered by Angular
* **angular-cli-ghpages v0.5.2** - To deploy angular application in GitHub pages


## How to Run/Access 
You can run this application in 2 ways.
1. Use in GitHub pages using this [link](https://nishibangar.github.io/joining_hands/), where the application is actually hosted
2. Running your application in localhost, port 4200

#### GitHub pages
This is the easiest way to access this application. Just use [https://nishibangar.github.io/joining_hands/](https://nishibangar.github.io/joining_hands/) to access the running application hosted in GitHub pages.

#### Run application in **Localhost**
1. Clone/Download this [repository](https://github.com/NishiBangar/joining_hands) in your local file system.
2. Navigate to the project folder in your terminal and run the following command to install **Node modules** and necessary dependencies from **package.json** file. 
  
       npm install 
3. Run **ng serve** for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

        ng serve
4. Finally, Navigate to **http://localhost:4200/** in your preferred browser, this will render **JOINING HANDS** application.

## How to Use

Once you have access to application, you are initially rendered with the *Home* page view by default.
 **JOINING HANDS** accumulates 4 views
   - Home
   - About
   - Volunteers
   - Contact

####  Home
This is the introduction view, that talks about the need and cause of the application. It generally highlights, 
  - What it serves?
  - General Introduction about the Event.
  - What a volunteer can Experience?
  - How one can register?

In addition to this, the view renders a set of *colourful pictures* of the events in a slider at the top of the page,  a *Promo Video* of the event placed at the bottom of the page, which automatically plays on page load and eventually looping.

The whole contents of the page are packed in an attractive parallax view to benefit user interface.

A Volunteer can **register** oneself, by filling out the details in the registration form set up.
The form contains the following fields, with necessary validations taken care.
  - First name
  - Last name 
  - Email
  - Telephone
  - Gender
  - Country
  - State
  - City
  - Zip
  - List of skills
  - Optional field to provide additional information

On **form submit** , complete volunteer details are initially rendered in the **Console** output of the browser and then is saved in the application for the current session ( Until page reload/reopen ). These details can further be seen along the rest of the **Volunteer List** under **Volunteers** tab, which we will see further in detail.
 
####  About
About page renders the summarised introduction of the cause and need of the application.


####  Volunteers
Volunteers view renders the list of basic information of all the volunteers that have been registered for the event in the current session (until page reload/reopen).

If you could recall, a volunteer can register oneself by filling out the details in the registration form set up in the **Home page**.

Volunteers list is categorised and displayed as a thumbnail, containing just the first name and last name of the volunteer.

**Note:** To get the list of volunteers in this view, at least one volunteer has to be registered initially under *Home* page. Otherwise, if no volunteer details found, the view renders an empty list and  displays a message to register/add volunteers first.

####  Contact
Contact page renders the personal information of the Owner . It contains the following,
  - Picture
  - Name
  - Email
  - Phone
  - LinkedIn details



This application has been hosted in *Github Pages* and can be accessed through https://nishibangar.github.io/joining_hands/
 

 
