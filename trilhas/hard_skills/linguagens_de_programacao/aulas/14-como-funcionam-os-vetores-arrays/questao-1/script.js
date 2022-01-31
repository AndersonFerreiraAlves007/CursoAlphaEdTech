let inputValues = []
let inputValuesSort = []

function makeArrayText(array) {
  let content = ''
  for(let i = 0; i < array.length; i+=1) 
    content =  i === (array.length - 1) ? `${content}${array[i]}` : `${content}${array[i]}, `;
  content = `[ ${content} ]`
  return content
}

const drawArrayOriginal = () =>
  document.getElementById('text-array-original').innerHTML = makeArrayText(inputValues)

const drawArraySorted = () =>
  document.getElementById('text-array-sort').innerHTML = makeArrayText(inputValuesSort)

function setArrayInputValues() {
  const inputs = document.querySelectorAll('input')
  const inputValuesLocal = []
  for(let i = 0; i < inputs.length; i+=1) {
    inputValuesLocal.push(parseInt(inputs[i].value, 10))
  }
  inputValues = inputValuesLocal
  inputValuesSort = []
  drawArrayOriginal()
  drawArraySorted()
}

function sortAsc() {
  inputValuesSort = inputValues.slice()
  for(let i = inputValuesSort.length - 1; i >= 1; i -=1) {
    for(let j = 0; j < i; j+=1) {
      if(inputValuesSort[j] > inputValuesSort[j + 1]) {
        const aux = inputValuesSort[j]
        inputValuesSort[j] = inputValuesSort[j + 1]
        inputValuesSort[j + 1] = aux
      }
    }
  }
  drawArrayOriginal()
  drawArraySorted()
}

function sortDesc() {
  inputValuesSort = inputValues.slice()
  for(let i = inputValuesSort.length - 1; i >= 1; i -=1) {
    for(let j = 0; j < i; j+=1) {
      if(inputValuesSort[j] < inputValuesSort[j + 1]) {
        const aux = inputValuesSort[j]
        inputValuesSort[j] = inputValuesSort[j + 1]
        inputValuesSort[j + 1] = aux
      }
    }
  }
  drawArrayOriginal()
  drawArraySorted()
}

document.getElementById('persist-btn').addEventListener('click', () => {
  setArrayInputValues()
})

document.getElementById('sort-asc-btn').addEventListener('click', () => {
  sortAsc()
})

document.getElementById('sort-desc-btn').addEventListener('click', () => {
  sortDesc()
})

drawArrayOriginal()
drawArraySorted()
