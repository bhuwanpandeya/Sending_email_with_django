$(document).ready(function(){

  $("#register-form").validate({
    // Specify validation rules
    rules: {
      first_name: "required",
      middle_name: {
           required: false,
        },
      last_name: "required",
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        digits: true,
        minlength: 10,
        maxlength: 10,
      },
    },
    messages: {
      first_name: {
      required: "Please enter first name",
      color:"red",
     },
     last_name: {
      required: "Please enter last name",
     },
     phone: {
      required: "Please enter phone number",
      digits: "Please enter valid phone number",
      minlength: "Phone number field accept only 10 digits",
      maxlength: "Phone number field accept only 10 digits",
     },
     email: {
      required: "Please enter email address",
      email: "Please enter a valid email address.",
     },
    },

  });
});