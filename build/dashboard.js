function selectTag(tag) {
    if (tag == 'tasks') {
        document.getElementById("tasksId").style.backgroundColor = "black"
        document.getElementById("contactId").style.backgroundColor = "transparent"
        appendHTML()
    }
    else if (tag == 'contact') {
        document.getElementById("contactId").style.background = "black"
        document.getElementById("tasksId").style.backgroundColor = "transparent"
        appendHTML()
    }
}

window.onload = function () {
    document.getElementById("tasksId").onclick = function taskEventController() {
        selectTag('tasks')
    }

    document.getElementById("contactId").onclick = function ContactEventController() {
        selectTag('contact')
    }
}

function appendHTML() {
    document.getElementById("bodyOn").innerHTML = "\
    <table>\
        <tr>\
            <th>Name</th>\
            <th>Favorite Color</th>\
        </tr>\
    </table>"
}