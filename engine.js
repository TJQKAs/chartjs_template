
$.ajax({
  url: 'https://hearthstonejson.com/json/Basic.enGB.json',
  dataType: 'json',
  type: 'get',
  cash: false,
  success: function(data){
  var arraid = [];
  var arrafac = [];
  var arrarar = [];
  var arraname = [];
$(data).each(function(index, value){
   arraid.push(value.id);
   arrafac.push(value.faction);
   arrarar.push(value.rarity);
   arraname.push(value.name);
});

// this function retrieve only uniq elements from array

var arruniq = arraname.filter(function (element, index, arraname) {
    return arraname.lastIndexOf(element) === index;
});

// this function create hash in the left - name in the right - frequency
var often = arraname.reduce(function (acc, curr) {
  if (typeof acc[curr] == 'undefined') {
    acc[curr] = 1;
  } else {
    acc[curr] += 1;
  }
  return acc;
}, {});

//by this way we show length of hash (often)
var long = Object.keys(often).length

//show length of each element in the array
var arrauniq = arruniq.map(function(name) {
  return name.length;
});

//we choose all elements with key flavor from data array
var withflavor = data.filter(function (value) {
    return (value.flavor);
});

//Frequency of elements with the same quantity of charts in the array arrauniq:
var freq = arrauniq.reduce(function (acc, curr) {
  if (typeof acc[curr] == 'undefined') {
    acc[curr] = 1;
  } else {
    acc[curr] += 1;
  }
  return acc;
}, {});
 //now we divide our freq hash for two array to display it on our index page
  var keys = Object.keys(freq);
  var values = keys.map(function(v){return freq[v];});

// you can see it in console - inspect elements in your browser
 console.log("Our initial array",data);
 console.log("Frequency of element's repeating in array:", often);
 console.log("Length of unique array:",long);
 console.log("Unique array of names:",arruniq);
 console.log("Length of unique array:",arruniq.length);
 console.log("Array of names:",arraname);
 console.log("Length of array of names:",arraname.length);
 console.log("Length of each name in unique array of names:",arrauniq);
 console.log("All elements from data with flavor:", withflavor);
 console.log("Frequency of elements with the same quantity of charts in the array arrauniq:", freq);
 console.log(keys);
 console.log(values);

 var ctx = document.getElementById("myCharts").getContext("2d");
 var data = {
   labels: keys,
   datasets: [{
     label: "Frequency of elements with the same quantity of charts in the array arrauniq, axis 'X' - numbers of charts, axis 'Y' - quantity elements in the array",
     fillColor: "rgba(190,150,250,0.2)",
     strokeColor: "rgba(220,220,220,1)",
     pointColor: "rgba(220,220,220,1)",
     pointStrokeColor: "#fff",
     pointHighlightFill: "#fff",
     pointHighlightStroke: "rgba(220,220,220,1)",
     data: values
   }]
 };
 var MyNewChart = new Chart(ctx).Bar(data);





}

// var ctx = document.getElementById("myChart").getContext("2d");
// var myBarChart = new Chart(ctx).Bar(datam, options);
//
//   var datam = {
//     labels: keys,
//     datasets:[
//       {
//         label: "Frequency of elements with the same quantity of charts in the array arrauniq, axis 'X' - numbers of charts, axis 'Y' - quantity elements in the array",
//         fillColor:"rgba(223,105,211,0.5)",
//         strokeColor:"rgba(223,105,211,0.8)",
//         highlightFill:"rgba(223,105,211,0.75)",
//         highlightStroke:"rgba(223,105,211,0.1)",
//         data: values
//       }
//     ]
//   };


});




// $.getJSON('https://hearthstonejson.com/json/Basic.enGB.json',function(data){
//   console.log(data);
// });
