import * as collection from 'berish-collection';

type KeyType = string | number | symbol;

export const SYMBOL_SCOPE = Symbol('scope');
const DEFAULT_SCOPE = Symbol('default');

const scopes = new collection.Dictionary<KeyType, collection.Dictionary<any, any>>();

export function getSingletonInitialized<T>(classComponent: new (...args) => T, scope?: KeyType): T {
  if (scope == null) scope = DEFAULT_SCOPE;
  let singletons = getSingletonCollection(scope);
  if (singletons.containsKey(classComponent)) return singletons.get(classComponent);
  return null;
}

export function getSingleton<T>(classComponent: new (...args) => T, scope?: KeyType, ...args): T {
  if (scope == null) scope = DEFAULT_SCOPE;
  let singletons = getSingletonCollection(scope);
  if (!singletons.containsKey(classComponent)) {
    const instance = new classComponent(...args);
    instance[SYMBOL_SCOPE] = scope;
    singletons.add(classComponent, instance);
  }
  return getSingletonInitialized(classComponent, scope);
}

export function getSingletonCollection(scope?: KeyType) {
  if (scope == null) scope = DEFAULT_SCOPE;
  if (!scopes.containsKey(scope)) scopes.add(scope, new collection.Dictionary());
  return scopes.get(scope);
}

export function getScopeOfInstance(instance: any) {
  return instance && instance[SYMBOL_SCOPE];
}
