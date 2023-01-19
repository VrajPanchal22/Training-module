
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


// function deepFind(example, path) {
//     var paths = path.split('.')
//       , current = example
//       , i;
  
//     for (i = 0; i < paths.length; ++i) {
//       if (current[paths[i]] == undefined) {
//         return undefined;
//       } else {
//         current = current[paths[i]];
//       }
//     }
//     return current;
//   }
//   console.log(deepFind(example, 'foo.bar.do.0'))


var finding_path= function(example, path,value){
    for (var i=0, path=path.split('.'),len=path.length; i<len; i++){
       console.log(path)
        if(example[path[i]]==undefined){
            return value;
        }
        else{
        example = example[path[i]];
        }
    };
    return example;
};
console.log(finding_path(example,'foo.bar.do.0.foo2.som.3',600))

