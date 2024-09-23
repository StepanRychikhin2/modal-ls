import styled from 'styled-components'
import { Component } from 'react'
import Timer from './Timer'
const BoxModal = styled.div`
	background-color: rgb(159, 126, 244);
	/* position: fixed; */
	/* position:absolute; */
	top: 50%;
	left: 50%;
	z-index: 100;
	width: 300px;
	height: 350px;
	border-radius: 20px;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	border: none;
`

const CloseModal = styled.button`
	/* position: absolute; */
	background-color: rgb(159, 126, 219);
	border: 0;
	border-radius: 20px;
	width: 30px;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	/* top: 180px;
	left: 1060px; */
`
const Item = styled.li`
border-radius:20px;
box-shadow:  2px 3px black;
	width: 250px;
	height: 250px;
	background-color: rgb(64, 38, 112);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-weight: bold;
	color: white;
`
const ListUsers = styled.ul`
	gap: 10px;
	width: 1000px;
	flex-wrap: wrap;
	display: flex;
`
const ButttonOpenModal = styled.button`
	border-radius: 20px;
	border: 0;
	width: 100px;
	height: 40px;
	background: rgb(13, 36, 0);
	background: linear-gradient(
		90deg,
		rgba(13, 36, 0, 1) 0%,
		rgba(121, 114, 9, 1) 70%,
		rgba(59, 113, 0, 1) 100%
	);
	color:white;
	font-weight:bold;
`
const AllText = styled.p``
const InpMOdal = styled.input`
	border-radius: 20px;
	width: 200px;
	height: 25px;
	border: 0;
`
const TitleInmodal = styled.h1`
	/* position: absolute; */
	/* top: 150px; */
	display: flex;
	justify-content: center;
`
const SpanText = styled.span`
	font-family: 'monocraft';
`
const BoxInpUser = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
	padding: 0;
`
const BackDrop = styled.div`
	position: fixed;

	/* position:absolute; */
	top: 0;
	background: rgba(195, 0, 255, 0.25);
	width: 100%;
	height: 100%;
	z-index: 99;
	display: flex;
	justify-content: center;
	align-items: center;
`
const BoxinfTitl = styled.div`
margin-left:20px;
gap:20px;
	display: flex;
	justify-content: center;
	align-items: center;
`
const ButtonSum = styled.button`
	/* margin-top: 50px; */
	width: 100px;
	height: 30px;
	border: 0;
	background: rgb(2, 0, 36);
	background: linear-gradient(
		90deg,
		rgba(2, 0, 36, 1) 0%,
		rgba(9, 121, 9, 1) 35%,
		rgba(134, 255, 0, 1) 100%
	);
	border-radius: 20px;
	color: white;
	font-weight: bold;
	&:hover {
		background: rgb(13, 36, 0);
		background: linear-gradient(
			90deg,
			rgba(13, 36, 0, 1) 15%,
			rgba(9, 121, 9, 1) 70%,
			rgba(59, 113, 0, 1) 100%
		);
	}
`

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
		let inpName = document.getElementById('name').value
		let inpSurname = document.getElementById('surname').value
		let inpcartnum = document.getElementById('cartNumber').value
		let inpSVC = document.getElementById('SVC').value

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
		this.modalClose()
		return this.state.listHuk.push(cons)
	}
	modalClose = () => {
		this.setState({ hiden: false })
	}
	modalOpen = () => {
		this.setState({ hiden: true })
	}
	hacing = (e) => {
		return (
			// setInterval(function () {
			// 	<span>HACING-_-</span>
			// },1000)
			(document.querySelectorAll('aqwdawd').textContent = `hacing:HACING-_-`)
		)
	}

	componentDidUpdate() {
		this.hacing()
		let getLOcalConts = localStorage.getItem('infoUser')
		let setItems = JSON.parse(getLOcalConts)
		let setLocalContacts = localStorage.setItem(
			'infoUser',
			JSON.stringify(this.state.listHuk)
		)
	}
	componentDidMount() {
		if (
			localStorage.getItem('infoUser') === null ||
			localStorage.getItem('infoUser') === undefined
		) {
			// document.getElementById('list').textContent = 'list'
		} else {
			document.getElementById('list').textContent = ' '
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
				<ButttonOpenModal
					onClick={() => {
						this.modalOpen()
					}}
				>
					<AllText>openModal</AllText>
				</ButttonOpenModal>
				{/* <Timer></Timer>	 */}

				<ListUsers id="list">
					{listHuk.map((inf) => {
						return (
							<Item key={inf.id}>
								<AllText>
									name:<SpanText>{inf.name}</SpanText>
								</AllText>
								<AllText>
									{' '}
									surname:<SpanText>{inf.surname}</SpanText>
								</AllText>
								<AllText>
									{' '}
									cart Number:<SpanText>{inf.cartNum}</SpanText>
								</AllText>
								<AllText>
									{' '}
									SVC:<SpanText>{inf.svc}</SpanText>
								</AllText>
								<AllText class="aqwdawd"> hacked🥰</AllText>
							</Item>
						)
					})}
				</ListUsers>

				{hiden && (
					<BackDrop>
						<BoxModal>
							<BoxinfTitl>
							<TitleInmodal>info modal</TitleInmodal>
							<CloseModal
								onClick={() => {
									this.modalClose()
								}}
							>
								<p>X</p>
							</CloseModal>
							</BoxinfTitl>
							
							<BoxInpUser>
								<li>
									<InpMOdal
										type="text"
										required
										placeholder="name"
										id="name"
									></InpMOdal>
								</li>
								<li>
									<InpMOdal
										type="text"
										required
										placeholder="surname"
										id="surname"
									></InpMOdal>
								</li>
								<li>
									<InpMOdal
										maxLength={16}
										type="tel"
										required
										placeholder="cartNumber"
										id="cartNumber"
									></InpMOdal>
								</li>
								<li>
									<InpMOdal
										minLength={0}
										maxLength={3}
										type="tel"
										required
										placeholder="SVC"
										id="SVC"
									></InpMOdal>
								</li>
							</BoxInpUser>
							<ButtonSum onClick={this.addContact}>SUMBIT</ButtonSum>
						</BoxModal>
					</BackDrop>
				)}
			</>
		)
	}
}
