


/*     <form name="login">
        <input type="text" name="username">
        <input name="email" type="email">
        <input type="button" value="Enviar" id="checkingUserName" />
    </form> */
    


    //https://developer.mozilla.org/en-US/docs/Web/API/Document/forms
      const forms = document.forms['login'];
    forms.elements.email.placeholder = 'test@example.com';
    forms.elements.username.placeholder = 'your login';

    //getting data
     document.getElementById("checkingUserName").onclick = function(event) {
        event.preventDefault()
    var name = document.forms["login"].username.value;
        alert(name)
     }
