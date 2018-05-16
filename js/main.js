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


});
