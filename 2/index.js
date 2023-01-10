// X1sSTEh4S6WrraGDcke6qpz4JUQIKCLly5f1eAoi

document.addEventListener('DOMContentLoaded', showContent)

function showContent() {
fetch('https://api.nasa.gov/planetary/apod?api_key=X1sSTEh4S6WrraGDcke6qpz4JUQIKCLly5f1eAoi&start_date=2023-01-01')
.then(response => response.json())
.then(data => {
    console.log(data)
    let img1 = document.querySelector('.first')
    console.log(img1)
    img1.src=data[1].url
    let img2 = document.querySelector('.second')
    let img3 = document.querySelector('.third')
    let img4 = document.querySelector('.forth')
    let title_1 = document.querySelector('.title_1')
    let title_2 = document.querySelector('.title_2')
    let title_3 = document.querySelector('.title_3')
    let title_4 = document.querySelector('.title_4')
    let description_1 = document.querySelector('.description_1')
    let description_2 = document.querySelector('.description_2')
    let description_3 = document.querySelector('.description_3')
    let description_4 = document.querySelector('.description_4')
    img2.src=data[2].url
    img3.src=data[3].url
    img4.src=data[4].url
    title_1.innerHTML=data[1].title
    title_2.innerHTML=data[2].title
    title_3.innerHTML=data[3].title
    title_4.innerHTML=data[4].title
    description_1.innerHTML=data[1].explanation
    description_2.innerHTML=data[2].explanation
    description_3.innerHTML=data[3].explanation
    description_4.innerHTML=data[4].explanation

    })
}

