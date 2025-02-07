module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current", // Configura o Babel para o ambiente Node.js atual
        },
      },
    ],
  ],
};
