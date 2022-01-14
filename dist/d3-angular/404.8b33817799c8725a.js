"use strict";var vn=Object.defineProperty,Cn=Object.defineProperties,Vn=Object.getOwnPropertyDescriptors,Ce=Object.getOwnPropertySymbols,An=Object.prototype.hasOwnProperty,Mn=Object.prototype.propertyIsEnumerable,Ve=(f,u,a)=>u in f?vn(f,u,{enumerable:!0,configurable:!0,writable:!0,value:a}):f[u]=a,D=(f,u)=>{for(var a in u||(u={}))An.call(u,a)&&Ve(f,a,u[a]);if(Ce)for(var a of Ce(u))Mn.call(u,a)&&Ve(f,a,u[a]);return f},I=(f,u)=>Cn(f,Vn(u));(self.webpackChunkd3_angular=self.webpackChunkd3_angular||[]).push([[404],{4404:(f,u,a)=>{a.r(u),a.d(u,{FeatureModule:()=>w});var o=a(6019),g=a(1509),y=a(3556);const F=[{path:"",pathMatch:"full",redirectTo:"force-directed-graph"},{path:"force-directed-graph",loadChildren:()=>a.e(169).then(a.bind(a,3169)).then(d=>d.ForceDirectedGraphModule)}];let m=(()=>{class d{}return d.\u0275fac=function(S){return new(S||d)},d.\u0275mod=y.oAB({type:d}),d.\u0275inj=y.cJS({imports:[[g.Bz.forChild(F)],g.Bz]}),d})();var O=a(1382);let w=(()=>{class d{}return d.\u0275fac=function(S){return new(S||d)},d.\u0275mod=y.oAB({type:d}),d.\u0275inj=y.cJS({imports:[[o.ez,O.m,m]]}),d})()},1382:(f,u,a)=>{a.d(u,{m:()=>F});var o=a(6019),g=a(7537),y=a(3556);let F=(()=>{class m{}return m.\u0275fac=function(w){return new(w||m)},m.\u0275mod=y.oAB({type:m}),m.\u0275inj=y.cJS({imports:[[o.ez,g.u5,g.UX],g.u5,g.UX]}),m})()},7537:(f,u,a)=>{a.d(u,{Fj:()=>R,NI:()=>T,u:()=>mt,cw:()=>z,sg:()=>J,u5:()=>mn,JJ:()=>Wt,JL:()=>$t,On:()=>ct,_:()=>ht,UX:()=>_n,kI:()=>we,_Y:()=>ne});var o=a(3556),g=a(6019),y=a(8305),F=a(886),m=a(9985),O=a(8830),w=a(8889),d=a(2937),N=a(2857),Ae=a(7867),Me=a(4753);let Vt=(()=>{class n{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n}),n})(),A=(()=>{class n extends Vt{}return n.\u0275fac=function(){let e;return function(r){return(e||(e=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const _=new o.OlP("NgValueAccessor"),Ee={provide:_,useExisting:(0,o.Gpc)(()=>R),multi:!0},Fe=new o.OlP("CompositionEventMode");let R=(()=>{class n extends Vt{constructor(t,r,i){super(t,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function(){const n=(0,g.q)()?(0,g.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(t){this.setProperty("value",null==t?"":t)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(Fe,8))},n.\u0275dir=o.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,r){1&t&&o.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[o._Bn([Ee]),o.qOj]}),n})();function v(n){return null==n||0===n.length}function Mt(n){return null!=n&&"number"==typeof n.length}const c=new o.OlP("NgValidators"),C=new o.OlP("NgAsyncValidators"),Oe=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class we{static min(e){return n=e,e=>{if(v(e.value)||v(n))return null;const t=parseFloat(e.value);return!isNaN(t)&&t<n?{min:{min:n,actual:e.value}}:null};var n}static max(e){return n=e,e=>{if(v(e.value)||v(n))return null;const t=parseFloat(e.value);return!isNaN(t)&&t>n?{max:{max:n,actual:e.value}}:null};var n}static required(e){return v(e.value)?{required:!0}:null}static requiredTrue(e){return!0===e.value?null:{required:!0}}static email(e){return v((n=e).value)||Oe.test(n.value)?null:{email:!0};var n}static minLength(e){return n=e,e=>v(e.value)||!Mt(e.value)?null:e.value.length<n?{minlength:{requiredLength:n,actualLength:e.value.length}}:null;var n}static maxLength(e){return n=e,e=>Mt(e.value)&&e.value.length>n?{maxlength:{requiredLength:n,actualLength:e.value.length}}:null;var n}static pattern(e){return function(n){if(!n)return G;let e,t;return"string"==typeof n?(t="","^"!==n.charAt(0)&&(t+="^"),t+=n,"$"!==n.charAt(n.length-1)&&(t+="$"),e=new RegExp(t)):(t=n.toString(),e=n),r=>{if(v(r.value))return null;const i=r.value;return e.test(i)?null:{pattern:{requiredPattern:t,actualValue:i}}}}(e)}static nullValidator(e){return null}static compose(e){return kt(e)}static composeAsync(e){return It(e)}}function G(n){return null}function Gt(n){return null!=n}function Bt(n){const e=(0,o.QGY)(n)?(0,Ae.D)(n):n;return(0,o.CqO)(e),e}function xt(n){let e={};return n.forEach(t=>{e=null!=t?D(D({},e),t):e}),0===Object.keys(e).length?null:e}function Pt(n,e){return e.map(t=>t(n))}function Tt(n){return n.map(e=>function(n){return!n.validate}(e)?e:t=>e.validate(t))}function kt(n){if(!n)return null;const e=n.filter(Gt);return 0==e.length?null:function(t){return xt(Pt(t,e))}}function Z(n){return null!=n?kt(Tt(n)):null}function It(n){if(!n)return null;const e=n.filter(Gt);return 0==e.length?null:function(t){return function(...n){const e=(0,O.jO)(n),{args:t,keys:r}=(0,F.D)(n),i=new y.y(s=>{const{length:l}=t;if(!l)return void s.complete();const p=new Array(l);let M=l,b=l;for(let X=0;X<l;X++){let Ct=!1;(0,m.Xf)(t[X]).subscribe(new w.Q(s,yn=>{Ct||(Ct=!0,b--),p[X]=yn},()=>M--,void 0,()=>{(!M||!Ct)&&(b||s.next(r?(0,N.n)(r,p):p),s.complete())}))}});return e?i.pipe((0,d.Z)(e)):i}(Pt(t,e).map(Bt)).pipe((0,Me.U)(xt))}}function K(n){return null!=n?It(Tt(n)):null}function Rt(n,e){return null===n?[e]:Array.isArray(n)?[...n,e]:[n,e]}function Ut(n){return n._rawValidators}function Ht(n){return n._rawAsyncValidators}function tt(n){return n?Array.isArray(n)?n:[n]:[]}function U(n,e){return Array.isArray(n)?n.includes(e):n===e}function jt(n,e){const t=tt(e);return tt(n).forEach(i=>{U(t,i)||t.push(i)}),t}function Lt(n,e){return tt(e).filter(t=>!U(n,t))}class Yt{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Z(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=K(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e){this.control&&this.control.reset(e)}hasError(e,t){return!!this.control&&this.control.hasError(e,t)}getError(e,t){return this.control?this.control.getError(e,t):null}}class h extends Yt{get formDirective(){return null}get path(){return null}}class V extends Yt{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class qt{constructor(e){this._cd=e}is(e){var t,r,i;return"submitted"===e?!!(null==(t=this._cd)?void 0:t.submitted):!!(null==(i=null==(r=this._cd)?void 0:r.control)?void 0:i[e])}}let Wt=(()=>{class n extends qt{constructor(t){super(t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(V,2))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,r){2&t&&o.ekj("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))},features:[o.qOj]}),n})(),$t=(()=>{class n extends qt{constructor(t){super(t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(h,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,r){2&t&&o.ekj("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))("ng-submitted",r.is("submitted"))},features:[o.qOj]}),n})();function j(n,e){return[...e.path,n]}function B(n,e){rt(n,e),e.valueAccessor.writeValue(n.value),function(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&zt(n,e)})}(n,e),function(n,e){const t=(r,i)=>{e.valueAccessor.writeValue(r),i&&e.viewToModelUpdate(r)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}(n,e),function(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&zt(n,e),"submit"!==n.updateOn&&n.markAsTouched()})}(n,e),function(n,e){if(e.valueAccessor.setDisabledState){const t=r=>{e.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}(n,e)}function L(n,e,t=!0){const r=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(r),e.valueAccessor.registerOnTouched(r)),q(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function Y(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function rt(n,e){const t=Ut(n);null!==e.validator?n.setValidators(Rt(t,e.validator)):"function"==typeof t&&n.setValidators([t]);const r=Ht(n);null!==e.asyncValidator?n.setAsyncValidators(Rt(r,e.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const i=()=>n.updateValueAndValidity();Y(e._rawValidators,i),Y(e._rawAsyncValidators,i)}function q(n,e){let t=!1;if(null!==n){if(null!==e.validator){const i=Ut(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(l=>l!==e.validator);s.length!==i.length&&(t=!0,n.setValidators(s))}}if(null!==e.asyncValidator){const i=Ht(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(l=>l!==e.asyncValidator);s.length!==i.length&&(t=!0,n.setAsyncValidators(s))}}}const r=()=>{};return Y(e._rawValidators,r),Y(e._rawAsyncValidators,r),t}function zt(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function ot(n,e){if(!n.hasOwnProperty("model"))return!1;const t=n.model;return!!t.isFirstChange()||!Object.is(e,t.currentValue)}function it(n,e){if(!e)return null;let t,r,i;return Array.isArray(e),e.forEach(s=>{s.constructor===R?t=s:function(n){return Object.getPrototypeOf(n.constructor)===A}(s)?r=s:i=s}),i||r||t||null}function W(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}const x="VALID",$="INVALID",E="PENDING",P="DISABLED";function st(n){return(lt(n)?n.validators:n)||null}function Xt(n){return Array.isArray(n)?Z(n):n||null}function at(n,e){return(lt(e)?e.asyncValidators:n)||null}function Zt(n){return Array.isArray(n)?K(n):n||null}function lt(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}class ut{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=e,this._rawAsyncValidators=t,this._composedValidatorFn=Xt(this._rawValidators),this._composedAsyncValidatorFn=Zt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===x}get invalid(){return this.status===$}get pending(){return this.status==E}get disabled(){return this.status===P}get enabled(){return this.status!==P}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._rawValidators=e,this._composedValidatorFn=Xt(e)}setAsyncValidators(e){this._rawAsyncValidators=e,this._composedAsyncValidatorFn=Zt(e)}addValidators(e){this.setValidators(jt(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(jt(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Lt(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Lt(e,this._rawAsyncValidators))}hasValidator(e){return U(this._rawValidators,e)}hasAsyncValidator(e){return U(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=E,!1!==e.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){const t=this._parentMarkedDirty(e.onlySelf);this.status=P,this.errors=null,this._forEachChild(r=>{r.disable(I(D({},e),{onlySelf:!0}))}),this._updateValue(),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(I(D({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){const t=this._parentMarkedDirty(e.onlySelf);this.status=x,this._forEachChild(r=>{r.enable(I(D({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(I(D({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===x||this.status===E)&&this._runAsyncValidator(e.emitEvent)),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?P:x}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=E,this._hasOwnPendingAsyncValidator=!0;const t=Bt(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(!1!==t.emitEvent)}get(e){return function(n,e,t){if(null==e||(Array.isArray(e)||(e=e.split(".")),Array.isArray(e)&&0===e.length))return null;let r=n;return e.forEach(i=>{r=r instanceof z?r.controls.hasOwnProperty(i)?r.controls[i]:null:r instanceof je&&r.at(i)||null}),r}(this,e)}getError(e,t){const r=t?this.get(t):this;return r&&r.errors?r.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?P:this.errors?$:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(E)?E:this._anyControlsHaveStatus($)?$:x}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_isBoxedValue(e){return"object"==typeof e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in e}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){lt(e)&&null!=e.updateOn&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class T extends ut{constructor(e=null,t,r){super(st(t),at(r,t)),this._onChange=[],this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&!1!==t.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==t.emitViewToModelChange)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=null,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){W(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){W(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(e){this._isBoxedValue(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}}class z extends ut{constructor(e,t,r){super(st(t),at(r,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,r={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,r={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){this._checkAllValuesPresent(e),Object.keys(e).forEach(r=>{this._throwIfControlMissing(r),this.controls[r].setValue(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){null!=e&&(Object.keys(e).forEach(r=>{this.controls[r]&&this.controls[r].patchValue(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((r,i)=>{r.reset(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,r)=>(e[r]=t instanceof T?t.value:t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,r)=>!!r._syncPendingControls()||t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_throwIfControlMissing(e){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[e])throw new Error(`Cannot find form control with name: ${e}.`)}_forEachChild(e){Object.keys(this.controls).forEach(t=>{const r=this.controls[t];r&&e(r,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(const t of Object.keys(this.controls)){const r=this.controls[t];if(this.contains(t)&&e(r))return!0}return!1}_reduceValue(){return this._reduceChildren({},(e,t,r)=>((t.enabled||this.disabled)&&(e[r]=t.value),e))}_reduceChildren(e,t){let r=e;return this._forEachChild((i,s)=>{r=t(r,i,s)}),r}_allControlsDisabled(){for(const e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_checkAllValuesPresent(e){this._forEachChild((t,r)=>{if(void 0===e[r])throw new Error(`Must supply a value for form control with name: '${r}'.`)})}}class je extends ut{constructor(e,t,r){super(st(t),at(r,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[e]}push(e,t={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(e,t,r={}){this.controls.splice(e,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),this.controls.splice(e,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(e,t,r={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),this.controls.splice(e,1),t&&(this.controls.splice(e,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,t={}){this._checkAllValuesPresent(e),e.forEach((r,i)=>{this._throwIfControlMissing(i),this.at(i).setValue(r,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){null!=e&&(e.forEach((r,i)=>{this.at(i)&&this.at(i).patchValue(r,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e=[],t={}){this._forEachChild((r,i)=>{r.reset(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(e=>e instanceof T?e.value:e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_syncPendingControls(){let e=this.controls.reduce((t,r)=>!!r._syncPendingControls()||t,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_throwIfControlMissing(e){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(e))throw new Error(`Cannot find form control at index ${e}`)}_forEachChild(e){this.controls.forEach((t,r)=>{e(t,r)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(t=>t.enabled&&e(t))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_checkAllValuesPresent(e){this._forEachChild((t,r)=>{if(void 0===e[r])throw new Error(`Must supply a value for form control at index: ${r}.`)})}_allControlsDisabled(){for(const e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}}const qe={provide:V,useExisting:(0,o.Gpc)(()=>ct)},ee=(()=>Promise.resolve(null))();let ct=(()=>{class n extends V{constructor(t,r,i,s){super(),this.control=new T,this._registered=!1,this.update=new o.vpe,this._parent=t,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=it(0,s)}ngOnChanges(t){this._checkForErrors(),this._registered||this._setUpControl(),"isDisabled"in t&&this._updateDisabled(t),ot(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._parent?j(this.name,this._parent):[this.name]}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){B(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(t){ee.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1})})}_updateDisabled(t){const r=t.isDisabled.currentValue,i=""===r||r&&"false"!==r;ee.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable()})}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(h,9),o.Y36(c,10),o.Y36(C,10),o.Y36(_,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[o._Bn([qe]),o.qOj,o.TTD]}),n})(),ne=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275dir=o.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),n})();const $e={provide:_,useExisting:(0,o.Gpc)(()=>ht),multi:!0};let oe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})(),ze=(()=>{class n{constructor(){this._accessors=[]}add(t,r){this._accessors.push([t,r])}remove(t){for(let r=this._accessors.length-1;r>=0;--r)if(this._accessors[r][1]===t)return void this._accessors.splice(r,1)}select(t){this._accessors.forEach(r=>{this._isSameGroup(r,t)&&r[1]!==t&&r[1].fireUncheck(t.value)})}_isSameGroup(t,r){return!!t[0].control&&t[0]._parent===r._control._parent&&t[1].name===r.name}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:oe}),n})(),ht=(()=>{class n extends A{constructor(t,r,i,s){super(t,r),this._registry=i,this._injector=s,this.onChange=()=>{}}ngOnInit(){this._control=this._injector.get(V),this._checkName(),this._registry.add(this._control,this)}ngOnDestroy(){this._registry.remove(this)}writeValue(t){this._state=t===this.value,this.setProperty("checked",this._state)}registerOnChange(t){this._fn=t,this.onChange=()=>{t(this.value),this._registry.select(this)}}fireUncheck(t){this.writeValue(t)}_checkName(){!this.name&&this.formControlName&&(this.name=this.formControlName)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(ze),o.Y36(o.zs3))},n.\u0275dir=o.lG2({type:n,selectors:[["input","type","radio","formControlName",""],["input","type","radio","formControl",""],["input","type","radio","ngModel",""]],hostBindings:function(t,r){1&t&&o.NdJ("change",function(){return r.onChange()})("blur",function(){return r.onTouched()})},inputs:{name:"name",formControlName:"formControlName",value:"value"},features:[o._Bn([$e]),o.qOj]}),n})();const ft=new o.OlP("NgModelWithFormControlWarning"),Xe={provide:h,useExisting:(0,o.Gpc)(()=>J)};let J=(()=>{class n extends h{constructor(t,r){super(),this.validators=t,this.asyncValidators=r,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new o.vpe,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(q(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){const r=this.form.get(t.path);return B(r,t),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){L(t.control||null,t,!1),W(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,r){this.form.get(t.path).setValue(r)}onSubmit(t){return this.submitted=!0,function(n,e){n._syncPendingControls(),e.forEach(t=>{const r=t.control;"submit"===r.updateOn&&r._pendingChange&&(t.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}(this.form,this.directives),this.ngSubmit.emit(t),!1}onReset(){this.resetForm()}resetForm(t){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{const r=t.control,i=this.form.get(t.path);r!==i&&(L(r||null,t),i instanceof T&&(B(i,t),t.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){const r=this.form.get(t.path);(function(n,e){rt(n,e)})(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){const r=this.form.get(t.path);r&&function(n,e){return q(n,e)}(r,t)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){rt(this.form,this),this._oldForm&&q(this._oldForm,this)}_checkFormPresent(){}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(c,10),o.Y36(C,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroup",""]],hostBindings:function(t,r){1&t&&o.NdJ("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[o._Bn([Xe]),o.qOj,o.TTD]}),n})();const tn={provide:V,useExisting:(0,o.Gpc)(()=>mt)};let mt=(()=>{class n extends V{constructor(t,r,i,s,l){super(),this._ngModelWarningConfig=l,this._added=!1,this.update=new o.vpe,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=it(0,s)}set isDisabled(t){}ngOnChanges(t){this._added||this._setUpControl(),ot(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return j(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this.control.disabled&&this.valueAccessor.setDisabledState&&this.valueAccessor.setDisabledState(!0),this._added=!0}}return n._ngModelWarningSentOnce=!1,n.\u0275fac=function(t){return new(t||n)(o.Y36(h,13),o.Y36(c,10),o.Y36(C,10),o.Y36(_,10),o.Y36(ft,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[o._Bn([tn]),o.qOj,o.TTD]}),n})(),ve=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[oe]]}),n})(),mn=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[ve]}),n})(),_n=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:ft,useValue:t.warnOnNgModelWithFormControl}]}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[ve]}),n})()}}]);