/*eslint-disable no-unused-vars */

import React from 'react'
import {} from './main'

export default class Counter extends React.Component{

    render(){
        console.log(this.props)
        const {onIncrease,onDecrease,value}=this.props;
        return (
            <div>
                <button onClick={onIncrease}>
                    increase
                </button>
                {''}
                <button onClick={onDecrease}>
                    decrease
                </button>
                <br/>
                <span>
                    {value}
                </span>
            </div>
        )
    }
}