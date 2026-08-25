import React, {useReducer, useEffect} from 'react'

const FETCH_INIT = "FECTH_INIT"
const FETCH_START = "FETCH_START"
const FETCH_ERROR = "FETCH_ERROR"

const initialSatte = {
    loading: true,
    data: null,
    error: null
}

const dataReducer = (atate, action) => {
    switch (action.type) {
        case FETCH_INIT:
            return{...state, loading: true, error: null}
            case FETCH_START:
                return{...state, loading: false, data:action.payload}
                case FETCH_ERROR:
                    return{...state, loading: false, error:action.payload}
                  

                    default:
                       return state;
    }
}

const MultiState = () => {
    const[state, dispatch] = useReducer(dataReducer, initialState)
    const dataHandler = async() => {
        try {
          dispatch({type:FETCH_INIT })
        const response = await fetch ("https://jsonplaceholder.typicode.com/users")
        const newData = awaitresponse.json()
        dispatch({type:FETCH_START, payload: newData})  
        } catch (error) {
            dispatch({type:FETCH_ERROR })
        }
    }

    useEffect(() => {
       console.log (dataHandler())

    }, [])

    return (
        <div>MultiState</div>
    )
}

export default MultiState