/*eslint-env browser*/

//HELPER FUNCTION
var $ = function (id) {
    'use strict';
    return document.getElementById(id);
};

window.addEventListener('load', function() {
    'use strict';
    
   function main(){
       
   } 
    
    $('submit-billing').addEventListener('click', function(e){
        e.preventDefault();
        validateCardNumber() 
    });
    
    main();
});

function validate(){
    'use strict';
    
    
}

function validateCardNumber() {
    'use strict';
    var cardNumber = $('credit').value;
    cardNumber = parseInt(cardNumber);
    
    if(isNaN(cardNumber)){
        $('credit').style.border = '1px solid red';
        return false;
    }else {
        $('credit').style.border = '1px solid #ccc';
    }
    return true;
    
}






