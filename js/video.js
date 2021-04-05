
var video = document.getElementById("player1") 
var vidMute = document.querySelector("#mute")
var slider = document.querySelector("#slider")
// var vidvolume = document.querySelector("#volume")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// When using the addEventListener() method, the JavaScript is separated 
// from the HTML markup, for better readability and allows you to add event 
// listeners even when you do not control the HTML markup.

// play button

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML = video.volume *100+"%"

});

// pause button

document.querySelector("#pause").addEventListener("click", function () {
	video.pause();
});

// Slow down button 

document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate = video.playbackRate - 0.05
	console.log(video.playbackRate + "%")
	console.log("New speed")
});

// Speed up button

document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate = video.playbackRate + 0.05
	console.log(video.playbackRate + "%")
	console.log("New speed")

});

// Skip ahead button

document.querySelector("#skip").addEventListener("click", function () {
	if (video.currentTime == video.duration) { 
		video.currentTime = 0;
		video.play()
	} else { 
		video.currentTime = video.currentTime + 15;
	}
		console.log(video.currentTime)
		console.log("Current Location")
});

// Mute button

document.querySelector("#mute").addEventListener("click", function () {
	if (vidMute.innerHTML == "Mute") {
		video.muted = true;
		vidMute.innerHTML = "Unmute"
	} else {
		video.muted = false;
		vidMute.innerHTML = "Mute"
	}
});

// Volume slider 

slider.oninput = function(){ // 
	video.volume = this.value / 100; // changing the volume of video based on the value of slider
	document.querySelector("#volume").innerHTML = video.volume *100+"%" // assigning the volume of video to the volume id div below slider

};


// styled 

document.querySelector("#vintage").addEventListener("click", function (){
	console.log("Vintage")
	video.classList.add("oldSchool")
});

//original

document.querySelector("#orig").addEventListener("click", function (){
	console.log("Original")
	video.classList.remove("oldSchool")
});
