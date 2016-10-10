const app = "I don't do much."

///// Austin Powers' bumpCounter
function bumpCounter(){
  var counter = 0;

  function addBump(){
    counter ++;
  }

  function getBumps(){
    return counter;
  }

  return {addBump, getBumps};
}

///// Dr. Evil's animal factory
function createAnimal(animalType){
  return function (deadlyDevice){
    return {animalType: animalType, deadlyDevice: deadlyDevice};
  };
}

var sharkCreator = createAnimal("Shark");

var sharkWithFrickinLaserbeam = sharkCreator("Laserbeam");

var sharkWithFrickinCannon = sharkCreator("Cannon");
