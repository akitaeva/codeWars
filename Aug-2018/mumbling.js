// This time no story, no theory. The examples below show you 
// how to write function accum:

// Examples:

// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"


function accum(s) {
    var arrS= s.split('');
    var arrS2 = [];
    for (i=0; i < arrS.length; i++) {
      var adtn = arrS[i].repeat(i+1)
      arrS2.push(adtn.charAt(0).toUpperCase()+adtn.substr(1).toLowerCase());
    }
    console.log(arrS2.join('-'));
    return arrS2.join('-')
  }