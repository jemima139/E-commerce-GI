//This function takes an event object as a parameter, which represents the form submission event.
function handleSubscribe(event) {
//It prevents the default behavior of form submission, which is to reload the page.
    event.preventDefault(); 

    //fetches references to various form elements by their IDs.
    var name = document.getElementById('name');
    var phone = document.getElementById('phone');

    var email = document.getElementById('email');
    var dropdown = document.getElementById('dropdown');

    
    var isValid = true;
    // It checks if the name field is empty. If it is, it displays an error message and sets isValid to false. Otherwise, it clears any existing error message.
    if (!name.value.trim()) {
        document.getElementById('nameError').innerText = 'Name is required';
        isValid = false;
    } else {
        document.getElementById('nameError').innerText = '';
    }

    if (!phone.validity.valid) {
        document.getElementById('phoneError').innerText = 'Please enter a valid phone number (XXX-XXX-XXXX)';
        isValid = false;
    } else {
        document.getElementById('phoneError').innerText = '';
    }

    if (!email.validity.valid) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address';
        isValid = false;
    } else {
        document.getElementById('emailError').innerText = '';
    }
//It checks if a value is selected in the dropdown. If not, it displays an error message and sets isValid to false.
    if (!dropdown.value) {
        document.getElementById('dropdownError').innerText = 'Please select a product type';
        isValid = false;
    } else {
        document.getElementById('dropdownError').innerText = '';
    }

//If all validation checks pass (isValid remains true), the form is submitted.   
    if (isValid) {
        event.target.submit();
    }
}


document.getElementById('subscribeForm').addEventListener('submit', handleSubscribe);