import { SECTIONS } from './Sections.js'

let sections = []

let currentTab = -1

let activeSection = 'intro'
let previousSection = sections[sections.length - 1]
let state = 'title'
let lastAction

let scrollStarted,
  wasClicked = false

let pointerX,
  pointerY = -1

SECTIONS.map((project) => {
  const section = document.createElement('section')
  section.id = `${project.title.replace(/\s+/g, '-').toLowerCase()}`
  section.classList.add('section')

  const titleText = document.createElement('div')
  titleText.innerHTML = project.title
  titleText.classList.add('titleText')
  titleText.id = `tit-${project.title.replace(/\s+/g, '-').toLowerCase()}`
  section.appendChild(titleText)

  section.style.background = `${project.colour.substring(0, 7)}`

  document
    .querySelector('.wrapper')
    .insertBefore(section, document.querySelector('.footer'))
  sections.push(`${project.title.replace(/\s+/g, '-').toLowerCase()}`)
})

for (let i = 0; i < SECTIONS.length; i++) {
  let mySection = document.getElementById(`${sections[i]}`)
  // const grid = document.createElement('div')
  // grid.innerHTML = 'grid'
  // mySection.appendChild(grid)
  // grid.classList.add('grid')

  const subContainer = document.createElement('div')
  subContainer.classList.add('subContainer')
  subContainer.id = `sub-${SECTIONS[i].title
    .replace(/\s+/g, '-')
    .toLowerCase()}`
  mySection.appendChild(subContainer)

  for (let j = 0; j < SECTIONS[i].content.length; j++) {
    const box = document.createElement('div')
    box.id = `sub-${SECTIONS[i].title.replace(/\s+/g, '-').toLowerCase()}`

    box.classList.add('box')
    // box.innerHTML = SECTIONS.content[j].subtitle
    box.innerHTML = j + 1
    subContainer.appendChild(box)
  }

  if (!sections[i].includes(activeSection)) {
    mySection.classList.add('inactive')
    document.querySelector(`#sub-${sections[i]}`).classList.add('inactive')
  } else {
    mySection.children[0].classList.add('titleActive')
  }
}

document.addEventListener('keydown', keyChange)

function scrollListener() {
  if (event.deltaY < 0) {
    lastAction = 'ArrowUp'
    changeState()
  } else if (event.deltaY > 0) {
    lastAction = 'ArrowDown'
    changeState()
  }
}
window.addEventListener('wheel', throttle(scrollListener, 1200))

function throttle(fn, wait) {
  var time = Date.now()
  return function () {
    if (time + wait - Date.now() < 0) {
      fn()
      time = Date.now()
    }
  }
}

function keyChange(e) {
  switch (e.code) {
    case 'ArrowDown':
      //advance website
      lastAction = 'ArrowDown'
      changeState()
      break
    case 'ArrowUp':
      //go back in website
      lastAction = 'ArrowUp'
      changeState()
      break
  }
}

const subCont = Array.from(document.getElementsByClassName('subContainer'))
const titles = Array.from(document.getElementsByClassName('title'))
const boxes = Array.from(document.getElementsByClassName('box'))

const curSec = document.getElementsByClassName('title-section')[0]

function changeState() {
  let actSect = document.querySelector(`#${activeSection}`)
  let prevSect = document.querySelector(`#${previousSection}`)

  const actTit = document.querySelector(`#tit-${activeSection}`)
  const actSub = document.querySelector(`#sub-${activeSection}`)

  const prevTit = document.querySelector(`#tit-${previousSection}`)
  const prevSub = document.querySelector(`#sub-${previousSection}`)

  switch (state) {
    case 'title':
      //select title, apply title state
      switch (lastAction) {
        case 'ArrowDown':
          //Show Content
          // console.log('show content')
          actSect.children[0].classList.remove('titleActive')
          actSect.children[0].classList.add('titleInactive')
          actSect.children[1].classList.remove('contentInactive')
          actSect.children[1].classList.add('contentActive')
          break
        case 'ArrowUp':
          //PREVIOUS Section
          //Update Active Section
          previousSection = activeSection
          if (sections[sections.indexOf(activeSection)].includes(sections[0])) {
            activeSection = sections[sections.length - 1]
            // console.log('start of section')
          } else {
            activeSection = sections[sections.indexOf(activeSection) - 1]
          }
          // console.log('show content')
          changeSection(lastAction)

          break
      }
      state = 'content'
      break

    case 'content':
      //select content, apply content state
      switch (lastAction) {
        case 'ArrowDown':
          //NEXT Section
          previousSection = activeSection
          if (
            sections[sections.indexOf(activeSection)] ===
            sections[sections.length - 1]
          ) {
            activeSection = sections[0]
            console.log('end of sections')
          } else {
            activeSection = sections[sections.indexOf(activeSection) + 1]
          }
          //Update Active Section
          changeSection(lastAction)
          break
        case 'ArrowUp':
          //Show Title
          // console.log('show title')
          actSect.children[1].classList.remove('contentActive')
          actSect.children[1].classList.add('contentInactive')
          actSect.children[0].classList.remove('titleInactive')
          actSect.children[0].classList.add('titleActive')
          break
      }
      state = 'title'
      break
  }
}

function changeSection(lastAct) {
  //GET all the divs we need to show and hide
  const actSect = document.querySelector(`#${activeSection}`)
  const actTit = document.querySelector(`#tit-${activeSection}`)
  const actSub = document.querySelector(`#sub-${activeSection}`)

  const prevSect = document.querySelector(`#${previousSection}`)
  const prevTit = document.querySelector(`#tit-${previousSection}`)
  const prevSub = document.querySelector(`#sub-${previousSection}`)

  prevSect.classList.remove('active')
  prevSect.classList.add('inactive')
  actSect.classList.remove('inactive')
  actSect.classList.add('active')

  prevTit.classList.remove('titleActive')
  prevTit.classList.add('titleInactive')
  prevTit.classList.add('titleHidden')

  actTit.classList.remove('titleHidden')
  actTit.classList.remove('titleInactive')
  actTit.classList.add('titleActive')

  prevSub.classList.remove('contentActive')
  prevSub.classList.add('contentInactive')
  if (lastAct == 'ArrowUp') {
    actSub.classList.remove('contentInactive')
    actSub.classList.add('contentActive')
    actTit.classList.remove('titleActive')
    actTit.classList.add('titleInactive')
  }

  actSub.classList.remove('inactive')
  actSub.classList.add('active')
  prevSub.classList.remove('active')
  prevSub.classList.add('inactive')
}

function updateSection() {
  const mySection = document.querySelector(`#${activeSection}`)
  console.log('update: ', mySection)
  document.querySelector(`#${previousSection}`).classList.remove('active')
  document.querySelector(`#${previousSection}`).classList.add('inactive')
  const object = document.querySelector(`#${previousSection}`).childNodes
  console.log(object)
  object.forEach((element) => {
    element.classList.add('dissapear')
  })

  mySection.classList.remove('inactive')
  mySection.classList.add('active')
  document.querySelector(`#sub-${activeSection}`).classList.remove('inactive')
  document.querySelector(`#sub-${activeSection}`).classList.add('active')

  mySection.children[1].classList.add('contentInactive')
  mySection.children[1].classList.remove('contentActive')
  mySection.children[0].classList.remove('titleInactive')
  mySection.children[0].classList.add('titleActive')
}

//——-DEBUG

// document.addEventListener('mouseover', (e) => {
//   console.log(e.target.style.opacity)
// })

// mySection.addEventListener('click', () => {
//   mySection.classList.add('inactive')
//   document.querySelector(`#sub-${sections[i]}`).classList.add('inactive')
// })

//————————————————————————

/*
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
*/
