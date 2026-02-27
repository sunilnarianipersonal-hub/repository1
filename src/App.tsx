import { useEffect, useState } from 'react'
import './App.css'
import { DataGrid, type GridColDef } from '@mui/x-data-grid'
import { IconButton, Tooltip, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

interface User {
  id: number
  name: string
  email: string
  phone?: string
  company?: { name: string }
}

function App() {

  const dbURL = 'https://jsonplaceholder.typicode.com/users?_limit=8'

  const [users, setUsers] = useState<User[]>([])
  const [editingUser, setEditingUser] = useState<User | null>(null)
  const [isEditOpen, setIsEditOpen] = useState(false)
   const [editForm, setEditForm] = useState<{ name: string; email: string }>({ name: '', email: '' })
  const openEdit = (user: User) => {
    setEditingUser(user)
    setEditForm({ name: user.name, email: user.email })
    setIsEditOpen(true)
  }
  const closeEdit = () => {
    setEditingUser(null)
    setIsEditOpen(false)
  }
  const saveEdit = () => {
    if (editingUser) {
      setUsers(prev => prev.map(user => user.id === editingUser.id ? { ...user, ...editForm } : user))
      closeEdit()
    }
  }
  
  // Add-user state and handlers (opens add modal)
  const [isAddOpen, setIsAddOpen] = useState(false)
  const [addForm, setAddForm] = useState<{ name: string; email: string }>({ name: '', email: '' })
  const openAdd = () => { setAddForm({ name: '', email: '' }); setIsAddOpen(true) }
  const closeAdd = () => { setIsAddOpen(false); setAddForm({ name: '', email: '' }) }
  const saveAdd = () => {
    // create a new id (max existing id + 1)
    const nextId = users.length ? Math.max(...users.map(u => u.id)) + 1 : 1
    const newUser: User = { id: nextId, name: addForm.name, email: addForm.email }
    setUsers(prev => [...prev, newUser])
    closeAdd()
  }
 

  const handleDelete = (id: number) => {
    setUsers(prev => prev.filter(user => user.id !== id))
  }

  const columns: GridColDef<User>[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', flex: 1, minWidth: 120 },
    { field: 'email', headerName: 'Email', flex: 1.2, minWidth: 140 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 100,
      sortable: false,
      filterable: false,
      renderCell: (params:any) => (
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <Tooltip title="Edit">
            <IconButton size="small" onClick={() => openEdit(params.row as User)} aria-label="edit">
              <EditIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton size="small" onClick={() => handleDelete(params.row.id as number)} aria-label="delete">
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </div>
      ),
    },
  ]

  useEffect(() => {
    fetch(dbURL)
      .then(response => response.json())
      .then((data: User[]) => setUsers(data))
      .catch(error => console.error('Error fetching data:', error))
  }, [])


  return (
    <>
      <h1 className="title">React / TypeScript Frontend for REST API CRUD</h1>
      {isEditOpen && editingUser && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999 }}>
          <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', minWidth: '350px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h3>Edit User #{editingUser.id}</h3>
            <label style={{ display: 'block', marginBottom: '12px' }}>
              Name:
              <input
                type="text"
                value={editForm.name}
                onChange={(e) => setEditForm(prev => ({ ...prev, name: e.target.value }))}
                style={{ display: 'block', width: '100%', padding: '6px', marginTop: '4px', boxSizing: 'border-box' }}
              />
            </label>
            <label style={{ display: 'block', marginBottom: '16px' }}>
              Email:
              <input
                type="email"
                value={editForm.email}
                onChange={(e) => setEditForm(prev => ({ ...prev, email: e.target.value }))}
                style={{ display: 'block', width: '100%', padding: '6px', marginTop: '4px', boxSizing: 'border-box' }}
              />
            </label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button variant="contained" color="primary" onClick={saveEdit} style={{ flex: 1 }}>Save</Button>
              <Button variant="outlined" onClick={closeEdit} style={{ flex: 1 }}>Cancel</Button>
            </div>
          </div>
        </div>
      )}
      {isAddOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999 }}>
          <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', minWidth: '350px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h3>Add User</h3>
            <label style={{ display: 'block', marginBottom: '12px' }}>
              Name:
              <input
                type="text"
                value={addForm.name}
                onChange={(e) => setAddForm(prev => ({ ...prev, name: e.target.value }))}
                style={{ display: 'block', width: '100%', padding: '6px', marginTop: '4px', boxSizing: 'border-box' }}
              />
            </label>
            <label style={{ display: 'block', marginBottom: '16px' }}>
              Email:
              <input
                type="email"
                value={addForm.email}
                onChange={(e) => setAddForm(prev => ({ ...prev, email: e.target.value }))}
                style={{ display: 'block', width: '100%', padding: '6px', marginTop: '4px', boxSizing: 'border-box' }}
              />
            </label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button variant="contained" color="primary" onClick={saveAdd} style={{ flex: 1 }}>Add</Button>
              <Button variant="outlined" onClick={closeAdd} style={{ flex: 1 }}>Cancel</Button>
            </div>
          </div>
        </div>
      )}
      <div className="card" style={{ height: 480, width: '100%', maxWidth: 1100, padding: 12, boxSizing: 'border-box', margin: '0 auto' }}>
        <div className="topbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <div style={{ fontSize: 16, fontWeight: 600 }}>Users</div>
          <div>
            <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={openAdd}>
              Add User
            </Button>
          </div>
        </div>
        <div style={{ height: 'calc(100% - 48px)', width: '100%' }}>
          <DataGrid
            rows={users}
            columns={columns}
            pageSizeOptions={[5,10]}
            initialState={{
              pagination: { paginationModel: { pageSize: 5} }
            }}
            showToolbar={true}
            sx={{
              '& .MuiDataGrid-columnHeaders': { backgroundColor: '#f3f4f6', borderBottom: '1px solid rgba(0,0,0,0.06)' },
              '& .MuiDataGrid-cell': { borderBottom: '1px solid rgba(0,0,0,0.04)' },
              '& .MuiDataGrid-row:hover': { backgroundColor: '#fbfdff' },
            }}
          />
        </div>
      </div>
    </>
  )
}

export default App
