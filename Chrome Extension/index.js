
let myLeads = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')

// save button functinality
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

// show element on screan every time when click on save button
function renderLeads(){

    let listItemEl = ""

    // render the list content on screan
    for(let i = 0; i < myLeads.length; i++){
        // listItemEl += "<li><a target='_blank' href=' " + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        // template string
        listItemEl += `<li>
            <a target='_blank' href=' ${myLeads[i]}'>
            ${myLeads[i]}
            </a>
        </li>
        `
        // OR
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItemEl

}


