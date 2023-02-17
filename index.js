export function getAnimal(currywurst) {
  let result;
  if (currywurst === "cats") {
    result = `I totally love ${currywurst}!`;
  } else if (currywurst === "dogs") {
    result = `I like ${currywurst}!`;
  } else {
    result = `I do not like animals at all!`;
  }
  return result;
}

// function testNum(a) {
//     let result;
//     if (a > 0) {
//       result = 'positive';
//     } else {
//       result = 'NOT positive';
//     }
//     return result;
//   }
