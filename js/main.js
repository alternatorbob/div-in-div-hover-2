let currentBox
let boxes = document.getElementsByClassName('box')
let currentTab = -1

let titles = [
  'Mycelium compared to concrete',
  'Durability and Beauty',
  'Title number three',
  'And one last one',
]
let arr = Array.from(document.getElementsByClassName('subContainer'))
addNumbers()
addTitles()
let arr2 = Array.from(document.getElementsByClassName('title'))

for (let i = 0; i < arr.length; i++) {
  // console.log(arr)
  arr[i].addEventListener('mouseover', () => {
    arr[i].style.flex = '50'
    removeTitles(i)
  })
}

for (let i = 0; i < arr.length; i++) {
  arr[i].addEventListener('mouseout', () => {
    arr[i].style.flex = '1'
    // addTitles()
  })
  // arr[i] = contentBackup[i]
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
  }
}

function hasTitles() {
  for (let i = 0; i < arr.length; i++) {}
}

function removeTitles(i) {
  for (let j = 0; j < arr2.length; j++) {
    if (j !== i) {
      arr2[j].innerText = ''
    }
  }
}