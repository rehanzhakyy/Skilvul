var murid = ['raihan', 'riani', 'rey']
var muridBaru = ['maul']
var muridLain = murid.slice(0, 2) // menyimpan suatu nilai di variabel lainnya dan value nya dari variable sebelumnya
var numberSatu = [0, 8, 9, 4, 1, 9]
var numberDua = [0, 100, 10 , 28, 9]
var numberTiga = [89, 76, 35, 78, 100]
let fruits = ['Mangga', 'Pisang', 'Jambu'];


murid.pop() // pop untuk menghapus atau menghilangkan index terakhir
murid.push('Ganda') // menambahkan element dan meletakkannya di index terakhir
murid.shift() // shift untuk menghapus atau menghilangkan index pertama
murid.unshift('fariz') // menambahkan element dan meletakkannya di index pertama
murid.concat(muridBaru) // menggabungkan dua array yang terpisah menjadi satu
numberSatu.sort() // mengurutkan karakter pertama ke terakhir
numberDua.sort((a,b) => a -b) // callback function di sort
numberTiga.reverse() // mengurutkan karakter terakhir ke pertama
muridBaru.splice(1, 1, 'Abde') // menambahkan, menghapus dan mengganti element array
fruits.splice(2, 0, 'Semangka')



console.log(murid)
console.log(murid.concat(muridBaru))
console.log(muridLain)
console.log(numberSatu)
console.log(numberDua)
console.log(numberTiga)
console.log(muridBaru)
console.log(fruits)