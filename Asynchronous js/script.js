// sync
//console.log('step 1')//f3
//console.log('step 2')//f4
//console.log('step 3')//f5

//Asyn
//setTimeout(()=>console.log('step1'),4000)
//setTimeout(()=>console.log('step2'),2000)
//setTimeout(()=>console.log('step3'),1000)

//console.log('bye')

//

console.log('Hello..')//f1
function sync(){
    console.log('step 1')//f3
    console.log('step 2')//f4
    console.log('step 3')//f5
}

sync()//f2
let a = 100
let b=20
let c=a+b

setTimeout(()=>console.log('step1'),3000)//f6
setTimeout(()=>console.log('step2'),2000)//f7
setTimeout(()=>console.log('step3'),1000)//f8

console.log('bye')//f9

//setInterval(()=>console.log("Hi.."),2000) // prints every 2 secs