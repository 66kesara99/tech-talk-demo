export type Locate = (key: string) => unknown;

export class ServiceLocator {
  services: Record<string, unknown> = {};

  register = (key: string, service: unknown) => {
    this.services[key] = service;
  };

  resolve = (key: string) => {
    return this.services[key];
  };
}
