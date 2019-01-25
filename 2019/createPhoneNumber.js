//turn an array of number into valid phone number syntax:

function createPhoneNumber(numbers){
    var result = /^\d{10}$/.test(numbers.join(""))
    console.log("result  :", result);
    if (result) {
       const num = "("+ numbers[0]+numbers[1]+numbers[2]+") "+ numbers[3]+numbers[4]+numbers[5]+"-"+numbers[6]+numbers[7]+numbers[8]+numbers[9]
       return num;
    }
  }


  //createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);