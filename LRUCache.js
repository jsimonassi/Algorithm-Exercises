class LRUCache {
    constructor(capacity) {
      this.cache = new Map();
      this.capacity = capacity;
    }
  
    get(key) {
      if (!this.cache.has(key)) return -1;
  
      const v = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, v);
      return this.cache.get(key);
    };
  
    put(key, value) {
      if (this.cache.has(key)) {
        this.cache.delete(key);
      }
      this.cache.set(key, value);
      if (this.cache.size > this.capacity) {
        this.cache.delete(this.cache.keys().next().value);  // keys().next().value returns first item's key
      }
    };
  }
/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// Time Complexity: O(1) for both get and put
// Space Complexity: O(n) where n is the capacity of the cache

// Test cases
// ["LRUCache","put","put","get","put","get","put","get","get","get"]
// [[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]

// ["LRUCache","put","put","get","put","get","put","get","get","get"]
// [[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]
const lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
console.log(lRUCache.get(1)); // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log(lRUCache.get(2)); // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
console.log(lRUCache.get(1)); // return -1 (not found)
console.log(lRUCache.get(3)); // return 3
console.log(lRUCache.get(4)); // return 4



