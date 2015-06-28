/**
 * Created by youngmoon on 6/28/15.
 */

var Retable = require('./retable');

console.log(Retable);

var table = new Retable.create({
    title: 'first',
    contents: 'show me the money'
});

console.log(table);