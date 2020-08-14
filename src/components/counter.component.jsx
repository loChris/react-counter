import React, { Component } from 'react';

export default class Counter extends Component {
	state = {
		count: 0,
		tags: ['tag1', 'tag2', 'tag3'],
	};

	render() {
		return (
			<div>
				<span className={this.getClasses()}>
					{this.formatCounter()}
				</span>
				<button className="btn-secondary btn-sm">Increment</button>
				<ul>
					{this.state.tags.map((tag) => (
						<li key={tag}>{tag}</li>
					))}
				</ul>
			</div>
		);
	}

	getClasses() {
		let classes = 'badge m-2';
		classes += this.state.count === 0 ? ' badge-warning' : ' badge-primary';
		return classes;
	}

	formatCounter() {
		const { count } = this.state;
		return count === 0 ? 'Zero' : count;
	}
}
