export * as kamus from './kamus.ts';

/**
 * @param array array sumber
 * @returns anggota acak dari array sumber
 */
export const acak = <T>(array: T[]): T =>
	array[Math.floor(Math.random() * array.length)];

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
						if ($acak.split('').indexOf(';') === -1) {
							const result = `${value}${$acak}`;
							log(`Appending ${result}`);
							return result;
						}
						const statements = $acak.split(';').map((e) => e.trim());
						for (let i = 0; i < statements.length; i++) {
							const statement = statements[i];
							if (statement.split('=').length === 2) {
								const splt = statement.split('=').map((e) => e.trim());
								variabel.set(splt[0], splt[1]);
								log(`SET "${splt[0]}" = "${splt[1]}"`);
							} else if (statement.split('?').length === 2) {
								const splt = statement.split('?').map((e) => e.trim());
								log(`IF "${splt[0]}" == "${splt[1]}"`);
								if (Array.from(variabel.keys()).indexOf(splt[0]) === -1) {
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
