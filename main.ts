// Task1
function fibonacci(n: number): number {
    if (n < 0) return -1;
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));

// Task2
function digitalPalindrome(num: number): {result: number, steps: number} {
    let steps = 0;
    while (true) {
        const strNum = num.toString();
        const reversedNum = parseInt(strNum.split('').reverse().join(''));
        if (strNum === reversedNum.toString()) {
            return { result: num, steps };
        }
        if (steps > 500) {
            return { result: -1, steps };
        }
        num += reversedNum;
        steps++;
    }
}

console.log(digitalPalindrome(196));

// Task3
function permutations<T>(arr: T[]): T[][] {
    if (arr.length === 0) return [[]];
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
        for (const perm of permutations(remaining)) {
            result.push([current, ...perm]);
        }
    }
    return result;
}

console.log(permutations([1, 2, 3]));