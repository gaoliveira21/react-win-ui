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
        type: 'input',
        name: 'path',
        message: 'component path please (src/components/)'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{lowerCase path}}/{{pascalCase name}}/index.ts',
        templateFile: 'templates/components/index.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{lowerCase path}}/{{pascalCase name}}/{{lowerCase name}}.tsx',
        templateFile: 'templates/components/component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{lowerCase path}}/{{pascalCase name}}/__tests__/{{lowerCase name}}.spec.tsx',
        templateFile: 'templates/components/test.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{lowerCase path}}/{{pascalCase name}}/__stories__/{{lowerCase name}}.stories.tsx',
        templateFile: 'templates/components/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{lowerCase path}}/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/components/styles.ts.hbs'
      },
    ]
  })
}
