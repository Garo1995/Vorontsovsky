
// Устанавливаем таймер на 7 дней с момента загрузки страницы
const deadline = new Date().getTime() + (7 * 24 * 60 * 60 * 1000);

function updateTimer() {
    const now = new Date().getTime();
    const t = deadline - now;

    if (t <= 0) {
        document.querySelector(".timer").innerHTML = "<h3>Акция завершена!</h3>";
        return;
    }

    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((t % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days.toString().padStart(2, "0");
    document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
}

setInterval(updateTimer, 1000);
updateTimer();