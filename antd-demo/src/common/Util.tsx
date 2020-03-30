const removeAuthentificationFromStorage =  () => {
    window.localStorage.removeItem('accessToken');
    window.sessionStorage.removeItem('accessToken');
}


export  {
    removeAuthentificationFromStorage
}