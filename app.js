let allMobiles = [
    {
        brand: "Samsung",
        model: "SamsungA30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",

    },
    {
        brand: "Samsung",
        model: "SamsungA10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom: "128gb",

    },
    {
        brand: "Samsung",
        model: "SamsungA20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom: "128gb",

    },
    {
        brand: "Vivo",
        model: "VivoY20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom: "32gb",

    },
    {
        brand: "Vivo",
        model: "VivoY11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom: "32gb",

    },
    {
        brand: "Vivo",
        model: "VivoY15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom: "64gb",

    },
    {
        brand: "Motorola",
        model: "Motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom: "32gb",

    },
    {
        brand: "Iphone",
        model: "Iphone12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",

    },
    {
        brand: "Iphone",
        model: "Iphone13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",

    },
    {
        brand: "Iphone",
        model: "IphoneX",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",

    },
];

let search_by_key

const select_option_element = document.getElementById('select-options')
const search_input_element = document.getElementById('search-input')
const search_btn_element = document.getElementById('basic-addon2')
const render_cards_element = document.getElementById('render-cards')


const option_keys = Object.keys(allMobiles[0])


option_keys.map((key_elem) => {

    select_option_element.innerHTML += `<option value=${key_elem}>${key_elem}</option>`
})



select_option_element.addEventListener('change', (e) => {
    console.log(e.target.value)
    search_by_key = e.target.value
    search_input_element.placeholder = `Search by ${e.target.value}`

})

search_btn_element.addEventListener('click', () => {
    // console.log('first')

    const searched_value = search_input_element.value

    render_data = allMobiles.filter((elem) => elem[search_by_key].toLowerCase() === searched_value.toLowerCase())

    render_data.map((elem) => {
        const { brand, model, price, camera, ram, rom } = elem
        return render_cards_element.innerHTML += `<div class="card col mx-3" >
        <div class="card-body">
          <h5 class="card-title">Model: ${model}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">Brand: ${brand}</h6>
          <p class="card-text">Price: ${price}</p>
        </div>
      </div>`
    })


})
// console.log(render_data)