/*eslint-env browser*/

//HELPER FUNCTION
var $ = function (id) {
    'use strict';
    return document.getElementById(id);
};

window.addEventListener('load', function () {
    'use strict';
    
    var addressType = $('inputAddress-type');

    //DISPLAY OTHER INPUT
    addressType.addEventListener('change', function(){
        
        if(addressType.value === 'other'){
            $('inputOther').style.visibility = 'visible';
        }else {
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


    $('submit-address').addEventListener('click', function (e) {
    
        var inputs = document.querySelectorAll('#info-form');
        var address = getAddress(inputs);
        
        console.log(address);
        
        if (!validation(inputs)) {
            e.preventDefault();
        } else {
            var confirm = window.confirm('Your Adress is ' + address);
            if (confirm){
                storeAddress(inputs);
            }else{
                e.preventDefault();
            }  
        }
    });
});

function getAddress(inputs){
    'use strict';
    var address = [];
    for (var i = 2; i < inputs[0].length; i++){
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
            inputs[0][i].style.border = '1px solid red';
            valid = false;
        } else {
            inputs[0][i].style.border = '1px solid #ccc';
        }
    }
    return valid;
}

//STORES ADDRESS TO LOCAL STORAGE
function storeAddress(inputs) {
    var inputArray = [];

    for (var i = 1; i < inputs[0].length; i++) {
        inputArray.push(inputs[0][i].value);
    }

    sessionStorage.setItem('address', JSON.stringify(inputArray));
}
