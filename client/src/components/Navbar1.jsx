import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#f0f0f0', borderBottom: '2px solid #ccc' }}>
      <div style={{ display: 'flex' }}>
        <Link to='/' style={{ marginRight: '20px' }}>Home</Link>
      </div>
      <div style={{ display: 'flex' }}>
        <Link to='/' style={{ marginRight: '20px' }}>Logout</Link>
      </div>
    </nav>
  )
}
