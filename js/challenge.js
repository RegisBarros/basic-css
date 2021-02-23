// challenge 1: Your age in Days

const getAgeInDays = () => {
  let birthYear = prompt("What year were you born... Good friend?");
  let ageInDays = (new Date().getFullYear() - birthYear) * 365;

  let h1 = document.createElement("h1");
  let textAnswer = document.createTextNode(`You are ${ageInDays} days old`);

  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);

  console.log(ageInDays);
};

const reset = () => {
  document.getElementById("ageInDays").remove();
};

const generateCat = () => {
  let image = document.createElement("img");
  let div = document.getElementById("flex-cat-gen");

  image.src = "http://thecatapi.com/api/images/get?format=src&type=gif";
  div.appendChild(image);
};
