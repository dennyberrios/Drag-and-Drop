const items = document.querySelectorAll('.results p span');
const dropZone = document.querySelector('#res')
const dropZoneContainer = document.querySelector('.res-container');

function onDragStart(e) {
    setTimeout(function() {
        e.target.classList.add('move');
    }, 1)
};

function onDragEnter() {
    dropZone.classList.add('enter');
}

function onDragEnd(e) {
    dropZone.classList.remove('enter');
    dropZone.classList.add('dropped');

    const value = e.target.textContent
    dropZone.textContent = value;
    
    if(2 + 2 == parseInt(value)) {
        dropZoneContainer.classList.remove('error');
        dropZoneContainer.classList.add('correct');
    }else{
        dropZoneContainer.classList.remove('correct');
        dropZoneContainer.classList.add('error');
    }
};

function onDragLeave() {
    dropZone.classList.remove('enter')
}

// Adicionando Events
dropZone.addEventListener('dragenter', onDragEnter)
dropZone.addEventListener('dragleave', onDragLeave)

items.forEach(function(item) {
    item.addEventListener('dragstart', onDragStart)
    item.addEventListener('dragend', onDragEnd)
})

document.querySelector('button').addEventListener('click', () => {
    window.location.reload()
})