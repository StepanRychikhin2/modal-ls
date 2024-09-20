import styled from 'styled-components'
import { Component } from 'react'
import Timer from "./Timer"
const BoxModal = styled.div`
	background-color: rgb(159, 126, 244);
	position: fixed;
	top: 50%;
	left: 50%;
	z-index: 100;
	width: 300px;
	height: auto;
	display: flex;
	align-items: center;
	flex-direction: column;
	border: none;
`
const CloseModal = styled.button`
	position: absolute;
	background-color: rgb(159, 126, 219);
	border: 0;
	border-radius: 20px;
	width: 30px;
	height: 30px;
	display: flex;
	align-items: center;
	align-items: center;
	top: 20px;
	left: 250px;
`
const Item = styled.li`
	width:200px;
	height:200px;
	background-color:rgb(159, 126, 219);
`
const ButtonSum = styled.button``
export default class Modal extends Component {
	state = {
		hiden: false,
		name: '',
		listHuk: [
			// {
			// 	id: 1,
			// 	name: 'Stepan',
			// 	surname: 'Rihihn',
			// 	svc: 123,
			// 	cartNum: 23232,
			// },
			// {
			// 	id: 2,
			// 	name: 'Stepan',
			// 	surname: 'Rihihn',
			// 	svc: 123,
			// 	cartNum: 23232,
			// },
		],
	}
	addContact = (e) => {
		let inpName = document.getElementById('name').value;
		let inpSurname = document.getElementById('surname').value;
		let inpcartnum = document.getElementById('cartNumber').value;
		let inpSVC = document.getElementById('SVC').value;
		
		let cons = {
			id: this.state.listHuk.length + 1,
			name: inpName,
			surname: inpSurname,
			svc: inpSVC,
			cartNum: inpcartnum,
		}
		// console.log(e)
		this.setState({ name: 'awd' })
		// console.log(this.state.listHuk)

		return this.state.listHuk.push(cons)
		
	}
	modalClose = () => {
		this.setState({ hiden: false })
	}
	modalOpen = () => {
		this.setState({ hiden: true })
	}

	
	componentDidUpdate() {
		let getLOcalConts = localStorage.getItem('infoUser')
		let setItems = JSON.parse(getLOcalConts)
		let setLocalContacts = localStorage.setItem(
			'infoUser',
			JSON.stringify(this.state.listHuk)
		)
		
	}
	componentDidMount() {
		if (localStorage.getItem('infoUser') === null || localStorage.getItem('infoUser') === undefined) {
			document.getElementById("list").textContent = "list"
		} else {
			document.getElementById("list").textContent = " "
			let setInStorage = localStorage.getItem('infoUser')
		let parseinJson = JSON.parse(setInStorage)
		let awdawd = this.state.listHuk.push(...parseinJson)

		
		this.setState({ name: 'awd' })
		}
		
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') {
				this.setState({ hiden: false })
			}

		})
	}
	render() {
		const { hiden, listHuk } = this.state
		return (
			<>
				<button
					onClick={() => {
						this.modalOpen()
					}}
				>
					<p>openModal</p>
				</button>
						{/* <Timer></Timer>	 */}

				<ul id='list'>
					{listHuk.map((inf) => {
						return (
							<Item key={inf.id}>
								<p>name:{inf.name}</p>
								<p> surname:{inf.surname}</p>
								<p> cart Number:{inf.cartNum}</p>
								<p> SVC:{inf.svc}</p>
							</Item>
						)
					})}
				</ul>

				{hiden && (
					<BoxModal>
						<h1>modal</h1>
						<CloseModal
							onClick={() => {
								this.modalClose()
							}}
						>
							<p>X</p>
						</CloseModal>
						<div>
							<input  type="text" required placeholder="name" id="name"></input>
							<input
								type="text"
								required
								placeholder="surname"
								id="surname"
							></input>
							<input
							maxLength={16}
								type="tel"
								required
								placeholder="cartNumber"
								id="cartNumber"
							></input>
							<input minLength={0} maxLength={3} type="tel" required placeholder="SVC" id="SVC"></input>
							<ButtonSum onClick={this.addContact}>SUMBIT</ButtonSum>
						</div>
					</BoxModal>
				)}
			</>
		)
	}
}
