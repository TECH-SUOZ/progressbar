const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'SULTONS SkillS Progress BAR'
let idx = 1
let speed = 800 / 3 

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}