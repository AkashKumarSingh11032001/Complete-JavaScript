
let myLeads = [a,b,c]
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')

// save button functinality
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ''
})

// render the list content on screan
for(let i = 0; i < myLeads.length; i++){
    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    // OR
    const li = document.createElement("li")
    li.textContent = myLeads[i]
    ulEl.append(li)
}
