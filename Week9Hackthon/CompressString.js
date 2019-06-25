function Compress(input) {
  let reg = /[aeiou]/g; //regular expression for vowel
  let count = 0;
  function checkConstant(index) {
    //function to check consonants
    return typeof arr[index] == "string" && arr[index].match(reg) == null;
  }
  let arr = input.split("");
  arr[0] = arr[0].toUpperCase(); //Converts the first letter to the uppercase
  for (let i = 1; i < arr.length; i++) {
    //Converts the substring consisting of all the consonants to the length of this substring
    if (checkConstant(i)) {
      count++;
      let j = i + 1;
      while (checkConstant(j) == true) {
        count++;
        j++;
      }
      arr.splice(i, count, count);
      count = 0;
    }
  }
  for (let k = 1; k < arr.length; k++) {
    //Remove the consecutive duplicate vowels
    if (checkConstant(k) == false) {
      let j = k + 1;
      while (arr[j] == arr[k]) {
        arr.splice(k, 1);
      }
    }
  }

  return arr.join("");
}
console.log(Compress("pqrsaeiiiouixyz"));
