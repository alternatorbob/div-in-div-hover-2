let currentBox
let boxes = document.getElementsByClassName('box')
let currentId

let arr = [].slice.call(boxes)

arr.forEach((element) => {
  element.addEventListener('mouseover', () => {
    currentId = element.getAttribute('id').charAt(3)
    for (let i = 0; i < arr.length; i++) {
      // console.log(arr[i].getAttribute('id'));
      /*
      {
        arr.forEach((e) => {
          if (!arr[i].getAttribute('id').includes(`${i}`))
            e.classList.add('hidden')
        })
      }
      */
      // arr.forEach((e) => {
      //   e.classList.add('hidden')
      // })
      // if (element.getAttribute('id') !== currentId)
      //   element.classList.add('hidden')
    }
  })
})

arr.forEach((element) => {
  element.addEventListener('mouseout', () => {
    currentId = element.getAttribute('id')
    for (let i = 0; i < arr.length; i++) {
      arr.forEach((e) => {
        e.classList.remove('hidden')
      })
      // if (element.getAttribute('id') !== currentId)
      //   element.classList.add('hidden')
    }
  })
})
/*
function hide() {
  let currentId = element.getAttribute('id')

  // for(i=0; i< arr.length<i++)
  // {
  //   if(element.getAttribute("id") !== currentId) element.classList.add("hidden");

  // }
}

function unhide() {
  let currentId = element.getAttribute('id')

  // for(i=0; i< arr.length<i++)
  // {
  //   if(element.getAttribute("id") !== currentId) element.classList.remove("hidden");

  // }
}
*/
