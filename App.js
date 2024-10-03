// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Button, SafeAreaView} from 'react-native';
import { useState } from 'react';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
	const [enteredGoal, setGoal] = useState('');
	const [goals, setGoalsList] = useState([]);
	const [showModal, setShowModal] = useState(false);
	function handleGoalInput(value) {
		setGoal(value);
	}
	
	function handleAddGoal() {
		setGoalsList(goals => [...goals, enteredGoal]);
		setShowModal(false);
	}
	function onDeleteGoal(index) {
		// console.log("in delete " + index);
		setGoalsList((prevList => {
			return prevList.filter((ele, ind) => ind !== index);
		}));
	}
	function toggleModal()
	{
		setShowModal(prev => !prev);
	}
	
	return (
		<View style={styles.container}>
			<Button title="Tap to Add Goal" onPress={toggleModal} />
			<GoalInput showModal={showModal} handleInput={handleGoalInput} handleSubmit={handleAddGoal} toggleModal={toggleModal}/>
				<View style={styles.goalsContainer}>
				
				<FlatList data={goals} renderItem={(itemData) => {
					return <GoalItem text={itemData.item} id={itemData.index} onDelete={onDeleteGoal}/>
				}} keyExtractor={(item, index) => {
					return index;
				}}/>

			</View>
		</View>
	);
}





const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: 50
	},
	goalsContainer: {
		flex: 4,
		// alignItems: "center",
		padding: 16

	}
});
