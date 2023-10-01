import React, { Component } from 'react'

export class ClickCounter extends Component {

	constructor(props) {
		super(props)

		this.state = {
			count: 0
		}
	}

	incrementCount = () => {
		this.setState(prevState => {
			return { count: prevState.count + 1 }
		})
	}
	componentDidMount() {
		console.log("Lifecycle componentDidMount");
	}


	render() {
		const { count } = this.state
		console.log("Lifecycle render");
		return (
			<div>
				<h2> Click here too</h2>
				<button onClick={this.incrementCount}> Clicked {count } times </button>
			</div>
		)
	}
}

export default ClickCounter