import * as collection from 'berish-collection';
export declare function getSingletonInitialized<T>(classComponent: new (...args: any[]) => T, scope?: string): T;
export declare function getSingleton<T>(classComponent: new (...args: any[]) => T, scope?: string, ...args: any[]): T;
export declare function getSingletonCollection(scope?: string): collection.Dictionary<any, any>;
