const error = document.getElementById('error')


const searchBtn = ()=>{
    const inputSearch = document.getElementById('inputSearch')
    const inputValue = inputSearch.value
    if (inputValue === ''){
        error.innerHTML=`<div class="alert text-center alert-danger" role="alert">
        Search Empty alert—check it out!
      </div>`
    }else{
        document.getElementById('spiner').classList.remove("d-none")
        error.innerText = '';
    const url= `https://openlibrary.org/search.json?q=${inputValue}`
    fetch(url)
    .then (Response => Response.json())
    .then (data => displayShow(data.docs))
    }
    
    inputSearch.value ='';
}

const displayShow = (book) =>{
    book.forEach(information =>{
        console.log(information)
        document.getElementById('spiner').classList.add("d-none")
        const showBook = document.getElementById('bookContainer')
        
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML=`
            <div class="card">
                <img src="https://covers.openlibrary.org/b/id/${information.cover_i}-M.jpg"class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-center">${information.title}</h5>
                        <p class="card-text text-center"><b>fast Publishar</b> ${information.first_publish_year}</p>
                    </div>
            </div>
        `
        showBook.appendChild(div)
        
    })
    
        
}


