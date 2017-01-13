//  Example call: buildButton('body', 'testClass', 'ok', 'Some Text');
function buildButton(target, buttonClass, glyph, buttonText){
        var button = document.createElement('button');
        button.className = buttonClass;
        button.innerHTML = buttonText;
        button.innerHTML += '<span class="glyphicon glyphicon-' + glyph + '"></span>'; 
        document.querySelector(target).appendChild(button);
    }
