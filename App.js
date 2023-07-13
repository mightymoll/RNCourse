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
        <View style={styles.button}>
          <Button title='add goal' onPress={addGoalHandler} />
        </View>
      </View>
      <View style={styles.goalsContainer}>
        <Text style={styles.listTitle}>My Goals:</Text>
        {goalsList.map((goal) =>
          <View style={styles.goalItem} key={goal}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>)}
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
  button: {
    borderRadius: 6,
    backgroundColor: '#D4F4E9',
  },
  goalsContainer: {
    flex: 5,
  },
  listTitle: {
    fontStyle: 'bold',
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#69DBB3',
  },
  goalText: {
    padding: 8,
    color: 'white',
  },
});
