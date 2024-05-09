
const container = document.querySelector('.container');
const inputRange = document.querySelector('#range')

inputRange.addEventListener('change',(e) => {
    let c = e.target.value;
    container.style.filter = 'brightness(' + c + '%)'
    
});


