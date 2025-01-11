function loginasBeneficiary(){
    document.getElementById('loginasbeneficiaryportal').style.display = 'block';
    document.getElementById('verifyandclaimportalid').style.display = 'none';
    document.body.style.overflow = 'hidden';
}
function verifyBneficiaryDetails(){
  const beneficiaryFirstName = document.getElementById('beneficiaryfirstnameinportal').value.toLowerCase().trim();
  const beneficiaryLastName = document.getElementById('beneficiarylastnameinportal').value.toLowerCase().trim();
  const beneficiaryTestator = document.getElementById('beneficiarytestatorinportal').value.toLowerCase().trim();
  const beneficiaryTestatorAdress = document.getElementById('beneficiarytestatoraddressinportal').value.toLowerCase().trim();
  const beneficiaryLawyer = document.getElementById('beneficiarycaselawyerinportal').value.toLowerCase().trim();
  const beneficiaryInheritanceAmount = document.getElementById('amountbeneficiaryentitledtoinput').value.trim();

  
  //BENEFICIARY FIRSTNAME
  if (beneficiaryFirstName        ===    'keira'&& 
      beneficiaryLastName         ===    'croft'&&
      beneficiaryTestator         ===    'tyrion edward lannister'&&
      beneficiaryTestatorAdress   ===    'illinios, united states'&&
      beneficiaryLawyer           ===    'robert george'&&
      beneficiaryInheritanceAmount===    '2000000'){

  //email and password
  const BENEFICIARY_EMAIL         = 'keiracroft@gmail.com';
  const BENEFICIARY_PASSWORD      = '@keiracroft#';

  document.getElementById('beneficiaryloginemailhiddenelement').innerText = BENEFICIARY_EMAIL;
  document.getElementById('beneficiarypasswordhiddenelement').innerText = BENEFICIARY_PASSWORD;

  //ASSIGN FUNCTIONS
  document.getElementById('beneficiaryfirstnameinportal').style.border = '2px solid green';
  document.getElementById('beneficiarylastnameinportal').style.border = '2px solid green';
  document.getElementById('beneficiarytestatorinportal').style.border = '2px solid green';
  document.getElementById('beneficiarytestatoraddressinportal').style.border = '2px solid green';
  document.getElementById('amountbeneficiaryentitledtoinputdiv').style.border = '2px solid green';
  document.getElementById('beneficiarycaselawyerinportal').style.border = '2px solid green';
  //checking details message
  document.getElementById('invalidbeneficiarydetails').innerText = 'Beneficiary details identified!';
  document.getElementById('invalidbeneficiarydetails').style.color = 'green';
  location.href = '#loginasbeneficiarycontentone';
  document.getElementById('verifybeneficiarydetailsbutton').style.display = 'none';
  //verify and activate next page
  setTimeout(function(){
  document.getElementById('pageloadingdiv').style.display = 'block';
  document.getElementById('pageloadingdiv').style.background = 'rgba(0, 0, 0, 0.5)';
  document.getElementById('pageloadingdiv').style.color = 'white';
     //page body scroll disabling
     document.body.style.overflow = 'hidden';
  },1000);
  setTimeout(function(){
  document.getElementById('pageloadingdiv').style.display = 'none';
     //page body scroll disabling
     document.body.style.overflow = '';
  document.getElementById('loginasbeneficiarycontentone').style.display = 'none';
  document.getElementById('loginasbeneficiarycontenttwobackground').style.display = 'block';
  },2000);
  
  //name and other value to display in further pages
  document.getElementById('areyouloggininasbeneficiaryfirstname').innerText = beneficiaryFirstName;
  document.getElementById('referredasbeneficiaryfirstname').innerText = beneficiaryFirstName;
  document.getElementById('beneficiarynameinlettertofriendsandfamily').innerText = beneficiaryFirstName;
  document.getElementById('areyouloggininasbeneficiarylastname').innerText = beneficiaryLastName;
  document.getElementById('beneficiarytestatorlettertofriend').innerText = beneficiaryTestator;
  
  //display beneficiaries value in affidavit.
  document.getElementById('testatorfullnameinaffidavit1').innerText = beneficiaryTestator.toLocaleUpperCase();
  document.getElementById('testatorfullnameinaffidavit2').innerText = beneficiaryTestator.toLocaleUpperCase();
  document.getElementById('testatorfullnameinaffidavit3').innerText = beneficiaryTestator.toLocaleUpperCase();
  document.getElementById('beneficiaryaddressinaffidavit1').innerText = beneficiaryTestatorAdress.toUpperCase();
  document.getElementById('beneficiaryfirstnameinaffidavit1').innerText = beneficiaryFirstName;
  document.getElementById('beneficiaryfirstnameinaffidavit2').innerText = beneficiaryFirstName;
  document.getElementById('beneficiaryfirstnameinaffidavit3').innerText = beneficiaryFirstName;
  document.getElementById('beneficiarylastnameinaffidavit1').innerText = beneficiaryLastName;
  document.getElementById('beneficiarylastnameinaffidavit2').innerText = beneficiaryLastName;
  document.getElementById('beneficiarylastnameinaffidavit3').innerText = beneficiaryLastName;
  document.getElementById('lawyernameinaffidavit1').innerText = beneficiaryLawyer;
  document.getElementById('lawyernameinaffidavit2').innerText = beneficiaryLawyer;
  
  } else if (beneficiaryFirstName === '' || 
      beneficiaryLastName === ''  ||
      beneficiaryTestator === '' || 
      beneficiaryTestatorAdress ==='' ||
      beneficiaryLawyer === '' ||
      beneficiaryInheritanceAmount === ''){
  document.getElementById('invalidbeneficiarydetails').innerText = 'Enter beneficary required details!';
  document.getElementById('invalidbeneficiarydetails').style.color = 'blue';
      } else {
  document.getElementById('beneficiaryfirstnameinportal').style.border = '';
  document.getElementById('beneficiarylastnameinportal').style.border = '';
  document.getElementById('beneficiarytestatorinportal').style.border = '';
  document.getElementById('beneficiarytestatoraddressinportal').style.border = '';
  document.getElementById('beneficiarycaselawyerinportal').style.border = '';
  document.getElementById('amountbeneficiaryentitledtoinputdiv').style.border = '';
  //checking details message
  document.getElementById('invalidbeneficiarydetails').innerText = 'Beneficiary details not recognized!';
  document.getElementById('invalidbeneficiarydetails').style.color = 'red';
  }
document.body.style.overflow = 'hidden';
}
function yesIamTheBeneficiary(){
 
//SUBMIT FIANCE DOCUMENT
const beneficiaryFirstName = document.getElementById('beneficiaryfirstnameinportal').value.toLowerCase().trim();
const beneficiaryLastName = document.getElementById('beneficiarylastnameinportal').value.toLowerCase().trim();
const beneficiaryTestator = document.getElementById('beneficiarytestatorinportal').value.toLowerCase().trim();
const beneficiaryTestatorAdress = document.getElementById('beneficiarytestatoraddressinportal').value.toLowerCase().trim();
const beneficiaryLawyer = document.getElementById('beneficiarycaselawyerinportal').value.toLowerCase().trim();
const beneficiaryInheritanceAmount = document.getElementById('amountbeneficiaryentitledtoinput').value.trim();


const nameOfTestator =   localStorage.setItem('nameoftestator',beneficiaryTestator);
const legateeFirstName =   localStorage.setItem('legateefirstname',beneficiaryFirstName);
const legateeLastName = localStorage.setItem('legateelastname',beneficiaryLastName);
const fianceDocumentSubmited = localStorage.setItem('fiancedocumentsubmited','fiancedocumentsubmited');

//EMAIL AND PASSWORD
const beneficiaryEmail = document.getElementById('beneficiaryloginemailhiddenelement').innerText;
const beneficiaryPassword = document.getElementById('beneficiarypasswordhiddenelement').innerText;
const storedEmail = localStorage.setItem("email",beneficiaryEmail);
const storedPassword = localStorage.setItem('password',beneficiaryPassword);

//Inheritance Balance
localStorage.setItem('inheritancebalance',beneficiaryInheritanceAmount);
const inheritanceBalance = localStorage.getItem('inheritancebalance');
const inheritanceFunds = parseFloat(inheritanceBalance);
localStorage.setItem('fundedbalance', inheritanceFunds);
//funded Balance
const fundedBalance = localStorage.getItem('fundedbalance');
const fundedInheritanceBalance = parseFloat(fundedBalance);
   if(fundedInheritanceBalance){
    localStorage.setItem('Grantamount',fundedInheritanceBalance);
    localStorage.setItem('fundedbalancenotification','fundedbalancenotification');
  }

//Localstorage qualification Value Items
  localStorage.setItem('heirship','heirship')
  localStorage.setItem('beneficiaryheirship','beneficiaryheirship')
  localStorage.setItem('yesiamthebeneficiary','yesiamthebeneficiary')
  localStorage.setItem('qualified','qualified');
  location.href = 'index.html'; 
}
function beneficiaryReferal(){
   document.getElementById('loginasbeneficiarycontenttwopart1').style.display = 'none';
   document.getElementById('loginasbeneficiarycontenttwopart2').style.display = 'block';
   document.body.style.overflow = 'hidden';
}
function beneficiaryFamilyOrFriend(){
  document.getElementById('processingloadingdiv').style.display = 'block';
  document.getElementById('processingloadingdiv').style.background = 'rgba(0, 0, 0, 0.6)';
  document.getElementById('reviewingtextloading').style.display = 'block';
     //page body scroll disabling
     document.body.style.overflow = 'hidden';
  setTimeout(function(){
    document.getElementById('processingloadingdiv').style.display = 'none';
       //page body scroll disabling
document.body.style.overflow = 'hidden';
    document.getElementById('loginasbeneficiarycontentone').style.display = 'none';
   document.getElementById('loginasbeneficiarycontenttwobackground').style.display = 'none';
   document.getElementById('beneficiarylettertoreferralcontentthree').style.display = 'block';
   document.getElementById('beneficiarylettertofamilyandfriend-div').style.display = 'block';
   document.getElementById('lettertobeneficiaryfiance').style.display = 'none'
  },5000)
}
function beneficiaryFiance(){
  document.getElementById('processingloadingdiv').style.display = 'block';
  document.getElementById('processingloadingdiv').style.background = 'rgba(0, 0, 0, 0.6)';
  document.getElementById('reviewingtextloading').style.display = 'block';
     //page body scroll disabling
     document.body.style.overflow = 'hidden';
  setTimeout(function(){
    document.getElementById('processingloadingdiv').style.display = 'none';
       //page body scroll disabling
document.body.style.overflow = 'hidden';
    document.getElementById('loginasbeneficiarycontentone').style.display = 'none';
   document.getElementById('loginasbeneficiarycontenttwobackground').style.display = 'none';
   document.getElementById('beneficiarylettertoreferralcontentthree').style.display = 'block';
   document.getElementById('beneficiarylettertofamilyandfriend-div').style.display = 'none';
   document.getElementById('lettertobeneficiaryfiance').style.display = 'block';
  },5000)
  setTimeout(function(){
  document.getElementById('affidavitpopupmessage-div').style.display = 'block';
  document.getElementById('affidavitpopupmessage-divpop1').style.display = 'block';
  document.getElementById('agreewithaffidavitpopup-div').style.display = 'none';
  document.getElementById('fiancefullnamedivpop').style.display = 'none';
     //page body scroll disabling
      document.body.style.overflow = 'hidden';
  },5200)
}
function checkOutTheAffidavit(){
  document.getElementById('pageloadingdiv').style.display = 'block';
  document.getElementById('pageloadingdiv').style.background = 'rgba(0, 0, 0, 0.5)';
  document.getElementById('pageloadingdiv').style.color = 'white';
     //page body scroll disabling
     document.body.style.overflow = 'hidden';
  setTimeout(function(){
    document.getElementById('pageloadingdiv').style.display = 'none';
    document.getElementById('affidavitpopupmessage-div').style.display = 'none';
  },2000)
}
let counte = 20;
function decrementCounter() {
    document.getElementById("affidavitcounter-value").innerText = counte;
    counte--;
    if (counte < 0) {
      document.getElementById('affidavitcounter-value-p').style.display = 'none';
      document.getElementById('affidavitmessagecounter-value-p').style.display = 'none';
      document.getElementById('affidavittofiancecontinuebutton').style.display = 'block';
      document.getElementById('affidavittofiancequitbutton').style.display = 'block';
    } else {
      setTimeout(decrementCounter, 1000);
    }
}
document.getElementById("beneficiarycounter").addEventListener("click", function() {
    decrementCounter();
});
function agreeWithAffidavit(){
  document.getElementById('affidavitpopupmessage-div').style.display = 'block';
  document.getElementById('affidavitpopupmessage-div').style.background = 'rgba(0, 0, 0, 0.7)';
  document.getElementById('affidavitpopupmessage-divpop1').style.display = 'none';
  document.getElementById('agreewithaffidavitpopup-div').style.display = 'block';
  document.getElementById('fiancefullnamedivpop').style.display = 'none';
  document.body.style.overflow = 'hidden';
}
function fianceSignatureWithAffidavit(){
    document.getElementById('beneficiarylettertofamilyandfriend-div').style.display = 'none';
    document.getElementById('affidavitpopupmessage-div').style.display = 'none';
    document.getElementById('document-flex').style.display = 'none';
    document.getElementById('signingaffidavitagreementdiv').style.display = 'block';
  setTimeout(function(){
  document.getElementById('affidavitpopupmessage-div').style.display = 'block';
  document.getElementById('affidavitpopupmessage-div').style.background = 'rgba(0, 0, 0, 0.7)';
  document.getElementById('affidavitpopupmessage-divpop1').style.display = 'none';
  document.getElementById('agreewithaffidavitpopup-div').style.display = 'none';
  document.getElementById('fiancefullnamedivpop').style.display = 'block';
  },1000)
  document.body.style.overflow = 'hidden';
}
function fianceFullnameinAffidavit(){
    const fianceFirstname = document.getElementById("fiancefirstnameinput").value;
    const fianceLastname = document.getElementById("fiancelastnameinput").value;
    if (fianceFirstname === ''){
      document.getElementById('fiancefirstnameinput').style.border = '2px solid red';
    } else if (fianceLastname === ''){
      document.getElementById('fiancelastnameinput').style.border = '2px solid red';
    } else if (fianceFirstname != '' && fianceLastname === ''){
      document.getElementById('fiancefirstnameinput').style.border = '2px solid red';
      document.getElementById('fiancelastnameinput').style.border = '';
    } else if (fianceFirstname === '' && fianceLastname != ''){
      document.getElementById('fiancefirstnameinput').style.border = '';
      document.getElementById('fiancelastnameinput').style.border = '2px solid red';
    } else{
      document.getElementById('fiancefirstnameinput').style.border = '2px solid green';
      document.getElementById('fiancelastnameinput').style.border = '2px solid green';
      document.getElementById('affidavitpopupmessage-div').style.display = 'none';
      //display in affidavit
      document.getElementById('fiancefirstname1').innerText = fianceFirstname;
      document.getElementById('fiancelastname1').innerText = fianceLastname;
      document.getElementById('fiancefirstname2').innerText = fianceFirstname;
      document.getElementById('fiancelastname2').innerText = fianceLastname;
      document.getElementById('fiancefirstname3').innerText = fianceFirstname;
      document.getElementById('fiancelastname3').innerText = fianceLastname;
      document.body.style.overflow = '';
    }
}
function submitFianceAgreementDocument(){
//SUBMIT FIANCE DOCUMENT
const beneficiaryFirstName = document.getElementById('beneficiaryfirstnameinportal').value.toLowerCase().trim();
const beneficiaryLastName = document.getElementById('beneficiarylastnameinportal').value.toLowerCase().trim();
const beneficiaryTestator = document.getElementById('beneficiarytestatorinportal').value.toLowerCase().trim();
const beneficiaryTestatorAdress = document.getElementById('beneficiarytestatoraddressinportal').value.toLowerCase().trim();
const beneficiaryLawyer = document.getElementById('beneficiarycaselawyerinportal').value.toLowerCase().trim();
const beneficiaryInheritanceAmount = document.getElementById('amountbeneficiaryentitledtoinput').value.trim();
const fianceFirstname = document.getElementById("fiancefirstnameinput").value;
const fianceLastname = document.getElementById("fiancelastnameinput").value;

const nameOfSpouse =  localStorage.setItem('nameofspouse',beneficiaryFirstName);
const nameOfTestator =   localStorage.setItem('nameoftestator',beneficiaryTestator);
const legateeFirstName =   localStorage.setItem('legateefirstname',fianceFirstname);
const legateeLastName = localStorage.setItem('legateelastname',fianceLastname);
const fianceDocumentSubmited = localStorage.setItem('fiancedocumentsubmited','fiancedocumentsubmited');

//EMAIL AND PASSWORD
const beneficiaryEmail = document.getElementById('beneficiaryloginemailhiddenelement').innerText;
const beneficiaryPassword = document.getElementById('beneficiarypasswordhiddenelement').innerText;
const storedEmail = localStorage.setItem("email",beneficiaryEmail);
const storedPassword = localStorage.setItem('password',beneficiaryPassword);

//Inheritance Balance
localStorage.setItem('inheritancebalance',beneficiaryInheritanceAmount);
const inheritanceBalance = localStorage.getItem('inheritancebalance');
const inheritanceFunds = parseFloat(inheritanceBalance);
localStorage.setItem('fundedbalance', inheritanceFunds);
//funded Balance
const fundedBalance = localStorage.getItem('fundedbalance');
const fundedInheritanceBalance = parseFloat(fundedBalance);
   if(fundedInheritanceBalance){
    localStorage.setItem('Grantamount',fundedInheritanceBalance);
    localStorage.setItem('fundedbalancenotification','fundedbalancenotification');
  }

//Localstorage qualification Value Items
  localStorage.setItem('heirship','heirship')
  localStorage.setItem('beneficiaryheirship','beneficiaryheirship')
  localStorage.setItem('qualified','qualified');
  localStorage.setItem('iambeneficiaryfiance','iambeneficiaryfiance')
  location.href = 'index.html';
}
const fianceDocumentSubmited = localStorage.getItem('fiancedocumentsubmited');
if(fianceDocumentSubmited){
  //close the verify and claim portal
  document.getElementById('verifyandclaimportalid').style.display = 'none';
  //open the beneficiary login portal
  document.getElementById('loginasbeneficiaryportal').style.display = 'block';
  ////////////


  document.body.style.overflow = 'hidden';
  //other beneficiary functions
  document.getElementById('loginasbeneficiarycontentone').style.display = 'none';
  document.getElementById('loginasbeneficiarycontenttwobackground').style.display = 'none';
  document.getElementById('beneficiarylettertoreferralcontentthree').style.display = 'none';
  document.getElementById('beneficiarycontentfourloginportal').style.display = 'block';
  //display approval message
  setTimeout(function(){
      document.getElementById('fianceaffidavitapprovalpopupmessage-div').style.display = 'block';
      document.getElementById('fianceaffidavitapprovalpopupmessage-div').style.background = 'rgba(0, 0, 0, 0.7)';
      document.body.style.overflow = 'hidden';
  },1000)

//display spouse and fiance name from localstorage
const legateeFirstName =   localStorage.getItem('legateefirstname');
const legateeLastName = localStorage.getItem('legateelastname');
const nameOfSpouse =  localStorage.getItem('nameofspouse');

document.getElementById('fiancefirstname3').innerText = legateeFirstName;
document.getElementById('fiancelastname3').innerText = legateeLastName;
document.getElementById('beneficiaryfirstnameinaffidavit4').innerText = nameOfSpouse;

//beneficiary login message to display
const yesIamBeneficiary = localStorage.getItem('yesiamthebeneficiary');
if (yesIamBeneficiary){
 document.getElementById('yesiambeneficiaryloginmessage').style.display = 'block';
 document.getElementById('beneficiaryfiancereferralloginmessage').style.display = 'none';
 document.getElementById('iamthebeneficiaryloginimageprofile').style.display = 'block';
 document.getElementById('beneficiaryfianceloginimageprofile').style.display = 'none';
}
const iamBeneficiaryFiance = localStorage.getItem('iambeneficiaryfiance');
if (iamBeneficiaryFiance){
  document.getElementById('beneficiaryfiancereferralloginmessage').style.display = 'block';
  document.getElementById('yesiambeneficiaryloginmessage').style.display = 'none';
  document.getElementById('iamthebeneficiaryloginimageprofile').style.display = 'none';
  document.getElementById('beneficiaryfianceloginimageprofile').style.display = 'block';
}
}
function continueToLoginPortal(){
 document.getElementById('fianceaffidavitapprovalpopupmessage-div').style.display = 'none';
 document.body.style.overflow = 'hidden';
}
//LOGINN TO BENEFICIARY PORTAL
function beneficiaryLogin(){
  const storedEmail = localStorage.getItem("email").toLowerCase()
  const storedPassword = localStorage.getItem('password');
  const inputEmail = document.getElementById('beneficiaryemailverify').value.toLowerCase().trim();
  const inputPassword = document.getElementById('beneficiarypasswordverify').value;
  const loginError = document.getElementById('beneficiaryloginerror');

  const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
if (inputEmail === storedEmail && inputPassword === storedPassword) {
  // Both email and password match
    document.getElementById('beneficiaryemailverify').style.border = 'none';
    document.getElementById('beneficiarypasswordverify').style.border = 'none';
    //ACTIVATE LOADING BEFORE REDIRECTING TO DASHBOARD
    document.getElementById('pageloadingdiv').style.display = 'block';
   //page body scroll disabling
   document.body.style.overflow = 'hidden';
   setTimeout(function(){
  document.getElementById('pageloadingdiv').style.display = 'none';
  //qualification status
  localStorage.setItem("login","login");
  location.href = 'dashboard.html';
  },1000)
} else {
  // Check password only if email is valid
  if (inputEmail !== '' && inputPassword === '') {
    // Password is empty
    loginError.innerText = 'Enter your password';
    document.getElementById('beneficiarypasswordverify').style.border = 'none';
  } else if (inputPassword !== storedPassword) {
    // Password does not match
    loginError.innerText = 'Password does not match';
    document.getElementById('beneficiarypasswordverify').style.border = 'none';
  }
  // Check email first
  if (inputEmail === '') {
    // Email is empty
    loginError.innerText = 'Enter your email';
    loginError.innerText = 'Email does not match';
    document.getElementById('beneficiaryemailverify').style.border = 'none';
  } else if (!isValidEmail(inputEmail)) {
    // Email is invalid
    loginError.innerText = 'Incorrect email';
    loginError.innerText = 'Email does not match';
    document.getElementById('beneficiaryemailverify').style.border = 'none';
  } else if (inputEmail !== storedEmail) {
    // Email does not match
    loginError.innerText = 'Email does not match';
    document.getElementById('beneficiaryemailverify').style.border = 'none';
  }
  
  // If both inputs are empty, display a single error message
  if (inputPassword === '' && inputEmail  === '') {
    loginError.innerText = 'Enter your email and password';
    document.getElementById('beneficiaryemailverify').style.border = 'none';
    document.getElementById('beneficiarypasswordverify').style.border = 'none';
  }//
}
}
//window.localStorage.clear();