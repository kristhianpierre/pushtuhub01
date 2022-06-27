let display = document.getElementById('dispaly');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( buttons => {
    buttons.addeventlistener("click" , (e) => {
        switch(e.target.innertext) {
            case 'c':
                display.innerText = '';
                break;
            case'←':
            if(display.innertext){
                display.innerText = display.innerText.slice(0,-1)
            }
            break;
        case '=':
                try{
                    display.innertext = eval(dispaly.innertex);
                } catch {
                    display.innertex = 'Error!';
                }
                    
                break;
            default:
                display,innerText += e.target.innerText
        }
        
    });

});
