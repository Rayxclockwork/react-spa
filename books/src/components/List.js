import React, { Component } from 'react';



export default props => (
	<>
		<h1>List of Books I want to Read:</h1>
		<ul>
			{props.things.map(thing => <BookItem thing={thing} onDelete={props.onDelete}/>)}
		</ul>

		<ToReadList onCreated={props.onCreated} />
	</>
)


function BookItem(props) {
	return <li>
		<p>{props.things.name}</p>
		<button onClick={() => props.onDelete(props.thing)}> delete </button>
		</li>
}





class ToReadList extends Component {
	constructor(props) {
		super(props);
		this.state = { value: '' };

		this.createThing = this.createThing.bind(this);
		this.changeHandler = this.changeHandler.bind(this);
	}

	createThing(event) {
		event.preventDefault();
		this.props.onCreated({ name: this.state.value });
		}
	

	changeHandler(event) {
		this.setState({
			value: event.target.value
		});
	}

	render() {
		return (
			<form onCreated={this.createThing}>
				<fieldset>
					<legend>Enter Book Title:</legend>
					<input value={this.state.value} onChange={this.changeHandler} type="text"></input>
				</fieldset>
				<button>submit</button>
			</form>
		);
	}
}


export {
	BookItem,
	ToReadList
}