import {serviceWithOutInterceptor} from "./common.service"


export const signIn = (user: {username: string, password: string }) => {

    return serviceWithOutInterceptor.post('/auth/signin', {...user});
}