module.exports = {
  extends: ['eslint-config-studentagency-next-typescript'],
ignorePatterns: ['.eslintrc.js', 'tasks/**/*.*', '**/*.css'],
  rules: {
    'import/no-unused-modules': ['error',
      {
        missingExports: true,
        unusedExports: true,
        ignoreExports: [
          './postcss.config.ts',
          './src/Globals.d.ts',
          './src/index.tsx',
          './tailwind.config.ts',
          './vite.config.ts',
        ],
      },
    ],
  },
};
