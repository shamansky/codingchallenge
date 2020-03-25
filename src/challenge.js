//Javascript function that implements the following requirements:

//Given an array of length >= 0, and a positive integer N,
//return the contents of the array divided into N equally sized arrays.
//Where the size of the original array cannot be divided equally by N,
//the final part should have a length equal to the remainder.

function groupArrayElements(givenArray, numberOfArrays) {
  //creating an empty array
  var result = [];
  // creating a copy of the array to avoid side effect of splice
  const givenArrayCopy = [...givenArray];

  //looping through the array starting with the numberOfArrays and subtracting until we reach the i>0 condition.
  //Math.ceil ensures that in case of uneven number of elements they will go to the earliest chunks.
  for (var i = numberOfArrays; i > 0; i--) {
    result.push(givenArrayCopy.splice(0, Math.ceil(givenArrayCopy.length / i)));
  }
  //return the new array
  return result;
}

module.exports = groupArrayElements;
