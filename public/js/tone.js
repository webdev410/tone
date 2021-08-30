// ! Play a synth

//create a synth and connect it to the master output (your speakers)
var synth = new Tone.Synth().toMaster()  //play a middle 'C' for the duration of an 8th note
synth.triggerAttackRelease('C4', '8n')


// ! Play a chord
//a polysynth composed of 6 Voices of Synth
// var synth = new Tone.PolySynth(6, Tone.Synth).toMaster();
//set the attributes using the set interface
// synth.set("detune", -1200);
//play a chord
// synth.triggerAttackRelease(["C4", "E4", "A4"], "4n");