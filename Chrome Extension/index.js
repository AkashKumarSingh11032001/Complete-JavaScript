
let myLeads = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')

// save button functinality
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ''
})



let listItemEl = ""

// render the list content on screan
for(let i = 0; i < myLeads.length; i++){
    listItemEl += "<li>" + myLeads[i] + "</li>"
    // OR
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
}
ulEl.innerHTML = listItemEl
