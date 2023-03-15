
// Now make a function such that when given the following arguments it should return the value of key which you want to access

// 1st arg : object , //object from which you want to access the key
// 2nd arg : "foo.bar.do.0.foo2.som.1" // path to key in string
// 3rd arg : defaultValue // it should return default value if provided or else shoult return undefined






// const example = {
//     "foo": {
//         "bar": {
//             do: [
//                 {
//                     "somthing1": "1",
//                     "foo1": {
//                         "som": ["kndkdnjd"]
//                     }
//                 },
//                 {
//                     "somthing2": "2",
//                     "foo2": {
//                         "som": ["kndkdnjd", "djkhdk"]
//                     }
//                 },
//                 {
//                     "somthing3": "3",
//                     "foo3": {
//                         "som": ["knbjbjb,lkjdkd78787098njd", "djk4543645hdk", "skjhskhs"]
//                     }
//                 },
//                 {
//                     "somthing4": "4",
//                     "foo4": {
//                         "som": ["kndkdnjd", "djkhdk", "skjhskhs", "fdafesfewf"]
//                     }
//                 },
//             ]
//         }
//     }
// }

const example = {
    "foo":{
        "bar":{
            do: [{
                "somthing":"dbdjdb",
                "foo2":{
                    "som":["kndkdnjd", "djkhdk","skjhskhs"]
                }
            }]
        }
    }
}


const obj = {
    "1": 2,
    "2": {
        "name": "Jay",
        "add": {
            city: "vadodara",
            nearByCity: ["bharuch", "narmada", "kheda"]
        }
    },
    "3": {
        "name": "Jay",
        "add": {
            city: "vadodara",
            nearByCity: ["bharuch", "narmada", "kheda"]
        }
    },
    "4": {
        "name": "Jay",
        "add": {
            city: "vadodara",
            nearByCity: ["bharuch", "narmada", "kheda"]
        }
    },
    "5": {
        "name": "Jay",
        "add": {
            city: "vadodara",
            nearByCity: ["bharuch", "narmada", "kheda"]
        }
    },
}


// console.log("value = ", getValueFromObjByPathArray(obj, "2.add.nearByCity.2", 200))
// console.log("value = ", getValueFromObjByPathArray(example, "foo.bar.do.2.foo3.som.0", 200))





// ---------------------using reduce-------------------------


let path = "2.add.nearByCity.2"



function getValueFromObjByPathArray(object, path, defaultValue = undefined) {    
    return path.split(".").reduce((a, b, index) => {
        // console.log(index);
        return a[b] || defaultValue;
    }, object)
}


function getFieldValue(object, path, defaultValue = undefined) {
    return path.split(".").reduce((a, b, index) => a && a[b], object) || defaultValue
}

function getValueKey(object, path, defaultValue = undefined) {
    return path.split(".").reduce((obj,key, index)=>{
        console.log(" obj = ", obj?.[key], ", index = ", index);
        return obj?.[key]
    }, object) || defaultValue;
}


// function getValueFromObjByPathArray(object, path, defaultValue = undefined) {

//     return path.split(".").reduce((a, b, index) => {
        
//         if (object[a]) {
//             return object[a][b]
//         }
//         else if (a[b]) {
//             return a[b]
//         }
//         else {
//             return defaultValue
//         }
//     })

// }

console.log("value1 = ", getValueFromObjByPathArray(obj, "2.add.nearByCity.3", 1000));
console.log("value2 = ", getValueFromObjByPathArray(example, "foo.bar.do.0.somthing", 1000));
console.log("value3 = ", getFieldValue(example, "foo.bar.do.0.foo2.som", 1000));
console.log("value4 = ", getValueKey(example, "foo.bar.do.0.foo2d.som", 1000));



// destructuring
const {name: n, fname: f} = {
    "name": "jay",
    "fname": "hello"
}

console.log(n + " " + f);




// ------------------using recursion--------------------------

// function getValueFromObjByPathArray(object, path, defaultValue = undefined) {
//     // console.log(Object.keys(object));

//     let keys = Object.keys(object)

//     let pathArray = path.split(".")

//     for (let i = 0; i < keys.length; i++) {
//         if (keys[i] === pathArray[0]) {
//             return getValue(object[keys[i]], pathArray.slice(1), defaultValue)
//         }
//     }

//     return defaultValue
// }






function getValue(object, pathArray, defaultValue) {
    if (pathArray.length == 0) {
        return object
    }

    if (typeof object != "object") {
        return defaultValue
    }

    let keys = Object.keys(object)

    for (let i = 0; i < keys.length; i++) {
        if (keys[i] === pathArray[0]) {
            return getValue(object[keys[i]], pathArray.slice(1), defaultValue)
        }
    }

    return defaultValue
}