const formDef1=
[
{label:'Название сайта:',kind:'longtext',name:'sitename'},
// {label:'URL сайта:',kind:'longtext',name:'siteurl'},
// {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
// {label:'E-mail для связи:',kind:'shorttext',name:'email'},
// {label:'Рубрика каталога:',kind:'dropdown',name:'division',
// variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
// {label:'Размещение:',kind:'radio',name:'payment',
// variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
// {label:'Разрешить отзывы:',kind:'check',name:'votes'},
// {label:'Описание сайта:',kind:'memo',name:'description'},
// {caption:'Опубликовать',kind:'submit'},
];
// const formDef2=
// [
// {label:'Фамилия:',kind:'longtext',name:'lastname'},
// {label:'Имя:',kind:'longtext',name:'firstname'},
// {label:'Отчество:',kind:'longtext',name:'secondname'},
// {label:'Возраст:',kind:'number',name:'age'},
// {caption:'Зарегистрироваться',kind:'submit'},
// ];


function buildForm(formDef) {
    for (let itemDef of formDef) {
       
        if (itemDef.kind==="longtext"){
           const labelTag=document.createElement("span");
           labelTag.innerHTML=itemDef.label;
           console.log(labelTag)
           const formTag=document.createElement("form");
           formTag.appendChild(labelTag);
           const inputTag=document.createElement("input");
           inputTag.type="text";
           inputTag.name= itemDef.name;
           formTag.appendChild(inputTag);
           document.body.appendChild(formTag);)
        }
        else console.log("jfkjwb")
        
    }
    

}

buildForm(formDef1)
// console.log (buildForm(formDef1))
// console.log()