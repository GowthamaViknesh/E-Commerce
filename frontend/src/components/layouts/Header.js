import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Search from './Search';
import { useDispatch, useSelector } from 'react-redux';
import { DropdownButton, Dropdown, Image } from 'react-bootstrap';
import { logout } from '../../actions/userActions';

export default function Header() {
  const { isAuthenticated, user } = useSelector((state) => state.authState);
  const { items: cartItems } = useSelector((state) => state.cartState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logout);
  };

  return (
    <nav className='navbar row'>
      <div className='col-12 col-md-3'>
        <div className='navbar-brand'>
          <Link to='/'>
            <img
              width='150px'
              alt='E-Cart Logo'
              className='nav-image'
              src='https://images-platform.99static.com//IfMNVgqrW-tazVgq0o3e2u-gmp8=/271x245:1749x1723/fit-in/500x500/99designs-contests-attachments/112/112138/attachment_112138805'
            />
          </Link>
        </div>
      </div>

      <div className='col-12 col-md-6 mt-2 mt-md-0'>
        <Search />
      </div>

      <div className='col-12 col-md-3 mt-4 mt-md-0 text-center'>
        {isAuthenticated ? (
          <Dropdown className='d-inline'>
            <Dropdown.Toggle variant='default  pr-5' id='dropdown-basic'>
              <figure className='avatar avatar-nav'>
                <Image
                  width='50px'
                  style={{ borderRadius: '20px' }}
                  src={user.avatar ?? './images/default_avatar.png'}
                />
              </figure>
              <span style={{ color: 'black' }}>{user.name}</span>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ color: 'black' }}>
              {user.role === 'admin' && (
                <Dropdown.Item
                  onClick={() => {
                    navigate('admin/dashboard');
                  }}
                  className='text-dark'
                >
                  Dashboard
                </Dropdown.Item>
              )}
              <Dropdown.Item
                onClick={() => {
                  navigate('/myprofile');
                }}
                className='text-dark'
              >
                Profile
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  navigate('/orders');
                }}
                className='text-dark'
              >
                Orders
              </Dropdown.Item>
              <Dropdown.Item onClick={logoutHandler} className='text-danger'>
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Link to='/login' className='btn' id='login_btn'>
            Login
          </Link>
        )}
        <Link to='/cart'>
          <span id='cart' style={{ color: 'black' }} className='ml-3'>
            Cart
          </span>
        </Link>
        <span className='ml-1' id='cart_count'>
          {cartItems.length}
        </span>
      </div>
    </nav>
  );
}
