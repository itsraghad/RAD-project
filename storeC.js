let carts =document.querySelectorAll('.add-cart');
let products=[
    {
        name:"Choco fantasy",
        tag: "cho1",
        price : 35,
        incart:0,
    },
    {
        name:"De’Chico",
        tag: "cho2",
        price : 50,
        incart:0,
    },
    {
        name:"Coco Pod",
        tag: "cho3",
        price : 42,
        incart:0,
    },
    {
        name:"Lynette",
        tag: "cho4",
        price : 38,
        incart:0,
    },
    {
        name:"MilkChoco",
        tag: "cho5",
        price : 75,
        incart:0,
    },
    {
        name:"Lovebite",
        tag: "cho6",
        price : 90,
        incart:0,
    },
    {
        name:"Heavenly Chocos",
        tag: "cho7",
        price : 85,
        incart:0,
    },
    {
        name:"Sweet Treat",
        tag: "cho8",
        price : 35,
        incart:0,
    },
    {
        name:"FudgeBalls",
        tag: "cho9",
        price : 80,
        incart:0,
    },
    {
        name:"Au Chocolat",
        tag: "cho10",
        price : 40,
        incart:0,
    },
    {
        name:"I Love You",
        tag: "cho11",
        price : 75,
        incart:0,
    },
    {
        name:"Pure Sense",
        tag: "cho12",
        price : 99,
        incart:0,
    },
    {
        name:"Cinder Dark",
        tag: "cho13",
        price : 100,
        incart:0,
    },
    {
        name:"Armella",
        tag: "cho14",
        price : 80,
        incart:0,
    },
    {
        name:"ChocoCombo",
        tag: "cho15",
        price : 44,
        incart:0,
    }
    
   
]
for( let i=0; i<carts.length;i++){
    carts[i].addEventListener("click",() => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })

}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers){
        document.querySelector('.cart span').textContent= productNumbers;
    }
}


function cartNumbers(product){
   
    let productNumbers = localStorage.getItem('cartNumbers');
  
    productNumbers = parseInt(productNumbers);
   if (productNumbers){
    localStorage.setItem('cartNumbers',productNumbers+1);
    document.querySelector('.cart span').textContent= productNumbers+1;
   }
   else {
    localStorage.setItem('cartNumbers',1);
    document.querySelector('.cart span').textContent= 1;

   }
 
 setItems(product);

} 

function  setItems(product){ 
    let cartItems =localStorage.getItem('productsInCart');
    cartItems=JSON.parse(cartItems);
    

    if (cartItems != null){ 
        if (cartItems[product.tag] == undefined) {
            cartItems={
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].incart +=1;
    }
    else { //first time clicking
    product.incart= 1;
     cartItems={
        [product.tag]: product
    }
}
   
    localStorage.setItem("productsInCart",JSON.stringify(cartItems));

}

function totalCost(product)
{

let cartCost=localStorage.getItem('totalCost');

if(cartCost!= null)
{
cartCost=parseInt(cartCost);
localStorage.setItem("totalCost",cartCost + product.price);
}
else{
    localStorage.setItem("totalCost", product.price);
}
 
}

function displayCart(){
    let cartItems =localStorage.getItem('productsInCart');
    cartItems=JSON.parse(cartItems);

    console.log(cartItems);
    
    let productContainer = document.querySelector(".products")
    let cartCost=localStorage.getItem('totalCost');

    if(cartItems && productContainer){

        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => { 
            productContainer.innerHTML += `
            
            <div class="product">
              <ion-icon name="close-circle"></ion-icon>
              <img src="${item.tag}.jpg" width=100 height=100>
              <span>${item.name}</span>
            </div>
            <div class="price">$${item.price},00</div>
            <div class="quantity">
            <ion-icon name="arrow-back-circle-outline"></ion-icon>
                <span>${item.incart}</span>
                <ion-icon name="arrow-forward-circle-outline"></ion-icon>
            </div>
            <div class="total">
                $${item.incart*item.price},00
            </div>
            `
            ;
        });

        productContainer.innerHTML += `
        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">
                Basket Total
            </h4>
            <h4 class="basketTotal">
                $${cartCost},00
            </h4>
        `;

    }

    else{
        if(productContainer!=null){
        productContainer.innerHTML += `
        <div>
        <p id="rec">There are (0) items in the cart, you can fill it with: </p>
        <div class="buttons">
            <form action="flowers.html">
                <input type="submit" value="Flowers" class="b1"/>
            </form>
            <form action="gift.html">
                <input type="submit" value="Gift Package" class="b1"/>
            </form>
            <form action="Chocolate.html">
                <input type="submit" value="Chocolate" class="b1"/>
            </form>
          
        </div>
        `;
        }
    }


}
onLoadCartNumbers();
displayCart();
