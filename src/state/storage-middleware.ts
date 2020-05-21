// This is just in order to don't loose the data since we don't have any backend
const Persistence = (store: any) => (next: any) => (action: any) => {
    let result = next(action)
    localStorage.setItem('state', JSON.stringify(store.getState()));
    return result
}

export default Persistence
