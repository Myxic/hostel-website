/**
* PHP Email Form Validation - v3.6
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
// (function () {
//   "use strict";

//   let forms = document.querySelectorAll('.php-email-form');

//   forms.forEach( function(e) {
//     e.addEventListener('submit', function(event) {
//       event.preventDefault();

//       let thisForm = this;

//       let action = thisForm.getAttribute('action');
//       let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');
      
//       if( ! action ) {
//         displayError(thisForm, 'The form action property is not set!');
//         return;
//       }
//       thisForm.querySelector('.loading').classList.add('d-block');
//       thisForm.querySelector('.error-message').classList.remove('d-block');
//       thisForm.querySelector('.sent-message').classList.remove('d-block');

//       let formData = new FormData( thisForm );

//       if ( recaptcha ) {
//         if(typeof grecaptcha !== "undefined" ) {
//           grecaptcha.ready(function() {
//             try {
//               grecaptcha.execute(recaptcha, {action: 'php_email_form_submit'})
//               .then(token => {
//                 formData.set('recaptcha-response', token);
//                 php_email_form_submit(thisForm, action, formData);
//               })
//             } catch(error) {
//               displayError(thisForm, error);
//             }
//           });
//         } else {
//           displayError(thisForm, 'The reCaptcha javascript API url is not loaded!')
//         }
//       } else {
//         php_email_form_submit(thisForm, action, formData);
//       }
//     });
//   });

//   function php_email_form_submit(thisForm, action, formData) {
//     fetch(action, {
//       method: 'POST',
//       body: formData,
//       headers: {'X-Requested-With': 'XMLHttpRequest'}
//     })
//     .then(response => {
//       if( response.ok ) {
//         return response.text();
//       } else {
//         throw new Error(`${response.status} ${response.statusText} ${response.url}`); 
//       }
//     })
//     .then(data => {
//       thisForm.querySelector('.loading').classList.remove('d-block');
//       if (data.trim() == 'OK') {
//         thisForm.querySelector('.sent-message').classList.add('d-block');
//         thisForm.reset(); 
//       } else {
//         throw new Error(data ? data : 'Form submission failed and no error message returned from: ' + action); 
//       }
//     })
//     .catch((error) => {
//       displayError(thisForm, error);
//     });
//   }

//   function displayError(thisForm, error) {
//     thisForm.querySelector('.loading').classList.remove('d-block');
//     thisForm.querySelector('.error-message').innerHTML = error;
//     thisForm.querySelector('.error-message').classList.add('d-block');
//   }

// })();




// Function to validate email address
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Function to send email using EmailJS
function sendEmail(templateParams) {
  emailjs.send('service_vxlgq2c', 'template_zqwrpxu', templateParams, '_GvGGMtBPMcStuQAa')
    .then(function(response) {
      // Email sent successfully
      displaySuccess('Your message has been sent. Thank you!');
      emailForm.reset();
    }, function(error) {
      // Error sending email
      displayError('An error occurred while sending the email. Please try again later.');
    });
}

// Function to display error messages
function displayError(message) {
  const errorContainer = document.querySelector('.error-message');
  errorContainer.textContent = message;
}

// Function to display success message
function displaySuccess(message) {
  const successContainer = document.querySelector('.sent-message');
  successContainer.textContent = message;
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent form submission

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');

  // Validate email
  const email = emailInput.value.trim();
  if (!validateEmail(email)) {
    displayError('Please enter a valid email address.');
    emailInput.focus();
    return;
  }

  // Prepare email parameters for EmailJS
  const templateParams = {
    from_name: nameInput.value.trim(),
    from_email: email,
    subject: subjectInput.value.trim(),
    message: messageInput.value.trim()
  };

  // Send email using EmailJS
  sendEmail(templateParams);
}

// Add event listener to the form on submit
const emailForm = document.getElementById('email-form');
emailForm.addEventListener('submit', handleFormSubmit);











// (function() {
//   emailjs.init('_GvGGMtBPMcStuQAa');

//   const emailForm = document.getElementById('email-form');

//   emailForm.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const formData = new FormData(emailForm);

//     const emailParams = {
//       from_name: formData.get('name'),
//       from_email: formData.get('email'),
//       subject: formData.get('subject'),
//       message: formData.get('message')
//     };

//     emailjs.send('service_t519zoh', 'template_zqwrpxu', emailParams)
//       .then(function(response) {
//         console.log('Email sent successfully:', response);
//         // Display success message or perform any other actions
//         emailForm.reset(); // Clear the form after sending
//       }, function(error) {
//         console.error('Email send error:', error);
//         // Display error message or handle the error
//       });
//   });
// })();