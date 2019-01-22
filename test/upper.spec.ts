import {upper} from '../src/';

describe('All Tests', () => {
    describe('simpleCall-1', () => {
        it('test basic information for a serial number',  () => {
            const str = " This is a test OK ";
            const upstr = upper(str);
            console.log("INPUT:   " + str);
            console.log("OUTPUT:  " + upstr );
        });

        it('throws an Exception for null input ', () => {
            expect(() => upper(null)).toThrow(Error);
        });
    });
});

