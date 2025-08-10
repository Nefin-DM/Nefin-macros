/* Requires Sequencer for crosshair */ 
/* Places lights at crosshair location */ 
const position = await Sequencer.Crosshair.show({
  label: {
   text: "Place Darkness",
   dx: 0,
   dy: 100,
  },
  icon: {
    texture: "icons/magic/unholy/strike-beam-blood-large-red-blue.webp",
    borderVisible: false,
  },
});

if (!position) return;

const source = {
  x: position.x,
  y: position.y,
  rotation: 0,
  config: {
    negative: true,
    priority: 0, //min 0
    alpha: 0.5,
    angle: 360,
    bright: 0,
   color: "#750b61",
    coloration: 1,
    dim: 20,
    attenuation: 0.5,
    luminosity: 0,
    saturation: 0,
    contrast: 0,
    shadows: 0, //0 to 1
    animation: {
      type: "magicalGloom",
      speed: 2, //0 to 10
      intensity: 5, //0 to 10
      reverse: false,
    },
    darkness: {
     min: 0,
      max: 1,
    }
  }
};

await canvas.scene.createEmbeddedDocuments("AmbientLight", [source]);

/* negative: false */

/* Types of Lights:
null
witchwave
chroma
energy
fairy
torch
grid
ghost
hexa
dome
emanation
pulse
wave
radialrainbow
revolving
siren
smokepatch
starlight
sunburst
fog
*/

/* negative:true */

/* Types of Darkness:
blackHole
denseSmoke
magicalGloom
rollingMass
*/
