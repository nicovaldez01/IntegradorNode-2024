document.addEventListener('DOMContentLoaded', function () {
    var navbarNavItems = document.getElementById('navbarNavItems');
    var navLinks = navbarNavItems.getElementsByTagName('a');

    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', function () {
        var navbarCollapse = document.getElementById('navbarNav');
        var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: true
        });
      });
    }
  });