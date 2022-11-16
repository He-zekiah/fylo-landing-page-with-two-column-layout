const userEmail = document.getElementById("email");
const userEmail2 = document.getElementById("email2");
const submit = document.getElementById('submit');
const submit2 = document.getElementById('submit2');


userEmail.addEventListener("change", function (e) {
    e.target.value;
});

userEmail2.addEventListener("change", function (e) {
    e.target.value;
});


// check for required inputs
const isRequired = value => value === "" ? false : true;

// check if email is valid
const isEmailValid = (email) => {
    const exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return exp.test(email);
};

// show error message or invalid field input
const showError = (input, message, text) => {

    const formParent = input.parentElement;
    const formInput = input;

    formInput.classList.remove('success');
    formInput.classList.add('error');
    text.textContent = message;
};

// console.log("input");

// remove error message
const showSuccess = (input, text) => {

    const formInput = input;
    const formParent = input.parentElement;

    formInput.classList.remove('error');
    formInput.classList.add('success');

    text.textContent = "";
};
// console.log("text");

const checkEmail = () => {
    let valid = false;
    
    let emailError = document.getElementById('small');
    const mail = userEmail.value.trim();
    if (!isRequired(mail)) {
        showError(userEmail, 'Email cannot be empty', emailError);
    } else if (!isEmailValid(mail)) {
        showError(userEmail, 'Please check your email', emailError);
    } else {
        showSuccess(userEmail, emailError);
        valid = true;
    }
    
    return valid;
};
// console.log('small');

const checkEmail2 = () => {
    let valid = false;
    
    let emailError = document.getElementById('small2');
    const mail = userEmail2.value.trim();
    if (!isRequired(mail)) {
        showError(userEmail2, 'Email cannot be empty', emailError);
    } else if (!isEmailValid(mail)) {
        showError(userEmail2, 'Please check your email', emailError);
    } else {
        showSuccess(userEmail2, emailError);
        valid = true;
    }

    return valid;
};


const debounce = (fn, delay = 3000) => {
    let timeoutId;
    return (...args) => {
        // cancel previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // set up a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

submit.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'email':
            checkEmail();
    }
}));

submit2.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'email2':
            checkEmail2();
    }
}));


submit.addEventListener("click", function (e) {

    e.preventDefault();

    // validate field
    let isEmailValid = checkEmail();
});

submit2.addEventListener("click", function (e) {

    e.preventDefault();

    // validate field
    let isEmailValid2 = checkEmail2();
});
