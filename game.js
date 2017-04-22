

var health = 100;
var name = "Rocky";
var hits = 0;
var healthWire = document.getElementById("health");
var hitsWire = document.getElementById("hits");
var nameWire = document.getElementById("name");

//update function
function update() {
   if (health < 0) {
      health = 0;
  }
  healthWire.innerHTML = health;
  hitsWire.innerHTML = hits;

}
//this function changes health
function slap() {
  if (health > 0) {
    health = health - 1;
    hits++;
    $("#target").transition('shake');
    update();
  }
};
function punch() {
  
    health = health - 5;
    hits++;

    $("#target").transition('pulse');
   
  update();
  // alert(health) //This let you check your code//
};

function kick() {
  if (health > 0){
  health = health - 10;
  hits++;
  $("#target").transition('bounce');
  update();
  }
};
update();
nameWire.innerHTML = name;




// beat up
// https://cdn.pixabay.com/photo/2013/07/12/16/24/smiley-150838_960_720.png













