<script>
  import './styles.css';

  import * as Tone from 'tone';

  const synth = new Tone.Synth().toDestination();

  let stringSix = ['E3', 'D#3', 'D3', 'C#3', 'C3', 'B2']
  let stringFive = ['A3', 'G#3', 'G3', 'F#3', 'F3', 'E3']
  let stringFour = ['D4', 'C#4', 'C4', 'B4', 'A#4', 'A4']
  let stringThree = ['G4', 'F#4', 'F4', 'E4', 'D#4', 'D4']
  let stringTwo = ['B4', 'A#4', 'A4', 'G#4', 'G4', 'F#4']
  let stringOne = ['E5', 'D#5', 'D5', 'C#5', 'C5', 'B5']

  let synthOn = false;

  function playNote(note) {
    synthOn = !synthOn;
    if (synthOn) {
      synth.triggerAttack(note); 
    } else {
      synth.triggerRelease();
    }
  }
</script>

  <main>
    <div class="flex justify-between">
      <div class="flex flex-col p-4 space-y-4 bg-red-300">
        <button on:click={() => playNote('D4')} class="bg-black p-4 text-2xl">
            <strong>D</strong>  
          </button>
          <button on:click={() => playNote('A3')} class="bg-black p-4 text-2xl">
            <strong>A</strong> 
          </button>
          <button on:click={() => playNote('E3')} class="bg-black p-4 text-2xl">
            <strong>E</strong>  
       </button>
    </div>
  <div class="bg-green-300">
    Placeholder for guitar headstock image
  </div>

  <div class="flex flex-col p-4 space-y-4 bg-blue-300">  
      <button on:click={() => playNote('G4')} class="bg-black p-4 text-2xl">
        <strong>G</strong>  
      </button>
      <button on:click={() => playNote('B4')} class="bg-black p-4 text-2xl">
        <strong>B</strong>  
      </button>
      <button on:click={() => playNote('E5')} class="bg-black p-4 text-2xl">
        <strong>e</strong>  
      </button>
    </div>
  </div>
</main>