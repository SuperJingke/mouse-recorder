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

	}
})

$startAndStop.addEventListener('click', (event) => {
	if (!isRecording)
	{
		


		
	}
	// Start/stop the recording
})

$replayRecording.addEventListener('click', (event) => {
	// Replay recording
})


let count = 0;
let timer;

const printHello = () => {
	console.log('Hello')
	if (count >)
}

// for (let index=0; index < 3; index++){

//} printHello()
//}

console.log(`here`);

printHello()

setTimeout(printHello, 1000)

console.log(`here`) // Here, to show it's a sync