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

    $('submit-address').addEventListener('click', function(){
        var inputs = document.querySelectorAll('#info-form input');
        validation(inputs);
    });
});

function validation(inputs){
    console.log(inputs[0])
    for(var i=0; i<inputs.length; i++){
        if(inputs[i].value === '' && inputs[i].id !=='other'){
            console.log('enter input');
            
        }
    }
}
