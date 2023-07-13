import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  // create state to store user's new goal text
  const [goalText, setGoalText] = useState('');
  const [goalsList, setGoalsList] = useState([]);

  // update new goal text to match user input
  function goalInputHandler(enteredText) {
    setGoalText(enteredText)
  }

  // add new input (goalText) to list of goals (goalsList)
  function addGoalHandler() {
    setGoalsList((currentGoalsList) => [...currentGoalsList, goalText]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='goal' onChangeText={goalInputHandler} />
        <Button title='add goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {goalsList.map((goal) => <Text key={goal}>{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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
  goalsContainer: {
    flex: 5,
  },
});
