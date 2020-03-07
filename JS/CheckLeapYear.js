/*
 * Leap Years are any year that can be exactly divided by 4 (such as 2016, 2020, 2024, etc)
 * except if it can be exactly divided by 100, then it isn't (such as 1900, 2100, 2200, etc)
 * except if it can be exactly divided by 400, then it is (such as 1600, 2000, 2400, etc)
 */

/*
 * So every 4th year we add an extra day (the 29th of February),
   which makes 365.25 days a year. This is fairly close,
   but is wrong by about 1 day every 100 years.
 * So every 100 years we don't have a leap year,
   and that gets us 365.24 days per year (1 day less in 100 year = -0.01 days per year).
   Closer, but still not accurate enough!
 * So another rule says that every 400 years is a leap year again.
   This gets us 365.2425 days per year (1 day regained every 400 years = 0.0025 days per year),
   which is close enough to 365.242375 not to matter much.
 */

function isLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Leap year.";
      } else {
        return "Not leap year.";
      }
    } else {
      return "Leap year.";
    }
  } else {
    return "Not leap year.";
  }
}

/* 
    OR
*/

function leapYear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

isLeap(1900); // Not leap year.
