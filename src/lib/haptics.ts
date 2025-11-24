// src/lib/haptics.ts
import { Haptics, ImpactStyle } from '@capacitor/haptics';

export const triggerHapticFeedback = async (style: 'light' | 'medium' | 'heavy' = 'medium') => {
  try {
    let impactStyle: ImpactStyle;
    
    switch (style) {
      case 'light':
        impactStyle = ImpactStyle.Light;
        break;
      case 'heavy':
        impactStyle = ImpactStyle.Heavy;
        break;
      default:
        impactStyle = ImpactStyle.Medium;
    }

    await Haptics.impact({ style: impactStyle });
  } catch (error) {
    console.log('Haptics not available, falling back to web vibration');
    // Fallback to web vibration API
    if (typeof window !== 'undefined' && window.navigator.vibrate) {
      const duration = style === 'light' ? 50 : style === 'heavy' ? 200 : 100;
      window.navigator.vibrate(duration);
    }
  }
};

export const triggerNotificationHaptic = async () => {
  try {
    await Haptics.notification({ type: 'SUCCESS' });
  } catch (error) {
    console.log('Haptics not available, using impact feedback');
    await triggerHapticFeedback('medium');
  }
};

export const triggerSelectionHaptic = async () => {
  try {
    await Haptics.selectionChanged();
  } catch (error) {
    console.log('Haptics not available, using light impact');
    await triggerHapticFeedback('light');
  }
};