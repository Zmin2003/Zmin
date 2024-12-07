(function() {
    // 检测暗黑模式
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

    // 添加样式
    function addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* 自定义属性定义 */
            :root {
                --bg-color: ${isDarkMode() ? '#0d1117' : '#ffffff'};
                --text-color: ${isDarkMode() ? '#c9d1d9' : '#24292f'};
                /* 其他自定义属性 */
            }
            /* 样式规则 */
            body {
                background-color: var(--bg-color);
                color: var(--text-color);
                /* 其他样式 */
            }
            /* 其他样式规则 */
        `;
        document.head.appendChild(style);
    }

    // 调整标签布局
    function adjustLabels() {
        // 调整侧边栏标签布局的代码
    }

    // 添加品牌信息到标题
    function addBrandToPostTitle() {
        // 添加品牌信息到页面 header 的代码
    }

    // 图片样式优化与懒加载
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

            // 懒加载功能
            img.src = img.dataset.src;
            img.onload = () => {
                img.classList.add('loaded');
            };
        });
    }

    // 代码块增强
    function enhanceCodeBlocks() {
        const codeBlocks = document.querySelectorAll('pre code');
        codeBlocks.forEach((block, index) => {
            // 添加行号
            const lineNumbers = document.createElement('div');
            lineNumbers.className = 'line-numbers';
            // 添加复制按钮
            const copyButton = document.createElement('button');
            copyButton.textContent = '复制';
            copyButton.addEventListener('click', () => {
                navigator.clipboard.writeText(block.textContent);
            });
            // 将行号和按钮添加到代码块
            block.parentNode.appendChild(lineNumbers);
            block.parentNode.appendChild(copyButton);
        });
    }

    // 添加面包屑导航
    function addBreadcrumbs() {
        const breadcrumbs = document.createElement('nav');
        breadcrumbs.className = 'breadcrumbs';
        // 根据页面路径生成面包屑导航
        // 代码略
        document.body.insertBefore(breadcrumbs, document.body.firstChild);
    }

    // 初始化函数
    function init() {
        document.body.style.opacity = '0';
        addStyles();
        adjustLabels();
        addBrandToPostTitle();
        styleImages();
        enhanceCodeBlocks();
        addBreadcrumbs();

        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 0);
    }

    // 确保在 DOMContentLoaded 事件后执行初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // 监听主题模式变化
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
