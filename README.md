# Pembuat Kalimat

**Contoh penggunaan:**
```ts
import { KalimatAcak, kamus, templat } from 'https://github.com/Andndre/pembuat-kalimat/raw/main/mod.ts';

const kalimatAcak = new KalimatAcak()
	.tambah(templat`Saya pergi ke ${kamus.tempat} untuk mencari ${kamus.makanan}`)
	.tambah(
		templat`${kamus.namaLakiLaki} sedang mengenakan ${kamus.aksesoris} pemberian ${kamus.keluarga}nya`
	);

console.log(kalimatAcak.acak());
// : Supar sedang mengenakan sepatu pemberian ayahnya
// : Saya pergi ke hutan untuk mencari pisang
```

## Kontribusi dipersilahkan

### `kamus.ts:`
File ini berisi daftar kata yang digolongkan berdasarkan `kategorinya`. Jika anda ingin berkontribusi dalam menambahkan/memperbaiki kata-kata dalam kategori yang sudah ada, dan/atau menambahkan kategori baru, silahkan kirimkan `Pull Request` pada link GitHub berikut.
https://github.com/Andndre/pembuat-kalimat

#### ARTI SIMBOL-SIMBOL:
| **SIMBOL** |                     **ARTI**                   |
| ---------- | ---------------------------------------------- |
| `;`        | PEMISAH STATEMENT (Bisa lebih dari 1 (`AND`))  |
| `?`        | JIKA KONTEXT SAMA DENGAN                       |
| `=`        | SET CONTEXT                                    |

> **Note** 
> semua variabel merupakan string, sehingga tidak perlu lagi menyertakan tanda kutip ("") (Spasi diperbolehkan)

Simbol JIKA (?) dipakai jika sesuatu tersebut hanya dapat dimiliki/dialami oleh (*) sesuai variabel yang telah ditetapkan
> **Misalnya**
> anting-anting hanya dipakai oleh perempuan
> ```ts
> const namaPerempuan = ['Susi ; gender = perempuan'] // SET CONTEXT gender=perempuan
> const aksesoris = ['anting-anting ; gender ? perempuan'] // IF CONTEXT gender=perempuan
> ```