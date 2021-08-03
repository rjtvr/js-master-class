// "Artist", "Year Released", "Genre", "Duration"

// Numbers, Strings, Booleans, Objects and Arrays

var artist = "Maddy O'con";
var songName = "In The Moon";
var yearReleased = 2001;
var genre = "jazz";
var duration = {
  durationInSecond : 328,
  durationInMinutes : 3.2,  
};
var showDurInMin = function(){
  console.log("Duration : "+3.2+"min");
};
var songFormat = {
  mp4 : true,
  ogg : false,
  wav : true,
  wma : true,
  aac : true,
};
var featuring = "zeus";
var writtenBy = "BeVine";
var onlineStreaming = true;
var downloadable = false;

/* arrangement: 
intro, verse — chorus — verse — chorus —bridge — chorus — outro. 
This is known as an ABABCB structure, 
where A is the verse,
      B is the chorus,
      C is the bridge.
*/
var songArrangment = ["Chorus","Verse","Chorus","Bridge","Chorus","Outro"];

// trying something with array
var songRequiredDetails = [this.artist, this.songName, this.yearReleased, this.genre];

console.log(artist);
console.log(songName);
console.log(yearReleased);
console.log(genre);
console.log(duration);
console.log(duration.durationInSecond+" seconds");
showDurInMin();

console.log(songFormat);
console.log(songFormat.aac);
console.log(featuring);
console.log(writtenBy);
console.log(onlineStreaming);
console.log(downloadable);

// Array
console.log(songArrangment);
console.log("Song Arrangment length : "+songArrangment.length);

console.log(songRequiredDetails);