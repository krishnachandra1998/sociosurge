var firebaseConfig = {
    apiKey: "AIzaSyAP5Ekoe_tsJe-mgY4DWsvBppxMRvm8GFc",
    authDomain: "sociosurge-ea64e.firebaseapp.com",
    databaseURL: "https://sociosurge-ea64e-default-rtdb.firebaseio.com",
    projectId: "sociosurge-ea64e",
    storageBucket: "sociosurge-ea64e.appspot.com",
    messagingSenderId: "798985101620",
    appId: "1:798985101620:web:e958791c1d62738802c561"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var db = firebase.database();

var messagesRef = firebase.database().ref('messages');
var contactRef = firebase.database().ref('contact');


// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);
document.getElementById('messageForm').addEventListener('submit', sendMessage);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var qualification = getInputVal('qualification');
  var institution = getInputVal('institution');
  var interest = getInputVal('interest');
  var myfile = getInputVal('myfile');
    

  // Contact message
  contactMessage(name, email, phone, qualification, institution, interest, myfile);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Send Message
function sendMessage(e){
    e.preventDefault();
    
    var name = getInputVal('name');
    var email = getInputVal('email');
    var subject = getInputVal('subject');
    var message = getInputVal('message');
    
    //Save message
    saveMessage(name, email, subject, message);
    
    //Show Message
    document.querySelector('.sent-message').style.display = 'block';
    
    // Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.sent-message').style.display = 'none';
    },3000);
    
    // Clear form
  document.getElementById('messageForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Contact message to firebase
function contactMessage(name, email, phone, qualification, institution, interest, myfile){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    phone: phone,
    qualification: qualification,
    institution: institution,
    interest: interest,
    myfile: myfile
  });
}

//Save message to firebase
function saveMessage(name, email, subject, message){
    var newMessageRef = contactRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        subject: subject,
        message: message
        
    });
}