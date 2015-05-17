import $ from 'jquery';
import Dog from './dog.js';
import Puggle from './puggle.js';

$(document).ready(function(){

	var dog = new Dog('Sam');
	$('body').append(dog._el);
	dog.render();
	window.p = new Puggle("Phil");
	window.dog = dog;
});