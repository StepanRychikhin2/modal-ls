import styled from 'styled-components'
import { Component } from 'react'

const BoxModal = styled.div`
	background-color: rgb(159, 126, 244);
	position: fixed;
	top: 50%;
	left: 50%;
	z-index: 100;
	width: 300px;
	height: 200px;
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
export default class Modal extends Component {
	state = {
		hiden: false,
	}
	modalClose = () => {
		this.setState({ hiden: false })
	}
	modalOpen = () => {
		this.setState({ hiden: true })
	}

	//    document.addEventListener('keydown', (e) => {
	//         if (e.key === "Escape") {
	//             this.setState({hiden:false})
	//         } else if (e.key === "q") {
	//             this.setState({hiden:true})
	//          console.log(e.key)
	//         }
	//     })
componentDidMount() {
    document.addEventListener('keydown', (e) => {
        this.setState({ hiden: false })
        // console.log(e.key)
    })
}
	render() {
		const { hiden } = this.state
		// const awd = this.modalOpen()
		return (
			<>
				<button
					onClick={() => {
						this.modalOpen()
					}}
				>
					<p>openModal</p>
				</button>
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
						<h1>HI</h1>
					</BoxModal>
				)}
			</>
		)
	}
}
