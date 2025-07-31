/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let sMap = {};
    let tMap = {};

    for(let i=0; i<s.length; i++) {
        if(!sMap[s[i]] && !tMap[t[i]]) {
            sMap[s[i]] = t[i];
            tMap[t[i]] = s[i]
        } else if(tMap[t[i]] !== s[i] || sMap[s[i] !== t[i]]) {
            return false;
        } 
    }

    return true
};

//Time: O(n), Space: O(1)

const s = "foo", t = "bar";
console.log(isIsomorphic(s,t));