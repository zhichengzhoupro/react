import ActionTyps from '../actions/Action.types'

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
    avatarUrl?:string,
    displayName?: string

    isSignIn: boolean,
    isSignInLoading: boolean,

    avatarUploading?: boolean,
    avatarUploadError?: any
    avatarChanged?: boolean,

    userInfoLoading?: boolean,
    userInfoLoaded?: boolean,
    userInfoLoadError?: any

    isSignUp: boolean,
    isSignUpLoading: boolean,

}

const initState = {
    ...userInfo(),

    isSignIn: isSignIn,
    isSignInLoading: false,

    avatarUploading: false,
    avatarUploadError: '',
    avatarChanged: false,

    userInfoLoading: false,
    userInfoLoaded: false,
    userInfoLoadError: ''
}


export default (state:AuthentificationState = initState, action: any) => {
    switch (action.type) {
        case ActionTyps.SIGN_IN_SUCCESS:
            return {
                ...state,
                ...action.payload.userInfo,
                isSignIn: true,
                isSignInLoading: false
            };
            break;
        case ActionTyps.START_SIGN_IN:
            return {
                ...state,
                isSignIn : false,
                isSignInLoading: true
            }
            break;
        case ActionTyps.SIGN_IN_FAIL:
            return {
                ...state,
                isSignIn : false,
                isSignInLoading: false
            }
            break;
        case ActionTyps.SIGN_OUT:
            return {
                ...state,
                isSignIn : false,
                isSignInLoading: false
            }
            break;

        case ActionTyps.START_AVATAR_UPLOAD:
            return {
                ...state,
                avatarUploading: true
            }
            break;
        case ActionTyps.AVATAR_UPLOAD_SUCCESS:
            const newState ={
                ...state,
                ...action.payload,
                avatarUploading: false,
                avatarChanged: true,
            }
            return newState
            break;
        case ActionTyps.AVATAR_UPLOAD_SUCCESS:
            return {
                ...state,
                avatarUploadError: 'error',
                avatarUploading: false
            }
            break;
        case ActionTyps.START_GET_USERINFO:
            return {
                ...state,
                userInfoLoading: true,
                userInfoLoaded: false,
                userInfoLoadError: ''
            }
            break
        case ActionTyps.GET_USERINFO_SUCCESS:
            return {
                ...state,
                ...action.payload.userInfo,
                userInfoLoading: false,
                userInfoLoaded: true,
                userInfoLoadError: ''
            }
            break;
        case ActionTyps.GET_USERINFO_FAILED:
            return {
                ...state,
                userInfoLoading: false,
                userInfoLoaded: true,
                userInfoLoadError: action.payload.error
            }
            break;


        case ActionTyps.START_UPDATE_USERINFO:
            return {
                ...state,
                userInfoLoading: true,
                userInfoLoaded: false,
                userInfoLoadError: ''
            }
            break
        case ActionTyps.UPDATE_USERINFO_SUCCESS:
            let newVar = {
                ...state,
                ...action.payload.userInfo,
                userInfoLoading: false,
                userInfoLoaded: true,
                userInfoLoadError: '',
                avatarChanged: false,
            };
            return newVar
            break;
        case ActionTyps.UPDATE_USERINFO_FAILED:
            return {
                ...state,
                userInfoLoading: false,
                userInfoLoaded: true,
                userInfoLoadError: action.payload.error
            }
            break;


        default:
            return state;
    }
}