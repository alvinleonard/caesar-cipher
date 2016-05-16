module.exports = (function Caesar() {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';

    function rotate(input, shift) {
        var out= '', c, idx;
        
        for (var i = 0; i < input.length; i++) {
            c = input.charAt(i);
            if ((idx = alphabet.indexOf(c)) >= 0) {
                idx = (idx + shift) % alphabet.length;
                if (idx < 0) {
                    idx += alphabet.length;
                }
                c = alphabet.charAt(idx);
            }
            out += c;
        }
        
        return out;
    }

    return {
        /**
         * Encrypt an input string with Caesar cipher substitution method. This implementation supports left 
         * and right shift by passing negative and positive integer respectively.
         * 
         * input = The input string.
         * shift = An integer representing how many character shift to be performed.
         */
        encrypt: function (input, shift) {
            return rotate(input, shift);
        },

        /**
         * Decrypt an encoded string with Caesar cipher substitution method. This implementation supports left 
         * and right shift by passing negative and positive integer respectively.
         * 
         * input = The input string.
         * shift = An integer representing how many character shift to be performed.
         */
        decrypt: function (input, shift) {
            return rotate(input, -shift);
        }
    }
})();
