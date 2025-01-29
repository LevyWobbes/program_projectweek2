let schilderijen = [
    {
        title: "Butterflies",
        artist: "Yayoi Kusama",
        image: "<img src='./resources/butterflies.jpeg'>"
    },
    {
        title: "Dots-acpt",
        artist: "Yayoi Kusama",
        image: "<img src='./resources/dots-acpt.jpeg'>"
    },
    {
        title: "Dots-tqqqz",
        artist: "Yayoi Kusama",
        image: "<img src='./resources/dots-tqqqz.jpeg'>"
    },
    {
        title: "Fire",
        artist: "Yayoi Kusama",
        image: "<img src='./resources/fire.jpeg'>"
    },
    {
        title: "Infinity Nets",
        artist: "Yayoi Kusama",
        image: "<img src='./resources/infinity-nets.jpeg'>"
    },
    {
        title: "My Eternal Soul",
        artist: "Yayoi Kusama",
        image: "<img src='./resources/my-eternal-soul.jpeg'>"
    },
    {
        title: "Pumpkin",
        artist: "Yayoi Kusama",
        image: "<img src='./resources/pumpkin.jpeg'>"
    },
    {
        title: "Still Life",
        artist: "Yayoi Kusama",
        image: "<img src='./resources/still-life.jpeg'>"
    },
    {
        title: "Untitled",
        artist: "Yayoi Kusama",
        image: "<img src='./resources/untitled.jpeg'>"
    },
    {
        title: "White_no28",
        artist: "Yayoi Kusama",
        image: "<img src='./resources/white_no28.jpeg'>"
    },

];

schilderijen.forEach(e => {
    console.log(e.title);
    console.log(e.artist);
    console.log(e.image);
    document.write(e.title, e.artist, "<br>", e.image, "<br><br>");
})
