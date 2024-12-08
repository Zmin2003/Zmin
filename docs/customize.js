(function() {
    function getWebsiteIcon() {
        const linkTag = document.querySelector('link[rel="shortcut icon"]');
        return linkTag ? linkTag.href : 'https://zmin2003.github.io/Zmin/avatar.svg';
    }

    function getWebsiteName() {
        const footerLink = document.querySelector('#footer1 a');
        return footerLink ? footerLink.textContent : document.title;
    }

    function addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            :root {
                --bg-color: ${isDarkMode() ? '#0d1117' : '#ffffff'};
                --text-color: ${isDarkMode() ? '#c9d1d9' : '#24292f'};
                --hover-bg-color: ${isDarkMode() ? '#21262d' : '#f6f8fa'};
                --hover-text-color: ${isDarkMode() ? '#ffffff' : '#0366d6'};
                --shadow-color: ${isDarkMode() ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'};
                --link-color: ${isDarkMode() ? '#58a6ff' : '#0366d6'};
                --border-color: ${isDarkMode() ? '#30363d' : '#e1e4e8'};
                --title-color: ${isDarkMode() ? '#c9d1d9' : '#24292f'};
            }

            body {
                background-color: var(--bg-color);
                color: var(--text-color);
                transition: background-color 0.3s ease, color 0.3s ease;
                opacity: 0;
                animation: fadeIn 0.5s ease-out forwards;
            }

            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }

            #header {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 20px;
                padding: 20px 0;
            }

            .brand-wrapper {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 15px;
                flex-direction: column;
            }

            .website-icon {
                width: 90px;
                height: 90px;
                margin-right: 0px;
                transition: transform 0.3s ease;
            }

            .website-icon:hover {
                transform: scale(1.1);
            }

            .site-name {
                font-size: 28px;
                font-weight: 700;
                color: var(--title-color);
                margin: 0;
                transition: color 0.3s ease;
            }

            .site-name:hover {
                color: var(--hover-text-color);
            }

            .blogTitle, .postTitle {
                font-size: 32px;
                font-weight: 600;
                margin-top: 16px;
                transition: all 0.3s ease;
                text-align: center;
                color: var(--title-color);
            }

            .blogTitle:hover {
                color: var(--hover-text-color);
            }

            @media (max-width: 768px) {
                .blogTitle, .site-name {
                    font-size: 24px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    function addBrandToPostTitle() {
        const header = document.querySelector('#header');
        if (!header) return;

        const brandWrapper = document.createElement('div');
        brandWrapper.className = 'brand-wrapper fade-in';

        const favicon = document.createElement('img');
        favicon.src = getWebsiteIcon();
        favicon.alt = 'Website Icon';
        favicon.className = 'website-icon';

        const siteName = document.createElement('h1');
        siteName.textContent = getWebsiteName();
        siteName.className = 'site-name';

        brandWrapper.appendChild(favicon);
        brandWrapper.appendChild(siteName);

        const postTitle = header.querySelector('.postTitle');
        const titleRight = header.querySelector('.title-right');

        header.innerHTML = '';
        header.appendChild(brandWrapper);
        if (postTitle) header.appendChild(postTitle);
        if (titleRight) header.appendChild(titleRight);
    }

    function init() {
        document.body.style.opacity = '0';
        addStyles();
        addBrandToPostTitle();

        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 0);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'data-color-mode') {
                addStyles();
            }
        });
    });

    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-color-mode']
    });
})();
