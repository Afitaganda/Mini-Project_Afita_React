const useLoginChecker = () => {
    let isLoggedIn = false

    if (typeof window != "undefined") {
        const checkLogin = window.localStorage.getItem('isLoggedIn')
        return (checkLogin === 'true');
    }
    return {
        isLoggedIn
    }
        
}

export default useLoginChecker