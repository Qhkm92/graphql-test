var {graphql, buildSchema} = require('graphql');

// graphql is a query language not programming language
// construct schema using graphql schema language

var schema = buildSchema(`
	type Query {
		hello : String 
	}
`)


var root = {
	hello: () => {
		return 'Hello world';
	}
}

//run the graphql query { hello } and print out the response

graphql(schema, '{ hello }', root).then((response) => {
	console.log(response);
})