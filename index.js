// Write your code here!
const MainRemove = document.querySelector('main#main')
MainRemove.remove()

const newHeader = document.createElement("h1")

newHeader.setAttribute('id','victory')

newHeader.innerHTML="Zohir is the champion"
document.body.append(newHeader)