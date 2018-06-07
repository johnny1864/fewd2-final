/*eslint-env browser*/

//HELPER FUNCTION
var $ = function (id) {
    'use strict';
    return document.getElementById(id);
};

window.addEventListener('load', function () {
    'use strict';


    $('submit-order').addEventListener('click', function (e) {
        e.preventDefault();

        cardNumberValidate();
        dateValidate();
        luhnValidation();
    });
    
    $('credit').addEventListener('keyup', function(){
       cardType(); 
    });

});


function validate(){
    'use strict';
    
    
}


function cardNumberValidate() {
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

function dateValidate() {
    'use strict';

    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();
    var inputDate = $('ex-date').value;
}

function luhnValidation() {
    'use strict';

    var sum = 0;
    var temp = 0;
    var tempArr = [];
    var cardNumber = $('credit').value;

    cardNumber = cardNumber.split('').reverse();
    
    for (var i = 0; i<cardNumber.length; i++){
        temp = (+cardNumber[i])*2;
        //console.log(temp);
        if(i%2 !== 0){
            //console.log(temp);
            if(temp >= 10){
                tempArr = temp.toString().split('');
                //console.log(tempArr);
                sum += +tempArr[0];
                sum += +tempArr[1];
            }else{
                sum += temp;
            }
        }else{
            sum += (+cardNumber[i]);
        }
    }
    
    if(sum/10 === 0){
      return true;  
    }
    
    return false;
}

//4512113014843252
function cardType(){
    'use strict';
    
    var cardNumber = $('credit').value;
    
    var firstTwoDigits = cardNumber.split('').slice(0, 2).join('');
    
    console.log(firstTwoDigits);
    
    if(cardNumber[0] === '4'){
        $('type').innerText = 'Visa';
    }else if(firstTwoDigits >= '51' && firstTwoDigits <= '55'){
        $('type').innerText = 'MasterCard';
    }else if(cardNumber[0] === '3'){
        $('type').innerText = 'American Express';
    }else {
        $('type').innerText = 'Invalid';
        return false;
    }
    
    return true;
}



