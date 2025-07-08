// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const kick = new Audio('sounds/kick-drum.mp3');
const snare = new Audio('sounds/snare-drum.mp3');
const hihat = new Audio('sounds/hi-hat.mp3');

let count = 0


// This function is called every 600ms
function update() {
    count ++ 
    if (count > 4) {
        count = 1
    }
    document.querySelector('#count').innerText = count;
    console.log(count)
const playMetronome = document.querySelector('#metronome').checked;
const playKick = document.querySelector('#kick').checked;
const playSnare = document.querySelector('#snare').checked;
const playHiHat = document.querySelector('#hihat').checked;
const kickNum = parseInt(document.querySelector('#kickNum').value);
const snareNum = parseInt(document.querySelector('#snareNum').value);
const hihatNum = parseInt(document.querySelector('#hihatNum').value);


// If the metronome checkbox is checked, play the 'tock' sound

    if (count === 4){
        if (playMetronome){
            tock.play(); 
        }
        count = 0

    }else{
        if (playMetronome){
            tick.play()

        }

    }
   
    // Play the 'kick' sound on every beat
   
    if (playKick && count === kickNum){
         kick.play();
    }
   
   
    // Play the 'snare' sound on every beat

        if (playSnare && count === snareNum){
            snare.play();
    }
   

   // Plays the hi-hat' on every beat when the box is checked 

   if (playHiHat && count === hihatNum){
        hihat.play();
   }
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);



