import { registerPlugin } from '@capacitor/core';

export interface InstallerInfoPlugin {
  getInstallerPackageName(): Promise<{ installerPackageName: string | null }>;
}

const InstallerInfo = registerPlugin<InstallerInfoPlugin>('InstallerInfo');

export default InstallerInfo;
