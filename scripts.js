// Good Example 1 (Selection): https://www.youtube.com/watch?v=xWBP4lzkoyM
// Code Sampletes (Selection): https://khan4019.github.io/front-end-Interview-Questions/sort.html#selectionSort
// Good Example 1 (Insertion): https://www.youtube.com/watch?v=OGzPmgsI-pQ
// Code Sampletes (Insertion): https://khan4019.github.io/front-end-Interview-Questions/sort.html#insertionSort


/* Execute Scripts when docuemnt is loaded */
window.addEventListener("load", afterLoad);

/* After Load Script */
function afterLoad() {
  //var arr = genArr(1, 100, 7);
  var arr = [7,8,5,2,4,6,3];

  ufArray(arr, "orig");
  //bubSort(arr);
  //selSort(arr);
  insSort(arr);
}

/* Generate Random Integer Array */
function genArr(minInt, maxInt, arrLen) {
  var min = Math.floor(minInt);
  var max = Math.floor(maxInt);
  var len = Math.floor(arrLen);
  var arr = [];

  for(var i = 0; i <= len-1; i++) {
    arr[i] = Math.floor(Math.random()*(max-min)+min);
  }

  return arr;
}

/* Show Array in User Friendly way */
function ufArray(arr, dest) {
  var deb = "";
  for(var i = 0; i <= arr.length-1; i++) {
    if(i != arr.length-1) {
      deb += arr[i]+", ";
      continue;
    }
    deb += arr[i];
  }
  document.getElementById(dest).innerHTML += deb+"<br>";
}

/* Bubble Sort Array (Day 1) */
function bubSort(arr) {
  for(var i = 0; i <= arr.length-1; i++) {
    for(var j = 1; j <= arr.length-1-i; j++) {
      if(arr[j-1] > arr[j]) {
        var b = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = b;
      }
      ufArray(arr, "work");
    }
  }
}

/* Selection Sort Array */
function selSort(arr) {
  for(var i = 0; i < arr.length; i++) {
    var minV = arr[i];
    var minI = i;
    for(var j = i+1; j < arr.length; j++) {
      if(arr[j] < minV) {
        minV = arr[j];
        minI = j;
      }
    }
    arr[minI] = arr[i];
    arr[i] = minV;
    ufArray(arr, "work");
  }
}

/* Insertion Sort Array */
function insSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    var key = arr[i];
    var j = i-1;
    while(j>=0 && arr[j] > key) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = key;
  }
  ufArray(arr, "work");
}
