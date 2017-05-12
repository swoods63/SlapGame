function GameService(){
  var Item = function (name, modifier, description) {
  this.name = name;
  this.modifier = modifier;
  this.description = description;
}

var items = {
	shield:new Item("Shield",0.3,"This is an awesome shield!"),
  stick:new Item("Stick", 0.5,"This is an awesome stick!"),
	knife:new Item("Knife",0.2,"This is an awesome knife!"),
}
/////public///
this.getTarget = function(){
  return Object.assign(target);
}
////////Private/////////
var target = {
  items:[items.shield], 
  name:"Rocky",
  health:100,
  hits:0,
  addMods:function(){
    var totalMod = 0;
    for (var i = 0; i < target.items.length; i++) {
      var mod = target.items[i].modifier;
      totalMod += mod;
    }
    return totalMod;
  }
};

function addItems(item){
   target.items.push(item);
   console.log(target.items);
 }
}