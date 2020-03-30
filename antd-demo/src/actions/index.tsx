import * as NotificationAction from './Notification.action.creators'
import * as AuthentificationAction  from './Authentification.action.creators'

export default {
    notificationAction_markNotificationAsReadById: NotificationAction.markNotificationAsReadById,
    notificationAction_markAllNotifications: NotificationAction.markNotifications,
    notificationAction_startNotificationLoading: NotificationAction.startNotificationLoading,
    notificationAction_endNotificationLoading: NotificationAction.endNotificationLoading,
    notificationAction_getNotifications: NotificationAction.getNotifications,

    authAction_signIn: AuthentificationAction.signIn,
    authAction_signOut: AuthentificationAction.signOut
}