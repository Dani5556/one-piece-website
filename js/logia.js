
    const wheel = document.querySelector('.wheel');
    const startButton = document.querySelector('.button');
    const display = document.querySelector('#result');

    let audio = new Audio('/Ding - Sound Effect (HD).mp3');

    let link = document.querySelector('#nextbuttonlink');

    let deg = 0;
    let zoneSize = 32.7272;

    const symbolZones = {
     1: "Smoke-Smoke Fruit",
    2:" Sand-Sand Fruit",
      3:"  Flame-Flame Fruit",
        4:"Rumble-Rumble Fruit",
  5:" Ice-Ice Fruit",
    6:"    Dark-Dark Fruit",
      7:"  Light-Light Fruit",
  8:"  Mag-Mag Fruit",
    9:  "  Swamp-Swamp Fruit",
  10:"  Gas-Gas Fruit",
   11: "    Snow-Snow Fruit"
    }

    const handleWin = (actualDeg) =>{
        const winningResultNr = Math.ceil(actualDeg/zoneSize);
        display.innerHTML = symbolZones[winningResultNr];
        audio.play();
        localStorage.setItem('DEVILFRUIT' ,symbolZones[winningResultNr]);
        startButton.innerHTML = 'Next';
        startButton.href = "/html/hakitype.html";
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

