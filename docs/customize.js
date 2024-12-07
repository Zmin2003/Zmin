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
                --bg-color: #ffffff; /* 纯白色背景 */
                --text-color: #24292f; /* 深灰色文字 */
                --hover-bg-color: #f6f8fa; /* 悬停背景色 */
                --hover-text-color: #0366d6; /* 悬停文字色 */
                --shadow-color: rgba(0,0,0,0.1); /* 阴影色 */
                --link-color: #0366d6; /* 链接色 */
                --border-color: #e1e4e8; /* 边框色 */
                --title-color: #24292f; /* 标题色 */
                --article-bg-color: #ffffff; /* 文章背景色 */
                --label-bg-color: #f1f8ff; /* 标签背景色 */
                --label-text-color: #0366d6; /* 标签文字色 */
            }

            body {
                background-color: var(--bg-color);
                color: var(--text-color);
                transition: background-color 0.3s ease, color 0.3s ease;
                opacity: 0;
                animation: fadeIn 0.5s ease-out forwards;
                margin: 0;
                padding: 0;
                font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            }

            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }

            #header {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 50px 0;
            }

            .brand-wrapper {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: 50px;
            }

            .website-icon {
                display: none; /* 移除网站图标 */
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

            .postTitle {
                font-size: 36px;
                font-weight: bold;
                margin-bottom: 30px;
            }

            .article-container {
                max-width: 800px;
                margin: 50px auto;
                padding: 30px;
                box-shadow: 0 4px 12px var(--shadow-color);
                transition: box-shadow 0.3s ease, transform 0.3s ease;
            }

            .article-container:hover {
                box-shadow: 0 6px 15px var(--shadow-color);
                transform: translateY(-5px);
            }

            .SideNav.border {
                border: 1px solid var(--border-color) !important;
                border-radius: 6px !important;
                overflow: hidden;
                transition: all 0.3s ease;
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
                border-top: 1px solid var(--border-color);
                display: flex;
                justify-content: space-between;
                padding: 3px 10px;
                background-color: var(--article-bg-color);
            }

            .labelLeft {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
            }
            .labelRight {
                display: flex !important;
                flex-wrap: wrap;
                align-items: center;
                flex-direction: row-reverse;
            }
            .labelLeft .Label, .labelRight .Label {
                margin-right: 5px;
                margin-bottom: 0px;
                padding: 0px 5px;
                border-radius: 2em;
                font-size: 10px;
                font-weight: 500;
                background-color: var(--label-bg-color);
                color: #ffffff;
                transition: all 0.3s ease;
            }

            .labelLeft .Label:hover, .labelRight .Label:hover {
                transform: translateY(-1px);
                box-shadow: 0 2px 4px var(--shadow-color);
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

            .post-content img,
            .cnblogs_post_body img,
            #postBody img {
                display: block;
                margin: 20px auto;
                max-width: 100%;
                border: 1px solid var(--border-color);
                border-radius: 8px;
                box-shadow: 0 4px 10px var(--shadow-color);
                transition: all 0.3s ease;
            }

            .post-content img:hover,
            .cnblogs_post_body img:hover,
            #postBody img:hover {
                transform: scale(1.02);
                box-shadow: 0 6px 15px var(--shadow-color);
            }

            @media (max-width: 768px) {
                .blogTitle, .labelRight, .site-name {
                    font-size: 24px;
                }

                .listTitle {
                    font-size: 17px;
                    line-height: 2.4;
                }

                .labelContainer {
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                }

                .labelLeft, .labelRight {
                    flex: 1 1 auto;
                    margin: -1px 0;
                }

                .d-flex.flex-items-center {
                    font-size: 1.1em;
                }

                .d-flex.flex-items-center .octicon {
                    width: 10px;
                    height: 20px;
                }
                .LabelTime {
                    display: flex !important;
                    flex-direction: row-reverse;
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
                img.style.transform = 'scale(1.02)';
                img.style.boxShadow = '0 6px 15px var(--shadow-color)';
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

        // 添加回到顶部按钮
        const backToTopBtn = document.createElement('a');
        backToTopBtn.href = '#header';
        backToTopBtn.textContent = '回到顶部';
        backToTopBtn.style.position = 'fixed';
        backToTopBtn.style.bottom = '20px';
        backToTopBtn.style.right = '20px';
        backToTopBtn.style.display = 'none';
        backToTopBtn.style.backgroundColor = 'var(--link-color)';
        backToTopBtn.style.color = 'var(--text-color)';
        backToTopBtn.style.padding = '10px 20px';
        backToTopBtn.style.borderRadius = '5px';

        document.body.appendChild(backToTopBtn);

        // 滚动事件监听器
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTopBtn.style.display = 'block';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });
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
