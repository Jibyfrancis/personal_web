function  handleCheckout() {
    $('input').each(function() {
        let checkCondition = true;
  

    

        //email validation
    let email = document.querySelector("#email").value;
    if (email == "") {
    document.querySelector("#errors").innerHTML = "Email field is empty";
    checkCondition = false;
    }
    let reEmail=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    if (!reEmail.test(email)) {
      document.querySelector("#errors").innerHTML ="Invalid Email!";
        
      checkCondition = false;
    }
    
    //validate phone number
    let phone = document.querySelector("#phone").value;
    let rePhone= /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
    //let rePhone = /^\+{0,2}([\-\. ])?(\(?\d{0,3}\))?([\-\. ])?\(?\d{0,3}\)?([\-\. ])?\d{3}([\-\. ])?\d{4}/;
    if (!rePhone.test(phone)) {
      document.querySelector("#errors").innerHTML =
        "Phone number format should be like XXXXXXXXX!!";
      checkCondition = false;
    }
    
    // for place
    let lplace=document.querySelector("#lplace").value;
    if (lplace == "") {
     document.querySelector("#errors").innerHTML = "Place field is empty";
     checkCondition = false;
     }
    
      // name validation
    let reFname =  /[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/;
    let lname = document.querySelector("#lname").value;
    if (!reFname.test(lname)) {
      document.querySelector("#errors").innerHTML =
        "Name should be letters!!";
      checkCondition = false;
    }
    
    
    if(checkCondition == true){
      document.querySelector("#errors").innerHTML = "Success!";
      let receiptContainer = document.getElementById("receiptForm");
      receiptContainer.className = "show";
    }
      
      
  
    }
    if (good) {
      return true;
    }
    return false;
  }
  
  $(document).ready(function() {
    $(window).keydown(function(event){
      if( (event.keyCode == 13) && ( handleCheckout() == false) ) {
        event.preventDefault();
        return false;
      }
    });
  });