import { StyleSheet, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
  const [goalText, setGoalText] = useState('');

  // update new goal text to match user input
  function goalInputHandler(enteredText) {
    setGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(goalText);
    setGoalText('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder='goal'
        onChangeText={goalInputHandler}
        value={goalText}
      />
      <View style={styles.button}>
        <Button title='add goal' onPress={addGoalHandler} />
      </View>
    </View>
  )
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  button: {
    borderRadius: 6,
    backgroundColor: '#D4F4E9',
  },
})
