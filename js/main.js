import { SECTIONS } from './Sections.js'

let sections = []

let currentTab = -1

let activeSection = 'formal-studies'

let isTitle = true
let scrollStarted,
  wasClicked = false

// const sections = ['growth', 'advantages', 'formal-studies', 'recycling']

let myTitles = [
  'Mycelium compared to concrete',
  'Durability and Beauty',
  'Title number three',
  'And one last one',
]

let pointerX,
  pointerY = -1

const logSections = () => {
  for (let i = 0; i < sections.length; i++) {
    let val = sections[i]
    switch (val) {
      case 'growth':
        console.log('growth')
        break
      case 'advantages':
        console.log('advantages')
        break
      case 'formal studies':
        console.log('formal studies')
        break
      case 'recycling':
        console.log('recycling')
        break
    }
  }
}

SECTIONS.map((project, idx) => {
  const title = document.createElement('section')
  title.id = `${project.title.replace(/\s+/g, '-').toLowerCase()}`
  title.classList.add('title-section', 'deactive')
  title.innerHTML = project.title
  title.style.background = `${project.colour.substring(0, 7)}`
  document.querySelector('.wrapper').appendChild(title)
  sections.push(`${project.title.replace(/\s+/g, '-').toLowerCase()}`)
})

for (let i = 0; i < sections.length; i++) {
  if (sections[i].includes(activeSection)) {
    const curDiv = document.querySelector(`#${activeSection}`)
    // document.querySelector(`#${activeSection}`).style.border = '1px solid red'
    curDiv.classList.add('active')
    curDiv.style.border = '1px solid red'
  }
}

function updateSection() {}

const subCont = Array.from(document.getElementsByClassName('subContainer'))
addNumbers()
// addContent()
const titles = Array.from(document.getElementsByClassName('title'))
const boxes = Array.from(document.getElementsByClassName('box'))

const curSec = document.getElementsByClassName('title-section')[0]

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
