// List of non-negative animations
const animations = {
  null: "None",
  witchwave: "Witchwave",
  chroma: "Chroma",
  energy: "Energy",
  fairy: "Fairy",
  torch: "Torch",
  grid: "Grid",
  ghost: "Ghost",
  hexa: "Hexa",
  dome: "Dome",
  emanation: "Emanation",
  pulse: "Pulse",
  wave: "Wave",
  radialrainbow: "Radial Rainbow",
  revolving: "Revolving",
  siren: "Siren",
  smokepatch: "Smoke Patch",
  starlight: "Starlight",
  sunburst: "Sunburst",
  fog: "Fog"
};

let formContent = `
<form>
  <div class="form-group">
    <label>Animation Type:</label>
    <select name="animation">
      ${Object.entries(animations).map(([val, label]) => `<option value="${val}">${label}</option>`).join("")}
    </select>
  </div>
  <div class="form-group">
    <label>Dim Radius:</label>
    <input type="number" name="dim" value="20" />
  </div>
  <div class="form-group">
    <label>Bright Radius:</label>
    <input type="number" name="bright" value="10" />
  </div>
  <div class="form-group">
    <label>Alpha:</label>
    <input type="range" name="alpha" min="0" max="1" step="0.05" value="0.5" />
  </div>
  <div class="form-group">
    <label>Attenuation:</label>
    <input type="range" name="attenuation" min="0" max="1" step="0.1" value="0.5" />
  </div>
  <div class="form-group">
    <label>Animation Speed:</label>
    <input type="range" name="speed" min="0" max="10" step="1" value="2" />
  </div>
  <div class="form-group">
    <label>Animation Intensity:</label>
    <input type="range" name="intensity" min="0" max="10" step="1" value="5" />
  </div>
  <div class="form-group">
    <label>Reverse Animation:</label>
    <input type="checkbox" name="reverse" />
  </div>
  <div class="form-group">
    <label>Color:</label>
    <input type="color" name="color" value="#ffaa00" />
  </div>
</form>
`;

new Dialog({
  title: "Configure Light Source",
  content: formContent,
  buttons: {
    place: {
      label: "Start Placing",
      callback: async (html) => {
        const data = Object.fromEntries(new FormData(html[0].querySelector("form")));

        let placing = true;

        while (placing) {
          const position = await Sequencer.Crosshair.show({
            label: { text: "Place Light", dx: 0, dy: 100 },
            icon: {
              texture: "icons/magic/light/beam-rays-yellow.webp",
              borderVisible: false
            }
          });

          if (!position) break;

          const light = {
            x: position.x,
            y: position.y,
            rotation: 0,
            config: {
              negative: false,
              priority: 0,
              alpha: Number(data.alpha),
              angle: 360,
              bright: Number(data.bright),
              dim: Number(data.dim),
              color: data.color,
              coloration: 1,
              attenuation: Number(data.attenuation),
              luminosity: 0,
              saturation: 0,
              contrast: 0,
              shadows: 0,
              animation: {
                type: data.animation !== "null" ? data.animation : null,
                speed: Number(data.speed),
                intensity: Number(data.intensity),
                reverse: Boolean(data.reverse)
              },
              darkness: { min: 0, max: 1 }
            }
          };

          await canvas.scene.createEmbeddedDocuments("AmbientLight", [light]);
        }
      }
    },
    cancel: {
      label: "Cancel"
    }
  },
  default: "place"
}).render(true);
