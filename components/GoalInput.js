import { StyleSheet, View, TextInput, Button, Modal , Image} from 'react-native';




export default function GoalInput({ handleInput, handleSubmit, showModal, toggleModal}) {
	return (
		<Modal animationType="fade" visible={showModal}>
			<View style={styles.inputContainer}>
				<Image style={styles.image} source={require('../assets/images/goal.png')} />
				<TextInput placeholder="Enter your goal" style={styles.textContainer} onChangeText={handleInput}></TextInput>
				
			<View style={styles.buttonContainer }>
				<Button title="Add Goal" color={"blue"} onPress={handleSubmit} />
				<Button title="Cancel" color={"blue"} onPress={toggleModal} />
			</View>
		</View>
		</Modal>
	);

}



const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		marginTop: 32,
		justifyContent: "center",
		// padding: 24,
		alignItems: "center",
		// borderBottomWidth: 2,
		// borderBottomColor: '#cccccc',
		gap: 8,
		backgroundColor: 'skyblue'
	},
	textContainer: {
		// color:'black',
		borderBottomColor: 'blue',
		borderBottomWidth: 1,
		width: 150,
		textAlign: 'center'
	},
	buttonContainer: {
		flexDirection: 'row',
		gap: 16

	},
	image:{
		
		width: 100,
		height: 100
	}

})
















