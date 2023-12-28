var checkbox = document.getElementById("notis");

checkbox.addEventListener("click", askNotificationPermission, false);

var perm;

function askNotificationPermission() {
    Notification.requestPermission().then(permission => {
        perm = permission;
        alert(perm);
      })
}