const notes = {
    a: {
        audio: document.querySelector('.c-audio'),
        pianoKey: document.querySelector('.c-key'),
    },
    s: {
        audio: document.querySelector('.d-audio'),
        pianoKey: document.querySelector('.d-key'),
    },
    d: {
        audio: document.querySelector('.e-audio'),
        pianoKey: document.querySelector('.e-key'),
    },
    f: {
        audio: document.querySelector('.f-audio'),
        pianoKey: document.querySelector('.f-key'),
    },
    g: {
        audio: document.querySelector('.g-audio'),
        pianoKey: document.querySelector('.g-key'),
    },
    h: {
        audio: document.querySelector('.a-audio'),
        pianoKey: document.querySelector('.a-key'),
    },
    j: {
        audio: document.querySelector('.b-audio'),
        pianoKey: document.querySelector('.b-key'),
    },
    k: {
        audio: document.querySelector('.c-audio'),
        pianoKey: document.querySelector('.high-c-key'),
    },

}

const playNote = function(audioElement) {
    audioElement.currentTime = 0
    audioElement.play()
}

document.addEventListener('keydown', function(event) {
    if(notes[event.key] === undefined) return

    // notes[event.key].audio.currentTime = 0
    // notes[event.key].audio.play()
    playNote(notes[event.key].audio)
    notes[event.key].pianoKey.classList.add('active')
})

document.addEventListener('keyup', function(event) {
    if(notes[event.key] === undefined) return

    notes[event.key].pianoKey.classList.remove('active')

})

for(let note in notes) {
    notes[note].pianoKey.addEventListener('click', function(event) {
        // notes[note].audio.currentTime = 0
        // notes[note].audio.play()
        playNote(notes[note].audio)
    })
}

















    /*if(event.key === 'c') {
        note.k.currentTime = 0
        note.k.play()
        setTimeOut(function(){
            notes.h.currentTime = 0
            notes.h.play()
        }, 1000)
        setTimeOut(funtion() {
            notes.f.currentTime = 0
            notes.f.play()
        }, 1000)
        setTimeOut(funtion() {}, 2000)
    }

*/


//     if(event.key === 'c') {
//         cAudio.currentTime = 0
//         cAudio.play()
//         }
//     if(event.key === 'd') {
//         dAudio.currentTime = 0
//         dAudio.play()
//     }
//     if(event.key === 'e') {
//         eAudio.currentTime = 0
//         eAudio.play()
//     }
//
// })
