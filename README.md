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

### Run from GitHub Container Registry (GHCR)

After the GitHub Actions workflow succeeds, you can pull and run the published image directly:

```powershell
docker pull ghcr.io/sunilnarianipersonal-hub/repository1:latest
docker run --rm -p 8080:80 ghcr.io/sunilnarianipersonal-hub/repository1:latest
```

If the package is private, authenticate first:

```powershell
echo <YOUR_GITHUB_PAT> | docker login ghcr.io -u sunilnarianipersonal-hub --password-stdin
```

## Notes
- Initial data source: `https://jsonplaceholder.typicode.com/users`
- Add/Edit/Delete are local UI operations and do not persist remotely.
