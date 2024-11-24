import { Text, View, Image, StyleSheet } from 'react-native';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';

export default function GameOver({ userNum, rounds, startNewGame }) {
	return (
		<View style={styles.rootContainer}>
			<Title text='Game Over' />
			<View style={styles.imageContainer}>
				<Image
					style={styles.image}
					source={require('../assets/images/success.png')}
				/>
			</View>
			<Text>
				CPU took {rounds} attempts to guess your number {userNum}.
			</Text>
			<PrimaryButton onPress={startNewGame}>
				Start a New Game
			</PrimaryButton>
		</View>
	);
}

const styles = StyleSheet.create({
	imageContainer: {
		width: 400,
		height: 400,
		borderRadius: 150,
		overflow: 'hidden',
		margin: 16,
	},
	rootContainer: {
		flex: 1,
		alignItems: 'center',
	},
	image: {
		width: '100%',
		height: '100%',
	},
});
