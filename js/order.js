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
        displayAmount(amount);
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
    $('street').innerText = address[4];
    $('city').innerText = address[5];
    $('state').innerText = address[6];
    $('zip-code').innerText = address[7];

    if (address[3].length === 0) {
        $('other').style.display = 'none';
    }
}

function displayAmount(amount){
    'use strict';
    //console.log('displayAmount');
    
    if(amount === 0){
        $('amount')
    }
}

