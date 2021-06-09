

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

function supportEmail() {
  waitingEmail()

  if (validateInput("txtName") && validateInput('txtLast') && validateInput("txtEmail") && validateInput('txtMessage')) {

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
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then((response) => {

        console.log('Success:', response)

        if (response.status == 'success') {
          alertEmail('success', 'Email sent successfully, we will contact you within 24 hours');
          resetInput("txtName")
          resetInput("txtLast")
          resetInput("txtEmail")
          resetInput("txtPhone")
          resetInput("txtMessage")

        } else {
          alertEmail('error', 'Email could not be sent')
        }
      });
  }else{
    alertEmail("error", "Incomplete data")
  }
}


function getTextItem(id) {
  let text = document.getElementById(id).value;

  return text
}

function alertEmail(status, message) {
  Toast.fire({
    icon: status,
    title: message
  })

}

function validateInput(id) {
  let text = document.getElementById(id).value;

  if (text.length === 0) {
    return false
  } else {
    return true
  }

}


function resetInput(id) {
  document.getElementById(id).value = ""

}

function waitingEmail(){
  Swal.fire({
    icon: "info",
    title: 'Wait a moment...',
    didOpen: () =>{
      Swal.showLoading()
    }
  })
}