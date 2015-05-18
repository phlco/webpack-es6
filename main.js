import $ from 'jquery';
import Dog from './dog.js';

$(document).ready(function(){

	var dog = new Dog({name: 'Sam'});
	$('body').append(dog.el);
	dog.render();
	
});
