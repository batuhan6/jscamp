function addToCart(quantity, productName="Elma") {
    console.log("Sepete eklendi " + productName + " adet: " + quantity)
}

addToCart(5)
//addToCart("Yumurta",10)
//addToCart("Karpuz")


//Error func olusturmak icin degisken olusturuyoruz.


let sayHello = ()=>{
    console.log("Hello World!")
}

let sayHello2 = ()=>{
    console.log("Hello Hell!")
}


sayHello2()


function addToCart2(productName, quantity, unitPrice){

}

addToCart2("a",2,22)
addToCart2("b",3,33)


let product1 = {productName:"visne", unitPrice:10, quantity:500}
function addToCart3(product) {
    console.log("Urun: "+ product.productName)
    console.log("Adet: "+ product.quantity)
    console.log("Fiyat: "+ product.unitPrice)
}

addToCart3(product1)

let product2 = {productName:"visne", unitPrice:10, quantity:500}
let product3 = {productName:"visne", unitPrice:10, quantity:500}
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)


function addToCart4(x){
    console.log(x)
}


//array icine objelerimi vericem
let products = [
    {productName:"balik", unitPrice:10, quantity:500},
    {productName:"kuzu", unitPrice:10, quantity:500},
    {productName:"tavuk", unitPrice:10, quantity:500}
]

addToCart4(products)

// function add(number1, number2) {
//     console.log(number1 + number2)
// }

function add(bisey, ...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
    console.log(bisey)
}

add(20,30)
add(20,30,50)

console.log("----------------")

let numbers = [30,10,500,600,120]
//console.log(...numbers)  //spread yapiyorsun arrayi parcalara ayiriyorsun
console.log(Math.max(...numbers))

console.log("----------------")

let [icAnadolu, marmara, karadeniz,[icAnadoluSehirleri]] = [
    {name:"Ic Anadolu",population:"20M"},
    {name:"Marmara",population:"30M"},
    {name:"Karadeniz",population:"10M"},
    [
        ["Ankara","Konya"],
        ["Istanbul","Bursa"],
        ["Sinop", "Trabzon"]
    ]
]

console.log(icAnadolu.population)
console.log(icAnadolu.name)
console.log(icAnadoluSehirleri)

console.log("----------------")

let newProductName, newUnitPrice, newQuantity
//Parantez icine almamin sebebi belirtmek programa onun bir kod blogu olmadigini
({productName: newProductName, unitPrice:newUnitPrice, quantity:newQuantity}
= {productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName)