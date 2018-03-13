module.exports = {
	create:{
		name: {type: 'string', required: true, min: 4},
		email: {type: 'string', required: true, min: 10},
		userName: {type: 'string', required: true, min: 3},
		password: {type: 'string', required: true, min: 6},
		gender: {type: 'string', required: true, min: 4},
		dob: {type: 'string', required: true, min: 10},
		blood: {type: 'string', required: true, min: 2}
	},
	update:{
	}
};