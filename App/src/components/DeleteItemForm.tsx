import { View, TextInput, Pressable, StyleSheet, Alert,Text } from 'react-native';
import { useAccount, useContractRead, useContractWrite } from 'wagmi';
import { ContractABI, ContractAddress } from '@/src/constants/utils';
import React, { useState } from 'react';

interface DeleteItemFormProps {
    onSubmit: (item: string) => Promise<void>;
    
}

const DeleteItemForm: React.FC<DeleteItemFormProps> = ({ onSubmit }) => {
    const [item, setItem] = useState('');
    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleDeleteItemSubmit = async () => {
        try {
            await onSubmit(item);
            setSnackbarMessage('Retailer added successfully');
            setItem('');
        } catch (error) {
            setSnackbarMessage('Error adding manufacturer');
        } finally {
            setSnackbarVisible(true);
            setTimeout(() => {
                setSnackbarVisible(false);
              }, 2000); // 2000 milliseconds = 2 seconds
            
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Product Id"
                keyboardType='numeric'
                value={item}
                onChangeText={setItem}
                style={styles.input}
                autoCapitalize="none"
                autoFocus
            />

            <Pressable style={styles.button} onPress={handleDeleteItemSubmit} > 
                <Text style= {styles.buttonText}> Delete </Text>
             </Pressable>

            {snackbarVisible && (
                <View style={styles.snackbar}>
                    <Text style={styles.snakbartext}>{snackbarMessage}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    input: {
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'blue',
    },
    snackbar: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        padding: 10,
        borderRadius: 5,
        position: 'absolute',
        bottom: 20,
        left: '50%',
        transform: [{ translateX: -50 }],
    },
    buttonText:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    snakbartext:{
        color:'orange'
    },
});

export default DeleteItemForm;
