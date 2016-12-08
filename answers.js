///PLEASE ADD YOUR SOLUTION CODE TO PART 1 HERE





///1. VARIABLES
var temperature = 98.6;
temperature += 5;
temperature = temperature * 3;
temperature -= 20;
console.log(temperature);
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
daysOfTheWeek[0] = "domingo";
daysOfTheWeek[1] = 'lunes';
daysOfTheWeek[2] = 'martes';
daysOfTheWeek[3] = 'miercoles';
daysOfTheWeek[4] = 'Jueves';
daysOfTheWeek[5] = 'viernes';
daysOfTheWeek[6] = 'sabado';

///2. DATA STRUCTURES
var iceCream = {
    "vanilla": 1.99,
    "chocolate": 2.49,
    "strawberry": 2.25
};
iceCream.chocolate = 0.99;
iceCream["pistacio"] = 1.99;
console.log(iceCream)

///3. FUNCTIONS & CONDITIONAL STATEMENTS
function DoIHaveToGoToSchoolToday(index) {
    if (index = 0 || index = 1 || index = 2 || index = 3 || index = 4) {
        alert(' this is ' + daysOfTheWeek[index] + "and you 			have to go to SCHOOL!! ")
    } else {
        alert(' this is ' + daysOfTheWeek[index] + "and you DONT have to go to SCHOOL!! ")

    }
}
console.log(DoIHaveToGoToSchoolToday(3))

///4.  LOOPS

var price_of_Gasoline = [5.88, 5.93,6.05,4.99,5.66,6.08,5.33,6.01,4.87,6.99,7.03,5.52];
;
for(var i=0; i<12; i++){
console.log(price_of_Gasoline[i]*40)
}




///it made "col-3 right" (E-mail input) not show on display