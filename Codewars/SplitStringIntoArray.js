p = console.log.bind(console);

/*Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  var vowelsCount = 0

  const arr =['a','e','i','o','u']
  const split=str.split("")

  for (let i = 0; i< split.length; i++) {
    if (arr.includes(split[i])) {vowelsCount +=1}
  }
   p(vowelsCount)
}


d = "ale ulo dla"
//getCount(d))

getCount(d)
