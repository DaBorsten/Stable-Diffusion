
if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", 'dark-mode')
    document.body.dataset.theme = localStorage.getItem("theme")
}

document.body.dataset.theme = localStorage.getItem("theme")


function copyToClipboard(ID) {
    let textToCopy = document.getElementById(ID).innerText
    navigator.clipboard.writeText(textToCopy)
}

function changeTheme() {
    if (document.body.dataset.theme == 'dark-mode') {
        localStorage.setItem("theme", 'light-mode')

        document.body.dataset.theme = 'light-mode'
        console.log("Theme geändern auf Light Theme")
    } else {
        localStorage.setItem("theme", 'dark-mode')

        document.body.dataset.theme = 'dark-mode'
        console.log("Theme geändern auf Dark Theme")
    }
}