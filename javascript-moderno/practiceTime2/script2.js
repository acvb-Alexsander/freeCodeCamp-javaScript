let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/

for (const contries of largeCountries) {
  console.log(`-${contries}`);
}

largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

// You need to help me fixup the largeCountries array so that
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

largeCountries.pop(); //remove o último
largeCountries.push("Pakistan");
largeCountries.shift(); //remove o primeiro
largeCountries.unshift("China");
console.log(largeCountries);
