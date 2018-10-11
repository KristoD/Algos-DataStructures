class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }

    // Hash function
    _hash(key) {
        let total = 0;
        let PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * PRIME + value) & this.keyMap.length;
        }
    }

    // Set - 1. Accepts a key and a value - 2. Hashes the key - 3. Stores the key-value pair in the hash table array via separate chaining
    set(key, value) {
        let index = this._hash(key);
        if(!this.keyMap[index]) {
            this.keyMap[index] = [];

        }
        this.keyMap[index].push([key, value]);
    }

    // Get - 1. Accepts a key - 2. Hashes the key - 3. Retrieves the key-value pair in the hash table - 4. If the key isn't found, returns undefined
    get(key) {
        let index = this._hash(key);
        if(this.keyMap[index]) {
            for(let i = 0; i < this.keyMap[index].length; i++) {
                if(this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }

    // keys - 1. Loops through the hash table array and returns an array of keys in the table
    keys() {
        let keysArr = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let x = 0; x < this.keyMap[i].length; x++) {
                    if(!keysArr.includes(this.keyMap[i][x][0])) {
                        keysArr.push(this.keyMap[i][x][0]);
                    }
                }
            }
        }
        return keysArr;
    }

    
    // values - 1. Loops through the hash table array and returns an array of values in the table
    values() {
        let valuesArr = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let x = 0; x < this.keyMap[i].length; x++) {
                    if(!valuesArr.includes(this.keyMap[i][x][1])) {
                        valuesArr.push(this.keyMap[i][x][1]);
                    }
                }
            }
        }
        return valuesArr;
    }

}

let ht = new HashTable(17);
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");


