

//25-2 Traversing dom - getElementsByTagName _________________________/
const send = document.getElementsByTagName("h1")
for(const num of send){
      console.log(num.innerText)
}


const liCollection = document.getElementsByTagName("li");

for(const li of liCollection){
      console.log(li)
}

//25-3 Traversing dom - getElementByClass VS getElementById_________________________/

