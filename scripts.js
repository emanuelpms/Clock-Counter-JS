setInterval(function () {
  var hours = new Date()

  var hour = hours.getHours()
  var minute = hours.getMinutes()
  var seconds = hours.getSeconds()

  if (hour < 10) {
    hour = '0' + hours.getHours()
    
  }

  if (minute < 10) {
    minute = '0' + hours.getMinutes()
  }

  if (seconds < 10) {
    seconds = '0' + hours.getSeconds()
  }

  var hora = document.querySelector('.hora');

  hora.textContent =  hour + ':' + minute + ':' + seconds
  
}, 1000)
