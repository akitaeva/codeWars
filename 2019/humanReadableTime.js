// Write a function, which takes a non-negative integer (seconds) as input and returns the time 
// in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

const humanReadable = (seconds) => {
  let hours = Math.floor(seconds/3600).toString();
  if (hours.length === 1) hours='0'+ hours;
  let mins = Math.floor((seconds % 3600) / 60).toString();
  if (mins.length === 1) mins='0'+ mins;
  let secs = (seconds - 3600*hours - 60*mins).toString();
  if (secs.length === 1) secs='0'+ secs;
  return hours + ':' + mins + ':' + secs;
}  

// humanReadable(359999);