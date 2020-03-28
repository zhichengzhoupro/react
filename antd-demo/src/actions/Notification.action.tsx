import actionType from './Action.types'


export const markNotificationAsReadById = (id: number) => {
    return (dispatch: any) => {
        dispatch(startNotificationLoading());
        setTimeout(() => {
            dispatch({
                type:actionType.MARK_NOTIFICATION_AS_READ_BY_ID,
                payload: {
                    id
                }
            });
            dispatch(endNotificationLoading())
        }, 1000)
    }
}

export const markNotifications = () => {
    return (dispatch: any) => {
        dispatch(startNotificationLoading());
        setTimeout(() => {
            dispatch({
                type:actionType.MARK_ALL_NOTIFICATIONS
            });
            dispatch(endNotificationLoading());
        }, 1000)
    }
}

export const startNotificationLoading = () => {
    return {
        type:actionType.START_NOTIFICATION_LOADING
    }
}

export const endNotificationLoading = () => {
    return {
        type:actionType.END_NOTIFICATION_LOADING
    }
}