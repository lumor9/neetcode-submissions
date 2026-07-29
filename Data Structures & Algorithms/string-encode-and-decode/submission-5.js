class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ''
        for (const str of strs){
           res +=  str.length + '#' + str; 
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let num = '';
        for (let i = 0; i < str.length; i++){
            if (str[i] !== '#') num += str[i];
            else {
                res.push(str.slice(i+1, i+1+Number(num)));
                i = i+Number(num);
                num = '';
            }
        }
        return res;
    }
}