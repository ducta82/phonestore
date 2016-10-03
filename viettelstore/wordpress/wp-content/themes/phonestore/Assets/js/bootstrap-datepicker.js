﻿/* =========================================================
 * bootstrap-datepicker.js
 * Repo: https://github.com/eternicode/bootstrap-datepicker/
 * Demo: http://eternicode.github.io/bootstrap-datepicker/
 * Docs: http://bootstrap-datepicker.readthedocs.org/
 * Forked from http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Started by Stefan Petre; improvements by Andrew Rowls + contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */(function(e,t){function r(){return new Date(Date.UTC.apply(Date,arguments))}function i(){var e=new Date;return r(e.getFullYear(),e.getMonth(),e.getDate())}function s(e){return function(){return this[e].apply(this,arguments)}}function f(t,n){function u(e,t){return t.toLowerCase()}var r=e(t).data(),i={},s,o=new RegExp("^"+n.toLowerCase()+"([A-Z])");n=new RegExp("^"+n.toLowerCase());for(var a in r)if(n.test(a)){s=a.replace(o,u);i[s]=r[a]}return i}function l(t){var n={};if(!d[t]){t=t.split("-")[0];if(!d[t])return}var r=d[t];e.each(p,function(e,t){t in r&&(n[t]=r[t])});return n}var n=e(window),o=function(){var t={get:function(e){return this.slice(e)[0]},contains:function(e){var t=e&&e.valueOf();for(var n=0,r=this.length;n<r;n++)if(this[n].valueOf()===t)return n;return-1},remove:function(e){this.splice(e,1)},replace:function(t){if(!t)return;e.isArray(t)||(t=[t]);this.clear();this.push.apply(this,t)},clear:function(){this.length=0},copy:function(){var e=new o;e.replace(this);return e}};return function(){var n=[];n.push.apply(n,arguments);e.extend(n,t);return n}}(),u=function(t,n){this.dates=new o;this.viewDate=i();this.focusDate=null;this._process_options(n);this.element=e(t);this.isInline=!1;this.isInput=this.element.is("input");this.component=this.element.is(".date")?this.element.find(".add-on, .input-group-addon, .btn"):!1;this.hasInput=this.component&&this.element.find("input").length;this.component&&this.component.length===0&&(this.component=!1);this.picker=e(v.template);this._buildEvents();this._attachEvents();this.isInline?this.picker.addClass("datepicker-inline").appendTo(this.element):this.picker.addClass("datepicker-dropdown dropdown-menu");this.o.rtl&&this.picker.addClass("datepicker-rtl");this.viewMode=this.o.startView;this.o.calendarWeeks&&this.picker.find("tfoot th.today").attr("colspan",function(e,t){return parseInt(t)+1});this._allow_update=!1;this.setStartDate(this._o.startDate);this.setEndDate(this._o.endDate);this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);this.fillDow();this.fillMonths();this._allow_update=!0;this.update();this.showMode();this.isInline&&this.show()};u.prototype={constructor:u,_process_options:function(t){this._o=e.extend({},this._o,t);var n=this.o=e.extend({},this._o),r=n.language;if(!d[r]){r=r.split("-")[0];d[r]||(r=h.language)}n.language=r;switch(n.startView){case 2:case"decade":n.startView=2;break;case 1:case"year":n.startView=1;break;default:n.startView=0}switch(n.minViewMode){case 1:case"months":n.minViewMode=1;break;case 2:case"years":n.minViewMode=2;break;default:n.minViewMode=0}n.startView=Math.max(n.startView,n.minViewMode);if(n.multidate!==!0){n.multidate=Number(n.multidate)||!1;n.multidate!==!1?n.multidate=Math.max(0,n.multidate):n.multidate=1}n.multidateSeparator=String(n.multidateSeparator);n.weekStart%=7;n.weekEnd=(n.weekStart+6)%7;var i=v.parseFormat(n.format);n.startDate!==-Infinity&&(n.startDate?n.startDate instanceof Date?n.startDate=this._local_to_utc(this._zero_time(n.startDate)):n.startDate=v.parseDate(n.startDate,i,n.language):n.startDate=-Infinity);n.endDate!==Infinity&&(n.endDate?n.endDate instanceof Date?n.endDate=this._local_to_utc(this._zero_time(n.endDate)):n.endDate=v.parseDate(n.endDate,i,n.language):n.endDate=Infinity);n.daysOfWeekDisabled=n.daysOfWeekDisabled||[];e.isArray(n.daysOfWeekDisabled)||(n.daysOfWeekDisabled=n.daysOfWeekDisabled.split(/[,\s]*/));n.daysOfWeekDisabled=e.map(n.daysOfWeekDisabled,function(e){return parseInt(e,10)});var s=String(n.orientation).toLowerCase().split(/\s+/g),o=n.orientation.toLowerCase();s=e.grep(s,function(e){return/^auto|left|right|top|bottom$/.test(e)});n.orientation={x:"auto",y:"auto"};if(!!o&&o!=="auto")if(s.length===1)switch(s[0]){case"top":case"bottom":n.orientation.y=s[0];break;case"left":case"right":n.orientation.x=s[0]}else{o=e.grep(s,function(e){return/^left|right$/.test(e)});n.orientation.x=o[0]||"auto";o=e.grep(s,function(e){return/^top|bottom$/.test(e)});n.orientation.y=o[0]||"auto"}},_events:[],_secondaryEvents:[],_applyEvents:function(e){for(var n=0,r,i,s;n<e.length;n++){r=e[n][0];if(e[n].length===2){i=t;s=e[n][1]}else if(e[n].length===3){i=e[n][1];s=e[n][2]}r.on(s,i)}},_unapplyEvents:function(e){for(var n=0,r,i,s;n<e.length;n++){r=e[n][0];if(e[n].length===2){s=t;i=e[n][1]}else if(e[n].length===3){s=e[n][1];i=e[n][2]}r.off(i,s)}},_buildEvents:function(){this.isInput?this._events=[[this.element,{focus:e.proxy(this.show,this),keyup:e.proxy(function(t){e.inArray(t.keyCode,[27,37,39,38,40,32,13,9])===-1&&this.update()},this),keydown:e.proxy(this.keydown,this)}]]:this.component&&this.hasInput?this._events=[[this.element.find("input"),{focus:e.proxy(this.show,this),keyup:e.proxy(function(t){e.inArray(t.keyCode,[27,37,39,38,40,32,13,9])===-1&&this.update()},this),keydown:e.proxy(this.keydown,this)}],[this.component,{click:e.proxy(this.show,this)}]]:this.element.is("div")?this.isInline=!0:this._events=[[this.element,{click:e.proxy(this.show,this)}]];this._events.push([this.element,"*",{blur:e.proxy(function(e){this._focused_from=e.target},this)}],[this.element,{blur:e.proxy(function(e){this._focused_from=e.target},this)}]);this._secondaryEvents=[[this.picker,{click:e.proxy(this.click,this)}],[e(window),{resize:e.proxy(this.place,this)}],[e(document),{"mousedown touchstart":e.proxy(function(e){this.element.is(e.target)||this.element.find(e.target).length||this.picker.is(e.target)||this.picker.find(e.target).length||this.hide()},this)}]]},_attachEvents:function(){this._detachEvents();this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents();this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(t,n){var r=n||this.dates.get(-1),i=this._utc_to_local(r);this.element.trigger({type:t,date:i,dates:e.map(this.dates,this._utc_to_local),format:e.proxy(function(e,t){if(arguments.length===0){e=this.dates.length-1;t=this.o.format}else if(typeof e=="string"){t=e;e=this.dates.length-1}t=t||this.o.format;var n=this.dates.get(e);return v.formatDate(n,t,this.o.language)},this)})},show:function(){this.isInline||this.picker.appendTo("body");this.picker.show();this.place();this._attachSecondaryEvents();this._trigger("show")},hide:function(){if(this.isInline)return;if(!this.picker.is(":visible"))return;this.focusDate=null;this.picker.hide().detach();this._detachSecondaryEvents();this.viewMode=this.o.startView;this.showMode();this.o.forceParse&&(this.isInput&&this.element.val()||this.hasInput&&this.element.find("input").val())&&this.setValue();this._trigger("hide")},remove:function(){this.hide();this._detachEvents();this._detachSecondaryEvents();this.picker.remove();delete this.element.data().datepicker;this.isInput||delete this.element.data().date},_utc_to_local:function(e){return e&&new Date(e.getTime()+e.getTimezoneOffset()*6e4)},_local_to_utc:function(e){return e&&new Date(e.getTime()-e.getTimezoneOffset()*6e4)},_zero_time:function(e){return e&&new Date(e.getFullYear(),e.getMonth(),e.getDate())},_zero_utc_time:function(e){return e&&new Date(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()))},getDates:function(){return e.map(this.dates,this._utc_to_local)},getUTCDates:function(){return e.map(this.dates,function(e){return new Date(e)})},getDate:function(){return this._utc_to_local(this.getUTCDate())},getUTCDate:function(){return new Date(this.dates.get(-1))},setDates:function(){var t=e.isArray(arguments[0])?arguments[0]:arguments;this.update.apply(this,t);this._trigger("changeDate");this.setValue()},setUTCDates:function(){var t=e.isArray(arguments[0])?arguments[0]:arguments;this.update.apply(this,e.map(t,this._utc_to_local));this._trigger("changeDate");this.setValue()},setDate:s("setDates"),setUTCDate:s("setUTCDates"),setValue:function(){var e=this.getFormattedDate();this.isInput?this.element.val(e).change():this.component&&this.element.find("input").val(e).change()},getFormattedDate:function(n){n===t&&(n=this.o.format);var r=this.o.language;return e.map(this.dates,function(e){return v.formatDate(e,n,r)}).join(this.o.multidateSeparator)},setStartDate:function(e){this._process_options({startDate:e});this.update();this.updateNavArrows()},setEndDate:function(e){this._process_options({endDate:e});this.update();this.updateNavArrows()},setDaysOfWeekDisabled:function(e){this._process_options({daysOfWeekDisabled:e});this.update();this.updateNavArrows()},place:function(){if(this.isInline)return;var t=this.picker.outerWidth(),r=this.picker.outerHeight(),i=10,s=n.width(),o=n.height(),u=n.scrollTop(),a=parseInt(this.element.parents().filter(function(){return e(this).css("z-index")!=="auto"}).first().css("z-index"))+10,f=this.component?this.component.parent().offset():this.element.offset(),l=this.component?this.component.outerHeight(!0):this.element.outerHeight(!1),c=this.component?this.component.outerWidth(!0):this.element.outerWidth(!1),h=f.left,p=f.top;this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left");if(this.o.orientation.x!=="auto"){this.picker.addClass("datepicker-orient-"+this.o.orientation.x);this.o.orientation.x==="right"&&(h-=t-c)}else{this.picker.addClass("datepicker-orient-left");f.left<0?h-=f.left-i:f.left+t>s&&(h=s-t-i)}var d=this.o.orientation.y,v,m;if(d==="auto"){v=-u+f.top-r;m=u+o-(f.top+l+r);Math.max(v,m)===m?d="top":d="bottom"}this.picker.addClass("datepicker-orient-"+d);d==="top"?p+=l:p-=r+parseInt(this.picker.css("padding-top"));this.picker.css({top:p,left:h,zIndex:a})},_allow_update:!0,update:function(){if(!this._allow_update)return;var t=this.dates.copy(),n=[],r=!1;if(arguments.length){e.each(arguments,e.proxy(function(e,t){t instanceof Date&&(t=this._local_to_utc(t));n.push(t)},this));r=!0}else{n=this.isInput?this.element.val():this.element.data("date")||this.element.find("input").val();n&&this.o.multidate?n=n.split(this.o.multidateSeparator):n=[n];delete this.element.data().date}n=e.map(n,e.proxy(function(e){return v.parseDate(e,this.o.format,this.o.language)},this));n=e.grep(n,e.proxy(function(e){return e<this.o.startDate||e>this.o.endDate||!e},this),!0);this.dates.replace(n);this.dates.length?this.viewDate=new Date(this.dates.get(-1)):this.viewDate<this.o.startDate?this.viewDate=new Date(this.o.startDate):this.viewDate>this.o.endDate&&(this.viewDate=new Date(this.o.endDate));r?this.setValue():n.length&&String(t)!==String(this.dates)&&this._trigger("changeDate");!this.dates.length&&t.length&&this._trigger("clearDate");this.fill()},fillDow:function(){var e=this.o.weekStart,t="<tr>";if(this.o.calendarWeeks){var n='<th class="cw">&nbsp;</th>';t+=n;this.picker.find(".datepicker-days thead tr:first-child").prepend(n)}while(e<this.o.weekStart+7)t+='<th class="dow">'+d[this.o.language].daysMin[e++%7]+"</th>";t+="</tr>";this.picker.find(".datepicker-days thead").append(t)},fillMonths:function(){var e="",t=0;while(t<12)e+='<span class="month">'+d[this.o.language].monthsShort[t++]+"</span>";this.picker.find(".datepicker-months td").html(e)},setRange:function(t){!t||!t.length?delete this.range:this.range=e.map(t,function(e){return e.valueOf()});this.fill()},getClassNames:function(t){var n=[],r=this.viewDate.getUTCFullYear(),i=this.viewDate.getUTCMonth(),s=new Date;t.getUTCFullYear()<r||t.getUTCFullYear()===r&&t.getUTCMonth()<i?n.push("old"):(t.getUTCFullYear()>r||t.getUTCFullYear()===r&&t.getUTCMonth()>i)&&n.push("new");this.focusDate&&t.valueOf()===this.focusDate.valueOf()&&n.push("focused");this.o.todayHighlight&&t.getUTCFullYear()===s.getFullYear()&&t.getUTCMonth()===s.getMonth()&&t.getUTCDate()===s.getDate()&&n.push("today");this.dates.contains(t)!==-1&&n.push("active");(t.valueOf()<this.o.startDate||t.valueOf()>this.o.endDate||e.inArray(t.getUTCDay(),this.o.daysOfWeekDisabled)!==-1)&&n.push("disabled");if(this.range){t>this.range[0]&&t<this.range[this.range.length-1]&&n.push("range");e.inArray(t.valueOf(),this.range)!==-1&&n.push("selected")}return n},fill:function(){var n=new Date(this.viewDate),i=n.getUTCFullYear(),s=n.getUTCMonth(),o=this.o.startDate!==-Infinity?this.o.startDate.getUTCFullYear():-Infinity,u=this.o.startDate!==-Infinity?this.o.startDate.getUTCMonth():-Infinity,a=this.o.endDate!==Infinity?this.o.endDate.getUTCFullYear():Infinity,f=this.o.endDate!==Infinity?this.o.endDate.getUTCMonth():Infinity,l=d[this.o.language].today||d.en.today||"",c=d[this.o.language].clear||d.en.clear||"",h;this.picker.find(".datepicker-days thead th.datepicker-switch").text(d[this.o.language].months[s]+" "+i);this.picker.find("tfoot th.today").text(l).toggle(this.o.todayBtn!==!1);this.picker.find("tfoot th.clear").text(c).toggle(this.o.clearBtn!==!1);this.updateNavArrows();this.fillMonths();var p=r(i,s-1,28),m=v.getDaysInMonth(p.getUTCFullYear(),p.getUTCMonth());p.setUTCDate(m);p.setUTCDate(m-(p.getUTCDay()-this.o.weekStart+7)%7);var g=new Date(p);g.setUTCDate(g.getUTCDate()+42);g=g.valueOf();var y=[],b;while(p.valueOf()<g){if(p.getUTCDay()===this.o.weekStart){y.push("<tr>");if(this.o.calendarWeeks){var w=new Date(+p+(this.o.weekStart-p.getUTCDay()-7)%7*864e5),E=new Date(Number(w)+(11-w.getUTCDay())%7*864e5),S=new Date(Number(S=r(E.getUTCFullYear(),0,1))+(11-S.getUTCDay())%7*864e5),x=(E-S)/864e5/7+1;y.push('<td class="cw">'+x+"</td>")}}b=this.getClassNames(p);b.push("day");if(this.o.beforeShowDay!==e.noop){var T=this.o.beforeShowDay(this._utc_to_local(p));T===t?T={}:typeof T=="boolean"?T={enabled:T}:typeof T=="string"&&(T={classes:T});T.enabled===!1&&b.push("disabled");T.classes&&(b=b.concat(T.classes.split(/\s+/)));T.tooltip&&(h=T.tooltip)}b=e.unique(b);y.push('<td class="'+b.join(" ")+'"'+(h?' title="'+h+'"':"")+">"+p.getUTCDate()+"</td>");p.getUTCDay()===this.o.weekEnd&&y.push("</tr>");p.setUTCDate(p.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").empty().append(y.join(""));var N=this.picker.find(".datepicker-months").find("th:eq(1)").text(i).end().find("span").removeClass("active");e.each(this.dates,function(e,t){t.getUTCFullYear()===i&&N.eq(t.getUTCMonth()).addClass("active")});(i<o||i>a)&&N.addClass("disabled");i===o&&N.slice(0,u).addClass("disabled");i===a&&N.slice(f+1).addClass("disabled");y="";i=parseInt(i/10,10)*10;var C=this.picker.find(".datepicker-years").find("th:eq(1)").text(i+"-"+(i+9)).end().find("td");i-=1;var k=e.map(this.dates,function(e){return e.getUTCFullYear()}),L;for(var A=-1;A<11;A++){L=["year"];A===-1?L.push("old"):A===10&&L.push("new");e.inArray(i,k)!==-1&&L.push("active");(i<o||i>a)&&L.push("disabled");y+='<span class="'+L.join(" ")+'">'+i+"</span>";i+=1}C.html(y)},updateNavArrows:function(){if(!this._allow_update)return;var e=new Date(this.viewDate),t=e.getUTCFullYear(),n=e.getUTCMonth();switch(this.viewMode){case 0:this.o.startDate!==-Infinity&&t<=this.o.startDate.getUTCFullYear()&&n<=this.o.startDate.getUTCMonth()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"});this.o.endDate!==Infinity&&t>=this.o.endDate.getUTCFullYear()&&n>=this.o.endDate.getUTCMonth()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"});break;case 1:case 2:this.o.startDate!==-Infinity&&t<=this.o.startDate.getUTCFullYear()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"});this.o.endDate!==Infinity&&t>=this.o.endDate.getUTCFullYear()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"})}},click:function(t){t.preventDefault();var n=e(t.target).closest("span, td, th"),i,s,o;if(n.length===1)switch(n[0].nodeName.toLowerCase()){case"th":switch(n[0].className){case"datepicker-switch":this.showMode(1);break;case"prev":case"next":var u=v.modes[this.viewMode].navStep*(n[0].className==="prev"?-1:1);switch(this.viewMode){case 0:this.viewDate=this.moveMonth(this.viewDate,u);this._trigger("changeMonth",this.viewDate);break;case 1:case 2:this.viewDate=this.moveYear(this.viewDate,u);this.viewMode===1&&this._trigger("changeYear",this.viewDate)}this.fill();break;case"today":var a=new Date;a=r(a.getFullYear(),a.getMonth(),a.getDate(),0,0,0);this.showMode(-2);var f=this.o.todayBtn==="linked"?null:"view";this._setDate(a,f);break;case"clear":var l;this.isInput?l=this.element:this.component&&(l=this.element.find("input"));l&&l.val("").change();this.update();this._trigger("changeDate");this.o.autoclose&&this.hide()}break;case"span":if(!n.is(".disabled")){this.viewDate.setUTCDate(1);if(n.is(".month")){o=1;s=n.parent().find("span").index(n);i=this.viewDate.getUTCFullYear();this.viewDate.setUTCMonth(s);this._trigger("changeMonth",this.viewDate);this.o.minViewMode===1&&this._setDate(r(i,s,o))}else{o=1;s=0;i=parseInt(n.text(),10)||0;this.viewDate.setUTCFullYear(i);this._trigger("changeYear",this.viewDate);this.o.minViewMode===2&&this._setDate(r(i,s,o))}this.showMode(-1);this.fill()}break;case"td":if(n.is(".day")&&!n.is(".disabled")){o=parseInt(n.text(),10)||1;i=this.viewDate.getUTCFullYear();s=this.viewDate.getUTCMonth();if(n.is(".old"))if(s===0){s=11;i-=1}else s-=1;else if(n.is(".new"))if(s===11){s=0;i+=1}else s+=1;this._setDate(r(i,s,o))}}this.picker.is(":visible")&&this._focused_from&&e(this._focused_from).focus();delete this._focused_from},_toggle_multidate:function(e){var t=this.dates.contains(e);e?t!==-1?this.dates.remove(t):this.dates.push(e):this.dates.clear();if(typeof this.o.multidate=="number")while(this.dates.length>this.o.multidate)this.dates.remove(0)},_setDate:function(e,t){(!t||t==="date")&&this._toggle_multidate(e&&new Date(e));if(!t||t==="view")this.viewDate=e&&new Date(e);this.fill();this.setValue();this._trigger("changeDate");var n;this.isInput?n=this.element:this.component&&(n=this.element.find("input"));n&&n.change();this.o.autoclose&&(!t||t==="date")&&this.hide()},moveMonth:function(e,n){if(!e)return t;if(!n)return e;var r=new Date(e.valueOf()),i=r.getUTCDate(),s=r.getUTCMonth(),o=Math.abs(n),u,a;n=n>0?1:-1;if(o===1){a=n===-1?function(){return r.getUTCMonth()===s}:function(){return r.getUTCMonth()!==u};u=s+n;r.setUTCMonth(u);if(u<0||u>11)u=(u+12)%12}else{for(var f=0;f<o;f++)r=this.moveMonth(r,n);u=r.getUTCMonth();r.setUTCDate(i);a=function(){return u!==r.getUTCMonth()}}while(a()){r.setUTCDate(--i);r.setUTCMonth(u)}return r},moveYear:function(e,t){return this.moveMonth(e,t*12)},dateWithinRange:function(e){return e>=this.o.startDate&&e<=this.o.endDate},keydown:function(e){if(this.picker.is(":not(:visible)")){e.keyCode===27&&this.show();return}var t=!1,n,r,s,o=this.focusDate||this.viewDate;switch(e.keyCode){case 27:if(this.focusDate){this.focusDate=null;this.viewDate=this.dates.get(-1)||this.viewDate;this.fill()}else this.hide();e.preventDefault();break;case 37:case 39:if(!this.o.keyboardNavigation)break;n=e.keyCode===37?-1:1;if(e.ctrlKey){r=this.moveYear(this.dates.get(-1)||i(),n);s=this.moveYear(o,n);this._trigger("changeYear",this.viewDate)}else if(e.shiftKey){r=this.moveMonth(this.dates.get(-1)||i(),n);s=this.moveMonth(o,n);this._trigger("changeMonth",this.viewDate)}else{r=new Date(this.dates.get(-1)||i());r.setUTCDate(r.getUTCDate()+n);s=new Date(o);s.setUTCDate(o.getUTCDate()+n)}if(this.dateWithinRange(r)){this.focusDate=this.viewDate=s;this.setValue();this.fill();e.preventDefault()}break;case 38:case 40:if(!this.o.keyboardNavigation)break;n=e.keyCode===38?-1:1;if(e.ctrlKey){r=this.moveYear(this.dates.get(-1)||i(),n);s=this.moveYear(o,n);this._trigger("changeYear",this.viewDate)}else if(e.shiftKey){r=this.moveMonth(this.dates.get(-1)||i(),n);s=this.moveMonth(o,n);this._trigger("changeMonth",this.viewDate)}else{r=new Date(this.dates.get(-1)||i());r.setUTCDate(r.getUTCDate()+n*7);s=new Date(o);s.setUTCDate(o.getUTCDate()+n*7)}if(this.dateWithinRange(r)){this.focusDate=this.viewDate=s;this.setValue();this.fill();e.preventDefault()}break;case 32:break;case 13:o=this.focusDate||this.dates.get(-1)||this.viewDate;this._toggle_multidate(o);t=!0;this.focusDate=null;this.viewDate=this.dates.get(-1)||this.viewDate;this.setValue();this.fill();if(this.picker.is(":visible")){e.preventDefault();this.o.autoclose&&this.hide()}break;case 9:this.focusDate=null;this.viewDate=this.dates.get(-1)||this.viewDate;this.fill();this.hide()}if(t){this.dates.length?this._trigger("changeDate"):this._trigger("clearDate");var u;this.isInput?u=this.element:this.component&&(u=this.element.find("input"));u&&u.change()}},showMode:function(e){e&&(this.viewMode=Math.max(this.o.minViewMode,Math.min(2,this.viewMode+e)));this.picker.find(">div").hide().filter(".datepicker-"+v.modes[this.viewMode].clsName).css("display","block");this.updateNavArrows()}};var a=function(t,n){this.element=e(t);this.inputs=e.map(n.inputs,function(e){return e.jquery?e[0]:e});delete n.inputs;e(this.inputs).datepicker(n).bind("changeDate",e.proxy(this.dateUpdated,this));this.pickers=e.map(this.inputs,function(t){return e(t).data("datepicker")});this.updateDates()};a.prototype={updateDates:function(){this.dates=e.map(this.pickers,function(e){return e.getUTCDate()});this.updateRanges()},updateRanges:function(){var t=e.map(this.dates,function(e){return e.valueOf()});e.each(this.pickers,function(e,n){n.setRange(t)})},dateUpdated:function(t){if(this.updating)return;this.updating=!0;var n=e(t.target).data("datepicker"),r=n.getUTCDate(),i=e.inArray(t.target,this.inputs),s=this.inputs.length;if(i===-1)return;e.each(this.pickers,function(e,t){t.getUTCDate()||t.setUTCDate(r)});if(r<this.dates[i])while(i>=0&&r<this.dates[i])this.pickers[i--].setUTCDate(r);else if(r>this.dates[i])while(i<s&&r>this.dates[i])this.pickers[i++].setUTCDate(r);this.updateDates();delete this.updating},remove:function(){e.map(this.pickers,function(e){e.remove()});delete this.element.data().datepicker}};var c=e.fn.datepicker;e.fn.datepicker=function(n){var r=Array.apply(null,arguments);r.shift();var i;this.each(function(){var s=e(this),o=s.data("datepicker"),c=typeof n=="object"&&n;if(!o){var p=f(this,"date"),d=e.extend({},h,p,c),v=l(d.language),m=e.extend({},h,v,p,c);if(s.is(".input-daterange")||m.inputs){var g={inputs:m.inputs||s.find("input").toArray()};s.data("datepicker",o=new a(this,e.extend(m,g)))}else s.data("datepicker",o=new u(this,m))}if(typeof n=="string"&&typeof o[n]=="function"){i=o[n].apply(o,r);if(i!==t)return!1}});return i!==t?i:this};var h=e.fn.datepicker.defaults={autoclose:!1,beforeShowDay:e.noop,calendarWeeks:!1,clearBtn:!1,daysOfWeekDisabled:[],endDate:Infinity,forceParse:!0,format:"mm/dd/yyyy",keyboardNavigation:!0,language:"en",minViewMode:0,multidate:!1,multidateSeparator:",",orientation:"auto",rtl:!1,startDate:-Infinity,startView:0,todayBtn:!1,todayHighlight:!1,weekStart:0},p=e.fn.datepicker.locale_opts=["format","rtl","weekStart"];e.fn.datepicker.Constructor=u;var d=e.fn.datepicker.dates={en:{days:["Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy","Chủ Nhật"],daysShort:["CN","T2","T3","T4","T5","T6","T7","CN"],daysMin:["CN","T2","T3","T4","T5","T6","T7","CN"],months:["Tháng Một","Tháng Hai","Tháng Ba","Tháng Tư","Tháng Năm","Tháng Sáu","Tháng Bảy","Tháng Tám","Tháng Chín","Tháng Mười","Tháng Mười Một","Tháng Mười Hai"],monthsShort:["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"],today:"Hôm nay",clear:"Clear"}},v={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(e){return e%4===0&&e%100!==0||e%400===0},getDaysInMonth:function(e,t){return[31,v.isLeapYear(e)?29:28,31,30,31,30,31,31,30,31,30,31][t]},validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,parseFormat:function(e){var t=e.replace(this.validParts,"\0").split("\0"),n=e.match(this.validParts);if(!t||!t.length||!n||n.length===0)throw new Error("Invalid date format.");return{separators:t,parts:n}},parseDate:function(n,i,s){function w(){var e=this.slice(0,a[c].length),t=a[c].slice(0,e.length);return e===t}if(!n)return t;if(n instanceof Date)return n;typeof i=="string"&&(i=v.parseFormat(i));var o=/([\-+]\d+)([dmwy])/,a=n.match(/([\-+]\d+)([dmwy])/g),f,l,c;if(/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(n)){n=new Date;for(c=0;c<a.length;c++){f=o.exec(a[c]);l=parseInt(f[1]);switch(f[2]){case"d":n.setUTCDate(n.getUTCDate()+l);break;case"m":n=u.prototype.moveMonth.call(u.prototype,n,l);break;case"w":n.setUTCDate(n.getUTCDate()+l*7);break;case"y":n=u.prototype.moveYear.call(u.prototype,n,l)}}return r(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate(),0,0,0)}a=n&&n.match(this.nonpunctuation)||[];n=new Date;var h={},p=["yyyy","yy","M","MM","m","mm","d","dd"],m={yyyy:function(e,t){return e.setUTCFullYear(t)},yy:function(e,t){return e.setUTCFullYear(2e3+t)},m:function(e,t){if(isNaN(e))return e;t-=1;while(t<0)t+=12;t%=12;e.setUTCMonth(t);while(e.getUTCMonth()!==t)e.setUTCDate(e.getUTCDate()-1);return e},d:function(e,t){return e.setUTCDate(t)}},g,y;m.M=m.MM=m.mm=m.m;m.dd=m.d;n=r(n.getFullYear(),n.getMonth(),n.getDate(),0,0,0);var b=i.parts.slice();a.length!==b.length&&(b=e(b).filter(function(t,n){return e.inArray(n,p)!==-1}).toArray());if(a.length===b.length){var E;for(c=0,E=b.length;c<E;c++){g=parseInt(a[c],10);f=b[c];if(isNaN(g))switch(f){case"MM":y=e(d[s].months).filter(w);g=e.inArray(y[0],d[s].months)+1;break;case"M":y=e(d[s].monthsShort).filter(w);g=e.inArray(y[0],d[s].monthsShort)+1}h[f]=g}var S,x;for(c=0;c<p.length;c++){x=p[c];if(x in h&&!isNaN(h[x])){S=new Date(n);m[x](S,h[x]);isNaN(S)||(n=S)}}}return n},formatDate:function(t,n,r){if(!t)return"";typeof n=="string"&&(n=v.parseFormat(n));var i={d:t.getUTCDate(),D:d[r].daysShort[t.getUTCDay()],DD:d[r].days[t.getUTCDay()],m:t.getUTCMonth()+1,M:d[r].monthsShort[t.getUTCMonth()],MM:d[r].months[t.getUTCMonth()],yy:t.getUTCFullYear().toString().substring(2),yyyy:t.getUTCFullYear()};i.dd=(i.d<10?"0":"")+i.d;i.mm=(i.m<10?"0":"")+i.m;t=[];var s=e.extend([],n.separators);for(var o=0,u=n.parts.length;o<=u;o++){s.length&&t.push(s.shift());t.push(i[n.parts[o]])}return t.join("")},headTemplate:'<thead><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};v.template='<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">'+v.headTemplate+"<tbody></tbody>"+v.footTemplate+"</table>"+"</div>"+'<div class="datepicker-months">'+'<table class="table-condensed">'+v.headTemplate+v.contTemplate+v.footTemplate+"</table>"+"</div>"+'<div class="datepicker-years">'+'<table class="table-condensed">'+v.headTemplate+v.contTemplate+v.footTemplate+"</table>"+"</div>"+"</div>";e.fn.datepicker.DPGlobal=v;e.fn.datepicker.noConflict=function(){e.fn.datepicker=c;return this};e(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(t){var n=e(this);if(n.data("datepicker"))return;t.preventDefault();n.datepicker("show")});e(function(){e('[data-provide="datepicker-inline"]').datepicker()})})(window.jQuery);


