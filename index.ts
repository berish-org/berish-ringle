import * as collection from 'berish-collection';

const singletons = new collection.Dictionary<any, any>();

export function getSingletonInitialized<T>(classComponent: new (...args) => T): T {
  if (singletons.containsKey) return singletons.get(classComponent);
  return null;
}

export function getSingleton<T>(classComponent: new (...args) => T, ...args): T {
  if (!singletons.containsKey(classComponent)) singletons.add(classComponent, new classComponent(...args));
  return getSingletonInitialized(classComponent);
}

export function getSingletonCollection() {
  return singletons;
}
