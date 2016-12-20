import React from 'react'

var Field = React.createClass ({
	contextTypes :{
		onMove: React.PropTypes.object.isRequired,
		winner: React.PropTypes.bool.isRequired,
		start: React.PropTypes.bool.isRequired
	},
	onClick:onClick,
	getInitialState:getInitialState,	
	render:render,
	borderCreator:borderCreator
})


function getInitialState() {
	return {
		owner:null,
		disabled:false
	}
}

function onClick(index) {
	this.setState({
		disabled:true,
		owner:this.context.onMove.name
	})
	this.props.cb(index)
}

function borderCreator(index){
	var umbruch = 3
	var felder = 9
	var styles = {}
	var style = {
		borderLeft: "3px solid rgba(138,133,189, 0.5)",
		borderTop:"3px solid rgba(138,133,189, 0.5)",
		borderRight:"3px solid rgba(138,133,189, 0.5)",
		borderBottom:"3px solid rgba(138,133,189, 0.5)",
	}
	var n = index
	if(n % umbruch != 0)styles.borderRight= style.borderRight
	if(n % umbruch != 1)styles.borderLeft= style.borderLeft
	if(n > umbruch)styles.borderTop= style.borderTop	
	if(n <= felder - umbruch)styles.borderBottom= style.borderBottom
	return styles
}

function render() {
	return (
        	<button 
        		style={this.borderCreator(this.props.index)} 
        		disabled={this.state.disabled || this.context.winner || !this.context.start}
	       	id="field"
	    		className="Field"
	    		value={this.props.index}
	    		onClick={(e) =>this.onClick(this.props.index)}>
	    		<div className={this.state.owner == "X" ? 'o' : 'x'}>{this.state.owner}</div>
	    	</button>
        )
}





module.exports = Field