const collection = [
    {
        name: "Pizza salami",
        price: 9.99,
        tags: ["Fast Food", "Italian"],
        picture: "../images/Pizza-Salami-1200x900.webp",
    },
    {
        name: "Aiki noodles",
        price: 5.99,
        tags: ["Fast Food", "Asian"],
        picture: "../images/220629-Bluemango-Aiki02-1.jpg", 
    },
    {
        name: "Aiki noodles",
        price: 5.99,
        tags: ["Fast Food", "Asian"],
        picture: "../images/220629-Bluemango-Aiki02-1.jpg", 
    },
    {
        name: "Aiki noodles",
        price: 5.99,
        tags: ["Fast Food", "Asian"],
        picture: "../images/220629-Bluemango-Aiki02-1.jpg", 
    },
    {
        name: "Aiki noodles",
        price: 5.99,
        tags: ["Fast Food", "Asian"],
        picture: "../images/220629-Bluemango-Aiki02-1.jpg", 
    },
    {
        name: "Aiki noodles",
        price: 5.99,
        tags: ["Fast Food", "Asian"],
        picture: "../images/220629-Bluemango-Aiki02-1.jpg", 
    },
    {
        name: "Aiki noodles",
        price: 5.99,
        tags: ["Fast Food", "Asian"],
        picture: "../images/220629-Bluemango-Aiki02-1.jpg", 
    },
    {
        name: "Aiki noodles",
        price: 5.99,
        tags: ["Fast Food", "Asian"],
        picture: "../images/220629-Bluemango-Aiki02-1.jpg", 
    },
    {
        name: "Aiki noodles",
        price: 5.99,
        tags: ["Fast Food", "Asian"],
        picture: "../images/220629-Bluemango-Aiki02-1.jpg", 
    },
    {
        name: "Aiki noodles",
        price: 5.99,
        tags: ["Fast Food", "Asian"],
        picture: "../images/220629-Bluemango-Aiki02-1.jpg", 
    },
    {
        name: "Aiki noodles",
        price: 5.99,
        tags: ["Fast Food", "Asian"],
        picture: "../images/220629-Bluemango-Aiki02-1.jpg", 
    },
    {
        name: "Aiki noodles",
        price: 5.99,
        tags: ["Fast Food", "Asian"],
        picture: "../images/220629-Bluemango-Aiki02-1.jpg", 
    },
    {
        name: "Aiki noodles",
        price: 5.99,
        tags: ["Fast Food", "Asian"],
        picture: "../images/220629-Bluemango-Aiki02-1.jpg", 
    },
    {
        name: "Aiki noodles",
        price: 5.99,
        tags: ["Fast Food", "Asian"],
        picture: "../images/220629-Bluemango-Aiki02-1.jpg", 
    },
    {
        name: "Aiki noodles",
        price: 5.99,
        tags: ["Fast Food", "Asian"],
        picture: "../images/220629-Bluemango-Aiki02-1.jpg", 
    },
    {
        name: "Aiki noodles",
        price: 5.99,
        tags: ["Fast Food", "Asian"],
        picture: "../images/220629-Bluemango-Aiki02-1.jpg", 
    },
    {
        name: "Aiki noodles",
        price: 5.99,
        tags: ["Fast Food", "Asian"],
        picture: "../images/220629-Bluemango-Aiki02-1.jpg", 
    },
    {
        name: "Aiki noodles",
        price: 5.99,
        tags: ["Fast Food", "Asian"],
        picture: "../images/220629-Bluemango-Aiki02-1.jpg", 
    },
    {
        name: "Aiki noodles",
        price: 5.99,
        tags: ["Fast Food", "Asian"],
        picture: "../images/220629-Bluemango-Aiki02-1.jpg", 
    },
    {
        name: "Aiki noodles",
        price: 5.99,
        tags: ["Fast Food", "Asian"],
        picture: "../images/220629-Bluemango-Aiki02-1.jpg", 
    },
    {
        name: "Aiki noodles",
        price: 5.99,
        tags: ["Fast Food", "Asian"],
        picture: "../images/220629-Bluemango-Aiki02-1.jpg", 
    },
    {
        name: "Aiki noodles",
        price: 5.99,
        tags: ["Fast Food", "Asian"],
        picture: "../images/220629-Bluemango-Aiki02-1.jpg", 
    },
    {
        name: "Aiki noodles",
        price: 5.99,
        tags: ["Fast Food", "Asian"],
        picture: "../images/220629-Bluemango-Aiki02-1.jpg", 
    },
    {
        name: "Aiki noodles",
        price: 5.99,
        tags: ["Fast Food", "Asian"],
        picture: "../images/220629-Bluemango-Aiki02-1.jpg", 
    },
]
let ammount = 0.00;
const totalAmmount = document.body.children[2].children[2].children[1]
collection.forEach(foodCard => {
    const article = document.createElement("article")
    const image = document.createElement("div")
    image.style.backgroundImage = "url("+foodCard.picture+")"
    image.className = "image"
    article.append(image)
    const food = document.createElement("h2")
    food.innerHTML = foodCard.name
    article.append(food)
    const tagList = document.createElement("ul")
    foodCard.tags.forEach(tag => {
        const listItem = document.createElement("li")
        listItem.innerHTML = tag
        tagList.append(listItem)
    });
    article.append(tagList)
    const priceBuy = document.createElement("div")
    const price = document.createElement("p")
    price.innerHTML = foodCard.price + "€"
    const shopCart = document.createElement("button")
    priceBuy.append(price)
    shopCart.innerHTML = "Add to cart"
    shopCart.addEventListener("click", (event) => {
        const buyList = document.createElement("li")
        const item = document.createElement("p")
        item.innerHTML = foodCard.name
        buyList.append(item)
        const buyPrice = document.createElement("p")
        buyPrice.innerHTML = foodCard.price + "€"
        buyList.append(buyPrice)
        document.body.children[2].children[1].append(buyList)
        ammount = ammount + foodCard.price
        totalAmmount.innerHTML = ammount.toFixed(2) + "€"
    })
    priceBuy.append(shopCart)
    priceBuy.className = "buy-now"
    article.append(priceBuy)
    document.body.children[1].append(article)
});

const cartButton = document.body.children[0].children[1]
const shoppingCartButton = document.body.children[2].children[0].children[1]
const aside = document.body.children[2]
cartButton.addEventListener("click", (event) =>{
    aside.style.display = "flex"
})
shoppingCartButton.addEventListener("click", (event) =>{
    aside.style.display = "none"
})

const cancel = document.getElementById("cancel")
const shoppingList = document.body.children[2].children[1]
cancel.addEventListener("click", (event) =>{
    while (shoppingList.firstChild) {
        shoppingList.removeChild(shoppingList.lastChild)
    }
    totalAmmount.innerHTML = "0.00€"
    ammount = 0.00
})