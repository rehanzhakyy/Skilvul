## Answer

Simulasikan bagaimana proses kita dalam melakukan clone suatu project pada GitHub hingga melakukan Pull Request untuk perubahan yang ingin kita submit.

1. Fork repository GitHub https://github.com/impactbyte/tech4impact-students-bio.git menggunakan akun Github kamu
> https://ibb.co/HNHjDYj
2. Clone remote repository dari hasil fork tersebut. Jangan clone dari repository originalnya.
> git clone https://github.com/raelhan/tech4impact-students-bio.git
3. Buatlah branch baru dengan nama lengkap kamu. Misalnya `david-winalda`. Jangan melakukan perubahan pada branch `master`.
> git branch raihan-zhaky
4. Checkout ke dalam branch tersebut yang telah kamu buat
> git checkout raihan-zhaky
5. Buatlah 1 file format `.md` dengan nama lengkap kamu. Contoh `davidwinalda.md`
> touch raihanzhaky.md
6. Isi file tersebut `davidwinalda.md` dengan konten di bawah ini:
```
Nama Lengkap: David Winalda
Umur: 27
Pesan yang ingin disampaikan: Semangat untuk kamu yang disana sedang berjuang
```
> nano raihanzhaky.md 
1. Masukkan file `.md` tersebut ke dalam staging area
> git add .
2. Commit dengan memberikan pesan nama file `.md` kamu
> git commit -m "add raihanzhaky.md"
3. Merge branch yang telah kamu buat ke dalam branch `master`
> git merge master
4.  Push ke dalam branch `master`
> git push origin master
5.  Lakukan pull request dari GitHub Repository yang telah kamu fork untuk digabungkan ke dalam branch `master` pada GitHub Repository aslinya.