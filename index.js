let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log("Button text is ", buttonText);

        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            if (screen.value.search("sin")==0) {
                if (screen.value.length == 8)
                    screen.value = Math.sin(screen.value.slice(4, 7));
                else if (screen.value.length == 7)
                    screen.value = Math.sin(screen.value.slice(4, 6));
                else
                    screen.value = Math.sin(screen.value.slice(4, 5));
            }

            else if (screen.value.search("cos")==0) {
                if (screen.value.length == 8)
                    screen.value = Math.cos(screen.value.slice(4, 7));
                else if (screen.value.length == 7)
                    screen.value = Math.cos(screen.value.slice(4, 6));
                else
                    screen.value = Math.cos(screen.value.slice(4, 5));
            }

            else if (screen.value.search("tan")==0) {
                if (screen.value.length == 8)
                    screen.value = Math.tan(screen.value.slice(4, 7));
                else if (screen.value.length == 7)
                    screen.value = Math.tan(screen.value.slice(4, 6));
                else
                    screen.value = Math.tan(screen.value.slice(4, 5));
            }
            else
                screen.value = eval(screenValue)          
        }
        else if (buttonText == 'DEL') {
            screenValue = screenValue.slice(0, (screenValue.length - 1));
            // console.log(screenValue,screenValue.length)   
            screen.value = screenValue;
        }
        else {
            screenValue += buttonText
            screen.value = screenValue;
        }
    })

}