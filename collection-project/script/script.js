const collection = [
    {
        name: "Red Dead Redemption 2",
        developer: "Rockstar Games",
        releaseDate: "November 5, 2019",
        tags: ["Shooter", "Open world"],
        picture: "./images/maxresdefault.jpg",
        link: "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/",
    },
    {
        name: "Counter-Strike 2",
        developer: "Valve",
        releaseDate: "27 september 2023",
        tags: ["Shooter", "Competetive"],
        picture: "./images/cs2.jpg",
        link: "https://store.steampowered.com/app/730/CounterStrike_2/"
    },
    {
        name: "Shadow Tactics: Blades of the Shogun",
        developer: "Mimimi Games",
        releaseDate: "6 Dec, 2016",
        tags: ["RTS", "Stealth"],
        picture: "./images/ShadowTactics.jpg",
        link: "https://store.steampowered.com/app/418240/Shadow_Tactics_Blades_of_the_Shogun/"
    },
    {
        name: "Bloons TD 6",
        developer: "Ninja Kiwi",
        releaseDate: "18 Dec, 2018",
        tags: ["Tower-defence", "Strategy"],
        picture: "./images/Bloons_td.jpg",
        link: "https://store.steampowered.com/app/960090/Bloons_TD_6/"
    },
    {
        name: "Monster Hunter: World",
        developer: "CAPCOM co., Ltd.",
        releaseDate: "26 januari 2018",
        tags: ["Co-op", "Action"],
        picture: "./images/monster.png",
        link: "https://store.steampowered.com/app/582010/Monster_Hunter_World/"
    },
    {
        name: "Gunfire Reborn",
        developer: "Duoyi Games",
        releaseDate: "18 Nov, 2021",
        tags: ["Roguelite", "FPS"],
        picture: "./images/gunfire.jpg",
        link: "https://store.steampowered.com/app/1217060/Gunfire_Reborn/"
    },
    {
        name: "Hitman 3",
        developer: "IO Interactive A/S",
        releaseDate: "20 Jan, 2022",
        tags: ["Stealth", "Assassin"],
        picture: "./images/hitman.jpg",
        link: "https://store.steampowered.com/app/1659040/HITMAN_3/"
    },
    {
        name: "Resident Evil 4 Remake",
        developer: "CAPCOM Co., Ltd.",
        releaseDate: "24 Mar, 2023",
        tags: ["Horror", "Action"],
        picture: "./images/resi.jpg",
        link: "https://store.steampowered.com/app/2050650/Resident_Evil_4/"
    },
    {
        name: "Phoenix Wright: Ace Attorney Trilogy",
        developer: "CAPCOM Co., Ltd.",
        releaseDate: "9 Apr, 2019 (on steam)",
        tags: ["Detective", "Mystery"],
        picture: "./images/ace.jpg",
        link: "https://store.steampowered.com/app/787480/Phoenix_Wright_Ace_Attorney_Trilogy/"
    },
    {
        name: "My Time At Sandrock",
        developer: "Pathea Games",
        releaseDate: "2 Nov, 2023",
        tags: ["Life sim", "Building"],
        picture: "./images/sandrock.jpg",
        link: "https://store.steampowered.com/app/1084600/My_Time_at_Sandrock/"
    },
    {
        name: "Tower Unite",
        developer: "PixelTail Games",
        releaseDate: "8 Apr, 2016",
        tags: ["Casual", "Early Access"],
        picture: "./images/tower.png",
        link: "https://store.steampowered.com/app/394690/Tower_Unite/"
    },
    {
        name: "Cult of the Lamb",
        developer: "Massive Monster",
        releaseDate: "11 Aug, 2022",
        tags: ["Base Building", "Cute"],
        picture: "./images/cotl.avif",
        link: "https://store.steampowered.com/app/1313140/Cult_of_the_Lamb/"
    },
]

collection.forEach(game => {
    const article = document.createElement('article')
    const image = document.createElement('img')
    image.src = game.picture
    article.append(image)
    const list = document.createElement('ul')
    game.tags.forEach(tag => {
        const listItem = document.createElement('li')
        listItem.innerHTML = tag
        list.append(listItem)
    })
    article.append(list)
    const title = document.createElement('h3')
    title.innerHTML = game.name
    article.append(title)
    const dev = document.createElement('sub')
    dev.innerHTML = game.developer
    article.append(dev)
    const release = document.createElement('p')
    release.innerHTML = game.releaseDate
    article.append(release)
    const line = document.createElement('hr')
    article.append(line)
    const link = document.createElement('a')
    link.href = game.link
    const steamLogo = document.createElement('img')
    steamLogo.src = './images/Steam_icon_logo.svg.png'
    link.append(steamLogo)
    article.append(link)
    document.body.children[1].append(article)
});