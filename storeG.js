let carts =document.querySelectorAll('.add-cart');
let products=[
    {
        name:"Box 1",
        tag: "IMG_8949",
        price : 35,
        incart:0,
    },
    {
        name:"Box 2",
        tag: "IMG_8950",
        price : 40,
        incart:0,
    },
    {
        name:"Box 3",
        tag: "IMG_8951",
        price : 20,
        incart:0,
    },
    {
        name:"Box 4",
        tag: "IMG_8952",
        price : 15,
        incart:0,
    },
    {
        name:"Box 5",
        tag: "IMG_8953",
        price : 25,
        incart:0,
    },
    {
        name:"Box 6",
        tag: "IMG_8954",
        price : 84,
        incart:0,
    },
    {
        name:"Box 7",
        tag: "IMG_8955",
        price : 35,
        incart:0,
    },
    {
        name:"Box 8",
        tag: "IMG_8972",
        price : 25,
        incart:0,
    },
    {
        name:"Box 9",
        tag: "IMG_8957",
        price : 35,
        incart:0,
    },
    {
        name:"Box 10",
        tag: "IMG_8958",
        price : 40,
        incart:0,
    },
    {
        name:"Box 11",
        tag: "IMG_8960",
        price : 40,
        incart:0,
    },
    {
        name:"Box 12",
        tag: "IMG_8961",
        price : 45,
        incart:0,
    },
    {
        name:"Box 13",
        tag: "IMG_8962",
        price : 40,
        incart:0,
    },
    {
        name:"Box 14",
        tag: "IMG_8975",
        price : 30,
        incart:0,
    },
    {
        name:"Box 15",
        tag: "IMG_8964",
        price : 45,
        incart:0,
    },
    {
        name:"Box 16",
        tag: "IMG_8965",
        price : 50,
        incart:0,
    },
    {
        name:"Box 17",
        tag: "IMG_8974",
        price : 40,
        incart:0,
    },
    {
        name:"Box 18",
        tag: "IMG_8967",
        price : 25,
        incart:0,
    },
    {
        name:"Box 19",
        tag: "IMG_8968",
        price : 40,
        incart:0,
    },
    {
        name:"Box 20",
        tag: "IMG_8969",
        price : 35,
        incart:0,
    },
    {
        name:"Box 21",
        tag: "IMG_8971",
        price : 30,
        incart:0,
    },    
   
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
        let temp= document.querySelector('.cart span');
        if(temp){
            temp.textContent= productNumbers;
        }
    }
}


function cartNumbers(product){
   
    let productNumbers = localStorage.getItem('cartNumbers');
  
    productNumbers = parseInt(productNumbers);
   if (productNumbers){
    localStorage.setItem('cartNumbers',productNumbers+1);
    let temp = document.querySelector('.cart span');
    if(temp){
        temp.textContent= productNumbers+1;

    }
   }
   else {
    localStorage.setItem('cartNumbers',1);
    let temp =document.querySelector('.cart span');
    if(temp){
        temp.textContent= 1;
    }

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
                <span>${item.incart}</span>
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
