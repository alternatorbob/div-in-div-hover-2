import { SECTIONS } from './Sections.js'

let currentTab = -1
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

// for (let i = 0; i < sections.length; i++) {
//   let val = sections[i]
//   switch (val) {
//     case 'growth':
//       console.log('growth')
//       break
//     case 'advantages':
//       console.log('advantages')
//       break
//     case 'formal-studies':
//       console.log('formal-studies')
//       break
//     case 'recycling':
//       console.log('recycling')
//       break
//   }
// }

SECTIONS.map((project, idx) => {
  console.log(project.title)
})

function updateSection() {}

const subCont = Array.from(document.getElementsByClassName('subContainer'))
addNumbers()
// addContent()
const titles = Array.from(document.getElementsByClassName('title'))
const boxes = Array.from(document.getElementsByClassName('box'))

const curSec = document.getElementsByClassName('title-section')[0]

document.querySelector('#growth').addEventListener('click', (e) => {
  curSec.style.flex = '0 1 0%'
  curSec.style.transition = '.4s'
  curSec.style.fontSize = '20px'
  for (let i = 0; i < boxes.length; i++) {
    const e = boxes[i]
    e.classList.remove('hidden')
  }
  wasClicked = true
  setTimeout(startScroll, 1500)
  pointerCheck()
})

function startScroll() {
  console.log('scroll started')

  for (let i = 0; i < subCont.length; i++) {
    // console.log('Width:  ' + subCont[i].offsetWidth)
    // console.log('Height: ' + subCont[i].offsetHeight)
    // console.log('bounding: ' + subCont[i].getBoundingClientRect())

    for (var key in subCont[i]) {
      if (typeof subCont[0][key] !== 'function') {
        // console.log(`${key} : ${subCont[0][key]}`)

        console.log(subCont[1].getBoundingClientRect().x)
        console.log(subCont[1].getBoundingClientRect().y)

        // console.log('pointerX: ' + pointerX)
        // console.log('pointerY: ' + pointerY)
        // console.log('offsetTop:' + subCont[0].offsetTop)
        // console.log('offsetLeft:' + subCont[0].offsetLeft)
        // console.log('offsetWidth:' + subCont[0].offsetWidth)
        // console.log('offsetHeight:' + subCont[0].offsetHeight)
      }
      if (
        pointerX >= subCont[1].offsetLeft &&
        pointerX <=
          subCont[1].getBoundingClientRect().x + subCont[1].offsetWidth
      )
        subCont[1].style.flex = '50'
      currentTab = 1
      // removeContent(i)
      /*
       &&
        pointerY >= subCont[1].offsetHeight &&
        pointerY <= subCont[1].offsetTop
        */
    }

    subCont[i].addEventListener('mouseover', (e) => {
      if (scrollStarted) {
        subCont[i].style.flex = '50'
        currentTab = i
        removeContent(i)
      }
    })
  }

  for (let i = 0; i < subCont.length; i++) {
    subCont[i].addEventListener('mouseout', () => {
      subCont[i].style.flex = '1'
      addContent(currentTab)
      currentTab = -1
    })
  }
}

function pointerCheck(e) {
  pointerX = (e || event).clientX
  pointerY = (e || event).clientY
  if (document.documentElement.scrollTop > 0) {
    pointerY = pointerY + document.documentElement.scrollTop
  }
  console.log(pointerX, pointerY)
  document.onmousemove = (event) => {
    if (
      pointerX + 5 == event.clientX ||
      pointerX - 5 == event.clientX ||
      pointerY + 5 == event.clientY ||
      (pointerY - 5 == event.clientY && !scrollStarted)
    ) {
      // console.log(pointerX, pointerY)
      // console.log('eventX: ' + event.clientX, 'eventY: ' + event.clientY)
      console.log('mouse has been moved')
      scrollStarted = true
    }
  }
  if (scrollStarted) startScroll()
}

const myWrapper = document.getElementsByClassName('wrapper')[0]
const mainContainer = document.querySelector('main.container')

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
