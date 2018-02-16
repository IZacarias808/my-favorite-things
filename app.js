var btn1 = document.getElementById("button1");
var btn2 = document.getElementById("button2");
var btn3 = document.getElementById("button3");
var response1 = document.getElementById("response");
var response2 = document.getElementById("response2");
var response3 = document.getElementById("response3");
var favoriteDeserts = ["Ice cream", "Brownies", "Dawn Dishwasher Packs"];
var favoriteFoods = ["Mr.Clean Magic Erasers", "Chicken Nuggets", "Tide pods"];
var favoriteGames = ["Fortnite", "Minecraft", "ROBLOX"];
var i;

btn1.addEventListener("click", function(){
    response1.innerHTML = "Look in console!";
    for(i=0;i<3;i++){
    console.log(favoriteDeserts[i]);
    }
});
btn2.addEventListener("click", function(){
    response2.innerHTML = "Look in console!";
    for(i=0;i<3;i++){
    console.log(favoriteFoods[i]);
};
});
btn3.addEventListener("click", function(){
    response3.innerHTML = "Look in console!";
    for(i=0;i<3;i++){
    console.log(favoriteGames[i]);
};
});