import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {decAction, incAction, incCustomAction, resAction} from "./components/redux/action_creators";
import {onUserLoaded,OnAddToBad, OnRemoveFromBad} from "./components/redux/action_creators/user-action-creators"

const PhotosList = () => {
    const dispatch = useDispatch()
    const users = useSelector(({userReducer: {users}}) => users)
    const badEmployees = useSelector(({userReducer: {badEmployees}}) => badEmployees)

 const fetchPhoto = async () => {

     const resp = await fetch('https://dummyapi.io/data/api/user?limit=10', { headers: {
             'app-id': 'lTE5abbDxdjGplutvTuc'
         }});
     const json = await resp.json()
     console.log(json)

     dispatch(onUserLoaded(json.data))

 }
    useEffect(() => {
        if(!users.length)
        fetchPhoto()
    }, [])

    return(
       <div>
               {users.map(el => (<img style={{filter: badEmployees.includes(el.id) ? 'blur(3px)' : ''}}
                   onClick={() => {
                       const alreadyList = badEmployees.includes(el.id)
                       const answer = !alreadyList && window.confirm("Are You sure, DELETE?")
                       if(answer){
                        return dispatch(OnAddToBad(el.id))
                       }
                       alreadyList && dispatch(OnRemoveFromBad(el.id))
                   }}
                                      key = {el.id}
                                      src = {el.picture}
                                      alt={el.firstName}/>))}
       </div>
    )
}

function App() {
    const counter1 = useSelector(({counter1: {counter}}) => counter)
    const counter2 = useSelector(({counter2: {counter}}) => counter)
    const dispatch = useDispatch()

    return (
    <div className="App">
        {!!(counter1 % 2) && <PhotosList />}
        <h1>{counter1}</h1>
        <h1>{counter2}-2</h1>
        <button onClick={() => dispatch(incCustomAction(102))}>inc_custom</button>
        <button onClick={() => dispatch(incAction())}>inc</button>
        <button onClick={() => dispatch(decAction())}>dec</button>
        <button onClick={() => dispatch(resAction())}>reset</button>
    </div>
  );
}

export default App;
