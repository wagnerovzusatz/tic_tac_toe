import React from "react"
var index = 1
class Field extends React.Component {
	constructor() {
		if (index == 10) index = 1
		super()
		this.state = {
			index: index++,
			value: null
		}
	}

	onSelect(index) {
		this.setState({
			value: this.context.next.name,
			disabled: true
		})
		this.props.cb(index)
	}

	render() {
		return (
			<button
				disabled={this.state.disabled}
				className="field" 
				onClick={(e) =>this.onSelect(this.state.index)}
				value={this.state.index}>
					{this.state.value}
			</button>
		)
	}
}

Field.contextTypes = {
	next: React.PropTypes.object.isRequired
}
module.exports = Field