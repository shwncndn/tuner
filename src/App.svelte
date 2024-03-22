<script>
  import './styles.css';
  import * as Tone from 'tone';
  import guitarHeadstock from './images/TunerGuitar.png';


  const synth = new Tone.Synth().toDestination();

  let stringSix = ['E3', 'D#3', 'D3', 'C#3', 'C3', 'B2']
  let stringFive = ['A3', 'G#3', 'G3', 'F#3', 'F3', 'E3']
  let stringFour = ['D4', 'C#4', 'C4', 'B4', 'A#4', 'A4']
  let stringThree = ['G4', 'F#4', 'F4', 'E4', 'D#4', 'D4']
  let stringTwo = ['B4', 'A#4', 'A4', 'G#4', 'G4', 'F#4']
  let stringOne = ['E5', 'D#5', 'D5', 'C#5', 'C5', 'B5']

  const tunings = [
  // Standard tuning
  [ 
    stringSix[0], // 'E3'
    stringFive[0], // 'A3' 
    stringFour[0], // 'D4'
    stringThree[0], // 'G4'
    stringTwo[0], // 'B4' 
    stringOne[0] // 'E5'
  ],

  // Half step down tuning
  [
    stringSix[1], // 'D#3' 
    stringFive[1], // 'G#3'
    stringFour[1], // 'C#4'
    stringThree[1], // 'F#4' 
    stringTwo[1], // 'A#4'
    stringOne[1] // 'D#5' 
  ],

  // Full step down tuning
  [
    stringSix[2], // 'D3'
    stringFive[2], // 'G3'
    stringFour[2], // 'C4' 
    stringThree[2], // 'F4'
    stringTwo[2], // 'A4'
    stringOne[2] // 'D5'
  ]

  // Can add more tunings here
]

  let synthOn = false;
  let currentNote = null;
  let intervalId = null;

  function playNote(note) {
    if (currentNote === note) {
      // If the same note is clicked again, stop the note and clear the interval
      synth.triggerRelease();
      clearInterval(intervalId);
      currentNote = null;
    } else {
      // If a different note is clicked, stop the previous note and start the new one
      synth.triggerRelease();
      clearInterval(intervalId);
      currentNote = note;
      synth.triggerAttack(note);

      // Set up the interval to play the note for a whole tone, stop for a half tone, and repeat
      intervalId = setInterval(() => {
        synth.triggerRelease();
        setTimeout(() => {
          synth.triggerAttack(note);
        }, Tone.Time('2n').toSeconds() * 1000); // Convert half tone duration to milliseconds
      }, Tone.Time('1m').toSeconds() * 1000); // Convert whole tone duration to milliseconds
    }
  }
</script>

<main>
  <div class="flex justify-between relative">
    <div class="absolute top-[130px] left-[339px] w-16 h-72 z-10 flex flex-col space-y-4">
      <button on:click={() => playNote('D4')} class="relative w-full h-full rounded-full bg-slate-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.4)] flex justify-center items-center text-2xl font-bold text-white text-shadow-[0_1px_2px_rgba(0,0,0,0.6)] cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95 active:shadow-[inset_0_0_10px_rgba(0,0,0,0.4),0_1px_2px_rgba(0,0,0,0.4)] before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:w-[60%] before:h-[60%] before:rounded-full before:bg-[rgba(255,255,255,0.2)] before:pointer-events-none">
        <strong>D</strong>
      </button>
      <button on:click={() => playNote('A3')} class="relative w-full h-full rounded-full bg-slate-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.4)] flex justify-center items-center text-2xl font-bold text-white text-shadow-[0_1px_2px_rgba(0,0,0,0.6)] cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95 active:shadow-[inset_0_0_10px_rgba(0,0,0,0.4),0_1px_2px_rgba(0,0,0,0.4)] before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:w-[60%] before:h-[60%] before:rounded-full before:bg-[rgba(255,255,255,0.2)] before:pointer-events-none">
        <strong>A</strong>
      </button>
      <button on:click={() => playNote('E3')} class="relative w-full h-full rounded-full bg-slate-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.4)] flex justify-center items-center text-2xl font-bold text-white text-shadow-[0_1px_2px_rgba(0,0,0,0.6)] cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95 active:shadow-[inset_0_0_10px_rgba(0,0,0,0.4),0_1px_2px_rgba(0,0,0,0.4)] before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:w-[60%] before:h-[60%] before:rounded-full before:bg-[rgba(255,255,255,0.2)] before:pointer-events-none">
        <strong>E</strong>
      </button>
    </div>
    <div class="flex items-center justify-center pt-4 h-[700px] w-[1000px]">
      <img src="{guitarHeadstock}" alt="Guitar Headstock" class="object-contain w-full h-full">
    </div>
    <div class="absolute top-[130px] right-[333px] w-16 h-72 z-10 flex flex-col space-y-4">
      <button on:click={() => playNote('G4')} class="relative w-full h-full rounded-full bg-slate-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.4)] flex justify-center items-center text-2xl font-bold text-white text-shadow-[0_1px_2px_rgba(0,0,0,0.6)] cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95 active:shadow-[inset_0_0_10px_rgba(0,0,0,0.4),0_1px_2px_rgba(0,0,0,0.4)] before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:w-[60%] before:h-[60%] before:rounded-full before:bg-[rgba(255,255,255,0.2)] before:pointer-events-none">
        <strong>G</strong>
      </button>
      <button on:click={() => playNote('B4')} class="relative w-full h-full rounded-full bg-slate-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.4)] flex justify-center items-center text-2xl font-bold text-white text-shadow-[0_1px_2px_rgba(0,0,0,0.6)] cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95 active:shadow-[inset_0_0_10px_rgba(0,0,0,0.4),0_1px_2px_rgba(0,0,0,0.4)] before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:w-[60%] before:h-[60%] before:rounded-full before:bg-[rgba(255,255,255,0.2)] before:pointer-events-none">
        <strong>B</strong>
      </button>
      <button on:click={() => playNote('E5')} class="relative w-full h-full rounded-full bg-slate-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.4)] flex justify-center items-center text-2xl font-bold text-white text-shadow-[0_1px_2px_rgba(0,0,0,0.6)] cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95 active:shadow-[inset_0_0_10px_rgba(0,0,0,0.4),0_1px_2px_rgba(0,0,0,0.4)] before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:w-[60%] before:h-[60%] before:rounded-full before:bg-[rgba(255,255,255,0.2)] before:pointer-events-none">
        <strong>e</strong>
      </button>
    </div>
  </div>
</main>