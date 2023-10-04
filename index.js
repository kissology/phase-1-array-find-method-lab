const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]






// code your solution here
function superbowlWin(arr){
  const index = arr.find(element => element.result === 'W');
  return !!index ? index.year : undefined
}



