// X1sSTEh4S6WrraGDcke6qpz4JUQIKCLly5f1eAoi


fetch('https://api.nasa.gov/planetary/apod?api_key=X1sSTEh4S6WrraGDcke6qpz4JUQIKCLly5f1eAoi&start_date=2023-01-01')
.then(response => response.json())
.then(data => {
    console.log(data)
    let img1 = document.querySelector('.first')
    console.log(img1)
    // img1.src=data[1].url
    // let img2 = document.querySelector('.second')
    // let img3 = document.querySelector('.third')
    // let img4 = document.querySelector('.forth')
    
    // img2.src=data[2].url
    // img3.src=data[3].url
    // img4.src=data[4].url
    })

