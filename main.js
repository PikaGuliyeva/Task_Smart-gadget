const products = [
    {
        id: 1,
        category: "Telefon",
        name: "IPhone 16 Pro",
        image: "image/iphone 16 pro.webp",
        link: "https://birmarket.az/product/958343-smartfon-apple-iphone-16-pro-max-8gb-256gb-desert-titanium",
        price: 2000
    },
    {
        id: 2,
        category: "Saat",
        name: "Apple Watch 11 series",
        image: "image/Apple Watch 11.jfif",
        link: "https://birmarket.az/product/1924241-agilli-saat-apple-watch-series-11-gps-46mm-space-grey-with-black-sport-band-s-m-mev04lw-a#search_id=8c64467e-c713-40e5-9782-c2d631d553d1",
        price: 900

    },
    {
        id: 3,
        category: "Qulaqliq",
        name: "AirPods 4",
        image: "image/AirPods 4.jfif",
        link: "https://birmarket.az/product/946483-simsiz-qulaqliqlar-apple-airpods-4-ofitsialnaya-garantiya",
        price: 300
    },
    {
        id: 4,
        category: "Laptop",
        name: "MacBook Air 15 M4",
        image: "image/Macbook Air 15 M4.jpeg",
        link: "https://birmarket.az/product/2088893-notbuk-apple-macbook-air-15-3-m5-2026-10c-cpu-10c-gpu-16gb-1tb-midnight-mdvk4#search_id=2ccbe3ee-e63b-4eda-840d-fab67f348e6c",
        price: 4000
    },
    {
        id: 5,
        category: "Telefon",
        name: "IPhone 17 Pro Max",
        image: "image/iphone 17 pro max.jfif",
        link: "https://birmarket.az/product/1431695-smartfon-apple-iphone-17-pro-max-256gb-cosmic-orange-mfy94ja#search_id=273d1ef1-f7f5-44ef-845c-2834e438ee45",
        price: 3000
    },
    {
        id: 6,
        category: "Saat",
        name: "Apple Watch SE 3",
        image: "image/Apple Watch SE 3.webp",
        link: "https://birmarket.az/product/1414069-agilli-saat-apple-watch-se-3-gps-40mm-midnight-aluminium-case-with-midnight-sport-band-s-m-resmi-zemanet#search_id=3e5624bc-a5a3-488c-90c3-a3ed1e10a15e",
        price: 500

    },
    {
        id: 7,
        category: "Qulaqliq",
        name: "AirPods Max",
        image: "image/AirPods Max.jfif",
        link: "https://birmarket.az/product/224282-simsiz-qulaqliq-apple-airpods-max-chehrayi#search_id=46110c52-6f64-41e4-a1bb-75f25fd7db41",
        price: 700
    },
    {
        id: 8,
        category: "Laptop",
        name: "MacBook Air M2",
        image: "image/Macbook Air M2.jpg",
        link: "https://birmarket.az/product/1145303-notbuk-apple-macbook-air-15-3-m4-2025-10c-cpu-10c-gpu-16-gb-256-gb-midnight-mw1l3",
        price: 2000
    },
    {
        id: 9,
        category: "Telefon",
        name: "IPhone 18 Pro Max",
        image: "image/iphone 18 pro max.webp",
        link: "https://birmarket.az/product/2738439-smartfon-apple-iphone-18-pro-max-256gb-burgundy#search_id=e2ce0b56-8492-40b6-9a0d-5d222b4cfc9e",
        price: 4000
    },
    {
        id: 10,
        category: "Saat",
        name: "Apple Watch Ultra 3",
        image: "image/Apple Watch Ultra 3.jfif",
        link: "https://birmarket.az/product/1417981-agilli-saat-apple-watch-ultra-3-gps-cellular-49mm-black-titanium-case-with-black-ocean-band-resmi-zemanet#search_id=cde2695e-e13b-49ff-96e1-83f7c595ab49",
        price: 1800

    },
    {
        id: 11,
        category: "Qulaqliq",
        name: "AirPods pro 3",
        image: "image/AirPods pro 3.jfif",
        link: "https://birmarket.az/product/1431837-simsiz-qulaqliqlar-apple-airpods-pro-3-mfhp4za-a#search_id=5b5ca3f7-0d3d-45a8-ba9a-87b19de374df",
        price: 400
    },
    {
        id: 12,
        category: "Laptop",
        name: "MacBook pro",
        image: "image/Macbook pro.jpeg",
        link: "https://birmarket.az/product/1502026-notbuk-apple-macbook-pro-14-m5-2025-10c-cpu-10c-gpu-16gb-512gb-space-black-mde04#search_id=9272935d-2c55-4110-b0df-a6f4bff21a87",
        price: 3800
    },
]
const index = 0;
const productCount = products.length;

showProducts(index);

function showProducts(index) {

    document.querySelector('.product-link').setAttribute('href',products[index].link);

    document.querySelector('.product-img').setAttribute('src',products[index].image);
    
    document.querySelector('.product-category').textContent = products[index].category
    
    document.querySelector('.product-name').textContent = products[index].name;
        
    document.querySelector('.product-price').textContent = products[index].price;
}

 