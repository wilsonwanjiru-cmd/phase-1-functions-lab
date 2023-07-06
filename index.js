// Code your solution in this file!


// Calculates the distance in blocks from the headquarters
function distanceFromHqInBlocks(blocks) {
  return Math.abs(blocks - 42);
}

// Calculates the distance in feet from the headquarters
function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264; // 1 block = 264 feet
}

// Calculates the distance travelled in feet based on the start and destination blocks
function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}

// Calculates the fare price based on the start and destination blocks
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  
  if (distance <= 400) {
    return 0; // Free sample
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; // 2 cents per foot
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // $25 for a distance over 2000 feet
  } else {
    return 'cannot travel that far'; // Rides over 2500 feet are not allowed
  }
}

// Export the functions for testing
module.exports = {
  distanceFromHqInBlocks,
  distanceFromHqInFeet,
  distanceTravelledInFeet,
  calculatesFarePrice
};
