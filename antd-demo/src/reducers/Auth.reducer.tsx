import ActionTyps from '../actions/Action.types'
import {removeAuthentificationFromStorage} from "../common/Util";

const isSignIn = (Boolean('accessToken' in window.localStorage ) || Boolean('accessToken' in window.sessionStorage ));

const userInfo = () => {
    if(Boolean('userInfo' in window.localStorage )) {
       return JSON.parse(window.localStorage['userInfo'])
    }
    if(Boolean('userInfo' in window.sessionStorage )) {
        return JSON.parse(window.sessionStorage['userInfo'])
    }
    return {}
}

interface AuthentificationState {
    id?: string,
    username?: string,
    role?: string,
    isSignIn: boolean,
    isSignInLoading: boolean,
}

const initState = {
    ...userInfo(),
    isSignIn: isSignIn,
    isSignInLoading: false,
}


export default (state:AuthentificationState = initState, action: any) => {
    switch (action.type) {
        case ActionTyps.SIGN_IN_SUCCESS:
            return {
                ...action.payload.userInfo,
                isSignIn: true,
                isSignInLoading: false
            };
            break;
        case ActionTyps.START_SIGN_IN:
            return {
                isSignIn : false,
                isSignInLoading: true
            }
            break;
        case ActionTyps.SIGN_IN_FAIL:
            return {
                isSignIn : false,
                isSignInLoading: false
            }
            break;
        case ActionTyps.SIGN_OUT:
            return {
                isSignIn : false,
                isSignInLoading: false
            }
            break;
        default:
            return state;
    }
}