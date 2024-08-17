document.addEventListener('DOMContentLoaded', function() {
    // رسالة ترحيب عند دخول الصفحة
    alert('مرحباً بكم في موقع فريق صناع المستقبل! نتمنى لكم تجربة مميزة.');

    // تأثيرات الأزرار
    const exploreBtn = document.getElementById('explore-btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('mouseover', function() {
            exploreBtn.style.backgroundColor = '#00d2ff';
            exploreBtn.style.color = '#fff';
            exploreBtn.style.transform = 'scale(1.05)';
        });

        exploreBtn.addEventListener('mouseout', function() {
            exploreBtn.style.backgroundColor = '#007bff';
            exploreBtn.style.color = '#fff';
            exploreBtn.style.transform = 'scale(1)';
        });
    }

    // تأثيرات النصوص عند التمرير
    const featureTitles = document.querySelectorAll('.features h2');
    featureTitles.forEach(title => {
        title.addEventListener('mouseover', function() {
            title.style.color = '#00d2ff';
            title.style.textDecoration = 'underline';
        });

        title.addEventListener('mouseout', function() {
            title.style.color = '#1e88e5';
            title.style.textDecoration = 'none';
        });
    });

    // تأثيرات الصور
    const heroImage = document.querySelector('.hero');
    if (heroImage) {
        heroImage.addEventListener('mouseover', function() {
            heroImage.style.filter = 'brightness(80%)';
        });

        heroImage.addEventListener('mouseout', function() {
            heroImage.style.filter = 'brightness(100%)';
        });
    }

    // عد تنازلي للامتحانات
    function updateCountdown() {
        const now = new Date().getTime();
        const targetTime = new Date();
        targetTime.setDate(targetTime.getDate() + 281); // إضافة 281 يوماً
        targetTime.setHours(targetTime.getHours() + 3); // إضافة 3 ساعات
        targetTime.setMinutes(targetTime.getMinutes() + 4); // إضافة 4 دقائق
        targetTime.setSeconds(targetTime.getSeconds() + 1); // إضافة 1 ثانية

        const timeDifference = targetTime - now;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById("countdown-timer").innerHTML =
            `${days} أيام ${hours} ساعات ${minutes} دقائق ${seconds} ثواني`;

        if (timeDifference < 0) {
            clearInterval(interval);
            document.getElementById("countdown-timer").innerHTML = "انتهى الوقت!";
        }
    }
    
    const interval = setInterval(updateCountdown, 1000);

    // تمرير تلقائي لشريط الأخبار
    const ticker = document.querySelector('.news-ticker');
    if (ticker) {
        ticker.addEventListener('mouseover', function() {
            ticker.style.animationPlayState = 'paused';
        });
        ticker.addEventListener('mouseout', function() {
            ticker.style.animationPlayState = 'running';
        });
    }
});
// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Set the date we're counting down to
    const countDownDate = new Date("August 25, 2025 00:00:00").getTime();

    // Update the count down every 1 second
    const x = setInterval(function() {
        // Get the current date and time
        const now = new Date().getTime();

        // Calculate the time remaining
        const distance = countDownDate - now;

        // Calculate days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="countdown-timer"
        document.getElementById("countdown-timer").innerHTML = 
            days + " أيام " + hours + " ساعات " + minutes + " دقائق " + seconds + " ثوان ";

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown-timer").innerHTML = "انتهت فترة العد التنازلي";
        }
    }, 1000);
});
