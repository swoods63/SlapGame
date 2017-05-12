function GameController() {
  var gs = new GameService()
  //javascript
  /////private//
  var Item = function (name, modifier, description) {
    this.name = name;
    this.modifier = modifier;
    this.description = description;
  }
  /////private/////
  var items = {
    shield: new Item("Shield", 0.3, "This is an awesome shield!"),
    stick: new Item("Stick", 0.5, "This is an awesome stick!"),
    knife: new Item("Knife", 0.2, "This is an awesome knife!"),
  }

  ///////private///////
  var target = {
    items: [items.shield],
    name: "Rocky",
    health: 100,
    hits: 0,
    addMods: function () {
      var totalMod = 0;
      for (var i = 0; i < target.items.length; i++) {
        var mod = target.items[i].modifier;
        totalMod += mod;
      }
      return totalMod;
    }
  };



  // var health = 100;
  // var name = "target";
  // var hits = 0;

  //////public////
  var healthWire = document.getElementById("health");
  var hitsWire = document.getElementById("hits");
  var nameWire = document.getElementById("name");
  var itemsWire = document.getElementById("items");

  ///////public////		
  //update function
  function update() {
    if (target.health < 0) {
      target.health = 0;
    }
    healthWire.innerHTML = target.health.toFixed(2);
    hitsWire.innerHTML = target.hits;

  }///////public///
  function addItems(item) {
    ////private////
    target.items.push(item);
    console.log(target.items);
  }
  ////////public on down///
  //this function changes health
  function slap() {
    if (target.health > 0) {
      target.health -= 1 * target.addMods();
      target.hits++;
      $("#target").transition('shake');
      update();
    }
  };
  function punch() {
    if (target.health > 0) {
      target.health -= 5 * target.addMods();
      target.hits++;
      $("#target").transition('pulse');
      update();
    }
  };
  // alert(health) //This let you check your code//

  function kick() {
    if (target.health > 0) {
      target.health -= 10 * target.addMods();
      target.hits++;
      $("#target").transition('bounce');
      update();
    }
  };
  update();
  nameWire.innerHTML = target.name;

}


// beat up
// https://cdn.pixabay.com/photo/2013/07/12/16/24/smiley-150838_960_720.png