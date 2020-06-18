var formElement=document.forms.INFO;
    formElement.onsubmit=validateInfoForm;

    function validateInfoForm() {

        var fioElement=formElement.elements.FIO;
        var emailElement=formElement.elements.EMAIL;

        var fioValue=fioElement.value;
        var emailValue=emailElement.value;
        var re=/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
        

        if ( fioValue.length>30 ) {
            alert('Введите пожалуйста имя не длиннее 30 символов!');
            fioElement.focus();
            return false;
        }
      
         if (!re.test(emailValue)) {
            alert ('Проверьте e-mail!');
             emailElement.focus();
              return false;
        }
 return true;
    }


 
