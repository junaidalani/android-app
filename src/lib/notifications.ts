// src/lib/notifications.ts
import { LocalNotifications } from '@capacitor/local-notifications';

export const requestNotificationPermission = async () => {
  try {
    const permission = await LocalNotifications.requestPermissions();
    if (permission.display !== 'granted') {
      throw new Error('Notification permission not granted');
    }
    return permission;
  } catch (error) {
    console.error('Error requesting notification permission:', error);
    throw error;
  }
};

export const scheduleNotification = async (time: string, type: 'morning' | 'evening') => {
  try {
    // Request permission first
    await requestNotificationPermission();

    // Parse time
    const [hours, minutes] = time.split(':').map(num => parseInt(num, 10));
    const now = new Date();
    const notificationTime = new Date();
    
    notificationTime.setHours(hours, minutes, 0, 0);
    
    // If time has passed today, schedule for tomorrow
    if (notificationTime <= now) {
      notificationTime.setDate(notificationTime.getDate() + 1);
    }

    const notificationId = type === 'morning' ? 1 : 2;
    const title = type === 'morning' ? 'أذكار الصباح' : 'أذكار المساء';
    const body = type === 'morning' ? 'حان وقت أذكار الصباح' : 'حان وقت أذكار المساء';

    // Cancel any existing notification of this type
    await cancelNotification(type);

    // Schedule new notification (no repeats, only once)
    await LocalNotifications.schedule({
      notifications: [
        {
          id: notificationId,
          title,
          body,
          schedule: {
            at: notificationTime,
            repeats: false
          },
          sound: 'beep.wav',
          smallIcon: 'ic_book', // Use your custom book icon name here
          iconColor: '#488AFF',
          actionTypeId: `adhkar-${type}`,
          extra: {
            type: type
          }
        }
      ]
    });

    console.log(`Scheduled ${type} notification for ${time}`);
    return true;
  } catch (error) {
    console.error(`Error scheduling ${type} notification:`, error);
    throw error;
  }
};

export const cancelNotification = async (type: 'morning' | 'evening') => {
  try {
    const notificationId = type === 'morning' ? 1 : 2;
    await LocalNotifications.cancel({
      notifications: [{ id: notificationId }]
    });
    console.log(`Cancelled ${type} notification`);
  } catch (error) {
    console.error(`Error cancelling ${type} notification:`, error);
  }
};

export const cancelAllNotifications = async () => {
  try {
    await LocalNotifications.cancel({
      notifications: [{ id: 1 }, { id: 2 }]
    });
    console.log('Cancelled all notifications');
  } catch (error) {
    console.error('Error cancelling all notifications:', error);
  }
};
