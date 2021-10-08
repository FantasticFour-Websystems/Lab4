
/*FOOTER to JSON*/


var myFooter, new_footer;
//Storing data:
var footerObj = {innerHTML: "<div class=\"col\">Quick Links:<br><a class=\"footlink\"href=\"index.html\">Home</a><br><a class=\"footlink\" href=\"events.html\">Events/Activities</a><br><a class=\"footlink\"href=\"contact.html\">Contact Us</a><br></div><div class=\"col\" style=\"width:10vw\">Emails:<br><i class=\"fas fa-envelope-open ml-3\"></i><span><a class=\"footlink\" href=\"href=\"mailto:INSERTHERE\" class = \"contact-button1\" target=\"_blank\"> President: smitha24@rpi.edu</a></span><br><i class=\"fas fa-envelope-open ml-3\"></i><span><a class=\"footlink\" href=\"href=\"mailto:INSERTHERE\" class = \"contact-button1\"  target=\"_blank\"> Organization: gammanueta@rpi.edu</a></span></div><div class=\"col\">Social Media: <br><a href=\"#\" class=\"social\"><i class=\"fab fa-facebook-f\"></i></a><a href=\"#\" class=\"social\"><i class=\"fab fa-twitter\"></i></a><a href=\"#\" class=\"social\"><i class=\"fab fa-tiktok\"></i></a><a href=\"#\" class=\"social\"><i class=\"fab fa-instagram\"></i></a><a href=\"#\" class=\"social\"><i class=\"fab fa-linkedin\"></i></a></div>"};
myFooter = JSON.stringify(footerObj);
new_footer = JSON.parse(myFooter);
document.getElementById("footer").innerHTML = new_footer.innerHTML;


var myHeader, header;
//Storing data:
var newObj = {innerHTML: "<div id = \"header\"><h1 id =\"title\">GAMMA NU ETA</h1><h3 id =\"sub-title\">ITWS Honors Society</h3></div><a href=\"events.html\" class=\"main-button\" id = \"button-1\"><span> See Our Events &#187; </span></a><a href=\"newsletter.html\" class=\"main-button\" id = \"button-2\"><span> &#171; Newsletters </span></a>"};
myHeader = JSON.stringify(newObj);
//Retrieving data:
header = JSON.parse(myHeader);
document.getElementById("full-header").innerHTML = header.innerHTML;
//Retrieving data:


/*NAVBAR to JSON*/
var myNavbar, navbar;
//Storing data:
var obj_3 = {innerHTML: "<a href=\"index.html\">Home</a><a href=\"events.html\">Events</a><a href = \"#footer\">Contact Us</a>"};
var myNavbar = JSON.stringify(obj_3);
var navbar = JSON.parse(myNavbar);
document.getElementById("mySidenav").innerHTML = navbar.innerHTML;

function validate(formObj) {
   var flag = 1;
   if (formObj.email.value == "") 
   {
      alert("You must enter a email");
      formObj.email.focus();
      flag = 0;
      return false;
   }
   if (flag)
   {
   	alert("You have successfully submitted");
   	return true;
   }
}
/*ITWS NEWS API */

/*
var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://community-hacker-news-v1.p.rapidapi.com/updates.json',
  params: {print: 'pretty'},
  headers: {
    'x-rapidapi-host': 'community-hacker-news-v1.p.rapidapi.com',
    'x-rapidapi-key': '2a9a5d9576mshd841cf956812c0cp15336bjsnf717aea52939'
  }
};

axios.request(options).then(function (response) {
console.log(response.data);
}).catch(function (error) {
console.error(error);
});
*/