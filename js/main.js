let currentTab = -1

let myTitles = [
  'Mycelium compared to concrete',
  'Durability and Beauty',
  'Title number three',
  'And one last one',
]

const subCont = Array.from(document.getElementsByClassName('subContainer'))
addNumbers()
// addContent()
const titles = Array.from(document.getElementsByClassName('title'))
const boxes = Array.from(document.getElementsByClassName('box'))

let divsNeeded = 8

for (let i = 0; i < subCont.length; i++) {
  subCont[i].addEventListener('mouseover', () => {
    subCont[i].style.flex = '50'
    currentTab = i
    removeContent(i)
    // subCont[i].classList.replace('opaque', 'hidden')
  })
}

for (let i = 0; i < subCont.length; i++) {
  subCont[i].addEventListener('mouseout', () => {
    subCont[i].style.flex = '1'
    addContent(currentTab)
    currentTab = -1
  })
}

const curSec = document.getElementById('current-section')
curSec.addEventListener('mouseover', (e) => {
  curSec.style.flex = 0
  for (let i = 0; i < boxes.length; i++) {
    const element = boxes[i]
    element.classList.remove('hidden')
  }
  console.log(e)
})

const myWrapper = document.getElementsByClassName('wrapper')[0]

document.addEventListener('scroll', (e) => {
  console.log('scrolling')
  console.log(e)
})

/*
document.getElementById('menu').addEventListener('mouseover', () => {
  console.log('MENUUUUUU')
  let myDiv = document.getElementsByClassName('menu-content')[0]
  console.log(myDiv)

  myDiv.classList.remove('opaque')
  myDiv.style.visibility = 'visible'
  myDiv.style.transform = 'translate3d(0, 0, 0);'
})
*/

function addNumbers() {
  for (let i = 0; i < subCont.length; i++) {
    const myDiv = document.createElement('div')
    myDiv.classList.add('number')
    myDiv.innerText = i + 1
    subCont[i].prepend(myDiv)
  }
}

function addContent(current) {
  for (let i = 0; i < boxes.length; i++) {
    if (i !== current) {
      boxes[i].classList.remove('opaque')
      // boxes[i].classList.remove('hidden')
    }
  }
}

function removeContent(current) {
  for (let i = 0; i < boxes.length; i++) {
    if (i !== current) {
      boxes[i].classList.add('opaque')
      // if (boxes[i].classList.contains('opaque')) {
      //   boxes[i].classList.add('hidden')
      // }
    }
  }
}

//——-DEBUG

// document.addEventListener('mouseover', (e) => {
//   console.log(e.target.style.opacity)
// })
