function calculateBMI() {
  let name = document.getElementById("name").value;
  let lastName = document.getElementById("lastName").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  let bmi = weight / (height * height);

  let result = document.getElementById("result");

  if (bmi >= 18.5 && bmi < 24.9) {
    result.innerHTML = name + " " + lastName + " وزن شما ایده ال است ";
    result.classList.add("bmi-font", "color-Normalweight");
  } else if (bmi >= 25 && bmi < 29.9) {
    result.innerHTML = name + " " + lastName + " شما اضافه وزن دارید ";
    result.classList.add("bmi-font", "color-overweight");
  } else if (bmi >= 30 && bmi < 39.9) {
    result.innerHTML = name + " " + lastName + " شما چاق هستید ";
    result.classList.add("bmi-font", "color-obese");
  } else if (bmi > 40) {
    result.innerHTML = name + " " + lastName + " شما چاقی مفرط دارید ";
    result.classList.add("bmi-font", "color-overobese");
  }
}
