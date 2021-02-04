const bgChange = document.getElementById('button').addEventListener('click', function () {

  const background = '#' + Math.round(Math.random() * 1000000);

  if (background.length == 7) {
    bgColor(background);
  } else {
    bgColor('#748276');
  }

  // Function for color change

  function bgColor(color) {
    document.getElementById('body').style.backgroundColor = color;
    document.getElementById('button-area').style.backgroundColor = color;
    document.getElementById('current-color').innerText = color;
  }

})