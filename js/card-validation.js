/*eslint-env browser*/

//HELPER FUNCTION
var $ = function (id) {
    'use strict';
    return document.getElementById(id);
};

window.addEventListener('load', function () {
    'use strict';

    function main() {

    }

    $('submit-order').addEventListener('click', function (e) {
        e.preventDefault();

        validateCardNumber();
        validateDate();

    });

    main();
});

function validateCardNumber() {
    'use strict';
    var cardNumber = $('credit').value;
    cardNumber = parseInt(cardNumber, 10);

    if (isNaN(cardNumber)) {
        $('credit').style.border = '1px solid red';
        return false;
    } else {
        $('credit').style.border = '1px solid #16ba4f';
    }
    return true;

}
    
function validateDate() {
    'use strict';
    
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();
    
    var expirationDate = $('ex-date');
    
    
    
}
