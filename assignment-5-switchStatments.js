// label1 and label2 should accept any of the following strings: 
// "seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"

const labels = ["seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"];

// If the inputs are valid, it should return an array with 2 variables inside of it: 
// value3, and  label3. For example:
// return [5,"minutes"]; 

const validateInputs = (val1, val2, lab1, lab2) => {
  console.log();
  return val1 > -1 && val2 > -1 && 
         typeof lab1 === "string" && typeof lab2 === "string" &&
         labels.indexOf(lab1.toLowerCase()) > 1 && labels.indexOf(lab2.toLowerCase()) > -1;

}

// conversion to seconds of (min to sec, hrs to sec )

const convertToSeconds = (val, labelOne) => {
  labelOne = labelOne.toLowerCase();
  
  switch(labelOne){
    case "second":
    case "seconds":
      return val;
    case "minute":
    case "minutes":
      return (val * 60);
    case "hour":
    case "hours":
      return (val * 60 * 60);
    case "day":
    case "days":
      return (val * 60 * 60 * 24);
    default:
      return 0;
  }
}

// Create a function called "timeAdder" that can add two time values together. 
// For example, it should be able to add 25 hours and 3 days together. 

// The function should accept 4 parameters:
// (value1, label1, value2, label2)


const timeAdder = function(value1, label1, value2, label2) {
    if (validateInputs(value1, value2, label1, label2)) {
        const output = [];
        let t1 = convertToSeconds(value1, label1);
        let t2 = convertToSeconds(value2, label2);

        if (t1 && t2){
            totaltime = t1 + t2;
        }

        //convert total time format
        if (totaltime === 86400) {
            output.push(1, "day");
        } 
        else if (totaltime % 86400 === 0 && totaltime > 86400) {
            const days = totaltime / 86400;
            output.push(days, "days");
        } 
        else if (totaltime === 3600) {
            output.push(1, "hour");
        } 
        else if (totaltime % 3600 === 0 && totaltime > 3600) {
            const hours = totaltime / 3600;
            output.push(hours, "hours");
        } 
        else if (totaltime === 60) {
            output.push(1, "minute");
        } 
        else if (totaltime % 60 === 0 && totaltime > 60) {
            const minutes = totaltime / 60;
            output.push(minutes, "minutes");
        } 
        else if (totaltime === 1) {
            output.push(1, "second");
        } 
        else {
            output.push(totaltime, "seconds");
        }
        return output;
    } else
        return false;
}

console.log(timeAdder(1, "hour", 1, "minutes"));
console.log(timeAdder(5, "hours", 15, "minute"))
console.log(timeAdder(1, "minute", 240, "seconds"));
console.log(timeAdder(5, "days", 25, "hours"));
// false
console.log(timeAdder(false, false, 5, "minutes"));
console.log(timeAdder({}, "days", 5, "minutes"));