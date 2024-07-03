document.addEventListener('DOMContentLoaded', () => {
    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });
        
        document.getElementById('utc-time').textContent = utcTime;
        document.getElementById('current-day').textContent = dayOfWeek;
    }

    function updateYear() {
        const currentYear = new Date().getFullYear();
        document.getElementById('current-year').textContent = currentYear;
    }

    updateTime();
    updateYear();
    setInterval(updateTime, 1000); // Update time every second
});
