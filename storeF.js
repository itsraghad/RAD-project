let carts =document.querySelectorAll('.add-cart');
let products=[
    {
        name:"Blue Valley",
        tag: "blue",
        price : 35,
        incart:0,
    },
    {
        name:"Orange Breeze",
        tag: "neworange",
        price : 50,
        incart:0,
    },
    {
        name:"Colorful Garden",
        tag: "colorful",
        price : 53,
        incart:0,
    },
    {
        name:"The Purple Spring",
        tag: "purple",
        price : 60,
        incart:0,
    },
    {
        name:"Red Rosa",
        tag: "red",
        price : 90,
        incart:0,
    },
    {
        name:"SunFlowers Valley",
        tag: "sunflower",
        price : 84,
        incart:0,
    },
    {
        name:"The Purple World",
        tag: "purple2",
        price : 113,
        incart:0,
    },
    {
        name:"Tulip Vase",
        tag: "tulip",
        price : 100,
        incart:0,
    },
    {
        name:"White Amazon",
        tag: "white",
        price : 96,
        incart:0,
    },
    {
        name:"Simple White",
        tag: "white2",
        price : 40,
        incart:0,
    },
    {
        name:"Lily Forest",
        tag: "yellow",
        price : 66,
        incart:0,
    },
    {
        name:"Elegant Red",
        tag: "red2",
        price : 105,
        incart:0,
    },
    {
        name:"Pure",
        tag: "green",
        price : 40,
        incart:0,
    },
    {
        name:"Blue Beach",
        tag: "blue2",
        price : 66,
        incart:0,
    },
    {
        name:"Bloom",
        tag: "pink",
        price : 105,
        incart:0,
    },
    {
        name:"Pastel Dreams",
        tag: "orange2",
        price : 40,
        incart:0,
    },
    {
        name:"Unique",
        tag: "unique",
        price : 66,
        incart:0,
    },
    {
        name:"Amsterdam",
        tag: "green2",
        price : 105,
        incart:0,
    },
    {
        name:"Colorful Basket",
        tag: "yellow2",
        price : 40,
        incart:0,
    },
    {
        name:"Soft Anemone",
        tag: "green3",
        price : 66,
        incart:0,
    },
    {
        name:"Tulip And More",
        tag: "tulip and more",
        price : 105,
        incart:0,
    },    
   
]
for( let i=0; i<carts.length;i++){
    carts[i].addEventListener("click",function()  {
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

