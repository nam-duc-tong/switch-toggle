var checkbox_toggle = document.getElementById('light-dark');
checkbox_toggle.addEventListener('change',function(){
    document.body.classList.toggle('dark');
});