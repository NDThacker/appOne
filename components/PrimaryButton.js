import { Text, View, StyleSheet } from 'react-native';


function PrimaryButton({children})
{
	return (
		<View>
			<Text>{children}</Text>
		</View>
	);

}

export default PrimaryButton;

const styles = StyleSheet.create({
	buttonView: {
		minWidth: 64
	}
})

