(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{RDs1:function(t,e,a){"use strict";var n=a("g09b");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("p0pE")),u=n(a("d6i3")),i=a("LvDl"),d=a("c9DL"),l={namespace:"regionFields",state:{data:{list:[],pagination:{}}},effects:{create:u.default.mark(function t(e,a){var n,r,i,l;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,r=a.call,i=a.put,t.next=4,r(d.add,n);case 4:return l=t.sent,t.next=7,i({type:"add",payload:l.data});case 7:case"end":return t.stop()}},t)}),fetch:u.default.mark(function t(e,a){var n,r,i,l;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,r=a.call,i=a.put,t.next=4,r(d.query,n);case 4:return l=t.sent,t.next=7,i({type:"save",payload:l.data});case 7:case"end":return t.stop()}},t)}),modify:u.default.mark(function t(e,a){var n,r,i,l;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,r=a.call,i=a.put,t.next=4,r(d.edit,n);case 4:return l=t.sent,t.next=7,i({type:"edit",payload:l.data});case 7:case"end":return t.stop()}},t)}),remove:u.default.mark(function t(e,a){var n,r,i;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,r=a.call,i=a.put,t.next=4,r(d.remove,n);case 4:return t.next=6,i({type:"del",payload:n});case 6:case"end":return t.stop()}},t)})},reducers:{del:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:{list:[],pagination:{}}},e=arguments.length>1?arguments[1]:void 0,a=e.payload.ids,n=t.data,u=n.list,d=n.pagination,l=void 0===d?{}:d,c=u.filter(function(t){return-1===a.indexOf(t.id)});return l&&!1!==l&&(0,i.isNumber)(l.total)&&(l.total-=u.length-c.length),(0,r.default)({},t,{data:(0,r.default)({},t.data,{list:c,pagination:l})})},add:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:{list:[],pagination:{}}},e=arguments.length>1?arguments[1]:void 0,a=t.data,n=a.list,u=a.pagination,d=void 0===u?{}:u,l=n;return l.unshift(e.payload),d&&!1!==d&&(0,i.isNumber)(d.total)&&(d.total+=1),(0,r.default)({},t,{data:(0,r.default)({},t.data,{list:l,pagination:d})})},edit:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:{list:[],pagination:{}}},e=arguments.length>1?arguments[1]:void 0,a=t.data.list,n=e.payload;return(0,r.default)({},t,{data:(0,r.default)({},t.data,{list:a.map(function(t){return t.id===n.id?n:t})})})},save:function(t,e){return(0,r.default)({},t,{data:e.payload})}}},c=l;e.default=c},c9DL:function(t,e,a){"use strict";var n=a("g09b");Object.defineProperty(e,"__esModule",{value:!0}),e.query=c,e.remove=o,e.add=f,e.edit=v;var r=n(a("p0pE")),u=n(a("d6i3")),i=n(a("1l/V")),d=n(a("sy1d")),l=a("Qyje");function c(t){return s.apply(this,arguments)}function s(){return s=(0,i.default)(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,d.default)("/api/crawler/fields?".concat((0,l.stringify)(e))));case 1:case"end":return t.stop()}},t)})),s.apply(this,arguments)}function o(t){return p.apply(this,arguments)}function p(){return p=(0,i.default)(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,d.default)("/api/crawler/fields?".concat((0,l.stringify)(e)),{method:"DELETE"}));case 1:case"end":return t.stop()}},t)})),p.apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return h=(0,i.default)(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,d.default)("/api/crawler/fields",{method:"POST",data:(0,r.default)({},e)}));case 1:case"end":return t.stop()}},t)})),h.apply(this,arguments)}function v(t){return w.apply(this,arguments)}function w(){return w=(0,i.default)(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,d.default)("/api/crawler/fields",{method:"PUT",data:(0,r.default)({},e)}));case 1:case"end":return t.stop()}},t)})),w.apply(this,arguments)}}}]);