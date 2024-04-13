import {Action, Reducer} from "redux"
interface Movie {
    id:number,
    title: string,
    popularity: number,
    overview: string
}

interface MovieState{
    top:Movie[]
}

const initialState: MovieState = {
    top:[
        {id:1, title:"Inceptions", popularity:98, overview:"Dreams..."},
        {id:2, title:"The Gotfather", popularity:97, overview:"Gotfather..."},
        {id:3, title:"The Dark Knight", popularity:96, overview:"Batman..."} ]
}

function moviesReduser:Reducer<MovieState, Action> = (state: , action) => {
    return initialState
    
}

export default rootReduser