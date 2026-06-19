document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const supportBtn = document.getElementById('supportBtn');

    window.switchPage = (pageId) => {
        pages.forEach((page) => {
            page.classList.toggle('active', page.id === pageId);
        });

        tabButtons.forEach((button) => {
            const buttonPage = button.getAttribute('onclick');
            const isActive = buttonPage && buttonPage.includes(`'${pageId}'`);
            button.classList.toggle('active', isActive);
        });
    };

    if (supportBtn) {
        const supportMessages = [
            'You are doing great today! Keep going 💖',
            'Sending you a virtual hug and all the positive vibes! ✨',
            'Believe in yourself — you are stronger than you think! 🌈',
        ];

        supportBtn.addEventListener('click', () => {
            const randomIndex = Math.floor(Math.random() * supportMessages.length);
            alert(supportMessages[randomIndex]);
        });
    }
});