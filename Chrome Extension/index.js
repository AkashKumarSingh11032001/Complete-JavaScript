
let myLeads = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')
const deleteBtn = document.getElementById('delete-btn')

// saving saved data to locally
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads()
}

// save button functinality
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem('myLeads', JSON.stringify(myLeads)) //feteching data from local strage
    renderLeads()
})

// delete button
deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads = []
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


