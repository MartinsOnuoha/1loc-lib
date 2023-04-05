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
        "@array": "./array.ts",
        "@dom": "./dom.ts"
      }
    }]
  ]
}
