"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const collection = require("berish-collection");
const scopes = new collection.Dictionary();
function getSingletonInitialized(classComponent, scope) {
    let singletons = getSingletonCollection(scope);
    if (singletons.containsKey(classComponent))
        return singletons.get(classComponent);
    return null;
}
exports.getSingletonInitialized = getSingletonInitialized;
function getSingleton(classComponent, scope, ...args) {
    let singletons = getSingletonCollection(scope);
    if (!singletons.containsKey(classComponent))
        singletons.add(classComponent, new classComponent(...args));
    return getSingletonInitialized(classComponent, scope);
}
exports.getSingleton = getSingleton;
function getSingletonCollection(scope) {
    scope = scope || 'default';
    if (!scopes.containsKey(scope))
        scopes.add(scope, new collection.Dictionary());
    return scopes.get(scope);
}
exports.getSingletonCollection = getSingletonCollection;
//# sourceMappingURL=index.js.map