document.addEventListener("DOMContentLoaded", function (){
const productsContainor= document.getElementById("product-continer")

const jsonData = {
    "product" : [
        {
            "id": 1,
            "name":"product A",
            "price":30
        },
        {
            "id":2,
            "name":"product B",
            "price":35
        },
        {
            "id":3,
            "nanm":"product C",
            "price":40

        },
    
    ]
};
 jsonData .product.forEach(product => {
    const productDiv =document.createElement("div");
    productDiv .classList.add("product");


    const productName= document . createElement("h3");
    productName .textContent= product.name;

    const productPrice = document.createElement("p");
    productPrice.textContent = 'price: $${product.price}'
    

    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);

    productsContainor.appendChild(productDiv); 
   });
    
});