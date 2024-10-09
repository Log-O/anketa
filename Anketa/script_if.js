let surname;
do {
    surname= prompt('Введите вашy фамилию');
} while (!surname);

let ima;
do {
    ima = prompt('Введите ваше имя');
} while (!ima);

let father;
do {
    father = prompt('Введите вашe отчество');
} while (!father);

let ageS, age;
do {
    ageS = prompt('Введите ваш возраст в годах');
    age = parseInt(ageS)
} while (isNaN(age));


const gender=confirm("Нажмите OK если ваш пол мужской или отмену если женский");

const pensStr= ((gender && age>=65)||(!gender && age>=60))?"да":"нет";


alert(
`
ваше ФИО:  ${surname} ${ima} ${father}
ваш возраст в годах: ${age}
ваш возраст в днях: ${age*365}
через 5 лет вам будет: ${age+5}
ваш пол: мужской  ${gender?"M":"Ж"}
вы на пенсии: ${pensStr}
`
);