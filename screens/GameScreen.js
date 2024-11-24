import { Text, View, StyleSheet, FlatList } from 'react-native';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

let lower = 1;
let higher = 99;
export default function GameScreen({ userNumber, endGame }) {
	//   const [min, setMin] = useState(1);
	//   const [max, setMax] = useState(99);
	const guess = randomNumber(lower, higher);
	const [deviceGuess, setGuess] = useState(guess);
	const [rounds, setRounds] = useState([guess]);

	useEffect(() => {
		if (userNumber == deviceGuess) {
			lower = 1;
			higher = 99;
			endGame(rounds.length);
		}
	});

	function onHigher() {
		lower = deviceGuess + 1;
		let newGuess = randomNumber(lower, higher);
		setGuess(newGuess);
		setRounds([newGuess, ...rounds]);
	}
	function onLower() {
		higher = deviceGuess;
		newGuess = randomNumber(lower, higher);
		setGuess(newGuess);
		setRounds([newGuess, ...rounds]);
	}

	return (
		<View style={styles.gameView}>
			<View style={styles.titleContainer}>
				<Title text='Opponents Guess' />
			</View>
			<Text style={styles.guessText}>{deviceGuess}</Text>
			<View>
				<Text>Higher or lower?</Text>
				<View style={styles.buttonGroup}>
					<PrimaryButton onPress={onHigher}>
						<Ionicons name='add' size={24} color='white' />
					</PrimaryButton>
					<PrimaryButton onPress={onLower}>
						<Ionicons name='remove' size={24} color='white' />
					</PrimaryButton>
				</View>
				<FlatList
					data={rounds}
					keyExtractor={(item, ind) => ind}
					renderItem={(itemdata) => <Text>{itemdata.item}</Text>}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	guessText: {
		fontFamily: 'open-sans-bold',
		fontSize: 24,
		textAlign: 'center',
		color: '#5022d0',
	},
	titleContainer: {
		borderWidth: 2,
		borderColor: '#f11154',
		// maxWidth: "80%",
		padding: 8,
	},
	gameView: {
		flex: 1,
		alignItems: 'center',
	},
	buttonGroup: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		maxHeight: 40,
	},
	button: {},
});
