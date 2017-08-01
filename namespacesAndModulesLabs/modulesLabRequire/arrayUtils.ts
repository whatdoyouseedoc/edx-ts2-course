class ArrayUtilities {
    reverseArray(array: Array<number>) {
        return array.slice(0).reverse();
    }

    lastItemOfArray(array: Array<number>) {
        return array.slice(0).pop();
    }

    firstItemOfArray(array: Array<number>) {
        return array.slice(0).shift();
    }

    concatenateArray(array1: Array<number>, array2: Array<number>) {
        return array1.concat(array2);
    }
}

export default new ArrayUtilities;