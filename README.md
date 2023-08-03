# Created via React + TypeScript + Vite

# How to start project locally

### `npm run install`

Create new .env file at the root of folder and copy .env.sample in it

### `npm run dev`

# Folder and files structure: 

public - static files (images, svgs in sprite)

src - all app source code

   /components - folder with reusable and non-reusable app components

   /hooks - folder with reusable hooks

   /pages - folder with all app pages

      /layouts - folder with app layouts (for possible difference in layouts if app scales)

   /redux - folder with services (RTK query) and slices (Redux Toolkit) folders

   /styles - folder with global app styles

   /translations - folder with translation json files for i18n

   /types - folder with reusable types

   /utils - folder with reusable function without state (opposite to hooks)

   /App.tsx - component with Routes, lazy loading page chunks

   /constants.ts - file with global app constants

   /ErrorBoundary.tsx - global app error handler

   /i18n.ts - config file for i18n

   /main.tsx - general component with Redux store provider, BrowserRouter and ErrorBoundary wrappers 

.env - environment variables

.env.sample - sample environment variables available on Git

.eslintignore - ignore files for ESlint

.eslintrc - ESlint config file

.gitignore - ignore files for Git

.prettierignore - ignore files for Prettier

index.html - root HTML file

package.json - project dependencies

tsconfig.json - typescript configuration for project

tsconfig.node.json - typescript configuration for project

vite.config.ts - Vite config file

# Tech stack used:

React Vite

Styled components for Styling

Redux Toolkit + RTK Query for global state management and data fetching
