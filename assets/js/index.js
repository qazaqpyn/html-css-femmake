window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > window.screen.height * 50 / 100 || document.documentElement.scrollTop > window.screen.height * 50 / 100) {
        document.getElementById("navbar").classList.remove('bg-transparent')
        document.getElementById("navbar").classList.remove('position-absolute')
        document.getElementById("navbar").classList.add('fixed-top')
        document.getElementById("navbar").classList.add('bg-white')
        document.getElementById("navbar").classList.add('shadow-sm')
    } else {
        document.getElementById("navbar").classList.add('bg-transparent')
        document.getElementById("navbar").classList.add('position-absolute')
        document.getElementById("navbar").classList.remove('fixed-top')
        document.getElementById("navbar").classList.remove('bg-white')
        document.getElementById("navbar").classList.remove('shadow-sm')
    }
}