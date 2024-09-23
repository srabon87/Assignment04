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