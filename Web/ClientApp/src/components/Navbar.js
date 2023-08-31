import React from 'react';
import {
	Nav,
	NavLink,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to='/toaster' activeStyle>
						Toast
					</NavLink>
					<NavLink to='/events' activeStyle>
						UseQuery
					</NavLink>
					<NavLink to='/annual' activeStyle>
						Helmet
					</NavLink>
					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
				<NavBtn>
					<NavBtnLink to='/signin'>Sign In</NavBtnLink>
				</NavBtn>
			</Nav>
		</>
	);
};

export default Navbar;
