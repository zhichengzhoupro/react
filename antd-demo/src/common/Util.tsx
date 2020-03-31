const removeAuthentificationFromStorage =  () => {
    window.localStorage.removeItem('accessToken');
    window.sessionStorage.removeItem('accessToken');
    window.localStorage.removeItem('userInfo');
    window.sessionStorage.removeItem('userInfo');
}


export  {
    removeAuthentificationFromStorage
}