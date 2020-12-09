const { generateTemplateFiles } = require('generate-template-files');

generateTemplateFiles([
  {
    option: 'Create day',
    defaultCase: '(camelCase)',
    entry: {
      folderPath: './scripts/templates/dayTemplate/',
    },
    stringReplacers: ['dayTemplate', 'adventOfCodeYear'],
    output: {
      path: './adventOfCodeYear(camelCase)/dayTemplate(camelCase)',
      pathAndFileNameDefaultCase: '(camelCase)',
    },
    onComplete: (results) => {
      console.log(`results`, results);
    },
  },
]);