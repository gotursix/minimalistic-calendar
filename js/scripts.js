let today = newDate()
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

function showCalendar() {
    let firstDay = new Date(year, month).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById('calendar-body');
}