document.addEventListener('DOMContentLoaded',function(){

    var calendarButton = document.querySelector('.calendar');
    var popupBox = document.getElementById('box');


    calendarButton.addEventListener('mouseover',function(){
        popupBox.style.display = 'block';
    });
    calendarButton.addEventListener('mouseout',function(){
        popupBox.style.display='none';
    });
});