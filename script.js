let memberButton = document.getElementById(`member`)
let information = document.getElementById(`information`)
let events = document.getElementById(`events`)
let eventsContainer = document.getElementById(`eventsContainer`)
let currentEvents = [{what: `Computer Science Carnival`, where: `Olathe South Commons`, when: `February 1st, 8:30 AM to 1:00 PM`}]

function member() {
    information.style.display = `inline-flex`
    events.style.display = `unset`
    eventsContainer.innerHTML = ``
    for (let currentEvent of currentEvents) {
        let eventName = document.createElement(`strong`)
        eventName.style.fontSize = `min(3vw, 4vh)`
        eventName.textContent = currentEvent.what
        let eventLocation = document.createElement(`label`)
        eventLocation.style.fontSize = `min(3vw, 4vh)`
        eventLocation.textContent = currentEvent.where
        let eventTime = document.createElement(`label`)
        eventTime.style.fontSize = `min(3vw, 4vh)`
        eventTime.textContent = currentEvent.when
        eventsContainer.append(eventName, document.createElement(`br`), eventLocation, document.createElement(`br`), eventTime)
    }
}

function nonMember() {
    information.style.display = `inline-flex`
    events.style.display = `none`
}