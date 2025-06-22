import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,

    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Image,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from '../styles/universalstyles';


export default function RegisterScreen({ navigation }) {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [instrumentOpen, setInstrumentOpen] = useState(false);
    const [instrument, setInstrument] = useState(null);
    const [instrumentItems, setInstrumentItems] = useState([
        { label: 'Guitar', value: 'guitar' },
        { label: 'Piano', value: 'piano' },
        { label: 'Flute', value: 'Flute' },
        { label: 'Tabla', value: 'Tabla' },
        { label: 'Harmonium', value: 'Harmonium' },
    ]);

    const [timeOpen, setTimeOpen] = useState(false);
    const [batchTime, setBatchTime] = useState(null);
    const [timeItems, setTimeItems] = useState([
        { label: 'Morning', value: 'morning' },
        { label: 'Evening', value: 'evening' },
    ]);

    const [typeOpen, setTypeOpen] = useState(false);
    const [batchType, setBatchType] = useState(null);
    const [typeItems, setTypeItems] = useState([
        { label: 'Online', value: 'online' },
        { label: 'Offline', value: 'offline' },
    ]);

    const handleRegister = () => {
        if (
            !fullName || !email || !contact || !password || !confirmPassword ||
            !instrument || !batchTime || !batchType
        ) {
            Alert.alert('All fields are required.');
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert('Passwords do not match.');
            return;
        }

        // TODO: Registration logic
        Alert.alert('Registered successfully!');
        navigation.navigate('Login');
    };

    return (

        <KeyboardAvoidingView
            style={styles.rcontainer}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

            <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">

                {/* <View style={styles.container}> */}
                <Image source={require('../assets/logowithoutbackground.png')}
                    style={[styles.logo]}
                />
                <Text style={styles.title}>Register</Text>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Full Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Full Name"
                        placeholderTextColor="#6B7280"
                        value={fullName}
                        onChangeText={setFullName}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#6B7280"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Contact Number</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Contact Number"
                        placeholderTextColor="#6B7280"
                        keyboardType="phone-pad"
                        value={contact}
                        onChangeText={setContact}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#6B7280"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Confirm Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm Password"
                        placeholderTextColor="#6B7280"
                        secureTextEntry
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Preferred Instrument</Text>
                    <DropDownPicker
                        open={instrumentOpen}
                        value={instrument}
                        items={instrumentItems}
                        setOpen={setInstrumentOpen}
                        setValue={setInstrument}
                        setItems={setInstrumentItems}
                        placeholder="Select Instrument"
                        style={styles.dropdown}
                        dropDownContainerStyle={styles.dropdownContainer}
                        textStyle={{ color: '#1F2937' }}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Batch Time</Text>
                    <DropDownPicker
                        open={timeOpen}
                        value={batchTime}
                        items={timeItems}
                        setOpen={setTimeOpen}
                        setValue={setBatchTime}
                        setItems={setTimeItems}
                        placeholder="Select Time"
                        style={styles.dropdown}
                        dropDownContainerStyle={styles.dropdownContainer}
                        textStyle={{ color: '#1F2937' }}
                    />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Batch Type</Text>
                    <DropDownPicker
                        open={typeOpen}
                        value={batchType}
                        items={typeItems}
                        setOpen={setTypeOpen}
                        setValue={setBatchType}
                        setItems={setTypeItems}
                        placeholder="Select Type"
                        style={styles.dropdown}
                        dropDownContainerStyle={styles.dropdownContainer}
                        textStyle={{ color: '#1F2937' }}
                    />
                </View>

                <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
                    <Text style={styles.loginButtonText}>SUBMIT</Text>
                </TouchableOpacity>

                <View style={styles.linkContainer}>
                    <Text style={styles.linkText}>
                        Already registered?{' '}
                        <Text style={styles.linkAction} onPress={() => navigation.navigate('Login')}>
                            Login
                        </Text>
                    </Text>
                </View>


            </ScrollView>
        </KeyboardAvoidingView >
    );
}
