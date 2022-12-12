const item = document.querySelector('.item')
const placeHolders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragStart)

item.addEventListener('dragend', dragEnd)


for(const placeholder of placeHolders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', drop)
}
function dragStart(event) {
    event.target.classList.add('hold')
    setTimeout(() => {
        event.target.classList.add('hide')
    }, 0)

}


function dragEnd(event) {
    event.target.classList.remove('hold')
    event.target.classList.remove('hide')
    console.log(event.target)
}

function dragover(event) {
event.preventDefault()
}
function dragenter(event) {
    console.log('dragenter')
    event.target.classList.add('hovered')
}
function dragleave(event) {
    event.target.classList.remove('hovered')
    console.log('dragleave')
}
function drop(event) {
    console.log('drop')
    event.target.classList.remove('hovered')
    event.target.append(item)
}