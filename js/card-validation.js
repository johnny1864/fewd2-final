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
    
    $('submit-order').addEventListener('click', function(e){
        e.preventDefault();
       validateCard() 
    });
    
    main();
});

function validateCard() {
    'use strict';
    var cardNumber = $('credit').value;
    cardNumber = parseInt(cardNumber);
    
    if(isNaN(cardNumber)){
        return false;
    }
    return true;
    
}




