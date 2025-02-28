let memberButton = document.getElementById(`member`)
let information = document.getElementById(`information`)
let events = document.getElementById(`events`)
let eventsContainer = document.getElementById(`eventsContainer`)
let noEvents = document.getElementById(`noEvents`)
let moreInformation = document.getElementById(`moreInformation`)
let eligibilityText = document.getElementById(`eligibilityText`)
let applicationLink = document.getElementById(`applicationLink`)
let currentEvents = [{what: `8th Grade Activity Fair`, where: `Olathe South Aux Gym`, when: `March 4th, 10:10 AM - 12:35 PM<br>Sophia Groth and Miles Knapp`}]

function member() {
    information.style.display = `inline-flex`
    document.body.querySelectorAll(`*`).forEach((elem) => {
        if (elem.className == `member`) {
            elem.style.display = `unset`
        } if (elem.className == `nonmember` || elem.id == noEvents.id) elem.style.display = `none`
    }); eventsContainer.innerHTML = ``
    eligibilityText.textContent = eligibilityText.textContent.replaceAll(`Members`, `You`)
    if (currentEvents.length == 0) noEvents.style.display = `unset`
    for (let currentEvent of currentEvents) {
        let eventName = document.createElement(`strong`)
        eventName.style.fontSize = `min(3vw, 4vh)`
        eventName.innerHTML = currentEvent.what
        let eventLocation = document.createElement(`label`)
        eventLocation.style.fontSize = `min(3vw, 4vh)`
        eventLocation.innerHTML = currentEvent.where
        let eventTime = document.createElement(`label`)
        eventTime.style.fontSize = `min(3vw, 4vh)`
        eventTime.innerHTML = currentEvent.when
        eventsContainer.append(document.createElement(`br`), eventName, document.createElement(`br`), eventLocation, document.createElement(`br`), eventTime)
    }
}

function nonMember() {
    information.style.display = `inline-flex`
    document.body.querySelectorAll(`*`).forEach((elem) => {
        if (elem.className == `member`) {
            elem.style.display = `none`
        } else if (elem.tagName != `SCRIPT` && elem.id != eventsContainer.id) elem.style.display = `unset`
    }); eligibilityText.textContent = eligibilityText.textContent.replaceAll(`You`, `Members`)
}