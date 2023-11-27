const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'acf7c68b83msh61f57a10a69c759p125dedjsn6f1556f3718f',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

fetch('https://imdb8.p.rapidapi.com/auto-complete?q=Tower', options)
	.then(response => response.json())
    .then(data => {
        const list=data.d;
        list.map((item)=>{
            const name = item.l;
            const poster = item.i.imageUrl;
            const movie = `<li><img src="${poster}"><h2>${name}</h2></li>`
            document.querySelector('.movies').innerHTML +=movie;
        })
    })
	.then(response => console.log(response))
	.catch(err => console.error(err)); 

