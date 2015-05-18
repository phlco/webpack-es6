class Dog {

	constructor(model) {
		this.model = model;
		var element = document.createElement('div');
		element.classList.add( this.name );
		this.el = element;
	}

	render() {
		this.el.textContent = this.model.name;
	}

}

export default Dog;
