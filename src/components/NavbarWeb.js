import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Linking } from 'expo';

const NavbarWeb = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };

    const handleLinkPress = (url) => {
        Linking.openURL(url);
    };

    const isMobile = Dimensions.get('window').width < 768;

    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                {isMobile && (
                    <TouchableOpacity onPress={toggleNavbar}>
                        <Feather name={navbarOpen ? 'x' : 'menu'} size={24} color="black" />
                    </TouchableOpacity>
                )}
                <TouchableOpacity onPress={() => handleLinkPress('/')}>
                    <Text style={styles.title}>AEON</Text>
                </TouchableOpacity>
                {!isMobile && (
                    <>
                        <View style={styles.linksContainer}>
                            <TouchableOpacity onPress={() => handleLinkPress('/')}>
                                <Text style={styles.link}>Showcase</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleLinkPress('/')}>
                                <Text style={styles.link}>Docs</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleLinkPress('/')}>
                                <Text style={styles.link}>Blog</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleLinkPress('/')}>
                                <Text style={styles.link}>Analytics</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleLinkPress('/')}>
                                <Text style={styles.link}>Templates</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleLinkPress('/')}>
                                <Text style={styles.link}>Enterprise</Text>
                            </TouchableOpacity>
                        </View>
                        <TextInput style={styles.searchInput} placeholder="Search documentation..." />
                    </>
                )}
            </View>
            {navbarOpen && isMobile && (
                <View style={styles.navbarContentVertical}>
                    <View style={styles.searchContainer}>
                        <TextInput style={styles.searchInput} placeholder="Search documentation..." />
                        <Feather name="search" size={20} color="black" />
                        <TouchableOpacity onPress={toggleNavbar}>
                            <Feather name="x" size={24} color="black" />
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
    linksContainer: {
        flexDirection: 'row',
        display: Platform.OS === 'web' ? 'flex' : 'none',
    },
    link: {
        fontSize: 16,
        color: 'blue',
        marginHorizontal: 10,
        textDecorationLine: 'none',
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

export default NavbarWeb;
