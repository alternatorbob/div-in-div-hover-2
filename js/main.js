import { SECTIONS } from './Sections.js'

let sections = []

let currentTab = -1

let activeSection = 'intro'

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
  title.classList.add('title-section')

  const titleText = document.createElement('div')
  titleText.innerHTML = project.title
  title.appendChild(titleText)

  title.style.background = `${project.colour.substring(0, 7)}`
  document.querySelector('.wrapper').appendChild(title)
  document
    .querySelector('.wrapper')
    .insertBefore(title, document.querySelector('.footer'))
  sections.push(`${project.title.replace(/\s+/g, '-').toLowerCase()}`)

  if (title.id.includes(`${activeSection}`)) {
    console.log('active: ', activeSection)
  }
})

for (let i = 0; i < sections.length; i++) {
  let mySection = document.getElementById(`${sections[i]}`)
  mySection.addEventListener('click', () => {
    mySection.classList.add('inactive')
  })

  if (!sections[i].includes(activeSection)) {
    // sections[i].classList.add('inactive')
    console.log(sections[i])
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
