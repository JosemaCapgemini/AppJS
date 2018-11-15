function changeUserName() {
    document.getElementById("userName").innerHTML = "User"
}

function selectTag (tag) {

    if (tag == 'tasks') {
        document.getElementById("tasksId").style.backgroundColor = "000000"
        document.getElementById("contactId").style.backgroundColor = "404040"
    }
    else if (tag == 'contact') {
        document.getElementById("contactId").style.background = "000000"
        document.getElementById("tasksId").style.backgroundColor = "404040"
    }
}
window.onload = function() {
    document.getElementById("tasksId").onclick = function fun() {
        selectTag('tasks');
    }

    document.getElementById("contactId").onclick = function func() {
        selectTag('contact');
    }
}

changeUserName()


