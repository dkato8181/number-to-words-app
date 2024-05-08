import { convert } from '../convert.js'

test('Returns words as a string', function () {

    expect(typeof convert(1)).toBe('string');

});

test('Returns 231 as words', function () {

    expect(convert(231)).toBe('two hundred thirty one');

});