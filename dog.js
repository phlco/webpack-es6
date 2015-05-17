class View {

		constructor(model){
			this.model = model;
			var element = document.createElement('div');
			element.classList.add( this.name );
			this.el = element;
		}

}

class Dog extends View {

	constructor(model) {
		super(model);
	}

}

export default Dog;
