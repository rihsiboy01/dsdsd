const rightButton = document.querySelector('.uch');
const leftButton = document.querySelector('.bir');
const jumpButton = document.querySelector('.tor');
const ikiElement = document.querySelector('.olti');
const besh = document.querySelector('.iki');


rightButton.addEventListener('click', () => {
    const currentLeft = parseInt(getComputedStyle(ikiElement).left, 10) || 0;
    ikiElement.style.left = `${currentLeft + 100}px`; 
});


leftButton.addEventListener('click', () => {
    const currentLeft = parseInt(getComputedStyle(ikiElement).left, 10) || 0;
    ikiElement.style.left = `${currentLeft - 100}px`;
});


jumpButton.addEventListener('click', () => {
    ikiElement.style.top = '-100px'; 
    setTimeout(() => {
        ikiElement.style.top = '0'; 
    }, 500);
});


document.addEventListener('keydown', (event) => {
    const currentLeft = parseInt(getComputedStyle(ikiElement).left, 10) || 0;
    const currentTop = parseInt(getComputedStyle(ikiElement).top, 10) || 0;

    switch (event.key) {
        case 'ArrowRight': 
            ikiElement.style.left = `${currentLeft + 100}px`;
            break;
        case 'ArrowLeft':
            ikiElement.style.left = `${currentLeft - 100}px`;
            break;
        case 'ArrowUp':
            ikiElement.style.top = '-100px';
            setTimeout(() => {
                ikiElement.style.top = '0';
            }, 500);
            break;
        default:
            break;
    }
});


const beshButton = document.querySelector('.iki'); 
const otilganOq = document.createElement('div'); 


otilganOq.style.position = 'absolute';
otilganOq.style.width = '100px';
otilganOq.style.height = '100px';
otilganOq.style.backgroundColor = 'pink';
otilganOq.style.borderRadius = '50%';
otilganOq.style.display = 'none';


document.body.appendChild(otilganOq);


document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        otilish();
    }
});

beshButton.addEventListener('click', () => {
    otilish();
});


function otilish() {
   
    otilganOq.style.display = 'block';

    const ikiElementRect = ikiElement.getBoundingClientRect();

  
    otilganOq.style.left = `${ikiElementRect.right}px`; 
    otilganOq.style.top = `${ikiElementRect.top + ikiElementRect.height / 2}px`; 

    let leftPozitsiya = ikiElementRect.right; 


    const interval = setInterval(() => {
        leftPozitsiya += 10;
        otilganOq.style.left = `${leftPozitsiya}px`;

        if (leftPozitsiya > window.innerWidth) {
            clearInterval(interval);
            otilganOq.style.display = 'none'; 
        }
    }, 30); 
}
function otilish() {
    
    otilganOq.style.display = 'block';

    const ikiElementRect = ikiElement.getBoundingClientRect();

   
    otilganOq.style.left = `${ikiElementRect.right}px`; 
    otilganOq.style.top = `${ikiElementRect.top + ikiElementRect.height / 2}px`; 

    let leftPozitsiya = ikiElementRect.right;

  
    const interval = setInterval(() => {
        leftPozitsiya += 20; 
        otilganOq.style.left = `${leftPozitsiya}px`;

        
        if (leftPozitsiya > window.innerWidth) {
            clearInterval(interval); 
            otilganOq.style.display = 'none'; 
        }
    }, 15);
}