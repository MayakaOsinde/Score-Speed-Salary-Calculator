/* Code Challange #1
   Code written by: Mayaka Osinde Onwanga, #El Mooncho*

   Redundunt steps to solutions;
   1. Create function.
   2. Create variable for the value to be input by user.
   3. Collect value from  HTML input element.
   4. Create parameters for the respective categories.
   5. print respective output in paragraph within HTML.  
   
*/

// Student grade generator (Toy Problem)

function grade() {
  let score = parseInt(document.getElementById("score").value, 10); // parseInt converts my input to an integer.

  // the .value attribute was paramount to acquire input from html as a number. 10 is a radix.

  console.log(typeof score); // I needed to confirm the data type of my input value. Expected a number.
  console.log(score); // I used this to print the input value in the console to verify.

  // These are my parameters.

  if (score > 79 && score <= 100) {
    document.getElementById("result").textContent = "A"; // This code prints my outcome in the <p> section with the specified #ID.
  } else if (score >= 60 && score <= 79) {
    document.getElementById("result").textContent = "B"; // .textContent ensures my output is a string, such as are the outputs.
  } else if (score > 49 && score <= 59) {
    document.getElementById("result").textContent = "C";
  } else if (score >= 40 && score <= 49) {
    document.getElementById("result").textContent = "D";
  } else if (score >= 0 && score < 40) {
    document.getElementById("result").textContent = "E";
  } else {
    document.getElementById("result").textContent = "Invalid Score"; 
  }
}

// Speed detector (Toy Problem)

function speedLimit() {
  let speed = parseInt(document.getElementById("speed").value, 10);

  console.log(typeof speed); // verify my input is a number
  console.log(speed); // print value in console

  let demerits = 0;

  if (speed >= 0 && speed <= 70) {
    document.getElementById("speed-output").textContent = "OK"; // Any values within the range of 0 - 70 are returned as having an "OK" status
  } else if (speed > 70) {
    let speedDifference = speed - 70;

    /* To acquire the total speed above the speed limit i have used a subtraction operator. 
    To find the total number of demerit points i would have to print, I have divided the total speed above 70 (let speedDifference = speed - 70)  by 5 in the code below.*/

    demerits = Math.floor(speedDifference / 5);

    /* Math.floor allows me to use the floor value of my speed increment.
     This ensures there has to be a complete value increment of 5 above 70 to issue one demerit.
     The output of (Math.floor(speedDifference / 5)) is redeclared as the variable demerits*/

    if (demerits >= 12) {
      document.getElementById("speed-output").textContent = "License revoked"; // If demerit points exceed 12, license revoked message is printed.
    } else {
      document.getElementById("speed-output").textContent = // "Points:" in the output paragraph
        "Demerit points: " + demerits;
    }
  } else {
    document.getElementById("speed-output").textContent = //Error message for any input that is below 0. Unlike velocity, there is no negative speed.
      "Speed can only be greater than 0";
  }
}

// Net Salary Calculator (Toy Problem)

function netSalaryCalculator() {
  let basicSalaryInput = parseInt(
    document.getElementById("basicSalaryInput").value,
    10
  );
  let benefitsInput = parseInt(
    document.getElementById("benefitsInput").value,
    10
  );

  // The above declared variables are initialized by a value input by the user.
  // This value is converted to an integer using the .value, 10 attribute.

  let grossSalary = basicSalaryInput + benefitsInput;

  // To find taxable pay, we declare a variable grossSalary that is a sum total of both the benefits and basic salary inputs.

  let paye = 0;

  if (grossSalary <= 24000) {
    paye = 0.1;
  } else if (grossSalary <= 32333) {
    paye = 0.25;
  } else if (grossSalary > 32333) {
    paye = 0.3;
  } else {
  }

  // As per the paye rates provided in the website, the above assum[tions were made.
  let nhif = 0;

  if (grossSalary <= 5999) {
    nhif = 150;
  } else if (grossSalary <= 7999) {
    nhif = 300;
  } else if (grossSalary <= 11999) {
    nhif = 400;
  } else if (grossSalary <= 14999) {
    nhif = 500;
  } else if (grossSalary <= 19999) {
    nhif = 600;
  } else if (grossSalary <= 24999) {
    nhif = 750;
  } else if (grossSalary <= 29999) {
    nhif = 850;
  } else if (grossSalary <= 34999) {
    nhif = 900;
  } else if (grossSalary <= 39999) {
    nhif = 950;
  } else if (grossSalary <= 44999) {
    nhif = 1000;
  } else if (grossSalary <= 49999) {
    nhif = 1100;
  } else if (grossSalary <= 59999) {
    nhif = 1200;
  } else if (grossSalary <= 69999) {
    nhif = 1300;
  } else if (grossSalary <= 79999) {
    nhif = 1400;
  } else if (grossSalary <= 89999) {
    nhif = 1500;
  } else if (grossSalary <= 99999) {
    nhif = 1600;
  } else if (grossSalary >= 100000) {
    nhif = 1700;
  } else {
  }

  // As per the rates provided in the NHIF website, the above assumptions were made.

  let nssf = 0;

  if (grossSalary < 18000) {
    nssf = 0.06;
  } else if (grossSalary > 18000) {
    nssf = 18000 * 0.06;
  } else if (grossSalary <= 0) {
    document.getElementById("salaryBenefitsOutput").textContent =
      "Invalid input. Salary must be greater than 0.";
  } else {
  }

  // As per the rates provided in the NSSF website, the above assumptions were made.
  // I understood NSSF to be paid up to a deductible amount of 18000. The tiering system I deemed inconsequential with regards to the question possed for the challange.
  // So any taxeable amount about 18000 would still incur a deduction of 6 percent of 18ooo while any amount under would be subject to 6 percent of that specific total amount.

  let netDeductions = grossSalary * paye + nhif + nssf;

  let netSalary = grossSalary - netDeductions;
  document.getElementById("netSalaryOutput").textContent = netSalary;

  /* In a bid to ensure precision of my code, 
  I simply assigned values where the rates were defined and created a singular arithmetic equation that would tabulate all assigned variableas at the end of the code,
  to output the net salary.
  This output is printed in the paragraph with the id# netSalaryOutput*/
}
