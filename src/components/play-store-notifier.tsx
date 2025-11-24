'use client';

import { useEffect } from 'react';
import { Capacitor } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import InstallerInfo from '../plugins/InstallerInfoPlugin';

const PlayStoreNotifier = () => {
  useEffect(() => {
    const showPlayStoreNotification = async () => {
      // Run only on Android
      if (Capacitor.getPlatform() !== 'android') {
        return;
      }

      try {
        const { installerPackageName } = await InstallerInfo.getInstallerPackageName();

        // Only proceed if installed from Google Play
        if (installerPackageName === 'com.android.vending') {
          const notificationShown = localStorage.getItem('playStoreNotificationShown');
          if (notificationShown) {
            return;
          }

          // Request permissions
          const permissions = await LocalNotifications.requestPermissions();
          if (permissions.display === 'granted') {
            // Schedule notification
            await LocalNotifications.schedule({
              notifications: [
                {
                  title: "Now on Google Play!",
                  body: "Find our official app on the Google Play Store for the latest updates and features.",
                  id: 1,
                  schedule: { at: new Date(Date.now() + 1000 * 5) }, // 5 seconds from now
                  sound: undefined,
                  attachments: undefined,
                  actionTypeId: '',
                  extra: null,
                },
              ],
            });

            // Mark as shown
            localStorage.setItem('playStoreNotificationShown', 'true');
          }
        }
      } catch (error) {
        console.error("Could not verify installer, skipping notification:", error);
      }
    };

    showPlayStoreNotification();
  }, []);

  return null; // This component does not render anything
};

export default PlayStoreNotifier;
