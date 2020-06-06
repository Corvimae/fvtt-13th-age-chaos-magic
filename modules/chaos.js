Hooks.once('init', () => {
  game.chaosMage = game.chaosMage || {}

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
