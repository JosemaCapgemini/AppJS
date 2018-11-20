function selectTag(tag) {
    if (tag == 'tasks') {
        document.getElementById("tasksId").style.backgroundColor = "black"
        document.getElementById("contactId").style.backgroundColor = "transparent"
        appendHTMLTasks()
    }
    else if (tag == 'contact') {
        document.getElementById("contactId").style.background = "black"
        document.getElementById("tasksId").style.backgroundColor = "transparent"
        appendHTMLContact()
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

function appendHTMLTasks() {
    document.getElementById("bodyOn").innerHTML = "\
        <button class='button buttonProjects'></button>"
}


function appendHTMLContact() {
    document.getElementById("bodyOn").innerHTML = "\
    <table>\
        <tr>\
            <th>Contact</th>\
            <th>Favorite Color</th>\
        </tr>\
    </table>"
}