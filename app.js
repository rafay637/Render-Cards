let StudentArr = [
    {
        id: 4,
        title: "Dummy Data1",
        price: "Rs/-$382",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quaerat repudiandae, enim recusandae dolores odit eaque laborum temporibus modi accusantium fugiat earum? Ipsa omnis sit vitae sapiente nostrum laudantium neque?",
        Image_url: "https://cdn05.carsforsale.com/00e7818a91f451732249f04173c1a3058f/480x360/2019-dodge-challenger-gt-2dr-coupe.jpg",
        product_oder: "Buy Now"
    },
    {
        id: 8,
        title: "Dummy Data2",
        price: "Rs/-$496",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quaerat repudiandae, enim recusandae dolores odit eaque laborum temporibus modi accusantium fugiat earum? Ipsa omnis sit vitae sapiente nostrum laudantium neque?",
        Image_url: "https://cdn05.carsforsale.com/00e7818a91f451732249f04173c1a3058f/480x360/2019-dodge-challenger-gt-2dr-coupe.jpg",
        product_oder: "Buy Now"
    },
    {
        id: 12,
        title: "Dummy Data3",
        price: "Rs/-$572",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quaerat repudiandae, enim recusandae dolores odit eaque laborum temporibus modi accusantium fugiat earum? Ipsa omnis sit vitae sapiente nostrum laudantium neque?",
        Image_url: "https://cdn05.carsforsale.com/00e7818a91f451732249f04173c1a3058f/480x360/2019-dodge-challenger-gt-2dr-coupe.jpg",
        product_oder: "Buy Now"
    },
    {
        id: 16,
        title: "Dummy Data4",
        price: "Rs/-$797",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quaerat repudiandae, enim recusandae dolores odit eaque laborum temporibus modi accusantium fugiat earum? Ipsa omnis sit vitae sapiente nostrum laudantium neque?",
        Image_url: "https://cdn05.carsforsale.com/00e7818a91f451732249f04173c1a3058f/480x360/2019-dodge-challenger-gt-2dr-coupe.jpg",
        product_oder: "Buy Now"
    },
    {
        id: 20,
        title: "Dummy Data5",
        price: "Rs/-$980",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quaerat repudiandae, enim recusandae dolores odit eaque laborum temporibus modi accusantium fugiat earum? Ipsa omnis sit vitae sapiente nostrum laudantium neque?",
        Image_url: "https://cdn05.carsforsale.com/00e7818a91f451732249f04173c1a3058f/480x360/2019-dodge-challenger-gt-2dr-coupe.jpg",
        product_oder: "Buy Now"
    },
    {
        id: 24,
        title: "Dummy Data6",
        price: "Rs/-$806",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quaerat repudiandae, enim recusandae dolores odit eaque laborum temporibus modi accusantium fugiat earum? Ipsa omnis sit vitae sapiente nostrum laudantium neque?",
        Image_url: "https://cdn05.carsforsale.com/00e7818a91f451732249f04173c1a3058f/480x360/2019-dodge-challenger-gt-2dr-coupe.jpg",
        product_oder: "Buy Now"
    },
];

let StudentData = document.getElementById("student-record");

StudentArr.map((value, index) => {
    let { id, title, price, description, Image_url, product_oder } = value;

    return StudentData.innerHTML += `
    <div class="1a" style="width: 22rem; margin-left: 28rem; border: 1px solid black;">
        <img src="${Image_url}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title p-2">${title}</h5>
            <p class="card-text p-2">${description}</p>
            <p class="card-prise p-2">${price} ${id}</p>
            <a href="#" class="btn btn-primary m-2">${product_oder}</a>
        </div>
    </div>`
});










// ======================EXTRA WORK START=========================

// [
//     {
//         id: 4,
//         title: "Dummy Data1",
//         price: 382,
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quaerat repudiandae, enim recusandae dolores odit eaque laborum temporibus modi accusantium fugiat earum? Ipsa omnis sit vitae sapiente nostrum laudantium neque?",
//         Image_url: "https://cdn05.carsforsale.com/00e7818a91f451732249f04173c1a3058f/480x360/2019-dodge-challenger-gt-2dr-coupe.jpg",
//         product_oder: "Oder1"
//     },
// ]
// const obj = document.getElementById("1a")
// const arr = {
//     title: "Dummy Data1",
//     price: 382,
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quaerat repudiandae, enim recusandae dolores odit eaque laborum temporibus modi accusantium fugiat earum? Ipsa omnis sit vitae sapiente nostrum laudantium neque?",
//     Image_url: "https://cdn05.carsforsale.com/00e7818a91f451732249f04173c1a3058f/480x360/2019-dodge-challenger-gt-2dr-coupe.jpg",
//     product_oder: "Oder1",
// }
// for (let i = 0; i < arr.length; i++) {
//     const cardHTML =
//         `<div class="card" style="width: 22rem;">
//             <img src="${arr[i].Image_url}" class="card-img-top" alt="....">
//             <div class="card-body">
//                 <h5 class="card-title">${arr[i].title}</h5>
//                 <p class="card-text">${arr[i].description}</p>
//                 ${arr[i].prise}
//                 <a href="#" class="btn btn-primary">${arr[i].product_oder}</a>
//             </div>
//         </div>`
// };
// console.log(arr);

// ======================EXTRA WORK END=========================