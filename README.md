# React-redux
<h1>in this project what i have done?</h1>
<p>I have implemented react -redux ,how to manage the state using react redux,i have done all the basics like implementing redux via toolkit or without it as well </p>
<ul>
  <li>Auth management using redux </li>
    <li>counter to show basics</li>

</ul>
Q:Explain the core concepts of redux?
Tell the utilities of following
useDispatch
combineReducers
useSelector
When to use redux and when to use context API?

Ans::in redux we have a core state or store which contains reducer functions ,these reducer functions or the store 
is not dirrectly accesible to the component the component dispatchs the actions and after that after every state change the component will update itself
2:useDispatch is used to access the store indireclty from the component ,we use useConfigure to combine the multple reducers in sngle store and then we can export that store
useSelector is used to get the latest state from the store
3 its matter of choice but for bigger apps redux is simpler to use as compared to redux redux has better performance as well
