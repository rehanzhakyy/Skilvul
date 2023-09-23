## Answer

Kamu adalah seorang programer yang ingin mendaftar kesalah satu perusahaan terkenal, oleh karena itu kamu sudah memulai untuk mempersiapkan `CV` dan `Portfolio`. Namun kamu tidak ingin membuat banyak `CV` dan `Portfolio` dengan model seperti ini
- `cv.pdf`
- `cv-final.pdf`
- `cv-final-v2.pdf`

Oleh karenanya kamu berinisiatif untuk menggunakan Git, lalu langkah yang kamu lakukan adalah:
1. membuat sebuah folder kosong dengan **namamu sendiri**
> mkdir raihan
2. membuat sebuah file di dalam folder tersebut dengan nama `README.md`, isi file tersebut dengan kalimat<br>`"Halo perkenalkan aku halaman utama"`
> cd raihan <br>
> touch README.md <br>
> nano README.md <br>
> "Halo Perkenalkan aku halaman utama" <br>
> ctrl + x , Yes , Enter
3. **inisialisasi** folder tersebut dengan Git, kemudian simpan perubahan menggunakan `commit` dengan pesan<br>`"First commit"`
> git init <br>
> git add . <br>
> git commit - m "First commit"
4. Ganti teks sebelumnya dengan `"Hello world"
> nano README.md <br>
> "Hello world" <br>
> ctrl + x , Yes , Enter
5. Tampilkan isi teks tersebut pada command line menggunakan command `cat`
> cat README.md
6. Ternyata kamu tidak ingin perubahan tersebut, dan ingin kembali ke perubahan seperti commit yang terakhir. Lakukan teknik git backtracking untuk mengembalikan ke perubahan commit yang terakhir.
> git reset --hard d500f10 (commit id)
7. buat `branch` baru dengan nama `cv`, hal ini berguna agar histori kita tidak tercampur
> git branch cv
8. pindah `branch` ke dalam `cv`, kemudian buat file dengan nama `cv.txt` dan isi file tersebut dengan kalimat:<br>`"Ini adalah file CV"`
> git checkout cv <br>
> touch cv.txt <br>
> nano cv.txt <br>
> "Ini adalah file CV" <br>
> ctrl + x , Yes , Enter
9.  kemudian simpan perubahan menggunakan `commit` dengan pesan<br>`"Initial CV"`
> git add cv.txt <br>
> git commit -m "Initial CV" 
10. tambahkan **3 perusahaan** yang akan kamu lamar, dan setiap menuliskan 1 nama perusahaan kamu harus melakukan dokumentasi dan menyimpan perubahan menggunakan `commit`
> nano cv.txt <br>
> - Infinite learning <br>
> git add . <br>
> git commit "menambahkan perusahaan pertama" <br>
> nano cv.txt <br>
> - Tokopedia <br>
> git add . <br>
> git commit -m "menambahkan perusahaan kedua" <br>
> nano cv.txt <br>
> - Shopee <br>
> git add . <br>
> git commit -m "menambahkan perusahaan ketiga"
11. kembali ke `branch master`
> git checkout master
12. ubah file `README.md` menjadi
    ```
    Halo perkenalkan aku halaman utama

    Ini adalah update pertama pada branch master
    ```
    jangan lupa untuk menyimpan perubahan menggunakan `commit` dengan pesan<br>`"update master pertama"`
> nano README.md <br>
> "Ini adalah update pertama pada branch master" <br>
> git add . <br>
> git commit -m "update master pertama"
13. gabungkan branch `cv` ke dalam branch `master` menggunakan perintah `git merge`
> git merge cv
14. unggah Git Repository project tersebut tersebut ke dalam GitHub
> git push <br>
> git log --graph