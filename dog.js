class Dog {
	
	constructor(name) {
		var element = document.createElement('div');
		element.classList.add('dog');
		this._el = element;
		this._name = name;
	}

	render() {
		this._el.textContent = this._name;
	}

}

export default Dog;