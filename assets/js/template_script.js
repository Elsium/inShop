

let input_title = ['Какашка', 'Цена', 'Артикул: CTM260089-190097\n' +
'Код товара: 295321\n' +
'Материал: 80% искусственная кожа, 20% резина\n' +
'Страна-производитель: Китай'];

const div_title = [document.querySelector('.name'),
    document.querySelector('.price'),
    document.querySelector('.main__description')];

const template_title = [document.querySelector('#name'),
    document.querySelector('#price'),
    document.querySelector('#description')];

let p_title = [];
template_title.forEach((item) => {
    p_title.push(item.content.querySelector('p'));
});

p_title.forEach((item, index) => {
    item.textContent = input_title[index];
});

div_title.forEach((item, index) => {
    item.append(p_title[index]);
})