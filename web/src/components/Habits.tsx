interface habitCount{ // Type
    count: number
}

// Don't forget, components names start with upper case (this is
// how differentiates)
export function Habits(props: habitCount){ 
    /*  'props' is like '*args' and '**kwargs' in Python. All
    properties passed to the tag will be passed to the props 
    argument here, which in its turn has the habitCount 
    interface, or type, or struct
    
    This is a component. Remember that components are basically
    functions that export reusable HTML. Useful for keeping
    patterns. And naturally they can be modified fit various 
    needs. The modifications can be done by using the properties

    It was already stated in the `tailwind.config.cjs` file that
    all .tsx files will have access to Tailwind styles. So it is 
    just a matter of using them in `className` (where we pass
    CSS classes to HTML components, in the React world)
    */
    return (
        <div className="bg-sky-400 w-4 h-4 text-white rounded m-1 flex items-center justify-center">{props.count}</div>
    )
}




// +++ The following component is no longer used, but I left it 
// here for future reference +++ 

/* This is the second component that I do. Here I am creating it 
with properties. Remember, the two most important things I should
keep in mind about components are:
> Components: return reusable HTML (that can be modified)
> Properties: alter the HTML to some extent
*/

// Property definition
// interface habitTracker{
//     habitsDoneCount: number;
// }


// Definition and exportation of component
// export function HabitTracker(props: habitTracker){
//     return (
//         <p>{props.habitsDoneCount}</p>
//     )
// }