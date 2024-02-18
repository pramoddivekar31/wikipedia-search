import NodeCache from "node-cache";

const nodeCache = new NodeCache();

const set = (key: string, value: any, ttl?: number): boolean =>
  nodeCache.set(key, value, ttl || 60 * 60 * 24);

const get = <T>(key: string): T | undefined => nodeCache.get(key);

const del = (keys: string | string[]): number => nodeCache.del(keys);

export default { get, set, del };
