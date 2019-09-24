deleteNotUsedInArray = (str, bracketsConfig) => {
  let temp = bracketsConfig.map(x => x.join(""));


  while (str.length > 0 && temp.length > 0) {
    let i = 0;
    while (str.indexOf(temp[i]) > -1) {
      str = str.replace(temp[i].toString(), "");
    }
    let index = temp.indexOf(temp[i]);
    temp = temp.splice(1, index);
    ++i;

  }
  return str.length == 0 && temp.length == 0;
}

deleteNotUsedInArray('()', [['(', ')']]);
module.exports = function check(str, bracketsConfig) {
  // your solution
  return deleteNotUsedInArray(str, bracketsConfig);
}