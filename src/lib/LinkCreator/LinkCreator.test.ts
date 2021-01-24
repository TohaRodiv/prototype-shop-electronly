import { LinkCreator } from "./LinkCreator";


const expectedLink = [
	{ title: "Main", path: "/"},
	{ title: "Posts", path: "/posts"},
	{ title: "About", path: "/about"},
	{ title: "Contacts", path: "/contacts"},
	{ title: "News", path: "/about/news"},
];

test ("Test LinkCreator class", () => {
	const links = new LinkCreator ()
		.add ("Main", "/")
		.add ("Posts", "/posts")
		.add ("About", "/about")
		.add ("Contacts", "/contacts")
		.add ("News", "/about/news")
		.build ();

	expect (links).toEqual (expectedLink);
});

export {};