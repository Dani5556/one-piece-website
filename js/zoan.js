
    const wheel = document.querySelector('.wheel');
    const startButton = document.querySelector('.button');
    const display = document.querySelector('#result');

    let audio = new Audio('/Ding - Sound Effect (HD).mp3');

    let link = document.querySelector('#nextbuttonlink');

    let deg = 0;
    let zoneSize = 22.5;

    const symbolZones = {
        1:" Ox-Ox Fruit : Giraffe",
         2:"Human-Human Fruit",
3:"Human-Human Fruit : Buddha",
4:"Bird-Bird Fruit : Phoenix",
5:"Tweet-Tweet Fruit : Falcon",
6:"Dog-Dog Fruit : Wolf",
7:"Dog-Dog Fruit : Okuchi-no-Makami",
8:"Cat-Cat Fruit : Leopard",
9:"-Elephant Fruit : Mammoth",
10:"Fish-Fish Fruit : Azure Dragon",
11:"Snake-Snake Fruit : King Cobra",
12:"Snake-Snake Fruit : Anaconda",
13:"Dragon-Dragon Fruit : Allosaurus",
14:"Dragon-Dragon Fruit : Pteranodon",
15:"Dragon-Dragon Fruit : Brachiosaurus",
16:"Spider-Spider : Rosamygale Grauvogeli"
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

