const toggleBtn = document.querySelector("#toggle-notifications");
const newNotifications = document.querySelector("#new-notifications").children;
const counter = document.querySelector("#notifications-counter");

let unread = true;

toggleBtn.addEventListener("click", toggleNotifications);

function toggleNotifications() {
    unread = !unread;

    for (const notification of newNotifications) {
        if (unread) {
            notification.classList.add("bg-slate-100");
            notification.querySelector(".dot").classList.remove("hidden");
        } else {
            notification.classList.remove("bg-slate-100");
            notification.querySelector(".dot").classList.add("hidden");
        }
    }

    counter.textContent = unread ? newNotifications.length : 0;
}
