const root = document.getElementById('root');
const limit = 3;
const container = document.createElement('div');
container.classList.add('container');
root.append(container);

fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}`)
.then((response)=>response.json())
.then((data)=>{
    console.table(data);  

    data.map((element)=>{console.log(element.url);
    })
    data.forEach(element => {
        const img = document.createElement('img');
        img.src = element.url;
        img.classList.add('img-item')

        img.addEventListener('click', ()=>{
           const bigImgWrap = document.createElement('div');
bigImgWrap.classList.add('bigImg');
const bigImg = document.createElement('img');
img.src = element.url;
bigImgWrap.append(bigImg);
root.append(bigImgWrap)
        })
        container.append(img);
    });
})
.catch((error)=>{(console.log())})

