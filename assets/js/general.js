$(function () {
    $(document).on("contextmenu", function (e) { e.preventDefault(); });
});
function errorAvatar(element) {
    element.removeAttribute('onerror');
    element.src = 'assets/image/user-avatar-default.png';
}