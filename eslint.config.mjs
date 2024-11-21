import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginRedux from "eslint-plugin-redux";
import pluginPrettier from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Definir los archivos que se evaluarán
  {
    files: ["**/*.{js,mjs,cjs,jsx}"], // Evalúa archivos JS y JSX
    ignores: ["node_modules"], // Ignorar node_modules
  },

  // Configuración general del entorno
  {
    languageOptions: {
      globals: globals.browser, // Configurar para que entienda las variables globales del navegador
      parserOptions: {
        ecmaVersion: "latest", // Versión más reciente de ECMAScript
        sourceType: "module", // Permitir imports y exports
        ecmaFeatures: {
          jsx: true, // Soporte para JSX
        },
      },
    },
  },

  // Configuración recomendada de JavaScript
  pluginJs.configs.recommended,

  // Configuración recomendada para React
  pluginReact.configs.flat.recommended,

  // Configuración recomendada para React Hooks
  {
    plugins: { "react-hooks": pluginReactHooks },
    rules: {
      "react-hooks/rules-of-hooks": "error", // Verifica las reglas de los hooks
      "react-hooks/exhaustive-deps": "warn", // Requiere dependencias efectivas en useEffect
    },
  },

  // Configuración recomendada para Redux
  {
    plugins: { redux: pluginRedux },
    rules: {
      "redux/use-selector-prefer-selectors": "warn", // Requiere el uso de selectores en Redux
    },
  },

  // Configuración para Prettier
  {
    plugins: { prettier: pluginPrettier },
    rules: {
      "prettier/prettier": "error", // Marca errores cuando el formato no cumple con Prettier
    },
  },

  // Reglas personalizadas (puedes añadir más aquí)
  {
    rules: {
      "react/react-in-jsx-scope": "off", // Desactiva esta regla para proyectos que usan React 17+
      "no-console": "warn", // Advierte sobre console.log en producción
    },
  },
];
