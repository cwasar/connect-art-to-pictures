const textArea = document.querySelector('#links')
const btn = document.querySelector('#btn')
const articuls = document.querySelector('#articuls')
const linksList = document.querySelector('#links-list')
const container = document.querySelector('.container')


const urls = []
const obj = {}


btn.addEventListener('click', function () {
    arrayFromText()
    makeNewForm()
    makeForm()
   
})

function arrayFromText () {
    let urlArray = textArea.value.split('\n')
    for (let i = 0; i < urlArray.length; i++) {
        urls.push(urlArray[i])
    }
    console.log(urls);
}


function makeNewForm() {
    container.insertAdjacentHTML('beforeend', `
    <textarea name="" id="urli" cols="30" rows="10" placeholder="сюда артикулы поставщика"></textarea>
    <button id="btn2">Преобразовать</button>
    `)
}


function makeForm() {
    let btn2 = document.querySelector('#btn2')
    btn2.addEventListener('click', function() {
    console.log('кнопка');  
    renderAllLists()  
    goToPage ()
    console.log(obj);
    })   
}


function renderAllLists() {
    console.log('z');
    const textArea2 = document.querySelector('#urli')
    let articules = textArea2.value.split('\n')

    articules.map(function(key) {
        obj[key] = []
       urls.filter(function(item) {
        if (item.includes(key)) {
            return obj[key].push(item)
          }  
        })
    })
}

function goToPage () {
    for (key in obj) {
        let arty = document.createElement('li')
        let urr = document.createElement('li')

        if (obj[key].length) {

            articuls.insertAdjacentElement('beforeend', arty)
            arty.textContent = key

            linksList.insertAdjacentElement('beforeend', urr)
            urr.textContent = obj[key]

        } else {
            articuls.insertAdjacentElement('beforeend', arty)
            arty.textContent = key

            linksList.insertAdjacentElement('beforeend', urr)
            urr.textContent = '0'
        }
    }
}

