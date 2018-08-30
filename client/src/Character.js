import React, { Component } from 'react'

class Character extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.character.name}</h1>
				<h1>{this.props.character.height}</h1>
				<h1>{this.props.character.mass}</h1>
			</div>
		)
	}
}

export default Character