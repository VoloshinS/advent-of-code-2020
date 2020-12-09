const { generateTemplateFiles } = require('generate-template-files');

generateTemplateFiles([
  {
    option: 'Create day',
    defaultCase: '(camelCase)',
    entry: {
      folderPath: './scripts/templates/dayTemplate/',
    },
    stringReplacers: ['dayTemplate'],
    output: {
      path: './2019/dayTemplate(camelCase)',
      pathAndFileNameDefaultCase: '(camelCase)',
    },
    onComplete: (results) => {
      console.log(`results`, results);
    },
  },
]);