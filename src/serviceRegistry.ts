import { get } from 'lodash';
import { config } from "./config";

export function getServiceHost(apiVersion: string, serviceName: string): string {
  return get(config, `[${apiVersion}][${serviceName}]`);
}
