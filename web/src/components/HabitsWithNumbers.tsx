/* This is the second component that I do. Here I am creating it 
with properties. Remember, the two most important things I should
keep in mind about components are:

> Components: return reusable HTML (that can be modified)
> Properties: alter the HTML to some extent
*/

// Property definition
interface habitTracker{
    habitsDoneCount: number;
}


// Definition and exportation of component
export function HabitTracker(props: habitTracker){
    return (
        <p>{props.habitsDoneCount}</p>
    )
}