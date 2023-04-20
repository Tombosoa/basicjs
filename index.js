const right = document.querySelector('.right')
const middle = document.querySelector('.middle')
const left = document.querySelector('.left')
const paragraph = document.createElement('div')
/*paragraph.innerText = "Catch me!"*/
paragraph.classList.add("balle")

setInterval(function(){
    paragraph.style.background = 'red'
    right.appendChild(paragraph)
}, 1000)
setInterval(function(){
    paragraph.style.background = 'blue'
    middle.appendChild(paragraph)
}, 2000)
setInterval(function(){
    paragraph.style.background = 'green'
    left.appendChild(paragraph)
}, 3000)
paragraph.addEventListener("click", function(){
    alert('You win')
})
