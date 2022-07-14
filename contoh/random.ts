import { templat, Generator, acak, kamus } from '../mod.ts';

const templates: Generator[] = [
	templat`Saya pergi ke ${kamus.tempat} untuk mencari ${kamus.makanan}`,
	templat`${kamus.namaLakiLaki} sedang mengenakan ${kamus.aksesoris} pemberian ${kamus.keluarga}nya`,
];

const generate = () => acak(templates)();

console.log(generate());
