// List of negative-only animations
const animations = {
  null: "none",
  hole: "Black Hole",
  denseSmoke: "Dense Smoke",
  magicalGloom: "Magical Gloom",
  roiling: "Rolling Mass"
};

let formContent = `
<form>
  <div class="form-group">
    <label>Animation Type:</label>
    <select name="animation">
      ${Object.entries(animations).map(([value, label]) => `<option value="${value}">${label}</option>`).join("")}
    </select>
  </div>
  <div class="form-group">
    <label>Dim Radius:</label>
    <input type="number" name="dim" value="20" />
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
    <input type="color" name="color" value="#750b61" />
  </div>
</form>
`;

new Dialog({
  title: "Configure Darkness",
  content: formContent,
  buttons: {
    place: {
      label: "Start Placing",
      callback: async (html) => {
        const data = Object.fromEntries(new FormData(html[0].querySelector("form")));

        let placing = true;

        while (placing) {
          const position = await Sequencer.Crosshair.show({
            label: { text: "Place Darkness", dx: 0, dy: 100 },
            icon: {
              texture: "icons/magic/unholy/strike-beam-blood-large-red-blue.webp",
              borderVisible: false
            }
          });

          if (!position) break;

          const darkness = {
            x: position.x,
            y: position.y,
            rotation: 0,
            config: {
              negative: true,
              priority: 0,
              alpha: Number(data.alpha),
              angle: 360,
              bright: 0,
              dim: Number(data.dim),
              color: data.color,
              coloration: 1,
              attenuation: Number(data.attenuation),
              luminosity: 0,
              saturation: 0,
              contrast: 0,
              shadows: 0,
              animation: {
                type: data.animation,
                speed: Number(data.speed),
                intensity: Number(data.intensity),
                reverse: Boolean(data.reverse)
              },
              darkness: { min: 0, max: 1 }
            }
          };

          await canvas.scene.createEmbeddedDocuments("AmbientLight", [darkness]);
        }
      }
    },
    cancel: {
      label: "Cancel"
    }
  },
  default: "place"
}).render(true);
