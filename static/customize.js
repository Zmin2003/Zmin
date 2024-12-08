function addStyles() {
    const style = document.createElement('style');
    style.textContent = createStyles();
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

function styleImages() {
    const images = document.querySelectorAll('.post-content img, .cnblogs_post_body img, #postBody img');
    images.forEach(img => {
        img.style.display = 'block';
        img.style.margin = '25px auto';
        img.style.maxWidth = '100%';
        img.style.border = '1px solid var(--border-color)';
        img.style.borderRadius = '8px';
        img.style.boxShadow = '0 4px 10px var(--shadow-color)';
        img.style.transition = 'transform 0.3s ease';
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
