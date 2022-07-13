
    const wheel = document.querySelector('.wheel');
    const startButton = document.querySelector('.button');
    const display = document.querySelector('#result');

    let audio = new Audio('/Ding - Sound Effect (HD).mp3');

    let link = document.querySelector('#nextbuttonlink');

    let deg = 0;
    let zoneSize = 18;

    const symbolZones = {
    1:"Gum-Gum Fruit",
    2:"Chop-Chop Fruit",
    3:"Bomb-Bomb Fruit",
    4:"Flower-Flower Fruit",
    5:"Dice-Dice Fruit",
    6:"Spring-Spring Fruit",
    7:"String-String Fruit",
    8:"Hollow-Hollow Fruit",
    9:"Revive-Revive Fruit",
    10:"Shadow-Shadow Fruit",
    11:"Paw-Paw Fruit",
    12:"Op-Op Fruit",
    13:"Love-Love Fruit",
    14:" Tremor-Tremor Fruit",
    15:" Venom-Venom Fruit",
    16:" Horm-Horm Fruit",
    17:" Barrier-Barrier Fruit",
    18:" Soul-Soul Fruit",
    19:" Mochi-Mochi Fruit",
    20:" Magnet-Magnet Fruit"
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

