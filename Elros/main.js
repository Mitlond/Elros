
var obj = {x:1, y:{z:[false,null,""]}}{;		// Определить испытательный объект 
var s = JSON.stringify(obj);		// s == '{"x":1,"y":{"z":[false,null,""]}}'
var p = JSON.parse(s);}				// p - копия объекта obj


var animal = {
  eats: true
};

var rabbit = {
  jumps: true,
  __proto__: animal
};

for (var key in rabbit) {
  alert( key + " = " + rabbit[key] ); // выводит и "eats" и "jumps"
}

var numbers = "[0, 1, 2, 3]";{

numbers = JSON.parse(numbers);

alert( numbers[1] );} // 1

var o =new Object();
o.toString()

o =new Object();
MyVar = o.valueOf();

var event = {
  title: "Конференция",
  date: "сегодня"
};

var str = JSON.stringify(event);
alert( str ); // {"title":"Конференция","date":"сегодня"}

// Обратное преобразование.
event = JSON.parse(str);

var d = new Date()
alert(d.toLocaleString())

