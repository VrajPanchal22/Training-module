const example = {
    "foo": {
        "bar": {
            do: [{
                "somthing": "dbdjdb",
                "foo2": {
                    "som": ["kndkdnjd", "djkhdk", "skjhskhs"]
                }
            }]
        }
    }
}

var defaultValue = "novalue";
var path = "foo.bar.do.0.foo2.som.1";

function findValue(object, path, defaultValue) {    
    var splitPath = path.split('.');
    return splitPath.reduce((parent, child) => {
        return parent[child] || defaultValue;
    }, object)
};
 var value = findValue(example ,path ,defaultValue );
 console.log(value);

