import React from 'react';
import { Platform } from 'react-native';
import NavbarWeb from '../components/NavbarWeb'
import NavbarMobile from '../components/NavbarMobile'


const Navbar = () => {
    const Navbar = Platform.OS === 'web' ? NavbarWeb : NavbarMobile;

    return <Navbar />;
};

export default Navbar;
