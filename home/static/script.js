window.onload = function() {
    document.getElementById('hamburger-icon').addEventListener('click', function() {
        var mobileNav = document.querySelector('.mobile-nav');
        mobileNav.classList.toggle('active');
        console.log("pressed nab toggle")
    });
}

