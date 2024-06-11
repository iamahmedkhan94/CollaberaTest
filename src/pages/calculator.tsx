import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Calculator = () => {
    const [firstNumber, setFirstNumber] = useState<string>('');
    const [secondNumber, setSecondNumber] = useState<string>('');
    const [total, setTotal] = useState<number | null>(null);

    const handleAddition = () => {
        const sum = parseFloat(firstNumber) + parseFloat(secondNumber);
        setTotal(sum);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Adding Two Numbers</Text>
            <TextInput
                style={styles.input}
                placeholder="First Number"
                keyboardType="numeric"
                value={firstNumber}
                onChangeText={setFirstNumber}
            />
            <TextInput
                style={styles.input}
                placeholder="Second Number"
                keyboardType="numeric"
                value={secondNumber}
                onChangeText={setSecondNumber}
            />
            <Button title="Add Two Numbers" onPress={handleAddition} />
            <Text style={styles.total}>Total: {total !== null ? total : ''}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    total: {
        marginTop: 20,
        fontSize: 18,
    },
});

export default Calculator;
