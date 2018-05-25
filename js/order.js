/*eslint-env browser*/

//HELPER FUNCTION
var $ = function (id) {
    'use strict';
    return document.getElementById(id);
};

window.addEventListener('load', function () {
    'use strict';

    function main() {
        var amount = 0;
        var address = getAddress();
        
        displayAddress(address);
        getAmount(amount);
        
        
        
    }

    main();
});

function getAddress() {
    'use strict';
    var address = sessionStorage.getItem('address');
    return JSON.parse(address);
}

function displayAddress(address) {
    'use strict';
    //console.log(address);
    
    if(!address){
        $('street').innerText = 'No Address Entered';
        return false;
    }
    $('street').innerText = address[4];
    $('city').innerText = address[5];
    $('state').innerText = address[6];
    $('zip-code').innerText = address[7];

    if (address[3].length === 0) {
        $('other').style.display = 'none';
    }
}

//
function getAmount(amount) {
    'use strict';
    
    if (amount === 0) {
        $('amount').innerText = '0.00'
    }
}


//VALIDATES FORM TO CHECK IF INPUT FIELDS ARE EMPTY
function validation(inputs){
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
