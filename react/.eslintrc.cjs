module.exports = {
  env: {
    browser: true, // Pour les applications web (React)
    node: true, // Pour Node.js
    es2021: true, // Support pour ES2021
  },
  extends: [
    "eslint:recommended", // Règles de base ESLint
    "plugin:react/recommended", // Règles pour React
  ],
  parserOptions: {
    ecmaVersion: 12, // Support pour ES2021
    sourceType: "module", // Utilisation de modules ES (import/export)
    ecmaFeatures: {
      jsx: true, // Support pour JSX
    },
  },
  plugins: ["react"], // Plugin pour React
  rules: {
    "react/prop-types": "off", // Désactivation des prop-types (si vous utilisez TypeScript)
    "no-unused-vars": "warn", // Avertissement pour les variables inutilisées
    // "no-console": "warn", // Avertissement pour les consoles.log
    "react/react-in-jsx-scope": "off", // Plus nécessaire avec React 17+
  },
  settings: {
    react: {
      version: "detect", // Détection automatique de la version de React
    },
  },
};
