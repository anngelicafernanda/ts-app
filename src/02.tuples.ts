const prices: (number | string) [] = [1,3,2,2,2, "as"]

prices.push(1);
prices.push("1");

let user: [string, number, boolean];
user = ["angelica", 15, true];

const [username, age] = user
console.log('🚀  age:', age)
console.log('🚀  username:', username)



