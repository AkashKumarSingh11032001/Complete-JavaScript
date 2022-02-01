
let myLeads = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')
const deleteBtn = document.getElementById('delete-btn')
const tabBtn = document.getElementById('tab-btn')

// saving saved data to locally
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// save button functinality
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem('myLeads', JSON.stringify(myLeads)) //feteching data from local strage
    render(myLeads)
})

// delete button
deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

// save tab button functinality
const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
] 
tabBtn.addEventListener("click",function(){
    // grab url from current tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let activeTab = tabs[0]
        let activeTabId = activeTab.id // or do whatever you need
    })
    myLeads.push(tabs[0].url)
    localStorage.setItem('myLeads', JSON.stringify(myLeads)) //feteching data from local strage
    render(myLeads)
})


// show element on screan every time when click on save button
function render(leads){

    let listItemEl = ""

    // render the list content on screan
    for(let i = 0; i < leads.length; i++){
        // listItemEl += "<li><a target='_blank' href=' " + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        // template string
        listItemEl += `<li>
            <a target='_blank' href=' ${leads[i]}'>
            ${leads[i]}
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


