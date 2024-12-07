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

    function addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            :root {
                --bg-color: #f5f5f5; /* 更亮的背景 */
                --text-color: #333;  /* 深色文字 */
                --hover-bg-color: #e0e0e0;
                --hover-text-color: #000;
                --shadow-color: rgba(0,0,0,0.2);
                --link-color: #007bff;
                --border-color: #ddd;
                --title-color: #222;
                --article-bg-color: #fff;
                --label-bg-color: #007bff;
                --label-text-color: #fff;
            }

            body {
                font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
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
                gap: 10px;
            }

            .SideNav.border {
                display: flex;
                flex-direction: column;
                border: 1px solid var(--border-color);
                border-radius: 6px;
                overflow: hidden;
                transition: all 0.3s ease;
            }

            .article-container {
                background-color: var(--article-bg-color);
                border: 1px solid var(--border-color);
                border-radius: 6px;
                margin-bottom: 16px;
                overflow: hidden;
            }

            .article-container:hover {
                box-shadow: 0 4px 12px var(--shadow-color);
                transform: translateY(-2px);
            }

            .SideNav-item {
                border: none !important;
                margin-bottom: 0 !important;
                transition: all 0.3s ease;
                padding: 12px 16px;
                background-color: transparent;
            }

            .SideNav-item:hover {
                background-color: var(--hover-bg-color);
            }

            .listTitle {
                font-size: 18px;
                line-height: 1.5;
                font-weight: 600;
                transition: all 0.3s ease;
                display: inline-block;
                color: var(--title-color);
            }

            .listTitle:hover {
                color: var(--hover-text-color);
                text-decoration: none;
                transform: translateX(5px);
            }

            .labelContainer {
                display: flex;
                justify-content: space-between;
                padding: 3px 10px;
            }

            .labelLeft .Label, .labelRight .Label {
                margin-right: 5px;
                padding: 0px 5px;
                border-radius: 2em;
                font-size: 10px;
                font-weight: 500;
                background-color: var(--label-bg-color);
                color: var(--label-text-color);
                transition: transform 0.3s ease;
            }

            .labelLeft .Label:hover, .labelRight .Label:hover {
                transform: translateY(-1px);
                box-shadow: 0 2px 4px var(--shadow-color);
            }

            .website-icon {
                width: 50px;
                height: 50px;
                transition: transform 0.3s ease;
            }

            .website-icon:hover {
                transform: scale(1.1);
            }

            .site-name {
                font-size: 24px;
                font-weight: 600;
                color: var(--title-color);
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

            #postBody {
                color: var(--text-color);
            }

            #postBody h1, #postBody h2, #postBody h3, #postBody h4, #postBody h5, #postBody h6 {
                color: var(--title-color);
            }

            #postBody a {
                color: var(--link-color);
                transition: all 0.3s ease;
            }

            #postBody a:hover {
                text-decoration: underline;
            }

            #postBody pre {
                background-color: var(--hover-bg-color);
                border: 1px solid var(--border-color);
                border-radius: 6px;
                padding: 16px;
                overflow-x: auto;
            }

            #postBody code {
                background-color: var(--hover-bg-color);
                color: var(--text-color);
                padding: 2px 4px;
                border-radius: 3px;
            }

            #postBody blockquote {
                border-left: 4px solid var(--border-color);
                color: var(--text-color);
                opacity: 0.8;
                padding-left: 16px;
                margin-left: 0;
            }

            .post-content img, .cnblogs_post_body img, #postBody img {
                max-width: 100%;
                border: 1px solid var(--border-color);
                border-radius: 8px;
                box-shadow: 0 4px 10px var(--shadow-color);
                transition: transform 0.3s ease;
            }

            .post-content img:hover, .cnblogs_post_body img:hover, #postBody img:hover {
                transform: scale(1.05);
                box-shadow: 0 6px 12px var(--shadow-color);
            }

            @media (max-width: 768px) {
                .brand-wrapper {
                    flex-direction: column;
                    align-items: center;
                }

                .site-name {
                    font-size: 20px;
                }

                .labelContainer {
                    flex-direction: column;
                }

                .labelLeft, .labelRight {
                    width: 100%;
                    margin-bottom: 5px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    function adjustLabels() {
        const sideNavItems = document.querySelectorAll('.SideNav-item');
        sideNavItems.forEach(item => {
            const labels = item.querySelectorAll('.Label.LabelName');
            const time = item.querySelector('.Label.LabelTime');
            
            const articleContainer = document.createElement('div');
            articleContainer.className = 'article-container';
            
            const labelContainer = document.createElement('div');
            labelContainer.className = 'labelContainer fade-in';
            
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

            item.style.padding = '0';
        });
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

    function styleImages() {
        const images = document.querySelectorAll('.post-content img, .cnblogs_post_body img, #postBody img');
        images.forEach(img => {
            img.style.display = 'block';
            img.style.margin = '20px auto';
            img.style.maxWidth = '100%';
            img.style.border = '1px solid var(--border-color)';
            img.style.borderRadius = '8px';
            img.style.boxShadow = '0 4px 10px var(--shadow-color)';
            img.style.transition = 'all 0.3s ease';
            
            img.addEventListener('mouseover', () => {
                img.style.transform = 'scale(1.05)';
                img.style.boxShadow = '0 6px 12px var(--shadow-color)';
            });
            img.addEventListener('mouseout', () => {
                img.style.transform = 'scale(1)';
                img.style.boxShadow = '0 4px 10px var(--shadow-color)';
            });
        });
    }

    function init() {
        document.body.style.opacity = '0';
        addStyles();
        adjustLabels();
        addBrandToPostTitle();
        styleImages();

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
