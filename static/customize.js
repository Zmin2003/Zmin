(function() {
    function isDarkMode() {
        return document.documentElement.getAttribute('data-color-mode') === 'dark';
    }

    function getWebsiteIcon() {
        return 'https://zmin2003.github.io/Zmin/avatar.svg';
    }

    function getWebsiteName() {
        const footerLink = document.querySelector('#footer1 a');
        return footerLink ? footerLink.textContent : document.title;
    }
  })
