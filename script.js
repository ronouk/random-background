document.getElementById('button').addEventListener('click', function(){
    const background = '#' + Math.round( Math.random()*999999);
    document.getElementById('body').style.backgroundColor = background;
    document.getElementById('button-area').style.backgroundColor= background;
    document.getElementById('current-color').innerText = background;
})