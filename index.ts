import * as collection from 'berish-collection';

const scopes = new collection.Dictionary<string, collection.Dictionary<any, any>>();

export function getSingletonInitialized<T>(classComponent: new (...args) => T, scope?: string): T {
  let singletons = getSingletonCollection(scope);
  if (singletons.containsKey(classComponent)) return singletons.get(classComponent);
  return null;
}

export function getSingleton<T>(classComponent: new (...args) => T, scope?: string, ...args): T {
  let singletons = getSingletonCollection(scope);
  if (!singletons.containsKey(classComponent)) singletons.add(classComponent, new classComponent(...args));
  return getSingletonInitialized(classComponent, scope);
}

export function getSingletonCollection(scope?: string) {
  scope = scope || 'default';
  if (!scopes.containsKey(scope)) scopes.add(scope, new collection.Dictionary());
  return scopes.get(scope);
}
