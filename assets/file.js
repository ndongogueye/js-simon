let targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 1);
targetDate.setHours(9);
targetDate.setMinutes(30);
targetDate.setSeconds(0);


function updateCountdown() {
    let now = new Date();
    let timeDifference = targetDate - now;
  
    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      console.log("Conto alla rovescia finito");
      return;
    }
  
   
    let ore = Math.floor(timeDifference / (1000 * 60 * 60));
    let minuti = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let secondi = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
    console.log("Conto alla rovescia: " + ore + "h " + minuti + "m " + secondi + "s");
  }
  
  let countdownInterval = setInterval(updateCountdown, 1000);