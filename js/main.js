/*eslint-env browser*/

//HELPER FUNCTION
var $ = function (id) {
    'use strict';
    return document.getElementById(id);
};

window.addEventListener('load', function () {
    'use strict';

    //DISPLAYS MODAL
    $('order').addEventListener('click', function () {
        $('my-modal').style.display = 'flex';
    });

    //CLOSES MODAL
    $('close').addEventListener('click', function () {
        $('my-modal').style.display = 'none';
    });

    $('submit-address').addEventListener('click', function (e) {
        var inputs = document.querySelectorAll('#info-form');
        if (!validation(inputs)) {
            e.preventDefault()
        } else {
            storeAddress(inputs)    
        }
    });
});

//VALIDATES ADDRESS INPUTS 
function validation(inputs) {
    //console.log(inputs[0][3])
    var valid = true;
    for (var i = 0; i < inputs[0].length; i++) {
        if (inputs[0][i].value === '' && inputs[0][i].id !== 'other') {
            //console.log(inputs[i]); 
            inputs[0][i].style.border = '1px solid red';
            valid = false;
        } else {
            inputs[0][i].style.border = 'none';
        }
    }
    return valid;
}

//STORES ADDRESS TO LOCAL STORAGE
function storeAddress(inputs) {
    var inputArray = [];
    console.log(inputs[0]);
    for (var i = 1; i < inputs[0].length; i++) {
        inputArray.push(inputs[0][i].value);
    }
    
    sessionStorage.setItem('address', JSON.stringify(inputArray));
}
