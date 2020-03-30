import ActionType from "./Action.types";
import {AuthService} from '../services/service'
import {removeAuthentificationFromStorage} from'../common/Util'

export const signIn = (user :{username: string, password: string, remember: boolean}) => {
    console.log('in');
    return (dispatch: any) => {
        dispatch(startSignIn());
        AuthService
            .signIn(user)
            .then((resp:any) => {
                if(resp.status) {
                    dispatch(signSuccess({
                        ...resp.data,
                        remember : user.remember
                    }));
                    console.log('user.remember', user.remember);
                    if(user.remember) {
                        console.log( resp.data.accessToken);
                        window.localStorage.setItem('accessToken', resp.data.accessToken);
                    } else {
                        window.sessionStorage.setItem('accessToken', resp.data.accessToken)
                    }

                }
            }).catch(() => {
            dispatch(signInFailed());
        }).finally(() => {

        });
    }
}

const startSignIn = () => {
    return {
        type: ActionType.START_SIGN_IN
    }
}

const signSuccess = (data:any) => {
    return {
        type: ActionType.SIGN_IN_SUCCESS,
        payload: {
            accessToken : data.accessToken,
            userInfo: data.userInfo

        }
    }
}

const signInFailed = () => {
    removeAuthentificationFromStorage();
    return {
        type: ActionType.SIGN_IN_FAIL
    }
}

export const signOut = () => {
    removeAuthentificationFromStorage();
    return {
        type: ActionType.SIGN_OUT
    }
}



