var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];


var array = [arrayAtticus, arrayJem, arrayBoo, arrayScout];

console.log(array);

var newArray = [];

for (var j=0; j<array.length; j++){
  newArray[j] = array[j];
}

console.log(newArray);


var baseSalary = 44500;
var bonus = 0.13;

  var bonusRound = (baseSalary * bonus * 100);
  bonusRound = Math.round(bonusRound);
  bonusRound = bonusRound/100;


console.log (bonusRound);
	

