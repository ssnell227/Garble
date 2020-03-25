const tileGrid = document.getElementById('tileGrid')

const tileBuilder = () => {
    for (let i=0; i<256; i++) {
        let input = document.createElement('input')
        input.setAttribute('id', i)
        input.setAttribute('maxlength', '1')
        input.setAttribute('class', 'tile')
        input.innerHTML = '1'
        tileGrid.appendChild(input)
    }
}

const userLetters = () => {
    
}

tileBuilder();
