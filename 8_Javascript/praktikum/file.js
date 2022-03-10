var a = 5;
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = false;
let lengkap_arr = [a, b, nama, terdaftar];
let asal = "indonesia"; //dipindahkan dari function scope menjadi global scope agar dapat dipanggil seperti nomor 1
function perkenalan() {
  // let asal = "indonesia"; dipindahkan agar dapat diakses
  return console.log(
    "perkenalkan nama saya " +
      nama +
      " nomor urut " +
      a +
      " sekarang sedang mengikuti " +
      b +
      " berasal dari " +
      asal
  );
}

terdaftar = true;

if (terdaftar === true) {
  console.log(nama + " terdaftar sebagai kegiatan kampus merdeka ");
}

a = b;
// nama = b;

console.log("array = " + lengkap_arr[2]);
console.log("a adalah = " + a);
console.log("b adalah = " + b);
perkenalan()
console.log("\n")


/*  No 2. 
a. Karena pada awalnya status boolean pada variable terdaftar adalah false. dimana kondisi if yang diperlukan adalah true.
setelah dilakukan perubahan pada isi dari variable terdaftar sesuai dengan yang diminta pada nomor 1b menjadi true, baris 21,22,23 
dapat tampil.

b. Karena kita mencoba untuk melakukan perubahan values pada variable konstant. untuk menghidari error
pada baris 26, kita dapat menghapus atau membuat line tersebut menjadi command, atau tidak merubah variable konstant sama sekali.

c. Bisa. Sesuai dengan yang saya jelaskan pada point 2b, karena baris tersebut tidak dianggap ketika interpreter meng-eksekusi javascript
*/




// Dibawah ini adalah kode untuk nomor 3

console.log("Number 3\n")
const foo = ['Budi','Sita','Ayu'];
[a,b,c] = foo;
console.log(a,b,c,"\n")


// Dibawah ini adalah kode untuk nomor 4
console.log("\nNumber 4\n")

let bdays = ['10-17','05-19','20-19'];

//cara 1

for (let i = 0 ; i < bdays.length ; i++){
    bdays[i] = bdays[i].replaceAll('-','/');
  }
console.log(bdays)

let bdays2 = ['10-17','05-19','20-19'];

//cara 2

bdays2.splice(0,4,'10/17','05/19','20/19')
console.log(bdays2)


//Dibawah ini adalah kode untuk nomor 5

console.log("\nNumber 5\n")

let value = [1,2,3,4,5,6]
let value2 = value.map(x => x*2)

console.log(value2)

//Dibawah ini adalah kode untuk nomor 6

console.log("\nNumber 6\n")

let arr = [1.5,2.56,5.1,12.33]
let arr2 = []


arr.forEach((item, index) => {
  arr[index] = Math.round(item);
  });

console.log(arr)
