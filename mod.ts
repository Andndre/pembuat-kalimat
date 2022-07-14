export * as kamus from './kamus.ts';
export { KalimatAcak } from './kalimatAcak.ts';

/**
 * @param array array sumber
 * @returns anggota acak dari array sumber
 */
export const acak = <T>(array: T[]): T =>
	array[Math.floor(Math.random() * array.length)];

const adaDalamArray = <T>(array: T[], itu: T): boolean => {
	return array.indexOf(itu) !== -1;
};

const mempunyaiKey = <K, V>(map: Map<K, V>, key: K): boolean => {
	return Array.from(map.keys()).indexOf(key) !== -1;
};

const splitTrim = (str: string, split: string) => {
	return str.split(split).map((e) => e.trim());
};

/**
 * Generator merupakan fungsi yang mengembalikan nilai string
 */
export type Generator = () => string;

// deno-lint-ignore no-explicit-any no-unused-vars
const log = (...a: any[]) => {
	// console.log(...a);
};

/**
 * Semua argumen yang berupa string[],
 * akan digantikan dengan satu anggota string[] tersebut, yang
 * dipilih secara acak.
 *
 * contoh penggunaan:
 * ```ts
 * const generator = templat`Saya pergi ke ${['sekolah', 'rumah', 'hutan']} untuk mencari ${['apel', 'pisang', 'cokelat']}`;
 * console.log(generator()); // Saya pergi ke hutan untuk mencari pisang
 * ```
 * @returns Generator
 */
export const templat = (
	strings: TemplateStringsArray,
	...dicts: string[][]
): Generator => {
	return () => {
		log(`------ Templat`);
		const variabel = new Map<string, string>();
		return strings
			.map((value: string, index: number) => {
				if (index < dicts.length) {
					let acakUlang = false;
					let $acak: string;
					do {
						$acak = acak(dicts[index]);
						if (!adaDalamArray($acak.split(''), ';')) {
							const result = `${value}${$acak}`;
							log(`Appending ${result}`);
							return result;
						}
						const statements = splitTrim($acak, ';');
						for (let i = 0; i < statements.length; i++) {
							const statement = statements[i];
							if (statement.split('=').length === 2) {
								const splt = splitTrim(statement, '=');
								variabel.set(splt[0], splt[1]);
								log(`SET "${splt[0]}" = "${splt[1]}"`);
							} else if (statement.split('?').length === 2) {
								const splt = splitTrim(statement, '?');
								log(`IF "${splt[0]}" == "${splt[1]}"`);
								if (mempunyaiKey(variabel, splt[0])) {
									acakUlang = true;
									break;
								}
								const val = variabel.get(splt[0]);
								if (val != splt[1]) {
									acakUlang = true;
									break;
								}
							}
						}
					} while (acakUlang);
					const result = `${value}${$acak.split(';')[0].trim()}`;
					log(`Appending ${result}`);
					return `${result}`;
				}
				log(`Appending ${value}`);
				return `${value}`;
			})
			.join('');
	};
};
