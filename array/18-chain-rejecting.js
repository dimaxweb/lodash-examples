var _ = require('lodash');

var people = [
	{ id: 1, name: "Jim", age: 20, gender: 'm', enabled: true },
	{ id: 1, name: "Jim", age: 20, gender: 'm', enabled: false },	
	{ id: 2, name: "Bob", age: 34, gender: 'm', enabled: true },
	{ id: 3, name: "Steve", age: 30, gender: 'm', enabled: true },
	{ id: 4, name: "Nancy", age: 42, gender: 'f', enabled: true },
	{ id: 5, name: "Frank", age: 30, gender: 'm', enabled: true },
	{ id: 6, name: "Larry", age: 68, gender: 'm', enabled: true }
];

// reject is similar to filter, but it will remove matches from the collection

var r = _.chain(people)
	.reject(function(p) { return p.age < 30; })
	.filter({gender: 'm'})
	.value();

console.log(r);	

var string = 'asdfasdfasdfasdfasdfasdef';

var x = _(string)
			.reject(function(l) { return l === 'a'; })
			.join('');

console.log(x);			
	





