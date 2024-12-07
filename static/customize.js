(function() {
    // 检测暗黑模式
    function isDarkMode() {
        return document.documentElement.getAttribute('data-color-mode') === 'dark';
    }

    // 获取网站图标
    function getWebsiteIcon() {
        return 'https://zmin2003.github.io/Zmin/avatar.svg'; // 替换为你的图标链接
    }

    // 获取网站名称
    function getWebsiteName() {
        const footerLink = document.querySelector('#footer1 a');
        return footerLink ? footerLink.textContent : document.title;
    }

    // 添加新的样式
    function addNewStyles() {
        const style = document.createElement('style');
        style.textContent = `
            :root {
                --new-bg-color: ${isDarkMode() ? '#1e2128' : '#e5e5e5'};
                --new-text-color: ${isDarkMode() ? '#fff' : '#111'};
                --new-accent-color: ${isDarkMode() ? '#007aff' : '#ff6347'};
                --new-shadow-color: ${isDarkMode() ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.2)'};
            }

            body {
                background-color: var(--new-bg-color);
                color: var(--new-text-color);
                font-family: 'Helvetica Neue', Arial, sans-serif;
                transition: background-color 0.5s, color 0.5s;
                overflow-x: hidden;
            }

            /* 新的导航栏样式 */
            .navbar {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                background-color: var(--new-bg-color);
                padding: 10px 20px;
                box-shadow: 0 2px 5px var(--new-shadow-color);
                z-index: 1000;
            }

            .navbar a {
                color: var(--new-text-color);
                text-decoration: none;
                font-weight: bold;
                margin-right: 20px;
                transition: color 0.3s;
            }

            .navbar a:hover {
                color: var(--new-accent-color);
            }

            /* 新的标题样式 */
            .new-header {
                text-align: center;
                padding: 50px 20px;
                background-image: linear-gradient(to right, var(--new-accent-color), #ff6347);
                color: #fff;
                margin-top: 60px; /* 留出导航栏空间 */
            }

            .new-header h1 {
                font-size: 3.5em;
                margin-bottom: 20px;
            }

            .new-header p {
                font-size: 1.2em;
                max-width: 600px;
                margin: 0 auto;
            }

            /* 新的内容区域样式 */
            .content-wrapper {
                max-width: 800px;
                margin: 50px auto;
                padding: 20px;
                background-color: var(--new-bg-color);
                border-radius: 10px;
                box-shadow: 0 5px 15px var(--new-shadow-color);
                color: var(--new-text-color);
            }

            .content-wrapper h2 {
                font-size: 2em;
                color: var(--new-accent-color);
                margin-top: 40px;
            }

            .content-wrapper p {
                line-height: 1.6;
                margin-bottom: 25px;
            }

            /* 新的图片样式 */
            .content-wrapper img {
                max-width: 100%;
                border-radius: 8px;
                box-shadow: 0 5px 15px var(--new-shadow-color);
                margin: 30px auto;
                display: block;
            }

            /* 新的按钮样式 */
            .new-button {
                display: inline-block;
                padding: 10px 20px;
                background-color: var(--new-accent-color);
                color: #fff;
                text-decoration: none;
                border-radius: 5px;
                transition: background-color 0.3s;
            }

            .new-button:hover {
                background-color: #ff6347;
            }

            /* 响应式调整 */
            @media (max-width: 768px) {
                .new-header h1 {
                    font-size: 2.5em;
                }

                .new-header p {
                    font-size: 1em;
                }

                .content-wrapper {
                    padding: 10px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // 添加新的导航栏
    function addNewNavbar() {
        const navbar = document.createElement('div');
        navbar.className = 'navbar';
        navbar.innerHTML = `
            <a href="#header">首页</a>
            <a href="#about">关于</a>
            <a href="#contact">联系</a>
        `;
        document.body.insertBefore(navbar, document.body.firstChild);
    }

    // 添加新的标题部分
    function addNewHeader() {
        const newHeader = document.createElement('div');
        newHeader.id = 'header';
        newHeader.className = 'new-header';
        newHeader.innerHTML = `
            <h1>${getWebsiteName()}</h1>
            <p>欢迎来到新的世界！</p>
        `;
        document.body.insertBefore(newHeader, document.body.firstChild);
    }

    // 添加新的内容样式
    function wrapContent() {
        const mainContent = document.querySelector('main');
        if (mainContent) {
            const wrapper = document.createElement('div');
            wrapper.className = 'content-wrapper';
            mainContent.parentNode.insertBefore(wrapper, mainContent);
            wrapper.appendChild(mainContent);
        }
    }

    // 初始化函数
    function init() {
        addNewStyles();
        addNewNavbar();
        addNewHeader();
        wrapContent();
    }

    // 确保DOM加载完成后执行
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // 监听暗黑模式切换
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'data-color-mode') {
                addNewStyles();
            }
        });
    });

    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-color-mode']
    });
})();
