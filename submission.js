function calculateTax(income, expenses) {
    if (income >= 0 && expenses >= 0 && income >= expenses) {
      let sumIncome = income - expenses;
      let tax = (sumIncome / 100) * 20;
      return tax;
    } else return "Invalid Input";
}

function sendNotification(email) {
    if (!email.includes("@")) return "Invalid email";
    let emailAray = email.split("@");
    let emailUser = emailAray[0];
    let domain = emailAray[1];
    return `${emailUser} sent you an email from ${domain}`;
}

function checkDigitsInName(name) {
    if(typeof name !== "string"){
        return "invalid Input"
    }

    for(let i = 0; i < name.length; i++) {
       if(!isNaN(name[i]) && name[i] !== ' '){
        return true;
       } 
    }
    return false;
}

function calculateFinalScore(obj) {
    if(typeof obj !== "object"){
        return "invalid Input"
    } 
    let totalMarks = obj.testScore + obj.schoolGrade;
    if(info.isFFamily){
        totalMarks = totalMarks + 20
    }
    if(totalMarks >= 80){
        return true
    }
    else{
        return false
    }
}

function waitingTime(waitingTimes, serialNumber) {
    if (
      Array.isArray(waitingTimes) === true &&
      typeof serialNumber === "number"
    ) {
      let timelength = waitingTimes.length;
      let countTime = 0;
      for (let i of waitingTimes) {
        countTime = countTime + i;
      }
      let time = Math.round(countTime / timelength);
      let serialNumberAndWaite = serialNumber - 1 - timelength;
      let sum = time * serialNumberAndWaite;
      return sum;
    } else return "Invalid Input";
}