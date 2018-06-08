/*eslint-env browser*/

//REGEX PATTERNS 
var regexPatterns = {
    inputName: /^[A-Za-z]$/g,
    inputPhone: /^\(\d{3}[)]\d{3}-\d{4}$|^\(\d{3}\)\s\d{3}-\d{4}$|^\d{10}$/,
    inputZip: /^\d{5}$/g,
    inputState: /^[a-z]{2}$/gi,
};

//HELPER FUNCTION
var $ = function (id) {
    'use strict';
    return document.getElementById(id);
};

window.addEventListener('load', function () {
    'use strict';

    var addressType = $('inputAddress-type');

    //DISPLAY OTHER INPUT
    addressType.addEventListener('change', function () {

        if (addressType.value === 'other') {
            $('inputOther').style.visibility = 'visible';
        } else {
            $('inputOther').style.visibility = 'hidden';
        }
    })

    //DISPLAYS MODAL
    $('order').addEventListener('click', function () {
        $('my-modal').style.display = 'flex';
    });

    //CLOSES MODAL
    $('close').addEventListener('click', function () {
        $('my-modal').style.display = 'none';
    });

    //GET INPUTS AND ADDS EVENT LISTENER
    var inputs = document.querySelectorAll('#info-form');

    for (var i = 0; i < inputs[0].length; i++) {

        if (inputs[0][i].id != 'other' && inputs[0][i].id != 'inputAddress') {
            //console.log(inputs[0][i].id);
            inputs[0][i].addEventListener('keyup', function (e) {
                //console.log('change')
                //patternValidate(e.target, regexPatterns[e.target.id]);
            });
        }
    }


    //LISTENS FOR SUBMIT BUTTON PRESS
    $('submit-address').addEventListener('click', function (e) {
        e.preventDefault();
        var address = getAddress(inputs);

        validation(inputs);
        inputValidation();

        if (inputValidation()) {
            var confirm = window.confirm('Your Adress is ' + address);
            if (confirm) {
                storeAddress(inputs);
            } else {
                e.preventDefault();
            }
        } else {
            e.preventDefault();
        }
    });
});

function getAddress(inputs) {
    'use strict';
    var address = [];
    for (var i = 2; i < inputs[0].length; i++) {
        address[i] = inputs[0][i].value;
    }

    return address.join(' ');
}

//VALIDATES ADDRESS INPUTS 
function validation(inputs) {
    var valid = true;
    for (var i = 0; i < inputs[0].length; i++) {
        if (inputs[0][i].value === '' && inputs[0][i].id !== 'other') {
            //console.log(inputs[i]); 
            //inputs[0][i].style.border = '1px solid red';
            inputs[0][i].classList.add('error-input');
            valid = false;
        } else {
            inputs[0][i].classList.remove('error-input');
            //inputs[0][i].style.border = '1px solid #16ba4f';
        }
    }
    return valid;
}

//INPUT VALIDATION
function inputValidation() {
    'use strict';
    var valid = true;
//    var nameRegex = /^[a-z]$/gi;
//    var zipRegex = /^\d{5}$/g;
//    var stateRegex = /^[a-z]{2}$/gi;

    //console.log(stateRegex.test($('inputState')));


    //ZIP CODE VALIDATION
    if (regexPatterns.inputZip.test($('inputZip').value)) {
        $('inputZip').classList.remove('error-input');
    } else {
        console.log($('inputZip'));
        $('inputZip').classList.add('error-input');
        valid = false;
    }
    //NAME VALIDATION
    if(regexPatterns.inputName.test('inputName').value) {
        $('inputName').classList.remove('error-input');
    } else {
        console.log($('inputZip'));
        $('inputName').classList.add('error-input');
        valid = false;
    }

    console.log(regexPatterns.inputName.test($('inputName').value));
    //return zipRegex.test($('inputZip').value);
}

function patternValidate(input, pattern) {
    'use strict';
    //console.log(input, pattern)
    if (pattern) {
        if (pattern.test(input.value.trim())) {
            console.log('good')
            input.classList.remove('error-input');
            //input.classList.add('valid');
        } else {
            console.log(input);
            //input.classList.remove('valid');
            input.classList.add('error-input');
        }
    }

}

//STORES ADDRESS TO LOCAL STORAGE
function storeAddress(inputs) {
    var inputArray = [];

    for (var i = 1; i < inputs[0].length; i++) {
        inputArray.push(inputs[0][i].value);
    }

    sessionStorage.setItem('address', JSON.stringify(inputArray));
}
