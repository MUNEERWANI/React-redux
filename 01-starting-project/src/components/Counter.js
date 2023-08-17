import classes from './Counter.module.css';
import {useSelector,useDispatch } from 'react-redux'
import { counterActions } from '../store/index';

const Counter = () => {
  const dispatch=useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show= useSelector(state=>state.counter.showCounter)
  const incrementHandler=()=>{
    dispatch(counterActions.increment())
  }
  const increaseHandler=()=>{
    dispatch(counterActions.increase(10))
  }

  const decrementHandler=()=>{
    dispatch(counterActions.decrement())
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show&&  <div className={classes.value}>{counter}</div>}
    
      <button onClick={incrementHandler}>increment</button>
      <button onClick={increaseHandler}>increment by 5</button>

      <button onClick={decrementHandler}>decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
