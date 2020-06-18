window.onload= function() {

    document.getElementById('toggler').onclick = function() {
        openbox('menu2', this);
        return false;
    };
};

function openbox(id, toggler) {
    var div = document.getElementById(id);

    if(div.style.display == 'block') {
        div.style.display = 'none';
        toggler.innerHTML = 'Меню:';
    }
    else {
        div.style.display = 'block';
        toggler.innerHTML = 'Меню:';
    }
}


var formElement=document.forms.INFO;
    formElement.onsubmit=validateInfoForm;

    function validateInfoForm() {

        var fioElement=formElement.elements.FIO;
 
        var fioValue=fioElement.value;
 

        if ( fioValue.length>30 ) {
            alert('Введите пожалуйста ФИО не длиннее 30 символов!');
            fioElement.focus();
            return false;
        }


        return true;
    }

 
