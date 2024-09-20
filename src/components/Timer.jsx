import { Component } from 'react'

export default class Timer extends Component {
	createTimer = () => {
		// setInterval(function () {
		// 	let startt = Date.now()
		// 	const timer = document.getElementById('timer')
		// 	const start = document.getElementById('inpDate').value
		// 	let time = start;
        //     // time - 1000;
        //     let delta = time - 1
        //     const days = Math.floor(delta / 3600 / 24)
		// 	const hours = Math.floor((delta - days * 86400) / 3600)
		// 	const mins = Math.floor((delta - days * 86400 - hours * 3600) / 60)
		// 	const secs = Math.floor(delta - days * 86400 - hours * 3600 - mins * 60)
			
            
		// 	console.log('secs', secs, 'mins', mins, 'hours', hours, 'days', days)
        //     console.log(delta)
		// 	timer.textContent = `${secs}:${mins}:${hours}:${days}`
		// }, 1000)
	}
	render() {
		return (
			<>
				<h1>timer</h1>
				<input id="inpDate" type="number"></input>

				<button onClick={() => this.createTimer()}>CREATE TIMER</button>

				<div>
					<h2 id="timer"></h2>
				</div>
			</>
		)
	}
}
