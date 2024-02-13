export const ADD_TO_FAVOURITE= 'ADD_TO_FAVOURITE'
export const REMOVE_FROM_FAVOURITE= 'REMOVE_FROM_FAVOURITE'
export const SAVE_AVAILABLE_JOBS= 'SAVE_AVAILABLE_JOBS'



 export const addToFavouritesAction=(data)=>{
    return{
type:ADD_TO_FAVOURITE,
payload:data.company_name
    }
}
export const removeFromFavouritesAction=(data)=>{
    return{
        type:REMOVE_FROM_FAVOURITE,
        payload:data.company_name
    }
}
export const getJobActionCreator = (fetchedJobs) => {
    return async (dispatch, getState) => {
      // se normalmente un action creator torna solo un oggetto, "thunk" ci permette di ritornare ANCHE una funzione
      // la funzione verrà eseguita da Redux e verrà arricchita di 2 parametri: il metodo dispatch e il metodo getState
  
      console.log(getState())
      // getState, se invocato, ritorna lo stato corrente dello store di Redux
      // è una chicca che vi permette di basare determinate decisioni sull'attuale contenuto dello store
      // if (getState().cart.content.length < 3) {
      //   console.log(
      //     'finora hai aggiunto al carrello ' +
      //       getState().cart.content.length +
      //       ' libri'
      //   )
      // }
  
      try {
        let resp = await fetch(
          'https://strive-benchmark.herokuapp.com/api/jobs?company='
        )
        if (resp.ok) {
          let fetchedJobs = await resp.json()
          // setBooks(fetchedBooks) // ?
          // ora abbiamo i libri! dobbiamo spedirli al reducer
          dispatch({
            type: SAVE_AVAILABLE_JOBS,
            payload: fetchedJobs,
          })
        } else {
          console.log('error')
        }
      } catch (error) {
        console.log(error)
    //   } finally {
    //     dispatch({
    //       type: TURN_OFF_SPINNER,
    //     })
      }
    }
  }
