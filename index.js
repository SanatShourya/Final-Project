const icon1 = document.getElementsByClassName('nav__hamburger')[0];
const icon2 = document.getElementsByClassName('nav__cross')[0];
const hiddenDiv = document.getElementsByClassName('nav__collapsediv')[0];

// Add onclick functionality to the icon1
icon1.onclick = function myFunctionOpen() {
    hiddenDiv.classList.add('show__div'); // Show the div
    icon2.classList.add('show__cross'); // Show the cross
};

// delete onclick functionality to the icon2
icon2.onclick = function myFunctionClose() {
    hiddenDiv.classList.remove('show__div'); // Remove the div
    icon2.classList.remove('show__cross'); // Remove the cross
};