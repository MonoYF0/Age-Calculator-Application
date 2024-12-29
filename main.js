function submitDate() {
  let daysInput = document.getElementById("daysInput").value;
  let styleDaysInput = document.getElementById("daysInput").style;
  let daysOutput = document.getElementById("daysOutput");
  let monthsInput = document.getElementById("monthsInput").value;
  let styleMonthsInput = document.getElementById("monthsInput").style;
  let monthsOutput = document.getElementById("monthsOutput");
  let yearsInput = document.getElementById("yearsInput").value;
  let styleYearsInput = document.getElementById("yearsInput").style;
  let yearsOutput = document.getElementById("yearsOutput");
  let dateNow = new Date();
  let dayLabel = document.getElementById("day-label");
  let monthLabel = document.getElementById("month-label");
  let yearLabel = document.getElementById("day-label");
  // Parse user input into a Date object for accurate calculations
  let birthDate;
  try {
    birthDate = new Date(`${monthsInput} ${daysInput} ${yearsInput}`);
  } catch (error) {
    // Handle invalid date format
    window.alert(
      "Invalid date format. Please enter date in MM DD YYYY format."
    );
    styleDaysInput.border = "red 1px solid";
    styleMonthsInput.border = "red 1px solid";
    styleYearsInput.border = "red 1px solid";
    return;
  }

  function validation() {
    // Reset border styles before validation
    styleDaysInput.border = "";
    styleMonthsInput.border = "";
    styleYearsInput.border = "";

    // Validate user input
    if (!yearsInput || yearsInput <= 0) {
      styleYearsInput.border = "red 1px solid";
      return false;
    }
    if (!daysInput || daysInput <= 0) {
      styleDaysInput.border = "red 1px solid";
      return false;
    }
    if (!monthsInput || monthsInput <= 0) {
      styleMonthsInput.border = "red 1px solid";
      return false;
    }
    return true;
  }

  if (!validation()) {
    return;
  }

  // Calculate age in years, months and days using Date object methods
  const ageInDays = Math.floor((dateNow - birthDate) / (1000 * 60 * 60 * 24));
  const years = Math.floor(ageInDays / 365);
  const months = Math.floor((ageInDays % 365) / 30);
  const days = ageInDays % 30;

  yearsOutput.innerHTML = years;
  monthsOutput.innerHTML = months;
  daysOutput.innerHTML = days;
  console.log(ageInDays);
}
