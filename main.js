function pozdrav(){
    console.log("Zdravo Svete")
  }
  
  pozdrav()

  console.log("Cao");


//-------------------------------------

function proveri(a,b) {
   console.log(a == b) ;           
   console.log(a===b); 
}
proveri(2,"2");

//-----------------------------------------
const w1 = 'temp';
const w2 = 'late';

const t = `I am a ${w1+w2}`;
const b = "I am a "+w1+w2;

console.log(t);
console.log(b);
//----------------------------------------------------
const o1 = { foo: 99 , loo: 10};
const o2 = {};
Object.setPrototypeOf(o2, o1);
o2.foo;

console.log(o2.foo);
console.log(o2.loo);

function mnozenje(f, t) {
  
  console.log(f*t);
  
}
mnozenje(4,5);

const f = 4;
const g = 2;

function zbir() {
  const rez = f +g;
  console.log("Zbir dva broja je: "+ rez);  
}
zbir();


function miki(a,b){
  c = a + b;
  console.log(c);
  
}

miki(2,3);


function boja() {
 
  document.getElementById("blok").style.color = "red";
}

var n = 0;
var x = 0;
while (n < 3) {
  n++;
  x += n;
}
console.log(x);

let nekiNiz = ['a', 'b', 'c'];

nekiNiz.forEach(element => {
  console.log(element); 
});



