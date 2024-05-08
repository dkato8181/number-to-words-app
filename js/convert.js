const zero = 'zero';
const ones = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'forteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eigteen',
    19: 'ninteen'
};
const tens = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
}
const thousands = {
    0: 'hundred',
    1: 'thousand',
    2: 'million',
    3: 'billion',
    4: 'trillion',
}

function convert(num) {
    if (num == 0) {
        return zero;
    }

    let end = num.toString().length;
    let start;
    let words = '';
    let i = 0;

    while (end > 0) {
        let hundredth = '';
        let thousandth = '';
        let remainder = '';

        start = end - 3;

        if (start < 0) {
            start = 0;
        }

        let slice = num.toString().slice(start, end);
        let a = Math.floor(slice / 100);
        let b = slice % 100;

        if (a > 0) {
            hundredth = `${getWords(a)} ${thousands[0]}`;
        }

        remainder = getWords(b);
        thousandth = `${hundredth} ${remainder}`;

        if (i > 0 && thousandth.trim().length != 0) {
            words = `${thousandth} ${thousands[i]} ${words}`;
        }
        else {
            words = `${thousandth} ${words}`
        }

        if (start == 0) {
            break;
        }

        i++;
        end = start;
    }

    return words.trim();
}

function getWords(number) {
    let text = '';

    if (number < 20) {
        text = ones[number];
    }
    else {
        let oneth = number % 10;
        let tenth = Math.floor(number / 10);
        text = `${tens[tenth]} ${ones[oneth]}`;
    }

    return text.trim();
}

// export { convert }