function handleSubscribe(event) {
    event.preventDefault(); 

    
    var name = document.getElementById('name');
    var phone = document.getElementById('phone');
    var email = document.getElementById('email');
    var dropdown = document.getElementById('dropdown');

    
    var isValid = true;
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

    if (!dropdown.value) {
        document.getElementById('dropdownError').innerText = 'Please select a product type';
        isValid = false;
    } else {
        document.getElementById('dropdownError').innerText = '';
    }

   
    if (isValid) {
        event.target.submit();
    }
}


document.getElementById('subscribeForm').addEventListener('submit', handleSubscribe);