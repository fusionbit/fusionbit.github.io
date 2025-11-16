$(document).ready(function () {
    $('.carousel').carousel();

    var number = Math.floor((Math.random() * 10) + 1);
    var quotes;

    switch (number) {
        case 1:
            quotes = "\"Great things in Business are never done by one person. They're done by a Team of people.\"";
            break;
        case 2:
            quotes = "\"You don't get what you WISH for you get what you WORK for.\"";
            break;
        case 3:
            quotes = "\"Never stop doing your best just because someone doesn't give you credit.\"";
            break;
        case 4:
            quotes = "\"When you feel like quitting, think about why you started.\"";
            break;
        case 5:
            quotes = "\"One day or Day one. You decide.\"";
            break;
        case 6:
            quotes = "\"You live most of your life inside of your head. Make sure it's a nice place to be.\"";
            break;
        case 7:
            quotes = "\"Work hard, play hard.\"";
            break;
        case 8:
            quotes = "\"Old ways won't open new doors.\"";
            break;
        case 9:
            quotes = "\"Being positive in negative situations is not naive. It's leadership.\"";
            break;
        case 10:
            quotes = "\"Your energy introduces you before you even speak.\"";
            break;
    }

    $("#quotes").html(quotes);

    // Navigation color swap
    var siteNav = document.getElementById('site-nav');
    if (siteNav) {
        var scrollThreshold = 40;

        function updateNavState() {
            if (window.scrollY > scrollThreshold) {
                siteNav.classList.add('is-scrolled');
            } else {
                siteNav.classList.remove('is-scrolled');
            }
        }

        updateNavState();
        window.addEventListener('scroll', updateNavState, { passive: true });
    }
});