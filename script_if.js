let surmame = prompt('Введите вашy фамилию');
let ima = prompt('Введите ваше имя');
let father = prompt('Введите вашe отчество');
let age = parseInt(prompt(' Введите ваш возраст в годах'));
let sex = confirm('ваш пол - мужской?');
let pol; 
let plus5 = age + 5;

if ( sex === true )  pol = "мужской";  else  pol = "женский";
let pensia;
if ( sex === true &&  age >= 65  )  {pensia = "да";} 
else  if ( sex === false &&  age >= 60 ) {pensia = "да";}
else {pensia = "нет";}
let days = ( age*365 );

alert("ваше ФИО:" + " " + surmame + " " + ima + " " + father + "\n" 
    + "ваш возраст в годах:" + " " + age + "\n" 
    + "ваш возраст в днях:" + " " +  days + "\n" 
    + "через 5 лет вам будет:" + " " + plus5 + "\n"
    + "ваш пол:" + " " +  pol + "\n"
    + "вы на пенсии:" + " " +  pensia );