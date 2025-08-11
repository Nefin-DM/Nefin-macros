if (!token?.actor) {
  ui.notifications.warn("Please select a token.");
  return;
}

new FilePicker({
  type: "image",
  callback: async (pickedImage) => {

    //prototype Token
    await token.actor.update({ "prototypeToken.texture.src": pickedImage }); 
    //token on canvas
    await token.document.update({ "texture.src": pickedImage });
    //actor picture
    await token.actor.update({ "img": pickedImage });
  }
}).render(true);
