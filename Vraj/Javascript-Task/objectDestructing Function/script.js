// Consider the below object:

// const example = {
//     "foo":{
//         "bar":{
//             do: [{
//                 "somthing":"dbdjdb",
//                 "foo2":{
//                     "som":["kndkdnjd", "djkhdk","skjhskhs"]
//                 }
//             }]
//         }
//     }
// }

// Now make a function such that when given the following arguments it should return the value of key which you want to access

// 1st arg : object , //object from which you want to access the key
// 2nd arg : "foo.bar.do.0.foo2.som.1" // path to key in string
// 3rd arg : defaultValue // it should return default value if provided or else shoult return undefined


function objDestructing(object, path,defaultValue){
    return path.split(".").reduce((a,b,index) => {
        console.log("a:",a,",b:", b,",i: ",index)
        if (object[a]){
            return object[a][b]
        }
        else if(a[b]){
            return a[b]
        }
        else {
            return defaultValue
        }
    }, object)
}   
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
    },
    "Firstname":"Vraj"
}

val = objDestructing(example,"FirstName","10")
console.log(val)
 

// Shorter Code
// function getValueFromObjByPathArray(object, path, defaultValue = undefined) {    
//     return path.split(".").reduce((a, b, index) => {
//         console.log("a:",a,",b:", b,",i: ",index)
//         return a[b] || defaultValue;
//     }, object)
// }

// console.log(getValueFromObjByPathArray(example,"Firstname", 10))

// console.log(getValueFromObjByPathArray(example, "foo.bar.do.0.Name.Firstname", 1))

// function getFieldValue(object, path, defaultValue = undefined) {
//     return path.split(".").reduce((a, b, index) => a && a[b], object) || defaultValue
// }