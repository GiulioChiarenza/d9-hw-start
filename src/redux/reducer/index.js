const initialState = {
    job: {
      favourites: [], // array di libri nel carrello
    },
  }
  
  const mainReducer = (state = initialState, action) => {
    // questa è una funzione in carico di ritornare SEMPRE il nuovo stato dell'applicativo
    // la nuova "palla da bowling", sigillata, atomica, read-only, immutabile, etc.
    // quasi sempre la funzione reducer sarà composta da uno SWITCH CASE
    switch (action.type) {
      // "type" è l'unica proprietà OBBLIGATORIA di una action
  
      // cominciare a specificare un po' di "binari"
      case 'ADD_TO_FAVOURITES':
        // state.cart.content.push(action.payload) // VIETATISSIMA!
        // in un reducer, poichè è una funzione PURA, non si possono usare metodi che ALTERANO
        // i parametri (in particolare l'oggetto state)
        return {
          ...state,
          job: {
            ...state.favourites,
            // copio anche il contenuto di cart, perchè magari in un futuro vi aggiungerò proprietà!
            // 2 modi per aggiungere un elemento ad un array senza usare push (che è vietato)
            // content: state.cart.content.concat(action.payload) // 1)
            favourites: [...state.job.favourites, action.payload], // 2)
          },
        }
  
  
      default:
        return state
      // nella peggiore delle ipotesi, il nostro robottino tornerà come nuovo stato
      // l'ultimo stato valido, senza apportare nessuna modifica (o senza rompere niente)
    }
  }
  
  export default mainReducer