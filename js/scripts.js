let today = new Date()
let currentMonth = today.getMonth()
let currentYear = today.getFullYear()

let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
]

let monthAndYear = document.getElementById('monthAndYear')
showCalendar(currentMonth, currentYear)

function getAll() {
    for (var i = 0; i < btns.length; i++) {
        btns[i].onclick = function() {
            modal.style.display = "block";
        }
    }
}

function next() {
    currentYear = currentMonth === 11 ? currentYear + 1 : currentYear
    currentMonth = (currentMonth + 1) % 12
    showCalendar(currentMonth, currentYear)
    getAll();
}

function previous() {
    currentYear = currentMonth === 0 ? currentYear - 1 : currentYear
    currentMonth = currentMonth === 0 ? 11 : currentMonth - 1
    showCalendar(currentMonth, currentYear)
    getAll();

}

function now() {
    currentMonth = today.getMonth()
    currentYear = today.getFullYear()
    showCalendar(currentMonth, currentYear)
    getAll();

}

function showCalendar(month, year) {
    let firstDay = new Date(year, month).getDay()
    let daysInMonth = 32 - new Date(year, month, 32).getDate()
    let tbl = document.getElementById('calendar-body')

    tbl.innerHTML = ''

    monthAndYear.innerHTML = months[month] + ' ' + year

    let date = 1
    for (let i = 0; i < 6; i++) {
        let row = document.createElement('tr')
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement('td')
                let cellText = document.createTextNode('')
                cell.appendChild(cellText)
                row.appendChild(cell)
            } else if (date > daysInMonth) {
                break
            } else {
                let cell = document.createElement('td')
                let cellText = document.createTextNode(date)
                cell.setAttribute("onclick", "action();");
                cell.setAttribute("class", "myBtn");
                if (
                    date === today.getDate() &&
                    year === today.getFullYear() &&
                    month === today.getMonth()
                ) {
                    cell.classList.add('bg-info')
                } // color today's date
                cell.appendChild(cellText)
                row.appendChild(cell)
                date++
            }
        }
        tbl.appendChild(row)
    }
}



var modal = document.getElementById('myModal');
var btns = document.getElementsByClassName("myBtn");
var span = document.getElementsByClassName("close")[0];
var mydate = document.getElementById("myClickedDate");

for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function() {
        modal.style.display = "block";
    }
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        mydate.innerText = "ceaw";

    }
}