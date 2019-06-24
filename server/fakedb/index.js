// // dummy data
var books = [
	{
		title: "Name of the Wind",
		description: "Bla blo bla blo",
		genres: ["Fantasy", "Sci-fi"],
		imageUrl: "http://image.url",
		id: "1",
		author: "Patrick Rothfuss",
		data: [
			{
				text: "Chapter 1",
				content: "Chapter 1 content"
			},
			{
				text: "Chapter 2",
				content: "Chapter 2 content"
			}
		]
	},
	{
		title: "The Final Empire",
		description: "Bla blo bla blo",
		genres: ["Drama"],
		imageUrl: "http://image.url",
		id: "2",
		author: "Brandon Sanderson",
		data: [
			{
				text: "Chapter 1",
				content: "Chapter 1 content"
			},
			{
				text: "Chapter 2",
				content: "Chapter 2 content"
			}
		]
	},
	{
		title: "The Hero of Ages",
		description: "Bla blo bla blo",
		genres: ["Teens"],
		imageUrl: "http://image.url",
		id: "3",
		author: "Terry Pratchett",
		data: [
			{
				text: "Chapter 1",
				content: "Chapter 1 content"
			},
			{
				text: "Chapter 2",
				content: "Chapter 2 content"
			}
		]
	}
];

var authors = [
	{ name: "Patrick Rothfuss", age: 44 },
	{ name: "Brandon Sanderson", age: 42 },
	{ name: "Terry Pratchett", age: 66 },
	{ name: "Suzanne Collins", age: 60 }
];

module.exports = {
	books,
	authors
};
