/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {

    let capital = 0;

    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (char === char.toUpperCase()) {
            capital += 1;
        }
    }
    return (
        capital === word.length ||
        capital == 0 ||
    (word[0] === word[0].toUpperCase() && capital === 1)
);

};