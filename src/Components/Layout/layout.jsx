import './layout.css';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
    return (<div className='container'>
        <div className='nav-container'>
            <Link to="/" className='home'>HOME</Link>
            <Link to="/members" className='members'>MEMBERS</Link> 
        </div>
        <Outlet />
    </div>)
}