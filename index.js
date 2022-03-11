
// COLLECTION FUNCTIONS -- ARRAYS OR OBJECTS

function myEach(collection, callback) {
    let array = collection
    if (Array.isArray(collection) !== true) {
        array = Object.values(collection);
    }
    for (let element of array) {
        callback(element);
    };
    return collection;
};

function alert(element) {
    return element;
};

myEach([1, 2, 3], alert);
//=> alerts each number in turn and returns the original collection

myEach({one: 1, two: 2, three: 3}, alert);
//=> alerts each number value in turn and returns the original collection

function myMap(collection, callback) {
    let array = collection
    if (Array.isArray(collection) !== true) {
        array = Object.values(collection);
    }
    let newArray = [];
    for (let element of array) {
        newArray.push(callback(element));
    };
    return newArray;
}

myMap([1, 2, 3], function(num){ return num * 3; });
//=> [3, 6, 9]

myMap({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
//=> [3, 6, 9]

function myReduce(collection, callback, acc) {
    let array = collection
    if (Array.isArray(collection) !== true) {
        array = Object.values(collection);
    };
    if (acc === undefined) {
        acc = array[0];
        for (let i = 1; i < array.length; i++) {
            acc = callback(acc, array[i], array);
        };
        return acc;
    } else {
        for (let i = 0; i < array.length; i++) {
            acc = callback(acc, array[i], array);
        };
        return acc;
    };
};

myReduce([1, 2, 3], function(acc, val, collection) { return acc + val; }, 10);
//=> 16

myReduce({one: 1, two: 2, three: 3}, function(acc, val, collection) { return acc + val; });
//=> 6

function myFind(collection, predicate) {
    let array = collection
    if (Array.isArray(collection) !== true) {
        array = Object.values(collection);
    };
    for (let element of array) {
        let result = predicate(element);
        if (result === true) {
            return element;
        }
    };
    return undefined;
}

myFind([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
//=> 2

myFind({one: 1, three: 3, four: 4, six: 6}, function(num){ return num % 2 == 0; });
//=> 4

function myFilter(collection, predicate) {
    let array = collection
    if (Array.isArray(collection) !== true) {
        array = Object.values(collection);
    };
    let finalArray = [];
    for (let element of array) {
        let result = predicate(element);
        if (result === true) {
            finalArray.push(element);
        }
    };
    return finalArray;
}

myFilter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
//=> [2, 4, 6]

myFilter({one: 1, three: 3, five: 5}, function(num){ return num % 2 == 0; })
//=> []

function mySize(collection) {
    let array = collection
    if (Array.isArray(collection) !== true) {
        array = Object.values(collection);
    };
    let acc = 0
    for (let element of array) {
        acc += 1;
    };
    return acc;
};

mySize({one: 1, two: 2, three: 3});
//=> 3

mySize([]);
//=> 0


// ARRAY FUNCTIONS

function myFirst(array, n) {
    if (n === undefined) {
        n = 1;
    };
    let newArray = [];
    for (let i = 0; i < n; i++) {
        if (n === 1) {
;            return array[i];
        } else {
            newArray.push(array[i]);
        };
    };
    return newArray;
};

myFirst([5, 4, 3, 2, 1]);
//=> 5

myFirst([5, 4, 3, 2, 1], 3);
//=> [5, 4, 3]

function myLast(array, n) {
    if (n === undefined) {
        n = 1;
    };
    let finalArray = [];
    let flippedArray = flipArray(array);
    for (let i = 0; i < n; i++) {
        if (n === 1) {
            return flippedArray[i];
        } else {
            finalArray.push(flippedArray[i]);
        };
    };
    finalArray = flipArray(finalArray);
    return finalArray;
}

function flipArray (array) {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

myLast([5, 4, 3, 2, 1]);
//=> 1

myLast([5, 4, 3, 2, 1], 3);
//=> [3, 2, 1]

// OBJECT FUNCTIONS

function myKeys(object) {
    let finalArray = [];
    for (const key in object) {
        finalArray.push(key);
    };
    return finalArray;
}

myKeys({one: 1, two: 2, three: 3});
//=> ["one", "two", "three"]

function myValues(object) {
    let finalArray = [];
    for (const key in object) {
        finalArray.push(object[key]);
    };
    return finalArray;
}

myValues({one: 1, two: 2, three: 3});
//=> ["one", "two", "three"]