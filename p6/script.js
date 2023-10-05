window.addEventListener('load', () => {
    const pictures = localStorage.getItem('pictures');
    if (pictures) {
        const picturesData = JSON.parse(pictures);
        console.log(picturesData);
    }
})

const btn = document.querySelector('.button');

btn.addEventListener("click", () => {
    console.log('jopa');
    const error = document.querySelector('.error');
    const page = document.querySelector('#page').value;
    const limit = document.querySelector('#limit').value;
    const pageAsNumber = Number(page);
    const limitAsNumber = Number(limit);
    const pageOutOfRange = typeof pageAsNumber != "number" || pageAsNumber < 1 && pageAsNumber > 10;
    const limitOutOfRange = typeof limitAsNumber != "number" || limitAsNumber < 1 && limitAsNumber > 10;
    error.textContent = "";

    console.log(typeof page, typeof limit);
    
    console.log(pageOutOfRange, limitOutOfRange);
    if(pageOutOfRange && limitOutOfRange) {
        return error.textContent = ('Номер страницы и лимит вне диапазона от 1 до 10');
    }
    
    if(pageOutOfRange) {
        return error.textContent = ('Номер страницы вне диапазона от 1 до 10');
    }

    if(limitOutOfRange) {
        return error.textContent = ('Лимит вне диапазона от 1 до 10');
    }

    fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
        .then(response => response.json())
        .then(pictures => {
            console.log(pictures);
            localStorage.setItem('pictures', JSON.stringify(pictures));
        })
        .catch(error => {
            console.error(error);
        });
});
