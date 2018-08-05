import { get } from 'lodash';

const CONFIG: any = {
  '0.1': {
    'lexio-authentication': 'http://lexio-authentication:3010',
    'lexio-user': 'http://lexio-authentication:3010', // @Todo separate authentication and user
    'lexio-game': 'http://lexio-game:3010',
    'lexio-purchase': 'http://lexio-purchase:3010',
    'lexio-notification': 'http://lexio-notification:3010',
    'lexio-social': 'http://lexio-social:3010'
  },
  '1.0': {
    'lexio-authentication': 'http://lexio-authentication:3010',
    'lexio-user': 'http://lexio-authentication:3010',
    'lexio-game': 'http://lexio-game2:3000',  // <=================== lexio-game2
    'lexio-purchase': 'http://lexio-purchase:3010',
    'lexio-notification': 'http://lexio-notification:3010',
    'lexio-social': 'http://lexio-social:3010',
  }
};

export function getServiceHost(apiVersion: string, serviceName: string): string {
  return get(CONFIG, `[${apiVersion}][${serviceName}]`);
}
