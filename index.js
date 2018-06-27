"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const collection = require("berish-collection");
const singletons = new collection.Dictionary();
function getSingletonInitialized(classComponent) {
    if (singletons.containsKey)
        return singletons.get(classComponent);
    return null;
}
exports.getSingletonInitialized = getSingletonInitialized;
function getSingleton(classComponent, ...args) {
    if (!singletons.containsKey(classComponent))
        singletons.add(classComponent, new classComponent(...args));
    return getSingletonInitialized(classComponent);
}
exports.getSingleton = getSingleton;
function getSingletonCollection() {
    return singletons;
}
exports.getSingletonCollection = getSingletonCollection;
//# sourceMappingURL=index.js.map