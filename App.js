import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  // create state to store user's new goal text
  const [goalsList, setGoalsList] = useState([]);

  // add new input (goalText) to list of goals (goalsList)
  function addGoalHandler(enteredText) {
    setGoalsList((currentGoalsList) => [
      ...currentGoalsList,
      // text to be added to list is converted to an object with a unique id
      { text: enteredText, id: Math.random().toString() }
    ]);
  }

  // filter out (remove) item id matching clicked goal from goal list
  function deleteGoalHandler(id) {
    setGoalsList(currentGoalsList => {
      return currentGoalsList.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <Text style={styles.listTitle}>My Goals:</Text>
        <FlatList
          data={goalsList}
          renderItem={(itemData) => {
            return <GoalItem
              text={itemData.item.text}
              id={itemData.item.id}
              onDeleteItem={deleteGoalHandler} />
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
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
  goalsContainer: {
    flex: 5,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: '600',
    fontStyle: 'italic',
    marginBottom: 8,
  },
});
