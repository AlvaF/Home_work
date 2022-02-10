const products = [
    { id: 1, title: 'Notebook', price: 2000, img: 'https://picsum.photos/300/400?random=1' },
    { id: 2, title: 'Mouse', price: 20, img: 'https://picsum.photos/300/400?random=2' },
    { id: 3, title: 'Keyboard', price: 200, img: 'https://picsum.photos/300/400?random=3' },
    { id: 4, title: 'Gamepad', price: 50, img: 'https://picsum.photos/300/400?random=4' },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (product) => { //для упрощения функции в аргумент я передала массив
    return `<div class="product-item">
                <h3>${product.title}</h3>
                <p>${product.price}</p>
                <img src="${product.img}" alt=""></img> 
                <button class="buy-btn">Купить</button>
            </div>`
}; //к каждой карточке товара я добавила рандомно генерирующиеся картинки
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(...productsList);
    document.querySelector('.products').innerHTML = productsList.join(''); //для того, чтобы убрать запятую я использовала метод join()
};

renderPage(products);