
    const wheel = document.querySelector('.wheel');
    const startButton = document.querySelector('.button');
    const display = document.querySelector('#result');

    let audio = new Audio('/Ding - Sound Effect (HD).mp3');

    let link = document.querySelector('#nextbuttonlink');

    let deg = 0;
    let zoneSize = 45;

    const symbolZones = {
      1:"None",
      2:" Armanent Haki",
     3:" Observation Haki",
     4:" Conqueror's Haki",
     5:"Armanent + Observation Haki",
     6:" Armanent + Conqueror's Haki",
     7:" Observation + Conqueror's Haki",
     8:" All 3 Haki"
     
    }

    const handleWin = (actualDeg) =>{
        const winningResultNr = Math.ceil(actualDeg/zoneSize);
        display.innerHTML = symbolZones[winningResultNr];
        audio.play();
        localStorage.setItem('HAKI' ,symbolZones[winningResultNr]);
        startButton.innerHTML = 'Next';
        if(winningResultNr == 1) startButton.href = 'speed.html';
        else startButton.href = "/html/hakimastery.html";
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

