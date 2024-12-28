const deleteElementFromString = (string, ele) => {
    const arr = string.split("");

    for (let i = 0; i < arr.length; i++) {
        //First Way

        // if (arr[i] == ele) {
        //     for (let j = i; j < arr.length - 1; j++) {
        //         arr[j] = arr[j + 1];
        //     }
        //     arr.pop();
        //     i--;
        // }

        //Second Way

        // if (arr[i] ==ele)
        //     arr.splice(i,1);

        //Third Way
        let k = 0;//pointer
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] != ele) {
                arr[k++] = arr[i]
            }
        }
        arr.length = k;
    }

    console.log("ARRAY LENGTH: ", arr.length);
    return arr.join("");
}
const string = "Hello World, My name is abirame";
const ele = "e";
const result = deleteElementFromString(string, ele);
console.log(result);

