module.exports = function selectionVariant({ addVariant, e }) {
  addVariant('selection', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`selection${separator}${className}`)} ::selection`;
    })
  })
};
