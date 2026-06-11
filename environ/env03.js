let count = 0;
let buttonCreature = {
    name: "Globber",
    species: "creature",
    favoriteFood: "clicks",
    moods: ["awake", "alive", "known", "present", "here", "confused"]
};
$("#needy-button").click(function () {

    count = count + 1;
    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];

    let message = "<p>You said goodbye " + count + " times.</p>";
    
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