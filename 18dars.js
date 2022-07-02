
let list = [
    "file:///C:/Users/deKaroL/Desktop/1sound.mp3",
    "file:///C:/Users/deKaroL/Desktop/2sound.mp3",
    "file:///C:/Users/deKaroL/Desktop/3sound.mp3"
    ];

    let currentAudioIndex = 0;


let audio = new Audio(list[0]);
let h2 = document.querySelector("h2");

function getName() {
    let soundName = list[currentAudioIndex];
   let splittedName = soundName.split("/");
   h2.innerText = (splittedName[splittedName.length-1]);
}

function playSound() {
    audio.play(); 
   document.querySelector('#play').style.display="none";
   document.querySelector('#pause').style.display="block";
   getName();
   

}

function pauseSound() {
    audio.pause();
    document.querySelector('#play').style.display="block";
   document.querySelector('#pause').style.display="none";
}

function nextSound() {
    currentAudioIndex++;
    if(list[currentAudioIndex] !==undefined) {
        audio = new Audio(list[currentAudioIndex]);
        audio.pause();
        audio = new Audio(list[currentAudioIndex]);
        audio.play();
        getName();

    }


    }   
    function prevSound()
        currentAudioIndex--;
        if(list[currentAudioIndex] !==undefined) {
            audio = new Audio(list[currentAudioIndex]);
            audio.pause();
            audio = new Audio(list[currentAudioIndex]);
            audio.play();
            getName();
    

    }
