const plugins = [
  [
    "module-resolver",
    {
      root: ["."],
      extensions: [".ts", ".tsx"],
    },
  ],
];

module.exports = {
  presets: ["next/babel"],
  plugins,
};
