function getRandomPosition() {
  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;

  var randomX = Math.floor(Math.random() * (screenWidth - 100));
  var randomY = Math.floor(Math.random() * (screenHeight - 100));

  return { x: randomX, y: randomY };
}

function createRandomDiv() {
  const flowers = ["sunflower", "rose", "dahlia", "marigold"];
  const flowerid = Math.floor(Math.random() * 10) % 4;
  var newDiv = document.createElement("div");
  newDiv.className = "random-div";

  var position = getRandomPosition();
  newDiv.style.left = position.x + "px";
  newDiv.style.top = position.y + "px";

  var img1 = document.createElement("img");
  img1.classList.add(flowers[flowerid]);

  img1.src = "./" + flowers[flowerid] + ".jpg";
  img1.alt = "Random Image";
  newDiv.appendChild(img1);

  document.body.appendChild(newDiv);
}

setInterval(createRandomDiv, Math.floor(Math.random() * 100));
