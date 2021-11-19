function generate(size, lowest, highest) {
  var numbers = [];
  for (var i = 0; i < size; i++) {
    var add = true;
    var randomNumber = Math.floor(Math.random() * highest) + 1;
    for (var y = 0; y < highest; y++) {
      if (numbers[y] == randomNumber) {
        add = false;
      }
    }
    if (add) {
      numbers.push(randomNumber);
    } else {
      i--;
    }
  }
/*
* Math.floor()  mengembalikan nilai bilangan bulat yang paling terdekat dari nilai argument x.
* Math.random() menghasilnya angka secara acak.
* push() menambah satu atau lebih elemen ke akhir.
*/
  var highestNumber = 0;
  for (var m = 0; m < numbers.length; m++) {
    for (var n = m + 1; n < numbers.length; n++) {
      if (numbers[n] < numbers[m]) {
        highestNumber = numbers[m];
        numbers[m] = numbers[n];
        numbers[n] = highestNumber;
      }
    }
  }
  //* length untuk menghitung jumlah karakter yang ada
  // console.log(numbers);
  document.getElementById("numbers").innerHTML = numbers.join(" - ");
  /*
  * document.getElementById() mengambil sebuah value pada inputan di HTML.
  * join() Menuliskan elemen-elemen array ke dalam satu string dipisahkan oleh karakter yang kita set.
  */
}