let information = document.getElementById(`information`)
let eventsContainer = document.getElementById(`eventsContainer`)
let noEvents = document.getElementById(`noEvents`)
let moreInformation = document.getElementById(`moreInformation`)
let eligibilityText = document.getElementById(`eligibilityText`)
let currentEvents = [{what: `8th Grade Activity Fair`, where: `Olathe South Aux Gym`, when: `10:15 AM - 11:30 AM, March 3, 2026`}]

function member() {
    information.style.display = `flex`
    information.style.justifyContent = `center`
    moreInformation.style.paddingLeft = `min(3.75vw, 5vh)`
    scrollTo(0, document.body.scrollHeight / 3)
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
        eventsContainer.append(eventName, document.createElement(`br`), eventLocation, document.createElement(`br`), eventTime)
    }
}

function nonMember() {
    information.style.display = `flex`
    information.style.justifyContent = `center`
    moreInformation.style.paddingLeft = ``
    scrollTo(0, document.body.scrollHeight / 3)
    document.body.querySelectorAll(`*`).forEach((elem) => {
        if (elem.className == `member`) {
            elem.style.display = `none`
        } if (elem.className == `nonmember`) elem.style.display = `unset`
    }); eligibilityText.textContent = eligibilityText.textContent.replaceAll(`You`, `Members`)
}
