document.addEventListener('DOMContentLoaded',function(){

    var calendarButton = document.querySelector('.calendar');
    var popupBox = document.getElementById('box');


    calendarButton.addEventListener('click', function() {
        if (popupBox.style.display === 'block') {
            popupBox.style.display = 'none';
        } else {
            popupBox.style.display = 'block';
        }
    });
});