let count = 0;
let buttonCreature = {
    name: "Rat",
    species: "Rat",
    favoriteFood: "Cigarrete",
    moods: ["gone", "rat", "okat"]
};
$("#needy-button").click(function () {

    count = count + 1;
    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];

    let message = "<p>You said goodbye " + count + " times.</p>";
    
    let test = "<p>It will miss you</p>";

    let something = "<p> Say goodbye again</p>"; 
         if(count >5) {
           $("#answer").html(test)
             };
         if(count >15){

        test = test + "<p>It will be okay</p>"
      $("#answer").html(test)
                         } ;

          if(count > 20){
    
   }
    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);
});
$("#other-button").click(function () {

    count = count + 1;
    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];

    let message = "<p>Okay</p>";
    
    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);
});

$("#needy-button").hover(
  function () {
    let something = "<p> Go ahead </p>";
     $("#thought").html(something),
 function (){
     let something = "<p> Move </p>";
     $("#thought").html(something)
    }
  })

$("#other-button").hover(
  function (){
     let something = "<p> Wrong One </p>"
     $("#thought").html(something)
    
  })