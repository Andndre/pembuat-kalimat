/**
 * PERHATIAN!
 *
 * File ini berisi daftar kata yang digolongkan berdasarkan kategorinya.
 * Jika anda ingin berkontribusi dalam menambahkan/memperbaiki kata-kata
 * dalam kategori yang sudah ada, dan/atau menambahkan kategori baru,
 * silahkan kirimkan `Pull Request` pada link GitHub berikut.
 *
 * https://github.com/Andndre/pembuat-kalimat
 *
 * ARTI SIMBOL-SIMBOL:
 * 	;					PEMISAH STATEMENT
 * 	? 				JIKA SAMA DENGAN
 * 	= 				SET
 *
 * Catatan: semua variabel merupakan string, sehingga tidak perlu lagi menyertakan tanda kutip ("") (Spasi diperbolehkan)
 *
 * Simbol JIKA (?) dipakai jika sesuatu tersebut hanya dapat dimiliki/dialami oleh (*) sesuai variabel yang telah ditetapkan
 * Misalnya, anting-anting hanya dipakai oleh perempuan
 * ```ts
 * const aksesoris = ['anting-anting ; gender ? perempuan']
 * const namaPerempuan = ['Susi ; gender = perempuan']
 * ```
 */
/** */
export const aksesoris = [
	'anting-anting ; gender ? perempuan',
	'jam tangan',
	'kalung',
	'sendal',
	'sepatu',
	'topi',
];
export const transportasiRoda2 = ['motor', 'sepeda'];
export const transportasiRoda3 = ['becak'];
export const transportasiRoda4 = ['mobil'];
export const transportasiDarat = [
	...transportasiRoda2,
	...transportasiRoda3,
	...transportasiRoda4,
];
export const transportasiUdara = ['pesawat', 'helikopter', 'pesawat jet'];
export const transportasiLaut = ['perahu', 'rakit'];
export const transportasi = [
	...transportasiDarat,
	...transportasiLaut,
	...transportasiUdara,
];
export const namaIkan = ['emas', 'tuna'];
export const hewanDarat = ['kucing', 'anjing', ''];
export const hewanLaut = [...namaIkan.map((e) => 'ikan ' + e)];
export const hewan = [...hewanDarat, ...hewanLaut];
export const pakaianAtas = ['baju', 'jaket'];
export const pakaianBawah = ['celana', 'jeans'];
export const pakaian = [...pakaianAtas, ...pakaianBawah];
export const bentuk2d = ['lingkaran', 'persegi panjang', 'persegi'];
export const bentuk3d = ['bola', 'kerucut', 'kotak'];
export const bentuk = [...bentuk2d, ...bentuk3d];
export const buah = [
	'anggur',
	'apel',
	'buah naga',
	'durian',
	'jeruk',
	'nangka',
	'pisang',
];
export const keluarga = [
	'ayah',
	'ibu',
	'orang tua',
	'nenek',
	'kakek',
	'adik',
	'adik perempuan',
	'adik laki-laki',
	'anak',
	'cucu',
	'cucu perempuan',
	'cucu laki-laki',
];
export const relasi = [...keluarga, 'teman', 'bos', 'sahabat'];
export const sayur = ['bayam', 'kol', 'brokoli'];
export const makanan = [...buah, ...sayur, 'nasi', 'tempe', 'tahu', 'sate'];
export const minuman = ['air', 'coca cola', 'fanta', 'susu'];
export const namaPerempuan = ['Susi', 'Melati'].map(
	(e) => e + ' ; gender = perempuan'
);
export const namaLakiLaki = ['Andi', 'Budi', 'Andre', 'Susanto', 'Supar'].map(
	(e) => e + ' ; gender = laki-laki'
);
export const namaOrang = [...namaPerempuan, ...namaLakiLaki];
export const tempat = ['sekolah', 'rumah', 'hutan'];
export const kataKerja = ['baca ; benda = dapat dibaca'];
export const benda = [...aksesoris, 'buku ; benda ? dapat dibaca'];
