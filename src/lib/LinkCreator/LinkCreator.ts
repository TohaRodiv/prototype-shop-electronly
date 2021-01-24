import { TLinks } from "./Types";


export class LinkCreator {

	private links: TLinks = [];
	private prefix = "";

	add ( title: string, path: string ): this {
		const pathWithPrefix: string = this.prefix + path;
		this.links.push ( { title, path: pathWithPrefix } );
		return this;
	}

	setPrefix ( prefix: string ): this {
		this.prefix = prefix;
		return this;
	}

	build (): TLinks {
		return this.links;
	}
}