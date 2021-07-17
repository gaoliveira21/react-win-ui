module.exports = function (plop) {
  plop.setGenerator('components', {
    description: 'application component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please'
      },
      {
        type: 'list',
        name: 'layer',
        message: 'component layer please',
        default: 'atoms',
        choices: ['atoms', 'molecules', 'organisms']
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{lowerCase layer}}/{{pascalCase name}}/index.ts',
        templateFile: 'templates/components/index.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{lowerCase layer}}/{{pascalCase name}}/{{lowerCase name}}.tsx',
        templateFile: 'templates/components/component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{lowerCase layer}}/{{pascalCase name}}/{{lowerCase name}}.spec.tsx',
        templateFile: 'templates/components/test.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{lowerCase layer}}/{{pascalCase name}}/{{lowerCase name}}.stories.tsx',
        templateFile: 'templates/components/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{lowerCase layer}}/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/components/styles.ts.hbs'
      },
    ]
  })
}
