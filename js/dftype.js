
    const wheel = document.querySelector('.wheel');
    const startButton = document.querySelector('.button');
    const display = document.querySelector('#result');

    let audio = new Audio('/Ding - Sound Effect (HD).mp3');

    let link = document.querySelector('#nextbuttonlink');

    let deg = 0;
    let zoneSize = 120;

    const symbolZones = {
    2: "Paramicia",
    3: "Logia",
    1: "Zoan"
    }

    const handleWin = (actualDeg) =>{
        const winningResultNr = Math.ceil(actualDeg/zoneSize);
        display.innerHTML = symbolZones[winningResultNr];
        audio.play();
        startButton.innerHTML = 'Next';
        if(winningResultNr == 2){
            startButton.href= "/html/Paramicia.html";
        }
        else if(winningResultNr == 1){
            startButton.href = "/html/Zoan.html";
        }
        else{
        startButton.href = "/html/logia.html";
        }
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

