function supportEmail(){
    console.log("Enviando...")
    var urlSupport = "https://backend-hiperefe.herokuapp.com/supportEmail";
    var data = {
        userSupport: 'Douglas Hernandez',
        emailSupport: 'douglasalexander683@gmail.com',
        nameContact: getTextItem("txtName"),
        lastContact: getTextItem("txtLast"),
        emailContact: getTextItem("txtEmail"),
        phoneContact: getTextItem("txtPhone"),
        message: getTextItem("txtMessage")
    }

    fetch(urlSupport, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
}


function getTextItem(id){
    let text = document.getElementById(id).value;

    return text
}