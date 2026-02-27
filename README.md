# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    # React / TypeScript Frontend for REST API CRUD

    Small sample CRUD frontend built with Vite, React, TypeScript and MUI.

    ## Features
    - Fetches users from JSONPlaceholder (mock REST API)
    - Displays data using MUI DataGrid (sorting, pagination, quick filter)
    - Local Add / Edit / Delete operations (state-only; JSONPlaceholder is read-only)
    - Responsive, lightly styled layout for interview submission

    ## Quick start
    1. Install dependencies

    ```powershell
    npm install
    ```

    2. Run development server (HMR)

    ```powershell
    npm run dev
    ```

    Open http://localhost:5173 (Vite will show the actual URL).

    3. Build production bundle

    ```powershell
    npm run build
    ```

    Preview production build

    ```powershell
    npm run preview
    ```

    ## Notes
    - The app uses JSONPlaceholder (`https://jsonplaceholder.typicode.com/users`) to load initial user data. Add/Edit/Delete are local operations only and do not persist to the remote API.
    - If you export or zip this project for submission, include the `src/`, `public/`, `package.json`, and this `README.md`. Exclude `node_modules/`.

    ## Contact
    If you need me to make additional polish or prepare a zipped artifact for submission, tell me which format you prefer (source or production build).
