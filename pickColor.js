let btn = document.getElementById('btn').addEventListener('click', function() {
    let red = document.getElementById('red');
    let green = document.getElementById('green');
    let blue = document.getElementById('blue');
    let colorPicker = document.getElementById('colorPicker');
    colorPicker.innerText = ""
    colorPicker.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
    let saveButton = document.getElementById('btns').addEventListener('click', function() {
        let colors = [];

        function Colors(red, green, blue) {
            this.red = red;
            this.green = green;
            this.blue = blue;
        }
        let objColor = new Colors(red.value, green.value, blue.value);
        colors.push(objColor)
        console.log(colors);
        for (let i = 0; i < colors.length; i++) {
            let colorList = document.getElementById('colorList');
            colorList.innerHTML = objColor.red + "," + objColor.green + "," + objColor.blue + "<br>";
        }
        let secondColor = document.getElementById('secondColor');
        secondColor.innerHTML = "<button id='btn'>pick a second color</button>";
        secondColor.addEventListener('click', function() {
            let secondColorPicker = document.getElementById('secondColorArea');
            secondColorPicker.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
        })
    })
});