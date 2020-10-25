var repository = (function () {
 'use strict';
 var products = [{
 id: 1,
 name: 'Final Fantasy XV',
 price: 55.99,
 description: 'Final Fantasy finally makes a come back!',
 category: 'Gaming'
 }, {
 //...
 }];
 return {
 getTopProducts: function () {
 return [products[1], products[2], products[3]];
 },
 getProduct: function (id) {
 return products.filter(p => p.id === id)[0];
 },
 search: function (q) {
 if (q == null) {
return [];
 } else {
 return products.filter(p => p.name.toLowerCase().indexOf(q.toLowerCase()) >= 0);
 }
 }
 };
})();
