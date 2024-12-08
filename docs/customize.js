(() => {
    function isDarkMode() {
        return document.documentElement.getAttribute('data-color-mode') === 'dark';
    }

    function getWebsiteIcon() {
        const linkTag = document.querySelector('link[rel="shortcut icon"]');
        return linkTag ? linkTag.href : '/avatar.svg';
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
                --article-bg-color: ${isDarkMode() ? '#161b22' : '#ffffff'};
                --label-bg-color: ${isDarkMode() ? '#30363d' : '#f1f8ff'};
                --label-text-color: ${isDarkMode() ? '#ffffff' : '#0366d6'};
                --border-glow: ${isDarkMode() ? '0 0 15px rgba(88, 166, 255, 0.15)' : '0 0 15px rgba(3, 102, 214, 0.15)'};
            }

            @keyframes fadeIn {
                from { 
                    opacity: 0;
                    transform: translateY(10px);
                }
                to { 
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            @keyframes borderPulse {
                0% { border-color: var(--border-color); }
                50% { border-color: var(--link-color); }
                100% { border-color: var(--border-color); }
            }

            body {
                background-color: var(--bg-color);
                color: var(--text-color);
                transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                opacity: 0;
                animation: fadeIn 0.8s ease-out forwards;
            }

            .SideNav.border {
                border: 1px solid var(--border-color) !important;
                border-radius: 12px !important;
                overflow: hidden;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                backdrop-filter: blur(8px);
            }

            .SideNav.border:hover {
                border-color: var(--link-color) !important;
                box-shadow: var(--border-glow);
                transform: translateY(-3px);
            }

            .article-container {
                background-color: var(--article-bg-color);
                border: 1px solid var(--border-color);
                border-radius: 12px;
                margin-bottom: 20px;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                overflow: hidden;
                position: relative;
            }

            .article-container::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                border-radius: 12px;
                border: 2px solid transparent;
                transition: all 0.3s ease;
            }

            .article-container:hover {
                box-shadow: 0 8px 24px var(--shadow-color);
                transform: translateY(-4px);
            }

            .article-container:hover::before {
                border-color: var(--link-color);
                animation: borderPulse 2s infinite;
            }

            .SideNav-item {
                border: none !important;
                margin-bottom: 0 !important;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                padding: 16px 20px;
                background-color: transparent;
                position: relative;
                overflow: hidden;
            }

            .SideNav-item::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 2px;
                background-color: var(--link-color);
                transform: scaleX(0);
                transition: transform 0.3s ease;
                transform-origin: right;
            }

            .SideNav-item:hover::after {
                transform: scaleX(1);
                transform-origin: left;
            }

            .labelContainer {
                border-top: 2px solid var(--border-color);
                background-color: var(--article-bg-color);
                padding: 8px 16px;
                transition: all 0.3s ease;
            }

            .Label {
                padding: 4px 12px !important;
                border-radius: 20px !important;
                font-size: 11px !important;
                font-weight: 600 !important;
                letter-spacing: 0.3px;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
                border: 1px solid transparent;
            }

            .Label:hover {
                transform: translateY(-2px) scale(1.05);
                box-shadow: 0 4px 8px var(--shadow-color);
                border-color: var(--link-color);
            }

            .website-icon {
                width: 100px;
                height: 100px;
                margin-bottom: 16px;
                transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                border-radius: 50%;
                box-shadow: 0 4px 12px var(--shadow-color);
            }

            .website-icon:hover {
                transform: scale(1.1) rotate(5deg);
                box-shadow: 0 8px 24px var(--shadow-color);
            }

            .post-content img,
            .cnblogs_post_body img,
            #postBody img {
                display: block;
                margin: 24px auto;
                max-width: 100%;
                border: 2px solid var(--border-color);
                border-radius: 16px;
                box-shadow: 0 6px 16px var(--shadow-color);
                transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            }

            .post-content img:hover,
            .cnblogs_post_body img:hover,
            #postBody img:hover {
                transform: scale(1.03);
                box-shadow: 0 12px 32px var(--shadow-color);
                border-color: var(--link-color);
            }

            @media (max-width: 768px) {
                .article-container {
                    margin-bottom: 16px;
                }

                .Label {
                    padding: 3px 10px !important;
                    font-size: 10px !important;
                }

                .website-icon {
                    width: 80px;
                    height: 80px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    function adjustLabels() {
        const sideNavItems = document.querySelectorAll('.SideNav-item');
        sideNavItems.forEach((item, index) => {
            const labels = item.querySelectorAll('.Label.LabelName');
            const time = item.querySelector('.Label.LabelTime');
            
            const articleContainer = document.createElement('div');
            articleContainer.className = 'article-container';
            articleContainer.style.animationDelay = `${index * 0.1}s`;
            
            const labelContainer = document.createElement('div');
            labelContainer.className = 'labelContainer';
            
            const labelLeft = document.createElement('div');
            labelLeft.className = 'labelLeft';
            const labelRight = document.createElement('div');
            labelRight.className = 'labelRight';
            
            labels.forEach(label => labelLeft.appendChild(label.cloneNode(true)));
            if (time) labelRight.appendChild(time.cloneNode(true));
            
            labelContainer.appendChild(labelLeft);
            labelContainer.appendChild(labelRight);
            
            item.parentNode.insertBefore(articleContainer, item);
            articleContainer.appendChild(item);
            articleContainer.appendChild(labelContainer);
            
            labels.forEach(label => label.remove());
            if (time) time.remove();
        });
    }

    function addBrandToPostTitle() {
        const header = document.querySelector('#header');
        if (!header) return;

        const brandWrapper = document.createElement('div');
        brandWrapper.className = 'brand-wrapper';

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
        adjustLabels();
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
