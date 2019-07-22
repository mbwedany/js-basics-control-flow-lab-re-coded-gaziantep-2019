function scuberGreetingForFeet(feetValue){
  // Write your code here!
  let charge;
    if (feetValue <= 400){
      charge = "This one is on me!";
    }
    else if (feetValue > 2000 && feetValue <= 2500){
<<<<<<< HEAD
      charge = "I will gladly take your thirty bucks.";
    }
    else {
      charge = "No can do.";
=======
      charge = "I will gladly take your thirty bucks";
    }
    else {
      charge = "Oops, Sorry";
>>>>>>> ea12ec25fad6e9233f85684ba960e09abc40dd8b
    }
    return charge;
}

function ternaryCheckCity(city){
  // Write your code here!
  let forCity;
  if (city === "NYC"){
    forCity = "Ok, sounds good.";
  }
  else{
    forCity = "No go.";
  }
  return forCity;
}

function switchOnCharmFromTip(Tips){
  // Write your code here!
  let tipAnswer;
  
  
  if (Tips === "generous"){
    tipAnswer = "Thank you so much.";
  }
  else if (Tips === "not as generous"){
    tipAnswer = "Thank you.";
  }
  else {
    tipAnswer = "Bye.";
  }
  return tipAnswer;
}