import { Text, View, StyleSheet, Pressable} from 'react-native';


function PrimaryButton({children, onPress})
{
	return (
		<View style={styles.buttonView}>
			<Pressable style={({pressed}) => pressed ? [styles.pressed, styles.pressable] : styles.pressable} android_ripple={{color: 'darkgreen'}} onPress={onPress}>
			<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
		
	);

}

export default PrimaryButton;

const styles = StyleSheet.create({
	buttonView: {
		overflow: 'hidden',
		borderRadius: 28,
		
		backgroundColor: 'lightgreen',
		

	},
	pressable: {
		padding: 8,
		elevation: 2

	},
	buttonText: {

        color: 'white',
        textAlign: 'center'
	},
	pressed: {
		opacity: 0.75
	}

})

