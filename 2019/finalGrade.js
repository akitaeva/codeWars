//This function should return a number (final grade). There are four types of final grades:
//https://www.codewars.com/kata/students-final-grade/train/javascript

const finalGrade = (exam, projects) => {
    let finGrade = 0; // default value
    if (exam > 90 || projects >10 ) {
      finGrade = 100;
    } else if (exam > 75 && projects >=5 ) {
      finGrade = 90;
    } else if (exam > 50 && projects >=2 ) {
      finGrade = 75;
    }
    
  return finGrade // final grade
}


// finalGrade(100, 12);  // 100
// finalGrade(55, 3);    // 75
// finalGrade(55, 0);    // 0