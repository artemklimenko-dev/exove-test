function asciiSort(strings: string[]): string[] {
    return strings.sort((a, b) => {
        // Handle empty strings
        if (!a.length && !b.length) {
            return 0;
        } else if (!a.length) {
            return -1;
        } else if (!b.length) {
            return 1;
        }

        for (let i = 2; i >= 0; i--) {
            // Check if character at index i exists in both strings
            if (!a[i] && !b[i]) {
                // if both characters dont exist then we need to continue to next character
                continue;
            } else if (!a[i]) {
                return -1;
            } else if (!b[i]) {
                return 1;
            }

            // doing actual comparison if both characters exist
            let compare = a.charCodeAt(i) - b.charCodeAt(i);
            if (compare !== 0) {
                return compare;
            }
        }
        // if we didnt exit before then it must be so that first 3 characters are the same
        return 0;
    });
}

const words = [
    "Poet",
    "BOAT",
    "Locomotive",
    "Accelerate",
    "GOLF",
    "ACCIDENTAL",
    'Submarine',
    "AAA",
    "AB",
    "AC",
    "ABC",
    "ABB",
    '',
    '.',
    "A",
    "AA",
    "AAA"
];

const sortedWords = asciiSort(words);

for (let word of sortedWords) {
    console.log(word);
}
