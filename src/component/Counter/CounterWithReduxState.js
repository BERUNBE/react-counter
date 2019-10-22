import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement, double, halve, reset} from '../action';

function CounterWithReduxState() {
    const counter = useSelector(state => state.counter);
    const isLogin = useSelector(state => state.isLogin);
    const dispatch = useDispatch();

    console.log(counter, isLogin);

    return(
        <div className="counter">
            {counter}
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <button onClick={()=>dispatch(double())}>*2</button>
            <button onClick={()=>dispatch(halve())}>/2</button>
            <button onClick={()=>dispatch(reset())}>R</button>
        </div>
    )
}

export default CounterWithReduxState;