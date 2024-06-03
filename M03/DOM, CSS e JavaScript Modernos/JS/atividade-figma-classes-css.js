function rosePallette() {
    document.documentElement.style.setProperty('--primary-color', '#8C317E')
    document.documentElement.style.setProperty('--secondary-color', '#ECCAE7')
    document.documentElement.style.setProperty('--color-accent', '#AE3D9D')
    document.documentElement.style.setProperty('--bg-color', '#F0D7D7')
    document.documentElement.style.setProperty('--txt-color', '#0F050E')
}

function purplePallette() {
    document.documentElement.style.setProperty('--primary-color', '#292E7F')
    document.documentElement.style.setProperty('--secondary-color', '#EBE9C1')
    document.documentElement.style.setProperty('--color-accent', '#373DA9')
    document.documentElement.style.setProperty('--bg-color', '#F5F4E0')
    document.documentElement.style.setProperty('--txt-color', '#1B1A09')
}

function redPallette() {
    document.documentElement.style.setProperty('--primary-color', '#682C3F')
    document.documentElement.style.setProperty('--secondary-color', '#E0D3B8')
    document.documentElement.style.setProperty('--color-accent', '#8F3D57')
    document.documentElement.style.setProperty('--bg-color', '#DBF0E9')
    document.documentElement.style.setProperty('--txt-color', '#0B1914')
}

function greenPallette() {
    document.documentElement.style.setProperty('--primary-color', '#39463D')
    document.documentElement.style.setProperty('--secondary-color', '#CFD8D2')
    document.documentElement.style.setProperty('--color-accent', '#63796A')
    document.documentElement.style.setProperty('--bg-color', '#E9EDEA')
    document.documentElement.style.setProperty('--txt-color', '#090B0A')
}

const palletteArray = [
    rosePallette, 
    purplePallette, 
    redPallette, 
    greenPallette
]

const palletteButton = document.getElementById('change-pallette')
let palletteIndex = 0

function applyPallette() {
    palletteArray[palletteIndex]()
}

palletteButton.addEventListener('click', function(event) {
    event.preventDefault()

    palletteIndex = (palletteIndex + 1) % palletteArray.length
    applyPallette()

    event.stopPropagation()
})