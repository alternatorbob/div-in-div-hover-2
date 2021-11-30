let currentBox
let boxes = document.getElementsByClassName('box')
let currentTab = -1

let titles = [
  'Mycelium compared to concrete',
  'Durability and Beauty',
  'Title number three',
  'And one last one',
]
const arr = Array.from(document.getElementsByClassName('subContainer'))
addNumbers()
// addTitles()
const arr2 = Array.from(document.getElementsByClassName('title'))
const arr3 = Array.from(document.getElementsByClassName('box'))

for (let i = 0; i < arr.length; i++) {
  // console.log(arr)
  arr[i].addEventListener('mouseover', () => {
    arr[i].style.flex = '50'
    currentTab = i
    // removeTitles(i)
  })
}

for (let i = 0; i < arr.length; i++) {
  arr[i].addEventListener('mouseout', () => {
    arr[i].style.flex = '1'
    // removeAllTitles()
    // addTitles()
    // hasTitles()
    currentTab = -1
  })
  // arr[i] = contentBackup[i]
}
for (let i = 0; i < arr3.length; i++) {
  arr3[i].addEventListener('mouseover', () => {
    arr3[i].style.flex = '30'
    // currentTab = i
    // removeTitles(i)
  })
}

for (let i = 0; i < arr3.length; i++) {
  arr3[i].addEventListener('mouseout', () => {
    arr3[i].style.flex = '1'
    // currentTab = i
    // removeTitles(i)
  })
}

document.getElementById('menu').addEventListener('mouseover', () => {
  console.log('MENUUUUUU')
  let myDiv = document.getElementsByClassName('menu-content')[0]
  console.log(myDiv)

  myDiv.classList.remove('hidden')
  myDiv.style.visibility = 'visible'
  myDiv.style.transform = 'translate3d(0, 0, 0);'
})

function addNumbers() {
  for (let i = 0; i < arr.length; i++) {
    const myDiv = document.createElement('div')
    myDiv.classList.add('number')
    myDiv.innerText = i + 1
    arr[i].prepend(myDiv)
  }
}

function addTitles() {
  for (let i = 0; i < arr.length; i++) {
    const myDiv = document.createElement('div')
    myDiv.id = `section-${i}`
    myDiv.classList.add('title')
    myDiv.innerText = titles[i]
    arr[i].append(myDiv)
    // console.log(arr[i].childNodes)
    // console.log(arr[i].parentElement)
    if (arr[i].innerHTML.includes('section')) arr[i].append(myDiv)
    // console.log(arr[i].innerHTML)
    // console.log(arr[i].innerHTML.includes('section'))
    // if(arr[i].innerHTML.contains('class="title"')) {
    // console.log('has title')
  }
}

function hasTitles() {
  arr.forEach((e) => {
    // console.log(e.parentElement.childNodes)
    // if (e.parentElement.childNodes.classList.contains('title'))
    //   console.log('has titles')
  })
}

function removeTitles(i) {
  for (let j = 0; j < arr2.length; j++) {
    if (j !== i) {
      arr2[j].innerText = ''
    }
  }
}
function removeAllTitles(i) {
  for (let j = 0; j < arr2.length; j++) {
    arr2[j].innerText = ''
  }
}
