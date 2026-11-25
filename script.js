var x=10;
var x=20;
console.log(x); // print statement

let a=30;

const b=40;

let c=50;
{
    let c=30
}
console.log(c); // print statement



let num=30;
let num2=num;
num2=40;
console.log(num);



console.log(5=='5');

const add1=(a,b,c)=>{
    return a+b+c;
}
console.log(add1(10,20,30))


function add(a,b){
     return a+b;
}
console.log(add(99,88))


function sub(a,b){
     return a-b;
}

function mul(a,b){
     return a*b;
}


let arr=[11,'new',0,true];
const calc=(a,b,callback)=>{
    return callback(a,b);
}

console.log(calc(10,20,sub));



let array=[1,2,3,4,5];

const reduceArr=array.reduce((total,n)=>{return total+n},10)
console.log(reduceArr);

const doubleNumber=(num)=>num*2;
const doubleArr=array.map(doubleNumber);
console.log(doubleArr);


const eveNum=array.filter((n)=>n%2==0)
console.log(eveNum);



let details=[
    {name:'A',age:30,marks:90},
    {name:'B',age:33,marks:95},
    {name:'C',age:45,marks:75},
    {name:'D',age:24,marks:50},

]

const nameList=details.map((detail)=>detail.name)
console.log(nameList);


const less_70=details.filter((n)=>n.marks<70)
console.log(less_70);

const findmark=details.find((n)=>n.marks>90)
console.log(findmark);

let name='Prabhu'
let mark=90
console.log(`I am ${name} have scored ${mark}`)