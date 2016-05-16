var caesar = require('../caesar');

describe('Caesar Cipher', function () {
    it('should encrypt (right shift)', function (done) {
        var encodedText = caesar.encrypt('abcdefghijklmnopqrstuvwxyz', 3);
        expect(encodedText).toEqual('defghijklmnopqrstuvwxyzabc');
        done();
    });
    
    it('should encrypt (right shift more than 1 cycle)', function (done) {
        var encodedText = caesar.encrypt('abcdefghijklmnopqrstuvwxyz', 29);
        expect(encodedText).toEqual('defghijklmnopqrstuvwxyzabc');
        done();
    });
    
    it('should encrypt (left shift)', function (done) {
        var encodedText = caesar.encrypt('abcdefghijklmnopqrstuvwxyz', -3);
        expect(encodedText).toEqual('xyzabcdefghijklmnopqrstuvw');
        done();
    });
    
    it('should encrypt (left shift more than 1 cycle)', function (done) {
        var encodedText = caesar.encrypt('abcdefghijklmnopqrstuvwxyz', -29);
        expect(encodedText).toEqual('xyzabcdefghijklmnopqrstuvw');
        done();
    });
    
    it('should decrypt (right shift)', function (done) {
        var encodedText = caesar.decrypt('defghijklmnopqrstuvwxyzabc', 3);
        expect(encodedText).toEqual('abcdefghijklmnopqrstuvwxyz');
        done();
    });
    
    it('should decrypt (right shift more than 1 cycle)', function (done) {
        var encodedText = caesar.decrypt('defghijklmnopqrstuvwxyzabc', 29);
        expect(encodedText).toEqual('abcdefghijklmnopqrstuvwxyz');
        done();
    });
    
    it('should decrypt (left shift)', function (done) {
        var encodedText = caesar.decrypt('xyzabcdefghijklmnopqrstuvw', -3);
        expect(encodedText).toEqual('abcdefghijklmnopqrstuvwxyz');
        done();
    });
    
    it('should decrypt (left shift more than 1 cycle)', function (done) {
        var encodedText = caesar.decrypt('xyzabcdefghijklmnopqrstuvw', -29);
        expect(encodedText).toEqual('abcdefghijklmnopqrstuvwxyz');
        done();
    });
    
    it('encrypt: should handle a mix of upper and lower case', function (done) {
        var encodedText = caesar.encrypt('AbcdefghijklmnopqrstuvwxyZ', 3);
        expect(encodedText).toEqual('DefghijklmnopqrstuvwxyzabC');
        done();
    });
    
    it('decrypt: should handle a mix of upper and lower case', function (done) {
        var encodedText = caesar.decrypt('DefghijklmnopqrstuvwxyzabC', 3);
        expect(encodedText).toEqual('AbcdefghijklmnopqrstuvwxyZ');
        done();
    });
});
