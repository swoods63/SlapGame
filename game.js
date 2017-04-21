var cats = [{
  id: 247,
  name: "Mr. Fluffy",
  imgUrl: "https://acm202.files.wordpress.com/2016/09/cats-politics-tn.jpg",
  happyStatus: "Purrrrrr",
  grumpyStatus: "rawrrrr",
  feralStatus: "hhhissssss!!",
  goneStatus: "Mr Fluffy has left for his meeting",
  petCount: 0
}]

function petCat(catId) {
  var petCount = document.getElementById("petCount"+catId) //creating an alias!
  var catStatus = document.getElementById("catStatus"+catId)
  var catButton = document.getElementById("catButton"+catId)
  var catPic = document.getElementById("catPic"+catId) //doc.stuff ref to html

  var targetCat = getCatById(catId)



  targetCat.petCount++
  petCount.innerHTML = targetCat.petCount
  if (targetCat.petCount > 5) {
    catStatus.innerHTML = targetCat.grumpyStatus
  }
  if (targetCat.petCount == 9) {
    catStatus.innerHTML = targetCat.feralStatus
  }
  if (targetCat.petCount == 10) {
    catStatus.innerHTML = targetCat.goneStatus
    catButton.disabled = true
    catPic.src = ""
  }
}

function getCatById(catId){

  for (var i = 0; i < cats.length; i++) {
    var cat = cats[i];
    
    if(cat.id == catId){
      return cat
    }

  }

}

function kittyBack(catId) {
  var petCount = document.getElementById("petCount"+catId) //creating an alias!
  var catStatus = document.getElementById("catStatus"+catId)
  var catButton = document.getElementById("catButton"+catId)
  var catPic = document.getElementById("catPic"+catId) //doc.stuff ref to html
  var targetCat = getCatById(catId)
  targetCat.petCount = 0
  petCount.innerHTML = targetCat.petCount
  catButton.disabled = false
  catStatus.innerHTML = targetCat.happyStatus
  catPic.src = targetCat.imgUrl
}

function drawCats(listOfCats) {
  var template = ""
  for (var i = 0; i < listOfCats.length; i++) {
    var cat = listOfCats[i]
    template += `
    <div>
      <img id="catPic${cat.id}" src="${cat.imgUrl}" alt="meow">
      <button 
        type="button" 
        id="catButton${cat.id}" 
        onclick="petCat(${cat.id})">
          pet 
      </button>
      <button type="button" onclick="kittyBack(${cat.id})">Kitty! Come back!!!</button>
      <h1 id="petCount${cat.id}">${cat.petCount}</h1>
      <h2 id="catStatus${cat.id}">${cat.happyStatus}</h2>
    </div>
    `
  }
  document.getElementById("cat-list").innerHTML = template
}
drawCats(cats)