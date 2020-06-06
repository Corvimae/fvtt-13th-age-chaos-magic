Hooks.once('init', () => {
  game.chaosMage = game.chaosMage || {}

  game.chaosMage.displayPower = (name, img, data) => {
    const currentSpeaker = ChatMessage.getSpeaker();

    if (!currentSpeaker?.actor) {
      ui.notifications.error('No token is currently selected.');
    }

    const currentActor = game.actors.get(currentSpeaker.actor);

    var templateData = {
      actor: currentActor,
      item: { 
        name,
        img
      },
      data,
    };

    let template = 'systems/archmage/templates/chat/power-card.html';
    
    renderTemplate(template, templateData).then(content => {
      ChatMessage.create({
        user: game.user._id,
        speaker: ChatMessage.getSpeaker(),
        content: content
      });
    });
  }

  game.chaosMage.resetMacros = () => {
    game.user.assignHotbarMacro(
      game.macros.find(x => x.name === "Chaos Magic"),
      1
    );

    for(let i = 2; i <= 10; i += 1) {
      game.user.assignHotbarMacro(null, i);
    }
  }
});
