const collection = [
    {
        name: "Pizza salami",
        price: 9.99,
        tags: ["Fast Food", "Italian"],
        picture: "../images/Pizza-Salami-1200x900.webp",
    },
    {
        name: "Aiki noodles",
        price: 5.00,
        tags: ["Fast Food", "Asian"],
        picture: "../images/220629-Bluemango-Aiki02-1.jpg", 
    },
    {
        name: "Aiki noodles",
        price: 5.00,
        tags: ["Fast Food", "Asian"],
        picture: "../images/220629-Bluemango-Aiki02-1.jpg", 
    },
    {
        name: "Aiki noodles",
        price: 5.00,
        tags: ["Fast Food", "Asian"],
        picture: "../images/220629-Bluemango-Aiki02-1.jpg", 
    },
    {
        name: "Aiki noodles",
        price: 5.00,
        tags: ["Fast Food", "Asian"],
        picture: "../images/220629-Bluemango-Aiki02-1.jpg", 
    },
    {
        name: "Aiki noodles",
        price: 5.00,
        tags: ["Fast Food", "Asian"],
        picture: "../images/220629-Bluemango-Aiki02-1.jpg", 
    },
]

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
    price.innerHTML = foodCard.price
    const shopCart = document.createElement("button")
    priceBuy.append(price)
    priceBuy.append(shopCart)
    priceBuy.className = "buy-now"
    article.append(priceBuy)
    document.body.children[1].append(article)
});