const app = "I don't do much."

function bumpCounter() {
  var counter = 0;
  function addBump() {
    counter++;
  }

  function getBumps() {
    return counter;
  }

  return { addBump, getBumps };
}

function createAnimal(animalType) {
  return function deadlyDevice(weptype) {
    return { animalType: `${animalType}`, deadlyDevice: `${weptype}` };
  }
}

var sharkCreator = createAnimal('Shark');

var sharkWithFrickinCannon = sharkCreator('Cannon');
var sharkWithFrickinLaserbeam  = sharkCreator('Laserbeam');
