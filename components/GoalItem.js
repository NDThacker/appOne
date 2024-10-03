import { StyleSheet, View, Text, Pressable } from 'react-native';



export default function GoalItem({text, id, onDelete}) {
	return (
		<View style={styles.goalItem}>
		<Pressable onPress={onDelete.bind(this, id)} android_ripple={{ color: '#5a0ee' }} style={(pressedData) => pressedData.pressed && styles.pressediOS}>
			<Text style={styles.goalText}>{text}</Text>
		</Pressable>
		</View>

	);
}




const styles = StyleSheet.create({
	goalItem: {
		backgroundColor: '#5a0ecc',
		margin: 6,
		padding: 3,
		borderRadius: 6,
		width: '70%'
	},
	goalText: {
		color: 'white'
	},
	pressediOS: {
		opacity: 0.5
	}

})