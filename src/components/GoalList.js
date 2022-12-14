import * as React from 'react';
import FirstGoal from './goals/first-goal';
import SecondGoal from './goals/second-goal';
import ThirdGoal from './goals/third-goal';
import FourthGoal from './goals/fourth-goal';
import FifthGoal from './goals/fifth-goal';
import './GoalList.css';

function GoalList(){
    return(
        <div className='goal_list'>
            <h1>My Goals For This Book:</h1>
            <ol>
            <FirstGoal/>
            <SecondGoal/>
            <ThirdGoal/>
            <FourthGoal/>
            <FifthGoal/>
            </ol>
        </div>
    )
};
export default GoalList;
