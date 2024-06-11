import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useTwoSum } from '../hooks/useTwoSum';

const Question3 = () => {
    const [numbers, setNumbers] = useState('');
    const [target, setTarget] = useState('');
    const { result, twoSum } = useTwoSum();


    const handleCalculate = () => {
        const numArray = numbers.split(',').map(Number);
        const targetNum = parseInt(target);
        twoSum(numArray, targetNum);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Two Sum Problem</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter numbers separated by commas"
                value={numbers}
                onChangeText={setNumbers}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter target number"
                value={target}
                onChangeText={setTarget}
                keyboardType="numeric"
            />
            <Button title="Calculate" onPress={handleCalculate} />
            {result.length > 0 && (
                <View style={styles.resultContainer}>
                    <Text style={styles.resultText}>Indices: {result.join(', ')}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    header: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginVertical: 8,
        borderRadius: 4,
    },
    resultContainer: {
        marginTop: 16,
        alignItems: 'center',
    },
    resultText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    noResult: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'red',
        fontSize: 20
    }
});

export default Question3;
