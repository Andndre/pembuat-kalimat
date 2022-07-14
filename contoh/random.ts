import { KalimatAcak, kamus, templat } from '../mod.ts';

const kalimatAcak = new KalimatAcak()
	.tambah(templat`Saya pergi ke ${kamus.tempat} untuk mencari ${kamus.makanan}`)
	.tambah(
		templat`${kamus.namaLakiLaki} sedang mengenakan ${kamus.aksesoris} pemberian ${kamus.keluarga}nya`
	);

console.log(kalimatAcak.acak());
