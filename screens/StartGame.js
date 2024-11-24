import PrimaryButton from '../components/PrimaryButton';
import { TextInput, View, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';

export default function StartGame({ pickNumber }) {
	const [number, setNumber] = useState('');

	function handleNumberChange(numberText) {
		setNumber(numberText);
	}

	function handleConfirm() {
		let val = parseInt(number);
		if (isNaN(val) || val <= 0 || val > 99) {
			Alert.alert('Invalid Input', 'Number should be between 1 to 99', [
				{ text: 'OK', style: 'destructive', onPress: handleReset },
			]);
			return;
		}
		// console.log('Valid');
		pickNumber(number);
	}

	function handleReset() {
		setNumber('');
	}

	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.textBox}
				maxLength={2}
				keyboardType='number-pad'
				autoCapitalize='none'
				autoCorrect={false}
				value={number}
				onChangeText={handleNumberChange}
			/>
			<View style={styles.buttonContainer}>
				<View style={styles.Abutton}>
					<PrimaryButton onPress={handleConfirm}>
						Confirm
					</PrimaryButton>
				</View>
				<View style={styles.Abutton}>
					<PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
				</View>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	inputContainer: {
		// flex: 1,
		gap: 12,
		positon: 'absolute',
		top: 200,
		padding: 16,
		backgroundColor: 'darkgray',
		marginHorizontal: 16,
		elevation: 6,
		shadowColor: 'darkgray',
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowOpacity: 0.25,
		borderRadius: 8,
		alignItems: 'center',
	},
	textBox: {
		borderBottomWidth: 1,
		borderBottomColor: 'black',
		width: 40,
		fontSize: 18,
	},
	buttonContainer: {
		flexDirection: 'row',
		gap: 4,
	},
	Abutton: {
		flex: 1,
	},
});
