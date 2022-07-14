import { acak, Generator } from './mod.ts';

export class KalimatAcak {
	templates: Generator[];
	constructor() {
		this.templates = [];
	}
	tambah(templat: Generator) {
		this.templates.push(templat);
		return this;
	}
	acak() {
		return acak(this.templates)();
	}
}
