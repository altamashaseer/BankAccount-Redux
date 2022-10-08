import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';
import { useSelector } from 'react-redux'

const Shop = () => {
  const balance = useSelector(state=>state.amount)

  const dispatch =useDispatch();
  const {withdrawMoney, depositMoney} =bindActionCreators(actionCreators, dispatch) //destructuring
  
  return (
    <div>
      <h2 className='my-3'>Deposite/Withdraw</h2>
      {/* Using bindActionCreators  */}
        <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(10)}}>-</button>
        Account Balance : {balance}
        <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(10)}}>+</button>
        {/* <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(10))}}>-</button>
        Add to cart : 10$
        <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.depositMoney(10))}}>+</button> */}
    </div>
  )
}

export default Shop