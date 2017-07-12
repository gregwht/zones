//JS - Geolocation

// Variables
var x = document.getElementById("coordinates");
var s = document.getElementById("state");
var z = document.getElementById("zone");

var inParliamentSquare = false;
var zone1 = false;
var zone2 = false;
var zone3 = false;
var zone4 = false;

var walking = false;

var zoneAudio;
var zone1FileNumber;
var zone2FileNumber;
var zone3FileNumber;
var zone4FileNumber;
var zoneFileNumberMax;
var walkingAudio;
var walkingFileNumber;
var walkingFileNumberMax;

// Functinos
function TestGeo() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition( TestMap, error, {maximumAge: 1000, timeout: 10000, enableHighAccuracy: true});
  }
  else {
    x.innerHTML = "Geolocation is not supported by this browser."
  }
}



function TestMap(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  var speed = position.coords.speed;
  var heading = position.coords.heading;
  x.innerHTML = "Latitude: " + position.coords.latitude +
                "<br>Longitude: " + position.coords.longitude +
                "<br>Accuracy: " + position.coords.accuracy +
                "<br>Speed: " + position.coords.speed +
                "<br>Heading: " + position.coords.heading; 
  z.innerHTML = "<br>Zone 1: " + zone1 + 
                "<br>Zone 2: " + zone2 +
                "<br>Zone 3: " + zone3 + 
                "<br>Zone 4: " + zone4;


  // If person is in Parliament Square...
  if (latitude >= 51.500 && latitude <= 51.502 &&
      longitude >= -0.1276 && latitude <= -0.1261 ){

    inParliamentSquare = true;
    s.innerHTML = "You are in Parliament Square Garden. Click below to visit Brian.";
    document.getElementById('button').disabled = false;
  } 
  else {
  
    inParliamentSquare = false;
    s.innerHTML = "Please make your way to Parliament Square Garden to visit Brian.";
    document.getElementById('button').disabled = true;
  }

  if (inParliamentSquare){
    
    // !! Check that zone coordinates divide the square as intended

    // If person is in Zone 1...
    if (latitude >= 51.500 && latitude <= 51.5009 &&
        longitude >= -0.1276 && longitude <= -0.1268){

      zone1 = true;
      zone2 = false;
      zone3 = false;
      zone4 = false;

      // Choose a file from zone 1 bank to play
      zone1FileNumber = getRandomArbitrary(0,9);

    }
    // If person is in Zone 2...
    if (latitude >= 51.501 && latitude <= 51.502 &&
        longitude >= -0.1276 && longitude <= -0.1268){

      zone1 = false;
      zone2 = true;
      zone3 = false;
      zone4 = false;

      // Choose a file from zone 2 bank to play
      zone2FileNumber = getRandomArbitrary(0,9);
    }

    // If person is in Zone 3...
    if (latitude >= 51.500 && latitude <= 51.5009 &&
        longitude >= -0.1267 && longitude <= -0.1261){

      zone1 = false;
      zone2 = false;
      zone3 = true;
      zone4 = false;

      // Choose a file from zone 3 bank to play
      zone3FileNumber = getRandomArbitrary(0,9);
    }

    // If person is in Zone 4...
    if (latitude >= 51.501 && latitude <= 51.502 &&
        longitude >= -0.1267 && longitude <= -0.1261){

      zone1 = false;
      zone2 = false;
      zone3 = false;
      zone4 = true;

      // Choose a file from zone 4 bank to play
      zone4FileNumber = getRandomArbitrary(0,9);
    }
    // If person is not in a zone...
    if (zone1 = false &&
        zone2 = false &&
        zone3 = false &&
        zone4 = false){

      // Choose a file from walking bank to play
      walkingFileNumber = getRandomArbitrary(0,9);
    }

  } // End If inParliamentSquare

} // End TestMap function



function error() {
  x.innerHTML = "Cannot locate user."
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function playAudio(){

  // Prepare zone audio file

  // Prepare walking audio file 

  // If standing still, fade into zone audio
  if (walking = false){

  }

  // If walking, fade into walking audio
  if (walking = true){

  }

  // When audio file has finished, increment counter to next file
  //    If (zoneAudio.isFinished) {
  //        if (zone1FileNumber < zoneFileNumberMax) { zone1FileNumber++; }
  //        else if (zone1FileNumber == zoneFileNumberMax) { zone1FileNumber = 0} 
  // OR when audio file has finished, choose new random file
  //    If (zoneAudio.isFinished) { zone1FileNumber == getRandomArbitrary(0,9) }

  // When audio file has finished, increment counter to next file
  // If (walkingAudio.isFinished) {
  //        if (walkingFileNumber < walkingFileNumberMax) { walkingFileNumber++; }
  //        else if (walkingFileNumber == walkingFileNumberMax) { walkingFileNumber = 0 }
  // OR when audio file has finished, choose new random file
  //        If (walkingAudio.isFinished) { walkingFileNumber == getRandomArbitrary(0,9) }

  var audio = document.getElementById("audiotag1");

  if (audio.paused){
      audio.play();
  } else {
      audio.pause();
  }
}


