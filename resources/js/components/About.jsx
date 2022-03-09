import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Increment } from '../actions/actions';

const About = () =>{
    const incstate = useSelector((state)=>{
        return state.IncrementDecrement;
    });
    let dp = useDispatch();
    return(

        <>
<h4>This is about{incstate}</h4>
<button className="btn btn-primary" onClick={(e)=>{dp(Increment())}}>Increment</button>
        </>
    );
}
export default About;