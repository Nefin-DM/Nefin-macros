/* Target UUID */
const uuid = await fromUuid("UUID_HERE");

/* Target Token */
//selected
const token = canvas.tokens.controlled[0];

//targeted
const targetedToken = game.user.targets.first();
const targetedTokenAlt = Array.from(game.user.targets)[0]; // [0], [1], [2], ...

//Name of token on canvas
const tokenByName = canvas.scene.tokens.getName("TOKEN_NAME_HERE")
const tokenByNameAlt = canvas.tokens.placeables.find(t => t.name === "TOKEN NAME");

/* Target Template */
const templateByOrderPlacedOnCavnas = canvas.templates.placeables[0]; // [0], [1], [2], ...
const latestTemplate = canvas.templates.placeables.at(-1);

/* Target Drawing */
const drawingByOrderPlacedOnCavnas = canvas.drawings.controlled[0]; // [0], [1], [2], ...
const drawingById = canvas.scene.drawings.get("DRAWING_ID_HERE");

/* Target Item */
const itemByName = token.actor.items.getName('ITEM_NAME_HERE');
const itemById = game.items.get("ITEM_ID_HERE")

//Target item that is owned by target actor
const target = Array.from(game.user.targets)[0];
const named = target.actor.name;
const targetActor = game.actors.getName(named);
let myItem = actor.items.find(i => i.name === 'ITEM_NAME_HERE');

/* Target Actor */
const actorById = game.actors.get("ACTOR_ID_HERE");

// Get all actors which are Player Characters
const pcs = game.actors.filter(actor => actor.isPC)

// Get all actors which are npcs
const npcs = game.actors.filter(actor => !actor.isPC)

/* Target Active Effect */
const activeEffectByName = token.actor.effects.getName('ACTIVE_EFFECT_NAME_HERE')

/* Target Scene */
const sceneByName = game.scene.getName("SCENE_NAME_HERE")
const sceneById = game.scene.get("SCENE_ID_HERE")

/* Target Journal */
const journalById = game.journal.get("JOUNRAL_ID_HERE")
let journalByName = game.journal.getName("JOURNAL_NAME_HERE")

