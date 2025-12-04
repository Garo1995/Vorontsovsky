// Устанавливаем таймер на 7 дней с момента загрузки страницы
const timerBlock = document.querySelector(".timer");

if (timerBlock) {

    const deadline = new Date().getTime() + (7 * 24 * 60 * 60 * 1000);

    function updateTimer() {
        const now = new Date().getTime();
        const t = deadline - now;

        if (t <= 0) {
            timerBlock.innerHTML = "<h3>Акция завершена!</h3>";
            clearInterval(timerInterval);
            return;
        }

        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minutesEl = document.getElementById("minutes");
        const secondsEl = document.getElementById("seconds");

        if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

        const days = Math.floor(t / (1000 * 60 * 60 * 24));
        const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((t % (1000 * 60)) / 1000);

        daysEl.innerText    = String(days).padStart(2, "0");
        hoursEl.innerText   = String(hours).padStart(2, "0");
        minutesEl.innerText = String(minutes).padStart(2, "0");
        secondsEl.innerText = String(seconds).padStart(2, "0");
    }

    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer();
}
