function doubleChar(str) {
  return str
    .split("") // Memecah string menjadi array karakter
    .map((char) => char + char) // Menggandakan setiap karakter
    .join(""); // Menggabungkan kembali karakter-karakter yang telah digandakan menjadi string
}

console.log(doubleChar("Adidas"));
