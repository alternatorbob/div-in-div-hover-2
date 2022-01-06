const arr = Array.from(document.getElementsByClassName('box'))

for (let i = 0; i < arr.length; i++) {
  // console.log(arr)
  arr[i].addEventListener('mouseover', () => {
    arr[i].style.flex = '50'
  })
}

for (let i = 0; i < arr.length; i++) {
  arr[i].addEventListener('mouseout', () => {
    arr[i].style.flex = '1'
  })
}
