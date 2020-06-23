// 1. When a user presses the record button, start recording actions
// 2. When recording, push an object with the important data to the array
//			- Clear the array before starting a new recording
// 3. Stop a recording by pressing the same button
//			- Print all of the position to the console using forEach: 123px 345px
// 4. Replay the recording by iterating through the Array and move a custom cursor to the position that was recorded

let isRecording = false
let mouseMoves = [
	{x:123, y:212, t:0}
]
const $startAndStop = document.getElementById('startAndStop')
const $replayRecording = document.getElementById('replayRecording')
const $cursor = document.getElementById('cursor')


window.addEventListener('mousemove', (event) => {
	if (isRecording) {
		console.log(event.clientX, event.clientY, event.timeStamp)
		// Record the data to the Array:
		console.log("Not recording!")
		mouseMoves.push(event.clientX, event.clientY, t)


	}
})


$startAndStop.addEventListener('click', (event) => {
	if (!isRecording)
	{
		t = event.timeStamp
		execute()
	

		
	}
	// Start/stop the recording
})

// Ask for permission to use microphone before recording
function record() {
	window.navigator.mediaDevices.getUserMedia ({
		audio: true
	}) .then(MediaStream => {
		console.log(MediaStream);
		beginRecord(mediaStream);
	}) .catch(err =>{
		console.error(err)
	})
}

function beginRecord(mediaStream){
	let audioContext = new (window.AudioContext || window.webkitAudioContext);
	let mediaNode = audioContext.createMediaStreamSource(mediaStream);
	mediaNode.connect(audioContext.destination);
}






$replayRecording.addEventListener('click', (audio) => {
	// Replay recording
})

