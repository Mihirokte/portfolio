(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const fl="180",Ch=0,Gl=1,Ph=2,dl=1,Lh=2,Nn=3,An=0,Xe=1,Ke=2,Qn=0,Ki=1,ma=2,Wl=3,Xl=4,Dh=5,mi=100,Fh=101,Ih=102,Uh=103,Nh=104,Oh=200,Bh=201,zh=202,kh=203,ga=204,_a=205,Hh=206,Vh=207,Gh=208,Wh=209,Xh=210,qh=211,Yh=212,Zh=213,Jh=214,va=0,xa=1,ya=2,tr=3,Ma=4,Sa=5,Ea=6,Ta=7,xu=0,$h=1,Kh=2,kn=0,jh=1,Qh=2,tf=3,ef=4,nf=5,rf=6,sf=7,yu=300,er=301,nr=302,ba=303,Aa=304,Mo=306,oo=1e3,vi=1001,wa=1002,He=1003,of=1004,ys=1005,Sn=1006,Po=1007,xi=1008,wn=1009,Mu=1010,Su=1011,Wr=1012,pl=1013,Mi=1014,En=1015,us=1016,ml=1017,gl=1018,Xr=1020,Eu=35902,Tu=35899,bu=1021,Au=1022,dn=1023,qr=1026,Yr=1027,So=1028,_l=1029,wu=1030,vl=1031,xl=1033,js=33776,Qs=33777,to=33778,eo=33779,Ra=35840,Ca=35841,Pa=35842,La=35843,Da=36196,Fa=37492,Ia=37496,Ua=37808,Na=37809,Oa=37810,Ba=37811,za=37812,ka=37813,Ha=37814,Va=37815,Ga=37816,Wa=37817,Xa=37818,qa=37819,Ya=37820,Za=37821,Ja=36492,$a=36494,Ka=36495,ja=36283,Qa=36284,tl=36285,el=36286,af=3200,lf=3201,Ru=0,cf=1,xn="",$e="srgb",ir="srgb-linear",ao="linear",le="srgb",On=7680,uf=7681,hf=517,nl=519,ff=512,df=513,pf=514,Cu=515,mf=516,gf=517,_f=518,vf=519,il=35044,ql="300 es",Tn=2e3,lo=2001;class dr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yl=1234567;const zr=Math.PI/180,rr=180/Math.PI;function bn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]).toLowerCase()}function jt(n,t,e){return Math.max(t,Math.min(e,n))}function yl(n,t){return(n%t+t)%t}function xf(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function yf(n,t,e){return n!==t?(e-n)/(t-n):0}function kr(n,t,e){return(1-e)*n+e*t}function Mf(n,t,e,i){return kr(n,t,1-Math.exp(-e*i))}function Sf(n,t=1){return t-Math.abs(yl(n,t*2)-t)}function Ef(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Tf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function bf(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Af(n,t){return n+Math.random()*(t-n)}function wf(n){return n*(.5-Math.random())}function Rf(n){n!==void 0&&(Yl=n);let t=Yl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Cf(n){return n*zr}function Pf(n){return n*rr}function Lf(n){return(n&n-1)===0&&n!==0}function Df(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ff(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function If(n,t,e,i,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+i)/2),u=o((t+i)/2),h=s((t-i)/2),f=o((t-i)/2),p=s((i-t)/2),g=o((i-t)/2);switch(r){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function hn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function oe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const hs={DEG2RAD:zr,RAD2DEG:rr,generateUUID:bn,clamp:jt,euclideanModulo:yl,mapLinear:xf,inverseLerp:yf,lerp:kr,damp:Mf,pingpong:Sf,smoothstep:Ef,smootherstep:Tf,randInt:bf,randFloat:Af,randFloatSpread:wf,seededRandom:Rf,degToRad:Cf,radToDeg:Pf,isPowerOfTwo:Lf,ceilPowerOfTwo:Df,floorPowerOfTwo:Ff,setQuaternionFromProperEuler:If,normalize:oe,denormalize:hn};class ft{constructor(t=0,e=0){ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gn{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==p||u!==g){let m=1-a;const d=l*f+c*p+u*g+h*_,T=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){const R=Math.sqrt(S),C=Math.atan2(R,d*T);m=Math.sin(m*C)/R,a=Math.sin(a*C)/R}const x=a*T;if(l=l*m+f*x,c=c*m+p*x,u=u*m+g*x,h=h*m+_*x,m===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+u*h+l*p-c*f,t[e+1]=l*g+u*f+c*h-a*p,t[e+2]=c*g+u*p+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(t=0,e=0,i=0){w.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*i),u=2*(a*e-s*r),h=2*(s*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Lo.copy(this).projectOnVector(t),this.sub(Lo)}reflect(t){return this.sub(Lo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lo=new w,Zl=new Gn;class Jt{constructor(t,e,i,r,s,o,a,l,c){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c)}set(t,e,i,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],_=r[0],m=r[3],d=r[6],T=r[1],S=r[4],x=r[7],R=r[2],C=r[5],L=r[8];return s[0]=o*_+a*T+l*R,s[3]=o*m+a*S+l*C,s[6]=o*d+a*x+l*L,s[1]=c*_+u*T+h*R,s[4]=c*m+u*S+h*C,s[7]=c*d+u*x+h*L,s[2]=f*_+p*T+g*R,s[5]=f*m+p*S+g*C,s[8]=f*d+p*x+g*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=e*h+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(r*c-u*i)*_,t[2]=(a*i-r*o)*_,t[3]=f*_,t[4]=(u*e-r*l)*_,t[5]=(r*s-a*e)*_,t[6]=p*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Do.makeScale(t,e)),this}rotate(t){return this.premultiply(Do.makeRotation(-t)),this}translate(t,e){return this.premultiply(Do.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Do=new Jt;function Pu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function co(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Uf(){const n=co("canvas");return n.style.display="block",n}const Jl={};function Zr(n){n in Jl||(Jl[n]=!0,console.warn(n))}function Nf(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const $l=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kl=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Of(){const n={enabled:!0,workingColorSpace:ir,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===le&&(r.r=Hn(r.r),r.g=Hn(r.g),r.b=Hn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===le&&(r.r=ji(r.r),r.g=ji(r.g),r.b=ji(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===xn?ao:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Zr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Zr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ir]:{primaries:t,whitePoint:i,transfer:ao,toXYZ:$l,fromXYZ:Kl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:t,whitePoint:i,transfer:le,toXYZ:$l,fromXYZ:Kl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}}),n}const ee=Of();function Hn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ji(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ri;class Bf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ri===void 0&&(Ri=co("canvas")),Ri.width=t.width,Ri.height=t.height;const r=Ri.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Ri}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=co("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Hn(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Hn(e[i]/255)*255):e[i]=Hn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let zf=0;class Ml{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=bn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Fo(r[o].image)):s.push(Fo(r[o]))}else s=Fo(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Fo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Bf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kf=0;const Io=new w;class Ie extends dr{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,i=vi,r=vi,s=Sn,o=xi,a=dn,l=wn,c=Ie.DEFAULT_ANISOTROPY,u=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=bn(),this.name="",this.source=new Ml(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Io).x}get height(){return this.source.getSize(Io).y}get depth(){return this.source.getSize(Io).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oo:t.x=t.x-Math.floor(t.x);break;case vi:t.x=t.x<0?0:1;break;case wa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oo:t.y=t.y-Math.floor(t.y);break;case vi:t.y=t.y<0?0:1;break;case wa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=yu;Ie.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,i=0,r=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,x=(p+1)/2,R=(d+1)/2,C=(u+f)/4,L=(h+_)/4,F=(g+m)/4;return S>x&&S>R?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=C/i,s=L/i):x>R?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=C/r,s=F/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=L/s,r=F/s),this.set(i,r,s,e),this}let T=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-_)/T,this.z=(f-u)/T,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hf extends dr{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const r={width:t,height:e,depth:i.depth},s=new Ie(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Ml(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends Hf{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Lu extends Ie{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=He,this.minFilter=He,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vf extends Ie{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=He,this.minFilter=He,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bi{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ln):ln.fromBufferAttribute(s,o),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ms.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ms.copy(i.boundingBox)),Ms.applyMatrix4(t.matrixWorld),this.union(Ms)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mr),Ss.subVectors(this.max,Mr),Ci.subVectors(t.a,Mr),Pi.subVectors(t.b,Mr),Li.subVectors(t.c,Mr),Xn.subVectors(Pi,Ci),qn.subVectors(Li,Pi),oi.subVectors(Ci,Li);let e=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-oi.z,oi.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,oi.z,0,-oi.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-oi.y,oi.x,0];return!Uo(e,Ci,Pi,Li,Ss)||(e=[1,0,0,0,1,0,0,0,1],!Uo(e,Ci,Pi,Li,Ss))?!1:(Es.crossVectors(Xn,qn),e=[Es.x,Es.y,Es.z],Uo(e,Ci,Pi,Li,Ss))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ln=[new w,new w,new w,new w,new w,new w,new w,new w],ln=new w,Ms=new bi,Ci=new w,Pi=new w,Li=new w,Xn=new w,qn=new w,oi=new w,Mr=new w,Ss=new w,Es=new w,ai=new w;function Uo(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ai.fromArray(n,s);const a=r.x*Math.abs(ai.x)+r.y*Math.abs(ai.y)+r.z*Math.abs(ai.z),l=t.dot(ai),c=e.dot(ai),u=i.dot(ai);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Gf=new bi,Sr=new w,No=new w;class pr{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Gf.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sr.subVectors(t,this.center);const e=Sr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Sr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(No.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sr.copy(t.center).add(No)),this.expandByPoint(Sr.copy(t.center).sub(No))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Dn=new w,Oo=new w,Ts=new w,Yn=new w,Bo=new w,bs=new w,zo=new w;class Sl{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Oo.copy(t).add(e).multiplyScalar(.5),Ts.copy(e).sub(t).normalize(),Yn.copy(this.origin).sub(Oo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Ts),a=Yn.dot(this.direction),l=-Yn.dot(Ts),c=Yn.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Oo).addScaledVector(Ts,f),p}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);const i=Dn.dot(this.direction),r=Dn.dot(Dn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,i,r,s){Bo.subVectors(e,t),bs.subVectors(i,t),zo.crossVectors(Bo,bs);let o=this.direction.dot(zo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,t);const l=a*this.direction.dot(bs.crossVectors(Yn,bs));if(l<0)return null;const c=a*this.direction.dot(Bo.cross(Yn));if(c<0||l+c>o)return null;const u=-a*Yn.dot(zo);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,i,r,s,o,a,l,c,u,h,f,p,g,_,m){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c,u,h,f,p,g,_,m)}set(t,e,i,r,s,o,a,l,c,u,h,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Di.setFromMatrixColumn(t,0).length(),s=1/Di.setFromMatrixColumn(t,1).length(),o=1/Di.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*u,p=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,p=l*h,g=c*u,_=c*h;e[0]=f+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,p=l*h,g=c*u,_=c*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,p=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wf,t,Xf)}lookAt(t,e,i){const r=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),Zn.crossVectors(i,Ze),Zn.lengthSq()===0&&(Math.abs(i.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),Zn.crossVectors(i,Ze)),Zn.normalize(),As.crossVectors(Ze,Zn),r[0]=Zn.x,r[4]=As.x,r[8]=Ze.x,r[1]=Zn.y,r[5]=As.y,r[9]=Ze.y,r[2]=Zn.z,r[6]=As.z,r[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],T=i[3],S=i[7],x=i[11],R=i[15],C=r[0],L=r[4],F=r[8],M=r[12],y=r[1],P=r[5],N=r[9],z=r[13],k=r[2],Z=r[6],H=r[10],st=r[14],X=r[3],ct=r[7],_t=r[11],Tt=r[15];return s[0]=o*C+a*y+l*k+c*X,s[4]=o*L+a*P+l*Z+c*ct,s[8]=o*F+a*N+l*H+c*_t,s[12]=o*M+a*z+l*st+c*Tt,s[1]=u*C+h*y+f*k+p*X,s[5]=u*L+h*P+f*Z+p*ct,s[9]=u*F+h*N+f*H+p*_t,s[13]=u*M+h*z+f*st+p*Tt,s[2]=g*C+_*y+m*k+d*X,s[6]=g*L+_*P+m*Z+d*ct,s[10]=g*F+_*N+m*H+d*_t,s[14]=g*M+_*z+m*st+d*Tt,s[3]=T*C+S*y+x*k+R*X,s[7]=T*L+S*P+x*Z+R*ct,s[11]=T*F+S*N+x*H+R*_t,s[15]=T*M+S*z+x*st+R*Tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*p-i*l*p)+_*(+e*l*p-e*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+e*c*h-e*a*p-s*o*h+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-e*l*h+e*a*f+r*o*h-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],T=h*m*c-_*f*c+_*l*p-a*m*p-h*l*d+a*f*d,S=g*f*c-u*m*c-g*l*p+o*m*p+u*l*d-o*f*d,x=u*_*c-g*h*c+g*a*p-o*_*p-u*a*d+o*h*d,R=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,C=e*T+i*S+r*x+s*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return t[0]=T*L,t[1]=(_*f*s-h*m*s-_*r*p+i*m*p+h*r*d-i*f*d)*L,t[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*d+i*l*d)*L,t[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*p-i*l*p)*L,t[4]=S*L,t[5]=(u*m*s-g*f*s+g*r*p-e*m*p-u*r*d+e*f*d)*L,t[6]=(g*l*s-o*m*s-g*r*c+e*m*c+o*r*d-e*l*d)*L,t[7]=(o*f*s-u*l*s+u*r*c-e*f*c-o*r*p+e*l*p)*L,t[8]=x*L,t[9]=(g*h*s-u*_*s-g*i*p+e*_*p+u*i*d-e*h*d)*L,t[10]=(o*_*s-g*a*s+g*i*c-e*_*c-o*i*d+e*a*d)*L,t[11]=(u*a*s-o*h*s-u*i*c+e*h*c+o*i*p-e*a*p)*L,t[12]=R*L,t[13]=(u*_*r-g*h*r+g*i*f-e*_*f-u*i*m+e*h*m)*L,t[14]=(g*a*r-o*_*r-g*i*l+e*_*l+o*i*m-e*a*m)*L,t[15]=(o*h*r-u*a*r+u*i*l-e*h*l-o*i*f+e*a*f)*L,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,g=s*h,_=o*u,m=o*h,d=a*h,T=l*c,S=l*u,x=l*h,R=i.x,C=i.y,L=i.z;return r[0]=(1-(_+d))*R,r[1]=(p+x)*R,r[2]=(g-S)*R,r[3]=0,r[4]=(p-x)*C,r[5]=(1-(f+d))*C,r[6]=(m+T)*C,r[7]=0,r[8]=(g+S)*L,r[9]=(m-T)*L,r[10]=(1-(f+_))*L,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Di.set(r[0],r[1],r[2]).length();const o=Di.set(r[4],r[5],r[6]).length(),a=Di.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],cn.copy(this);const c=1/s,u=1/o,h=1/a;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=h,cn.elements[9]*=h,cn.elements[10]*=h,e.setFromRotationMatrix(cn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=Tn,l=!1){const c=this.elements,u=2*s/(e-t),h=2*s/(i-r),f=(e+t)/(e-t),p=(i+r)/(i-r);let g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===Tn)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===lo)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=Tn,l=!1){const c=this.elements,u=2/(e-t),h=2/(i-r),f=-(e+t)/(e-t),p=-(i+r)/(i-r);let g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===Tn)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===lo)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Di=new w,cn=new re,Wf=new w(0,0,0),Xf=new w(1,1,1),Zn=new w,As=new w,Ze=new w,jl=new re,Ql=new Gn;class Wn{constructor(t=0,e=0,i=0,r=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return jl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ql.setFromEuler(this),this.setFromQuaternion(Ql,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class El{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let qf=0;const tc=new w,Fi=new Gn,Fn=new re,ws=new w,Er=new w,Yf=new w,Zf=new Gn,ec=new w(1,0,0),nc=new w(0,1,0),ic=new w(0,0,1),rc={type:"added"},Jf={type:"removed"},Ii={type:"childadded",child:null},ko={type:"childremoved",child:null};class Se extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new w,e=new Wn,i=new Gn,r=new w(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new re},normalMatrix:{value:new Jt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new El,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.premultiply(Fi),this}rotateX(t){return this.rotateOnAxis(ec,t)}rotateY(t){return this.rotateOnAxis(nc,t)}rotateZ(t){return this.rotateOnAxis(ic,t)}translateOnAxis(t,e){return tc.copy(t).applyQuaternion(this.quaternion),this.position.add(tc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ec,t)}translateY(t){return this.translateOnAxis(nc,t)}translateZ(t){return this.translateOnAxis(ic,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ws.copy(t):ws.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Er,ws,this.up):Fn.lookAt(ws,Er,this.up),this.quaternion.setFromRotationMatrix(Fn),r&&(Fn.extractRotation(r.matrixWorld),Fi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rc),Ii.child=t,this.dispatchEvent(Ii),Ii.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jf),ko.child=t,this.dispatchEvent(ko),ko.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rc),Ii.child=t,this.dispatchEvent(Ii),Ii.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,t,Yf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,Zf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Se.DEFAULT_UP=new w(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new w,In=new w,Ho=new w,Un=new w,Ui=new w,Ni=new w,sc=new w,Vo=new w,Go=new w,Wo=new w,Xo=new ue,qo=new ue,Yo=new ue;class rn{constructor(t=new w,e=new w,i=new w){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),un.subVectors(t,e),r.cross(un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){un.subVectors(r,e),In.subVectors(i,e),Ho.subVectors(t,e);const o=un.dot(un),a=un.dot(In),l=un.dot(Ho),c=In.dot(In),u=In.dot(Ho),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Un.x),l.addScaledVector(o,Un.y),l.addScaledVector(a,Un.z),l)}static getInterpolatedAttribute(t,e,i,r,s,o){return Xo.setScalar(0),qo.setScalar(0),Yo.setScalar(0),Xo.fromBufferAttribute(t,e),qo.fromBufferAttribute(t,i),Yo.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Xo,s.x),o.addScaledVector(qo,s.y),o.addScaledVector(Yo,s.z),o}static isFrontFacing(t,e,i,r){return un.subVectors(i,e),In.subVectors(t,e),un.cross(In).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),In.subVectors(this.a,this.b),un.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return rn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;Ui.subVectors(r,i),Ni.subVectors(s,i),Vo.subVectors(t,i);const l=Ui.dot(Vo),c=Ni.dot(Vo);if(l<=0&&c<=0)return e.copy(i);Go.subVectors(t,r);const u=Ui.dot(Go),h=Ni.dot(Go);if(u>=0&&h<=u)return e.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Ui,o);Wo.subVectors(t,s);const p=Ui.dot(Wo),g=Ni.dot(Wo);if(g>=0&&p<=g)return e.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Ni,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return sc.subVectors(s,r),a=(h-u)/(h-u+(p-g)),e.copy(r).addScaledVector(sc,a);const d=1/(m+_+f);return o=_*d,a=f*d,e.copy(i).addScaledVector(Ui,o).addScaledVector(Ni,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},Rs={h:0,s:0,l:0};function Zo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Vt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=ee.workingColorSpace){return this.r=t,this.g=e,this.b=i,ee.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=ee.workingColorSpace){if(t=yl(t,1),e=jt(e,0,1),i=jt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Zo(o,s,t+1/3),this.g=Zo(o,s,t),this.b=Zo(o,s,t-1/3)}return ee.colorSpaceToWorking(this,r),this}setStyle(t,e=$e){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){const i=Du[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}copyLinearToSRGB(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return ee.workingToColorSpace(Fe.copy(this),t),Math.round(jt(Fe.r*255,0,255))*65536+Math.round(jt(Fe.g*255,0,255))*256+Math.round(jt(Fe.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(Fe.copy(this),e);const i=Fe.r,r=Fe.g,s=Fe.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=$e){ee.workingToColorSpace(Fe.copy(this),t);const e=Fe.r,i=Fe.g,r=Fe.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(Rs);const i=kr(Jn.h,Rs.h,e),r=kr(Jn.s,Rs.s,e),s=kr(Jn.l,Rs.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new Vt;Vt.NAMES=Du;let $f=0;class Ai extends dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=bn(),this.name="",this.type="Material",this.blending=Ki,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ga,this.blendDst=_a,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=On,this.stencilZFail=On,this.stencilZPass=On,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(i.blending=this.blending),this.side!==An&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ga&&(i.blendSrc=this.blendSrc),this.blendDst!==_a&&(i.blendDst=this.blendDst),this.blendEquation!==mi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==tr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==On&&(i.stencilFail=this.stencilFail),this.stencilZFail!==On&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==On&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class mr extends Ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=xu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new w,Cs=new ft;let Kf=0;class on{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=il,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Cs.fromBufferAttribute(this,e),Cs.applyMatrix3(t),this.setXY(e,Cs.x,Cs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=hn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=oe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hn(e,this.array)),e}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hn(e,this.array)),e}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hn(e,this.array)),e}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array),r=oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array),r=oe(r,this.array),s=oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==il&&(t.usage=this.usage),t}}class Fu extends on{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Iu extends on{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ie extends on{constructor(t,e,i){super(new Float32Array(t),e,i)}}let jf=0;const en=new re,Jo=new Se,Oi=new w,Je=new bi,Tr=new bi,Ae=new w;class Pe extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pu(t)?Iu:Fu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Jt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,i){return en.makeTranslation(t,e,i),this.applyMatrix4(en),this}scale(t,e,i){return en.makeScale(t,e,i),this.applyMatrix4(en),this}lookAt(t){return Jo.lookAt(t),Jo.updateMatrix(),this.applyMatrix4(Jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ie(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Je.setFromBufferAttribute(s),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(t){const i=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Tr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ae.addVectors(Je.min,Tr.min),Je.expandByPoint(Ae),Ae.addVectors(Je.max,Tr.max),Je.expandByPoint(Ae)):(Je.expandByPoint(Tr.min),Je.expandByPoint(Tr.max))}Je.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Ae.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ae));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ae.fromBufferAttribute(a,c),l&&(Oi.fromBufferAttribute(t,c),Ae.add(Oi)),r=Math.max(r,i.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new w,l[F]=new w;const c=new w,u=new w,h=new w,f=new ft,p=new ft,g=new ft,_=new w,m=new w;function d(F,M,y){c.fromBufferAttribute(i,F),u.fromBufferAttribute(i,M),h.fromBufferAttribute(i,y),f.fromBufferAttribute(s,F),p.fromBufferAttribute(s,M),g.fromBufferAttribute(s,y),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(P),a[F].add(_),a[M].add(_),a[y].add(_),l[F].add(m),l[M].add(m),l[y].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let F=0,M=T.length;F<M;++F){const y=T[F],P=y.start,N=y.count;for(let z=P,k=P+N;z<k;z+=3)d(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const S=new w,x=new w,R=new w,C=new w;function L(F){R.fromBufferAttribute(r,F),C.copy(R);const M=a[F];S.copy(M),S.sub(R.multiplyScalar(R.dot(M))).normalize(),x.crossVectors(C,M);const P=x.dot(l[F])<0?-1:1;o.setXYZW(F,S.x,S.y,S.z,P)}for(let F=0,M=T.length;F<M;++F){const y=T[F],P=y.start,N=y.count;for(let z=P,k=P+N;z<k;z+=3)L(t.getX(z+0)),L(t.getX(z+1)),L(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new w,s=new w,o=new w,a=new w,l=new w,c=new w,u=new w,h=new w;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new on(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,i);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=t(f,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oc=new re,li=new Sl,Ps=new pr,ac=new w,Ls=new w,Ds=new w,Fs=new w,$o=new w,Is=new w,lc=new w,Us=new w;class ne extends Se{constructor(t=new Pe,e=new mr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Is.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&($o.fromBufferAttribute(h,t),o?Is.addScaledVector($o,u):Is.addScaledVector($o.sub(e),u))}e.add(Is)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ps.copy(i.boundingSphere),Ps.applyMatrix4(s),li.copy(t.ray).recast(t.near),!(Ps.containsPoint(li.origin)===!1&&(li.intersectSphere(Ps,ac)===null||li.origin.distanceToSquared(ac)>(t.far-t.near)**2))&&(oc.copy(s).invert(),li.copy(t.ray).applyMatrix4(oc),!(i.boundingBox!==null&&li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,li)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],T=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=T,R=S;x<R;x+=3){const C=a.getX(x),L=a.getX(x+1),F=a.getX(x+2);r=Ns(this,d,t,i,c,u,h,C,L,F),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const T=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);r=Ns(this,o,t,i,c,u,h,T,S,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],T=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=T,R=S;x<R;x+=3){const C=x,L=x+1,F=x+2;r=Ns(this,d,t,i,c,u,h,C,L,F),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const T=m,S=m+1,x=m+2;r=Ns(this,o,t,i,c,u,h,T,S,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Qf(n,t,e,i,r,s,o,a){let l;if(t.side===Xe?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===An,a),l===null)return null;Us.copy(a),Us.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Us);return c<e.near||c>e.far?null:{distance:c,point:Us.clone(),object:n}}function Ns(n,t,e,i,r,s,o,a,l,c){n.getVertexPosition(a,Ls),n.getVertexPosition(l,Ds),n.getVertexPosition(c,Fs);const u=Qf(n,t,e,i,Ls,Ds,Fs,lc);if(u){const h=new w;rn.getBarycoord(lc,Ls,Ds,Fs,h),r&&(u.uv=rn.getInterpolatedAttribute(r,a,l,c,h,new ft)),s&&(u.uv1=rn.getInterpolatedAttribute(s,a,l,c,h,new ft)),o&&(u.normal=rn.getInterpolatedAttribute(o,a,l,c,h,new w),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new w,materialIndex:0};rn.getNormal(Ls,Ds,Fs,f.normal),u.face=f,u.barycoord=h}return u}class je extends Pe{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(h,2));function g(_,m,d,T,S,x,R,C,L,F,M){const y=x/L,P=R/F,N=x/2,z=R/2,k=C/2,Z=L+1,H=F+1;let st=0,X=0;const ct=new w;for(let _t=0;_t<H;_t++){const Tt=_t*P-z;for(let kt=0;kt<Z;kt++){const et=kt*y-N;ct[_]=et*T,ct[m]=Tt*S,ct[d]=k,c.push(ct.x,ct.y,ct.z),ct[_]=0,ct[m]=0,ct[d]=C>0?1:-1,u.push(ct.x,ct.y,ct.z),h.push(kt/L),h.push(1-_t/F),st+=1}}for(let _t=0;_t<F;_t++)for(let Tt=0;Tt<L;Tt++){const kt=f+Tt+Z*_t,et=f+Tt+Z*(_t+1),At=f+(Tt+1)+Z*(_t+1),St=f+(Tt+1)+Z*_t;l.push(kt,et,St),l.push(et,At,St),X+=6}a.addGroup(p,X,M),p+=X,f+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new je(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function sr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function ze(n){const t={};for(let e=0;e<n.length;e++){const i=sr(n[e]);for(const r in i)t[r]=i[r]}return t}function td(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Uu(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const ed={clone:sr,merge:ze};var nd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,id=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ti extends Ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nd,this.fragmentShader=id,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=sr(t.uniforms),this.uniformsGroups=td(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Nu extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new w,cc=new ft,uc=new ft;class We extends Nu{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=rr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rr*2*Math.atan(Math.tan(zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($n.x,$n.y).multiplyScalar(-t/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($n.x,$n.y).multiplyScalar(-t/$n.z)}getViewSize(t,e){return this.getViewBounds(t,cc,uc),e.subVectors(uc,cc)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(zr*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Bi=-90,zi=1;class rd extends Se{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new We(Bi,zi,t,e);r.layers=this.layers,this.add(r);const s=new We(Bi,zi,t,e);s.layers=this.layers,this.add(s);const o=new We(Bi,zi,t,e);o.layers=this.layers,this.add(o);const a=new We(Bi,zi,t,e);a.layers=this.layers,this.add(a);const l=new We(Bi,zi,t,e);l.layers=this.layers,this.add(l);const c=new We(Bi,zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Tn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===lo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ou extends Ie{constructor(t=[],e=er,i,r,s,o,a,l,c,u){super(t,e,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class sd extends Si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Ou(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new je(5,5,5),s=new ti({name:"CubemapFromEquirect",uniforms:sr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xe,blending:Qn});s.uniforms.tEquirect.value=e;const o=new ne(r,s),a=e.minFilter;return e.minFilter===xi&&(e.minFilter=Sn),new rd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}class Le extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const od={type:"move"};class Ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(od)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Le;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class ad extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ld{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=il,this.updateRanges=[],this.version=0,this.uuid=bn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Be=new w;class uo{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=hn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=oe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=hn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=hn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=hn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=hn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array),r=oe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array),r=oe(r,this.array),s=oe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new on(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new uo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Bu extends Ai{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ki;const br=new w,Hi=new w,Vi=new w,Gi=new ft,Ar=new ft,zu=new re,Os=new w,wr=new w,Bs=new w,hc=new ft,jo=new ft,fc=new ft;class cd extends Se{constructor(t=new Bu){if(super(),this.isSprite=!0,this.type="Sprite",ki===void 0){ki=new Pe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ld(e,5);ki.setIndex([0,1,2,0,2,3]),ki.setAttribute("position",new uo(i,3,0,!1)),ki.setAttribute("uv",new uo(i,2,3,!1))}this.geometry=ki,this.material=t,this.center=new ft(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hi.setFromMatrixScale(this.matrixWorld),zu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Vi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hi.multiplyScalar(-Vi.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;zs(Os.set(-.5,-.5,0),Vi,o,Hi,r,s),zs(wr.set(.5,-.5,0),Vi,o,Hi,r,s),zs(Bs.set(.5,.5,0),Vi,o,Hi,r,s),hc.set(0,0),jo.set(1,0),fc.set(1,1);let a=t.ray.intersectTriangle(Os,wr,Bs,!1,br);if(a===null&&(zs(wr.set(-.5,.5,0),Vi,o,Hi,r,s),jo.set(0,1),a=t.ray.intersectTriangle(Os,Bs,wr,!1,br),a===null))return;const l=t.ray.origin.distanceTo(br);l<t.near||l>t.far||e.push({distance:l,point:br.clone(),uv:rn.getInterpolation(br,Os,wr,Bs,hc,jo,fc,new ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function zs(n,t,e,i,r,s){Gi.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(Ar.x=s*Gi.x-r*Gi.y,Ar.y=r*Gi.x+s*Gi.y):Ar.copy(Gi),n.copy(t),n.x+=Ar.x,n.y+=Ar.y,n.applyMatrix4(zu)}class ku extends Ie{constructor(t=null,e=1,i=1,r,s,o,a,l,c=He,u=He,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dc extends on{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Wi=new re,pc=new re,ks=[],mc=new bi,ud=new re,Rr=new ne,Cr=new pr;class Hu extends ne{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new dc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,ud)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new bi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Wi),mc.copy(t.boundingBox).applyMatrix4(Wi),this.boundingBox.union(mc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new pr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Wi),Cr.copy(t.boundingSphere).applyMatrix4(Wi),this.boundingSphere.union(Cr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=t*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(t,e){const i=this.matrixWorld,r=this.count;if(Rr.geometry=this.geometry,Rr.material=this.material,Rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cr.copy(this.boundingSphere),Cr.applyMatrix4(i),t.ray.intersectsSphere(Cr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Wi),pc.multiplyMatrices(i,Wi),Rr.matrixWorld=pc,Rr.raycast(t,ks);for(let o=0,a=ks.length;o<a;o++){const l=ks[o];l.instanceId=s,l.object=this,e.push(l)}ks.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new dc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new ku(new Float32Array(r*this.count),r,this.count,So,En));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*t;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Qo=new w,hd=new w,fd=new Jt;class di{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Qo.subVectors(i,e).cross(hd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Qo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||fd.getNormalMatrix(t),r=this.coplanarPoint(Qo).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new pr,dd=new ft(.5,.5),Hs=new w;class Tl{constructor(t=new di,e=new di,i=new di,r=new di,s=new di,o=new di){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Tn,i=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],p=s[7],g=s[8],_=s[9],m=s[10],d=s[11],T=s[12],S=s[13],x=s[14],R=s[15];if(r[0].setComponents(c-o,p-u,d-g,R-T).normalize(),r[1].setComponents(c+o,p+u,d+g,R+T).normalize(),r[2].setComponents(c+a,p+h,d+_,R+S).normalize(),r[3].setComponents(c-a,p-h,d-_,R-S).normalize(),i)r[4].setComponents(l,f,m,x).normalize(),r[5].setComponents(c-l,p-f,d-m,R-x).normalize();else if(r[4].setComponents(c-l,p-f,d-m,R-x).normalize(),e===Tn)r[5].setComponents(c+l,p+f,d+m,R+x).normalize();else if(e===lo)r[5].setComponents(l,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(t){ci.center.set(0,0,0);const e=dd.distanceTo(t.center);return ci.radius=.7071067811865476+e,ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Hs.x=r.normal.x>0?t.max.x:t.min.x,Hs.y=r.normal.y>0?t.max.y:t.min.y,Hs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Hs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vu extends Ai{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ho=new w,fo=new w,gc=new re,Pr=new Sl,Vs=new pr,ta=new w,_c=new w;class pd extends Se{constructor(t=new Pe,e=new Vu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)ho.fromBufferAttribute(e,r-1),fo.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=ho.distanceTo(fo);t.setAttribute("lineDistance",new ie(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vs.copy(i.boundingSphere),Vs.applyMatrix4(r),Vs.radius+=s,t.ray.intersectsSphere(Vs)===!1)return;gc.copy(r).invert(),Pr.copy(t.ray).applyMatrix4(gc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const d=u.getX(_),T=u.getX(_+1),S=Gs(this,t,Pr,l,d,T,_);S&&e.push(S)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),d=Gs(this,t,Pr,l,_,m,g-1);d&&e.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const d=Gs(this,t,Pr,l,_,_+1,_);d&&e.push(d)}if(this.isLineLoop){const _=Gs(this,t,Pr,l,g-1,p,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Gs(n,t,e,i,r,s,o){const a=n.geometry.attributes.position;if(ho.fromBufferAttribute(a,r),fo.fromBufferAttribute(a,s),e.distanceSqToSegment(ho,fo,ta,_c)>i)return;ta.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ta);if(!(c<t.near||c>t.far))return{distance:c,point:_c.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const vc=new w,xc=new w;class md extends pd{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)vc.fromBufferAttribute(e,r),xc.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+vc.distanceTo(xc);t.setAttribute("lineDistance",new ie(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gd extends Ie{constructor(t,e,i,r,s,o,a,l,c){super(t,e,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gu extends Ie{constructor(t,e,i=Mi,r,s,o,a=He,l=He,c,u=qr,h=1){if(u!==qr&&u!==Yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:h};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ml(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Wu extends Ie{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class bl extends Pe{constructor(t=1,e=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:r,heightSegments:s},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],u=e/2,h=Math.PI/2*t,f=e,p=2*h+f,g=i*2+s,_=r+1,m=new w,d=new w;for(let T=0;T<=g;T++){let S=0,x=0,R=0,C=0;if(T<=i){const M=T/i,y=M*Math.PI/2;x=-u-t*Math.cos(y),R=t*Math.sin(y),C=-t*Math.cos(y),S=M*h}else if(T<=i+s){const M=(T-i)/s;x=-u+M*e,R=t,C=0,S=h+M*f}else{const M=(T-i-s)/i,y=M*Math.PI/2;x=u+t*Math.sin(y),R=t*Math.cos(y),C=t*Math.sin(y),S=h+f+M*h}const L=Math.max(0,Math.min(1,S/p));let F=0;T===0?F=.5/r:T===g&&(F=-.5/r);for(let M=0;M<=r;M++){const y=M/r,P=y*Math.PI*2,N=Math.sin(P),z=Math.cos(P);d.x=-R*z,d.y=x,d.z=R*N,a.push(d.x,d.y,d.z),m.set(-R*z,C,R*N),m.normalize(),l.push(m.x,m.y,m.z),c.push(y+F,L)}if(T>0){const M=(T-1)*_;for(let y=0;y<r;y++){const P=M+y,N=M+y+1,z=T*_+y,k=T*_+y+1;o.push(P,N,z),o.push(N,k,z)}}}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bl(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Eo extends Pe{constructor(t=1,e=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:r},e=Math.max(3,e);const s=[],o=[],a=[],l=[],c=new w,u=new ft;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const p=i+h/e*r;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(a,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Eo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class gr extends Pe{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],p=[];let g=0;const _=[],m=i/2;let d=0;T(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new ie(h,3)),this.setAttribute("normal",new ie(f,3)),this.setAttribute("uv",new ie(p,2));function T(){const x=new w,R=new w;let C=0;const L=(e-t)/i;for(let F=0;F<=s;F++){const M=[],y=F/s,P=y*(e-t)+t;for(let N=0;N<=r;N++){const z=N/r,k=z*l+a,Z=Math.sin(k),H=Math.cos(k);R.x=P*Z,R.y=-y*i+m,R.z=P*H,h.push(R.x,R.y,R.z),x.set(Z,L,H).normalize(),f.push(x.x,x.y,x.z),p.push(z,1-y),M.push(g++)}_.push(M)}for(let F=0;F<r;F++)for(let M=0;M<s;M++){const y=_[M][F],P=_[M+1][F],N=_[M+1][F+1],z=_[M][F+1];(t>0||M!==0)&&(u.push(y,P,z),C+=3),(e>0||M!==s-1)&&(u.push(P,N,z),C+=3)}c.addGroup(d,C,0),d+=C}function S(x){const R=g,C=new ft,L=new w;let F=0;const M=x===!0?t:e,y=x===!0?1:-1;for(let N=1;N<=r;N++)h.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),g++;const P=g;for(let N=0;N<=r;N++){const k=N/r*l+a,Z=Math.cos(k),H=Math.sin(k);L.x=M*H,L.y=m*y,L.z=M*Z,h.push(L.x,L.y,L.z),f.push(0,y,0),C.x=Z*.5+.5,C.y=H*.5*y+.5,p.push(C.x,C.y),g++}for(let N=0;N<r;N++){const z=R+N,k=P+N;x===!0?u.push(k,k+1,z):u.push(k+1,k,z),F+=3}c.addGroup(d,F,x===!0?1:2),d+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Cn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let r=0;const s=i.length;let o;e?o=e:o=t*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new ft:new w);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new w,r=[],s=[],o=[],a=new w,l=new re;for(let p=0;p<=t;p++){const g=p/t;r[p]=this.getTangentAt(g,new w)}s[0]=new w,o[0]=new w;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(jt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(e===!0){let p=Math.acos(jt(s[0].dot(s[t]),-1,1));p/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(p=-p);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Al extends Cn{constructor(t=0,e=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ft){const i=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class _d extends Al{constructor(t,e,i,r,s,o){super(t,e,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function wl(){let n=0,t=0,e=0,i=0;function r(s,o,a,l){n=s,t=a,e=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,p*=u,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return n+t*s+e*o+i*a}}}const Ws=new w,ea=new wl,na=new wl,ia=new wl;class po extends Cn{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new w){const i=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Ws.subVectors(r[0],r[1]).add(r[0]),c=Ws);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Ws.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Ws),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ea.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,m),na.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,m),ia.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(ea.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),na.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),ia.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(ea.calc(l),na.calc(l),ia.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new w().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function yc(n,t,e,i,r){const s=(i-t)*.5,o=(r-e)*.5,a=n*n,l=n*a;return(2*e-2*i+s+o)*l+(-3*e+3*i-2*s-o)*a+s*n+e}function vd(n,t){const e=1-n;return e*e*t}function xd(n,t){return 2*(1-n)*n*t}function yd(n,t){return n*n*t}function Hr(n,t,e,i){return vd(n,t)+xd(n,e)+yd(n,i)}function Md(n,t){const e=1-n;return e*e*e*t}function Sd(n,t){const e=1-n;return 3*e*e*n*t}function Ed(n,t){return 3*(1-n)*n*n*t}function Td(n,t){return n*n*n*t}function Vr(n,t,e,i,r){return Md(n,t)+Sd(n,e)+Ed(n,i)+Td(n,r)}class Xu extends Cn{constructor(t=new ft,e=new ft,i=new ft,r=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new ft){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Vr(t,r.x,s.x,o.x,a.x),Vr(t,r.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class bd extends Cn{constructor(t=new w,e=new w,i=new w,r=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new w){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Vr(t,r.x,s.x,o.x,a.x),Vr(t,r.y,s.y,o.y,a.y),Vr(t,r.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qu extends Cn{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ad extends Cn{constructor(t=new w,e=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new w){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yu extends Cn{constructor(t=new ft,e=new ft,i=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ft){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(Hr(t,r.x,s.x,o.x),Hr(t,r.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zu extends Cn{constructor(t=new w,e=new w,i=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new w){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(Hr(t,r.x,s.x,o.x),Hr(t,r.y,s.y,o.y),Hr(t,r.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ju extends Cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){const i=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(yc(a,l.x,c.x,u.x,h.x),yc(a,l.y,c.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new ft().fromArray(r))}return this}}var mo=Object.freeze({__proto__:null,ArcCurve:_d,CatmullRomCurve3:po,CubicBezierCurve:Xu,CubicBezierCurve3:bd,EllipseCurve:Al,LineCurve:qu,LineCurve3:Ad,QuadraticBezierCurve:Yu,QuadraticBezierCurve3:Zu,SplineCurve:Ju});class wd extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new mo[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,r=this.curves.length;i<r;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(new mo[r.type]().fromJSON(r))}return this}}class Mc extends wd{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new qu(this.currentPoint.clone(),new ft(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,r){const s=new Yu(this.currentPoint.clone(),new ft(t,e),new ft(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(t,e,i,r,s,o){const a=new Xu(this.currentPoint.clone(),new ft(t,e),new ft(i,r),new ft(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Ju(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,r,s,o),this}absarc(t,e,i,r,s,o){return this.absellipse(t,e,i,i,r,s,o),this}ellipse(t,e,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,r,s,o,a,l),this}absellipse(t,e,i,r,s,o,a,l){const c=new Al(t,e,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Jr extends Mc{constructor(t){super(t),this.uuid=bn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,r=this.holes.length;i<r;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(new Mc().fromJSON(r))}return this}}function Rd(n,t,e=2){const i=t&&t.length,r=i?t[0]*e:n.length;let s=$u(n,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=Fd(n,t,s,e)),n.length>80*e){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let f=e;f<r;f+=e){const p=n[f],g=n[f+1];p<a&&(a=p),g<l&&(l=g),p>u&&(u=p),g>h&&(h=g)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return $r(s,o,e,a,l,c,0),o}function $u(n,t,e,i,r){let s;if(r===Wd(n,t,e,i)>0)for(let o=t;o<e;o+=i)s=Sc(o/i|0,n[o],n[o+1],s);else for(let o=e-i;o>=t;o-=i)s=Sc(o/i|0,n[o],n[o+1],s);return s&&or(s,s.next)&&(jr(s),s=s.next),s}function Ei(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(or(e,e.next)||ge(e.prev,e,e.next)===0)){if(jr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function $r(n,t,e,i,r,s,o){if(!n)return;!o&&s&&Bd(n,i,r,s);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(s?Pd(n,i,r,s):Cd(n)){t.push(l.i,n.i,c.i),jr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Ld(Ei(n),t),$r(n,t,e,i,r,s,2)):o===2&&Dd(n,t,e,i,r,s):$r(Ei(n),t,e,i,r,s,1);break}}}function Cd(n){const t=n.prev,e=n,i=n.next;if(ge(t,e,i)>=0)return!1;const r=t.x,s=e.x,o=i.x,a=t.y,l=e.y,c=i.y,u=Math.min(r,s,o),h=Math.min(a,l,c),f=Math.max(r,s,o),p=Math.max(a,l,c);let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=p&&Ir(r,a,s,l,o,c,g.x,g.y)&&ge(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Pd(n,t,e,i){const r=n.prev,s=n,o=n.next;if(ge(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,p=Math.min(a,l,c),g=Math.min(u,h,f),_=Math.max(a,l,c),m=Math.max(u,h,f),d=rl(p,g,t,e,i),T=rl(_,m,t,e,i);let S=n.prevZ,x=n.nextZ;for(;S&&S.z>=d&&x&&x.z<=T;){if(S.x>=p&&S.x<=_&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&Ir(a,u,l,h,c,f,S.x,S.y)&&ge(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&Ir(a,u,l,h,c,f,x.x,x.y)&&ge(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=d;){if(S.x>=p&&S.x<=_&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&Ir(a,u,l,h,c,f,S.x,S.y)&&ge(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=T;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&Ir(a,u,l,h,c,f,x.x,x.y)&&ge(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Ld(n,t){let e=n;do{const i=e.prev,r=e.next.next;!or(i,r)&&ju(i,e,e.next,r)&&Kr(i,r)&&Kr(r,i)&&(t.push(i.i,e.i,r.i),jr(e),jr(e.next),e=n=r),e=e.next}while(e!==n);return Ei(e)}function Dd(n,t,e,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Hd(o,a)){let l=Qu(o,a);o=Ei(o,o.next),l=Ei(l,l.next),$r(o,t,e,i,r,s,0),$r(l,t,e,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function Fd(n,t,e,i){const r=[];for(let s=0,o=t.length;s<o;s++){const a=t[s]*i,l=s<o-1?t[s+1]*i:n.length,c=$u(n,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(kd(c))}r.sort(Id);for(let s=0;s<r.length;s++)e=Ud(r[s],e);return e}function Id(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=i-r}return e}function Ud(n,t){const e=Nd(n,t);if(!e)return t;const i=Qu(e,n);return Ei(i,i.next),Ei(e,e.next)}function Nd(n,t){let e=t;const i=n.x,r=n.y;let s=-1/0,o;if(or(n,e))return e;do{if(or(n,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const h=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=i&&h>s&&(s=h,o=e.x<e.next.x?e:e.next,h===i))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Ku(r<c?i:s,r,l,c,r<c?s:i,r,e.x,e.y)){const h=Math.abs(r-e.y)/(i-e.x);Kr(e,n)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&Od(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function Od(n,t){return ge(n.prev,n,t.prev)<0&&ge(t.next,n,n.next)<0}function Bd(n,t,e,i){let r=n;do r.z===0&&(r.z=rl(r.x,r.y,t,e,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,zd(r)}function zd(n){let t,e=1;do{let i=n,r;n=null;let s=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,e*=2}while(t>1);return n}function rl(n,t,e,i,r){return n=(n-e)*r|0,t=(t-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function kd(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Ku(n,t,e,i,r,s,o,a){return(r-o)*(t-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(i-a)}function Ir(n,t,e,i,r,s,o,a){return!(n===o&&t===a)&&Ku(n,t,e,i,r,s,o,a)}function Hd(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Vd(n,t)&&(Kr(n,t)&&Kr(t,n)&&Gd(n,t)&&(ge(n.prev,n,t.prev)||ge(n,t.prev,t))||or(n,t)&&ge(n.prev,n,n.next)>0&&ge(t.prev,t,t.next)>0)}function ge(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function or(n,t){return n.x===t.x&&n.y===t.y}function ju(n,t,e,i){const r=qs(ge(n,t,e)),s=qs(ge(n,t,i)),o=qs(ge(e,i,n)),a=qs(ge(e,i,t));return!!(r!==s&&o!==a||r===0&&Xs(n,e,t)||s===0&&Xs(n,i,t)||o===0&&Xs(e,n,i)||a===0&&Xs(e,t,i))}function Xs(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function qs(n){return n>0?1:n<0?-1:0}function Vd(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&ju(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Kr(n,t){return ge(n.prev,n,n.next)<0?ge(n,t,n.next)>=0&&ge(n,n.prev,t)>=0:ge(n,t,n.prev)<0||ge(n,n.next,t)<0}function Gd(n,t){let e=n,i=!1;const r=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Qu(n,t){const e=sl(n.i,n.x,n.y),i=sl(t.i,t.x,t.y),r=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=r,r.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function Sc(n,t,e,i){const r=sl(n,t,e);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function jr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function sl(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Wd(n,t,e,i){let r=0;for(let s=t,o=e-i;s<e;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class Xd{static triangulate(t,e,i=2){return Rd(t,e,i)}}class Zi{static area(t){const e=t.length;let i=0;for(let r=e-1,s=0;s<e;r=s++)i+=t[r].x*t[s].y-t[s].x*t[r].y;return i*.5}static isClockWise(t){return Zi.area(t)<0}static triangulateShape(t,e){const i=[],r=[],s=[];Ec(t),Tc(i,t);let o=t.length;e.forEach(Ec);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,Tc(i,e[l]);const a=Xd.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Ec(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Tc(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Qr extends Pe{constructor(t=new Jr([new ft(.5,.5),new ft(-.5,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,r=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ie(r,3)),this.setAttribute("uv",new ie(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:qd;let S,x=!1,R,C,L,F;d&&(S=d.getSpacedPoints(u),x=!0,f=!1,R=d.computeFrenetFrames(u,!1),C=new w,L=new w,F=new w),f||(m=0,p=0,g=0,_=0);const M=a.extractPoints(c);let y=M.shape;const P=M.holes;if(!Zi.isClockWise(y)){y=y.reverse();for(let q=0,J=P.length;q<J;q++){const Q=P[q];Zi.isClockWise(Q)&&(P[q]=Q.reverse())}}function z(q){const Q=10000000000000001e-36;let tt=q[0];for(let pt=1;pt<=q.length;pt++){const ot=pt%q.length,mt=q[ot],qt=mt.x-tt.x,Xt=mt.y-tt.y,A=qt*qt+Xt*Xt,v=Math.max(Math.abs(mt.x),Math.abs(mt.y),Math.abs(tt.x),Math.abs(tt.y)),B=Q*v*v;if(A<=B){q.splice(ot,1),pt--;continue}tt=mt}}z(y),P.forEach(z);const k=P.length,Z=y;for(let q=0;q<k;q++){const J=P[q];y=y.concat(J)}function H(q,J,Q){return J||console.error("THREE.ExtrudeGeometry: vec does not exist"),q.clone().addScaledVector(J,Q)}const st=y.length;function X(q,J,Q){let tt,pt,ot;const mt=q.x-J.x,qt=q.y-J.y,Xt=Q.x-q.x,A=Q.y-q.y,v=mt*mt+qt*qt,B=mt*A-qt*Xt;if(Math.abs(B)>Number.EPSILON){const Y=Math.sqrt(v),rt=Math.sqrt(Xt*Xt+A*A),$=J.x-qt/Y,Ut=J.y+mt/Y,dt=Q.x-A/rt,Dt=Q.y+Xt/rt,Ft=((dt-$)*A-(Dt-Ut)*Xt)/(mt*A-qt*Xt);tt=$+mt*Ft-q.x,pt=Ut+qt*Ft-q.y;const at=tt*tt+pt*pt;if(at<=2)return new ft(tt,pt);ot=Math.sqrt(at/2)}else{let Y=!1;mt>Number.EPSILON?Xt>Number.EPSILON&&(Y=!0):mt<-Number.EPSILON?Xt<-Number.EPSILON&&(Y=!0):Math.sign(qt)===Math.sign(A)&&(Y=!0),Y?(tt=-qt,pt=mt,ot=Math.sqrt(v)):(tt=mt,pt=qt,ot=Math.sqrt(v/2))}return new ft(tt/ot,pt/ot)}const ct=[];for(let q=0,J=Z.length,Q=J-1,tt=q+1;q<J;q++,Q++,tt++)Q===J&&(Q=0),tt===J&&(tt=0),ct[q]=X(Z[q],Z[Q],Z[tt]);const _t=[];let Tt,kt=ct.concat();for(let q=0,J=k;q<J;q++){const Q=P[q];Tt=[];for(let tt=0,pt=Q.length,ot=pt-1,mt=tt+1;tt<pt;tt++,ot++,mt++)ot===pt&&(ot=0),mt===pt&&(mt=0),Tt[tt]=X(Q[tt],Q[ot],Q[mt]);_t.push(Tt),kt=kt.concat(Tt)}let et;if(m===0)et=Zi.triangulateShape(Z,P);else{const q=[],J=[];for(let Q=0;Q<m;Q++){const tt=Q/m,pt=p*Math.cos(tt*Math.PI/2),ot=g*Math.sin(tt*Math.PI/2)+_;for(let mt=0,qt=Z.length;mt<qt;mt++){const Xt=H(Z[mt],ct[mt],ot);Lt(Xt.x,Xt.y,-pt),tt===0&&q.push(Xt)}for(let mt=0,qt=k;mt<qt;mt++){const Xt=P[mt];Tt=_t[mt];const A=[];for(let v=0,B=Xt.length;v<B;v++){const Y=H(Xt[v],Tt[v],ot);Lt(Y.x,Y.y,-pt),tt===0&&A.push(Y)}tt===0&&J.push(A)}}et=Zi.triangulateShape(q,J)}const At=et.length,St=g+_;for(let q=0;q<st;q++){const J=f?H(y[q],kt[q],St):y[q];x?(L.copy(R.normals[0]).multiplyScalar(J.x),C.copy(R.binormals[0]).multiplyScalar(J.y),F.copy(S[0]).add(L).add(C),Lt(F.x,F.y,F.z)):Lt(J.x,J.y,0)}for(let q=1;q<=u;q++)for(let J=0;J<st;J++){const Q=f?H(y[J],kt[J],St):y[J];x?(L.copy(R.normals[q]).multiplyScalar(Q.x),C.copy(R.binormals[q]).multiplyScalar(Q.y),F.copy(S[q]).add(L).add(C),Lt(F.x,F.y,F.z)):Lt(Q.x,Q.y,h/u*q)}for(let q=m-1;q>=0;q--){const J=q/m,Q=p*Math.cos(J*Math.PI/2),tt=g*Math.sin(J*Math.PI/2)+_;for(let pt=0,ot=Z.length;pt<ot;pt++){const mt=H(Z[pt],ct[pt],tt);Lt(mt.x,mt.y,h+Q)}for(let pt=0,ot=P.length;pt<ot;pt++){const mt=P[pt];Tt=_t[pt];for(let qt=0,Xt=mt.length;qt<Xt;qt++){const A=H(mt[qt],Tt[qt],tt);x?Lt(A.x,A.y+S[u-1].y,S[u-1].x+Q):Lt(A.x,A.y,h+Q)}}}G(),K();function G(){const q=r.length/3;if(f){let J=0,Q=st*J;for(let tt=0;tt<At;tt++){const pt=et[tt];Rt(pt[2]+Q,pt[1]+Q,pt[0]+Q)}J=u+m*2,Q=st*J;for(let tt=0;tt<At;tt++){const pt=et[tt];Rt(pt[0]+Q,pt[1]+Q,pt[2]+Q)}}else{for(let J=0;J<At;J++){const Q=et[J];Rt(Q[2],Q[1],Q[0])}for(let J=0;J<At;J++){const Q=et[J];Rt(Q[0]+st*u,Q[1]+st*u,Q[2]+st*u)}}i.addGroup(q,r.length/3-q,0)}function K(){const q=r.length/3;let J=0;vt(Z,J),J+=Z.length;for(let Q=0,tt=P.length;Q<tt;Q++){const pt=P[Q];vt(pt,J),J+=pt.length}i.addGroup(q,r.length/3-q,1)}function vt(q,J){let Q=q.length;for(;--Q>=0;){const tt=Q;let pt=Q-1;pt<0&&(pt=q.length-1);for(let ot=0,mt=u+m*2;ot<mt;ot++){const qt=st*ot,Xt=st*(ot+1),A=J+tt+qt,v=J+pt+qt,B=J+pt+Xt,Y=J+tt+Xt;Kt(A,v,B,Y)}}}function Lt(q,J,Q){l.push(q),l.push(J),l.push(Q)}function Rt(q,J,Q){j(q),j(J),j(Q);const tt=r.length/3,pt=T.generateTopUV(i,r,tt-3,tt-2,tt-1);b(pt[0]),b(pt[1]),b(pt[2])}function Kt(q,J,Q,tt){j(q),j(J),j(tt),j(J),j(Q),j(tt);const pt=r.length/3,ot=T.generateSideWallUV(i,r,pt-6,pt-3,pt-2,pt-1);b(ot[0]),b(ot[1]),b(ot[3]),b(ot[1]),b(ot[2]),b(ot[3])}function j(q){r.push(l[q*3+0]),r.push(l[q*3+1]),r.push(l[q*3+2])}function b(q){s.push(q.x),s.push(q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Yd(e,i,t)}static fromJSON(t,e){const i=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];i.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new mo[r.type]().fromJSON(r)),new Qr(i,t.options)}}const qd={generateTopUV:function(n,t,e,i,r){const s=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[r*3],u=t[r*3+1];return[new ft(s,o),new ft(a,l),new ft(c,u)]},generateSideWallUV:function(n,t,e,i,r,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],u=t[i*3+1],h=t[i*3+2],f=t[r*3],p=t[r*3+1],g=t[r*3+2],_=t[s*3],m=t[s*3+1],d=t[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ft(o,1-l),new ft(c,1-h),new ft(f,1-g),new ft(_,1-d)]:[new ft(a,1-l),new ft(u,1-h),new ft(p,1-g),new ft(m,1-d)]}};function Yd(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class _r extends Pe{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=t/a,f=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const T=d*f-o;for(let S=0;S<c;S++){const x=S*h-s;g.push(x,-T,0),_.push(0,0,1),m.push(S/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<a;T++){const S=T+c*d,x=T+c*(d+1),R=T+1+c*(d+1),C=T+1+c*d;p.push(S,x,C),p.push(x,R,C)}this.setIndex(p),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _r(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ti extends Pe{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new w,f=new w,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){const T=[],S=d/i;let x=0;d===0&&o===0?x=.5/e:d===i&&l===Math.PI&&(x=-.5/e);for(let R=0;R<=e;R++){const C=R/e;h.x=-t*Math.cos(r+C*s)*Math.sin(o+S*a),h.y=t*Math.cos(o+S*a),h.z=t*Math.sin(r+C*s)*Math.sin(o+S*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(C+x,1-S),T.push(c++)}u.push(T)}for(let d=0;d<i;d++)for(let T=0;T<e;T++){const S=u[d][T+1],x=u[d][T],R=u[d+1][T],C=u[d+1][T+1];(d!==0||o>0)&&p.push(S,x,C),(d!==i-1||l<Math.PI)&&p.push(x,R,C)}this.setIndex(p),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ti(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Rl extends Pe{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new w,h=new w,f=new w;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const _=g/r*s,m=p/i*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const _=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,d=(r+1)*(p-1)+g,T=(r+1)*p+g;o.push(_,m,T),o.push(m,d,T)}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Cl extends Pe{constructor(t=new Zu(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),e=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:r,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new w,l=new w,c=new ft;let u=new w;const h=[],f=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new ie(h,3)),this.setAttribute("normal",new ie(f,3)),this.setAttribute("uv",new ie(p,2));function _(){for(let S=0;S<e;S++)m(S);m(s===!1?e:0),T(),d()}function m(S){u=t.getPointAt(S/e,u);const x=o.normals[S],R=o.binormals[S];for(let C=0;C<=r;C++){const L=C/r*Math.PI*2,F=Math.sin(L),M=-Math.cos(L);l.x=M*x.x+F*R.x,l.y=M*x.y+F*R.y,l.z=M*x.z+F*R.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,h.push(a.x,a.y,a.z)}}function d(){for(let S=1;S<=e;S++)for(let x=1;x<=r;x++){const R=(r+1)*(S-1)+(x-1),C=(r+1)*S+(x-1),L=(r+1)*S+x,F=(r+1)*(S-1)+x;g.push(R,C,F),g.push(C,L,F)}}function T(){for(let S=0;S<=e;S++)for(let x=0;x<=r;x++)c.x=S/e,c.y=x/r,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Cl(new mo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Zd extends Ai{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Vt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ru,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Jd extends Ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=af,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class $d extends Ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class To extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const ra=new re,bc=new w,Ac=new w;class Pl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tl,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;bc.setFromMatrixPosition(t.matrixWorld),e.position.copy(bc),Ac.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ac),e.updateMatrixWorld(),ra.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ra,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ra)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Kd extends Pl{constructor(){super(new We(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,i=rr*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(i!==e.fov||r!==e.aspect||s!==e.far)&&(e.fov=i,e.aspect=r,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class wc extends To{constructor(t,e,i=0,r=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Kd}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Rc=new re,Lr=new w,sa=new w;class jd extends Pl{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,r=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Lr.setFromMatrixPosition(t.matrixWorld),i.position.copy(Lr),sa.copy(i.position),sa.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(sa),i.updateMatrixWorld(),r.makeTranslation(-Lr.x,-Lr.y,-Lr.z),Rc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rc,i.coordinateSystem,i.reversedDepth)}}class Qd extends To{constructor(t,e,i=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new jd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class th extends Nu{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class tp extends Pl{constructor(){super(new th(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class eh extends To{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new tp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ep extends To{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class np extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Cc=new re;class ip{constructor(t,e,i=0,r=1/0){this.ray=new Sl(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new El,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Cc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cc),this}intersectObject(t,e=!0,i=[]){return ol(t,this,i,e),i.sort(Pc),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)ol(t[r],this,i,e);return i.sort(Pc),i}}function Pc(n,t){return n.distance-t.distance}function ol(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)ol(s[o],t,e,!0)}}function Lc(n,t,e,i){const r=rp(i);switch(e){case bu:return n*t;case So:return n*t/r.components*r.byteLength;case _l:return n*t/r.components*r.byteLength;case wu:return n*t*2/r.components*r.byteLength;case vl:return n*t*2/r.components*r.byteLength;case Au:return n*t*3/r.components*r.byteLength;case dn:return n*t*4/r.components*r.byteLength;case xl:return n*t*4/r.components*r.byteLength;case js:case Qs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case to:case eo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ca:case La:return Math.max(n,16)*Math.max(t,8)/4;case Ra:case Pa:return Math.max(n,8)*Math.max(t,8)/2;case Da:case Fa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ia:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Na:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Oa:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case za:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ka:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Va:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ga:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case qa:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ya:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Za:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ja:case $a:case Ka:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ja:case Qa:return Math.ceil(n/4)*Math.ceil(t/4)*8;case tl:case el:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function rp(n){switch(n){case wn:case Mu:return{byteLength:1,components:1};case Wr:case Su:case us:return{byteLength:2,components:1};case ml:case gl:return{byteLength:2,components:4};case Mi:case pl:case En:return{byteLength:4,components:1};case Eu:case Tu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fl);function nh(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function sp(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var op=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ap=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,up=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,mp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_p=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Cp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Pp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Dp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ip=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Up=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Np="gl_FragColor = linearToOutputTexel( gl_FragColor );",Op=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$p=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,im=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,om=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,am=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,um=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_m=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ym=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Sm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Em=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Tm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Im=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Um=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Om=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,km=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Vm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ym=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$m=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,t0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,r0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const s0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,o0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,f0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,d0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,p0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,m0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,g0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,v0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,x0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,y0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,T0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,A0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,w0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,P0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,I0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,U0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,O0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,B0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$t={alphahash_fragment:op,alphahash_pars_fragment:ap,alphamap_fragment:lp,alphamap_pars_fragment:cp,alphatest_fragment:up,alphatest_pars_fragment:hp,aomap_fragment:fp,aomap_pars_fragment:dp,batching_pars_vertex:pp,batching_vertex:mp,begin_vertex:gp,beginnormal_vertex:_p,bsdfs:vp,iridescence_fragment:xp,bumpmap_pars_fragment:yp,clipping_planes_fragment:Mp,clipping_planes_pars_fragment:Sp,clipping_planes_pars_vertex:Ep,clipping_planes_vertex:Tp,color_fragment:bp,color_pars_fragment:Ap,color_pars_vertex:wp,color_vertex:Rp,common:Cp,cube_uv_reflection_fragment:Pp,defaultnormal_vertex:Lp,displacementmap_pars_vertex:Dp,displacementmap_vertex:Fp,emissivemap_fragment:Ip,emissivemap_pars_fragment:Up,colorspace_fragment:Np,colorspace_pars_fragment:Op,envmap_fragment:Bp,envmap_common_pars_fragment:zp,envmap_pars_fragment:kp,envmap_pars_vertex:Hp,envmap_physical_pars_fragment:jp,envmap_vertex:Vp,fog_vertex:Gp,fog_pars_vertex:Wp,fog_fragment:Xp,fog_pars_fragment:qp,gradientmap_pars_fragment:Yp,lightmap_pars_fragment:Zp,lights_lambert_fragment:Jp,lights_lambert_pars_fragment:$p,lights_pars_begin:Kp,lights_toon_fragment:Qp,lights_toon_pars_fragment:tm,lights_phong_fragment:em,lights_phong_pars_fragment:nm,lights_physical_fragment:im,lights_physical_pars_fragment:rm,lights_fragment_begin:sm,lights_fragment_maps:om,lights_fragment_end:am,logdepthbuf_fragment:lm,logdepthbuf_pars_fragment:cm,logdepthbuf_pars_vertex:um,logdepthbuf_vertex:hm,map_fragment:fm,map_pars_fragment:dm,map_particle_fragment:pm,map_particle_pars_fragment:mm,metalnessmap_fragment:gm,metalnessmap_pars_fragment:_m,morphinstance_vertex:vm,morphcolor_vertex:xm,morphnormal_vertex:ym,morphtarget_pars_vertex:Mm,morphtarget_vertex:Sm,normal_fragment_begin:Em,normal_fragment_maps:Tm,normal_pars_fragment:bm,normal_pars_vertex:Am,normal_vertex:wm,normalmap_pars_fragment:Rm,clearcoat_normal_fragment_begin:Cm,clearcoat_normal_fragment_maps:Pm,clearcoat_pars_fragment:Lm,iridescence_pars_fragment:Dm,opaque_fragment:Fm,packing:Im,premultiplied_alpha_fragment:Um,project_vertex:Nm,dithering_fragment:Om,dithering_pars_fragment:Bm,roughnessmap_fragment:zm,roughnessmap_pars_fragment:km,shadowmap_pars_fragment:Hm,shadowmap_pars_vertex:Vm,shadowmap_vertex:Gm,shadowmask_pars_fragment:Wm,skinbase_vertex:Xm,skinning_pars_vertex:qm,skinning_vertex:Ym,skinnormal_vertex:Zm,specularmap_fragment:Jm,specularmap_pars_fragment:$m,tonemapping_fragment:Km,tonemapping_pars_fragment:jm,transmission_fragment:Qm,transmission_pars_fragment:t0,uv_pars_fragment:e0,uv_pars_vertex:n0,uv_vertex:i0,worldpos_vertex:r0,background_vert:s0,background_frag:o0,backgroundCube_vert:a0,backgroundCube_frag:l0,cube_vert:c0,cube_frag:u0,depth_vert:h0,depth_frag:f0,distanceRGBA_vert:d0,distanceRGBA_frag:p0,equirect_vert:m0,equirect_frag:g0,linedashed_vert:_0,linedashed_frag:v0,meshbasic_vert:x0,meshbasic_frag:y0,meshlambert_vert:M0,meshlambert_frag:S0,meshmatcap_vert:E0,meshmatcap_frag:T0,meshnormal_vert:b0,meshnormal_frag:A0,meshphong_vert:w0,meshphong_frag:R0,meshphysical_vert:C0,meshphysical_frag:P0,meshtoon_vert:L0,meshtoon_frag:D0,points_vert:F0,points_frag:I0,shadow_vert:U0,shadow_frag:N0,sprite_vert:O0,sprite_frag:B0},xt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},vn={basic:{uniforms:ze([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:ze([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:ze([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:ze([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:ze([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:ze([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:ze([xt.points,xt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:ze([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:ze([xt.common,xt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:ze([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:ze([xt.sprite,xt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:ze([xt.common,xt.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:ze([xt.lights,xt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};vn.physical={uniforms:ze([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Ys={r:0,b:0,g:0},ui=new Wn,z0=new re;function k0(n,t,e,i,r,s,o){const a=new Vt(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?e:t).get(x)),x}function _(S){let x=!1;const R=g(S);R===null?d(a,l):R&&R.isColor&&(d(R,1),x=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,x){const R=g(x);R&&(R.isCubeTexture||R.mapping===Mo)?(u===void 0&&(u=new ne(new je(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:sr(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,L,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ui.copy(x.backgroundRotation),ui.x*=-1,ui.y*=-1,ui.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(z0.makeRotationFromEuler(ui)),u.material.toneMapped=ee.getTransfer(R.colorSpace)!==le,(h!==R||f!==R.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=R,f=R.version,p=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new ne(new _r(2,2),new ti({name:"BackgroundMaterial",uniforms:sr(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ee.getTransfer(R.colorSpace)!==le,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(h!==R||f!==R.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=R,f=R.version,p=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function d(S,x){S.getRGB(Ys,Uu(n)),i.buffers.color.setClear(Ys.r,Ys.g,Ys.b,x,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),l=x,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,d(a,l)},render:_,addToRenderList:m,dispose:T}}function H0(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(y,P,N,z,k){let Z=!1;const H=h(z,N,P);s!==H&&(s=H,c(s.object)),Z=p(y,z,N,k),Z&&g(y,z,N,k),k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,x(y,P,N,z),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function h(y,P,N){const z=N.wireframe===!0;let k=i[y.id];k===void 0&&(k={},i[y.id]=k);let Z=k[P.id];Z===void 0&&(Z={},k[P.id]=Z);let H=Z[z];return H===void 0&&(H=f(l()),Z[z]=H),H}function f(y){const P=[],N=[],z=[];for(let k=0;k<e;k++)P[k]=0,N[k]=0,z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:z,object:y,attributes:{},index:null}}function p(y,P,N,z){const k=s.attributes,Z=P.attributes;let H=0;const st=N.getAttributes();for(const X in st)if(st[X].location>=0){const _t=k[X];let Tt=Z[X];if(Tt===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(Tt=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(Tt=y.instanceColor)),_t===void 0||_t.attribute!==Tt||Tt&&_t.data!==Tt.data)return!0;H++}return s.attributesNum!==H||s.index!==z}function g(y,P,N,z){const k={},Z=P.attributes;let H=0;const st=N.getAttributes();for(const X in st)if(st[X].location>=0){let _t=Z[X];_t===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(_t=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(_t=y.instanceColor));const Tt={};Tt.attribute=_t,_t&&_t.data&&(Tt.data=_t.data),k[X]=Tt,H++}s.attributes=k,s.attributesNum=H,s.index=z}function _(){const y=s.newAttributes;for(let P=0,N=y.length;P<N;P++)y[P]=0}function m(y){d(y,0)}function d(y,P){const N=s.newAttributes,z=s.enabledAttributes,k=s.attributeDivisors;N[y]=1,z[y]===0&&(n.enableVertexAttribArray(y),z[y]=1),k[y]!==P&&(n.vertexAttribDivisor(y,P),k[y]=P)}function T(){const y=s.newAttributes,P=s.enabledAttributes;for(let N=0,z=P.length;N<z;N++)P[N]!==y[N]&&(n.disableVertexAttribArray(N),P[N]=0)}function S(y,P,N,z,k,Z,H){H===!0?n.vertexAttribIPointer(y,P,N,k,Z):n.vertexAttribPointer(y,P,N,z,k,Z)}function x(y,P,N,z){_();const k=z.attributes,Z=N.getAttributes(),H=P.defaultAttributeValues;for(const st in Z){const X=Z[st];if(X.location>=0){let ct=k[st];if(ct===void 0&&(st==="instanceMatrix"&&y.instanceMatrix&&(ct=y.instanceMatrix),st==="instanceColor"&&y.instanceColor&&(ct=y.instanceColor)),ct!==void 0){const _t=ct.normalized,Tt=ct.itemSize,kt=t.get(ct);if(kt===void 0)continue;const et=kt.buffer,At=kt.type,St=kt.bytesPerElement,G=At===n.INT||At===n.UNSIGNED_INT||ct.gpuType===pl;if(ct.isInterleavedBufferAttribute){const K=ct.data,vt=K.stride,Lt=ct.offset;if(K.isInstancedInterleavedBuffer){for(let Rt=0;Rt<X.locationSize;Rt++)d(X.location+Rt,K.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Rt=0;Rt<X.locationSize;Rt++)m(X.location+Rt);n.bindBuffer(n.ARRAY_BUFFER,et);for(let Rt=0;Rt<X.locationSize;Rt++)S(X.location+Rt,Tt/X.locationSize,At,_t,vt*St,(Lt+Tt/X.locationSize*Rt)*St,G)}else{if(ct.isInstancedBufferAttribute){for(let K=0;K<X.locationSize;K++)d(X.location+K,ct.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let K=0;K<X.locationSize;K++)m(X.location+K);n.bindBuffer(n.ARRAY_BUFFER,et);for(let K=0;K<X.locationSize;K++)S(X.location+K,Tt/X.locationSize,At,_t,Tt*St,Tt/X.locationSize*K*St,G)}}else if(H!==void 0){const _t=H[st];if(_t!==void 0)switch(_t.length){case 2:n.vertexAttrib2fv(X.location,_t);break;case 3:n.vertexAttrib3fv(X.location,_t);break;case 4:n.vertexAttrib4fv(X.location,_t);break;default:n.vertexAttrib1fv(X.location,_t)}}}}T()}function R(){F();for(const y in i){const P=i[y];for(const N in P){const z=P[N];for(const k in z)u(z[k].object),delete z[k];delete P[N]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const P=i[y.id];for(const N in P){const z=P[N];for(const k in z)u(z[k].object),delete z[k];delete P[N]}delete i[y.id]}function L(y){for(const P in i){const N=i[P];if(N[y.id]===void 0)continue;const z=N[y.id];for(const k in z)u(z[k].object),delete z[k];delete N[y.id]}}function F(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:F,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function V0(n,t,e){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,i,1)}function l(c,u,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function G0(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(L){return!(L!==dn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const F=L===us&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==wn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==En&&!F)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:R,maxSamples:C}}function W0(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new di,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const T=s?0:i,S=T*4;let x=d.clippingState||null;l.value=x,x=u(g,f,S,p);for(let R=0;R!==S;++R)x[R]=e[R];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<d)&&(m=new Float32Array(d));for(let S=0,x=p;S!==_;++S,x+=4)o.copy(h[S]).applyMatrix4(T,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function X0(n){let t=new WeakMap;function e(o,a){return a===ba?o.mapping=er:a===Aa&&(o.mapping=nr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ba||a===Aa)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new sd(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const Ji=4,Dc=[.125,.215,.35,.446,.526,.582],gi=20,oa=new th,Fc=new Vt;let aa=null,la=0,ca=0,ua=!1;const pi=(1+Math.sqrt(5))/2,Xi=1/pi,Ic=[new w(-pi,Xi,0),new w(pi,Xi,0),new w(-Xi,0,pi),new w(Xi,0,pi),new w(0,pi,-Xi),new w(0,pi,Xi),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],q0=new w;class Uc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100,s={}){const{size:o=256,position:a=q0}=s;aa=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(aa,la,ca),this._renderer.xr.enabled=ua,t.scissorTest=!1,Zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===er||t.mapping===nr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),aa=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:us,format:dn,colorSpace:ir,depthBuffer:!1},r=Nc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nc(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Y0(s)),this._blurMaterial=Z0(s,t,e)}return r}_compileMaterial(t){const e=new ne(this._lodPlanes[0],t);this._renderer.compile(e,oa)}_sceneToCubeUV(t,e,i,r,s){const l=new We(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Fc),h.toneMapping=kn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const _=new mr({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),m=new ne(new je,_);let d=!1;const T=t.background;T?T.isColor&&(_.color.copy(T),t.background=null,d=!0):(_.color.copy(Fc),d=!0);for(let S=0;S<6;S++){const x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));const R=this._cubeSize;Zs(r,x*R,S>2?R:0,R,R),h.setRenderTarget(r),d&&h.render(m,l),h.render(t,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=f,t.background=T}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===er||t.mapping===nr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ne(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Zs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,oa)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ic[(r-s-1)%Ic.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ne(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*gi-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):gi;m>gi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gi}`);const d=[];let T=0;for(let L=0;L<gi;++L){const F=L/_,M=Math.exp(-F*F/2);d.push(M),L===0?T+=M:L<m&&(T+=2*M)}for(let L=0;L<d.length;L++)d[L]=d[L]/T;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-i;const x=this._sizeLods[r],R=3*x*(r>S-Ji?r-S+Ji:0),C=4*(this._cubeSize-x);Zs(e,R,C,3*x,2*x),l.setRenderTarget(e),l.render(h,oa)}}function Y0(n){const t=[],e=[],i=[];let r=n;const s=n-Ji+1+Dc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Ji?l=Dc[o-n+Ji-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,d=1,T=new Float32Array(_*g*p),S=new Float32Array(m*g*p),x=new Float32Array(d*g*p);for(let C=0;C<p;C++){const L=C%3*2/3-1,F=C>2?0:-1,M=[L,F,0,L+2/3,F,0,L+2/3,F+1,0,L,F,0,L+2/3,F+1,0,L,F+1,0];T.set(M,_*g*C),S.set(f,m*g*C);const y=[C,C,C,C,C,C];x.set(y,d*g*C)}const R=new Pe;R.setAttribute("position",new on(T,_)),R.setAttribute("uv",new on(S,m)),R.setAttribute("faceIndex",new on(x,d)),t.push(R),r>Ji&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Nc(n,t,e){const i=new Si(n,t,e);return i.texture.mapping=Mo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zs(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Z0(n,t,e){const i=new Float32Array(gi),r=new w(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Oc(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Bc(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Ll(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function J0(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ba||l===Aa,u=l===er||l===nr;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Uc(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(e===null&&(e=new Uc(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function $0(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Zr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function K0(n,t,e,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(t.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)t.update(f[p],n.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const T=p.array;_=p.version;for(let S=0,x=T.length;S<x;S+=3){const R=T[S+0],C=T[S+1],L=T[S+2];f.push(R,C,C,L,L,R)}}else if(g!==void 0){const T=g.array;_=g.version;for(let S=0,x=T.length/3-1;S<x;S+=3){const R=S+0,C=S+1,L=S+2;f.push(R,C,C,L,L,R)}}else return;const m=new(Pu(f)?Iu:Fu)(f,1);m.version=_;const d=s.get(h);d&&t.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function j0(n,t,e){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*o),e.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,f*o,g),e.update(p,i,g))}function u(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,i,1)}function h(f,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,_,0,g);let d=0;for(let T=0;T<g;T++)d+=p[T]*_[T];e.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Q0(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function tg(n,t,e){const i=new WeakMap,r=new ue;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let M=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let S=0;p===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let x=a.attributes.position.count*S,R=1;x>t.maxTextureSize&&(R=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const C=new Float32Array(x*R*4*h),L=new Lu(C,x,R,h);L.type=En,L.needsUpdate=!0;const F=S*4;for(let y=0;y<h;y++){const P=m[y],N=d[y],z=T[y],k=x*R*4*y;for(let Z=0;Z<P.count;Z++){const H=Z*F;p===!0&&(r.fromBufferAttribute(P,Z),C[k+H+0]=r.x,C[k+H+1]=r.y,C[k+H+2]=r.z,C[k+H+3]=0),g===!0&&(r.fromBufferAttribute(N,Z),C[k+H+4]=r.x,C[k+H+5]=r.y,C[k+H+6]=r.z,C[k+H+7]=0),_===!0&&(r.fromBufferAttribute(z,Z),C[k+H+8]=r.x,C[k+H+9]=r.y,C[k+H+10]=r.z,C[k+H+11]=z.itemSize===4?r.w:1)}}f={count:h,texture:L,size:new ft(x,R)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function eg(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const ih=new Ie,zc=new Gu(1,1),rh=new Lu,sh=new Vf,oh=new Ou,kc=[],Hc=[],Vc=new Float32Array(16),Gc=new Float32Array(9),Wc=new Float32Array(4);function vr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=kc[r];if(s===void 0&&(s=new Float32Array(r),kc[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Te(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function be(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function bo(n,t){let e=Hc[t];e===void 0&&(e=new Int32Array(t),Hc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function ng(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function ig(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2fv(this.addr,t),be(e,t)}}function rg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;n.uniform3fv(this.addr,t),be(e,t)}}function sg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4fv(this.addr,t),be(e,t)}}function og(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Te(e,i))return;Wc.set(i),n.uniformMatrix2fv(this.addr,!1,Wc),be(e,i)}}function ag(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Te(e,i))return;Gc.set(i),n.uniformMatrix3fv(this.addr,!1,Gc),be(e,i)}}function lg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Te(e,i))return;Vc.set(i),n.uniformMatrix4fv(this.addr,!1,Vc),be(e,i)}}function cg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function ug(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2iv(this.addr,t),be(e,t)}}function hg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;n.uniform3iv(this.addr,t),be(e,t)}}function fg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4iv(this.addr,t),be(e,t)}}function dg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function pg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2uiv(this.addr,t),be(e,t)}}function mg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;n.uniform3uiv(this.addr,t),be(e,t)}}function gg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4uiv(this.addr,t),be(e,t)}}function _g(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(zc.compareFunction=Cu,s=zc):s=ih,e.setTexture2D(t||s,r)}function vg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||sh,r)}function xg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||oh,r)}function yg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||rh,r)}function Mg(n){switch(n){case 5126:return ng;case 35664:return ig;case 35665:return rg;case 35666:return sg;case 35674:return og;case 35675:return ag;case 35676:return lg;case 5124:case 35670:return cg;case 35667:case 35671:return ug;case 35668:case 35672:return hg;case 35669:case 35673:return fg;case 5125:return dg;case 36294:return pg;case 36295:return mg;case 36296:return gg;case 35678:case 36198:case 36298:case 36306:case 35682:return _g;case 35679:case 36299:case 36307:return vg;case 35680:case 36300:case 36308:case 36293:return xg;case 36289:case 36303:case 36311:case 36292:return yg}}function Sg(n,t){n.uniform1fv(this.addr,t)}function Eg(n,t){const e=vr(t,this.size,2);n.uniform2fv(this.addr,e)}function Tg(n,t){const e=vr(t,this.size,3);n.uniform3fv(this.addr,e)}function bg(n,t){const e=vr(t,this.size,4);n.uniform4fv(this.addr,e)}function Ag(n,t){const e=vr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function wg(n,t){const e=vr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Rg(n,t){const e=vr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Cg(n,t){n.uniform1iv(this.addr,t)}function Pg(n,t){n.uniform2iv(this.addr,t)}function Lg(n,t){n.uniform3iv(this.addr,t)}function Dg(n,t){n.uniform4iv(this.addr,t)}function Fg(n,t){n.uniform1uiv(this.addr,t)}function Ig(n,t){n.uniform2uiv(this.addr,t)}function Ug(n,t){n.uniform3uiv(this.addr,t)}function Ng(n,t){n.uniform4uiv(this.addr,t)}function Og(n,t,e){const i=this.cache,r=t.length,s=bo(e,r);Te(i,s)||(n.uniform1iv(this.addr,s),be(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||ih,s[o])}function Bg(n,t,e){const i=this.cache,r=t.length,s=bo(e,r);Te(i,s)||(n.uniform1iv(this.addr,s),be(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||sh,s[o])}function zg(n,t,e){const i=this.cache,r=t.length,s=bo(e,r);Te(i,s)||(n.uniform1iv(this.addr,s),be(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||oh,s[o])}function kg(n,t,e){const i=this.cache,r=t.length,s=bo(e,r);Te(i,s)||(n.uniform1iv(this.addr,s),be(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||rh,s[o])}function Hg(n){switch(n){case 5126:return Sg;case 35664:return Eg;case 35665:return Tg;case 35666:return bg;case 35674:return Ag;case 35675:return wg;case 35676:return Rg;case 5124:case 35670:return Cg;case 35667:case 35671:return Pg;case 35668:case 35672:return Lg;case 35669:case 35673:return Dg;case 5125:return Fg;case 36294:return Ig;case 36295:return Ug;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Og;case 35679:case 36299:case 36307:return Bg;case 35680:case 36300:case 36308:case 36293:return zg;case 36289:case 36303:case 36311:case 36292:return kg}}class Vg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Mg(e.type)}}class Gg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Hg(e.type)}}class Wg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const ha=/(\w+)(\])?(\[|\.)?/g;function Xc(n,t){n.seq.push(t),n.map[t.id]=t}function Xg(n,t,e){const i=n.name,r=i.length;for(ha.lastIndex=0;;){const s=ha.exec(i),o=ha.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Xc(e,c===void 0?new Vg(a,n,t):new Gg(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new Wg(a),Xc(e,h)),e=h}}}class no{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Xg(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function qc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const qg=37297;let Yg=0;function Zg(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Yc=new Jt;function Jg(n){ee._getMatrix(Yc,ee.workingColorSpace,n);const t=`mat3( ${Yc.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(n)){case ao:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Zc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Zg(n.getShaderSource(t),a)}else return s}function $g(n,t){const e=Jg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Kg(n,t){let e;switch(t){case jh:e="Linear";break;case Qh:e="Reinhard";break;case tf:e="Cineon";break;case ef:e="ACESFilmic";break;case rf:e="AgX";break;case sf:e="Neutral";break;case nf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Js=new w;function jg(){ee.getLuminanceCoefficients(Js);const n=Js.x.toFixed(4),t=Js.y.toFixed(4),e=Js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ur).join(`
`)}function t_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function e_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ur(n){return n!==""}function Jc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $c(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const n_=/^[ \t]*#include +<([\w\d./]+)>/gm;function al(n){return n.replace(n_,r_)}const i_=new Map;function r_(n,t){let e=$t[t];if(e===void 0){const i=i_.get(t);if(i!==void 0)e=$t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return al(e)}const s_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kc(n){return n.replace(s_,o_)}function o_(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function jc(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function a_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===dl?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Lh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Nn&&(t="SHADOWMAP_TYPE_VSM"),t}function l_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case er:case nr:t="ENVMAP_TYPE_CUBE";break;case Mo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function c_(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===nr&&(t="ENVMAP_MODE_REFRACTION"),t}function u_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case xu:t="ENVMAP_BLENDING_MULTIPLY";break;case $h:t="ENVMAP_BLENDING_MIX";break;case Kh:t="ENVMAP_BLENDING_ADD";break}return t}function h_(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function f_(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=a_(e),c=l_(e),u=c_(e),h=u_(e),f=h_(e),p=Qg(e),g=t_(s),_=r.createProgram();let m,d,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ur).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ur).join(`
`),d.length>0&&(d+=`
`)):(m=[jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),d=[jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?$t.tonemapping_pars_fragment:"",e.toneMapping!==kn?Kg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,$g("linearToOutputTexel",e.outputColorSpace),jg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ur).join(`
`)),o=al(o),o=Jc(o,e),o=$c(o,e),a=al(a),a=Jc(a,e),a=$c(a,e),o=Kc(o),a=Kc(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const S=T+m+o,x=T+d+a,R=qc(r,r.VERTEX_SHADER,S),C=qc(r,r.FRAGMENT_SHADER,x);r.attachShader(_,R),r.attachShader(_,C),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function L(P){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(_)||"",z=r.getShaderInfoLog(R)||"",k=r.getShaderInfoLog(C)||"",Z=N.trim(),H=z.trim(),st=k.trim();let X=!0,ct=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,R,C);else{const _t=Zc(r,R,"vertex"),Tt=Zc(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+Z+`
`+_t+`
`+Tt)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(H===""||st==="")&&(ct=!1);ct&&(P.diagnostics={runnable:X,programLog:Z,vertexShader:{log:H,prefix:m},fragmentShader:{log:st,prefix:d}})}r.deleteShader(R),r.deleteShader(C),F=new no(r,_),M=e_(r,_)}let F;this.getUniforms=function(){return F===void 0&&L(this),F};let M;this.getAttributes=function(){return M===void 0&&L(this),M};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,qg)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Yg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=C,this}let d_=0;class p_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new m_(t),e.set(t,i)),i}}class m_{constructor(t){this.id=d_++,this.code=t,this.usedTimes=0}}function g_(n,t,e,i,r,s,o){const a=new El,l=new p_,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,y,P,N,z){const k=N.fog,Z=z.geometry,H=M.isMeshStandardMaterial?N.environment:null,st=(M.isMeshStandardMaterial?e:t).get(M.envMap||H),X=st&&st.mapping===Mo?st.image.height:null,ct=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const _t=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Tt=_t!==void 0?_t.length:0;let kt=0;Z.morphAttributes.position!==void 0&&(kt=1),Z.morphAttributes.normal!==void 0&&(kt=2),Z.morphAttributes.color!==void 0&&(kt=3);let et,At,St,G;if(ct){const se=vn[ct];et=se.vertexShader,At=se.fragmentShader}else et=M.vertexShader,At=M.fragmentShader,l.update(M),St=l.getVertexShaderID(M),G=l.getFragmentShaderID(M);const K=n.getRenderTarget(),vt=n.state.buffers.depth.getReversed(),Lt=z.isInstancedMesh===!0,Rt=z.isBatchedMesh===!0,Kt=!!M.map,j=!!M.matcap,b=!!st,q=!!M.aoMap,J=!!M.lightMap,Q=!!M.bumpMap,tt=!!M.normalMap,pt=!!M.displacementMap,ot=!!M.emissiveMap,mt=!!M.metalnessMap,qt=!!M.roughnessMap,Xt=M.anisotropy>0,A=M.clearcoat>0,v=M.dispersion>0,B=M.iridescence>0,Y=M.sheen>0,rt=M.transmission>0,$=Xt&&!!M.anisotropyMap,Ut=A&&!!M.clearcoatMap,dt=A&&!!M.clearcoatNormalMap,Dt=A&&!!M.clearcoatRoughnessMap,Ft=B&&!!M.iridescenceMap,at=B&&!!M.iridescenceThicknessMap,Et=Y&&!!M.sheenColorMap,Gt=Y&&!!M.sheenRoughnessMap,Ot=!!M.specularMap,yt=!!M.specularColorMap,Zt=!!M.specularIntensityMap,I=rt&&!!M.transmissionMap,ht=rt&&!!M.thicknessMap,gt=!!M.gradientMap,Ct=!!M.alphaMap,lt=M.alphaTest>0,nt=!!M.alphaHash,It=!!M.extensions;let Yt=kn;M.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Yt=n.toneMapping);const fe={shaderID:ct,shaderType:M.type,shaderName:M.name,vertexShader:et,fragmentShader:At,defines:M.defines,customVertexShaderID:St,customFragmentShaderID:G,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Rt,batchingColor:Rt&&z._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&z.instanceColor!==null,instancingMorph:Lt&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ir,alphaToCoverage:!!M.alphaToCoverage,map:Kt,matcap:j,envMap:b,envMapMode:b&&st.mapping,envMapCubeUVHeight:X,aoMap:q,lightMap:J,bumpMap:Q,normalMap:tt,displacementMap:f&&pt,emissiveMap:ot,normalMapObjectSpace:tt&&M.normalMapType===cf,normalMapTangentSpace:tt&&M.normalMapType===Ru,metalnessMap:mt,roughnessMap:qt,anisotropy:Xt,anisotropyMap:$,clearcoat:A,clearcoatMap:Ut,clearcoatNormalMap:dt,clearcoatRoughnessMap:Dt,dispersion:v,iridescence:B,iridescenceMap:Ft,iridescenceThicknessMap:at,sheen:Y,sheenColorMap:Et,sheenRoughnessMap:Gt,specularMap:Ot,specularColorMap:yt,specularIntensityMap:Zt,transmission:rt,transmissionMap:I,thicknessMap:ht,gradientMap:gt,opaque:M.transparent===!1&&M.blending===Ki&&M.alphaToCoverage===!1,alphaMap:Ct,alphaTest:lt,alphaHash:nt,combine:M.combine,mapUv:Kt&&_(M.map.channel),aoMapUv:q&&_(M.aoMap.channel),lightMapUv:J&&_(M.lightMap.channel),bumpMapUv:Q&&_(M.bumpMap.channel),normalMapUv:tt&&_(M.normalMap.channel),displacementMapUv:pt&&_(M.displacementMap.channel),emissiveMapUv:ot&&_(M.emissiveMap.channel),metalnessMapUv:mt&&_(M.metalnessMap.channel),roughnessMapUv:qt&&_(M.roughnessMap.channel),anisotropyMapUv:$&&_(M.anisotropyMap.channel),clearcoatMapUv:Ut&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:dt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Dt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:at&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&_(M.sheenRoughnessMap.channel),specularMapUv:Ot&&_(M.specularMap.channel),specularColorMapUv:yt&&_(M.specularColorMap.channel),specularIntensityMapUv:Zt&&_(M.specularIntensityMap.channel),transmissionMapUv:I&&_(M.transmissionMap.channel),thicknessMapUv:ht&&_(M.thicknessMap.channel),alphaMapUv:Ct&&_(M.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(tt||Xt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Z.attributes.uv&&(Kt||Ct),fog:!!k,useFog:M.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:vt,skinning:z.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:kt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Yt,decodeVideoTexture:Kt&&M.map.isVideoTexture===!0&&ee.getTransfer(M.map.colorSpace)===le,decodeVideoTextureEmissive:ot&&M.emissiveMap.isVideoTexture===!0&&ee.getTransfer(M.emissiveMap.colorSpace)===le,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ke,flipSided:M.side===Xe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:It&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&M.extensions.multiDraw===!0||Rt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return fe.vertexUv1s=c.has(1),fe.vertexUv2s=c.has(2),fe.vertexUv3s=c.has(3),c.clear(),fe}function d(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)y.push(P),y.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(T(y,M),S(y,M),y.push(n.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function T(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function S(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){const y=g[M.type];let P;if(y){const N=vn[y];P=ed.clone(N.uniforms)}else P=M.uniforms;return P}function R(M,y){let P;for(let N=0,z=u.length;N<z;N++){const k=u[N];if(k.cacheKey===y){P=k,++P.usedTimes;break}}return P===void 0&&(P=new f_(n,y,M,s),u.push(P)),P}function C(M){if(--M.usedTimes===0){const y=u.indexOf(M);u[y]=u[u.length-1],u.pop(),M.destroy()}}function L(M){l.remove(M)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:R,releaseProgram:C,releaseShaderCache:L,programs:u,dispose:F}}function __(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function v_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Qc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function tu(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(h,f,p,g,_,m){let d=n[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),t++,d}function a(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):e.push(d)}function l(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||v_),i.length>1&&i.sort(f||Qc),r.length>1&&r.sort(f||Qc)}function u(){for(let h=t,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function x_(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new tu,n.set(i,[o])):r>=s.length?(o=new tu,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function y_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new Vt};break;case"SpotLight":e={position:new w,direction:new w,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new w,halfWidth:new w,halfHeight:new w};break}return n[t.id]=e,e}}}function M_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let S_=0;function E_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function T_(n){const t=new y_,e=M_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new w);const r=new w,s=new re,o=new re;function a(c){let u=0,h=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,T=0,S=0,x=0,R=0,C=0,L=0;c.sort(E_);for(let M=0,y=c.length;M<y;M++){const P=c[M],N=P.color,z=P.intensity,k=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=N.r*z,h+=N.g*z,f+=N.b*z;else if(P.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(P.sh.coefficients[H],z);L++}else if(P.isDirectionalLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const st=P.shadow,X=e.get(P);X.shadowIntensity=st.intensity,X.shadowBias=st.bias,X.shadowNormalBias=st.normalBias,X.shadowRadius=st.radius,X.shadowMapSize=st.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=P.shadow.matrix,T++}i.directional[p]=H,p++}else if(P.isSpotLight){const H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(N).multiplyScalar(z),H.distance=k,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,i.spot[_]=H;const st=P.shadow;if(P.map&&(i.spotLightMap[R]=P.map,R++,st.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[_]=st.matrix,P.castShadow){const X=e.get(P);X.shadowIntensity=st.intensity,X.shadowBias=st.bias,X.shadowNormalBias=st.normalBias,X.shadowRadius=st.radius,X.shadowMapSize=st.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=Z,x++}_++}else if(P.isRectAreaLight){const H=t.get(P);H.color.copy(N).multiplyScalar(z),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=H,m++}else if(P.isPointLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const st=P.shadow,X=e.get(P);X.shadowIntensity=st.intensity,X.shadowBias=st.bias,X.shadowNormalBias=st.normalBias,X.shadowRadius=st.radius,X.shadowMapSize=st.mapSize,X.shadowCameraNear=st.camera.near,X.shadowCameraFar=st.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=P.shadow.matrix,S++}i.point[g]=H,g++}else if(P.isHemisphereLight){const H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(z),H.groundColor.copy(P.groundColor).multiplyScalar(z),i.hemi[d]=H,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_FLOAT_1,i.rectAreaLTC2=xt.LTC_FLOAT_2):(i.rectAreaLTC1=xt.LTC_HALF_1,i.rectAreaLTC2=xt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const F=i.hash;(F.directionalLength!==p||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==m||F.hemiLength!==d||F.numDirectionalShadows!==T||F.numPointShadows!==S||F.numSpotShadows!==x||F.numSpotMaps!==R||F.numLightProbes!==L)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=x+R-C,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=L,F.directionalLength=p,F.pointLength=g,F.spotLength=_,F.rectAreaLength=m,F.hemiLength=d,F.numDirectionalShadows=T,F.numPointShadows=S,F.numSpotShadows=x,F.numSpotMaps=R,F.numLightProbes=L,i.version=S_++)}function l(c,u){let h=0,f=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let d=0,T=c.length;d<T;d++){const S=c[d];if(S.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(S.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function eu(n){const t=new T_(n),e=[],i=[];function r(u){c.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function b_(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new eu(n),t.set(r,[a])):s>=o.length?(a=new eu(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const A_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function R_(n,t,e){let i=new Tl;const r=new ft,s=new ft,o=new ue,a=new Jd({depthPacking:lf}),l=new $d,c={},u=e.maxTextureSize,h={[An]:Xe,[Xe]:An,[Ke]:Ke},f=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:A_,fragmentShader:w_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Pe;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ne(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dl;let d=this.type;this.render=function(C,L,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const M=n.getRenderTarget(),y=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Qn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const z=d!==Nn&&this.type===Nn,k=d===Nn&&this.type!==Nn;for(let Z=0,H=C.length;Z<H;Z++){const st=C[Z],X=st.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const ct=X.getFrameExtents();if(r.multiply(ct),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ct.x),r.x=s.x*ct.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ct.y),r.y=s.y*ct.y,X.mapSize.y=s.y)),X.map===null||z===!0||k===!0){const Tt=this.type!==Nn?{minFilter:He,magFilter:He}:{};X.map!==null&&X.map.dispose(),X.map=new Si(r.x,r.y,Tt),X.map.texture.name=st.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const _t=X.getViewportCount();for(let Tt=0;Tt<_t;Tt++){const kt=X.getViewport(Tt);o.set(s.x*kt.x,s.y*kt.y,s.x*kt.z,s.y*kt.w),N.viewport(o),X.updateMatrices(st,Tt),i=X.getFrustum(),x(L,F,X.camera,st,this.type)}X.isPointLightShadow!==!0&&this.type===Nn&&T(X,F),X.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(M,y,P)};function T(C,L){const F=t.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Si(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(L,null,F,f,_,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(L,null,F,p,_,null)}function S(C,L,F,M){let y=null;const P=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)y=P;else if(y=F.isPointLight===!0?l:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const N=y.uuid,z=L.uuid;let k=c[N];k===void 0&&(k={},c[N]=k);let Z=k[z];Z===void 0&&(Z=y.clone(),k[z]=Z,L.addEventListener("dispose",R)),y=Z}if(y.visible=L.visible,y.wireframe=L.wireframe,M===Nn?y.side=L.shadowSide!==null?L.shadowSide:L.side:y.side=L.shadowSide!==null?L.shadowSide:h[L.side],y.alphaMap=L.alphaMap,y.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,y.map=L.map,y.clipShadows=L.clipShadows,y.clippingPlanes=L.clippingPlanes,y.clipIntersection=L.clipIntersection,y.displacementMap=L.displacementMap,y.displacementScale=L.displacementScale,y.displacementBias=L.displacementBias,y.wireframeLinewidth=L.wireframeLinewidth,y.linewidth=L.linewidth,F.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const N=n.properties.get(y);N.light=F}return y}function x(C,L,F,M,y){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===Nn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);const z=t.update(C),k=C.material;if(Array.isArray(k)){const Z=z.groups;for(let H=0,st=Z.length;H<st;H++){const X=Z[H],ct=k[X.materialIndex];if(ct&&ct.visible){const _t=S(C,ct,M,y);C.onBeforeShadow(n,C,L,F,z,_t,X),n.renderBufferDirect(F,null,z,_t,C,X),C.onAfterShadow(n,C,L,F,z,_t,X)}}}else if(k.visible){const Z=S(C,k,M,y);C.onBeforeShadow(n,C,L,F,z,Z,null),n.renderBufferDirect(F,null,z,Z,C,null),C.onAfterShadow(n,C,L,F,z,Z,null)}}const N=C.children;for(let z=0,k=N.length;z<k;z++)x(N[z],L,F,M,y)}function R(C){C.target.removeEventListener("dispose",R);for(const F in c){const M=c[F],y=C.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const C_={[va]:xa,[ya]:Ea,[Ma]:Ta,[tr]:Sa,[xa]:va,[Ea]:ya,[Ta]:Ma,[Sa]:tr};function P_(n,t){function e(){let I=!1;const ht=new ue;let gt=null;const Ct=new ue(0,0,0,0);return{setMask:function(lt){gt!==lt&&!I&&(n.colorMask(lt,lt,lt,lt),gt=lt)},setLocked:function(lt){I=lt},setClear:function(lt,nt,It,Yt,fe){fe===!0&&(lt*=Yt,nt*=Yt,It*=Yt),ht.set(lt,nt,It,Yt),Ct.equals(ht)===!1&&(n.clearColor(lt,nt,It,Yt),Ct.copy(ht))},reset:function(){I=!1,gt=null,Ct.set(-1,0,0,0)}}}function i(){let I=!1,ht=!1,gt=null,Ct=null,lt=null;return{setReversed:function(nt){if(ht!==nt){const It=t.get("EXT_clip_control");nt?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),ht=nt;const Yt=lt;lt=null,this.setClear(Yt)}},getReversed:function(){return ht},setTest:function(nt){nt?K(n.DEPTH_TEST):vt(n.DEPTH_TEST)},setMask:function(nt){gt!==nt&&!I&&(n.depthMask(nt),gt=nt)},setFunc:function(nt){if(ht&&(nt=C_[nt]),Ct!==nt){switch(nt){case va:n.depthFunc(n.NEVER);break;case xa:n.depthFunc(n.ALWAYS);break;case ya:n.depthFunc(n.LESS);break;case tr:n.depthFunc(n.LEQUAL);break;case Ma:n.depthFunc(n.EQUAL);break;case Sa:n.depthFunc(n.GEQUAL);break;case Ea:n.depthFunc(n.GREATER);break;case Ta:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ct=nt}},setLocked:function(nt){I=nt},setClear:function(nt){lt!==nt&&(ht&&(nt=1-nt),n.clearDepth(nt),lt=nt)},reset:function(){I=!1,gt=null,Ct=null,lt=null,ht=!1}}}function r(){let I=!1,ht=null,gt=null,Ct=null,lt=null,nt=null,It=null,Yt=null,fe=null;return{setTest:function(se){I||(se?K(n.STENCIL_TEST):vt(n.STENCIL_TEST))},setMask:function(se){ht!==se&&!I&&(n.stencilMask(se),ht=se)},setFunc:function(se,Pn,_n){(gt!==se||Ct!==Pn||lt!==_n)&&(n.stencilFunc(se,Pn,_n),gt=se,Ct=Pn,lt=_n)},setOp:function(se,Pn,_n){(nt!==se||It!==Pn||Yt!==_n)&&(n.stencilOp(se,Pn,_n),nt=se,It=Pn,Yt=_n)},setLocked:function(se){I=se},setClear:function(se){fe!==se&&(n.clearStencil(se),fe=se)},reset:function(){I=!1,ht=null,gt=null,Ct=null,lt=null,nt=null,It=null,Yt=null,fe=null}}}const s=new e,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,T=null,S=null,x=null,R=null,C=null,L=new Vt(0,0,0),F=0,M=!1,y=null,P=null,N=null,z=null,k=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,st=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=st>=1):X.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=st>=2);let ct=null,_t={};const Tt=n.getParameter(n.SCISSOR_BOX),kt=n.getParameter(n.VIEWPORT),et=new ue().fromArray(Tt),At=new ue().fromArray(kt);function St(I,ht,gt,Ct){const lt=new Uint8Array(4),nt=n.createTexture();n.bindTexture(I,nt),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let It=0;It<gt;It++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ht,0,n.RGBA,1,1,Ct,0,n.RGBA,n.UNSIGNED_BYTE,lt):n.texImage2D(ht+It,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,lt);return nt}const G={};G[n.TEXTURE_2D]=St(n.TEXTURE_2D,n.TEXTURE_2D,1),G[n.TEXTURE_CUBE_MAP]=St(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[n.TEXTURE_2D_ARRAY]=St(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),G[n.TEXTURE_3D]=St(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(n.DEPTH_TEST),o.setFunc(tr),Q(!1),tt(Gl),K(n.CULL_FACE),q(Qn);function K(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function vt(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Lt(I,ht){return h[I]!==ht?(n.bindFramebuffer(I,ht),h[I]=ht,I===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ht),I===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ht),!0):!1}function Rt(I,ht){let gt=p,Ct=!1;if(I){gt=f.get(ht),gt===void 0&&(gt=[],f.set(ht,gt));const lt=I.textures;if(gt.length!==lt.length||gt[0]!==n.COLOR_ATTACHMENT0){for(let nt=0,It=lt.length;nt<It;nt++)gt[nt]=n.COLOR_ATTACHMENT0+nt;gt.length=lt.length,Ct=!0}}else gt[0]!==n.BACK&&(gt[0]=n.BACK,Ct=!0);Ct&&n.drawBuffers(gt)}function Kt(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const j={[mi]:n.FUNC_ADD,[Fh]:n.FUNC_SUBTRACT,[Ih]:n.FUNC_REVERSE_SUBTRACT};j[Uh]=n.MIN,j[Nh]=n.MAX;const b={[Oh]:n.ZERO,[Bh]:n.ONE,[zh]:n.SRC_COLOR,[ga]:n.SRC_ALPHA,[Xh]:n.SRC_ALPHA_SATURATE,[Gh]:n.DST_COLOR,[Hh]:n.DST_ALPHA,[kh]:n.ONE_MINUS_SRC_COLOR,[_a]:n.ONE_MINUS_SRC_ALPHA,[Wh]:n.ONE_MINUS_DST_COLOR,[Vh]:n.ONE_MINUS_DST_ALPHA,[qh]:n.CONSTANT_COLOR,[Yh]:n.ONE_MINUS_CONSTANT_COLOR,[Zh]:n.CONSTANT_ALPHA,[Jh]:n.ONE_MINUS_CONSTANT_ALPHA};function q(I,ht,gt,Ct,lt,nt,It,Yt,fe,se){if(I===Qn){_===!0&&(vt(n.BLEND),_=!1);return}if(_===!1&&(K(n.BLEND),_=!0),I!==Dh){if(I!==m||se!==M){if((d!==mi||x!==mi)&&(n.blendEquation(n.FUNC_ADD),d=mi,x=mi),se)switch(I){case Ki:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ma:n.blendFunc(n.ONE,n.ONE);break;case Wl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ki:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ma:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Wl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}T=null,S=null,R=null,C=null,L.set(0,0,0),F=0,m=I,M=se}return}lt=lt||ht,nt=nt||gt,It=It||Ct,(ht!==d||lt!==x)&&(n.blendEquationSeparate(j[ht],j[lt]),d=ht,x=lt),(gt!==T||Ct!==S||nt!==R||It!==C)&&(n.blendFuncSeparate(b[gt],b[Ct],b[nt],b[It]),T=gt,S=Ct,R=nt,C=It),(Yt.equals(L)===!1||fe!==F)&&(n.blendColor(Yt.r,Yt.g,Yt.b,fe),L.copy(Yt),F=fe),m=I,M=!1}function J(I,ht){I.side===Ke?vt(n.CULL_FACE):K(n.CULL_FACE);let gt=I.side===Xe;ht&&(gt=!gt),Q(gt),I.blending===Ki&&I.transparent===!1?q(Qn):q(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const Ct=I.stencilWrite;a.setTest(Ct),Ct&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ot(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):vt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Q(I){y!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),y=I)}function tt(I){I!==Ch?(K(n.CULL_FACE),I!==P&&(I===Gl?n.cullFace(n.BACK):I===Ph?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):vt(n.CULL_FACE),P=I}function pt(I){I!==N&&(H&&n.lineWidth(I),N=I)}function ot(I,ht,gt){I?(K(n.POLYGON_OFFSET_FILL),(z!==ht||k!==gt)&&(n.polygonOffset(ht,gt),z=ht,k=gt)):vt(n.POLYGON_OFFSET_FILL)}function mt(I){I?K(n.SCISSOR_TEST):vt(n.SCISSOR_TEST)}function qt(I){I===void 0&&(I=n.TEXTURE0+Z-1),ct!==I&&(n.activeTexture(I),ct=I)}function Xt(I,ht,gt){gt===void 0&&(ct===null?gt=n.TEXTURE0+Z-1:gt=ct);let Ct=_t[gt];Ct===void 0&&(Ct={type:void 0,texture:void 0},_t[gt]=Ct),(Ct.type!==I||Ct.texture!==ht)&&(ct!==gt&&(n.activeTexture(gt),ct=gt),n.bindTexture(I,ht||G[I]),Ct.type=I,Ct.texture=ht)}function A(){const I=_t[ct];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function B(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ut(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Dt(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ft(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function at(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Et(I){et.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),et.copy(I))}function Gt(I){At.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),At.copy(I))}function Ot(I,ht){let gt=c.get(ht);gt===void 0&&(gt=new WeakMap,c.set(ht,gt));let Ct=gt.get(I);Ct===void 0&&(Ct=n.getUniformBlockIndex(ht,I.name),gt.set(I,Ct))}function yt(I,ht){const Ct=c.get(ht).get(I);l.get(ht)!==Ct&&(n.uniformBlockBinding(ht,Ct,I.__bindingPointIndex),l.set(ht,Ct))}function Zt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ct=null,_t={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,T=null,S=null,x=null,R=null,C=null,L=new Vt(0,0,0),F=0,M=!1,y=null,P=null,N=null,z=null,k=null,et.set(0,0,n.canvas.width,n.canvas.height),At.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:K,disable:vt,bindFramebuffer:Lt,drawBuffers:Rt,useProgram:Kt,setBlending:q,setMaterial:J,setFlipSided:Q,setCullFace:tt,setLineWidth:pt,setPolygonOffset:ot,setScissorTest:mt,activeTexture:qt,bindTexture:Xt,unbindTexture:A,compressedTexImage2D:v,compressedTexImage3D:B,texImage2D:Ft,texImage3D:at,updateUBOMapping:Ot,uniformBlockBinding:yt,texStorage2D:dt,texStorage3D:Dt,texSubImage2D:Y,texSubImage3D:rt,compressedTexSubImage2D:$,compressedTexSubImage3D:Ut,scissor:Et,viewport:Gt,reset:Zt}}function L_(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,v){return p?new OffscreenCanvas(A,v):co("canvas")}function _(A,v,B){let Y=1;const rt=Xt(A);if((rt.width>B||rt.height>B)&&(Y=B/Math.max(rt.width,rt.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const $=Math.floor(Y*rt.width),Ut=Math.floor(Y*rt.height);h===void 0&&(h=g($,Ut));const dt=v?g($,Ut):h;return dt.width=$,dt.height=Ut,dt.getContext("2d").drawImage(A,0,0,$,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+$+"x"+Ut+")."),dt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),A;return A}function m(A){return A.generateMipmaps}function d(A){n.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(A,v,B,Y,rt=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=v;if(v===n.RED&&(B===n.FLOAT&&($=n.R32F),B===n.HALF_FLOAT&&($=n.R16F),B===n.UNSIGNED_BYTE&&($=n.R8)),v===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.R8UI),B===n.UNSIGNED_SHORT&&($=n.R16UI),B===n.UNSIGNED_INT&&($=n.R32UI),B===n.BYTE&&($=n.R8I),B===n.SHORT&&($=n.R16I),B===n.INT&&($=n.R32I)),v===n.RG&&(B===n.FLOAT&&($=n.RG32F),B===n.HALF_FLOAT&&($=n.RG16F),B===n.UNSIGNED_BYTE&&($=n.RG8)),v===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.RG8UI),B===n.UNSIGNED_SHORT&&($=n.RG16UI),B===n.UNSIGNED_INT&&($=n.RG32UI),B===n.BYTE&&($=n.RG8I),B===n.SHORT&&($=n.RG16I),B===n.INT&&($=n.RG32I)),v===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.RGB8UI),B===n.UNSIGNED_SHORT&&($=n.RGB16UI),B===n.UNSIGNED_INT&&($=n.RGB32UI),B===n.BYTE&&($=n.RGB8I),B===n.SHORT&&($=n.RGB16I),B===n.INT&&($=n.RGB32I)),v===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.RGBA8UI),B===n.UNSIGNED_SHORT&&($=n.RGBA16UI),B===n.UNSIGNED_INT&&($=n.RGBA32UI),B===n.BYTE&&($=n.RGBA8I),B===n.SHORT&&($=n.RGBA16I),B===n.INT&&($=n.RGBA32I)),v===n.RGB&&(B===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),v===n.RGBA){const Ut=rt?ao:ee.getTransfer(Y);B===n.FLOAT&&($=n.RGBA32F),B===n.HALF_FLOAT&&($=n.RGBA16F),B===n.UNSIGNED_BYTE&&($=Ut===le?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function x(A,v){let B;return A?v===null||v===Mi||v===Xr?B=n.DEPTH24_STENCIL8:v===En?B=n.DEPTH32F_STENCIL8:v===Wr&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Mi||v===Xr?B=n.DEPTH_COMPONENT24:v===En?B=n.DEPTH_COMPONENT32F:v===Wr&&(B=n.DEPTH_COMPONENT16),B}function R(A,v){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==He&&A.minFilter!==Sn?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function C(A){const v=A.target;v.removeEventListener("dispose",C),F(v),v.isVideoTexture&&u.delete(v)}function L(A){const v=A.target;v.removeEventListener("dispose",L),y(v)}function F(A){const v=i.get(A);if(v.__webglInit===void 0)return;const B=A.source,Y=f.get(B);if(Y){const rt=Y[v.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&M(A),Object.keys(Y).length===0&&f.delete(B)}i.remove(A)}function M(A){const v=i.get(A);n.deleteTexture(v.__webglTexture);const B=A.source,Y=f.get(B);delete Y[v.__cacheKey],o.memory.textures--}function y(A){const v=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let rt=0;rt<v.__webglFramebuffer[Y].length;rt++)n.deleteFramebuffer(v.__webglFramebuffer[Y][rt]);else n.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)n.deleteFramebuffer(v.__webglFramebuffer[Y]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const B=A.textures;for(let Y=0,rt=B.length;Y<rt;Y++){const $=i.get(B[Y]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(B[Y])}i.remove(A)}let P=0;function N(){P=0}function z(){const A=P;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),P+=1,A}function k(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function Z(A,v){const B=i.get(A);if(A.isVideoTexture&&mt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){const Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(B,A,v);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+v)}function H(A,v){const B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){G(B,A,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+v)}function st(A,v){const B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){G(B,A,v);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+v)}function X(A,v){const B=i.get(A);if(A.version>0&&B.__version!==A.version){K(B,A,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+v)}const ct={[oo]:n.REPEAT,[vi]:n.CLAMP_TO_EDGE,[wa]:n.MIRRORED_REPEAT},_t={[He]:n.NEAREST,[of]:n.NEAREST_MIPMAP_NEAREST,[ys]:n.NEAREST_MIPMAP_LINEAR,[Sn]:n.LINEAR,[Po]:n.LINEAR_MIPMAP_NEAREST,[xi]:n.LINEAR_MIPMAP_LINEAR},Tt={[ff]:n.NEVER,[vf]:n.ALWAYS,[df]:n.LESS,[Cu]:n.LEQUAL,[pf]:n.EQUAL,[_f]:n.GEQUAL,[mf]:n.GREATER,[gf]:n.NOTEQUAL};function kt(A,v){if(v.type===En&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Sn||v.magFilter===Po||v.magFilter===ys||v.magFilter===xi||v.minFilter===Sn||v.minFilter===Po||v.minFilter===ys||v.minFilter===xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,ct[v.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,ct[v.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,ct[v.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,_t[v.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,_t[v.minFilter]),v.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Tt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===He||v.minFilter!==ys&&v.minFilter!==xi||v.type===En&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function et(A,v){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",C));const Y=v.source;let rt=f.get(Y);rt===void 0&&(rt={},f.set(Y,rt));const $=k(v);if($!==A.__cacheKey){rt[$]===void 0&&(rt[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),rt[$].usedTimes++;const Ut=rt[A.__cacheKey];Ut!==void 0&&(rt[A.__cacheKey].usedTimes--,Ut.usedTimes===0&&M(v)),A.__cacheKey=$,A.__webglTexture=rt[$].texture}return B}function At(A,v,B){return Math.floor(Math.floor(A/B)/v)}function St(A,v,B,Y){const $=A.updateRanges;if($.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,B,Y,v.data);else{$.sort((at,Et)=>at.start-Et.start);let Ut=0;for(let at=1;at<$.length;at++){const Et=$[Ut],Gt=$[at],Ot=Et.start+Et.count,yt=At(Gt.start,v.width,4),Zt=At(Et.start,v.width,4);Gt.start<=Ot+1&&yt===Zt&&At(Gt.start+Gt.count-1,v.width,4)===yt?Et.count=Math.max(Et.count,Gt.start+Gt.count-Et.start):(++Ut,$[Ut]=Gt)}$.length=Ut+1;const dt=n.getParameter(n.UNPACK_ROW_LENGTH),Dt=n.getParameter(n.UNPACK_SKIP_PIXELS),Ft=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let at=0,Et=$.length;at<Et;at++){const Gt=$[at],Ot=Math.floor(Gt.start/4),yt=Math.ceil(Gt.count/4),Zt=Ot%v.width,I=Math.floor(Ot/v.width),ht=yt,gt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Zt),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),e.texSubImage2D(n.TEXTURE_2D,0,Zt,I,ht,gt,B,Y,v.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,dt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Dt),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ft)}}function G(A,v,B){let Y=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=n.TEXTURE_3D);const rt=et(A,v),$=v.source;e.bindTexture(Y,A.__webglTexture,n.TEXTURE0+B);const Ut=i.get($);if($.version!==Ut.__version||rt===!0){e.activeTexture(n.TEXTURE0+B);const dt=ee.getPrimaries(ee.workingColorSpace),Dt=v.colorSpace===xn?null:ee.getPrimaries(v.colorSpace),Ft=v.colorSpace===xn||dt===Dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let at=_(v.image,!1,r.maxTextureSize);at=qt(v,at);const Et=s.convert(v.format,v.colorSpace),Gt=s.convert(v.type);let Ot=S(v.internalFormat,Et,Gt,v.colorSpace,v.isVideoTexture);kt(Y,v);let yt;const Zt=v.mipmaps,I=v.isVideoTexture!==!0,ht=Ut.__version===void 0||rt===!0,gt=$.dataReady,Ct=R(v,at);if(v.isDepthTexture)Ot=x(v.format===Yr,v.type),ht&&(I?e.texStorage2D(n.TEXTURE_2D,1,Ot,at.width,at.height):e.texImage2D(n.TEXTURE_2D,0,Ot,at.width,at.height,0,Et,Gt,null));else if(v.isDataTexture)if(Zt.length>0){I&&ht&&e.texStorage2D(n.TEXTURE_2D,Ct,Ot,Zt[0].width,Zt[0].height);for(let lt=0,nt=Zt.length;lt<nt;lt++)yt=Zt[lt],I?gt&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,yt.width,yt.height,Et,Gt,yt.data):e.texImage2D(n.TEXTURE_2D,lt,Ot,yt.width,yt.height,0,Et,Gt,yt.data);v.generateMipmaps=!1}else I?(ht&&e.texStorage2D(n.TEXTURE_2D,Ct,Ot,at.width,at.height),gt&&St(v,at,Et,Gt)):e.texImage2D(n.TEXTURE_2D,0,Ot,at.width,at.height,0,Et,Gt,at.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){I&&ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,Ot,Zt[0].width,Zt[0].height,at.depth);for(let lt=0,nt=Zt.length;lt<nt;lt++)if(yt=Zt[lt],v.format!==dn)if(Et!==null)if(I){if(gt)if(v.layerUpdates.size>0){const It=Lc(yt.width,yt.height,v.format,v.type);for(const Yt of v.layerUpdates){const fe=yt.data.subarray(Yt*It/yt.data.BYTES_PER_ELEMENT,(Yt+1)*It/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,Yt,yt.width,yt.height,1,Et,fe)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,yt.width,yt.height,at.depth,Et,yt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,lt,Ot,yt.width,yt.height,at.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?gt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,yt.width,yt.height,at.depth,Et,Gt,yt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,lt,Ot,yt.width,yt.height,at.depth,0,Et,Gt,yt.data)}else{I&&ht&&e.texStorage2D(n.TEXTURE_2D,Ct,Ot,Zt[0].width,Zt[0].height);for(let lt=0,nt=Zt.length;lt<nt;lt++)yt=Zt[lt],v.format!==dn?Et!==null?I?gt&&e.compressedTexSubImage2D(n.TEXTURE_2D,lt,0,0,yt.width,yt.height,Et,yt.data):e.compressedTexImage2D(n.TEXTURE_2D,lt,Ot,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?gt&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,yt.width,yt.height,Et,Gt,yt.data):e.texImage2D(n.TEXTURE_2D,lt,Ot,yt.width,yt.height,0,Et,Gt,yt.data)}else if(v.isDataArrayTexture)if(I){if(ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,Ot,at.width,at.height,at.depth),gt)if(v.layerUpdates.size>0){const lt=Lc(at.width,at.height,v.format,v.type);for(const nt of v.layerUpdates){const It=at.data.subarray(nt*lt/at.data.BYTES_PER_ELEMENT,(nt+1)*lt/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,nt,at.width,at.height,1,Et,Gt,It)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Et,Gt,at.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ot,at.width,at.height,at.depth,0,Et,Gt,at.data);else if(v.isData3DTexture)I?(ht&&e.texStorage3D(n.TEXTURE_3D,Ct,Ot,at.width,at.height,at.depth),gt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Et,Gt,at.data)):e.texImage3D(n.TEXTURE_3D,0,Ot,at.width,at.height,at.depth,0,Et,Gt,at.data);else if(v.isFramebufferTexture){if(ht)if(I)e.texStorage2D(n.TEXTURE_2D,Ct,Ot,at.width,at.height);else{let lt=at.width,nt=at.height;for(let It=0;It<Ct;It++)e.texImage2D(n.TEXTURE_2D,It,Ot,lt,nt,0,Et,Gt,null),lt>>=1,nt>>=1}}else if(Zt.length>0){if(I&&ht){const lt=Xt(Zt[0]);e.texStorage2D(n.TEXTURE_2D,Ct,Ot,lt.width,lt.height)}for(let lt=0,nt=Zt.length;lt<nt;lt++)yt=Zt[lt],I?gt&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,Et,Gt,yt):e.texImage2D(n.TEXTURE_2D,lt,Ot,Et,Gt,yt);v.generateMipmaps=!1}else if(I){if(ht){const lt=Xt(at);e.texStorage2D(n.TEXTURE_2D,Ct,Ot,lt.width,lt.height)}gt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Et,Gt,at)}else e.texImage2D(n.TEXTURE_2D,0,Ot,Et,Gt,at);m(v)&&d(Y),Ut.__version=$.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function K(A,v,B){if(v.image.length!==6)return;const Y=et(A,v),rt=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+B);const $=i.get(rt);if(rt.version!==$.__version||Y===!0){e.activeTexture(n.TEXTURE0+B);const Ut=ee.getPrimaries(ee.workingColorSpace),dt=v.colorSpace===xn?null:ee.getPrimaries(v.colorSpace),Dt=v.colorSpace===xn||Ut===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);const Ft=v.isCompressedTexture||v.image[0].isCompressedTexture,at=v.image[0]&&v.image[0].isDataTexture,Et=[];for(let nt=0;nt<6;nt++)!Ft&&!at?Et[nt]=_(v.image[nt],!0,r.maxCubemapSize):Et[nt]=at?v.image[nt].image:v.image[nt],Et[nt]=qt(v,Et[nt]);const Gt=Et[0],Ot=s.convert(v.format,v.colorSpace),yt=s.convert(v.type),Zt=S(v.internalFormat,Ot,yt,v.colorSpace),I=v.isVideoTexture!==!0,ht=$.__version===void 0||Y===!0,gt=rt.dataReady;let Ct=R(v,Gt);kt(n.TEXTURE_CUBE_MAP,v);let lt;if(Ft){I&&ht&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,Zt,Gt.width,Gt.height);for(let nt=0;nt<6;nt++){lt=Et[nt].mipmaps;for(let It=0;It<lt.length;It++){const Yt=lt[It];v.format!==dn?Ot!==null?I?gt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,It,0,0,Yt.width,Yt.height,Ot,Yt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,It,Zt,Yt.width,Yt.height,0,Yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?gt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,It,0,0,Yt.width,Yt.height,Ot,yt,Yt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,It,Zt,Yt.width,Yt.height,0,Ot,yt,Yt.data)}}}else{if(lt=v.mipmaps,I&&ht){lt.length>0&&Ct++;const nt=Xt(Et[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,Zt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(at){I?gt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Et[nt].width,Et[nt].height,Ot,yt,Et[nt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Zt,Et[nt].width,Et[nt].height,0,Ot,yt,Et[nt].data);for(let It=0;It<lt.length;It++){const fe=lt[It].image[nt].image;I?gt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,It+1,0,0,fe.width,fe.height,Ot,yt,fe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,It+1,Zt,fe.width,fe.height,0,Ot,yt,fe.data)}}else{I?gt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Ot,yt,Et[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Zt,Ot,yt,Et[nt]);for(let It=0;It<lt.length;It++){const Yt=lt[It];I?gt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,It+1,0,0,Ot,yt,Yt.image[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,It+1,Zt,Ot,yt,Yt.image[nt])}}}m(v)&&d(n.TEXTURE_CUBE_MAP),$.__version=rt.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function vt(A,v,B,Y,rt,$){const Ut=s.convert(B.format,B.colorSpace),dt=s.convert(B.type),Dt=S(B.internalFormat,Ut,dt,B.colorSpace),Ft=i.get(v),at=i.get(B);if(at.__renderTarget=v,!Ft.__hasExternalTextures){const Et=Math.max(1,v.width>>$),Gt=Math.max(1,v.height>>$);rt===n.TEXTURE_3D||rt===n.TEXTURE_2D_ARRAY?e.texImage3D(rt,$,Dt,Et,Gt,v.depth,0,Ut,dt,null):e.texImage2D(rt,$,Dt,Et,Gt,0,Ut,dt,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),ot(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,rt,at.__webglTexture,0,pt(v)):(rt===n.TEXTURE_2D||rt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,rt,at.__webglTexture,$),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Lt(A,v,B){if(n.bindRenderbuffer(n.RENDERBUFFER,A),v.depthBuffer){const Y=v.depthTexture,rt=Y&&Y.isDepthTexture?Y.type:null,$=x(v.stencilBuffer,rt),Ut=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=pt(v);ot(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt,$,v.width,v.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,$,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,$,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ut,n.RENDERBUFFER,A)}else{const Y=v.textures;for(let rt=0;rt<Y.length;rt++){const $=Y[rt],Ut=s.convert($.format,$.colorSpace),dt=s.convert($.type),Dt=S($.internalFormat,Ut,dt,$.colorSpace),Ft=pt(v);B&&ot(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ft,Dt,v.width,v.height):ot(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ft,Dt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Dt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Rt(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(v.depthTexture);Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);const rt=Y.__webglTexture,$=pt(v);if(v.depthTexture.format===qr)ot(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,rt,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,rt,0);else if(v.depthTexture.format===Yr)ot(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,rt,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function Kt(A){const v=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const Y=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){const rt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",rt)};Y.addEventListener("dispose",rt),v.__depthDisposeCallback=rt}v.__boundDepthTexture=Y}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const Y=A.texture.mipmaps;Y&&Y.length>0?Rt(v.__webglFramebuffer[0],A):Rt(v.__webglFramebuffer,A)}else if(B){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=n.createRenderbuffer(),Lt(v.__webglDepthbuffer[Y],A,!1);else{const rt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,rt,n.RENDERBUFFER,$)}}else{const Y=A.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Lt(v.__webglDepthbuffer,A,!1);else{const rt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,rt,n.RENDERBUFFER,$)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function j(A,v,B){const Y=i.get(A);v!==void 0&&vt(Y.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Kt(A)}function b(A){const v=A.texture,B=i.get(A),Y=i.get(v);A.addEventListener("dispose",L);const rt=A.textures,$=A.isWebGLCubeRenderTarget===!0,Ut=rt.length>1;if(Ut||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=v.version,o.memory.textures++),$){B.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[dt]=[];for(let Dt=0;Dt<v.mipmaps.length;Dt++)B.__webglFramebuffer[dt][Dt]=n.createFramebuffer()}else B.__webglFramebuffer[dt]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let dt=0;dt<v.mipmaps.length;dt++)B.__webglFramebuffer[dt]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Ut)for(let dt=0,Dt=rt.length;dt<Dt;dt++){const Ft=i.get(rt[dt]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&ot(A)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let dt=0;dt<rt.length;dt++){const Dt=rt[dt];B.__webglColorRenderbuffer[dt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[dt]);const Ft=s.convert(Dt.format,Dt.colorSpace),at=s.convert(Dt.type),Et=S(Dt.internalFormat,Ft,at,Dt.colorSpace,A.isXRRenderTarget===!0),Gt=pt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Gt,Et,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,B.__webglColorRenderbuffer[dt])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Lt(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),kt(n.TEXTURE_CUBE_MAP,v);for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0)for(let Dt=0;Dt<v.mipmaps.length;Dt++)vt(B.__webglFramebuffer[dt][Dt],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Dt);else vt(B.__webglFramebuffer[dt],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(v)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let dt=0,Dt=rt.length;dt<Dt;dt++){const Ft=rt[dt],at=i.get(Ft);let Et=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Et=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Et,at.__webglTexture),kt(Et,Ft),vt(B.__webglFramebuffer,A,Ft,n.COLOR_ATTACHMENT0+dt,Et,0),m(Ft)&&d(Et)}e.unbindTexture()}else{let dt=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(dt=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(dt,Y.__webglTexture),kt(dt,v),v.mipmaps&&v.mipmaps.length>0)for(let Dt=0;Dt<v.mipmaps.length;Dt++)vt(B.__webglFramebuffer[Dt],A,v,n.COLOR_ATTACHMENT0,dt,Dt);else vt(B.__webglFramebuffer,A,v,n.COLOR_ATTACHMENT0,dt,0);m(v)&&d(dt),e.unbindTexture()}A.depthBuffer&&Kt(A)}function q(A){const v=A.textures;for(let B=0,Y=v.length;B<Y;B++){const rt=v[B];if(m(rt)){const $=T(A),Ut=i.get(rt).__webglTexture;e.bindTexture($,Ut),d($),e.unbindTexture()}}}const J=[],Q=[];function tt(A){if(A.samples>0){if(ot(A)===!1){const v=A.textures,B=A.width,Y=A.height;let rt=n.COLOR_BUFFER_BIT;const $=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ut=i.get(A),dt=v.length>1;if(dt)for(let Ft=0;Ft<v.length;Ft++)e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer);const Dt=A.texture.mipmaps;Dt&&Dt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Ft=0;Ft<v.length;Ft++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(rt|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(rt|=n.STENCIL_BUFFER_BIT)),dt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ut.__webglColorRenderbuffer[Ft]);const at=i.get(v[Ft]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,at,0)}n.blitFramebuffer(0,0,B,Y,0,0,B,Y,rt,n.NEAREST),l===!0&&(J.length=0,Q.length=0,J.push(n.COLOR_ATTACHMENT0+Ft),A.depthBuffer&&A.resolveDepthBuffer===!1&&(J.push($),Q.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Q)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,J))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),dt)for(let Ft=0;Ft<v.length;Ft++){e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.RENDERBUFFER,Ut.__webglColorRenderbuffer[Ft]);const at=i.get(v[Ft]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.TEXTURE_2D,at,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const v=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function pt(A){return Math.min(r.maxSamples,A.samples)}function ot(A){const v=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function mt(A){const v=o.render.frame;u.get(A)!==v&&(u.set(A,v),A.update())}function qt(A,v){const B=A.colorSpace,Y=A.format,rt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==ir&&B!==xn&&(ee.getTransfer(B)===le?(Y!==dn||rt!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}function Xt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.setTexture2D=Z,this.setTexture2DArray=H,this.setTexture3D=st,this.setTextureCube=X,this.rebindTextures=j,this.setupRenderTarget=b,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=ot}function D_(n,t){function e(i,r=xn){let s;const o=ee.getTransfer(r);if(i===wn)return n.UNSIGNED_BYTE;if(i===ml)return n.UNSIGNED_SHORT_4_4_4_4;if(i===gl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Eu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Tu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Mu)return n.BYTE;if(i===Su)return n.SHORT;if(i===Wr)return n.UNSIGNED_SHORT;if(i===pl)return n.INT;if(i===Mi)return n.UNSIGNED_INT;if(i===En)return n.FLOAT;if(i===us)return n.HALF_FLOAT;if(i===bu)return n.ALPHA;if(i===Au)return n.RGB;if(i===dn)return n.RGBA;if(i===qr)return n.DEPTH_COMPONENT;if(i===Yr)return n.DEPTH_STENCIL;if(i===So)return n.RED;if(i===_l)return n.RED_INTEGER;if(i===wu)return n.RG;if(i===vl)return n.RG_INTEGER;if(i===xl)return n.RGBA_INTEGER;if(i===js||i===Qs||i===to||i===eo)if(o===le)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===js)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===to)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===js)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===to)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===eo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ra||i===Ca||i===Pa||i===La)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ra)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ca)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===La)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Da||i===Fa||i===Ia)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Da||i===Fa)return o===le?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ia)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ua||i===Na||i===Oa||i===Ba||i===za||i===ka||i===Ha||i===Va||i===Ga||i===Wa||i===Xa||i===qa||i===Ya||i===Za)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ua)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Na)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Oa)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ba)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===za)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ka)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ha)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Va)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ga)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wa)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xa)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qa)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ya)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Za)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ja||i===$a||i===Ka)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Ja)return o===le?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$a)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ka)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ja||i===Qa||i===tl||i===el)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===ja)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Qa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===tl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===el)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const F_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class U_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Wu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ti({vertexShader:F_,fragmentShader:I_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ne(new _r(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class N_ extends dr{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new U_,d={},T=e.getContextAttributes();let S=null,x=null;const R=[],C=[],L=new ft;let F=null;const M=new We;M.viewport=new ue;const y=new We;y.viewport=new ue;const P=[M,y],N=new np;let z=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let K=R[G];return K===void 0&&(K=new Ko,R[G]=K),K.getTargetRaySpace()},this.getControllerGrip=function(G){let K=R[G];return K===void 0&&(K=new Ko,R[G]=K),K.getGripSpace()},this.getHand=function(G){let K=R[G];return K===void 0&&(K=new Ko,R[G]=K),K.getHandSpace()};function Z(G){const K=C.indexOf(G.inputSource);if(K===-1)return;const vt=R[K];vt!==void 0&&(vt.update(G.inputSource,G.frame,c||o),vt.dispatchEvent({type:G.type,data:G.inputSource}))}function H(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",st);for(let G=0;G<R.length;G++){const K=C[G];K!==null&&(C[G]=null,R[G].disconnect(K))}z=null,k=null,m.reset();for(const G in d)delete d[G];t.setRenderTarget(S),p=null,f=null,h=null,r=null,x=null,St.stop(),i.isPresenting=!1,t.setPixelRatio(F),t.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(r,e)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(S=t.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",H),r.addEventListener("inputsourceschange",st),T.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(L),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Lt=null,Rt=null;T.depth&&(Rt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=T.stencil?Yr:qr,Lt=T.stencil?Xr:Mi);const Kt={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Kt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new Si(f.textureWidth,f.textureHeight,{format:dn,type:wn,depthTexture:new Gu(f.textureWidth,f.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const vt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,vt),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Si(p.framebufferWidth,p.framebufferHeight,{format:dn,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),St.setContext(r),St.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function st(G){for(let K=0;K<G.removed.length;K++){const vt=G.removed[K],Lt=C.indexOf(vt);Lt>=0&&(C[Lt]=null,R[Lt].disconnect(vt))}for(let K=0;K<G.added.length;K++){const vt=G.added[K];let Lt=C.indexOf(vt);if(Lt===-1){for(let Kt=0;Kt<R.length;Kt++)if(Kt>=C.length){C.push(vt),Lt=Kt;break}else if(C[Kt]===null){C[Kt]=vt,Lt=Kt;break}if(Lt===-1)break}const Rt=R[Lt];Rt&&Rt.connect(vt)}}const X=new w,ct=new w;function _t(G,K,vt){X.setFromMatrixPosition(K.matrixWorld),ct.setFromMatrixPosition(vt.matrixWorld);const Lt=X.distanceTo(ct),Rt=K.projectionMatrix.elements,Kt=vt.projectionMatrix.elements,j=Rt[14]/(Rt[10]-1),b=Rt[14]/(Rt[10]+1),q=(Rt[9]+1)/Rt[5],J=(Rt[9]-1)/Rt[5],Q=(Rt[8]-1)/Rt[0],tt=(Kt[8]+1)/Kt[0],pt=j*Q,ot=j*tt,mt=Lt/(-Q+tt),qt=mt*-Q;if(K.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(qt),G.translateZ(mt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Rt[10]===-1)G.projectionMatrix.copy(K.projectionMatrix),G.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Xt=j+mt,A=b+mt,v=pt-qt,B=ot+(Lt-qt),Y=q*b/A*Xt,rt=J*b/A*Xt;G.projectionMatrix.makePerspective(v,B,Y,rt,Xt,A),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function Tt(G,K){K===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(K.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let K=G.near,vt=G.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),N.near=y.near=M.near=K,N.far=y.far=M.far=vt,(z!==N.near||k!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),z=N.near,k=N.far),N.layers.mask=G.layers.mask|6,M.layers.mask=N.layers.mask&3,y.layers.mask=N.layers.mask&5;const Lt=G.parent,Rt=N.cameras;Tt(N,Lt);for(let Kt=0;Kt<Rt.length;Kt++)Tt(Rt[Kt],Lt);Rt.length===2?_t(N,M,y):N.projectionMatrix.copy(M.projectionMatrix),kt(G,N,Lt)};function kt(G,K,vt){vt===null?G.matrix.copy(K.matrixWorld):(G.matrix.copy(vt.matrixWorld),G.matrix.invert(),G.matrix.multiply(K.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(K.projectionMatrix),G.projectionMatrixInverse.copy(K.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=rr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(G){return d[G]};let et=null;function At(G,K){if(u=K.getViewerPose(c||o),g=K,u!==null){const vt=u.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let Lt=!1;vt.length!==N.cameras.length&&(N.cameras.length=0,Lt=!0);for(let b=0;b<vt.length;b++){const q=vt[b];let J=null;if(p!==null)J=p.getViewport(q);else{const tt=h.getViewSubImage(f,q);J=tt.viewport,b===0&&(t.setRenderTargetTextures(x,tt.colorTexture,tt.depthStencilTexture),t.setRenderTarget(x))}let Q=P[b];Q===void 0&&(Q=new We,Q.layers.enable(b),Q.viewport=new ue,P[b]=Q),Q.matrix.fromArray(q.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(q.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(J.x,J.y,J.width,J.height),b===0&&(N.matrix.copy(Q.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Lt===!0&&N.cameras.push(Q)}const Rt=r.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){h=i.getBinding();const b=h.getDepthInformation(vt[0]);b&&b.isValid&&b.texture&&m.init(b,r.renderState)}if(Rt&&Rt.includes("camera-access")&&_){t.state.unbindTexture(),h=i.getBinding();for(let b=0;b<vt.length;b++){const q=vt[b].camera;if(q){let J=d[q];J||(J=new Wu,d[q]=J);const Q=h.getCameraImage(q);J.sourceTexture=Q}}}}for(let vt=0;vt<R.length;vt++){const Lt=C[vt],Rt=R[vt];Lt!==null&&Rt!==void 0&&Rt.update(Lt,K,c||o)}et&&et(G,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}const St=new nh;St.setAnimationLoop(At),this.setAnimationLoop=function(G){et=G},this.dispose=function(){}}}const hi=new Wn,O_=new re;function B_(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Uu(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,T,S,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,T,S):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Xe&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Xe&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const T=t.get(d),S=T.envMap,x=T.envMapRotation;S&&(m.envMap.value=S,hi.copy(x),hi.x*=-1,hi.y*=-1,hi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),m.envMapRotation.value.setFromMatrix4(O_.makeRotationFromEuler(hi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,T,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*T,m.scale.value=S*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,T){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Xe&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const T=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function z_(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,S){const x=S.program;i.uniformBlockBinding(T,x)}function c(T,S){let x=r[T.id];x===void 0&&(g(T),x=u(T),r[T.id]=x,T.addEventListener("dispose",m));const R=S.program;i.updateUBOMapping(T,R);const C=t.render.frame;s[T.id]!==C&&(f(T),s[T.id]=C)}function u(T){const S=h();T.__bindingPointIndex=S;const x=n.createBuffer(),R=T.__size,C=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,R,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,x),x}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const S=r[T.id],x=T.uniforms,R=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let C=0,L=x.length;C<L;C++){const F=Array.isArray(x[C])?x[C]:[x[C]];for(let M=0,y=F.length;M<y;M++){const P=F[M];if(p(P,C,M,R)===!0){const N=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let k=0;for(let Z=0;Z<z.length;Z++){const H=z[Z],st=_(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,N+k,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,k),k+=st.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(T,S,x,R){const C=T.value,L=S+"_"+x;if(R[L]===void 0)return typeof C=="number"||typeof C=="boolean"?R[L]=C:R[L]=C.clone(),!0;{const F=R[L];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return R[L]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function g(T){const S=T.uniforms;let x=0;const R=16;for(let L=0,F=S.length;L<F;L++){const M=Array.isArray(S[L])?S[L]:[S[L]];for(let y=0,P=M.length;y<P;y++){const N=M[y],z=Array.isArray(N.value)?N.value:[N.value];for(let k=0,Z=z.length;k<Z;k++){const H=z[k],st=_(H),X=x%R,ct=X%st.boundary,_t=X+ct;x+=ct,_t!==0&&R-_t<st.storage&&(x+=R-_t),N.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=st.storage}}}const C=x%R;return C>0&&(x+=R-C),T.__size=x,T.__cache={},this}function _(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function m(T){const S=T.target;S.removeEventListener("dispose",m);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function d(){for(const T in r)n.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class k_{constructor(t={}){const{canvas:e=Uf(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const T=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let R=!1;this._outputColorSpace=$e;let C=0,L=0,F=null,M=-1,y=null;const P=new ue,N=new ue;let z=null;const k=new Vt(0);let Z=0,H=e.width,st=e.height,X=1,ct=null,_t=null;const Tt=new ue(0,0,H,st),kt=new ue(0,0,H,st);let et=!1;const At=new Tl;let St=!1,G=!1;const K=new re,vt=new w,Lt=new ue,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Kt=!1;function j(){return F===null?X:1}let b=i;function q(E,U){return e.getContext(E,U)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fl}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",Ct,!1),e.addEventListener("webglcontextcreationerror",lt,!1),b===null){const U="webgl2";if(b=q(U,E),b===null)throw q(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let J,Q,tt,pt,ot,mt,qt,Xt,A,v,B,Y,rt,$,Ut,dt,Dt,Ft,at,Et,Gt,Ot,yt,Zt;function I(){J=new $0(b),J.init(),Ot=new D_(b,J),Q=new G0(b,J,t,Ot),tt=new P_(b,J),Q.reversedDepthBuffer&&f&&tt.buffers.depth.setReversed(!0),pt=new Q0(b),ot=new __,mt=new L_(b,J,tt,ot,Q,Ot,pt),qt=new X0(x),Xt=new J0(x),A=new sp(b),yt=new H0(b,A),v=new K0(b,A,pt,yt),B=new eg(b,v,A,pt),at=new tg(b,Q,mt),dt=new W0(ot),Y=new g_(x,qt,Xt,J,Q,yt,dt),rt=new B_(x,ot),$=new x_,Ut=new b_(J),Ft=new k0(x,qt,Xt,tt,B,p,l),Dt=new R_(x,B,Q),Zt=new z_(b,pt,Q,tt),Et=new V0(b,J,pt),Gt=new j0(b,J,pt),pt.programs=Y.programs,x.capabilities=Q,x.extensions=J,x.properties=ot,x.renderLists=$,x.shadowMap=Dt,x.state=tt,x.info=pt}I();const ht=new N_(x,b);this.xr=ht,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const E=J.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=J.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(H,st,!1))},this.getSize=function(E){return E.set(H,st)},this.setSize=function(E,U,V=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,st=U,e.width=Math.floor(E*X),e.height=Math.floor(U*X),V===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(H*X,st*X).floor()},this.setDrawingBufferSize=function(E,U,V){H=E,st=U,X=V,e.width=Math.floor(E*V),e.height=Math.floor(U*V),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(Tt)},this.setViewport=function(E,U,V,W){E.isVector4?Tt.set(E.x,E.y,E.z,E.w):Tt.set(E,U,V,W),tt.viewport(P.copy(Tt).multiplyScalar(X).round())},this.getScissor=function(E){return E.copy(kt)},this.setScissor=function(E,U,V,W){E.isVector4?kt.set(E.x,E.y,E.z,E.w):kt.set(E,U,V,W),tt.scissor(N.copy(kt).multiplyScalar(X).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(E){tt.setScissorTest(et=E)},this.setOpaqueSort=function(E){ct=E},this.setTransparentSort=function(E){_t=E},this.getClearColor=function(E){return E.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor(...arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,V=!0){let W=0;if(E){let O=!1;if(F!==null){const ut=F.texture.format;O=ut===xl||ut===vl||ut===_l}if(O){const ut=F.texture.type,Mt=ut===wn||ut===Mi||ut===Wr||ut===Xr||ut===ml||ut===gl,Pt=Ft.getClearColor(),wt=Ft.getClearAlpha(),Ht=Pt.r,Wt=Pt.g,Bt=Pt.b;Mt?(g[0]=Ht,g[1]=Wt,g[2]=Bt,g[3]=wt,b.clearBufferuiv(b.COLOR,0,g)):(_[0]=Ht,_[1]=Wt,_[2]=Bt,_[3]=wt,b.clearBufferiv(b.COLOR,0,_))}else W|=b.COLOR_BUFFER_BIT}U&&(W|=b.DEPTH_BUFFER_BIT),V&&(W|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",Ct,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),Ft.dispose(),$.dispose(),Ut.dispose(),ot.dispose(),qt.dispose(),Xt.dispose(),B.dispose(),yt.dispose(),Zt.dispose(),Y.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",_n),ht.removeEventListener("sessionend",Ol),ri.stop()};function gt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const E=pt.autoReset,U=Dt.enabled,V=Dt.autoUpdate,W=Dt.needsUpdate,O=Dt.type;I(),pt.autoReset=E,Dt.enabled=U,Dt.autoUpdate=V,Dt.needsUpdate=W,Dt.type=O}function lt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function nt(E){const U=E.target;U.removeEventListener("dispose",nt),It(U)}function It(E){Yt(E),ot.remove(E)}function Yt(E){const U=ot.get(E).programs;U!==void 0&&(U.forEach(function(V){Y.releaseProgram(V)}),E.isShaderMaterial&&Y.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,V,W,O,ut){U===null&&(U=Rt);const Mt=O.isMesh&&O.matrixWorld.determinant()<0,Pt=Eh(E,U,V,W,O);tt.setMaterial(W,Mt);let wt=V.index,Ht=1;if(W.wireframe===!0){if(wt=v.getWireframeAttribute(V),wt===void 0)return;Ht=2}const Wt=V.drawRange,Bt=V.attributes.position;let Qt=Wt.start*Ht,ae=(Wt.start+Wt.count)*Ht;ut!==null&&(Qt=Math.max(Qt,ut.start*Ht),ae=Math.min(ae,(ut.start+ut.count)*Ht)),wt!==null?(Qt=Math.max(Qt,0),ae=Math.min(ae,wt.count)):Bt!=null&&(Qt=Math.max(Qt,0),ae=Math.min(ae,Bt.count));const _e=ae-Qt;if(_e<0||_e===1/0)return;yt.setup(O,W,Pt,V,wt);let de,he=Et;if(wt!==null&&(de=A.get(wt),he=Gt,he.setIndex(de)),O.isMesh)W.wireframe===!0?(tt.setLineWidth(W.wireframeLinewidth*j()),he.setMode(b.LINES)):he.setMode(b.TRIANGLES);else if(O.isLine){let zt=W.linewidth;zt===void 0&&(zt=1),tt.setLineWidth(zt*j()),O.isLineSegments?he.setMode(b.LINES):O.isLineLoop?he.setMode(b.LINE_LOOP):he.setMode(b.LINE_STRIP)}else O.isPoints?he.setMode(b.POINTS):O.isSprite&&he.setMode(b.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Zr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),he.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))he.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const zt=O._multiDrawStarts,pe=O._multiDrawCounts,te=O._multiDrawCount,qe=wt?A.get(wt).bytesPerElement:1,wi=ot.get(W).currentProgram.getUniforms();for(let Ye=0;Ye<te;Ye++)wi.setValue(b,"_gl_DrawID",Ye),he.render(zt[Ye]/qe,pe[Ye])}else if(O.isInstancedMesh)he.renderInstances(Qt,_e,O.count);else if(V.isInstancedBufferGeometry){const zt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,pe=Math.min(V.instanceCount,zt);he.renderInstances(Qt,_e,pe)}else he.render(Qt,_e)};function fe(E,U,V){E.transparent===!0&&E.side===Ke&&E.forceSinglePass===!1?(E.side=Xe,E.needsUpdate=!0,xs(E,U,V),E.side=An,E.needsUpdate=!0,xs(E,U,V),E.side=Ke):xs(E,U,V)}this.compile=function(E,U,V=null){V===null&&(V=E),d=Ut.get(V),d.init(U),S.push(d),V.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),E!==V&&E.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights();const W=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ut=O.material;if(ut)if(Array.isArray(ut))for(let Mt=0;Mt<ut.length;Mt++){const Pt=ut[Mt];fe(Pt,V,O),W.add(Pt)}else fe(ut,V,O),W.add(ut)}),d=S.pop(),W},this.compileAsync=function(E,U,V=null){const W=this.compile(E,U,V);return new Promise(O=>{function ut(){if(W.forEach(function(Mt){ot.get(Mt).currentProgram.isReady()&&W.delete(Mt)}),W.size===0){O(E);return}setTimeout(ut,10)}J.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let se=null;function Pn(E){se&&se(E)}function _n(){ri.stop()}function Ol(){ri.start()}const ri=new nh;ri.setAnimationLoop(Pn),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(E){se=E,ht.setAnimationLoop(E),E===null?ri.stop():ri.start()},ht.addEventListener("sessionstart",_n),ht.addEventListener("sessionend",Ol),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(U),U=ht.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,U,F),d=Ut.get(E,S.length),d.init(U),S.push(d),K.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),At.setFromProjectionMatrix(K,Tn,U.reversedDepth),G=this.localClippingEnabled,St=dt.init(this.clippingPlanes,G),m=$.get(E,T.length),m.init(),T.push(m),ht.enabled===!0&&ht.isPresenting===!0){const ut=x.xr.getDepthSensingMesh();ut!==null&&Ro(ut,U,-1/0,x.sortObjects)}Ro(E,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ct,_t),Kt=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,Kt&&Ft.addToRenderList(m,E),this.info.render.frame++,St===!0&&dt.beginShadows();const V=d.state.shadowsArray;Dt.render(V,E,U),St===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,O=m.transmissive;if(d.setupLights(),U.isArrayCamera){const ut=U.cameras;if(O.length>0)for(let Mt=0,Pt=ut.length;Mt<Pt;Mt++){const wt=ut[Mt];zl(W,O,E,wt)}Kt&&Ft.render(E);for(let Mt=0,Pt=ut.length;Mt<Pt;Mt++){const wt=ut[Mt];Bl(m,E,wt,wt.viewport)}}else O.length>0&&zl(W,O,E,U),Kt&&Ft.render(E),Bl(m,E,U);F!==null&&L===0&&(mt.updateMultisampleRenderTarget(F),mt.updateRenderTargetMipmap(F)),E.isScene===!0&&E.onAfterRender(x,E,U),yt.resetDefaultState(),M=-1,y=null,S.pop(),S.length>0?(d=S[S.length-1],St===!0&&dt.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Ro(E,U,V,W){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||At.intersectsSprite(E)){W&&Lt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(K);const Mt=B.update(E),Pt=E.material;Pt.visible&&m.push(E,Mt,Pt,V,Lt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||At.intersectsObject(E))){const Mt=B.update(E),Pt=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Lt.copy(E.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Lt.copy(Mt.boundingSphere.center)),Lt.applyMatrix4(E.matrixWorld).applyMatrix4(K)),Array.isArray(Pt)){const wt=Mt.groups;for(let Ht=0,Wt=wt.length;Ht<Wt;Ht++){const Bt=wt[Ht],Qt=Pt[Bt.materialIndex];Qt&&Qt.visible&&m.push(E,Mt,Qt,V,Lt.z,Bt)}}else Pt.visible&&m.push(E,Mt,Pt,V,Lt.z,null)}}const ut=E.children;for(let Mt=0,Pt=ut.length;Mt<Pt;Mt++)Ro(ut[Mt],U,V,W)}function Bl(E,U,V,W){const O=E.opaque,ut=E.transmissive,Mt=E.transparent;d.setupLightsView(V),St===!0&&dt.setGlobalState(x.clippingPlanes,V),W&&tt.viewport(P.copy(W)),O.length>0&&vs(O,U,V),ut.length>0&&vs(ut,U,V),Mt.length>0&&vs(Mt,U,V),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function zl(E,U,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[W.id]===void 0&&(d.state.transmissionRenderTarget[W.id]=new Si(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?us:wn,minFilter:xi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const ut=d.state.transmissionRenderTarget[W.id],Mt=W.viewport||P;ut.setSize(Mt.z*x.transmissionResolutionScale,Mt.w*x.transmissionResolutionScale);const Pt=x.getRenderTarget(),wt=x.getActiveCubeFace(),Ht=x.getActiveMipmapLevel();x.setRenderTarget(ut),x.getClearColor(k),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),x.clear(),Kt&&Ft.render(V);const Wt=x.toneMapping;x.toneMapping=kn;const Bt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),d.setupLightsView(W),St===!0&&dt.setGlobalState(x.clippingPlanes,W),vs(E,V,W),mt.updateMultisampleRenderTarget(ut),mt.updateRenderTargetMipmap(ut),J.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let ae=0,_e=U.length;ae<_e;ae++){const de=U[ae],he=de.object,zt=de.geometry,pe=de.material,te=de.group;if(pe.side===Ke&&he.layers.test(W.layers)){const qe=pe.side;pe.side=Xe,pe.needsUpdate=!0,kl(he,V,W,zt,pe,te),pe.side=qe,pe.needsUpdate=!0,Qt=!0}}Qt===!0&&(mt.updateMultisampleRenderTarget(ut),mt.updateRenderTargetMipmap(ut))}x.setRenderTarget(Pt,wt,Ht),x.setClearColor(k,Z),Bt!==void 0&&(W.viewport=Bt),x.toneMapping=Wt}function vs(E,U,V){const W=U.isScene===!0?U.overrideMaterial:null;for(let O=0,ut=E.length;O<ut;O++){const Mt=E[O],Pt=Mt.object,wt=Mt.geometry,Ht=Mt.group;let Wt=Mt.material;Wt.allowOverride===!0&&W!==null&&(Wt=W),Pt.layers.test(V.layers)&&kl(Pt,U,V,wt,Wt,Ht)}}function kl(E,U,V,W,O,ut){E.onBeforeRender(x,U,V,W,O,ut),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(x,U,V,W,E,ut),O.transparent===!0&&O.side===Ke&&O.forceSinglePass===!1?(O.side=Xe,O.needsUpdate=!0,x.renderBufferDirect(V,U,W,O,E,ut),O.side=An,O.needsUpdate=!0,x.renderBufferDirect(V,U,W,O,E,ut),O.side=Ke):x.renderBufferDirect(V,U,W,O,E,ut),E.onAfterRender(x,U,V,W,O,ut)}function xs(E,U,V){U.isScene!==!0&&(U=Rt);const W=ot.get(E),O=d.state.lights,ut=d.state.shadowsArray,Mt=O.state.version,Pt=Y.getParameters(E,O.state,ut,U,V),wt=Y.getProgramCacheKey(Pt);let Ht=W.programs;W.environment=E.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(E.isMeshStandardMaterial?Xt:qt).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ht===void 0&&(E.addEventListener("dispose",nt),Ht=new Map,W.programs=Ht);let Wt=Ht.get(wt);if(Wt!==void 0){if(W.currentProgram===Wt&&W.lightsStateVersion===Mt)return Vl(E,Pt),Wt}else Pt.uniforms=Y.getUniforms(E),E.onBeforeCompile(Pt,x),Wt=Y.acquireProgram(Pt,wt),Ht.set(wt,Wt),W.uniforms=Pt.uniforms;const Bt=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Bt.clippingPlanes=dt.uniform),Vl(E,Pt),W.needsLights=bh(E),W.lightsStateVersion=Mt,W.needsLights&&(Bt.ambientLightColor.value=O.state.ambient,Bt.lightProbe.value=O.state.probe,Bt.directionalLights.value=O.state.directional,Bt.directionalLightShadows.value=O.state.directionalShadow,Bt.spotLights.value=O.state.spot,Bt.spotLightShadows.value=O.state.spotShadow,Bt.rectAreaLights.value=O.state.rectArea,Bt.ltc_1.value=O.state.rectAreaLTC1,Bt.ltc_2.value=O.state.rectAreaLTC2,Bt.pointLights.value=O.state.point,Bt.pointLightShadows.value=O.state.pointShadow,Bt.hemisphereLights.value=O.state.hemi,Bt.directionalShadowMap.value=O.state.directionalShadowMap,Bt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Bt.spotShadowMap.value=O.state.spotShadowMap,Bt.spotLightMatrix.value=O.state.spotLightMatrix,Bt.spotLightMap.value=O.state.spotLightMap,Bt.pointShadowMap.value=O.state.pointShadowMap,Bt.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Wt,W.uniformsList=null,Wt}function Hl(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=no.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Vl(E,U){const V=ot.get(E);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function Eh(E,U,V,W,O){U.isScene!==!0&&(U=Rt),mt.resetTextureUnits();const ut=U.fog,Mt=W.isMeshStandardMaterial?U.environment:null,Pt=F===null?x.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ir,wt=(W.isMeshStandardMaterial?Xt:qt).get(W.envMap||Mt),Ht=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Wt=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Bt=!!V.morphAttributes.position,Qt=!!V.morphAttributes.normal,ae=!!V.morphAttributes.color;let _e=kn;W.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(_e=x.toneMapping);const de=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,he=de!==void 0?de.length:0,zt=ot.get(W),pe=d.state.lights;if(St===!0&&(G===!0||E!==y)){const Oe=E===y&&W.id===M;dt.setState(W,E,Oe)}let te=!1;W.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==pe.state.version||zt.outputColorSpace!==Pt||O.isBatchedMesh&&zt.batching===!1||!O.isBatchedMesh&&zt.batching===!0||O.isBatchedMesh&&zt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&zt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&zt.instancing===!1||!O.isInstancedMesh&&zt.instancing===!0||O.isSkinnedMesh&&zt.skinning===!1||!O.isSkinnedMesh&&zt.skinning===!0||O.isInstancedMesh&&zt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&zt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&zt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&zt.instancingMorph===!1&&O.morphTexture!==null||zt.envMap!==wt||W.fog===!0&&zt.fog!==ut||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==dt.numPlanes||zt.numIntersection!==dt.numIntersection)||zt.vertexAlphas!==Ht||zt.vertexTangents!==Wt||zt.morphTargets!==Bt||zt.morphNormals!==Qt||zt.morphColors!==ae||zt.toneMapping!==_e||zt.morphTargetsCount!==he)&&(te=!0):(te=!0,zt.__version=W.version);let qe=zt.currentProgram;te===!0&&(qe=xs(W,U,O));let wi=!1,Ye=!1,yr=!1;const me=qe.getUniforms(),Qe=zt.uniforms;if(tt.useProgram(qe.program)&&(wi=!0,Ye=!0,yr=!0),W.id!==M&&(M=W.id,Ye=!0),wi||y!==E){tt.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),me.setValue(b,"projectionMatrix",E.projectionMatrix),me.setValue(b,"viewMatrix",E.matrixWorldInverse);const Ve=me.map.cameraPosition;Ve!==void 0&&Ve.setValue(b,vt.setFromMatrixPosition(E.matrixWorld)),Q.logarithmicDepthBuffer&&me.setValue(b,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&me.setValue(b,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,Ye=!0,yr=!0)}if(O.isSkinnedMesh){me.setOptional(b,O,"bindMatrix"),me.setOptional(b,O,"bindMatrixInverse");const Oe=O.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),me.setValue(b,"boneTexture",Oe.boneTexture,mt))}O.isBatchedMesh&&(me.setOptional(b,O,"batchingTexture"),me.setValue(b,"batchingTexture",O._matricesTexture,mt),me.setOptional(b,O,"batchingIdTexture"),me.setValue(b,"batchingIdTexture",O._indirectTexture,mt),me.setOptional(b,O,"batchingColorTexture"),O._colorsTexture!==null&&me.setValue(b,"batchingColorTexture",O._colorsTexture,mt));const tn=V.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&at.update(O,V,qe),(Ye||zt.receiveShadow!==O.receiveShadow)&&(zt.receiveShadow=O.receiveShadow,me.setValue(b,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Qe.envMap.value=wt,Qe.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(Qe.envMapIntensity.value=U.environmentIntensity),Ye&&(me.setValue(b,"toneMappingExposure",x.toneMappingExposure),zt.needsLights&&Th(Qe,yr),ut&&W.fog===!0&&rt.refreshFogUniforms(Qe,ut),rt.refreshMaterialUniforms(Qe,W,X,st,d.state.transmissionRenderTarget[E.id]),no.upload(b,Hl(zt),Qe,mt)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(no.upload(b,Hl(zt),Qe,mt),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&me.setValue(b,"center",O.center),me.setValue(b,"modelViewMatrix",O.modelViewMatrix),me.setValue(b,"normalMatrix",O.normalMatrix),me.setValue(b,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Oe=W.uniformsGroups;for(let Ve=0,Co=Oe.length;Ve<Co;Ve++){const si=Oe[Ve];Zt.update(si,qe),Zt.bind(si,qe)}}return qe}function Th(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function bh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(E,U,V){const W=ot.get(E);W.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),ot.get(E.texture).__webglTexture=U,ot.get(E.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:V,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){const V=ot.get(E);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0};const Ah=b.createFramebuffer();this.setRenderTarget=function(E,U=0,V=0){F=E,C=U,L=V;let W=!0,O=null,ut=!1,Mt=!1;if(E){const wt=ot.get(E);if(wt.__useDefaultFramebuffer!==void 0)tt.bindFramebuffer(b.FRAMEBUFFER,null),W=!1;else if(wt.__webglFramebuffer===void 0)mt.setupRenderTarget(E);else if(wt.__hasExternalTextures)mt.rebindTextures(E,ot.get(E.texture).__webglTexture,ot.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Bt=E.depthTexture;if(wt.__boundDepthTexture!==Bt){if(Bt!==null&&ot.has(Bt)&&(E.width!==Bt.image.width||E.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");mt.setupDepthRenderbuffer(E)}}const Ht=E.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Mt=!0);const Wt=ot.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Wt[U])?O=Wt[U][V]:O=Wt[U],ut=!0):E.samples>0&&mt.useMultisampledRTT(E)===!1?O=ot.get(E).__webglMultisampledFramebuffer:Array.isArray(Wt)?O=Wt[V]:O=Wt,P.copy(E.viewport),N.copy(E.scissor),z=E.scissorTest}else P.copy(Tt).multiplyScalar(X).floor(),N.copy(kt).multiplyScalar(X).floor(),z=et;if(V!==0&&(O=Ah),tt.bindFramebuffer(b.FRAMEBUFFER,O)&&W&&tt.drawBuffers(E,O),tt.viewport(P),tt.scissor(N),tt.setScissorTest(z),ut){const wt=ot.get(E.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+U,wt.__webglTexture,V)}else if(Mt){const wt=U;for(let Ht=0;Ht<E.textures.length;Ht++){const Wt=ot.get(E.textures[Ht]);b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0+Ht,Wt.__webglTexture,V,wt)}}else if(E!==null&&V!==0){const wt=ot.get(E.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,wt.__webglTexture,V)}M=-1},this.readRenderTargetPixels=function(E,U,V,W,O,ut,Mt,Pt=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=ot.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Mt!==void 0&&(wt=wt[Mt]),wt){tt.bindFramebuffer(b.FRAMEBUFFER,wt);try{const Ht=E.textures[Pt],Wt=Ht.format,Bt=Ht.type;if(!Q.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-W&&V>=0&&V<=E.height-O&&(E.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Pt),b.readPixels(U,V,W,O,Ot.convert(Wt),Ot.convert(Bt),ut))}finally{const Ht=F!==null?ot.get(F).__webglFramebuffer:null;tt.bindFramebuffer(b.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(E,U,V,W,O,ut,Mt,Pt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=ot.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Mt!==void 0&&(wt=wt[Mt]),wt)if(U>=0&&U<=E.width-W&&V>=0&&V<=E.height-O){tt.bindFramebuffer(b.FRAMEBUFFER,wt);const Ht=E.textures[Pt],Wt=Ht.format,Bt=Ht.type;if(!Q.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qt=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Qt),b.bufferData(b.PIXEL_PACK_BUFFER,ut.byteLength,b.STREAM_READ),E.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Pt),b.readPixels(U,V,W,O,Ot.convert(Wt),Ot.convert(Bt),0);const ae=F!==null?ot.get(F).__webglFramebuffer:null;tt.bindFramebuffer(b.FRAMEBUFFER,ae);const _e=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await Nf(b,_e,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Qt),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,ut),b.deleteBuffer(Qt),b.deleteSync(_e),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,V=0){const W=Math.pow(2,-V),O=Math.floor(E.image.width*W),ut=Math.floor(E.image.height*W),Mt=U!==null?U.x:0,Pt=U!==null?U.y:0;mt.setTexture2D(E,0),b.copyTexSubImage2D(b.TEXTURE_2D,V,0,0,Mt,Pt,O,ut),tt.unbindTexture()};const wh=b.createFramebuffer(),Rh=b.createFramebuffer();this.copyTextureToTexture=function(E,U,V=null,W=null,O=0,ut=null){ut===null&&(O!==0?(Zr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ut=O,O=0):ut=0);let Mt,Pt,wt,Ht,Wt,Bt,Qt,ae,_e;const de=E.isCompressedTexture?E.mipmaps[ut]:E.image;if(V!==null)Mt=V.max.x-V.min.x,Pt=V.max.y-V.min.y,wt=V.isBox3?V.max.z-V.min.z:1,Ht=V.min.x,Wt=V.min.y,Bt=V.isBox3?V.min.z:0;else{const tn=Math.pow(2,-O);Mt=Math.floor(de.width*tn),Pt=Math.floor(de.height*tn),E.isDataArrayTexture?wt=de.depth:E.isData3DTexture?wt=Math.floor(de.depth*tn):wt=1,Ht=0,Wt=0,Bt=0}W!==null?(Qt=W.x,ae=W.y,_e=W.z):(Qt=0,ae=0,_e=0);const he=Ot.convert(U.format),zt=Ot.convert(U.type);let pe;U.isData3DTexture?(mt.setTexture3D(U,0),pe=b.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(mt.setTexture2DArray(U,0),pe=b.TEXTURE_2D_ARRAY):(mt.setTexture2D(U,0),pe=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,U.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,U.unpackAlignment);const te=b.getParameter(b.UNPACK_ROW_LENGTH),qe=b.getParameter(b.UNPACK_IMAGE_HEIGHT),wi=b.getParameter(b.UNPACK_SKIP_PIXELS),Ye=b.getParameter(b.UNPACK_SKIP_ROWS),yr=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,de.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,de.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ht),b.pixelStorei(b.UNPACK_SKIP_ROWS,Wt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Bt);const me=E.isDataArrayTexture||E.isData3DTexture,Qe=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const tn=ot.get(E),Oe=ot.get(U),Ve=ot.get(tn.__renderTarget),Co=ot.get(Oe.__renderTarget);tt.bindFramebuffer(b.READ_FRAMEBUFFER,Ve.__webglFramebuffer),tt.bindFramebuffer(b.DRAW_FRAMEBUFFER,Co.__webglFramebuffer);for(let si=0;si<wt;si++)me&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,ot.get(E).__webglTexture,O,Bt+si),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,ot.get(U).__webglTexture,ut,_e+si)),b.blitFramebuffer(Ht,Wt,Mt,Pt,Qt,ae,Mt,Pt,b.DEPTH_BUFFER_BIT,b.NEAREST);tt.bindFramebuffer(b.READ_FRAMEBUFFER,null),tt.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(O!==0||E.isRenderTargetTexture||ot.has(E)){const tn=ot.get(E),Oe=ot.get(U);tt.bindFramebuffer(b.READ_FRAMEBUFFER,wh),tt.bindFramebuffer(b.DRAW_FRAMEBUFFER,Rh);for(let Ve=0;Ve<wt;Ve++)me?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,tn.__webglTexture,O,Bt+Ve):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,tn.__webglTexture,O),Qe?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Oe.__webglTexture,ut,_e+Ve):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Oe.__webglTexture,ut),O!==0?b.blitFramebuffer(Ht,Wt,Mt,Pt,Qt,ae,Mt,Pt,b.COLOR_BUFFER_BIT,b.NEAREST):Qe?b.copyTexSubImage3D(pe,ut,Qt,ae,_e+Ve,Ht,Wt,Mt,Pt):b.copyTexSubImage2D(pe,ut,Qt,ae,Ht,Wt,Mt,Pt);tt.bindFramebuffer(b.READ_FRAMEBUFFER,null),tt.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else Qe?E.isDataTexture||E.isData3DTexture?b.texSubImage3D(pe,ut,Qt,ae,_e,Mt,Pt,wt,he,zt,de.data):U.isCompressedArrayTexture?b.compressedTexSubImage3D(pe,ut,Qt,ae,_e,Mt,Pt,wt,he,de.data):b.texSubImage3D(pe,ut,Qt,ae,_e,Mt,Pt,wt,he,zt,de):E.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,ut,Qt,ae,Mt,Pt,he,zt,de.data):E.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,ut,Qt,ae,de.width,de.height,he,de.data):b.texSubImage2D(b.TEXTURE_2D,ut,Qt,ae,Mt,Pt,he,zt,de);b.pixelStorei(b.UNPACK_ROW_LENGTH,te),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,qe),b.pixelStorei(b.UNPACK_SKIP_PIXELS,wi),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ye),b.pixelStorei(b.UNPACK_SKIP_IMAGES,yr),ut===0&&U.generateMipmaps&&b.generateMipmap(pe),tt.unbindTexture()},this.initRenderTarget=function(E){ot.get(E).__webglFramebuffer===void 0&&mt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?mt.setTextureCube(E,0):E.isData3DTexture?mt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?mt.setTexture2DArray(E,0):mt.setTexture2D(E,0),tt.unbindTexture()},this.resetState=function(){C=0,L=0,F=null,tt.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}const Dr=new w;function nn(n,t,e,i,r,s){const o=2*Math.PI*r/4,a=Math.max(s-2*r,0),l=Math.PI/4;Dr.copy(t),Dr[i]=0,Dr.normalize();const c=.5*o/(o+a),u=1-Dr.angleTo(n)/l;return Math.sign(Dr[e])===1?u*c:a/(o+a)+c+c*(1-u)}class Dl extends je{constructor(t=1,e=1,i=1,r=2,s=.1){const o=r*2+1;if(s=Math.min(t/2,e/2,i/2,s),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:r,radius:s},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new w,c=new w,u=new w(t,e,i).divideScalar(2).subScalar(s),h=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,g=h.length/6,_=new w,m=.5/o;for(let d=0,T=0;d<h.length;d+=3,T+=2)switch(l.fromArray(h,d),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),h[d+0]=u.x*Math.sign(l.x)+c.x*s,h[d+1]=u.y*Math.sign(l.y)+c.y*s,h[d+2]=u.z*Math.sign(l.z)+c.z*s,f[d+0]=c.x,f[d+1]=c.y,f[d+2]=c.z,Math.floor(d/g)){case 0:_.set(1,0,0),p[T+0]=nn(_,c,"z","y",s,i),p[T+1]=1-nn(_,c,"y","z",s,e);break;case 1:_.set(-1,0,0),p[T+0]=1-nn(_,c,"z","y",s,i),p[T+1]=1-nn(_,c,"y","z",s,e);break;case 2:_.set(0,1,0),p[T+0]=1-nn(_,c,"x","z",s,t),p[T+1]=nn(_,c,"z","x",s,i);break;case 3:_.set(0,-1,0),p[T+0]=1-nn(_,c,"x","z",s,t),p[T+1]=1-nn(_,c,"z","x",s,i);break;case 4:_.set(0,0,1),p[T+0]=1-nn(_,c,"x","y",s,t),p[T+1]=1-nn(_,c,"y","x",s,e);break;case 5:_.set(0,0,-1),p[T+0]=nn(_,c,"x","y",s,t),p[T+1]=1-nn(_,c,"y","x",s,e);break}}static fromJSON(t){return new Dl(t.width,t.height,t.depth,t.segments,t.radius)}}const ts=new w(0,1,0),nu=[.45,.72,1];let fa=null;function H_(){if(fa)return fa;const n=new Uint8Array(nu.map(e=>Math.round(e*255))),t=new ku(n,nu.length,1,So);return t.minFilter=t.magFilter=He,t.colorSpace=xn,t.needsUpdate=!0,fa=t}function bt(n,t={}){const e=new Zd({color:n,gradientMap:H_(),map:t.map??null,alphaMap:t.alphaMap??null,side:t.side??An,transparent:!!t.transparent,opacity:t.opacity??1});return t.emissive&&(e.emissive=new Vt(t.emissive),e.emissiveIntensity=t.emissiveIntensity??1,t.emissiveMap&&(e.emissiveMap=t.emissiveMap)),e}function zn(n,t={}){return new mr({color:n,map:t.map??null,side:t.side??An,transparent:!!t.transparent,opacity:t.opacity??1,toneMapped:t.toneMapped??!0})}function Rn(n,t){return n.castShadow=t.cast??!0,n.receiveShadow=t.receive??!0,n}const V_=.06;function it(n,t,e,i,r,s,o,a,l={}){const c=e-t,u=r-i,h=o-s,f=l.sharp?0:Math.min(l.r??V_,c/2.001,h/2.001,u/2.001),p=f>0?new Dl(c,h,u,l.seg??(f>.3?5:3),f):new je(c,h,u),g=new ne(p,a);return g.position.set((t+e)/2,(s+o)/2,(i+r)/2),n.add(Rn(g,l)),g}function ce(n,t,e,i,r,s,o,a={}){const l=new gr(a.rTop??i,i,s-r,a.seg??32),c=new ne(l,o);return c.position.set(t,(r+s)/2,e),n.add(Rn(c,a)),c}function es(n,t,e,i,r,s,o,a={}){const l=new gr(s,s,e-t,a.seg??20),c=new ne(l,o);return c.rotation.z=Math.PI/2,c.position.set((t+e)/2,i,r),n.add(Rn(c,a)),c}function ar(n,t,e,i,r,s,o,a={}){const l=new gr(s,s,e-t,a.seg??20),c=new ne(l,o);return c.rotation.x=Math.PI/2,c.position.set(i,r,(t+e)/2),n.add(Rn(c,a)),c}function ve(n,t,e,i,r,s,o={}){const a=o.seg??28,l=o.seg?Math.round(o.seg*.7):20,c=new ne(new Ti(r,a,l,o.phiStart??0,o.phiLength??Math.PI*2,o.thetaStart??0,o.thetaLength??Math.PI),s);return c.position.set(t,e,i),o.scale&&c.scale.set(...o.scale),o.rot&&c.rotation.set(...o.rot),n.add(Rn(c,o)),c}function Me(n,t,e,i,r,s={}){const o=new w().subVectors(e,t);if(s.rb!==void 0&&s.rb!==i){const c=s.rb,u=o.length(),h=new Le;h.position.copy(t),h.quaternion.setFromUnitVectors(ts,o.clone().normalize());const f=new ne(new gr(c,i,u,20,1,!0),r);f.position.y=u/2;const p=new ne(new Ti(i,20,14),r),g=new ne(new Ti(c,20,14),r);g.position.y=u;for(const _ of[f,p,g])h.add(Rn(_,s));return n.add(h),h}const a=Math.max(.01,o.length()-2*i),l=new ne(new bl(i,a,8,20),r);return l.position.copy(t).addScaledVector(o,.5),l.quaternion.setFromUnitVectors(ts,o.normalize()),n.add(Rn(l,s)),l}function G_(n,t,e,i={}){const r=i.seg??36,s=i.rings??32,o=new po(t.map(m=>new w(m.y,m.w,m.d)),!1,"centripetal"),a=new po(t.map(m=>new w(m.x??0,m.z??0,m.n??2.3)),!1,"centripetal"),l=[],c=[],u=new w,h=new w;for(let m=0;m<=s;m++){o.getPoint(m/s,u),a.getPoint(m/s,h);const d=2/h.z;for(let T=0;T<r;T++){const S=T/r*Math.PI*2,x=Math.cos(S),R=Math.sin(S);l.push(h.x+u.y*Math.sign(x)*Math.pow(Math.abs(x),d),u.x,h.y+u.z*Math.sign(R)*Math.pow(Math.abs(R),d))}}for(let m=0;m<s;m++)for(let d=0;d<r;d++){const T=m*r+d,S=m*r+(d+1)%r,x=T+r,R=S+r;c.push(T,x,S,S,x,R)}const f=l.length/3;o.getPoint(0,u),a.getPoint(0,h),l.push(h.x,u.x,h.y);const p=f+1;o.getPoint(1,u),a.getPoint(1,h),l.push(h.x,u.x,h.y);for(let m=0;m<r;m++)c.push(f,m,(m+1)%r),c.push(p,s*r+(m+1)%r,s*r+m);const g=new Pe;g.setAttribute("position",new ie(l,3)),g.setIndex(c),g.computeVertexNormals();const _=new ne(g,e);return n.add(Rn(_,i)),_}function ns(n,t,e,i,r,s,o,a={}){const l=new ne(new Rl(r,s,a.tube??10,a.seg??32,a.arc??Math.PI*2),o);return l.position.set(t,e,i),a.axis==="x"?l.rotation.y=Math.PI/2:a.axis==="y"&&(l.rotation.x=Math.PI/2),a.rotZ&&(l.rotation.z=a.rotZ),n.add(Rn(l,a)),l}function go(n,t,e,i,r={}){const s=new po(t,!!r.closed,"centripetal",r.tension??.5),o=new ne(new Cl(s,r.seg??160,e,r.radial??12,!!r.closed),i);return n.add(Rn(o,r)),{mesh:o,curve:s}}function sn(n,t,e,i,r,s,o,a,l={}){const c=new _r(r-i,o-s),u=new ne(c,a),h=(i+r)/2,f=(s+o)/2;switch(t){case"+x":u.rotation.y=Math.PI/2,u.position.set(e,f,h);break;case"-x":u.rotation.y=-Math.PI/2,u.position.set(e,f,h);break;case"+z":u.position.set(h,f,e);break;case"-z":u.rotation.y=Math.PI,u.position.set(h,f,e);break;case"+y":u.rotation.x=-Math.PI/2,u.position.set(h,e,f);break}return u.castShadow=l.cast??!1,u.receiveShadow=l.receive??!1,l.renderOrder&&(u.renderOrder=l.renderOrder),n.add(u),u}function fs(n,t,e,i,r,s){const o=new Le;return o.position.set(t,e,i),o.rotation[r]=s,n.add(o),o}function is(n,t,e,i,r={}){const s=new Hu(t,e,i);s.castShadow=r.cast??!0,s.receiveShadow=r.receive??!0;const o=new re,a=new w,l=new Gn,c=new w,u=new Vt;let h=0;return n.add(s),{mesh:s,place(f,p,g,_=1,m=1,d=1,T=null,S=0){h>=i||(a.set(f,p,g),c.set(_,m,d),l.setFromAxisAngle(ts,S),s.setMatrixAt(h,o.compose(a,l,c)),T&&s.setColorAt(h,u.set(T)),h++)},done(){s.count=h,s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0)}}}const W_=2;function Ne(n,t,e,i={}){const r=document.createElement("canvas"),s=i.q??W_;r.width=n*s,r.height=t*s;const o=r.getContext("2d");o.scale(s,s),e(o,n,t);const a=new gd(r);return a.colorSpace=i.linear?xn:$e,a.anisotropy=i.anisotropy??16,i.repeat&&(a.wrapS=a.wrapT=oo),i.nearest&&(a.magFilter=He),a}let X_=null;function q_(){return X_??=Ne(256,256,(n,t,e)=>{n.clearRect(0,0,t,e),n.fillStyle="rgba(255,255,255,.22)",n.beginPath(),n.arc(t/2,e/2,t*.5,0,Math.PI*2),n.fill()})}function ds(n,t,e,i,r,s,o){const a=new Bu({map:q_(),color:s,transparent:!0,opacity:0,depthWrite:!1,blending:ma});Ue(a,"opacity",0,o);const l=new cd(a);return l.position.set(t,e,i),l.scale.set(r,r,1),n.add(l),l}const ah=[];function Ue(n,t,e,i){return ah.push({target:n,key:t,day:e,night:i,color:e instanceof Vt}),n}function lh(n){for(const t of ah)t.color?t.target[t.key].copy(t.day).lerp(t.night,n):t.target[t.key]=t.day+(t.night-t.day)*n}const iu=n=>new Vt(n),ll=.3;function ei(n,t,e,i,r,s,o=0){const a=new Qd(r,0,o,2);return a.position.set(t,e,i),Ue(a,"intensity",0,s*ll),n.add(a),a}function Qi(n,t,e,i={}){return n.emissive=iu(t),n.emissiveIntensity=0,Ue(n,"emissiveIntensity",0,e),i.dark&&Ue(n,"color",n.color.clone(),iu(i.dark)),i.opacity!==void 0&&(n.transparent=!0,n.opacity=i.opacity,Ue(n,"opacity",i.opacity,i.nightOpacity??1)),n}let Y_=null;function Z_(){return Y_??=Ne(256,256,(n,t,e)=>{n.clearRect(0,0,t,e),n.fillStyle="rgba(0,0,0,1)",n.beginPath(),n.roundRect(40,40,t-80,e-80,36),n.fill()})}function an(n,t,e,i,r,s=.32,o=.025){const a=new mr({map:Z_(),color:"#3A3028",transparent:!0,opacity:s*.55,depthWrite:!1,toneMapped:!1}),l=Math.min(e-t,r-i)*.3;return sn(n,"+y",o,t-l,e+l,i-l,r+l,a,{renderOrder:1})}const Nr=(n,t,e)=>n+(t-n)*e,rs=(n,t=0,e=1)=>Math.min(e,Math.max(t,n)),_o=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,cl="Inter, system-ui, sans-serif";function Vn(n,t,e,i,r,s){n.beginPath(),n.moveTo(t+s,e),n.arcTo(t+i,e,t+i,e+r,s),n.arcTo(t+i,e+r,t,e+r,s),n.arcTo(t,e+r,t,e,s),n.arcTo(t,e,t+i,e,s),n.closePath()}function ps(n){let t=n*9301+49297;return()=>(t=(t*9301+49297)%233280,t/233280)}function J_(){return Ne(512,512,(n,t,e)=>{n.fillStyle="#E2D9CB",n.fillRect(0,0,t,e),n.fillStyle="#CFC5B5",n.fillRect(0,0,t,6),n.fillRect(0,0,6,e)},{repeat:!0,anisotropy:16})}function $_(){return Ne(128,128,(n,t,e)=>{n.fillStyle="#8A6E4E",n.fillRect(0,0,t,e);for(let i=0;i<e;i+=16)for(let r=0;r<t;r+=16)n.fillStyle=(r+i)/16%2?"#A3845F":"#75593C",n.fillRect(r+1,i+1,14,14)},{repeat:!0})}function K_(){return Ne(512,320,(n,t,e)=>{const i=n.createRadialGradient(t*.2,0,0,t*.2,0,t*1.1);i.addColorStop(0,"#F3EEE6"),i.addColorStop(.55,"#E4DDD1"),i.addColorStop(1,"#D6CEC1"),n.fillStyle=i,n.fillRect(0,0,t,e),n.fillStyle="rgba(255,255,255,.55)",n.fillRect(0,0,t,12);const r=22,s=26,o=t-44,a=e-46;n.fillStyle="rgba(40,30,20,.16)",Vn(n,r,s+6,o,a,10),n.fill(),n.fillStyle="#FFFFFF",Vn(n,r,s,o,a,10),n.fill(),n.fillStyle="#FAF9F7",n.fillRect(r+6,s,o-12,22),n.fillStyle="rgba(29,29,33,.09)",n.fillRect(r,s+22,o,1),["#FF5F57","#FEBC2E","#28C840"].forEach((u,h)=>{n.fillStyle=u,n.beginPath(),n.arc(r+14+h*11,s+11,3.5,0,Math.PI*2),n.fill()}),n.fillStyle="#1D1D21",n.fillRect(r+52,s+9,44,5);const l=(o-48)/3,c=(a-23-36)/2;for(let u=0;u<2;u++)for(let h=0;h<3;h++){if(u===1&&h===2)continue;const f=r+12+h*(l+12),p=s+23+12+u*(c+12);n.fillStyle="#F6F4F0",Vn(n,f,p,l,c,8),n.fill(),n.fillStyle="#9A968E",n.fillRect(f+10,p+10,24,4),n.fillStyle="#1D1D21",n.fillRect(f+10,p+c-30,l*.55,6),n.fillStyle="#A09C95",n.fillRect(f+10,p+c-18,l*.7,4)}})}function j_(){return Ne(512,352,(n,t,e)=>{n.fillStyle="#C9CBCF",n.fillRect(0,0,t,e);const i=36,r=(t-72)/14,s=26;for(let o=0;o<6;o++)for(let a=0;a<14;a++){if(o===5&&a>3&&a<9){a===4&&(Vn(n,i+4*r+2,166,5*r-4,s-4,3),n.fillStyle="#1E1E22",n.fill());continue}Vn(n,i+a*r+2,14+o*30+2,r-4,s-4,3),n.fillStyle="#1E1E22",n.fill(),n.fillStyle="rgba(255,255,255,.07)",n.fillRect(i+a*r+4,14+o*30+4,r-8,2)}Vn(n,t/2-110,204,220,128,8),n.fillStyle="#B9BBC0",n.fill(),n.strokeStyle="rgba(0,0,0,.12)",n.lineWidth=2,n.stroke()})}function Q_(){return Ne(480,320,(n,t,e)=>{n.fillStyle="#1E1F26",n.fillRect(0,0,t,e),n.fillStyle="#2A2B33",n.fillRect(0,0,t,24),n.fillRect(0,24,34,e),n.fillStyle="#3A3B45",n.fillRect(0,24,120,e);const i=ps(3),r=["#C792EA","#82AAFF","#C3E88D","#F78C6C","#89DDFF","#EEFFFF"];for(let s=0;s<18;s++){const o=38+s*15;let a=134+Math.floor(i()*3)*16;const l=1+Math.floor(i()*4);for(let c=0;c<l;c++){const u=18+i()*70;if(n.fillStyle=r[Math.floor(i()*r.length)],n.fillRect(a,o,u,6),a+=u+9,a>t-30)break}}for(let s=0;s<12;s++)n.fillStyle=s===3?"#E0E0E8":"#8A8B95",n.fillRect(14,40+s*20,70+s*29%30,6)})}function tv(){return Ne(640,360,(n,t,e)=>{n.fillStyle="#1B1C22",n.fillRect(0,0,t,e),n.fillStyle="#262730",n.fillRect(0,0,t,22);for(let a=0;a<3;a++)n.fillStyle=["#FF5F56","#FFBD2E","#28C840"][a],n.beginPath(),n.arc(14+a*14,11,4,0,Math.PI*2),n.fill();n.fillStyle="#2E2F39",n.fillRect(0,22,30,e);const i=ps(21),r=["#C792EA","#82AAFF","#C3E88D","#F78C6C","#89DDFF","#EEFFFF"];for(let a=0;a<15;a++){const l=36+a*14;let c=44+Math.floor(i()*3)*14;const u=1+Math.floor(i()*4);for(let h=0;h<u;h++){const f=16+i()*64;if(n.fillStyle=r[Math.floor(i()*r.length)],n.fillRect(c,l,f,5),c+=f+8,c>380)break}n.fillStyle="#5A5C68",n.fillRect(10,l,12,5)}n.fillStyle="#111217",n.fillRect(0,250,410,e-250),n.fillStyle="#2E2F39",n.fillRect(0,250,410,2),n.font=`12px ${cl}`,n.textBaseline="alphabetic",[["#7FD8A6","$ make deploy"],["#B9BBC6","build  ok   312 tests passed"],["#B9BBC6","canary 1%  p99 41ms  errors 0"],["#F2C230","promote? y"],["#7FD8A6","$ _"]].forEach(([a,l],c)=>{n.fillStyle=a,n.fillText(l,12,272+c*17)}),n.fillStyle="#23242C",n.fillRect(410,22,t-410,e-22),n.fillStyle="#B9BBC6",n.font=`11px ${cl}`,["latency","throughput","errors","queue"].forEach((a,l)=>{const c=44+l*80;n.fillStyle="#B9BBC6",n.fillText(a.toUpperCase(),424,c),n.fillStyle="#2E2F39",n.fillRect(424,c+8,t-440,50),n.strokeStyle=["#82AAFF","#C3E88D","#F78C6C","#C792EA"][l],n.lineWidth=2,n.beginPath();for(let u=0;u<=20;u++){const h=424+u*(t-440)/20,f=c+50-6-i()*32;u?n.lineTo(h,f):n.moveTo(h,f)}n.stroke()})})}function ev(){return Ne(128,272,(n,t,e)=>{n.fillStyle="#0E0E11",n.fillRect(0,0,t,e),n.fillStyle="#EDEAE4",n.fillRect(10,8,16,4),n.fillStyle="#2C2C33",n.beginPath(),n.arc(18,28,7,0,Math.PI*2),n.fill(),n.fillStyle="#EDEAE4",n.fillRect(30,24,36,4),n.fillStyle="rgba(237,234,228,.08)",n.fillRect(0,42,t,1);for(const[i,r]of[[52,58],[74,88]])n.fillStyle="#26262D",Vn(n,8,i,r,18,8),n.fill();n.fillStyle="rgba(237,234,228,.08)",n.fillRect(0,e-62,t,1);for(let i=0;i<2;i++)for(let r=0;r<2;r++)n.fillStyle="rgba(237,234,228,.1)",Vn(n,8+r*58,e-54+i*24,54,19,6),n.fill()})}function nv(){return Ne(960,540,(n,t,e)=>{const i=n.createLinearGradient(0,0,t*.4,e);i.addColorStop(0,"#6FC1E8"),i.addColorStop(.5,"#2F7FC8"),i.addColorStop(1,"#1C4F9A"),n.fillStyle=i,n.fillRect(0,0,t,e);const r=t*.6,s=t*.98,o=t*.8,a=e*.7,l=e*1.02;n.fillStyle="#E04A2A",n.beginPath(),n.moveTo(r,l),n.lineTo(o,a),n.lineTo(o,l),n.fill(),n.fillStyle="#B83A22",n.beginPath(),n.moveTo(o,a),n.lineTo(s,l),n.lineTo(o,l),n.fill(),n.strokeStyle="#D9843A",n.lineWidth=9,n.lineCap="round",n.beginPath(),n.moveTo(r-10,l),n.lineTo(o,a-2),n.lineTo(s+10,l),n.stroke(),n.strokeStyle="#1A1A1A",n.lineWidth=4,n.beginPath(),n.moveTo(r-14,l),n.lineTo(o,a-8),n.lineTo(s+14,l),n.stroke();const c=o+10,u=a-6;n.fillStyle="#FBFAF4",n.strokeStyle="#1A1A1A",n.lineWidth=5,n.lineJoin="round",n.beginPath(),n.ellipse(c,u-58,44,62,0,0,Math.PI*2),n.fill(),n.stroke(),n.beginPath(),n.ellipse(c+46,u-10,26,14,0,0,Math.PI*2),n.fill(),n.stroke(),n.beginPath(),n.ellipse(c-26,u-4,20,10,0,0,Math.PI*2),n.fill(),n.stroke(),n.beginPath(),n.ellipse(c-2,u-136,40,36,-.25,0,Math.PI*2),n.fill(),n.stroke(),n.beginPath(),n.ellipse(c-54,u-170,52,24,-.72,0,Math.PI*2),n.fill(),n.stroke(),n.beginPath(),n.ellipse(c-80,u-194,14,10,-.7,0,Math.PI*2),n.fillStyle="#1A1A1A",n.fill(),n.beginPath(),n.ellipse(c-44,u-152,22,7,-.72,0,Math.PI*2),n.fill(),n.beginPath(),n.ellipse(c+30,u-120,16,36,.35,0,Math.PI*2),n.fill(),n.beginPath(),n.arc(c-22,u-150,4,0,Math.PI*2),n.fill(),n.strokeStyle="#1A1A1A",n.lineWidth=4,n.beginPath(),n.moveTo(c-60,u-194),n.lineTo(c-70,u-206),n.stroke();const h=r+54,f=l-46;n.fillStyle="#F6D13A",n.strokeStyle="#1A1A1A",n.lineWidth=4,n.beginPath(),n.ellipse(h,f-16,20,18,0,0,Math.PI*2),n.fill(),n.stroke(),n.beginPath(),n.ellipse(h+8,f-44,16,15,0,0,Math.PI*2),n.fill(),n.stroke();for(const[F,M]of[[-6,-62],[2,-66],[10,-64],[16,-60]])n.beginPath(),n.moveTo(h+8,f-56),n.lineTo(h+F,f+M),n.stroke();n.beginPath(),n.moveTo(h+20,f-46),n.lineTo(h+34,f-50),n.lineTo(h+22,f-40),n.closePath(),n.fillStyle="#F3A33B",n.fill(),n.stroke(),n.fillStyle="#1A1A1A",n.beginPath(),n.arc(h+12,f-48,2.5,0,Math.PI*2),n.fill(),n.strokeStyle="#F3A33B",n.lineWidth=3,n.beginPath(),n.moveTo(h-6,f+2),n.lineTo(h-6,f+14),n.moveTo(h+6,f+2),n.lineTo(h+6,f+14),n.stroke();const p=t*.09,g=e*.09,_=t*.46,m=e*.46;n.fillStyle="#FBFAF4",n.strokeStyle="#1A1A1A",n.lineWidth=5;const d=14,T=_/2,S=m/2,x=p+T,R=g+S;n.beginPath(),n.moveTo(x+T,R);for(let F=1;F<=d;F++){const M=F/d*Math.PI*2,y=M-Math.PI/d;n.quadraticCurveTo(x+Math.cos(y)*(T+16),R+Math.sin(y)*(S+14),x+Math.cos(M)*T,R+Math.sin(M)*S)}n.closePath(),n.fill(),n.stroke();for(let F=0;F<3;F++){const M=16-F*4,y=p+_*.78+F*46,P=g+m+22+F*40;n.beginPath(),n.arc(y,P,M,0,Math.PI*2),n.fill(),n.stroke()}n.fillStyle="#1A1A1A",n.textAlign="center",n.textBaseline="middle",n.font=`bold 46px ${cl}`,["KEEP LOOKING","UP.. THAT'S THE","SECRET OF","LIFE..."].forEach((F,M)=>n.fillText(F,p+_/2,g+m*.22+M*52));const L=n.createRadialGradient(t/2,e/2,e*.3,t/2,e/2,t*.75);L.addColorStop(0,"rgba(0,0,0,0)"),L.addColorStop(1,"rgba(0,0,0,.18)"),n.fillStyle=L,n.fillRect(0,0,t,e)},{anisotropy:16})}const ru=[["#D8A090","#B86E5C"],["#8FA7C2","#4F6A8A"],["#C9C3B6","#8E8679"],["#E0B452","#B0802A"],["#7E9C8A","#4E6E5C"],["#B98B5E","#80592F"],["#9C8AB8","#64527F"],["#D9C9A8","#A48F6C"],["#D96A5A","#9C3B2E"],["#5F86A8","#2F4F6B"],["#C8302F","#7A1D1A"],["#2E3A5E","#1A2238"]];function iv(n){return Ne(128,160,(t,e,i)=>{const[r,s]=ru[n%ru.length],o=ps(n+40);t.fillStyle="#FAF8F2",t.fillRect(0,0,e,i);const a=t.createLinearGradient(0,0,0,i);if(a.addColorStop(0,r),a.addColorStop(1,s),t.fillStyle=a,t.fillRect(6,6,e-12,i-12),n%3===0)t.fillStyle=s,t.beginPath(),t.ellipse(e/2,i*.42,e*.16,i*.14,0,0,Math.PI*2),t.fill(),t.fillRect(e*.3,i*.55,e*.4,i*.4);else if(n%3===1)t.fillStyle="rgba(255,255,255,.55)",t.fillRect(6,i*.5,e-12,4),t.fillStyle=s,t.beginPath(),t.arc(e*.3+o()*e*.4,i*.35,12,0,Math.PI*2),t.fill();else{t.fillStyle="rgba(0,0,0,.25)";for(let l=0;l<4;l++)t.fillRect(10+l*28,i*.3+l%2*30,18,i*.5)}})}function su(n=!1){return Ne(256,160,(t,e,i)=>{const r=t.createLinearGradient(0,0,0,i);n?(r.addColorStop(0,"#F6F4F0"),r.addColorStop(1,"#E9E6E0")):(r.addColorStop(0,"#FFE2AE"),r.addColorStop(1,"#FFB764")),t.fillStyle=r,t.fillRect(0,0,e,i),t.strokeStyle=n?"#FDFCFA":"#FFF4DE",t.lineWidth=8,Vn(t,e*.08,i*.12,e*.84,i*.76,22),t.stroke(),t.strokeStyle=n?"#B9B6B0":"#7A3C1C",t.lineWidth=8,t.lineJoin="round",t.lineCap="round",t.beginPath(),t.moveTo(e*.2,i*.58),t.lineTo(e*.32,i*.4),t.lineTo(e*.42,i*.62),t.lineTo(e*.52,i*.38),t.lineTo(e*.62,i*.62),t.lineTo(e*.72,i*.42),t.lineTo(e*.8,i*.56),t.stroke()})}function rv(){return Ne(512,512,(n,t,e)=>{n.clearRect(0,0,t,e);const i=t/2,r=e/2,s=t/2-4;for(let a=s,l=0;a>0;a-=14,l++)n.beginPath(),n.arc(i,r,a,0,Math.PI*2),n.fillStyle=l%2?"#C9B28C":"#B89D74",n.fill();const o=ps(23);n.strokeStyle="rgba(80,60,30,.18)",n.lineWidth=1.5;for(let a=0;a<2400;a++){const l=o()*Math.PI*2,c=o()*(s-6),u=i+Math.cos(l)*c,h=r+Math.sin(l)*c;n.beginPath(),n.moveTo(u,h),n.lineTo(u+Math.cos(l+1.57)*5,h+Math.sin(l+1.57)*5),n.stroke()}n.strokeStyle="rgba(255,255,255,.25)",n.lineWidth=2;for(let a=s-7;a>0;a-=28)n.beginPath(),n.arc(i,r,a,0,Math.PI*2),n.stroke()},{anisotropy:16})}function sv(){const n=(1+Math.sqrt(5))/2,t=[];for(const a of[-1,1])for(const l of[-1,1])t.push([0,a,l*n],[a,l*n,0],[l*n,0,a]);const e=a=>{const l=Math.hypot(...a);return a.map(c=>c/l)},i=(a,l)=>Math.hypot(a[0]-l[0],a[1]-l[1],a[2]-l[2]),r=t.map(a=>({v:e(a),w:1/(20.07*Math.PI/180)}));for(let a=0;a<12;a++)for(let l=a+1;l<12;l++)for(let c=l+1;c<12;c++)Math.abs(i(t[a],t[l])-2)<1e-6&&Math.abs(i(t[l],t[c])-2)<1e-6&&Math.abs(i(t[a],t[c])-2)<1e-6&&r.push({v:e([t[a][0]+t[l][0]+t[c][0],t[a][1]+t[l][1]+t[c][1],t[a][2]+t[l][2]+t[c][2]]),w:1/(23.8*Math.PI/180)});return Ne(512,256,(a,l,c)=>{const u=a.createImageData(l,c),h=u.data;for(let f=0;f<c;f++){const p=Math.PI/2-(f+.5)/c*Math.PI,g=Math.cos(p),_=Math.sin(p);for(let m=0;m<l;m++){const d=(m+.5)/l*2*Math.PI-Math.PI,T=g*Math.cos(d),S=_,x=g*Math.sin(d);let R=1e9,C=1e9,L=!1;for(const N of r){const z=Math.min(1,Math.max(-1,T*N.v[0]+S*N.v[1]+x*N.v[2])),k=Math.acos(z)*N.w;k<R?(C=R,R=k,L=N.w>2.6):k<C&&(C=k)}const F=Math.max(0,1-(C-R)/.07),M=L?[28,28,34]:[246,244,238],y=L?[12,12,16]:[150,146,136],P=(f*l+m)*4;h[P]=M[0]+(y[0]-M[0])*F,h[P+1]=M[1]+(y[1]-M[1])*F,h[P+2]=M[2]+(y[2]-M[2])*F,h[P+3]=255}}a.putImageData(u,0,0)},{q:1,anisotropy:16})}function ov(){return Ne(128,512,(n,t,e)=>{const i=n.createLinearGradient(0,0,0,e);i.addColorStop(0,"#F3E6C8"),i.addColorStop(.75,"#E6D7B4"),i.addColorStop(1,"#CDBD98"),n.fillStyle=i,n.fillRect(0,0,t,e),n.fillStyle="#B9A98A",n.fillRect(0,e-26,t,6),n.fillStyle="#D9CDB3",n.fillRect(0,e-20,t,20),n.fillStyle="rgba(255,255,255,.35)",n.fillRect(t*.3,e*.1,t*.25,e*.5)})}function av(){return Ne(780,540,(n,t,e)=>{n.fillStyle="#F7F1E4",n.fillRect(0,0,t,e),n.fillStyle="#E6DDCB",n.fillRect(t/2-3,0,6,e),n.fillStyle="#E3D9C6";for(let s=70;s<e-30;s+=26)n.fillRect(30,s,t/2-60,2),n.fillRect(t/2+30,s,t/2-60,2);n.fillStyle="#FBF8F1",n.fillRect(48,52,150,186),n.fillStyle="#B98B6E",n.fillRect(58,62,130,150),n.fillStyle="#7A5A48",n.fillRect(98,92,50,56),n.fillRect(84,150,78,62),n.fillStyle="rgba(236,226,196,.85)",n.fillRect(98,42,52,20),n.font="600 30px Inter, sans-serif",n.fillStyle="#2A2A30",n.fillText("About",222,92);const i=ps(77),r=(s,o,a,l)=>{n.fillStyle="#4A4A58";for(let c=a;c<l;c+=26){let u=s;for(;u<o-30;){const h=14+i()*46;n.fillRect(u,c-9,Math.min(h,o-u),4),u+=h+8}}};r(222,t/2-40,122,240),r(48,t/2-40,278,e-40),n.font="600 30px Inter, sans-serif",n.fillStyle="#2A2A30",n.fillText("Accolades",t/2+40,92),r(t/2+40,t-48,122,e-40)})}const xe={L:44,H:32,SLAB:5,CENTRE:new w(22,10,22)},$s=6.6,ou={x0:6,x1:12,y0:6.5,y1:26,z:44},au={battle:{rect:[0,22,0,17]},rack:{rect:[22,44,0,17]},door:{rect:[0,14,17,44]},bed:{rect:[14,44,17,44]}},ch=[{section:"about",piece:"battle",at:[3.2,8.75,3],side:"bottom",via:[8.5,21,9.5],fov:36},{section:"projects",piece:"battle",at:[1.2,10.3,7.5],side:"left",via:[11,18.5,11],fov:36},{section:"work",piece:"battle",at:[7.75,10.9,1.75],side:"top",via:[9,18.5,11],fov:36},{section:"skills",piece:"battle",at:[13.5,11.8,3.6],side:"right",via:[13.5,20,9.4],fov:52},{section:"contact",piece:"bed",at:[18.4,7.05,32.6],side:"right",via:[22,20,37],fov:36}],ms={},Nt=(n,t,e)=>new w(n,t,e),Fl=n=>{let t=n*9301+49297;return()=>(t=(t*9301+49297)%233280,t/233280)};let D=null;function lv(n){return n.weave.repeat.set(3,2),{wall:bt("#EFE7DB"),slab:bt("#D6CCBC"),slabBottom:bt("#C2B6A3"),base:bt("#E3DBCD"),baseLip:bt("#F2ECE0"),black:bt("#454552"),deskBlack:bt("#4A4A58"),darkm:bt("#6E6E7A"),grey:bt("#B7B5B0"),silver:bt("#CDCFD4"),white:bt("#F3F0E8"),cream:bt("#ECE4D3"),bedframe:bt("#9E7E68"),shelfWood:bt("#D6B993"),sheet:bt("#F4E8E1"),blanket:bt("#AEB3C1"),pillow:bt("#FAF7F1"),leather:bt("#6E4D47"),leatherHi:bt("#846259"),mesh:bt("#525262"),metal:bt("#9A9CA6"),chrome:bt("#C4C7CF"),skin:bt("#D8B08C"),skinShade:bt("#C9A07C"),hair:bt("#3A2B22"),beard:bt("#3E2E25",{side:Ke}),eyeWhite:bt("#F3EFE7"),iris:bt("#3B2719"),lip:bt("#9A5A58"),rim:bt("#8D9096",{transparent:!0,opacity:.82}),lens:bt("#E6EEF5",{transparent:!0,opacity:.22,side:Ke}),jersey:bt("#F4F1EA"),maroon:bt("#9A4652"),jeans:bt("#5C6A8C"),psWhite:bt("#F2F0EA"),psBlack:bt("#3C3C48"),maple:bt("#E0C494"),fretboard:bt("#6E5240"),guitar:bt("#34343F"),pickguard:bt("#F0EEE8"),terracotta:bt("#D29C78"),green:bt("#8DB07E"),frameNavy:bt("#4C5A7A"),doorFrame:bt("#ECE3CF"),door:bt("#F1EADB"),corridorFloor:bt("#DCD1BA"),shadeFabric:Qi(bt("#F6ECDB"),"#FFB45A",1.6),bulb:Qi(bt("#F4F1EA"),"#FFE2A8",3,{opacity:.85}),candle:bt("#F4F2EC"),flame:Qi(bt("#FFD27A"),"#FFB040",3,{opacity:0}),weave:bt("#FFFFFF",{map:n.weave}),rubik:["#E07A66","#F2A65A","#F4F1EA","#F0D070","#6C8BC8","#7FB58A"].map(t=>bt(t)),shirt:{grey:bt("#A9A9B0"),navy:bt("#4F5D80"),red:bt("#C45B57"),hoodie:bt("#575762"),spain:bt("#F3F1EA")},key:bt("#FFFFFF"),book:bt("#FFFFFF")}}function cv(n,[t,e,i,r],s){const o=t===0?-2:t,a=i===0?-2:i,l=s.tiles.clone();l.repeat.set((e-o)/$s,(r-a)/$s),l.offset.set(o/$s,-r/$s),l.needsUpdate=!0;const c=bt("#FFFFFF",{map:l});it(n,o,e,a,r,-5,0,[D.slab,D.slab,c,D.slabBottom,D.slab,D.slab],{sharp:!0})}function io(n,t,e,i){t==="z"?(it(n,0,.3,e,i,0,1,D.base,{sharp:!0}),it(n,0,.34,e,i,1,1.15,D.baseLip,{sharp:!0,cast:!1})):(it(n,e,i,0,.3,0,1,D.base,{sharp:!0}),it(n,e,i,0,.34,1,1.15,D.baseLip,{sharp:!0,cast:!1}))}function lu(n,t,e,i,{doorway:r=!1}={}){const s=t===0?-2:t,o=(p,g,_,m)=>it(n,-2,0,p,g,_,m,D.wall,{sharp:!0});if(!r){o(s,e,0,xe.H),io(n,"z",Math.max(0,s),e);return}const a=23.6,l=32.6,c=23,u=.8;o(s,a-u,0,xe.H),o(l+u,e,0,xe.H),o(a-u,l+u,c+u,xe.H),io(n,"z",s,a-u),io(n,"z",l+u,e),it(n,-2,.25,a-u,a,0,c+u,D.doorFrame,{sharp:!0}),it(n,-2,.25,l,l+u,0,c+u,D.doorFrame,{sharp:!0}),it(n,-2,.25,a,l,c,c+u,D.doorFrame,{sharp:!0});const h=zn("#FFFFFF",{map:i.corridor});Ue(h,"color",new Vt("#FFFFFF"),new Vt("#5E4E3E")),sn(n,"+x",-1.96,a,l,0,c,h),it(n,-2,.1,a,l,-.3,.05,D.corridorFloor,{sharp:!0,cast:!1}),it(n,-.1,.1,a,l,.05,.14,D.metal,{sharp:!0,cast:!1});const f=fs(n,-1.1,0,l-.15,"y",hs.degToRad(78));it(f,-.2,.2,-8.7,0,.1,c-.25,D.door,{r:.05});for(const[p,g]of[[c*.56,c-1.7],[1.5,c*.47]])it(f,-.28,-.2,-7.5,-1.2,p,g,D.doorFrame,{sharp:!0,cast:!1});es(f,-1.3,-.3,10.8,-1.1,.1,D.chrome,{cast:!1}),ce(f,-.45,-1.1,.22,10.5,10.85,D.chrome,{cast:!1}).rotation.z=Math.PI/2,it(n,0,.35,l+1.6,l+3,11.6,13,D.white,{r:.06,cast:!1}),it(n,.35,.42,l+1.95,l+2.65,12,12.6,D.grey,{sharp:!0,cast:!1})}function cu(n,t,e){const i=t===0?0:t;it(n,i,e,-2,0,0,xe.H,D.wall,{sharp:!0}),io(n,"x",i,e)}function uh(n,{x:t,y:e,z:i,yaw:r=0,w:s,d:o,lid:a,body:l,screen:c,deck:u=null,tilt:h=20,r:f=.1,section:p=null}){const g=new Le;g.position.set(t,e,i),g.rotation.y=r,n.add(g),it(g,-s/2,s/2,0,o,0,.22,l,{r:f}),u?sn(g,"+y",.221,-s/2+.12,s/2-.12,.08,o-.08,zn("#FFFFFF",{map:u})):(sn(g,"+y",.221,-s/2+.3,s/2-.3,.2,o*.6,zn("#1E1E22")),sn(g,"+y",.221,-s*.22,s*.22,o*.66,o-.15,zn("#3A3A40")));const _=fs(g,0,.22,.06,"x",-hs.degToRad(h));it(_,-s/2,s/2,-.16,0,0,a,l,{r:f});const m=sn(_,"+z",.006,-s/2+.14,s/2-.14,.14,a-.14,zn("#FFFFFF",{map:c}));return p&&(ms[p]=m),ei(_,0,a*.5,.9,"#FFE2C0",3.2,6),g}function uv(n,t){const[e,i,r]=[.8,14.2,8.5];it(n,0,5.4,e,i,r-.45,r,D.deskBlack,{r:.12});for(const s of[2,12.4])it(n,.3,4.7,s,s+.45,r-.85,r-.45,D.black,{r:.04}),it(n,.3,.75,s,s+.45,r-5.4,r-.45,D.black,{r:.04}),Me(n,Nt(.75,r-5.2,s+.22),Nt(4.5,r-.9,s+.22),.16,D.black);an(n,.4,5.4,e,i,.18),uh(n,{x:1.1,y:r,z:7.5,yaw:Math.PI/2,w:3.45,d:2.45,lid:2.25,body:D.silver,screen:t.mac,deck:t.deck,r:.08,section:"projects"}),hv(n,t,r),ar(n,1.3,3.7,4.95,r+.09,.09,D.black,{cast:!1}),ce(n,4.3,11.3,.48,r,r+1,D.white),ns(n,4.3,r+.55,11.95,.38,.08,D.white,{axis:"x",seg:20,cast:!1})}function hv(n,t,e){const i=new Le;i.position.set(3.2,e,3),i.rotation.y=Math.PI/2,n.add(i);const r=3.9,s=2.7;it(i,-r/2-.12,r/2+.12,-s/2-.12,s/2+.12,0,.06,bt("#4C5A7A"),{r:.03}),it(i,-r/2,-.02,-s/2,s/2,.06,.2,D.pillow,{r:.03,cast:!1}),it(i,.02,r/2,-s/2,s/2,.06,.2,D.pillow,{r:.03,cast:!1}),ms.about=sn(i,"+y",.205,-r/2,r/2,-s/2,s/2,zn("#FFFFFF",{map:t.journal})),an(n,1.6,4.8,.9,5.1,.16,e+.01)}function fv(n,t){const[e,i,r,s]=[2.6,12.6,12.8,19.5];it(n,0,.45,e,i,r,s,D.frameNavy,{r:.03}),sn(n,"+x",.46,e+.35,i-.35,r+.35,s-.35,bt("#FFFFFF",{map:t.snoopy}))}function dv(n,t){const[e,i,r]=[10.7,13.7,8.5];it(n,.12,.62,e,i,r,r+1.9,D.black,{r:.05}),it(n,.62,.72,e+.15,i-.15,r+.15,r+1.75,D.white,{sharp:!0,cast:!1});const s=bt("#FFFFFF",{map:t.neonOff,emissiveMap:t.neon,emissive:"#FFFFFF",emissiveIntensity:0});Qi(s,"#FFFFFF",1.3,{dark:"#17130F"}),sn(n,"+x",.73,e+.2,i-.2,r+.2,r+1.7,s),ei(n,1.4,r+1,12.2,"#FFC46A",12,11),ds(n,.9,r+.95,12.2,2.6,"#FFD48A",.22)}function pv(n){const e=[[.42,.11],[.58,.03],[.76,.1],[.74,.24],[.56,.28],[.34,.3],[.16,.4],[.22,.52],[.5,.58],[.78,.64],[.84,.76],[.66,.86],[.4,.9],[.2,.97],[.08,1]].map(([a,l])=>Nt(.8+a*6,24.5-l*12,.55)),i=a=>{const l=bt("#F4F2EE");return Qi(l,a,1,{dark:"#0A0702",opacity:.8})},r=i("#FFAE1E"),s=i("#FFE59A"),{curve:o}=go(n,e,.17,r,{seg:260,radial:12,cast:!1});go(n,e.map(a=>Nt(a.x+.03,a.y+.02,a.z+.1)),.075,s,{seg:260,radial:8,cast:!1});for(const a of[0,1]){const l=o.getPoint(a);ve(n,l.x,l.y,l.z,.17,r,{cast:!1,seg:12})}for(const a of[.07,.3,.52,.74,.95]){const l=o.getPoint(a);ar(n,0,l.z,l.x,l.y,.06,D.metal,{cast:!1,seg:8})}for(const a of[.12,.4,.65,.9]){const l=o.getPoint(a);ei(n,l.x,l.y,1.7,"#FFB236",15,22)}for(const a of[.08,.26,.44,.62,.8,.96]){const l=o.getPoint(a);ds(n,l.x,l.y,l.z+.4,2.4,"#FFB030",.14)}}function mv(n,t){const[e,i,r,s,o]=[5.2,21.2,.4,8.2,8.5],a=bt("#3E3E4A");it(n,e,i,r,s,o-.5,o,a,{r:.14}),it(n,e+.5,i-.5,r+.5,s-.5,o-.9,o-.5,D.black,{r:.06});for(const c of[e+.6,i-1.3])it(n,c,c+.7,3.95,4.65,.4,o-.9,D.black,{r:.06}),it(n,c-.15,c+.85,r+.7,s-.7,0,.55,D.black,{r:.12}),it(n,c-.05,c+.75,r+.9,s-.9,o-1.1,o-.9,D.black,{r:.05});it(n,e+1.3,i-1.3,r+1,r+1.5,1.9,2.4,D.black,{r:.06}),an(n,e,i,r,s,.2),it(n,5.9,9.6,1.4,4.6,o,o+1,D.darkm,{r:.1}),uh(n,{x:7.75,y:o+1,z:2,w:3.5,d:2.4,lid:2.3,body:D.darkm,screen:t.code,section:"work"});const l=13.5;it(n,l-1.8,l+1.8,3.4,5.6,o,o+.25,D.black,{r:.1}),it(n,l-.45,l+.45,3.9,4.6,o+.25,o+2,D.black,{r:.06}),it(n,l-3.65,l+3.65,3.2,3.55,o+1.2,o+5.45,D.black,{r:.08}),ms.skills=sn(n,"+z",3.56,l-3.45,l+3.45,o+1.4,o+5.25,zn("#FFFFFF",{map:t.dev})),it(n,l-2.2,l+2.2,2.9,3.2,o+2,o+4.6,D.darkm,{r:.1}),ei(n,l,o+3.3,5.6,"#FFDDB0",9,13),xv(n,10.6,15.5,5.45,7,o),it(n,16.4,17.5,5.6,6.6,o,o+.4,D.grey,{r:.22}),ar(n,3.6,5.5,17,o+.08,.05,D.black,{cast:!1}),gv(n,19.4,2.7,o),vv(n,19.3,5.6,o),it(n,8.2,11.4,1,1.9,0,.5,D.white,{r:.08});for(const c of[8.8,9.8,10.8])it(n,c-.25,c+.25,1.1,1.75,.5,.56,D.darkm,{sharp:!0,cast:!1});go(n,[Nt(11.3,.3,1.4),Nt(13,.35,1.3),Nt(15.5,1.2,1.2),Nt(17.4,4.5,1.1),Nt(18.6,o-.95,1.3)],.08,D.black,{seg:40,radial:6,cast:!1}),go(n,[Nt(8.4,.3,1.5),Nt(6.2,.3,1.7),Nt(5.6,2,1.9),Nt(5.8,o-.95,2.6)],.08,D.black,{seg:30,radial:6,cast:!1})}function gv(n,t,e,i){ce(n,t,e,1.05,i,i+.12,D.psBlack,{seg:36}),it(n,t-.38,t+.38,e-2.9/2+.1,e+2.9/2-.1,i+.12,i+4.3-.35,D.psBlack,{r:.08});for(const o of[-1,1]){const a=fs(n,t+o*.4,i+.12,e,"z",-o*.055);it(a,o>0?0:-.17,o>0?.17:0,-2.9/2,2.9/2,0,4.3-.12,D.psWhite,{r:.1}),it(a,o>0?-.02:-.15,o>0?.15:.02,-2.9/2+.3,2.9/2-.3,4.3-.12,4.3+.1,D.psWhite,{r:.08})}it(n,t-.2,t+.2,e+2.9/2-.14,e+2.9/2-.02,i+1.2,i+1.45,D.darkm,{sharp:!0,cast:!1}),an(n,t-1.1,t+1.1,e-1.1,e+1.1,.22,i+.01)}function _v(n,t,e,i,r,s,o){const a=zn("#E9E7E2");return Ue(a,"color",new Vt("#E9E7E2"),new Vt("#FFE6C2")),it(n,t,e,i,r,s,o,a,{sharp:!0,cast:!1})}function vv(n,t,e,i){it(n,t-1,t+1,e-.55,e+.55,i,i+.5,D.psWhite,{r:.22}),it(n,t-.78,t+.78,e-.5,e+.45,i+.5,i+.56,D.psBlack,{r:.06,cast:!1}),it(n,t-.34,t+.34,e-.42,e+.02,i+.56,i+.6,D.darkm,{r:.05,cast:!1});for(const r of[-1,1])Me(n,Nt(t+r*.72,i+.25,e+.2),Nt(t+r*.95,i+.22,e+1.15),.28,D.psWhite),ce(n,t+r*.42,e+.3,.13,i+.56,i+.8,D.psBlack,{seg:14,cast:!1});_v(n,t-.34,t+.34,e-.55,e-.4,i+.5,i+.62),an(n,t-1.1,t+1.1,e-.7,e+1.3,.2,i+.01)}function xv(n,t,e,i,r,s){it(n,t,e,i,r,s,s+.32,D.black,{r:.08});const o=14,a=5,l=(e-t-.3)/o,c=(r-i-.3)/a,u=is(n,new je(l-.07,.14,c-.07),D.key,o*a);for(let h=0;h<a;h++)for(let f=0;f<o;f++){const p=h===a-1&&(f<3||f>9),g=h===a-1&&f>=4&&f<=9;if(g&&f>4)continue;const _=g?6:1;u.place(t+.15+(f+_/2)*l,s+.39,i+.15+(h+.5)*c,_,1,1,p||g?"#4A4A52":h===0?"#3A3A42":"#2C2C33")}u.done()}function yv(n){const r=new Jr,s=[[0,0],[1.9,.3],[2.7,1.6],[2.6,3.2],[1.9,4.3],[2,5.3],[2.6,6.3],[2.2,7.3],[1.2,7],[.5,6.4],[-.5,6.4],[-1.3,7.2],[-2,8.2],[-2.5,7.6],[-2.6,6.2],[-2.1,4.6],[-2.7,3.3],[-2.8,1.8],[-2,.4]].map(([f,p])=>new ft(f*.6,p*.6));r.moveTo(0,0),r.splineThru(s.slice(1)),r.lineTo(0,0);const o=new ne(new Qr(r,{depth:.55,bevelEnabled:!0,bevelThickness:.08,bevelSize:.08,bevelSegments:3,curveSegments:24}),D.guitar);o.position.set(13.5,15.8,.45),o.castShadow=o.receiveShadow=!0,n.add(o);const a=new Jr;[[.3,.9],[1.9,1.4],[2.1,3],[1.6,4.4],[.6,5.6],[-.4,5.4],[-.9,4],[-.9,2.4],[-.3,1.1]].forEach(([f,p],g)=>g?a.lineTo(f*.6,p*.6):a.moveTo(f*.6,p*.6));const l=new ne(new Qr(a,{depth:.06,bevelEnabled:!1}),D.pickguard);l.position.set(13.5,15.8,1.08),n.add(l);const c=1.08;for(const f of[15.8+1.9,15.8+2.75,15.8+3.6])it(n,13.5-.35,13.5+.35,c,c+.18,f,f+.22,D.darkm,{r:.04});it(n,13.5-.42,13.5+.42,c,c+.14,15.8+1.15,15.8+1.45,D.chrome,{r:.03});for(const f of[-.3,.3])ce(n,13.5+f*2.2,c+.1,.08,15.8+2.2,15.8+2.3,D.chrome,{cast:!1,seg:10}).rotation.x=Math.PI/2;it(n,13.5-.3,13.5+.3,.65,.95,15.8+4.2,15.8+9.4,D.maple,{r:.08}),it(n,13.5-.3,13.5+.3,.95,1.02,15.8+4.2,15.8+9.4,D.fretboard,{sharp:!0,cast:!1});const u=is(n,new je(.6,.05,.05),D.chrome,20,{cast:!1});for(let f=0;f<20;f++)u.place(13.5,15.8+4.45+f*.26*(1-f*.012),1.03,1,1,1);u.done(),it(n,13.5-.5,13.5+.5,.65,.95,15.8+9.4,15.8+11,D.guitar,{r:.1});for(let f=0;f<6;f++){const p=f-2.5;ce(n,13.5+(p<0?-.62:.62),.8,.07,15.8+9.7+f%3*.4,15.8+9.75+f%3*.4,D.chrome,{cast:!1,seg:8}).rotation.z=Math.PI/2}const h=is(n,new je(.025,1,.025),D.chrome,6,{cast:!1});for(let f=0;f<6;f++)h.place(13.5-.25+f*.1,15.8+5.95,1.06,1,9.5,1);h.done(),it(n,13.5-.3,13.5+.3,.2,.65,15.8+10.2,15.8+10.6,D.metal,{r:.06})}function Mv(n){for(let et=0;et<5;et++){const At=et*Math.PI*2/5+.3,St=13.2+Math.cos(At)*2.9,G=12.4+Math.sin(At)*2.9;Me(n,Nt(13.2,.6,12.4),Nt(St,.5,G),.22,D.black),ve(n,St,.32,G,.32,D.darkm,{seg:14})}ce(n,13.2,12.4,.6,.3,1,D.black),ce(n,13.2,12.4,.32,1,4.2,D.chrome),it(n,13.2-1.3,13.2+1.3,12.4-1,12.4+1,4.2,4.7,D.black,{r:.1}),it(n,13.2-2.4,13.2+2.4,12.4-2.4,12.4+2.2,4.7,5.7,D.leather,{r:.45});for(const et of[13.2-2.4,13.2+1.6])it(n,et,et+.8,12.4-2.2,12.4+2,5.7,6.4,D.leather,{r:.3});const i=fs(n,13.2,5.2,12.4+2.3,"x",.1);it(i,-2.3,2.3,0,1,0,9.4,D.leather,{r:.45}),it(i,-1.4,1.4,-.06,.02,1.2,8.6,D.leatherHi,{r:.05,cast:!1});for(const et of[-2.6,1.9])it(i,et,et+.7,-.5,.6,5.6,9,D.leather,{r:.25});it(i,-1.6,1.6,-.9,.05,8,9.2,D.leather,{r:.4}),it(i,-1.7,1.7,-.7,.05,1.6,2.8,D.leather,{r:.35});for(const et of[13.2-3.2,13.2+2.5])it(n,et+.15,et+.55,12.4-.6,12.4+.4,5.2,7.4,D.black,{r:.08}),it(n,et,et+.75,12.4-1.8,12.4+1,7.4,7.85,D.black,{r:.2});const r=new Le;r.position.set(13.2,0,12.4+.5),n.add(r),ve(r,0,6.55,.15,1,D.jeans,{scale:[2,.95,1.45],seg:28}),G_(r,[{y:6.45,w:2.08,d:1.5,z:.12},{y:7.3,w:1.98,d:1.34,z:.06},{y:8.5,w:1.9,d:1.26},{y:9.8,w:2.04,d:1.3},{y:11,w:2.3,d:1.38},{y:11.9,w:2.42,d:1.32},{y:12.45,w:1.95,d:1.1},{y:12.9,w:1.05,d:.86,z:-.04},{y:13.1,w:.8,d:.74,z:-.04}],D.jersey);const s=[2.28,12.05,.05];for(const et of[-1,1])ve(r,et*s[0],s[1],s[2],.68,D.jersey,{scale:[1,.95,.95],seg:22}),ve(r,et*s[0],s[1],s[2],.7,D.maroon,{scale:[1,.95,.95],seg:22,thetaLength:.75,cast:!1});ce(r,0,-.04,.86,12.95,13.25,D.maroon,{rTop:.8}),ce(r,0,-.04,.74,12.5,13.75,D.skin);for(const et of[-1,1]){const At=Nt(13.2+et*1,6.5,13),St=Nt(13.2+et*1.25,6.3,12.4-4.4),G=Nt(13.2+et*1.3,1.05,12.4-4.1);Me(n,At,St,.9,D.jeans,{rb:.74}),ve(n,St.x,St.y,St.z,.76,D.jeans,{seg:18}),Me(n,St,G,.7,D.jeans,{rb:.5});const K=new Le;K.position.set(G.x,0,G.z),n.add(K),it(K,-.62,.62,-2.25,.85,.3,1.1,D.white,{r:.34}),it(K,-.64,.64,-2.3,.9,0,.32,D.darkm,{r:.12,cast:!1}),it(K,-.3,.3,-1.6,-.1,1.1,1.17,D.maroon,{sharp:!0,cast:!1})}const o=3.85,a=3.2,l=[];for(const et of[-1,1]){const At=new Le;n.add(At),ce(At,0,0,.6,0,o*.52,D.jersey,{rTop:.56}),ce(At,0,0,.58,o*.52-.18,o*.52+.04,D.maroon,{cast:!1}),ce(At,0,0,.55,o*.52,o,D.skin,{rTop:.48}),ve(At,0,o,0,.5,D.skin,{seg:18});const St=new Le;n.add(St),ce(St,0,0,.49,0,a,D.skin,{rTop:.4}),ve(St,0,a,0,.4,D.skin,{seg:16});const G=Nt(13.2+et*1.15,9.4,7.9);ve(n,G.x-et*.05,G.y-.12,G.z-.68,1,D.skin,{scale:[.5,.2,.62],seg:18});for(let K=0;K<4;K++){const vt=G.x-et*.05+(K-1.5)*.25,Lt=Nt(vt,9.26,6.68),Rt=Nt(vt+(K-1.5)*.02,8.98,6.1);Me(n,Lt,Rt,.115,D.skin,{rb:.1})}Me(n,Nt(G.x-et*.42,9.28,7.4),Nt(G.x-et*.88,9.03,6.95),.13,D.skin,{rb:.11}),l.push({upper:At,fore:St,shoulder:Nt(et*s[0],s[1],s[2]),wrist:G,pole:Nt(et*.55,-1,.25).normalize()})}const c=new w,u=new w,h=new w,f=new w,p=new w;function g(){r.updateMatrix();for(const et of l){c.copy(et.shoulder).applyMatrix4(r.matrix),u.subVectors(et.wrist,c);const At=Math.min(u.length(),o+a-.02);u.normalize();const St=rs((o*o+At*At-a*a)/(2*o*At),-1,1),G=Math.sqrt(1-St*St);h.copy(et.pole).addScaledVector(u,-et.pole.dot(u)).normalize(),f.copy(c).addScaledVector(u,o*St).addScaledVector(h,o*G),et.upper.position.copy(c),et.upper.quaternion.setFromUnitVectors(ts,p.subVectors(f,c).normalize()),p.subVectors(et.wrist,f);const K=p.length();et.fore.position.copy(f),et.fore.quaternion.setFromUnitVectors(ts,p.normalize()),et.fore.scale.set(1,K/a,1)}}g();const _=new Le;_.position.set(13.2,13.6,12.4+.45),_.rotation.order="YXZ",n.add(_);const m=1.08,d=1.12,T=[1,1.14,1.05];ve(_,0,m,0,d,D.skin,{scale:T,seg:40});for(const et of[-1,1])ve(_,et*1.1,m-.02,-.02,.32,D.skin,{seg:14,scale:[.42,1,.78]});for(const et of[-1,1]){ve(_,et*.42,m+.1,-1,.15,D.eyeWhite,{seg:14,scale:[1,.8,.7]}),ve(_,et*.42,m+.1,-1.1,.075,D.iris,{seg:12}),Me(_,Nt(et*.18,m+.5,-1.06),Nt(et*.74,m+.46,-.9),.07,D.hair,{rb:.05,cast:!1}),ns(_,et*.47,m+.09,-1.2,.33,.032,D.rim,{axis:"z",seg:40,cast:!1}).scale.set(1,.94,1);const St=new ne(new Eo(.31,32),D.lens);St.position.set(et*.47,m+.09,-1.2),St.scale.set(1,.94,1),_.add(St),Me(_,Nt(et*.8,m+.12,-1.17),Nt(et*1.12,m+.16,-.2),.03,D.rim,{cast:!1})}es(_,-.15,.15,m+.14,-1.22,.03,D.rim,{cast:!1}),Me(_,Nt(0,m+.12,-1.12),Nt(0,m-.2,-1.3),.1,D.skinShade,{rb:.14,cast:!1});const S=Math.PI*1.5,x=d+.045;ve(_,0,m,0,x,D.beard,{scale:T,seg:40,phiStart:S-.78,phiLength:1.56,thetaStart:2,thetaLength:.82,cast:!1});for(const et of[-1,1])ve(_,0,m,0,x,D.beard,{scale:T,seg:24,phiStart:S+(et>0?.62:-1.72),phiLength:1.1,thetaStart:1.72,thetaLength:1,cast:!1});for(const et of[-1,1])Me(_,Nt(0,m-.3,-1.17),Nt(et*.4,m-.42,-1.06),.09,D.beard,{rb:.07,cast:!1});Me(_,Nt(-.2,m-.46,-1.13),Nt(.2,m-.46,-1.13),.03,D.lip,{cast:!1});const R=Nt(0,m+.08,.08),C=.48,L=1.72,F=new Ti(d+.09,40,28,0,Math.PI*2,0,L);F.rotateX(C);const M=new ne(F,D.hair);M.position.copy(R),M.scale.set(...T),M.castShadow=M.receiveShadow=!0,_.add(M);const y=new Hu(new Ti(1,10,7),D.hair,120);y.castShadow=y.receiveShadow=!0,_.add(y);const P=Fl(23),N=Nt(0,Math.cos(C),Math.sin(C)),z=Nt(0,.8,.6).normalize(),k=new re,Z=new Gn,H=new Gn,st=new w,X=new w,ct=new w,_t=new w;let Tt=0;for(let et=0;et<300&&Tt<120;et++){const At=1-(et+.5)/300*2,St=Math.sqrt(1-At*At),G=et*2.399963,K=Nt(Math.cos(G)*St,At,Math.sin(G)*St);if(K.angleTo(N)>L*.95||(X.set(K.x/T[0],K.y/T[1],K.z/T[2]).normalize(),ct.subVectors(K,z),ct.addScaledVector(X,-ct.dot(X)),ct.lengthSq()<1e-4))continue;ct.normalize(),_t.crossVectors(ct,X).normalize(),Z.setFromRotationMatrix(k.makeBasis(_t,ct,X)).multiply(H.setFromAxisAngle(new w(0,0,1),(P()-.5)*.9));const vt=Nt(K.x*T[0],K.y*T[1],K.z*T[2]).multiplyScalar(d+.1).add(R);y.setMatrixAt(Tt++,k.compose(vt,Z,st.set(.17+P()*.08,.34+P()*.22,.12+P()*.06)))}y.count=Tt,y.instanceMatrix.needsUpdate=!0;const kt=(et,At)=>-1.176*Math.sqrt(Math.max(0,1-(et/1.12)**2-(At/1.28)**2));for(const[et,At,St]of[[-.62,.36,-.12],[-.38,.64,-.08],[-.14,.74,-.03],[.1,.5,.06],[.34,.66,.1],[.56,.4,.15]])Me(_,Nt(et,m+.62,kt(et,.62)+.04),Nt(et+St,m+.62-At,kt(et+St,.62-At)+.12),.11,D.hair,{rb:.07,cast:!1});for(const et of[-1,1])for(const[At,St]of[[-.42,.6],[-.1,.7],[.2,.55]])Me(_,Nt(et*1.02,m+.3,At),Nt(et*1.2,m+.3-St,At+.02),.13,D.hair,{rb:.08,cast:!1});for(const[et,At,St]of[[-.9,.9,.62],[-.62,1.15,.82],[-.32,1.35,.95],[0,1.45,1],[.3,1.35,.95],[.6,1.2,.82],[.88,.95,.62]])Me(_,Nt(et,m-.45,St+.12),Nt(et*1.05,m-.45-At,.88),.2,D.hair,{rb:.09});for(const[et,At,St]of[[-.78,.62,.74],[-.42,.78,.96],[0,.85,1.04],[.42,.78,.96],[.78,.62,.74]])Me(_,Nt(et,m-.22,St+.16),Nt(et*1.05,m-.22-At,St+.06),.18,D.hair,{rb:.1,cast:!1});return an(n,13.2-2.6,13.2+2.6,12.4-2.6,12.4+2.6,.16),{head:_,torso:r,solveArms:g,at:Nt(13.2,14.65,12.4+.45)}}function Sv(n){for(const i of[16.5,21.5])it(n,23,28,0,2.3,i,i+.5,D.black,{r:.06});const[t,e]=[23.5,.9];for(let i=0;i<3;i++)for(let r=0;r<3;r++)for(let s=0;s<3;s++){if(i&&r&&s&&i<2&&r<2&&s<2)continue;const o=[D.rubik[(i+r)%6],D.rubik[(r+s+2)%6],D.rubik[(i*2+s)%6],D.rubik[(i+s+3)%6],D.rubik[(i+r*2+1)%6],D.rubik[(r+4)%6]];it(n,t+i*e/3,t+(i+1)*e/3-.03,.6+s*e/3,.6+(s+1)*e/3-.03,17+r*e/3,17+(r+1)*e/3-.03,o,{sharp:!0,cast:!1})}ce(n,26.6,1.2,.5,17,18.1,D.terracotta,{rTop:.58}),ce(n,26.6,1.2,.3,18.1,19.4,D.green);for(const[i,r,s]of[[0,1.5,0],[.45,1,.2],[-.4,1.1,-.1],[.1,.7,.45]])ve(n,26.6+i,18.1+r,1.2+s,.36,D.green,{seg:12,scale:[1.3,.8,1]});it(n,25,25.6,.5,1.7,17,18.6,D.white,{r:.04}),ce(n,24,1.1,.45,22,24.2,D.candle),ve(n,24,24.45,1.1,.12,D.flame,{cast:!1,seg:8}),ei(n,24,24.7,1.3,"#FFA040",3.5,9),ds(n,24,24.5,1.4,1.2,"#FFB060",.12),ce(n,26.4,1.1,.7,22,23.7,D.white,{rTop:.62}),it(n,25,25.7,1.3,1.6,22,23.4,D.darkm,{r:.04})}function Ev(n){const[t,e,i,r,s]=[23,28.6,.8,6.2,13.2];it(n,t,e,i,i+.5,0,s,D.shelfWood,{r:.04}),it(n,t,t+.45,i,r,0,s,D.shelfWood,{r:.04}),it(n,e-.45,e,i,r,0,s,D.shelfWood,{r:.04});for(const[u,h]of[[0,.6],[4.4,4.9],[8.8,9.3],[s-.5,s]])it(n,t,e,i,r,u,h,D.shelfWood,{r:.04});an(n,t,e,i,r,.26);const o=is(n,new je(1,1,1),D.book,14),a=Fl(5),l=["#C8302F","#2E3A5E","#E0B452","#4F79B8","#7E9C8A","#F2F0EA","#9C8AB8","#D96A5A","#2A2A30"];let c=t+.7;for(let u=0;u<14&&c<e-1;u++){const h=.3+a()*.35,f=2.3+a()*1.1,p=1.7+a()*.4;o.place(c+h/2,9.3+f/2,r-.5-p/2,h,f,p,l[Math.floor(a()*l.length)]),c+=h+.04}o.done(),it(n,t+.8,e-1.6,i+1,r-.9,4.9,7.6,D.grey,{r:.08}),it(n,t+.9,e-.9,i+1,r-.8,.6,3.6,D.weave,{r:.25}),it(n,t+.5,t+3.1,i+.7,r-1.4,s,s+2.4,D.white,{r:.08})}function Tv(n,t){const e=new Jr;if([[-2.6,0],[2.6,0],[2.6,8.6],[4.6,9.6],[4.1,12.4],[2.8,11.9],[2.8,13.9],[.9,14.7],[0,14.1],[-.9,14.7],[-2.8,13.9],[-2.8,11.9],[-4.1,12.4],[-4.6,9.6],[-2.6,8.6]].forEach(([r,s],o)=>o?e.lineTo(r*t,s*t):e.moveTo(r*t,s*t)),e.closePath(),n){const r=new Jr;return r.absellipse(0,14.6*t,2.4*t,1.6*t,0,Math.PI*2,!1,0),[e,r]}return[e]}function bv(n){const[t,e,i,r]=[30.6,40.6,5.6,17.8];for(const a of[t,e-.5]){it(n,a,a+.5,i-1.9,i+1.9,0,.45,D.metal,{r:.1}),ce(n,a+.25,i,.2,.45,r-.2,D.metal);for(const l of[-1.7,1.7])ve(n,a+.25,.2,i+l,.2,D.black,{seg:10})}es(n,t,e,r,i,.2,D.metal),es(n,t+.25,e-.25,1.6,i,.12,D.metal,{cast:!1});const s=["grey","navy","red","hoodie","spain"],o=.55;s.forEach((a,l)=>{const c=31.9+l*1.9,u=new Qr(Tv(a==="hoodie",o),{depth:.3,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:3}),h=new ne(u,D.shirt[a]);h.rotation.y=Math.PI/2,h.position.set(c,r-8.5,i),h.castShadow=h.receiveShadow=!0,n.add(h);const f=r-8.5+14.7*o;for(const p of[-2.4,2.4])Me(n,Nt(c+.15,f-.1,i+p),Nt(c+.15,r-.5,i),.06,D.metal,{cast:!1});if(ar(n,i-2.4,i+2.4,c+.15,f-.1,.06,D.metal,{cast:!1}),ns(n,c+.15,r-.1,i,.32,.05,D.metal,{axis:"x",arc:Math.PI*1.5,rotZ:Math.PI*.75,cast:!1}),a==="spain"){it(n,c+.3,c+.42,i-.55,i+.55,f-.9,f-.3,D.maroon,{sharp:!0,cast:!1});for(const p of[-1,1])it(n,c+.3,c+.42,i+p*2.25-.35,i+p*2.25+.35,f-2.8,f-1.3,D.maroon,{sharp:!0,cast:!1})}})}function Av(n,t){ve(n,29.5,1.22,11.5,1.22,bt("#FFFFFF",{map:t.ball}),{seg:56}).rotation.set(.4,.6,.2),an(n,28.4,30.6,10.4,12.6,.3)}function uu(n,t,e,i,r){const s=Fl(r);let o=0;for(let a=0;a<4;a++)for(let l=0;l<3;l++,o++){const c=t+(l-1)*1.55+(s()-.5)*.3,u=e+(1.5-a)*1.95+(s()-.5)*.3,h=sn(n,"+x",.06+o%3*.004,c-.55,c+.55,u-.72,u+.72,bt("#FFFFFF",{map:i.photos[(o+r)%12]}));h.rotation.x=(s()-.5)*.14}}function wv(n){const i=Qi(bt("#F4F1EC"),"#FF4A22",2.2,{dark:"#5A2A20",opacity:.8});ar(n,17.4,34,.75,25.6,.3,i,{cast:!1});for(const r of[16.9,34])ar(n,r,r+.5,.75,25.6,.36,D.black,{cast:!1});for(const r of[19,25.7,32.4])es(n,0,.75,25.6,r,.07,D.metal,{cast:!1});for(const r of[20.2,25.7,31.2])ei(n,2.4,25.6-.3,r,"#FF5A2A",24,30);for(const r of[19.5,25.7,31.9])ds(n,1.4,25.6,r,7,"#FF6A3A",.12)}function Rv(n){const[t,e,i,r]=[.9,4.9,39.6,43.6];for(const[f,p]of[[t,i],[e-.4,i],[t,r-.4],[e-.4,r-.4]])it(n,f,f+.4,p,p+.4,0,17.4,D.black,{r:.05});for(const f of[.5,6.4,12.3])it(n,t,e,i,r,f,f+.5,D.black,{r:.05});an(n,t,e,i,r,.3),it(n,t+.5,e-.5,i+.6,r-.6,6.9,9.4,D.darkm,{r:.15}),ce(n,t+2,r-.58,.8,8.15,8.25,D.black,{cast:!1}).rotation.x=Math.PI/2,ce(n,t+2,r-.58,.3,8.15,8.28,D.grey,{cast:!1}).rotation.x=Math.PI/2;const s=is(n,new je(1,1,1),D.book,7),o=["#C8302F","#4F79B8","#E0B452","#2A2A30","#7E9C8A","#F2F0EA","#9C8AB8"];let a=t+.6;for(let f=0;f<7;f++){const p=.35+f%3*.12,g=2.2+f%4*.3;s.place(a+p/2,1+g/2,i+2,p,g,2.6,o[f]),a+=p+.05}s.done(),ce(n,t+2,i+2,.55,12.8,13.4,D.white),ce(n,t+2,i+2,.25,13.4,14.3,D.green);for(const[f,p,g]of[[0,1.1,0],[.4,.8,.2],[-.4,.9,-.2]])ve(n,t+2+f,13.4+p,i+2+g,.32,D.green,{seg:12,scale:[1.3,.7,1]});const l=(t+e)/2,c=(i+r)/2;ce(n,l,c,2.5,17.4,21.9,D.shadeFabric,{seg:40,cast:!1,receive:!1}),ns(n,l,17.45,c,2.5,.06,D.black,{axis:"y",seg:40,cast:!1}),ns(n,l,21.85,c,2.5,.06,D.black,{axis:"y",seg:40,cast:!1}),ce(n,l,c,.25,17.4,19.1,D.black,{cast:!1}),ve(n,l,19.6,c,.55,D.bulb,{cast:!1,seg:16});const u=new wc("#FFB85A",0,70,1.25,.55,2);u.position.set(l,19.4,c),u.target.position.set(l,0,c),u.castShadow=!0,u.shadow.mapSize.set(1024,1024),u.shadow.bias=-.003,u.shadow.normalBias=.04,u.shadow.camera.near=2,u.shadow.camera.far=60,Ue(u,"intensity",0,420*ll),n.add(u,u.target);const h=new wc("#FFC070",0,40,1.1,.6,2);h.position.set(l,19.8,c),h.target.position.set(l,40,c),Ue(h,"intensity",0,160*ll),n.add(h,h.target),ei(n,l,19.6,c,"#FFB85A",90,40),ds(n,l,19.6,c,7,"#FFC46A",.2)}function Cv(n,t){const e=new ne(new Eo(4.2,64),bt("#FFFFFF",{map:t.rug,transparent:!0}));e.rotation.x=-Math.PI/2,e.position.set(7.8,.05,27),e.receiveShadow=!0,n.add(e)}function Pv(n,t){const[e,i,r,s]=[14,38,29,44];it(n,e,i,r,s,0,3,D.bedframe,{r:.25}),it(n,e-.3,e+.3,r-.3,s+.3,0,7.6,D.bedframe,{r:.15}),it(n,e+.5,i-.5,r+.5,s-.5,3,5.4,D.sheet,{r:.6}),an(n,e,i,r,s,.3),it(n,22,i-.6,r+.8,s-.3,5.4,6.6,D.blanket,{r:.55}),it(n,22,24.6,r+.8,s-.3,6.6,7.3,D.blanket,{r:.35}),it(n,22,i-.6,s-.5,s+.2,3.4,5.6,D.blanket,{r:.3});for(const[a,l]of[[r+1.2,r+7],[r+7.8,r+13.8]])it(n,e+1,e+7,a,l,5.4,6.8,D.pillow,{r:.7});const o=new Le;o.position.set(18.4,6.8,32.6),o.rotation.y=-.22,n.add(o),it(o,-.8,.8,-1.6,1.6,0,.2,D.psBlack,{r:.08}),ms.contact=sn(o,"+y",.205,-.7,.7,-1.5,1.5,zn("#FFFFFF",{map:t.phone})),ei(o,0,.8,0,"#FFD9A8",4,7)}function Lv(n){for(let r=0;r<5;r++){const s=r*Math.PI*2/5+.7,o=31+Math.cos(s)*2.6,a=20.6+Math.sin(s)*2.6;Me(n,Nt(31,.55,20.6),Nt(o,.45,a),.2,D.black),ve(n,o,.3,a,.3,D.darkm,{seg:14})}ce(n,31,20.6,.3,.5,4.3,D.chrome),it(n,31-2.1,31+2.1,20.6-2.1,20.6+2,4.3,5.2,D.black,{r:.4});const i=fs(n,31,5,20.6+2,"x",.12);it(i,-2,2,0,.5,0,5.8,D.mesh,{r:.3}),it(i,-2.05,2.05,.05,.45,0,5.8,D.black,{r:.1,cast:!1}),it(i,-1.9,1.9,.5,.9,.3,1.2,D.black,{r:.1}),it(i,-.3,.3,.1,.4,5.8,6.5,D.black,{sharp:!0}),it(i,-1.3,1.3,-.2,.5,6.5,8,D.black,{r:.3});for(const r of[31-2.7,31+2.1])it(n,r+.15,r+.45,20.6-.5,20.6+.3,5.2,6.9,D.black,{r:.06}),it(n,r,r+.6,20.6-1.5,20.6+1,6.9,7.25,D.black,{r:.15});an(n,31-2.4,31+2.4,20.6-2.4,20.6+2.4,.18)}function Dv(n){for(const[t,e,i]of[[17,26.4,.1],[18.8,26.6,-.08]]){const r=new Le;r.position.set(t,0,e),r.rotation.y=i,n.add(r),it(r,-.65,.65,-1.5,1.5,0,.35,D.grey,{r:.2}),it(r,-.6,.6,-1.3,-.2,.35,.95,D.darkm,{r:.3})}it(n,39.6,42,29.6,31.4,0,4.8,D.black,{r:.5}),it(n,39.4,42.2,29.4,31.6,4.8,5.6,D.darkm,{r:.4}),it(n,40,41.6,31.4,31.7,1,2.2,D.darkm,{r:.1,cast:!1}),Me(n,Nt(39.8,5.4,30.5),Nt(40.3,6.6,30.5),.12,D.darkm),Me(n,Nt(41.8,5.4,30.5),Nt(41.3,6.6,30.5),.12,D.darkm),an(n,39.6,42,29.6,31.4,.3),ce(n,36.5,24,.4,0,2.6,bt("#6C8BC8")),ce(n,36.5,24,.3,2.6,3,D.white)}let Or=null;function Fv(n){const t=new mr({colorWrite:!1,depthWrite:!1,side:Ke}),e=()=>{const i=new ne(new _r(1,1),t);return i.castShadow=!0,i.receiveShadow=!1,i.frustumCulled=!1,i.userData.noPick=!0,n.add(i),i};Or={strips:[e(),e(),e(),e()],bars:[e(),e()]},Iv(0)}function Iv(n){if(!Or)return;const{x0:t,x1:e,y0:i,y1:r}=ou,s=ou.z+.6,o=120,a=(t+e)/2,l=(i+r)/2,c=(e-t)/2+n*o,u=(r-i)/2+n*o,h=(T,S,x,R,C)=>{T.position.set((S+x)/2,(R+C)/2,s),T.scale.set(Math.max(.001,x-S),Math.max(.001,C-R),1)},[f,p,g,_]=Or.strips;h(f,a-o,a-c,l-o,l+o),h(p,a+c,a+o,l-o,l+o),h(g,a-c,a+c,l+u,l+o),h(_,a-c,a+c,l-o,l-u);const m=.3*(1-n);h(Or.bars[0],a-m,a+m,l-u,l+u);const d=i+(r-i)*.64;h(Or.bars[1],a-c,a+c,d-m,d+m)}const Ks=()=>new Promise(n=>requestAnimationFrame(()=>n()));async function Uv(n){const t={tiles:J_(),weave:$_(),mac:K_(),deck:j_(),code:Q_(),dev:tv(),phone:ev(),snoopy:nv(),neon:su(),neonOff:su(!0),rug:rv(),ball:sv(),corridor:ov(),photos:Array.from({length:12},(s,o)=>iv(o)),journal:av()};D=lv(t),await Ks();const e={};for(const s of Object.keys(au)){const o=au[s].rect,[a,l,c,u]=o,h=new Le;h.name=s;const f=new w((a+l)/2,0,(c+u)/2);h.position.copy(f);const p=new Le;p.position.copy(f).negate(),h.add(p),cv(p,o,t),e[s]={name:s,rect:o,centre:f,g:h,inner:p,lift:0,liftGoal:0},n.add(h)}const i=e;lu(i.battle.inner,0,17,t),cu(i.battle.inner,0,22),fv(i.battle.inner,t),dv(i.battle.inner,t),uv(i.battle.inner,t),pv(i.battle.inner),mv(i.battle.inner,t),yv(i.battle.inner);const r=Mv(i.battle.inner);return await Ks(),cu(i.rack.inner,22,44),Sv(i.rack.inner),Ev(i.rack.inner),bv(i.rack.inner),Av(i.rack.inner,t),await Ks(),lu(i.door.inner,17,44,t,{doorway:!0}),uu(i.door.inner,20,19.5,t,0),uu(i.door.inner,37.8,19.5,t,4),wv(i.door.inner),Rv(i.door.inner),Cv(i.door.inner,t),await Ks(),Pv(i.bed.inner,t),Lv(i.bed.inner),Dv(i.bed.inner),Fv(i.door.inner),{pieces:e,figure:r}}const Nv=matchMedia("(prefers-reduced-motion: reduce)").matches,Kn=n=>new Promise(t=>setTimeout(t,Nv?0:n)),we=(n,t,e)=>{const i=document.createElement(n);return t&&(i.className=t),e!==void 0&&(i.textContent=e),i},Gr=["about","work","projects","skills","contact"];function Ov({go:n,theme:t,clock:e}){const i=document.getElementById("screens"),r=Object.fromEntries(Gr.map(j=>[j,i.querySelector(`[data-screen="${j}"]`)])),s=j=>r[j];for(const j of i.querySelectorAll("[data-go]"))j.addEventListener("click",()=>n(j.dataset.go));const o=new Set,a=()=>{const j=e();for(const b of document.querySelectorAll("[data-clock]"))b.textContent=j};a(),setInterval(a,15e3);const l=s("about"),c=l.querySelector(".pages"),u=l.querySelector(".folio"),h=Math.ceil(c.querySelectorAll(".page").length/2);let f=0,p=!1;function g(j){f=j;for(const b of c.querySelectorAll(".page"))b.hidden=Math.floor(+b.dataset.page/2)!==j;u.textContent=`${j+1} / ${h}`,l.querySelector('[data-turn="-1"]').disabled=j===0,l.querySelector('[data-turn="1"]').disabled=j===h-1}async function _(j){const b=f+j;if(p||b<0||b>=h)return;p=!0;const q=[...c.querySelectorAll(".page")].filter(ot=>!ot.hidden),J=we("div",`leaf ${j>0?"fwd":"back"}`),Q=we("div","face front"),tt=we("div","face back");Q.append((j>0?q[1]:q[0]).cloneNode(!0)),g(b);const pt=[...c.querySelectorAll(".page")].filter(ot=>!ot.hidden);tt.append((j>0?pt[0]:pt[1]).cloneNode(!0));for(const ot of[Q,tt])for(const mt of ot.querySelectorAll(".page"))mt.hidden=!1;J.append(Q,tt),c.append(J),await Kn(620),J.remove(),p=!1}l.querySelectorAll("[data-turn]").forEach(j=>j.addEventListener("click",()=>_(+j.dataset.turn))),g(0);const m=s("work"),d=[...m.querySelectorAll(".file")];function T(j){d.forEach((b,q)=>b.toggleAttribute("aria-current",q===j));for(const b of m.querySelectorAll(".doc"))b.classList.toggle("on",+b.dataset.f===j);m.querySelector("#ed-tab").textContent=d[j].textContent,m.querySelector("#ed-status").textContent=d[j].textContent,m.querySelector(".docs").scrollTop=0}d.forEach((j,b)=>j.addEventListener("click",()=>T(b))),m.addEventListener("keydown",j=>{if(j.key!=="ArrowDown"&&j.key!=="ArrowUp")return;const q=(d.findIndex(J=>J.hasAttribute("aria-current"))+(j.key==="ArrowDown"?1:d.length-1))%d.length;T(q),d[q].focus({preventScroll:!0}),j.preventDefault()});const S=s("projects"),x=S.querySelector(".grid"),R=S.querySelector(".win-back"),C=S.querySelector(".win-title"),L=S.querySelector(".win-count");function F(j){x.hidden=j!==null,R.hidden=j===null,L.hidden=j!==null;for(const b of S.querySelectorAll(".detail"))b.hidden=+b.dataset.p!==j;C.textContent=j===null?"Projects":S.querySelector(`.detail[data-p="${j}"] h2`).textContent,S.querySelector(".win-body").scrollTop=0,(j===null?x.querySelector(".card"):R).focus({preventScroll:!0})}S.querySelectorAll(".card").forEach(j=>j.addEventListener("click",()=>F(+j.dataset.p))),R.addEventListener("click",()=>F(null));const M=s("skills"),y=M.querySelector("#term-out"),P=M.querySelector("#term-input"),N=M.querySelector(".term"),z=[];let k=0,Z=!1;const H=(j,b="")=>{const q=we("p",`tl ${b}`,j);return y.append(q),N.scrollTop=N.scrollHeight,q},st=j=>{const b=we("p","tl cmd");b.append(we("span","ps","mihir@room ~ %"),document.createTextNode(" "+j)),y.append(b)},X=[["languages","Python · TypeScript · JavaScript · SQL · C/C++ · Java"],["frameworks","React · Next.js · Node.js · Flask · FastAPI · REST APIs"],["cloud","AWS · GCP · Docker · CI/CD · GitHub Actions"],["ai & agents","LangChain · LangGraph · MCP · Context engineering · Fine-tuning · Claude Code · Cursor · Kiro"]],ct={help:()=>{H("commands","head");for(const[j,b]of[["skills","what I work with"],["whoami","one line about me"],["ls","what is in this room"],["open <name>","go to it: about, work, projects, contact"],["theme day | night","switch the lights"],["date","the time here"],["clear","clear the screen"],["exit","back to the room"]]){const q=we("p","tl row");q.append(we("span","k",j),we("span","v",b)),y.append(q)}},skills:async()=>{for(const[j,b]of X){const q=we("p","tl row");q.append(we("span","k",j),we("span","v",b)),y.append(q),N.scrollTop=N.scrollHeight,await Kn(90)}},whoami:()=>H("mihir okte. software engineer at amazon, bengaluru. iit delhi, maths and computing, 2023."),ls:()=>H("about/journal    work/laptop    projects/macbook    skills/this-monitor    contact/phone"),date:()=>H(`${e()} in bengaluru`),clear:()=>{y.textContent=""},exit:()=>n("room"),room:()=>n("room"),sudo:()=>H("nice try.")};async function _t(j){const b=j.trim().replace(/\s+/g," ");if(st(b),!b)return;z.push(b),k=z.length;const[q,...J]=b.toLowerCase().split(" ");if(q==="open"||q==="cd"||q==="cat"){const Q=(J[0]||"").replace(/\/.*$/,"");Gr.includes(Q)&&Q!=="skills"?(H(`opening ${Q}`),await Kn(260),n(Q)):H(Q==="skills"?"you are looking at it.":"usage: open about | work | projects | contact")}else q==="theme"?J[0]==="day"||J[0]==="night"?(t(J[0]),H(`lights: ${J[0]}`)):H("usage: theme day | night"):ct[q]?await ct[q](J):H(`zsh: command not found: ${q}. try help`,"err");N.scrollTop=N.scrollHeight}async function Tt(j){Z=!0,P.value="";for(const b of j)P.value+=b,await Kn(55);await Kn(140),P.value="",await _t(j),Z=!1}P.addEventListener("keydown",j=>{if(Z){j.preventDefault();return}if(j.key==="Enter"){const b=P.value;P.value="",_t(b)}else j.key==="ArrowUp"&&z.length?(k=Math.max(0,k-1),P.value=z[k],j.preventDefault()):j.key==="ArrowDown"&&z.length&&(k=Math.min(z.length,k+1),P.value=z[k]??"",j.preventDefault());j.stopPropagation()}),M.addEventListener("click",j=>{!j.target.closest("button, a")&&!getSelection().toString()&&P.focus({preventScroll:!0})}),M.querySelectorAll("[data-cmd]").forEach(j=>j.addEventListener("click",()=>{Z||Tt(j.dataset.cmd)}));const kt=s("contact"),et=kt.querySelector("#thread"),At=kt.querySelector("#chat-state"),St=kt.querySelector("#replies"),G=(j,b)=>{const q=we("li",`msg ${j}`);return q.append(b),et.append(q),et.scrollTop=et.scrollHeight,q};async function K(j,{link:b=null}={}){At.textContent="Typing…";const q=G("them typing",we("span","dots"));if(q.firstChild.append(we("i"),we("i"),we("i")),await Kn(520+Math.min(900,j.length*14)),q.remove(),At.textContent="Online",b){const J=we("a","link",j);J.href=b,b.startsWith("mailto:")||(J.target="_blank",J.rel="noopener"),G("them",J)}else G("them",document.createTextNode(j))}let vt=!1;St.querySelectorAll("button").forEach(j=>j.addEventListener("click",async()=>{vt||(vt=!0,j.setAttribute("aria-pressed","true"),G("me",document.createTextNode(j.textContent)),await Kn(200),await K(j.dataset.text,{link:j.dataset.href}),vt=!1)}));async function Lt(j){const b=s(j),q=!o.has(j);o.add(j),b.classList.remove("awake"),b.classList.add("booting"),await Kn(q?520:160),b.classList.remove("booting"),b.classList.add("awake"),j==="skills"?(P.focus({preventScroll:!0}),q&&(H("last login: today, on the monitor in my room","dim"),await Tt("skills"),H("type help, or pick a command below.","dim"))):j==="contact"?(q&&(vt=!0,await K("Hey, I'm Mihir."),await K("Quickest way to reach me is email. Pick one and I'll send it over."),vt=!1),St.querySelector("button")?.focus({preventScroll:!0})):j==="work"?m.querySelector(".file[aria-current]")?.focus({preventScroll:!0}):j==="projects"?(x.hidden?R:x.querySelector(".card")).focus({preventScroll:!0}):l.querySelector('[data-turn="1"]').focus({preventScroll:!0})}function Rt(j){s(j)?.classList.remove("awake","booting")}function Kt(){for(const j of Gr)Lt(j)}return{boot:Lt,sleep:Rt,bootAll:Kt,element:s}}const Bv="#F3EEE4",hu=hs.degToRad(45),da=Math.atan(1/Math.SQRT2),hh=12,zv=36,kv=new w(22,12,22),Hv=[.05,.95,.09,.93],Vv=[.04,.96,.08,.62],Gv={w:.8,h:.74,y:.47},Wv={w:.94,h:.7,y:.45},Xv=2.1,qv=1.6,Yv=1.7,fu={yaw:.05,pitch:.028},du=150,Zv=.09,Jv=-2,$v=-.42,ro=matchMedia("(prefers-reduced-motion: reduce)").matches,ss=new URLSearchParams(location.search),lr=ss.has("still"),vo=ss.has("look")?rs(+ss.get("look")):null;lr&&document.body.classList.add("still");const ni=n=>document.getElementById(n),cr=ni("stage"),Kv=ni("view"),jv=ni("pins"),Fr=ni("loader"),fh=ni("nav");await Promise.race([Promise.all(["400 16px Inter","600 16px Inter"].map(n=>document.fonts.load(n))),new Promise(n=>setTimeout(n,1500))]);const Qv=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Kolkata",hour:"2-digit",minute:"2-digit",hour12:!1}),tx=()=>Qv.format(new Date),ul=ni("theme"),ex=ss.has("theme")?ss.get("theme")==="day"?0:1:null;let Bn=ex??(document.documentElement.dataset.theme==="day"?0:1),Yi=Bn;function Il(n,t=!0){if(Bn=n,document.documentElement.dataset.theme=n?"night":"day",ul.querySelector("span").textContent=n?"Night":"Day",ul.setAttribute("aria-label",n?"switch to day":"switch to night"),t)try{localStorage.setItem("theme",n?"night":"day")}catch{}}Il(Bn,!1);ul.addEventListener("click",()=>Il(Bn?0:1));const gs=Ov({go:n=>n==="room"?xr():_s(n),theme:n=>Il(n==="night"?1:0),clock:tx});let pu=!1,yn=null;try{yn=new k_({canvas:Kv,antialias:!0,alpha:!0,stencil:!0,powerPreference:"high-performance"})}catch(n){console.warn("WebGL unavailable, falling back to the screens as a page",n)}const gn=!!yn;gn||(document.body.classList.add("nogl","ready"),gs.bootAll(),Mh());gn&&(yn.setPixelRatio(Math.min(devicePixelRatio,2)),yn.shadowMap.enabled=!0,yn.shadowMap.type=dl,yn.toneMapping=kn,yn.setClearColor(Bv,0));const ii=new ad,Re=new We(hh,1,1,2e3),nx=new w(Math.sin(hu)*Math.cos(da),Math.sin(da),Math.cos(hu)*Math.cos(da)),Ul=new ep("#FFF6EA",.95);Ue(Ul,"intensity",.95,.34);Ue(Ul,"color",new Vt("#FFF6EA"),new Vt("#5C6A8C"));ii.add(Ul);const ur=new eh("#FFFFFF",2);ur.position.set(-.5,.85,.25).multiplyScalar(100).add(new w(22,0,22));ur.target.position.set(22,0,22);Ue(ur,"intensity",2,.46);Ue(ur,"color",new Vt("#FFFFFF"),new Vt("#6E7A9A"));ii.add(ur,ur.target);const ix=new w(-.358,.53,.769),mn=new eh("#FFF0DA",2.8);mn.position.copy(ix).multiplyScalar(130).add(new w(22,0,22));mn.target.position.set(22,0,22);mn.castShadow=!0;mn.shadow.mapSize.set(3072,3072);Object.assign(mn.shadow.camera,{left:-80,right:80,top:70,bottom:-70,near:20,far:320});mn.shadow.bias=-2e-4;mn.shadow.normalBias=.04;Ue(mn,"intensity",2.8,.2);Ue(mn,"color",new Vt("#FFF0DA"),new Vt("#7E94C2"));ii.add(mn,mn.target);const{pieces:dh,figure:yi}=gn?await Uv(ii):{pieces:{},figure:null},rx={x:-2,y:-5,z:-2,w:xe.L+2,h:xe.H+xe.SLAB},fi={r:5,up:3,fade:3.8,alpha:.34},xo=(()=>{const n=[],t=[],{x:e,y:i,z:r,w:s,h:o}=rx;for(let h=-5;h<=fi.r;h++)for(let f=-3;f<=fi.up;f++)for(let p=-5;p<=fi.r;p++){const g=e+h*s,_=i+f*o,m=r+p*s,d=Math.hypot(h,f*1.15,p),T=fi.alpha*Math.pow(Math.max(0,1-d/fi.fade),1.4);if(!(T<.01))for(const[S,x,R]of[[s,0,0],[0,o,0],[0,0,s]]){n.push(g,_,m,g+S,_+x,m+R);const C=Math.hypot(h+S/s,(f+x/o)*1.15,p+R/s),L=fi.alpha*Math.pow(Math.max(0,1-C/fi.fade),1.4);t.push(1,1,1,T,1,1,1,Math.max(L,T*.35))}}const a=new Pe;a.setAttribute("position",new ie(n,3)),a.setAttribute("color",new ie(t,4));const l=new Vu({vertexColors:!0,transparent:!0,depthWrite:!1,stencilWrite:!0,stencilRef:1,stencilFunc:hf,stencilFail:On,stencilZFail:On,stencilZPass:On});Ue(l,"color",new Vt("#1D1D21"),new Vt("#B4B0A8"));const c=new md(a,l);c.renderOrder=10,c.frustumCulled=!1;const u=new ne(new je(s+.6,o+.6,s+.6),new mr({colorWrite:!1,depthWrite:!1,depthTest:!1,side:Ke,stencilWrite:!0,stencilRef:1,stencilFunc:nl,stencilZPass:uf}));return u.position.set(e+s/2,i+o/2,r+s/2),u.renderOrder=-10,{lines:c,mark:u,segments:n.length/6}})();gn&&ii.add(xo.mark,xo.lines);lh(Yi);const Mn={};if(gn){ii.updateMatrixWorld(!0);for(const n of Gr){const t=ms[n],e=new w,i=new Gn,r=new w;t.matrixWorld.decompose(e,i,r);const{width:s,height:o}=t.geometry.parameters,a=new w(0,0,1).applyQuaternion(i),l={section:n,mesh:t,centre:e,quat:i,right:new w(1,0,0).applyQuaternion(i),up:new w(0,1,0).applyQuaternion(i),out:a,w:s*r.x,h:o*r.y};l.aspect=l.w/l.h,l.el=gs.element(n);const c=ch.find(u=>u.section===n);l.via=new w(...c.via),l.fov=c.fov,Mn[n]=l}}const ph=(gn?ch:[]).map(n=>{const t=document.createElement("button");return t.className="pin",t.type="button",t.dataset.section=n.section,t.dataset.side=n.side,t.innerHTML=`<i></i><span>${n.section[0].toUpperCase()+n.section.slice(1)}</span>`,t.setAttribute("aria-label",`go to ${n.section}`),t.addEventListener("click",e=>{e.stopPropagation(),_s(n.section)}),jv.appendChild(t),{el:t,pin:n,local:new w(...n.at),piece:dh[n.piece]}});fh.querySelectorAll("[data-to]").forEach(n=>n.addEventListener("click",t=>{t.stopPropagation();const e=n.dataset.to;e==="room"?xr():_s(e)}));let pn=0,ke=0,so=!1,Ce=null,hr=!1,pa=Gr.includes(location.hash.slice(1))?location.hash.slice(1):null,Ao=!1,os=!0,as=null,_i=0,jn=0;const ls=new ft(-1,-1),mu=new ft,Ge={x:0,y:0,gx:0,gy:0},fn=new w,gu=new ip;let hl=null,Ee=null;const cs=n=>n.pos??n.aim.clone().addScaledVector(n.dir,n.dist);function fr(n){const t=cs(n);hl={pos:t,aim:n.aim.clone(),up:n.up.clone(),fov:n.fov,clip:n.clip},Re.position.copy(t),Re.up.copy(n.up),Re.lookAt(n.aim),Re.fov=n.fov,Re.aspect=pn/ke;const e=t.distanceTo(n.aim);Re.near=Math.max(.02,e*.02,n.clip??0),Re.far=e*4+400,Re.updateProjectionMatrix(),Re.updateMatrixWorld(),os=!0}function sx(n,[t,e,i,r],s,o){const a=t*2-1,l=e*2-1,c=1-r*2,u=1-i*2,h={aim:kv.clone(),dir:s.clone(),dist:300,up:new w(0,1,0),fov:o},f=new w,p=new w;for(let g=0;g<10;g++){fr(h);let _=1e9,m=-1e9,d=1e9,T=-1e9;for(const R of n)fn.copy(R).project(Re),_=Math.min(_,fn.x),m=Math.max(m,fn.x),d=Math.min(d,fn.y),T=Math.max(T,fn.y);const S=h.dist*Math.tan(hs.degToRad(o/2)),x=S*Re.aspect;f.setFromMatrixColumn(Re.matrixWorld,0),p.setFromMatrixColumn(Re.matrixWorld,1),h.aim.addScaledVector(f,((_+m)/2-(a+l)/2)/2*x).addScaledVector(p,((d+T)/2-(c+u)/2)/2*S),h.dist*=Math.max((m-_)/(l-a),(T-d)/(u-c))}return h}const qi=2.6,ox=[[-2,xe.H,-2],[-2,xe.H,xe.L],[xe.L,xe.H,-2],[-2,-5,xe.L],[xe.L,-5,-2],[xe.L,-5,xe.L],[-2+qi,-5-.6,xe.L+qi],[xe.L+qi,-5-.6,-2+qi],[xe.L+qi,-5-.6,xe.L+qi]].map(n=>new w(...n));let Br=null;function Nl(){const n={...Br,aim:Br.aim.clone(),up:Br.up.clone()};n.dir=Br.dir.clone().applyAxisAngle(new w(0,1,0),Ge.x*fu.yaw);const t=new w().crossVectors(n.dir,n.up).normalize();return n.dir.applyAxisAngle(t,Ge.y*fu.pitch),n}function yo(n){const t=so?Wv:Gv,e=Math.floor(Math.min(t.w*pn,t.h*ke*n.aspect)),i=Math.round(e/n.aspect),r=n.fov??zv,s=Math.tan(hs.degToRad(r/2)),o=n.w*ke/(2*s*e),a=e/n.w,l=pn/2-e/2,c=t.y*ke-i/2,u=Math.round(l)-l,h=Math.round(c)-c;return{pose:{aim:n.centre.clone().addScaledVector(n.up,(t.y-.5)*ke/a).addScaledVector(n.right,-u/a).addScaledVector(n.up,h/a),dir:n.out.clone(),dist:o,up:n.up.clone(),fov:r,clip:Math.max(0,o-2.4)},rect:{left:Math.round(l),top:Math.round(c),width:e,height:i}}}const ax=(n,t,e,i)=>{const r=cs(n),s=cs(t),o=Array.isArray(e);return{P0:r,P1:o?e[0].clone():e?e.clone():r.clone().lerp(s,.5),Q1:o?e[1].clone():null,P2:s,A0:n.aim.clone(),A2:t.aim.clone(),U0:n.up.clone(),U2:t.up.clone(),F0:n.fov,F2:t.fov,C0:n.clip??0,C2:t.clip??0,kind:i}};function mh(n,t,{via:e,kind:i="in",then:r=null}={}){if(ro||lr||!hl){fr(n),Ee=null,r?.();return}Ee={...ax(hl,n,e,i),t0:performance.now(),ms:t*1e3,then:r}}const $i=(n,t,e)=>{const i=rs((e-n)/(t-n));return i*i*(3-2*i)};function lx(n,t){const e=_o(t),i=1-e,r=n.Q1?n.P0.clone().multiplyScalar(i*i*i).addScaledVector(n.P1,3*i*i*e).addScaledVector(n.Q1,3*i*e*e).addScaledVector(n.P2,e*e*e):n.P0.clone().multiplyScalar(i*i).addScaledVector(n.P1,2*i*e).addScaledVector(n.P2,e*e),s=n.kind==="in"?1-Math.pow(1-e,3):n.kind==="out"?Math.pow(e,3):e,o=n.kind==="in"?$i(.5,1,e):n.kind==="out"?$i(0,.5,e):e,a=n.A0.clone().lerp(n.A2,s),l=new w().subVectors(a,r).normalize(),c=n.U0.clone().lerp(n.U2,o);c.addScaledVector(l,-c.dot(l)),c.lengthSq()<1e-6&&c.copy(n.U2),c.normalize();const u=n.C0*(1-$i(0,.4,e))+n.C2*$i(.6,1,e);return t>=1?{pos:n.P2.clone(),aim:n.A2.clone(),up:n.U2.clone(),fov:n.F2,clip:n.C2}:{pos:r,aim:a,up:c,fov:Nr(n.F0,n.F2,e),clip:u}}function cx(n){if(!Ee)return!1;const t=Math.min(1,(n-Ee.t0)/Ee.ms);if(Ee.prog=t,fr(lx(Ee,t)),t>=1){const e=Ee.then;Ee=null,e?.()}return!0}const _u=new w(0,11,0),ux=(n,t)=>[cs(yo(n).pose).addScaledVector(n.out,2).add(_u),cs(yo(t).pose).addScaledVector(t.out,2).add(_u)];function wo(n,t=null){for(const e of Object.values(Mn)){const i=e.section===n;e.el.classList.toggle("live",i),i&&Object.assign(e.el.style,{left:`${t.left}px`,top:`${t.top}px`,width:`${t.width}px`,height:`${t.height}px`})}}function _s(n){if(!gn||!Mn[n]||Ce===n&&(hr||Ee))return;const t=Ce;t&&(gs.sleep(t),wo(null)),Ce=n,hr=!1,document.body.classList.add("visiting"),document.body.dataset.at=n,_h(n),history.replaceState(null,"","#"+n);const{pose:e,rect:i}=yo(Mn[n]),r=t?ux(Mn[t],Mn[n]):Mn[n].via;mh(e,t?Yv:Xv,{via:r,kind:t?"across":"in",then:()=>gh(n,i)})}function gh(n,t){Ce===n&&(hr=!0,wo(n,t),document.body.classList.add("landed"),gs.boot(n))}function xr(){if(!Ce)return;const n=Ce;gs.sleep(Ce),wo(null),Ce=null,hr=!1,document.body.classList.remove("landed"),_h(null),history.replaceState(null,"",location.pathname+location.search),mh(Nl(),qv,{via:Mn[n].via,kind:"out",then:()=>{Ce||document.body.classList.remove("visiting")}})}function _h(n){fh.querySelectorAll("[data-to]").forEach(t=>t.toggleAttribute("aria-current",t.dataset.to===(n??"room"))),ph.forEach(({el:t})=>t.toggleAttribute("aria-current",t.dataset.section===n))}function vh(){if(pn=innerWidth,ke=innerHeight,so=pn<820,document.body.classList.toggle("compact",so),!!gn)if(ke=Math.round(cr.getBoundingClientRect().height)||ke,yn.setSize(pn,ke,!1),Br=sx(ox,so?Vv:Hv,nx,hh),Ee=null,Ce){const{pose:n,rect:t}=yo(Mn[Ce]);fr(n),hr?wo(Ce,t):gh(Ce,t)}else fr(Nl())}function hx(){for(const{el:n,pin:t,local:e,piece:i}of ph){i.inner.localToWorld(fn.copy(e)).project(Re);const r=(fn.x+1)/2*pn,s=(1-fn.y)/2*ke;let o=t.side;o==="left"&&r<du?o="right":o==="right"&&r>pn-du?o="left":o==="top"&&s<70?o="bottom":o==="bottom"&&s>ke-80&&(o="top"),n.dataset.side!==o&&(n.dataset.side=o),n.style.transform=`translate3d(${r.toFixed(1)}px, ${s.toFixed(1)}px, 0)`,n.classList.toggle("hot",as===t.section)}}function xh(){if(!gn||Ce||Ee||!Ao)return null;mu.set(ls.x/pn*2-1,1-ls.y/ke*2),gu.setFromCamera(mu,Re);let n=null,t=1e9;for(const e of Object.values(Mn)){const i=gu.intersectObject(e.mesh,!1)[0];i&&i.distance<t&&(t=i.distance,n=e.section)}return n}function fx(){if(!yi)return;if(vo!==null){jn=vo;return}if(!Ao||Ce||Ee){jn=0;return}dh.battle.inner.localToWorld(fn.copy(yi.at)).project(Re);const n=(fn.x+1)/2*pn,t=(1-fn.y)/2*ke;jn=Math.hypot(ls.x-n,ls.y-t)<Zv*ke?1:0}function yh(n){yi.head.rotation.set(.1*n,Jv*n,-.05*n),yi.torso.rotation.y=$v*n,yi.solveArms()}function Mh(){if(pu)return;pu=!0;const n=lr?0:Math.max(0,400-performance.now());setTimeout(()=>{Fr.classList.add("out"),lr?Fr.classList.add("gone"):(Fr.addEventListener("transitionend",()=>Fr.classList.add("gone"),{once:!0}),setTimeout(()=>Fr.classList.add("gone"),900))},n)}ni("mark").addEventListener("click",n=>{n.preventDefault(),xr()});ni("back").addEventListener("click",n=>{n.stopPropagation(),xr()});addEventListener("keydown",n=>{n.key==="Escape"&&xr()},!0);addEventListener("resize",vh);cr.addEventListener("pointermove",n=>{ls.set(n.clientX,n.clientY),Ao=!0,Ge.gx=rs(n.clientX/pn*2-1,-1,1),Ge.gy=rs(n.clientY/ke*2-1,-1,1);const t=xh();t!==as&&(as=t,cr.classList.toggle("pointing",!!t),os=!0)});cr.addEventListener("pointerleave",()=>{Ao=!1,Ge.gx=Ge.gy=0,as&&(as=null,cr.classList.remove("pointing"),os=!0)});cr.addEventListener("click",n=>{if(n.target.closest(".chrome, .pin, .scr, .nav, .back"))return;if(Ce){hr&&xr();return}const t=xh();t&&_s(t)});let vu=performance.now();function Sh(n){if(!gn)return;requestAnimationFrame(Sh);const t=Math.min(.05,(n-vu)/1e3);vu=n;let e=os||cx(n);if(!Ce&&!Ee&&!ro&&!lr){const r=1-Math.pow(.94,t*60),s=Nr(Ge.x,Ge.gx,r),o=Nr(Ge.y,Ge.gy,r);Math.abs(s-Ge.x)+Math.abs(o-Ge.y)>1e-4&&(Ge.x=s,Ge.y=o,fr(Nl()),e=!0)}fx(),yi&&_i!==jn&&(_i=ro||Math.abs(jn-_i)<.002?jn:Nr(_i,jn,1-Math.pow(1-.065,t*60)),yh(_o(_i)),e=!0),Yi!==Bn&&(Yi=ro||Math.abs(Bn-Yi)<.003?Bn:Nr(Yi,Bn,1-Math.pow(1-.1,t*60)),lh(_o(Yi)),e=!0);const i=Ee?Ee.kind==="in"?1-$i(0,.3,Ee.prog??0):Ee.kind==="out"?$i(.55,1,Ee.prog??0):0:Ce?0:1;if(Math.abs(xo.lines.material.opacity-i)>.001&&(xo.lines.material.opacity=i,e=!0),e&&(os=!1,yn.render(ii,Re),hx(),document.body.classList.contains("ready")||(document.body.classList.add("ready"),Mh()),pa)){const r=pa;pa=null,setTimeout(()=>_s(r),lr?0:350)}}vh();vo!==null&&yi&&(_i=vo,yh(_o(_i)));if(gn)try{await yn.compileAsync(ii,Re)}catch(n){console.warn("shader precompile skipped",n)}Sh(performance.now());
