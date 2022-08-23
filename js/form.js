$(document).ready(function(){
    $("#submitform").validate({
        rules:{
          fname:{
            required:true,
            minlength:4,
            maxlength:8
    
          },
            email:{
              required:true,
              email:true

            },
            phoneNumber: {
              matches: "[0-9]+", 
              minlength:10,
              maxlength:10
            },

            
    
        }, messages:{
          fname:{

           required:"*field is required"
           
          },
          email:{
           required:"*field is required"
           

          },
       phoneNumber:{
           required:"*field is required"
         
           
       }
      },
        
    })
    });