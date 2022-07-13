
    const wheel = document.querySelector('.wheel');
    const startButton = document.querySelector('.button');
    const display = document.querySelector('#result');

    let audio = new Audio('/Ding - Sound Effect (HD).mp3');

    let link = document.querySelector('#nextbuttonlink');

    let deg = 0;
    let zoneSize = 90;

    const symbolZones = {
    1: "No",
    2: "Yes",
    3: "No",
    4: "Yes"
    }

    const handleWin = (actualDeg) =>{
        const winningResultNr = Math.ceil(actualDeg/zoneSize);
        display.innerHTML = symbolZones[winningResultNr];
        audio.play();
        localStorage.setItem('DEVILFRUIT',symbolZones[winningResultNr]);
        if(winningResultNr == 1 || winningResultNr == 3){
            startButton.href = '/html/hakitype.html';
        }
        else startButton.href = "/html/dftype.html";
    }
    startButton.addEventListener('click', () => {
        startButton.style.pointerEvents = 'none';
        deg = Math.floor(5100 + Math.random() * 5100);
        wheel.style.transition = 'all 7s ease-out';
        wheel.style.transform = `rotate(${deg}deg)`;
        wheel.classList.add('blur');
    });
    
    wheel.addEventListener('transitionend', () => {
        wheel.classList.remove('blur');
        startButton.style.pointerEvents = 'auto';
        wheel.style.transition = 'none';
        const actualDeg = deg % 360;
        wheel.style.transform = `rotate(${actualDeg}deg)`;
        // calculate and display result
        handleWin(actualDeg);
    });

