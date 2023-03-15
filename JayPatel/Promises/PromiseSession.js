const list = [1, 2, 3, 4, 5, 6];

const printNum = (item) => {
    console.log("item", item)
}

list.forEach(printNum)
console.log("lastline")


setTimeout(() => {
    console.log("something")
}, 500)
console.log("lastline 2")


// const asynfunc = (cb, time) => {
//     setTimeout(cb, time);
// }



// promise -> object -> pending - fulfilled - rejected 

const asynfunc = (name, time) => {
    return new Promise((resolve, reject) => {
        if (name === "joker") {
            setTimeout(() => {
                reject(new Error("Joker not supported"))
            }, time);
        } else {
            setTimeout(() => {
                resolve(name + " Is awesome")
            }, time);
        }
    })
}

// asynfunc("jay", 400).then((result) => {
//     console.log('result: ', result);
// }).finally(() => {
//     console.log('Final say: ');
// })

// asynfunc("joker", 400).then((result) => {
//     console.log('result: ', result);
// }).catch((error) => {
//     console.log('error: ', error.message);
// }).finally(() => {
//     console.log('Final say: ');
// })

const list2 = []


asynfunc("jay", 400).then((result) => {
    console.log('result: ', result);
    return asynfunc("bob", 400)
}).then((r2) => {
    console.log('r2: ', r2);
    list2.push(r2);
    return asynfunc("alex", 400)
}).then((r3) => {
    console.log('r3: ', r3);
    list2.push(r3);
    return asynfunc("alex", 400)
}).then((r4) => {
    console.log('list2: ', list2);
})

// console.log('list2: ', list2);

// const reuslt = Promise.all([asynfunc("jay", 400),asynfunc("jay 1", 400),asynfunc("joker", 400),asynfunc("jay 3", 400)])
// console.log('reuslt: ', reuslt);

// reuslt.then(([r1,r2,r3,r4]) => {
//     console.log('r1,r2,r3,r4: ', r1,r2,r3,r4);
// }).catch(error => {
//     console.log('error: ', error);

// })


async function temp() {
    try {
        const result = await asynfunc("joker", 500);
        const result2 = await asynfunc("alex 1", 500);
        const result3 = await asynfunc("alex 1", 500);
        const result4 = await asynfunc("alex 2", 500);
        const result5 = await asynfunc("alex 3", 500);
        const result6 = await asynfunc("alex 4", 500);
        const totalResult = await Promise.all(promiseList)
        console.log('result: ', result);
    }
    catch (error) {
        console.log('error: ', error.message);

    }
}

const res = temp()
console.log('res: ', res);








promptForDishChoice()
function promptForDishChoice() {
    return new Promise((resolve, reject) => {
        const dialog = document.createElement("dialog");
        dialog.innerHTML = `
  <form method="dialog">
    <p>What would you like to eat?</p>
    <select>
      <option value="pizza">Pizza</option>
      <option value="pasta">Pasta</option>
      <option value="salad">Salad</option>
    </select>
    <menu>
      <li><button value="cancel">Cancel</button></li>
      <li><button type="submit" value="ok">OK</button></li>
    </menu>
  </form>
      `;
        dialog.addEventListener("close", () => {
            if (dialog.returnValue === "ok") {
                resolve(dialog.querySelector("select").value);
            } else {
                reject(new Error("User cancelled dialog"));
            }
        });

        document.body.appendChild(dialog);
        dialog.showModal();
    });
}

async function fetchPrices() {
    const response = await fetch("/prices");
    return await response.json();
}








async function abc() {
    const [...a] = await Promise.all([asynfunc("jay", 100), asynfunc("patel", 100)])
    
    // console.log("a = ", a, ", b = ", b);
    console.log("a = ", a);
}
abc()

let a = 10