(function() {
    // 检测是否为暗黑模式
    function isDarkMode() {
        return document.documentElement.getAttribute('data-color-mode') === 'dark';
    }

    // 获取网站图标
    function getWebsiteIcon() {
        return 'https://zmin2003.github.io/Zmin/avatar.svg';
    }

    // 获取网站名称
    function getWebsiteName() {
        const footerLink = document.querySelector('#footer1 a');
        return footerLink ? footerLink.textContent : document.title;
    }

    // 添加自定义样式
    function addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* 全局样式 */
            :root {
                --bg-color: #ffffff; /* 纯白背景 */
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

            /* 头部样式 */
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

            .website-icon {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                overflow: hidden;
            }

            .site-name {
                font-size: 28px;
                font-weight: 600;
            }

            /* 侧边导航样式 */
            .SideNav.border {
                border: 1px solid var(--border-color);
                border-radius: 6px;
                overflow: hidden;
            }

            .SideNav-item {
                padding: 12px 16px;
                background-color: var(--article-bg-color);
                transition: background-color 0.3s ease;
            }

            .SideNav-item:hover {
                background-color: var(--hover-bg-color);
            }

            .listTitle {
                font-size: 18px;
                font-weight: 600;
                color: var(--title-color);
            }

            .listTitle:hover {
                color: var(--hover-text-color);
                text-decoration: none;
                transform: translateX(5px);
            }

            /* 文章容器样式 */
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

            /* 标签样式 */
            .labelContainer {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 8px 12px;
            }

            .labelLeft, .labelRight {
                display: flex;
                align-items: center;
            }

            .Label {
                background-color: var(--label-bg-color);
                color: var(--label-text-color);
                padding: 4px 8px;
                border-radius: 2em;
                margin-right: 8px;
                font-size: 12px;
                font-weight: 500;
                transition: transform 0.3s ease;
            }

            .Label:hover {
                transform: scale(1.05);
            }

            /* 图片样式 */
            .post-content img, .cnblogs_post_body img, #postBody img {
                max-width: 100%;
                border: 1px solid var(--border-color);
                border-radius: 8px;
                box-shadow: 0 4px 10px var(--shadow-color);
                transition: transform 0.3s ease;
            }

            .post-content img:hover, .cnblogs_post_body img:hover, #postBody img:hover {
                transform: scale(1.02);
                box-shadow: 0 6px 15px var(--shadow-color);
            }

            /* 响应式布局 */
            @media (max-width: 768px) {
                .site-name {
                    font-size: 24px;
                }

                .listTitle {
                    font-size: 16px;
                }

                .labelContainer {
                    flex-direction: column;
                }

                .labelLeft, .labelRight {
                    margin-bottom: 8px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // 调整标签布局
    function adjustLabels() {
        const sideNavItems = document.querySelectorAll('.SideNav-item');
        sideNavItems.forEach(item => {
            const labels = item.querySelectorAll('.Label.LabelName');
            const time = item.querySelector('.Label.LabelTime');

            const articleContainer = document.createElement('div');
            articleContainer.className = 'article-container';

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

            item.style.padding = '0';
        });
    }

    // 添加品牌信息到标题
    function addBrandToPostTitle() {
        const header = document.querySelector('#header');
        if (!header) return;

        const brandWrapper = document.createElement('div');
        brandWrapper.className = 'brand-wrapper';

        const favicon = document.createElement('div');
        favicon.className = 'website-icon';
        const iconImg = document.createElement('img');
        iconImg.src = getWebsiteIcon();
        iconImg.alt = 'Website Icon';
        favicon.appendChild(iconImg);

        const siteName = document.createElement('h1');
        siteName.textContent = getWebsiteName();
        siteName.className = 'site-name';

        brandWrapper.appendChild(favicon);
        brandWrapper.appendChild(siteName);

        header.insertBefore(brandWrapper, header.firstChild);
    }

    // 图片lightbox效果
    function addLightboxEffect() {
        const images = document.querySelectorAll('.post-content img, .cnblogs_post_body img, #postBody img');
        images.forEach(img => {
            img.addEventListener('click', function() {
                const lightbox = document.createElement('div');
                lightbox.className = 'lightbox';
                lightbox.style.background = 'rgba(0,0,0,0.8)';
                lightbox.style.position = 'fixed';
                lightbox.style.top = '0';
                lightbox.style.left = '0';
                lightbox.style.width = '100%';
                lightbox.style.height = '100%';
                lightbox.style.display = 'flex';
                lightbox.style.justifyContent = 'center';
                lightbox.style.alignItems = 'center';

                const lightboxImg = document.createElement('img');
                lightboxImg.src = this.src;
                lightboxImg.style.maxWidth = '90%';
                lightboxImg.style.maxHeight = '90%';
                lightboxImg.style.borderRadius = '8px';

                lightbox.appendChild(lightboxImg);

                lightbox.addEventListener('click', function() {
                    this.remove();
                });

                document.body.appendChild(lightbox);
            });
        });
    }

    // 代码高亮
    function addCodeHighlight() {
        const codeBlocks = document.querySelectorAll('pre code');
        codeBlocks.forEach(block => {
            // 这里可以使用Prism.js或其他高亮库进行高亮处理
            // 例如：Prism.highlightElement(block);
        });
    }

    // 回到顶部按钮
    function addBackToTopButton() {
        const backToTopBtn = document.createElement('button');
        backToTopBtn.textContent = '回到顶部';
        backToTopBtn.style.position = 'fixed';
        backToTopBtn.style.bottom = '20px';
        backToTopBtn.style.right = '20px';
        backToTopBtn.style.backgroundColor = var(--hover-bg-color);
        backToTopBtn.style.color = var(--text-color);
        backToTopBtn.style.border = 'none';
        backToTopBtn.style.padding = '10px 20px';
        backToTopBtn.style.borderRadius = '4px';
        backToTopBtn.style.cursor = 'pointer';
        backToTopBtn.style.display = 'none';

        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 200) {
                backToTopBtn.style.display = 'block';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });

        document.body.appendChild(backToTopBtn);
    }

    // 初始化函数
    function init() {
        document.body.style.opacity = '0';
        addStyles();
        adjustLabels();
        addBrandToPostTitle();
        addLightboxEffect();
        addCodeHighlight();
        addBackToTopButton();

        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 500);
    }

    // 确保DOMContentLoaded事件触发后再执行
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // 监听暗黑模式切换
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
