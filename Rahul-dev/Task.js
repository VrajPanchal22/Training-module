// conventional Syntax
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
    })
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
    "Firstname":"Rahul",
    "Lastname":"Sharma"
}
// val = objDestructing(example,"foo.bar.do.0.somthing",10)
// console.log(val);
// Shorter Syntax
function getValueFromObjByPathArray(object, path, defaultValue = undefined) {
        return path.split(".").reduce((a, b, index) => {
            console.log("a:",a,",b:", b,",i: ",index)
            return a[b] || defaultValue;
        }, object)
    }
// console.log(getValueFromObjByPathArray(example,"Firstname",10));
// Arrow Function and Shortest Syntax

function getFieldValue(object, path, defaultValue = undefined) {
        return path.split(".").reduce((a, b, index) => a && a[b], object) || defaultValue
    }
    console.log(getFieldValue(example,"Firstname",10));