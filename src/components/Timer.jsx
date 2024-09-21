import { Component } from 'react'

export default class Timer extends Component {

	myTimer = () => {
	const start = document.getElementById('inpDate').value + 0 + 0 + 0
	const d = new Date();
	        let days = Math.floor(start / 3600 / 24)
			let hours = Math.floor((start - days * 86400) / 3600)
			let mins = Math.floor((start - days * 86400 - hours * 3600) / 60)
			let secs = Math.floor(start / 1000)
	// document.getElementById("timer").innerHTML = `${secs}:${mins}:${hours}:${days}`;
	console.log(start)
	console.log(days)
 }


	createTimer = () => {
		let startt = Date.now()
			const timer = document.getElementById('timer')
			const start = document.getElementById('inpDate').value

			let time = start + 0 + 0 + 0;
			let days = Math.floor(time / 3600 / 24)
			let hours = Math.floor((time - days * 86400) / 3600)
			let mins = Math.floor((time - days * 86400 - hours * 3600) / 60)
			let secs = Math.floor(time - days * 86400 - hours * 3600 - mins * 60)
		setInterval(function () {
			
            // time - 1000;
             let dd = time - 1000;
            
			
            
			console.log('secs', secs, 'mins', mins, 'hours', hours, 'days', days)
            console.log(dd)
			console.log(time)
			timer.textContent = `${secs}:${mins}:${hours}:${days}`
		}, 1000)
	}
	render() {
		return (
			<>
				<h1>timer</h1>
				<input id="inpDate" type="number"></input>

				<button onClick={() => setInterval(this.myTimer, 1000)}>CREATE TIMER</button>

				<div>
					<h2 id="timer"></h2>
				</div>
			</>
		)
	}
}
