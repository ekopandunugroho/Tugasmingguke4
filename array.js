// membuat array dengan jumlah index 100
let data = [];
for (i = 0; i < 100; i++) {
  data.push(Math.floor(Math.random() * 50) + 1); // nilai random 1-50
}

// memecah data menjadi 2 array (genap dan ganjil)
let genap = [];
let ganjil = [];
for (i = 0; i < data.length; i++) {
  if (i % 2 == 0) {
    genap.push(data[i]);
  } else {
    ganjil.push(data[i]);
  }
}

// membuat fungsi min
function minArray(arr) {
  let min = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// membuat fungsi max
function maxArray(arr) {
  let max = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// membuat fungsi total
function totalArray(arr) {
  let total = 0;
  for (i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// membuat fungsi rata-rata
function avgArray(arr) {
  let total = totalArray(arr);
  let avg = total / arr.length;
  return avg.toFixed(2);
}

// mendapatkan nilai min, max, total, dan rata-rata pada array genap
let genapMin = minArray(genap);
let genapMax = maxArray(genap);
let genapTotal = totalArray(genap);
let genapAvg = avgArray(genap);

// mendapatkan nilai min, max, total, dan rata-rata pada array ganjil
let ganjilMin = minArray(ganjil);
let ganjilMax = maxArray(ganjil);
let ganjilTotal = totalArray(ganjil);
let ganjilAvg = avgArray(ganjil);

// membandingkan nilai min, max, total, dan rata-rata pada kedua array
let minComparison = (genapMin > ganjilMin) ? "Min lebih besar pada array genap" : "Min lebih besar pada array ganjil";
let maxComparison = (genapMax >= ganjilMax) ? "Max lebih besar atau sama besar pada array genap" : "Max lebih besar pada array ganjil";
let totalComparison = (genapTotal == ganjilTotal) ? "Total memiliki nilai sama pada kedua array" : "Total memiliki nilai berbeda pada kedua array";
let avgComparison = (genapAvg <= ganjilAvg) ? "Rata-rata lebih besar atau sama besar pada array ganjil" : "Rata-rata lebih besar pada array genap";

// menampilkan output
console.log("Array: " + data);
console.log("Array Genap: " + genap);
console.log("Array Ganjil: " + ganjil);
console.log("Array Genap - min: " + genapMin + ", max: " + genapMax + ", total: " + genapTotal + ", rata-rata: " + genapAvg);
console.log("Array Ganjil - min: " + ganjilMin + ", max: " + ganjilMax + ", total: " + ganjilTotal + ", rata-rata: " + ganjilAvg);
console.log(minComparison);
console.log(maxComparison);
console.log(totalComparison);
console.log(avgComparison);