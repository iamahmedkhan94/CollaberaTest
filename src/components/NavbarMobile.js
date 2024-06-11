import React, { useCallback, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Linking, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

const NavbarMobile = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };

    const handleLinkPress = (url) => {
        Linking.openURL(url);
    };

    const getSource = useCallback(() => {
        if (navbarOpen) return null
        else return require('../assets/icons/menu1.png')
    }, [navbarOpen])


    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <TouchableOpacity onPress={toggleNavbar}>
                    {!navbarOpen && <Image source={require('../assets/icons/menu1.png')} resizeMode='contain' style={{ height: 24, width: 24 }} />}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleLinkPress('/')}>
                    <Text style={styles.title}>AEON</Text>
                </TouchableOpacity>
            </View>
            {navbarOpen && (
                <View style={styles.navbarContentVertical}>
                    <View style={styles.searchContainer}>
                        <TextInput style={styles.searchInput} placeholder="Search documentation..." />
                        <Image source={require('../assets/icons/search.png')} resizeMode='contain' style={{ height: 24, width: 24 }} />
                        <TouchableOpacity onPress={toggleNavbar}>
                            <Image source={require('../assets/icons/close.png')} resizeMode='contain' style={{ height: 24, width: 24 }} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => handleLinkPress('/')}>
                        <Text style={styles.navItem}>Showcase</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleLinkPress('/')}>
                        <Text style={styles.navItem}>Docs</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleLinkPress('/')}>
                        <Text style={styles.navItem}>Blog</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleLinkPress('/')}>
                        <Text style={styles.navItem}>Analytics</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleLinkPress('/')}>
                        <Text style={styles.navItem}>Commerce</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleLinkPress('/')}>
                        <Text style={styles.navItem}>Templates</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleLinkPress('/')}>
                        <Text style={styles.navItem}>Enterprise</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue',
    },
    searchInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        borderRadius: 4,
    },
    navbarContentVertical: {
        flexDirection: 'column',
        marginTop: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 10,
    },
    navItem: {
        fontSize: 16,
        padding: 10,
    },
});

export default NavbarMobile;
