import {lowerFirst, upperFirst,
        remove, removeTo, removeLastTo,
        removeFrom, removeLastFrom,
        pad, padStart, padEnd} from './string';

test('lowerFirst', ()=> {
    expect(lowerFirst('sample')).toEqual('sample');
    expect(lowerFirst('Sample')).toEqual('sample');
    expect(lowerFirst('SAMPLE')).toEqual('sAMPLE');
});

test('upperFirst', ()=> {
    expect(upperFirst('Sample')).toEqual('Sample');
    expect(upperFirst('sample')).toEqual('Sample');
    expect(upperFirst('SAMPLE')).toEqual('SAMPLE');
});

test('remove', ()=> {
    expect(remove('sample abc text', 0, 7)).toEqual('abc text');
    expect(remove('sample abc text', 7, 11)).toEqual('sample text');
    expect(remove('sample abc text', 10, 15)).toEqual('sample abc');
});

test('removeTo', ()=> {
    expect(removeTo('sample abc text', 'abc')).toEqual('abc text');
    expect(removeTo('sample abc text', 'abc', 4)).toEqual('text');
    expect(removeTo('sample abc/text', '/')).toEqual('/text');
    expect(removeTo('sample abc/text', '/', 1)).toEqual('text');
});

test('removeLastTo', ()=> {
    expect(removeLastTo('sample abc text', 'abc')).toEqual('abc text');
    expect(removeLastTo('sample abc text abc text2', 'abc', 4)).toEqual('text2');
    expect(removeLastTo('sample/abc/text', '/')).toEqual('/text');
    expect(removeLastTo('sample/abc/text', '/', 1)).toEqual('text');
});

test('removeFrom', ()=> {
    expect(removeFrom('sample abc text', 'abc')).toEqual('sample ');
    expect(removeFrom('sample abc text', 'abc', 3)).toEqual('sample abc');
    expect(removeFrom('sample abc/text', '/')).toEqual('sample abc');
    expect(removeFrom('sample abc/text', '/', 1)).toEqual('sample abc/');
});

test('removeLastFrom', ()=> {
    expect(removeLastFrom('sample abc text', 'abc')).toEqual('sample ');
    expect(removeLastFrom('sample abc text', 'abc', 3)).toEqual('sample abc');
    expect(removeLastFrom('sample/abc/text', '/')).toEqual('sample/abc');
    expect(removeLastFrom('sample/abc/text', '/', 1)).toEqual('sample/abc/');
});

test('pad', ()=> {
    expect(pad('', 0)).toEqual('');
    expect(pad('', 1)).toEqual('');
    expect(pad('', 2)).toEqual('  ');
    expect(pad('', 5, '-')).toEqual('----');
    expect(pad('sample', 1)).toEqual('s');
    expect(pad('sample', 10)).toEqual('  sample  ');
    expect(pad('sample', 9, '_')).toEqual('_sample_');
    expect(pad('sample', 10, '_')).toEqual('__sample__');
    expect(pad('sample', 11, '_')).toEqual('__sample__');
    expect(pad('sample', 12, '_')).toEqual('___sample___');
});

test('padStart', ()=> {
    expect(padStart('', 0)).toEqual('');
    expect(padStart('', 1)).toEqual(' ');
    expect(padStart('', 5, '-')).toEqual('-----');
    expect(padStart('sample', 1)).toEqual('s');
    expect(padStart('sample', 10)).toEqual('    sample');
    expect(padStart('sample', 10, '_')).toEqual('____sample');
});

test('padEnd', ()=> {
    expect(padEnd('', 0)).toEqual('');
    expect(padEnd('', 1)).toEqual(' ');
    expect(padEnd('', 5, '-')).toEqual('-----');
    expect(padEnd('sample', 1)).toEqual('s');
    expect(padEnd('sample', 10)).toEqual('sample    ');
    expect(padEnd('sample', 10, '_')).toEqual('sample____');
});
