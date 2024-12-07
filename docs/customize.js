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
            /* 全局变量 */
            :root {
                --bg-color: #ffffff;
                --text-color: #24292f;
                --hover-bg-color: #f6f8fa;
                --hover-text-color: #0366d6;
                --shadow-color: rgba(0,0,0,0.1);
                --link-color: #0366d6;
                --border-color: #e1e4e8;
                --title-color: #24292f;
                --article-bg-color: #ffffff;
                --label-bg-color: #f1f8ff;
                --label-text-color: #0366d6;
            }

            /* 页面过渡效果 */
            body {
                font-size: 16px;
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

            /* 侧边导航栏 */
            .SideNav.border {
                background-color: transparent !important;
                border: 1px solid var(--border-color) !important;
                border-radius: 6px !important;
                overflow: hidden;
                transition: all 0.3s ease;
            }

            /* 文章容器 */
            .article-container {
                background-color: transparent;
                border: 1px solid var(--border-color);
                border-radius: 6px;
                margin-bottom: 16px;
                transition: all 0.3s ease;
                overflow: hidden;
            }

            /* 其他样式调整 */

            /* 头部布局 */
            #header {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 20px;
                padding: 20px 0;
            }

            /* 标题样式 */
            .postTitle, .blogTitle {
                font-size: 32px;
                font-weight: 600;
                margin-top: 16px;
                transition: all 0.3s ease;
                text-align: center;
                color: var(--title-color);
            }

            /* 标签样式 */
            .labelContainer {
                border-top: 1px solid var(--border-color);
                display: flex;
                justify-content: space-between;
                padding: 3px 10px;
                background-color: var(--article-bg-color);
            }

            /* 内容区域样式 */
            #postBody {
                color: var(--text-color);
            }

            /* 图片样式 */
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

            /* 媒体查询 */
            @media (max-width: 768px) {
                body {
                    font-size: 14px;
                }
                .site-name {
                    font-size: 24px;
                }
                .blogTitle {
                    font-size: 24px;
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
                .listTitle {
                    font-size: 17px;
                    line-height: 2.4;
                }
                .d-flex.flex-items-center {
                    font-size: 1.1em;
                }
                .d-flex.flex-items-center .octicon {
                    width: 10px;
                    height: 20px;
                }
            }

            @media (max-width: 480px) {
                body {
                    font-size: 12px;
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
