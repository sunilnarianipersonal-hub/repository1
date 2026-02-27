# React / TypeScript CRUD Frontend

Small sample CRUD frontend built with Vite, React, TypeScript, and MUI.

## Features
- Fetches users from JSONPlaceholder (mock REST API)
- Displays data using MUI DataGrid (sorting, pagination, quick filter)
- Local Add / Edit / Delete operations (state-only; JSONPlaceholder is read-only)
- Responsive layout for interview submission

## Local development
1. Install dependencies:

```powershell
npm install
```

2. Run dev server:

```powershell
npm run dev
```

3. Build production bundle:

```powershell
npm run build
```

## Docker
### Build image

```powershell
docker build -t crud-frontend:latest .
```

### Run container

```powershell
docker run --rm -p 8080:80 crud-frontend:latest
```

Open: http://localhost:8080

## Notes
- Initial data source: `https://jsonplaceholder.typicode.com/users`
- Add/Edit/Delete are local UI operations and do not persist remotely.
