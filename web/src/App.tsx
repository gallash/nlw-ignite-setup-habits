import { Habits } from "./components/Habits"
import { HabitTracker } from "./components/HabitsWithNumbers"

function App() {
  // Components might be called with their tags, simply. E.g.,
  // `return (<Habits />)`
  //However, for multiple compnent calls , wrap them in <div>
  //
  // Also, notice that there is another thing being passed 
  // jointly with HabitTracker. `habitsDoneCount` is a property
  // that was definied in the `HabitsWithNumbers.tsx` script.
  // Typescript already identified its type as being a number
  return (
    <div>
      <Habits />
      <p><HabitTracker habitsDoneCount={4}/> habits completed today.</p>
    </div>
  )
}

export default App
