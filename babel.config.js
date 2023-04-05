module.exports = {
  presets: [
    [
      '@babel/preset-env', {targets: {node: 'current'}}
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ["module-resolver", {
      "alias": {
        "@array": "./src/groups/array.ts",
        "@dom": "./src/groups/dom.ts"
      }
    }]
  ]
}
