deleteNotUsedInArray = (str, bracketsConfig) => {
  let temp = bracketsConfig.map(x => x.join(""));
  if (str.length % 2 != 0) {
    return false;
  }

  let con =() => temp.some(x=> str.indexOf(x)>-1);
  let i = 0;
  while (str.length > 0  && con()) {
    // && temp.length > 0

    while (str.indexOf(temp[i]) > -1) {
      // console.log(temp[i]);
      let indexsrc = str.indexOf(temp[i]);
      // str.splice(indexsrc,2);
      // str = str.replace(new RegExp(temp[i], 'g'), "");
      str = str.replace(temp[i].toString(), "");
      // str = str.split(temp[i].toString()).join("");
      // let index = temp.indexOf(temp[i]);
      // temp.splice(index,1);

    }
    i>= temp.length ? i = 0 : i=i+1;

  }
  let retval = str.length == 0;
  return retval;
}

// deleteNotUsedInArray('|()|(||)||', [['(', ')'], ['|', '|']]);
module.exports = function check(str, bracketsConfig) {
  // your solution
  return deleteNotUsedInArray(str, bracketsConfig);
}


