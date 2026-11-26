(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const ol="180",yh=0,Nl=1,Sh=2,al=1,Eh=2,On=3,wn=0,We=1,je=2,ti=0,Ji=1,ca=2,Ol=3,Bl=4,Th=5,mi=100,bh=101,Ah=102,wh=103,Ch=104,Rh=200,Ph=201,Lh=202,Dh=203,ua=204,ha=205,Fh=206,Ih=207,Uh=208,Nh=209,Oh=210,Bh=211,zh=212,kh=213,Hh=214,fa=0,da=1,pa=2,ji=3,ma=4,ga=5,_a=6,va=7,lu=0,Vh=1,Gh=2,Hn=0,Wh=1,Xh=2,qh=3,Yh=4,Zh=5,Jh=6,$h=7,cu=300,Qi=301,tr=302,xa=303,Ma=304,go=306,ro=1e3,vi=1001,ya=1002,ke=1003,Kh=1004,xs=1005,Sn=1006,bo=1007,xi=1008,Cn=1009,uu=1010,hu=1011,Hr=1012,ll=1013,yi=1014,En=1015,ls=1016,cl=1017,ul=1018,Vr=1020,fu=35902,du=35899,pu=1021,mu=1022,pn=1023,Gr=1026,Wr=1027,_o=1028,hl=1029,gu=1030,fl=1031,dl=1033,$s=33776,Ks=33777,js=33778,Qs=33779,Sa=35840,Ea=35841,Ta=35842,ba=35843,Aa=36196,wa=37492,Ca=37496,Ra=37808,Pa=37809,La=37810,Da=37811,Fa=37812,Ia=37813,Ua=37814,Na=37815,Oa=37816,Ba=37817,za=37818,ka=37819,Ha=37820,Va=37821,Ga=36492,Wa=36494,Xa=36495,qa=36283,Ya=36284,Za=36285,Ja=36286,jh=3200,Qh=3201,_u=0,tf=1,Mn="",$e="srgb",er="srgb-linear",so="linear",le="srgb",Bn=7680,ef=7681,nf=517,$a=519,rf=512,sf=513,of=514,vu=515,af=516,lf=517,cf=518,uf=519,Ka=35044,zl="300 es",Tn=2e3,oo=2001;class ur{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kl=1234567;const Nr=Math.PI/180,nr=180/Math.PI;function An(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]).toLowerCase()}function jt(n,t,e){return Math.max(t,Math.min(e,n))}function pl(n,t){return(n%t+t)%t}function hf(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function ff(n,t,e){return n!==t?(e-n)/(t-n):0}function Or(n,t,e){return(1-e)*n+e*t}function df(n,t,e,i){return Or(n,t,1-Math.exp(-e*i))}function pf(n,t=1){return t-Math.abs(pl(n,t*2)-t)}function mf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function gf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function _f(n,t){return n+Math.floor(Math.random()*(t-n+1))}function vf(n,t){return n+Math.random()*(t-n)}function xf(n){return n*(.5-Math.random())}function Mf(n){n!==void 0&&(kl=n);let t=kl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function yf(n){return n*Nr}function Sf(n){return n*nr}function Ef(n){return(n&n-1)===0&&n!==0}function Tf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function bf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Af(n,t,e,i,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+i)/2),u=o((t+i)/2),h=s((t-i)/2),f=o((t-i)/2),p=s((i-t)/2),g=o((i-t)/2);switch(r){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function fn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function oe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const cs={DEG2RAD:Nr,RAD2DEG:nr,generateUUID:An,clamp:jt,euclideanModulo:pl,mapLinear:hf,inverseLerp:ff,lerp:Or,damp:df,pingpong:pf,smoothstep:mf,smootherstep:gf,randInt:_f,randFloat:vf,randFloatSpread:xf,seededRandom:Mf,degToRad:yf,radToDeg:Sf,isPowerOfTwo:Ef,ceilPowerOfTwo:Tf,floorPowerOfTwo:bf,setQuaternionFromProperEuler:Af,normalize:oe,denormalize:fn};class ft{constructor(t=0,e=0){ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wn{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==p||u!==g){let m=1-a;const d=l*f+c*p+u*g+h*_,T=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){const P=Math.sqrt(E),R=Math.atan2(P,d*T);m=Math.sin(m*R)/P,a=Math.sin(a*R)/P}const x=a*T;if(l=l*m+f*x,c=c*m+p*x,u=u*m+g*x,h=h*m+_*x,m===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=P,c*=P,u*=P,h*=P}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+u*h+l*p-c*f,t[e+1]=l*g+u*f+c*h-a*p,t[e+2]=c*g+u*p+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(t=0,e=0,i=0){w.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*i),u=2*(a*e-s*r),h=2*(s*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ao.copy(this).projectOnVector(t),this.sub(Ao)}reflect(t){return this.sub(Ao.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ao=new w,Hl=new Wn;class $t{constructor(t,e,i,r,s,o,a,l,c){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c)}set(t,e,i,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],_=r[0],m=r[3],d=r[6],T=r[1],E=r[4],x=r[7],P=r[2],R=r[5],L=r[8];return s[0]=o*_+a*T+l*P,s[3]=o*m+a*E+l*R,s[6]=o*d+a*x+l*L,s[1]=c*_+u*T+h*P,s[4]=c*m+u*E+h*R,s[7]=c*d+u*x+h*L,s[2]=f*_+p*T+g*P,s[5]=f*m+p*E+g*R,s[8]=f*d+p*x+g*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=e*h+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(r*c-u*i)*_,t[2]=(a*i-r*o)*_,t[3]=f*_,t[4]=(u*e-r*l)*_,t[5]=(r*s-a*e)*_,t[6]=p*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(wo.makeScale(t,e)),this}rotate(t){return this.premultiply(wo.makeRotation(-t)),this}translate(t,e){return this.premultiply(wo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wo=new $t;function xu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ao(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wf(){const n=ao("canvas");return n.style.display="block",n}const Vl={};function Xr(n){n in Vl||(Vl[n]=!0,console.warn(n))}function Cf(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const Gl=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wl=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rf(){const n={enabled:!0,workingColorSpace:er,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===le&&(r.r=Vn(r.r),r.g=Vn(r.g),r.b=Vn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===le&&(r.r=$i(r.r),r.g=$i(r.g),r.b=$i(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Mn?so:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Xr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Xr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[er]:{primaries:t,whitePoint:i,transfer:so,toXYZ:Gl,fromXYZ:Wl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:t,whitePoint:i,transfer:le,toXYZ:Gl,fromXYZ:Wl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}}),n}const ne=Rf();function Vn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $i(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let wi;class Pf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{wi===void 0&&(wi=ao("canvas")),wi.width=t.width,wi.height=t.height;const r=wi.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=wi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ao("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Vn(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Vn(e[i]/255)*255):e[i]=Vn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Lf=0;class ml{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=An(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Co(r[o].image)):s.push(Co(r[o]))}else s=Co(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Co(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Pf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Df=0;const Ro=new w;class Ie extends ur{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,i=vi,r=vi,s=Sn,o=xi,a=pn,l=Cn,c=Ie.DEFAULT_ANISOTROPY,u=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=An(),this.name="",this.source=new ml(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ro).x}get height(){return this.source.getSize(Ro).y}get depth(){return this.source.getSize(Ro).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ro:t.x=t.x-Math.floor(t.x);break;case vi:t.x=t.x<0?0:1;break;case ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ro:t.y=t.y-Math.floor(t.y);break;case vi:t.y=t.y<0?0:1;break;case ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=cu;Ie.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,i=0,r=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,x=(p+1)/2,P=(d+1)/2,R=(u+f)/4,L=(h+_)/4,D=(g+m)/4;return E>x&&E>P?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=R/i,s=L/i):x>P?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=R/r,s=D/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=L/s,r=D/s),this.set(i,r,s,e),this}let T=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-_)/T,this.z=(f-u)/T,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ff extends ur{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const r={width:t,height:e,depth:i.depth},s=new Ie(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new ml(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends Ff{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Mu extends Ie{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ke,this.minFilter=ke,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class If extends Ie{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ke,this.minFilter=ke,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bi{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,cn):cn.fromBufferAttribute(s,o),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ms.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ms.copy(i.boundingBox)),Ms.applyMatrix4(t.matrixWorld),this.union(Ms)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vr),ys.subVectors(this.max,vr),Ci.subVectors(t.a,vr),Ri.subVectors(t.b,vr),Pi.subVectors(t.c,vr),qn.subVectors(Ri,Ci),Yn.subVectors(Pi,Ri),ai.subVectors(Ci,Pi);let e=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-ai.z,ai.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,ai.z,0,-ai.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-ai.y,ai.x,0];return!Po(e,Ci,Ri,Pi,ys)||(e=[1,0,0,0,1,0,0,0,1],!Po(e,Ci,Ri,Pi,ys))?!1:(Ss.crossVectors(qn,Yn),e=[Ss.x,Ss.y,Ss.z],Po(e,Ci,Ri,Pi,ys))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Dn=[new w,new w,new w,new w,new w,new w,new w,new w],cn=new w,Ms=new bi,Ci=new w,Ri=new w,Pi=new w,qn=new w,Yn=new w,ai=new w,vr=new w,ys=new w,Ss=new w,li=new w;function Po(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){li.fromArray(n,s);const a=r.x*Math.abs(li.x)+r.y*Math.abs(li.y)+r.z*Math.abs(li.z),l=t.dot(li),c=e.dot(li),u=i.dot(li);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Uf=new bi,xr=new w,Lo=new w;class us{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Uf.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xr.subVectors(t,this.center);const e=xr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(xr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xr.copy(t.center).add(Lo)),this.expandByPoint(xr.copy(t.center).sub(Lo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Fn=new w,Do=new w,Es=new w,Zn=new w,Fo=new w,Ts=new w,Io=new w;class yu{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Do.copy(t).add(e).multiplyScalar(.5),Es.copy(e).sub(t).normalize(),Zn.copy(this.origin).sub(Do);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Es),a=Zn.dot(this.direction),l=-Zn.dot(Es),c=Zn.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Do).addScaledVector(Es,f),p}intersectSphere(t,e){Fn.subVectors(t.center,this.origin);const i=Fn.dot(this.direction),r=Fn.dot(Fn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,i,r,s){Fo.subVectors(e,t),Ts.subVectors(i,t),Io.crossVectors(Fo,Ts);let o=this.direction.dot(Io),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zn.subVectors(this.origin,t);const l=a*this.direction.dot(Ts.crossVectors(Zn,Ts));if(l<0)return null;const c=a*this.direction.dot(Fo.cross(Zn));if(c<0||l+c>o)return null;const u=-a*Zn.dot(Io);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,i,r,s,o,a,l,c,u,h,f,p,g,_,m){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c,u,h,f,p,g,_,m)}set(t,e,i,r,s,o,a,l,c,u,h,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Li.setFromMatrixColumn(t,0).length(),s=1/Li.setFromMatrixColumn(t,1).length(),o=1/Li.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*u,p=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,p=l*h,g=c*u,_=c*h;e[0]=f+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,p=l*h,g=c*u,_=c*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,p=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nf,t,Of)}lookAt(t,e,i){const r=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),Jn.crossVectors(i,Ze),Jn.lengthSq()===0&&(Math.abs(i.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),Jn.crossVectors(i,Ze)),Jn.normalize(),bs.crossVectors(Ze,Jn),r[0]=Jn.x,r[4]=bs.x,r[8]=Ze.x,r[1]=Jn.y,r[5]=bs.y,r[9]=Ze.y,r[2]=Jn.z,r[6]=bs.z,r[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],T=i[3],E=i[7],x=i[11],P=i[15],R=r[0],L=r[4],D=r[8],y=r[12],M=r[1],C=r[5],U=r[9],O=r[13],k=r[2],V=r[6],H=r[10],nt=r[14],G=r[3],st=r[7],gt=r[11],yt=r[15];return s[0]=o*R+a*M+l*k+c*G,s[4]=o*L+a*C+l*V+c*st,s[8]=o*D+a*U+l*H+c*gt,s[12]=o*y+a*O+l*nt+c*yt,s[1]=u*R+h*M+f*k+p*G,s[5]=u*L+h*C+f*V+p*st,s[9]=u*D+h*U+f*H+p*gt,s[13]=u*y+h*O+f*nt+p*yt,s[2]=g*R+_*M+m*k+d*G,s[6]=g*L+_*C+m*V+d*st,s[10]=g*D+_*U+m*H+d*gt,s[14]=g*y+_*O+m*nt+d*yt,s[3]=T*R+E*M+x*k+P*G,s[7]=T*L+E*C+x*V+P*st,s[11]=T*D+E*U+x*H+P*gt,s[15]=T*y+E*O+x*nt+P*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*p-i*l*p)+_*(+e*l*p-e*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+e*c*h-e*a*p-s*o*h+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-e*l*h+e*a*f+r*o*h-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],T=h*m*c-_*f*c+_*l*p-a*m*p-h*l*d+a*f*d,E=g*f*c-u*m*c-g*l*p+o*m*p+u*l*d-o*f*d,x=u*_*c-g*h*c+g*a*p-o*_*p-u*a*d+o*h*d,P=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,R=e*T+i*E+r*x+s*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/R;return t[0]=T*L,t[1]=(_*f*s-h*m*s-_*r*p+i*m*p+h*r*d-i*f*d)*L,t[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*d+i*l*d)*L,t[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*p-i*l*p)*L,t[4]=E*L,t[5]=(u*m*s-g*f*s+g*r*p-e*m*p-u*r*d+e*f*d)*L,t[6]=(g*l*s-o*m*s-g*r*c+e*m*c+o*r*d-e*l*d)*L,t[7]=(o*f*s-u*l*s+u*r*c-e*f*c-o*r*p+e*l*p)*L,t[8]=x*L,t[9]=(g*h*s-u*_*s-g*i*p+e*_*p+u*i*d-e*h*d)*L,t[10]=(o*_*s-g*a*s+g*i*c-e*_*c-o*i*d+e*a*d)*L,t[11]=(u*a*s-o*h*s-u*i*c+e*h*c+o*i*p-e*a*p)*L,t[12]=P*L,t[13]=(u*_*r-g*h*r+g*i*f-e*_*f-u*i*m+e*h*m)*L,t[14]=(g*a*r-o*_*r-g*i*l+e*_*l+o*i*m-e*a*m)*L,t[15]=(o*h*r-u*a*r+u*i*l-e*h*l-o*i*f+e*a*f)*L,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,g=s*h,_=o*u,m=o*h,d=a*h,T=l*c,E=l*u,x=l*h,P=i.x,R=i.y,L=i.z;return r[0]=(1-(_+d))*P,r[1]=(p+x)*P,r[2]=(g-E)*P,r[3]=0,r[4]=(p-x)*R,r[5]=(1-(f+d))*R,r[6]=(m+T)*R,r[7]=0,r[8]=(g+E)*L,r[9]=(m-T)*L,r[10]=(1-(f+_))*L,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Li.set(r[0],r[1],r[2]).length();const o=Li.set(r[4],r[5],r[6]).length(),a=Li.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],un.copy(this);const c=1/s,u=1/o,h=1/a;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=h,un.elements[9]*=h,un.elements[10]*=h,e.setFromRotationMatrix(un),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=Tn,l=!1){const c=this.elements,u=2*s/(e-t),h=2*s/(i-r),f=(e+t)/(e-t),p=(i+r)/(i-r);let g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===Tn)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===oo)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=Tn,l=!1){const c=this.elements,u=2/(e-t),h=2/(i-r),f=-(e+t)/(e-t),p=-(i+r)/(i-r);let g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===Tn)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===oo)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Li=new w,un=new re,Nf=new w(0,0,0),Of=new w(1,1,1),Jn=new w,bs=new w,Ze=new w,Xl=new re,ql=new Wn;class Xn{constructor(t=0,e=0,i=0,r=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Xl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ql.setFromEuler(this),this.setFromQuaternion(ql,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class gl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Bf=0;const Yl=new w,Di=new Wn,In=new re,As=new w,Mr=new w,zf=new w,kf=new Wn,Zl=new w(1,0,0),Jl=new w(0,1,0),$l=new w(0,0,1),Kl={type:"added"},Hf={type:"removed"},Fi={type:"childadded",child:null},Uo={type:"childremoved",child:null};class Te extends ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=An(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new w,e=new Xn,i=new Wn,r=new w(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new re},normalMatrix:{value:new $t}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.multiply(Di),this}rotateOnWorldAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.premultiply(Di),this}rotateX(t){return this.rotateOnAxis(Zl,t)}rotateY(t){return this.rotateOnAxis(Jl,t)}rotateZ(t){return this.rotateOnAxis($l,t)}translateOnAxis(t,e){return Yl.copy(t).applyQuaternion(this.quaternion),this.position.add(Yl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zl,t)}translateY(t){return this.translateOnAxis(Jl,t)}translateZ(t){return this.translateOnAxis($l,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?As.copy(t):As.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(Mr,As,this.up):In.lookAt(As,Mr,this.up),this.quaternion.setFromRotationMatrix(In),r&&(In.extractRotation(r.matrixWorld),Di.setFromRotationMatrix(In),this.quaternion.premultiply(Di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kl),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hf),Uo.child=t,this.dispatchEvent(Uo),Uo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kl),Fi.child=t,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,t,zf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,kf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Te.DEFAULT_UP=new w(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new w,Un=new w,No=new w,Nn=new w,Ii=new w,Ui=new w,jl=new w,Oo=new w,Bo=new w,zo=new w,ko=new ue,Ho=new ue,Vo=new ue;class sn{constructor(t=new w,e=new w,i=new w){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),hn.subVectors(t,e),r.cross(hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){hn.subVectors(r,e),Un.subVectors(i,e),No.subVectors(t,e);const o=hn.dot(hn),a=hn.dot(Un),l=hn.dot(No),c=Un.dot(Un),u=Un.dot(No),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Nn.x),l.addScaledVector(o,Nn.y),l.addScaledVector(a,Nn.z),l)}static getInterpolatedAttribute(t,e,i,r,s,o){return ko.setScalar(0),Ho.setScalar(0),Vo.setScalar(0),ko.fromBufferAttribute(t,e),Ho.fromBufferAttribute(t,i),Vo.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(ko,s.x),o.addScaledVector(Ho,s.y),o.addScaledVector(Vo,s.z),o}static isFrontFacing(t,e,i,r){return hn.subVectors(i,e),Un.subVectors(t,e),hn.cross(Un).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),hn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return sn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;Ii.subVectors(r,i),Ui.subVectors(s,i),Oo.subVectors(t,i);const l=Ii.dot(Oo),c=Ui.dot(Oo);if(l<=0&&c<=0)return e.copy(i);Bo.subVectors(t,r);const u=Ii.dot(Bo),h=Ui.dot(Bo);if(u>=0&&h<=u)return e.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Ii,o);zo.subVectors(t,s);const p=Ii.dot(zo),g=Ui.dot(zo);if(g>=0&&p<=g)return e.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Ui,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return jl.subVectors(s,r),a=(h-u)/(h-u+(p-g)),e.copy(r).addScaledVector(jl,a);const d=1/(m+_+f);return o=_*d,a=f*d,e.copy(i).addScaledVector(Ii,o).addScaledVector(Ui,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Su={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},ws={h:0,s:0,l:0};function Go(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class zt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=ne.workingColorSpace){return this.r=t,this.g=e,this.b=i,ne.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=ne.workingColorSpace){if(t=pl(t,1),e=jt(e,0,1),i=jt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Go(o,s,t+1/3),this.g=Go(o,s,t),this.b=Go(o,s,t-1/3)}return ne.colorSpaceToWorking(this,r),this}setStyle(t,e=$e){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){const i=Su[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vn(t.r),this.g=Vn(t.g),this.b=Vn(t.b),this}copyLinearToSRGB(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return ne.workingToColorSpace(Fe.copy(this),t),Math.round(jt(Fe.r*255,0,255))*65536+Math.round(jt(Fe.g*255,0,255))*256+Math.round(jt(Fe.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(Fe.copy(this),e);const i=Fe.r,r=Fe.g,s=Fe.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=$e){ne.workingToColorSpace(Fe.copy(this),t);const e=Fe.r,i=Fe.g,r=Fe.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL($n),this.setHSL($n.h+t,$n.s+e,$n.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL($n),t.getHSL(ws);const i=Or($n.h,ws.h,e),r=Or($n.s,ws.s,e),s=Or($n.l,ws.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new zt;zt.NAMES=Su;let Vf=0;class hr extends ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=An(),this.name="",this.type="Material",this.blending=Ji,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ua,this.blendDst=ha,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$a,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bn,this.stencilZFail=Bn,this.stencilZPass=Bn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(i.blending=this.blending),this.side!==wn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ua&&(i.blendSrc=this.blendSrc),this.blendDst!==ha&&(i.blendDst=this.blendDst),this.blendEquation!==mi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ji&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$a&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Bn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Bn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class fr extends hr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=lu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new w,Cs=new ft;let Gf=0;class an{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ka,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Cs.fromBufferAttribute(this,e),Cs.applyMatrix3(t),this.setXY(e,Cs.x,Cs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=fn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=oe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array),r=oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array),r=oe(r,this.array),s=oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ka&&(t.usage=this.usage),t}}class Eu extends an{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Tu extends an{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class se extends an{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Wf=0;const nn=new re,Wo=new Te,Ni=new w,Je=new bi,yr=new bi,we=new w;class Le extends ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=An(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xu(t)?Tu:Eu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $t().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,i){return nn.makeTranslation(t,e,i),this.applyMatrix4(nn),this}scale(t,e,i){return nn.makeScale(t,e,i),this.applyMatrix4(nn),this}lookAt(t){return Wo.lookAt(t),Wo.updateMatrix(),this.applyMatrix4(Wo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new se(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Je.setFromBufferAttribute(s),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(t){const i=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];yr.setFromBufferAttribute(a),this.morphTargetsRelative?(we.addVectors(Je.min,yr.min),Je.expandByPoint(we),we.addVectors(Je.max,yr.max),Je.expandByPoint(we)):(Je.expandByPoint(yr.min),Je.expandByPoint(yr.max))}Je.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)we.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(we));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)we.fromBufferAttribute(a,c),l&&(Ni.fromBufferAttribute(t,c),we.add(Ni)),r=Math.max(r,i.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new w,l[D]=new w;const c=new w,u=new w,h=new w,f=new ft,p=new ft,g=new ft,_=new w,m=new w;function d(D,y,M){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,y),h.fromBufferAttribute(i,M),f.fromBufferAttribute(s,D),p.fromBufferAttribute(s,y),g.fromBufferAttribute(s,M),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(C),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(C),a[D].add(_),a[y].add(_),a[M].add(_),l[D].add(m),l[y].add(m),l[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let D=0,y=T.length;D<y;++D){const M=T[D],C=M.start,U=M.count;for(let O=C,k=C+U;O<k;O+=3)d(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const E=new w,x=new w,P=new w,R=new w;function L(D){P.fromBufferAttribute(r,D),R.copy(P);const y=a[D];E.copy(y),E.sub(P.multiplyScalar(P.dot(y))).normalize(),x.crossVectors(R,y);const C=x.dot(l[D])<0?-1:1;o.setXYZW(D,E.x,E.y,E.z,C)}for(let D=0,y=T.length;D<y;++D){const M=T[D],C=M.start,U=M.count;for(let O=C,k=C+U;O<k;O+=3)L(t.getX(O+0)),L(t.getX(O+1)),L(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new an(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new w,s=new w,o=new w,a=new w,l=new w,c=new w,u=new w,h=new w;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new an(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Le,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,i);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=t(f,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ql=new re,ci=new yu,Rs=new us,tc=new w,Ps=new w,Ls=new w,Ds=new w,Xo=new w,Fs=new w,ec=new w,Is=new w;class te extends Te{constructor(t=new Le,e=new fr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Fs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Xo.fromBufferAttribute(h,t),o?Fs.addScaledVector(Xo,u):Fs.addScaledVector(Xo.sub(e),u))}e.add(Fs)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rs.copy(i.boundingSphere),Rs.applyMatrix4(s),ci.copy(t.ray).recast(t.near),!(Rs.containsPoint(ci.origin)===!1&&(ci.intersectSphere(Rs,tc)===null||ci.origin.distanceToSquared(tc)>(t.far-t.near)**2))&&(Ql.copy(s).invert(),ci.copy(t.ray).applyMatrix4(Ql),!(i.boundingBox!==null&&ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ci)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=T,P=E;x<P;x+=3){const R=a.getX(x),L=a.getX(x+1),D=a.getX(x+2);r=Us(this,d,t,i,c,u,h,R,L,D),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const T=a.getX(m),E=a.getX(m+1),x=a.getX(m+2);r=Us(this,o,t,i,c,u,h,T,E,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=T,P=E;x<P;x+=3){const R=x,L=x+1,D=x+2;r=Us(this,d,t,i,c,u,h,R,L,D),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const T=m,E=m+1,x=m+2;r=Us(this,o,t,i,c,u,h,T,E,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Xf(n,t,e,i,r,s,o,a){let l;if(t.side===We?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===wn,a),l===null)return null;Is.copy(a),Is.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Is);return c<e.near||c>e.far?null:{distance:c,point:Is.clone(),object:n}}function Us(n,t,e,i,r,s,o,a,l,c){n.getVertexPosition(a,Ps),n.getVertexPosition(l,Ls),n.getVertexPosition(c,Ds);const u=Xf(n,t,e,i,Ps,Ls,Ds,ec);if(u){const h=new w;sn.getBarycoord(ec,Ps,Ls,Ds,h),r&&(u.uv=sn.getInterpolatedAttribute(r,a,l,c,h,new ft)),s&&(u.uv1=sn.getInterpolatedAttribute(s,a,l,c,h,new ft)),o&&(u.normal=sn.getInterpolatedAttribute(o,a,l,c,h,new w),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new w,materialIndex:0};sn.getNormal(Ps,Ls,Ds,f.normal),u.face=f,u.barycoord=h}return u}class Xe extends Le{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(h,2));function g(_,m,d,T,E,x,P,R,L,D,y){const M=x/L,C=P/D,U=x/2,O=P/2,k=R/2,V=L+1,H=D+1;let nt=0,G=0;const st=new w;for(let gt=0;gt<H;gt++){const yt=gt*C-O;for(let kt=0;kt<V;kt++){const tt=kt*M-U;st[_]=tt*T,st[m]=yt*E,st[d]=k,c.push(st.x,st.y,st.z),st[_]=0,st[m]=0,st[d]=R>0?1:-1,u.push(st.x,st.y,st.z),h.push(kt/L),h.push(1-gt/D),nt+=1}}for(let gt=0;gt<D;gt++)for(let yt=0;yt<L;yt++){const kt=f+yt+V*gt,tt=f+yt+V*(gt+1),At=f+(yt+1)+V*(gt+1),Tt=f+(yt+1)+V*gt;l.push(kt,tt,Tt),l.push(tt,At,Tt),G+=6}a.addGroup(p,G,y),p+=G,f+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ir(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Be(n){const t={};for(let e=0;e<n.length;e++){const i=ir(n[e]);for(const r in i)t[r]=i[r]}return t}function qf(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function bu(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const Yf={clone:ir,merge:Be};var Zf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends hr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zf,this.fragmentShader=Jf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ir(t.uniforms),this.uniformsGroups=qf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Au extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new w,nc=new ft,ic=new ft;class Ge extends Au{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=nr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return nr*2*Math.atan(Math.tan(Nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z)}getViewSize(t,e){return this.getViewBounds(t,nc,ic),e.subVectors(ic,nc)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Nr*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Oi=-90,Bi=1;class $f extends Te{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ge(Oi,Bi,t,e);r.layers=this.layers,this.add(r);const s=new Ge(Oi,Bi,t,e);s.layers=this.layers,this.add(s);const o=new Ge(Oi,Bi,t,e);o.layers=this.layers,this.add(o);const a=new Ge(Oi,Bi,t,e);a.layers=this.layers,this.add(a);const l=new Ge(Oi,Bi,t,e);l.layers=this.layers,this.add(l);const c=new Ge(Oi,Bi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Tn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===oo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class wu extends Ie{constructor(t=[],e=Qi,i,r,s,o,a,l,c,u){super(t,e,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Kf extends Si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new wu(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Xe(5,5,5),s=new ei({name:"CubemapFromEquirect",uniforms:ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:We,blending:ti});s.uniforms.tEquirect.value=e;const o=new te(r,s),a=e.minFilter;return e.minFilter===xi&&(e.minFilter=Sn),new $f(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}class Re extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jf={type:"move"};class qo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jf)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Re;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Cu extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Qf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ka,this.updateRanges=[],this.version=0,this.uuid=An()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Oe=new w;class lo{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=fn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=oe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=fn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array),r=oe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=oe(e,this.array),i=oe(i,this.array),r=oe(r,this.array),s=oe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new an(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new lo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ru extends hr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let zi;const Sr=new w,ki=new w,Hi=new w,Vi=new ft,Er=new ft,Pu=new re,Ns=new w,Tr=new w,Os=new w,rc=new ft,Yo=new ft,sc=new ft;class td extends Te{constructor(t=new Ru){if(super(),this.isSprite=!0,this.type="Sprite",zi===void 0){zi=new Le;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Qf(e,5);zi.setIndex([0,1,2,0,2,3]),zi.setAttribute("position",new lo(i,3,0,!1)),zi.setAttribute("uv",new lo(i,2,3,!1))}this.geometry=zi,this.material=t,this.center=new ft(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ki.setFromMatrixScale(this.matrixWorld),Pu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Hi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ki.multiplyScalar(-Hi.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Bs(Ns.set(-.5,-.5,0),Hi,o,ki,r,s),Bs(Tr.set(.5,-.5,0),Hi,o,ki,r,s),Bs(Os.set(.5,.5,0),Hi,o,ki,r,s),rc.set(0,0),Yo.set(1,0),sc.set(1,1);let a=t.ray.intersectTriangle(Ns,Tr,Os,!1,Sr);if(a===null&&(Bs(Tr.set(-.5,.5,0),Hi,o,ki,r,s),Yo.set(0,1),a=t.ray.intersectTriangle(Ns,Os,Tr,!1,Sr),a===null))return;const l=t.ray.origin.distanceTo(Sr);l<t.near||l>t.far||e.push({distance:l,point:Sr.clone(),uv:sn.getInterpolation(Sr,Ns,Tr,Os,rc,Yo,sc,new ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Bs(n,t,e,i,r,s){Vi.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(Er.x=s*Vi.x-r*Vi.y,Er.y=r*Vi.x+s*Vi.y):Er.copy(Vi),n.copy(t),n.x+=Er.x,n.y+=Er.y,n.applyMatrix4(Pu)}class Lu extends Ie{constructor(t=null,e=1,i=1,r,s,o,a,l,c=ke,u=ke,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oc extends an{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Gi=new re,ac=new re,zs=[],lc=new bi,ed=new re,br=new te,Ar=new us;class Du extends te{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new oc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,ed)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new bi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Gi),lc.copy(t.boundingBox).applyMatrix4(Gi),this.boundingBox.union(lc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new us),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Gi),Ar.copy(t.boundingSphere).applyMatrix4(Gi),this.boundingSphere.union(Ar)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=t*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(t,e){const i=this.matrixWorld,r=this.count;if(br.geometry=this.geometry,br.material=this.material,br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ar.copy(this.boundingSphere),Ar.applyMatrix4(i),t.ray.intersectsSphere(Ar)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Gi),ac.multiplyMatrices(i,Gi),br.matrixWorld=ac,br.raycast(t,zs);for(let o=0,a=zs.length;o<a;o++){const l=zs[o];l.instanceId=s,l.object=this,e.push(l)}zs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new oc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Lu(new Float32Array(r*this.count),r,this.count,_o,En));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*t;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Zo=new w,nd=new w,id=new $t;class di{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Zo.subVectors(i,e).cross(nd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Zo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||id.getNormalMatrix(t),r=this.coplanarPoint(Zo).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new us,rd=new ft(.5,.5),ks=new w;class _l{constructor(t=new di,e=new di,i=new di,r=new di,s=new di,o=new di){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Tn,i=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],p=s[7],g=s[8],_=s[9],m=s[10],d=s[11],T=s[12],E=s[13],x=s[14],P=s[15];if(r[0].setComponents(c-o,p-u,d-g,P-T).normalize(),r[1].setComponents(c+o,p+u,d+g,P+T).normalize(),r[2].setComponents(c+a,p+h,d+_,P+E).normalize(),r[3].setComponents(c-a,p-h,d-_,P-E).normalize(),i)r[4].setComponents(l,f,m,x).normalize(),r[5].setComponents(c-l,p-f,d-m,P-x).normalize();else if(r[4].setComponents(c-l,p-f,d-m,P-x).normalize(),e===Tn)r[5].setComponents(c+l,p+f,d+m,P+x).normalize();else if(e===oo)r[5].setComponents(l,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(t){ui.center.set(0,0,0);const e=rd.distanceTo(t.center);return ui.radius=.7071067811865476+e,ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(ks.x=r.normal.x>0?t.max.x:t.min.x,ks.y=r.normal.y>0?t.max.y:t.min.y,ks.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ks)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sd extends Ie{constructor(t,e,i,r,s,o,a,l,c){super(t,e,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fu extends Ie{constructor(t,e,i=yi,r,s,o,a=ke,l=ke,c,u=Gr,h=1){if(u!==Gr&&u!==Wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:h};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ml(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Iu extends Ie{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class vl extends Le{constructor(t=1,e=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:r,heightSegments:s},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],u=e/2,h=Math.PI/2*t,f=e,p=2*h+f,g=i*2+s,_=r+1,m=new w,d=new w;for(let T=0;T<=g;T++){let E=0,x=0,P=0,R=0;if(T<=i){const y=T/i,M=y*Math.PI/2;x=-u-t*Math.cos(M),P=t*Math.sin(M),R=-t*Math.cos(M),E=y*h}else if(T<=i+s){const y=(T-i)/s;x=-u+y*e,P=t,R=0,E=h+y*f}else{const y=(T-i-s)/i,M=y*Math.PI/2;x=u+t*Math.sin(M),P=t*Math.cos(M),R=t*Math.sin(M),E=h+f+y*h}const L=Math.max(0,Math.min(1,E/p));let D=0;T===0?D=.5/r:T===g&&(D=-.5/r);for(let y=0;y<=r;y++){const M=y/r,C=M*Math.PI*2,U=Math.sin(C),O=Math.cos(C);d.x=-P*O,d.y=x,d.z=P*U,a.push(d.x,d.y,d.z),m.set(-P*O,R,P*U),m.normalize(),l.push(m.x,m.y,m.z),c.push(M+D,L)}if(T>0){const y=(T-1)*_;for(let M=0;M<r;M++){const C=y+M,U=y+M+1,O=T*_+M,k=T*_+M+1;o.push(C,U,O),o.push(U,k,O)}}}this.setIndex(o),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vl(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class vo extends Le{constructor(t=1,e=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:r},e=Math.max(3,e);const s=[],o=[],a=[],l=[],c=new w,u=new ft;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const p=i+h/e*r;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(a,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class dr extends Le{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],p=[];let g=0;const _=[],m=i/2;let d=0;T(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new se(h,3)),this.setAttribute("normal",new se(f,3)),this.setAttribute("uv",new se(p,2));function T(){const x=new w,P=new w;let R=0;const L=(e-t)/i;for(let D=0;D<=s;D++){const y=[],M=D/s,C=M*(e-t)+t;for(let U=0;U<=r;U++){const O=U/r,k=O*l+a,V=Math.sin(k),H=Math.cos(k);P.x=C*V,P.y=-M*i+m,P.z=C*H,h.push(P.x,P.y,P.z),x.set(V,L,H).normalize(),f.push(x.x,x.y,x.z),p.push(O,1-M),y.push(g++)}_.push(y)}for(let D=0;D<r;D++)for(let y=0;y<s;y++){const M=_[y][D],C=_[y+1][D],U=_[y+1][D+1],O=_[y][D+1];(t>0||y!==0)&&(u.push(M,C,O),R+=3),(e>0||y!==s-1)&&(u.push(C,U,O),R+=3)}c.addGroup(d,R,0),d+=R}function E(x){const P=g,R=new ft,L=new w;let D=0;const y=x===!0?t:e,M=x===!0?1:-1;for(let U=1;U<=r;U++)h.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;const C=g;for(let U=0;U<=r;U++){const k=U/r*l+a,V=Math.cos(k),H=Math.sin(k);L.x=y*H,L.y=m*M,L.z=y*V,h.push(L.x,L.y,L.z),f.push(0,M,0),R.x=V*.5+.5,R.y=H*.5*M+.5,p.push(R.x,R.y),g++}for(let U=0;U<r;U++){const O=P+U,k=C+U;x===!0?u.push(k,k+1,O):u.push(k+1,k,O),D+=3}c.addGroup(d,D,x===!0?1:2),d+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let r=0;const s=i.length;let o;e?o=e:o=t*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new ft:new w);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new w,r=[],s=[],o=[],a=new w,l=new re;for(let p=0;p<=t;p++){const g=p/t;r[p]=this.getTangentAt(g,new w)}s[0]=new w,o[0]=new w;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(jt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(e===!0){let p=Math.acos(jt(s[0].dot(s[t]),-1,1));p/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(p=-p);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class xl extends Pn{constructor(t=0,e=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ft){const i=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class od extends xl{constructor(t,e,i,r,s,o){super(t,e,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ml(){let n=0,t=0,e=0,i=0;function r(s,o,a,l){n=s,t=a,e=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,p*=u,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return n+t*s+e*o+i*a}}}const Hs=new w,Jo=new Ml,$o=new Ml,Ko=new Ml;class co extends Pn{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new w){const i=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Hs.subVectors(r[0],r[1]).add(r[0]),c=Hs);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Hs.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Hs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Jo.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,m),$o.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,m),Ko.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Jo.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),$o.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Ko.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(Jo.calc(l),$o.calc(l),Ko.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new w().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function cc(n,t,e,i,r){const s=(i-t)*.5,o=(r-e)*.5,a=n*n,l=n*a;return(2*e-2*i+s+o)*l+(-3*e+3*i-2*s-o)*a+s*n+e}function ad(n,t){const e=1-n;return e*e*t}function ld(n,t){return 2*(1-n)*n*t}function cd(n,t){return n*n*t}function Br(n,t,e,i){return ad(n,t)+ld(n,e)+cd(n,i)}function ud(n,t){const e=1-n;return e*e*e*t}function hd(n,t){const e=1-n;return 3*e*e*n*t}function fd(n,t){return 3*(1-n)*n*n*t}function dd(n,t){return n*n*n*t}function zr(n,t,e,i,r){return ud(n,t)+hd(n,e)+fd(n,i)+dd(n,r)}class Uu extends Pn{constructor(t=new ft,e=new ft,i=new ft,r=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new ft){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(zr(t,r.x,s.x,o.x,a.x),zr(t,r.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class pd extends Pn{constructor(t=new w,e=new w,i=new w,r=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new w){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(zr(t,r.x,s.x,o.x,a.x),zr(t,r.y,s.y,o.y,a.y),zr(t,r.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Nu extends Pn{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class md extends Pn{constructor(t=new w,e=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new w){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ou extends Pn{constructor(t=new ft,e=new ft,i=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ft){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(Br(t,r.x,s.x,o.x),Br(t,r.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bu extends Pn{constructor(t=new w,e=new w,i=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new w){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(Br(t,r.x,s.x,o.x),Br(t,r.y,s.y,o.y),Br(t,r.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zu extends Pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){const i=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(cc(a,l.x,c.x,u.x,h.x),cc(a,l.y,c.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new ft().fromArray(r))}return this}}var uo=Object.freeze({__proto__:null,ArcCurve:od,CatmullRomCurve3:co,CubicBezierCurve:Uu,CubicBezierCurve3:pd,EllipseCurve:xl,LineCurve:Nu,LineCurve3:md,QuadraticBezierCurve:Ou,QuadraticBezierCurve3:Bu,SplineCurve:zu});class gd extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uo[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,r=this.curves.length;i<r;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(new uo[r.type]().fromJSON(r))}return this}}class uc extends gd{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Nu(this.currentPoint.clone(),new ft(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,r){const s=new Ou(this.currentPoint.clone(),new ft(t,e),new ft(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(t,e,i,r,s,o){const a=new Uu(this.currentPoint.clone(),new ft(t,e),new ft(i,r),new ft(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new zu(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,r,s,o),this}absarc(t,e,i,r,s,o){return this.absellipse(t,e,i,i,r,s,o),this}ellipse(t,e,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,r,s,o,a,l),this}absellipse(t,e,i,r,s,o,a,l){const c=new xl(t,e,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class qr extends uc{constructor(t){super(t),this.uuid=An(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,r=this.holes.length;i<r;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(new uc().fromJSON(r))}return this}}function _d(n,t,e=2){const i=t&&t.length,r=i?t[0]*e:n.length;let s=ku(n,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=Sd(n,t,s,e)),n.length>80*e){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let f=e;f<r;f+=e){const p=n[f],g=n[f+1];p<a&&(a=p),g<l&&(l=g),p>u&&(u=p),g>h&&(h=g)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Yr(s,o,e,a,l,c,0),o}function ku(n,t,e,i,r){let s;if(r===Fd(n,t,e,i)>0)for(let o=t;o<e;o+=i)s=hc(o/i|0,n[o],n[o+1],s);else for(let o=e-i;o>=t;o-=i)s=hc(o/i|0,n[o],n[o+1],s);return s&&rr(s,s.next)&&(Jr(s),s=s.next),s}function Ei(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(rr(e,e.next)||ge(e.prev,e,e.next)===0)){if(Jr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Yr(n,t,e,i,r,s,o){if(!n)return;!o&&s&&wd(n,i,r,s);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(s?xd(n,i,r,s):vd(n)){t.push(l.i,n.i,c.i),Jr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Md(Ei(n),t),Yr(n,t,e,i,r,s,2)):o===2&&yd(n,t,e,i,r,s):Yr(Ei(n),t,e,i,r,s,1);break}}}function vd(n){const t=n.prev,e=n,i=n.next;if(ge(t,e,i)>=0)return!1;const r=t.x,s=e.x,o=i.x,a=t.y,l=e.y,c=i.y,u=Math.min(r,s,o),h=Math.min(a,l,c),f=Math.max(r,s,o),p=Math.max(a,l,c);let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=p&&Lr(r,a,s,l,o,c,g.x,g.y)&&ge(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function xd(n,t,e,i){const r=n.prev,s=n,o=n.next;if(ge(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,p=Math.min(a,l,c),g=Math.min(u,h,f),_=Math.max(a,l,c),m=Math.max(u,h,f),d=ja(p,g,t,e,i),T=ja(_,m,t,e,i);let E=n.prevZ,x=n.nextZ;for(;E&&E.z>=d&&x&&x.z<=T;){if(E.x>=p&&E.x<=_&&E.y>=g&&E.y<=m&&E!==r&&E!==o&&Lr(a,u,l,h,c,f,E.x,E.y)&&ge(E.prev,E,E.next)>=0||(E=E.prevZ,x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&Lr(a,u,l,h,c,f,x.x,x.y)&&ge(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;E&&E.z>=d;){if(E.x>=p&&E.x<=_&&E.y>=g&&E.y<=m&&E!==r&&E!==o&&Lr(a,u,l,h,c,f,E.x,E.y)&&ge(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;x&&x.z<=T;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&Lr(a,u,l,h,c,f,x.x,x.y)&&ge(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Md(n,t){let e=n;do{const i=e.prev,r=e.next.next;!rr(i,r)&&Vu(i,e,e.next,r)&&Zr(i,r)&&Zr(r,i)&&(t.push(i.i,e.i,r.i),Jr(e),Jr(e.next),e=n=r),e=e.next}while(e!==n);return Ei(e)}function yd(n,t,e,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Pd(o,a)){let l=Gu(o,a);o=Ei(o,o.next),l=Ei(l,l.next),Yr(o,t,e,i,r,s,0),Yr(l,t,e,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function Sd(n,t,e,i){const r=[];for(let s=0,o=t.length;s<o;s++){const a=t[s]*i,l=s<o-1?t[s+1]*i:n.length,c=ku(n,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(Rd(c))}r.sort(Ed);for(let s=0;s<r.length;s++)e=Td(r[s],e);return e}function Ed(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=i-r}return e}function Td(n,t){const e=bd(n,t);if(!e)return t;const i=Gu(e,n);return Ei(i,i.next),Ei(e,e.next)}function bd(n,t){let e=t;const i=n.x,r=n.y;let s=-1/0,o;if(rr(n,e))return e;do{if(rr(n,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const h=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=i&&h>s&&(s=h,o=e.x<e.next.x?e:e.next,h===i))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Hu(r<c?i:s,r,l,c,r<c?s:i,r,e.x,e.y)){const h=Math.abs(r-e.y)/(i-e.x);Zr(e,n)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&Ad(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function Ad(n,t){return ge(n.prev,n,t.prev)<0&&ge(t.next,n,n.next)<0}function wd(n,t,e,i){let r=n;do r.z===0&&(r.z=ja(r.x,r.y,t,e,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Cd(r)}function Cd(n){let t,e=1;do{let i=n,r;n=null;let s=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,e*=2}while(t>1);return n}function ja(n,t,e,i,r){return n=(n-e)*r|0,t=(t-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Rd(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Hu(n,t,e,i,r,s,o,a){return(r-o)*(t-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(i-a)}function Lr(n,t,e,i,r,s,o,a){return!(n===o&&t===a)&&Hu(n,t,e,i,r,s,o,a)}function Pd(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Ld(n,t)&&(Zr(n,t)&&Zr(t,n)&&Dd(n,t)&&(ge(n.prev,n,t.prev)||ge(n,t.prev,t))||rr(n,t)&&ge(n.prev,n,n.next)>0&&ge(t.prev,t,t.next)>0)}function ge(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function rr(n,t){return n.x===t.x&&n.y===t.y}function Vu(n,t,e,i){const r=Gs(ge(n,t,e)),s=Gs(ge(n,t,i)),o=Gs(ge(e,i,n)),a=Gs(ge(e,i,t));return!!(r!==s&&o!==a||r===0&&Vs(n,e,t)||s===0&&Vs(n,i,t)||o===0&&Vs(e,n,i)||a===0&&Vs(e,t,i))}function Vs(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Gs(n){return n>0?1:n<0?-1:0}function Ld(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Vu(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Zr(n,t){return ge(n.prev,n,n.next)<0?ge(n,t,n.next)>=0&&ge(n,n.prev,t)>=0:ge(n,t,n.prev)<0||ge(n,n.next,t)<0}function Dd(n,t){let e=n,i=!1;const r=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Gu(n,t){const e=Qa(n.i,n.x,n.y),i=Qa(t.i,t.x,t.y),r=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=r,r.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function hc(n,t,e,i){const r=Qa(n,t,e);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Jr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Qa(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Fd(n,t,e,i){let r=0;for(let s=t,o=e-i;s<e;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class Id{static triangulate(t,e,i=2){return _d(t,e,i)}}class Yi{static area(t){const e=t.length;let i=0;for(let r=e-1,s=0;s<e;r=s++)i+=t[r].x*t[s].y-t[s].x*t[r].y;return i*.5}static isClockWise(t){return Yi.area(t)<0}static triangulateShape(t,e){const i=[],r=[],s=[];fc(t),dc(i,t);let o=t.length;e.forEach(fc);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,dc(i,e[l]);const a=Id.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function fc(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function dc(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class $r extends Le{constructor(t=new qr([new ft(.5,.5),new ft(-.5,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,r=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new se(r,3)),this.setAttribute("uv",new se(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:Ud;let E,x=!1,P,R,L,D;d&&(E=d.getSpacedPoints(u),x=!0,f=!1,P=d.computeFrenetFrames(u,!1),R=new w,L=new w,D=new w),f||(m=0,p=0,g=0,_=0);const y=a.extractPoints(c);let M=y.shape;const C=y.holes;if(!Yi.isClockWise(M)){M=M.reverse();for(let Y=0,J=C.length;Y<J;Y++){const Q=C[Y];Yi.isClockWise(Q)&&(C[Y]=Q.reverse())}}function O(Y){const Q=10000000000000001e-36;let et=Y[0];for(let pt=1;pt<=Y.length;pt++){const at=pt%Y.length,mt=Y[at],qt=mt.x-et.x,Xt=mt.y-et.y,A=qt*qt+Xt*Xt,v=Math.max(Math.abs(mt.x),Math.abs(mt.y),Math.abs(et.x),Math.abs(et.y)),z=Q*v*v;if(A<=z){Y.splice(at,1),pt--;continue}et=mt}}O(M),C.forEach(O);const k=C.length,V=M;for(let Y=0;Y<k;Y++){const J=C[Y];M=M.concat(J)}function H(Y,J,Q){return J||console.error("THREE.ExtrudeGeometry: vec does not exist"),Y.clone().addScaledVector(J,Q)}const nt=M.length;function G(Y,J,Q){let et,pt,at;const mt=Y.x-J.x,qt=Y.y-J.y,Xt=Q.x-Y.x,A=Q.y-Y.y,v=mt*mt+qt*qt,z=mt*A-qt*Xt;if(Math.abs(z)>Number.EPSILON){const Z=Math.sqrt(v),ot=Math.sqrt(Xt*Xt+A*A),$=J.x-qt/Z,Ut=J.y+mt/Z,dt=Q.x-A/ot,Dt=Q.y+Xt/ot,Ft=((dt-$)*A-(Dt-Ut)*Xt)/(mt*A-qt*Xt);et=$+mt*Ft-Y.x,pt=Ut+qt*Ft-Y.y;const lt=et*et+pt*pt;if(lt<=2)return new ft(et,pt);at=Math.sqrt(lt/2)}else{let Z=!1;mt>Number.EPSILON?Xt>Number.EPSILON&&(Z=!0):mt<-Number.EPSILON?Xt<-Number.EPSILON&&(Z=!0):Math.sign(qt)===Math.sign(A)&&(Z=!0),Z?(et=-qt,pt=mt,at=Math.sqrt(v)):(et=mt,pt=qt,at=Math.sqrt(v/2))}return new ft(et/at,pt/at)}const st=[];for(let Y=0,J=V.length,Q=J-1,et=Y+1;Y<J;Y++,Q++,et++)Q===J&&(Q=0),et===J&&(et=0),st[Y]=G(V[Y],V[Q],V[et]);const gt=[];let yt,kt=st.concat();for(let Y=0,J=k;Y<J;Y++){const Q=C[Y];yt=[];for(let et=0,pt=Q.length,at=pt-1,mt=et+1;et<pt;et++,at++,mt++)at===pt&&(at=0),mt===pt&&(mt=0),yt[et]=G(Q[et],Q[at],Q[mt]);gt.push(yt),kt=kt.concat(yt)}let tt;if(m===0)tt=Yi.triangulateShape(V,C);else{const Y=[],J=[];for(let Q=0;Q<m;Q++){const et=Q/m,pt=p*Math.cos(et*Math.PI/2),at=g*Math.sin(et*Math.PI/2)+_;for(let mt=0,qt=V.length;mt<qt;mt++){const Xt=H(V[mt],st[mt],at);Lt(Xt.x,Xt.y,-pt),et===0&&Y.push(Xt)}for(let mt=0,qt=k;mt<qt;mt++){const Xt=C[mt];yt=gt[mt];const A=[];for(let v=0,z=Xt.length;v<z;v++){const Z=H(Xt[v],yt[v],at);Lt(Z.x,Z.y,-pt),et===0&&A.push(Z)}et===0&&J.push(A)}}tt=Yi.triangulateShape(Y,J)}const At=tt.length,Tt=g+_;for(let Y=0;Y<nt;Y++){const J=f?H(M[Y],kt[Y],Tt):M[Y];x?(L.copy(P.normals[0]).multiplyScalar(J.x),R.copy(P.binormals[0]).multiplyScalar(J.y),D.copy(E[0]).add(L).add(R),Lt(D.x,D.y,D.z)):Lt(J.x,J.y,0)}for(let Y=1;Y<=u;Y++)for(let J=0;J<nt;J++){const Q=f?H(M[J],kt[J],Tt):M[J];x?(L.copy(P.normals[Y]).multiplyScalar(Q.x),R.copy(P.binormals[Y]).multiplyScalar(Q.y),D.copy(E[Y]).add(L).add(R),Lt(D.x,D.y,D.z)):Lt(Q.x,Q.y,h/u*Y)}for(let Y=m-1;Y>=0;Y--){const J=Y/m,Q=p*Math.cos(J*Math.PI/2),et=g*Math.sin(J*Math.PI/2)+_;for(let pt=0,at=V.length;pt<at;pt++){const mt=H(V[pt],st[pt],et);Lt(mt.x,mt.y,h+Q)}for(let pt=0,at=C.length;pt<at;pt++){const mt=C[pt];yt=gt[pt];for(let qt=0,Xt=mt.length;qt<Xt;qt++){const A=H(mt[qt],yt[qt],et);x?Lt(A.x,A.y+E[u-1].y,E[u-1].x+Q):Lt(A.x,A.y,h+Q)}}}X(),K();function X(){const Y=r.length/3;if(f){let J=0,Q=nt*J;for(let et=0;et<At;et++){const pt=tt[et];Ct(pt[2]+Q,pt[1]+Q,pt[0]+Q)}J=u+m*2,Q=nt*J;for(let et=0;et<At;et++){const pt=tt[et];Ct(pt[0]+Q,pt[1]+Q,pt[2]+Q)}}else{for(let J=0;J<At;J++){const Q=tt[J];Ct(Q[2],Q[1],Q[0])}for(let J=0;J<At;J++){const Q=tt[J];Ct(Q[0]+nt*u,Q[1]+nt*u,Q[2]+nt*u)}}i.addGroup(Y,r.length/3-Y,0)}function K(){const Y=r.length/3;let J=0;vt(V,J),J+=V.length;for(let Q=0,et=C.length;Q<et;Q++){const pt=C[Q];vt(pt,J),J+=pt.length}i.addGroup(Y,r.length/3-Y,1)}function vt(Y,J){let Q=Y.length;for(;--Q>=0;){const et=Q;let pt=Q-1;pt<0&&(pt=Y.length-1);for(let at=0,mt=u+m*2;at<mt;at++){const qt=nt*at,Xt=nt*(at+1),A=J+et+qt,v=J+pt+qt,z=J+pt+Xt,Z=J+et+Xt;Kt(A,v,z,Z)}}}function Lt(Y,J,Q){l.push(Y),l.push(J),l.push(Q)}function Ct(Y,J,Q){j(Y),j(J),j(Q);const et=r.length/3,pt=T.generateTopUV(i,r,et-3,et-2,et-1);b(pt[0]),b(pt[1]),b(pt[2])}function Kt(Y,J,Q,et){j(Y),j(J),j(et),j(J),j(Q),j(et);const pt=r.length/3,at=T.generateSideWallUV(i,r,pt-6,pt-3,pt-2,pt-1);b(at[0]),b(at[1]),b(at[3]),b(at[1]),b(at[2]),b(at[3])}function j(Y){r.push(l[Y*3+0]),r.push(l[Y*3+1]),r.push(l[Y*3+2])}function b(Y){s.push(Y.x),s.push(Y.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Nd(e,i,t)}static fromJSON(t,e){const i=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];i.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new uo[r.type]().fromJSON(r)),new $r(i,t.options)}}const Ud={generateTopUV:function(n,t,e,i,r){const s=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[r*3],u=t[r*3+1];return[new ft(s,o),new ft(a,l),new ft(c,u)]},generateSideWallUV:function(n,t,e,i,r,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],u=t[i*3+1],h=t[i*3+2],f=t[r*3],p=t[r*3+1],g=t[r*3+2],_=t[s*3],m=t[s*3+1],d=t[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ft(o,1-l),new ft(c,1-h),new ft(f,1-g),new ft(_,1-d)]:[new ft(a,1-l),new ft(u,1-h),new ft(p,1-g),new ft(m,1-d)]}};function Nd(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class pr extends Le{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=t/a,f=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const T=d*f-o;for(let E=0;E<c;E++){const x=E*h-s;g.push(x,-T,0),_.push(0,0,1),m.push(E/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<a;T++){const E=T+c*d,x=T+c*(d+1),P=T+1+c*(d+1),R=T+1+c*d;p.push(E,x,R),p.push(x,P,R)}this.setIndex(p),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pr(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ti extends Le{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new w,f=new w,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){const T=[],E=d/i;let x=0;d===0&&o===0?x=.5/e:d===i&&l===Math.PI&&(x=-.5/e);for(let P=0;P<=e;P++){const R=P/e;h.x=-t*Math.cos(r+R*s)*Math.sin(o+E*a),h.y=t*Math.cos(o+E*a),h.z=t*Math.sin(r+R*s)*Math.sin(o+E*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(R+x,1-E),T.push(c++)}u.push(T)}for(let d=0;d<i;d++)for(let T=0;T<e;T++){const E=u[d][T+1],x=u[d][T],P=u[d+1][T],R=u[d+1][T+1];(d!==0||o>0)&&p.push(E,x,R),(d!==i-1||l<Math.PI)&&p.push(x,P,R)}this.setIndex(p),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ti(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class yl extends Le{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new w,h=new w,f=new w;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const _=g/r*s,m=p/i*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const _=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,d=(r+1)*(p-1)+g,T=(r+1)*p+g;o.push(_,m,T),o.push(m,d,T)}this.setIndex(o),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Sl extends Le{constructor(t=new Bu(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),e=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:r,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new w,l=new w,c=new ft;let u=new w;const h=[],f=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new se(h,3)),this.setAttribute("normal",new se(f,3)),this.setAttribute("uv",new se(p,2));function _(){for(let E=0;E<e;E++)m(E);m(s===!1?e:0),T(),d()}function m(E){u=t.getPointAt(E/e,u);const x=o.normals[E],P=o.binormals[E];for(let R=0;R<=r;R++){const L=R/r*Math.PI*2,D=Math.sin(L),y=-Math.cos(L);l.x=y*x.x+D*P.x,l.y=y*x.y+D*P.y,l.z=y*x.z+D*P.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+i*l.x,a.y=u.y+i*l.y,a.z=u.z+i*l.z,h.push(a.x,a.y,a.z)}}function d(){for(let E=1;E<=e;E++)for(let x=1;x<=r;x++){const P=(r+1)*(E-1)+(x-1),R=(r+1)*E+(x-1),L=(r+1)*E+x,D=(r+1)*(E-1)+x;g.push(P,R,D),g.push(R,L,D)}}function T(){for(let E=0;E<=e;E++)for(let x=0;x<=r;x++)c.x=E/e,c.y=x/r,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Sl(new uo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Od extends hr{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new zt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_u,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Bd extends hr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class zd extends hr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class xo extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const jo=new re,pc=new w,mc=new w;class El{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _l,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;pc.setFromMatrixPosition(t.matrixWorld),e.position.copy(pc),mc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mc),e.updateMatrixWorld(),jo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jo,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(jo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class kd extends El{constructor(){super(new Ge(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,i=nr*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(i!==e.fov||r!==e.aspect||s!==e.far)&&(e.fov=i,e.aspect=r,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class gc extends xo{constructor(t,e,i=0,r=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new kd}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const _c=new re,wr=new w,Qo=new w;class Hd extends El{constructor(){super(new Ge(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,r=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),wr.setFromMatrixPosition(t.matrixWorld),i.position.copy(wr),Qo.copy(i.position),Qo.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Qo),i.updateMatrixWorld(),r.makeTranslation(-wr.x,-wr.y,-wr.z),_c.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_c,i.coordinateSystem,i.reversedDepth)}}class Vd extends xo{constructor(t,e,i=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Hd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Wu extends Au{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Gd extends El{constructor(){super(new Wu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tl extends xo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new Gd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Xu extends xo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Wd extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const vc=new re;class Xd{constructor(t,e,i=0,r=1/0){this.ray=new yu(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new gl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return vc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vc),this}intersectObject(t,e=!0,i=[]){return tl(t,this,i,e),i.sort(xc),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)tl(t[r],this,i,e);return i.sort(xc),i}}function xc(n,t){return n.distance-t.distance}function tl(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)tl(s[o],t,e,!0)}}function Mc(n,t,e,i){const r=qd(i);switch(e){case pu:return n*t;case _o:return n*t/r.components*r.byteLength;case hl:return n*t/r.components*r.byteLength;case gu:return n*t*2/r.components*r.byteLength;case fl:return n*t*2/r.components*r.byteLength;case mu:return n*t*3/r.components*r.byteLength;case pn:return n*t*4/r.components*r.byteLength;case dl:return n*t*4/r.components*r.byteLength;case $s:case Ks:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case js:case Qs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ea:case ba:return Math.max(n,16)*Math.max(t,8)/4;case Sa:case Ta:return Math.max(n,8)*Math.max(t,8)/2;case Aa:case wa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ca:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case La:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Da:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Na:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Oa:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case za:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ka:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ha:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Va:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ga:case Wa:case Xa:return Math.ceil(n/4)*Math.ceil(t/4)*16;case qa:case Ya:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Za:case Ja:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qd(n){switch(n){case Cn:case uu:return{byteLength:1,components:1};case Hr:case hu:case ls:return{byteLength:2,components:1};case cl:case ul:return{byteLength:2,components:4};case yi:case ll:case En:return{byteLength:4,components:1};case fu:case du:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ol}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ol);function qu(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Yd(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Zd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jd=`#ifdef USE_ALPHAHASH
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
#endif`,$d=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tp=`#ifdef USE_AOMAP
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
#endif`,ep=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,np=`#ifdef USE_BATCHING
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
#endif`,ip=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,op=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ap=`#ifdef USE_IRIDESCENCE
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
#endif`,lp=`#ifdef USE_BUMPMAP
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
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_p=`#define PI 3.141592653589793
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
} // validated`,vp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xp=`vec3 transformedNormal = objectNormal;
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
#endif`,Mp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",bp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ap=`#ifdef USE_ENVMAP
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
#endif`,wp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ip=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Up=`#ifdef USE_GRADIENTMAP
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
}`,Np=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Op=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zp=`uniform bool receiveShadow;
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
#endif`,kp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xp=`PhysicalMaterial material;
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
#endif`,qp=`struct PhysicalMaterial {
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
}`,Yp=`
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
#endif`,Zp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$p=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,em=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,im=`#if defined( USE_POINTS_UV )
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
#endif`,rm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,om=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,am=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cm=`#ifdef USE_MORPHTARGETS
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
#endif`,um=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gm=`#ifdef USE_NORMALMAP
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
#endif`,_m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ym=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Em=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Am=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dm=`float getShadowMask() {
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
}`,Fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Im=`#ifdef USE_SKINNING
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
#endif`,Um=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nm=`#ifdef USE_SKINNING
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
#endif`,Om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,km=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hm=`#ifdef USE_TRANSMISSION
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
#endif`,Vm=`#ifdef USE_TRANSMISSION
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
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ym=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zm=`uniform sampler2D t2D;
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
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$m=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`#include <common>
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
}`,t0=`#if DEPTH_PACKING == 3200
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
}`,e0=`#define DISTANCE
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
}`,n0=`#define DISTANCE
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
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,r0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`uniform float scale;
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
}`,o0=`uniform vec3 diffuse;
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
}`,a0=`#include <common>
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
}`,l0=`uniform vec3 diffuse;
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
}`,c0=`#define LAMBERT
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
}`,u0=`#define LAMBERT
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
}`,h0=`#define MATCAP
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
}`,f0=`#define MATCAP
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
}`,d0=`#define NORMAL
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
}`,p0=`#define NORMAL
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
}`,m0=`#define PHONG
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
}`,g0=`#define PHONG
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
}`,_0=`#define STANDARD
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
}`,v0=`#define STANDARD
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
}`,x0=`#define TOON
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
}`,M0=`#define TOON
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
}`,y0=`uniform float size;
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
}`,S0=`uniform vec3 diffuse;
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
}`,E0=`#include <common>
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
}`,T0=`uniform vec3 color;
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
}`,b0=`uniform float rotation;
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
}`,A0=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:Zd,alphahash_pars_fragment:Jd,alphamap_fragment:$d,alphamap_pars_fragment:Kd,alphatest_fragment:jd,alphatest_pars_fragment:Qd,aomap_fragment:tp,aomap_pars_fragment:ep,batching_pars_vertex:np,batching_vertex:ip,begin_vertex:rp,beginnormal_vertex:sp,bsdfs:op,iridescence_fragment:ap,bumpmap_pars_fragment:lp,clipping_planes_fragment:cp,clipping_planes_pars_fragment:up,clipping_planes_pars_vertex:hp,clipping_planes_vertex:fp,color_fragment:dp,color_pars_fragment:pp,color_pars_vertex:mp,color_vertex:gp,common:_p,cube_uv_reflection_fragment:vp,defaultnormal_vertex:xp,displacementmap_pars_vertex:Mp,displacementmap_vertex:yp,emissivemap_fragment:Sp,emissivemap_pars_fragment:Ep,colorspace_fragment:Tp,colorspace_pars_fragment:bp,envmap_fragment:Ap,envmap_common_pars_fragment:wp,envmap_pars_fragment:Cp,envmap_pars_vertex:Rp,envmap_physical_pars_fragment:kp,envmap_vertex:Pp,fog_vertex:Lp,fog_pars_vertex:Dp,fog_fragment:Fp,fog_pars_fragment:Ip,gradientmap_pars_fragment:Up,lightmap_pars_fragment:Np,lights_lambert_fragment:Op,lights_lambert_pars_fragment:Bp,lights_pars_begin:zp,lights_toon_fragment:Hp,lights_toon_pars_fragment:Vp,lights_phong_fragment:Gp,lights_phong_pars_fragment:Wp,lights_physical_fragment:Xp,lights_physical_pars_fragment:qp,lights_fragment_begin:Yp,lights_fragment_maps:Zp,lights_fragment_end:Jp,logdepthbuf_fragment:$p,logdepthbuf_pars_fragment:Kp,logdepthbuf_pars_vertex:jp,logdepthbuf_vertex:Qp,map_fragment:tm,map_pars_fragment:em,map_particle_fragment:nm,map_particle_pars_fragment:im,metalnessmap_fragment:rm,metalnessmap_pars_fragment:sm,morphinstance_vertex:om,morphcolor_vertex:am,morphnormal_vertex:lm,morphtarget_pars_vertex:cm,morphtarget_vertex:um,normal_fragment_begin:hm,normal_fragment_maps:fm,normal_pars_fragment:dm,normal_pars_vertex:pm,normal_vertex:mm,normalmap_pars_fragment:gm,clearcoat_normal_fragment_begin:_m,clearcoat_normal_fragment_maps:vm,clearcoat_pars_fragment:xm,iridescence_pars_fragment:Mm,opaque_fragment:ym,packing:Sm,premultiplied_alpha_fragment:Em,project_vertex:Tm,dithering_fragment:bm,dithering_pars_fragment:Am,roughnessmap_fragment:wm,roughnessmap_pars_fragment:Cm,shadowmap_pars_fragment:Rm,shadowmap_pars_vertex:Pm,shadowmap_vertex:Lm,shadowmask_pars_fragment:Dm,skinbase_vertex:Fm,skinning_pars_vertex:Im,skinning_vertex:Um,skinnormal_vertex:Nm,specularmap_fragment:Om,specularmap_pars_fragment:Bm,tonemapping_fragment:zm,tonemapping_pars_fragment:km,transmission_fragment:Hm,transmission_pars_fragment:Vm,uv_pars_fragment:Gm,uv_pars_vertex:Wm,uv_vertex:Xm,worldpos_vertex:qm,background_vert:Ym,background_frag:Zm,backgroundCube_vert:Jm,backgroundCube_frag:$m,cube_vert:Km,cube_frag:jm,depth_vert:Qm,depth_frag:t0,distanceRGBA_vert:e0,distanceRGBA_frag:n0,equirect_vert:i0,equirect_frag:r0,linedashed_vert:s0,linedashed_frag:o0,meshbasic_vert:a0,meshbasic_frag:l0,meshlambert_vert:c0,meshlambert_frag:u0,meshmatcap_vert:h0,meshmatcap_frag:f0,meshnormal_vert:d0,meshnormal_frag:p0,meshphong_vert:m0,meshphong_frag:g0,meshphysical_vert:_0,meshphysical_frag:v0,meshtoon_vert:x0,meshtoon_frag:M0,points_vert:y0,points_frag:S0,shadow_vert:E0,shadow_frag:T0,sprite_vert:b0,sprite_frag:A0},xt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},xn={basic:{uniforms:Be([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Be([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Be([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Be([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Be([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Be([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Be([xt.points,xt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Be([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Be([xt.common,xt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Be([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Be([xt.sprite,xt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:Be([xt.common,xt.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:Be([xt.lights,xt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};xn.physical={uniforms:Be([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const Ws={r:0,b:0,g:0},hi=new Xn,w0=new re;function C0(n,t,e,i,r,s,o){const a=new zt(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?e:t).get(x)),x}function _(E){let x=!1;const P=g(E);P===null?d(a,l):P&&P.isColor&&(d(P,1),x=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,x){const P=g(x);P&&(P.isCubeTexture||P.mapping===go)?(u===void 0&&(u=new te(new Xe(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:ir(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,L,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),hi.copy(x.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(w0.makeRotationFromEuler(hi)),u.material.toneMapped=ne.getTransfer(P.colorSpace)!==le,(h!==P||f!==P.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=P,f=P.version,p=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new te(new pr(2,2),new ei({name:"BackgroundMaterial",uniforms:ir(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ne.getTransfer(P.colorSpace)!==le,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(h!==P||f!==P.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=P,f=P.version,p=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function d(E,x){E.getRGB(Ws,bu(n)),i.buffers.color.setClear(Ws.r,Ws.g,Ws.b,x,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,x=1){a.set(E),l=x,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,d(a,l)},render:_,addToRenderList:m,dispose:T}}function R0(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(M,C,U,O,k){let V=!1;const H=h(O,U,C);s!==H&&(s=H,c(s.object)),V=p(M,O,U,k),V&&g(M,O,U,k),k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,x(M,C,U,O),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,C,U){const O=U.wireframe===!0;let k=i[M.id];k===void 0&&(k={},i[M.id]=k);let V=k[C.id];V===void 0&&(V={},k[C.id]=V);let H=V[O];return H===void 0&&(H=f(l()),V[O]=H),H}function f(M){const C=[],U=[],O=[];for(let k=0;k<e;k++)C[k]=0,U[k]=0,O[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:O,object:M,attributes:{},index:null}}function p(M,C,U,O){const k=s.attributes,V=C.attributes;let H=0;const nt=U.getAttributes();for(const G in nt)if(nt[G].location>=0){const gt=k[G];let yt=V[G];if(yt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor)),gt===void 0||gt.attribute!==yt||yt&&gt.data!==yt.data)return!0;H++}return s.attributesNum!==H||s.index!==O}function g(M,C,U,O){const k={},V=C.attributes;let H=0;const nt=U.getAttributes();for(const G in nt)if(nt[G].location>=0){let gt=V[G];gt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(gt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(gt=M.instanceColor));const yt={};yt.attribute=gt,gt&&gt.data&&(yt.data=gt.data),k[G]=yt,H++}s.attributes=k,s.attributesNum=H,s.index=O}function _(){const M=s.newAttributes;for(let C=0,U=M.length;C<U;C++)M[C]=0}function m(M){d(M,0)}function d(M,C){const U=s.newAttributes,O=s.enabledAttributes,k=s.attributeDivisors;U[M]=1,O[M]===0&&(n.enableVertexAttribArray(M),O[M]=1),k[M]!==C&&(n.vertexAttribDivisor(M,C),k[M]=C)}function T(){const M=s.newAttributes,C=s.enabledAttributes;for(let U=0,O=C.length;U<O;U++)C[U]!==M[U]&&(n.disableVertexAttribArray(U),C[U]=0)}function E(M,C,U,O,k,V,H){H===!0?n.vertexAttribIPointer(M,C,U,k,V):n.vertexAttribPointer(M,C,U,O,k,V)}function x(M,C,U,O){_();const k=O.attributes,V=U.getAttributes(),H=C.defaultAttributeValues;for(const nt in V){const G=V[nt];if(G.location>=0){let st=k[nt];if(st===void 0&&(nt==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),nt==="instanceColor"&&M.instanceColor&&(st=M.instanceColor)),st!==void 0){const gt=st.normalized,yt=st.itemSize,kt=t.get(st);if(kt===void 0)continue;const tt=kt.buffer,At=kt.type,Tt=kt.bytesPerElement,X=At===n.INT||At===n.UNSIGNED_INT||st.gpuType===ll;if(st.isInterleavedBufferAttribute){const K=st.data,vt=K.stride,Lt=st.offset;if(K.isInstancedInterleavedBuffer){for(let Ct=0;Ct<G.locationSize;Ct++)d(G.location+Ct,K.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Ct=0;Ct<G.locationSize;Ct++)m(G.location+Ct);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let Ct=0;Ct<G.locationSize;Ct++)E(G.location+Ct,yt/G.locationSize,At,gt,vt*Tt,(Lt+yt/G.locationSize*Ct)*Tt,X)}else{if(st.isInstancedBufferAttribute){for(let K=0;K<G.locationSize;K++)d(G.location+K,st.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let K=0;K<G.locationSize;K++)m(G.location+K);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let K=0;K<G.locationSize;K++)E(G.location+K,yt/G.locationSize,At,gt,yt*Tt,yt/G.locationSize*K*Tt,X)}}else if(H!==void 0){const gt=H[nt];if(gt!==void 0)switch(gt.length){case 2:n.vertexAttrib2fv(G.location,gt);break;case 3:n.vertexAttrib3fv(G.location,gt);break;case 4:n.vertexAttrib4fv(G.location,gt);break;default:n.vertexAttrib1fv(G.location,gt)}}}}T()}function P(){D();for(const M in i){const C=i[M];for(const U in C){const O=C[U];for(const k in O)u(O[k].object),delete O[k];delete C[U]}delete i[M]}}function R(M){if(i[M.id]===void 0)return;const C=i[M.id];for(const U in C){const O=C[U];for(const k in O)u(O[k].object),delete O[k];delete C[U]}delete i[M.id]}function L(M){for(const C in i){const U=i[C];if(U[M.id]===void 0)continue;const O=U[M.id];for(const k in O)u(O[k].object),delete O[k];delete U[M.id]}}function D(){y(),o=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:y,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function P0(n,t,e){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,i,1)}function l(c,u,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function L0(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(L){return!(L!==pn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const D=L===ls&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==Cn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==En&&!D)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:P,maxSamples:R}}function D0(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new di,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const T=s?0:i,E=T*4;let x=d.clippingState||null;l.value=x,x=u(g,f,E,p);for(let P=0;P!==E;++P)x[P]=e[P];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,x=p;E!==_;++E,x+=4)o.copy(h[E]).applyMatrix4(T,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function F0(n){let t=new WeakMap;function e(o,a){return a===xa?o.mapping=Qi:a===Ma&&(o.mapping=tr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===xa||a===Ma)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Kf(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const Zi=4,yc=[.125,.215,.35,.446,.526,.582],gi=20,ta=new Wu,Sc=new zt;let ea=null,na=0,ia=0,ra=!1;const pi=(1+Math.sqrt(5))/2,Wi=1/pi,Ec=[new w(-pi,Wi,0),new w(pi,Wi,0),new w(-Wi,0,pi),new w(Wi,0,pi),new w(0,pi,-Wi),new w(0,pi,Wi),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],I0=new w;class Tc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100,s={}){const{size:o=256,position:a=I0}=s;ea=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ac(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ea,na,ia),this._renderer.xr.enabled=ra,t.scissorTest=!1,Xs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ea=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:ls,format:pn,colorSpace:er,depthBuffer:!1},r=bc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bc(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=U0(s)),this._blurMaterial=N0(s,t,e)}return r}_compileMaterial(t){const e=new te(this._lodPlanes[0],t);this._renderer.compile(e,ta)}_sceneToCubeUV(t,e,i,r,s){const l=new Ge(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Sc),h.toneMapping=Hn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const _=new fr({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),m=new te(new Xe,_);let d=!1;const T=t.background;T?T.isColor&&(_.color.copy(T),t.background=null,d=!0):(_.color.copy(Sc),d=!0);for(let E=0;E<6;E++){const x=E%3;x===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[E],s.y,s.z)):x===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[E]));const P=this._cubeSize;Xs(r,x*P,E>2?P:0,P,P),h.setRenderTarget(r),d&&h.render(m,l),h.render(t,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=f,t.background=T}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Qi||t.mapping===tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ac());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new te(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Xs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,ta)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ec[(r-s-1)%Ec.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new te(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*gi-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):gi;m>gi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gi}`);const d=[];let T=0;for(let L=0;L<gi;++L){const D=L/_,y=Math.exp(-D*D/2);d.push(y),L===0?T+=y:L<m&&(T+=2*y)}for(let L=0;L<d.length;L++)d[L]=d[L]/T;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-i;const x=this._sizeLods[r],P=3*x*(r>E-Zi?r-E+Zi:0),R=4*(this._cubeSize-x);Xs(e,P,R,3*x,2*x),l.setRenderTarget(e),l.render(h,ta)}}function U0(n){const t=[],e=[],i=[];let r=n;const s=n-Zi+1+yc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Zi?l=yc[o-n+Zi-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,d=1,T=new Float32Array(_*g*p),E=new Float32Array(m*g*p),x=new Float32Array(d*g*p);for(let R=0;R<p;R++){const L=R%3*2/3-1,D=R>2?0:-1,y=[L,D,0,L+2/3,D,0,L+2/3,D+1,0,L,D,0,L+2/3,D+1,0,L,D+1,0];T.set(y,_*g*R),E.set(f,m*g*R);const M=[R,R,R,R,R,R];x.set(M,d*g*R)}const P=new Le;P.setAttribute("position",new an(T,_)),P.setAttribute("uv",new an(E,m)),P.setAttribute("faceIndex",new an(x,d)),t.push(P),r>Zi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function bc(n,t,e){const i=new Si(n,t,e);return i.texture.mapping=go,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xs(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function N0(n,t,e){const i=new Float32Array(gi),r=new w(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bl(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Ac(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bl(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function wc(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function bl(){return`

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
	`}function O0(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===xa||l===Ma,u=l===Qi||l===tr;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Tc(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(e===null&&(e=new Tc(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function B0(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Xr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function z0(n,t,e,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(t.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)t.update(f[p],n.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const T=p.array;_=p.version;for(let E=0,x=T.length;E<x;E+=3){const P=T[E+0],R=T[E+1],L=T[E+2];f.push(P,R,R,L,L,P)}}else if(g!==void 0){const T=g.array;_=g.version;for(let E=0,x=T.length/3-1;E<x;E+=3){const P=E+0,R=E+1,L=E+2;f.push(P,R,R,L,L,P)}}else return;const m=new(xu(f)?Tu:Eu)(f,1);m.version=_;const d=s.get(h);d&&t.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function k0(n,t,e){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*o),e.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,f*o,g),e.update(p,i,g))}function u(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,i,1)}function h(f,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,_,0,g);let d=0;for(let T=0;T<g;T++)d+=p[T]*_[T];e.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function H0(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function V0(n,t,e){const i=new WeakMap,r=new ue;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let y=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let E=0;p===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let x=a.attributes.position.count*E,P=1;x>t.maxTextureSize&&(P=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const R=new Float32Array(x*P*4*h),L=new Mu(R,x,P,h);L.type=En,L.needsUpdate=!0;const D=E*4;for(let M=0;M<h;M++){const C=m[M],U=d[M],O=T[M],k=x*P*4*M;for(let V=0;V<C.count;V++){const H=V*D;p===!0&&(r.fromBufferAttribute(C,V),R[k+H+0]=r.x,R[k+H+1]=r.y,R[k+H+2]=r.z,R[k+H+3]=0),g===!0&&(r.fromBufferAttribute(U,V),R[k+H+4]=r.x,R[k+H+5]=r.y,R[k+H+6]=r.z,R[k+H+7]=0),_===!0&&(r.fromBufferAttribute(O,V),R[k+H+8]=r.x,R[k+H+9]=r.y,R[k+H+10]=r.z,R[k+H+11]=O.itemSize===4?r.w:1)}}f={count:h,texture:L,size:new ft(x,P)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function G0(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const Yu=new Ie,Cc=new Fu(1,1),Zu=new Mu,Ju=new If,$u=new wu,Rc=[],Pc=[],Lc=new Float32Array(16),Dc=new Float32Array(9),Fc=new Float32Array(4);function mr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Rc[r];if(s===void 0&&(s=new Float32Array(r),Rc[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function be(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ae(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Mo(n,t){let e=Pc[t];e===void 0&&(e=new Int32Array(t),Pc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function W0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function X0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;n.uniform2fv(this.addr,t),Ae(e,t)}}function q0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;n.uniform3fv(this.addr,t),Ae(e,t)}}function Y0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;n.uniform4fv(this.addr,t),Ae(e,t)}}function Z0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(be(e,i))return;Fc.set(i),n.uniformMatrix2fv(this.addr,!1,Fc),Ae(e,i)}}function J0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(be(e,i))return;Dc.set(i),n.uniformMatrix3fv(this.addr,!1,Dc),Ae(e,i)}}function $0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(be(e,i))return;Lc.set(i),n.uniformMatrix4fv(this.addr,!1,Lc),Ae(e,i)}}function K0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function j0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;n.uniform2iv(this.addr,t),Ae(e,t)}}function Q0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;n.uniform3iv(this.addr,t),Ae(e,t)}}function tg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;n.uniform4iv(this.addr,t),Ae(e,t)}}function eg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function ng(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;n.uniform2uiv(this.addr,t),Ae(e,t)}}function ig(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;n.uniform3uiv(this.addr,t),Ae(e,t)}}function rg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;n.uniform4uiv(this.addr,t),Ae(e,t)}}function sg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Cc.compareFunction=vu,s=Cc):s=Yu,e.setTexture2D(t||s,r)}function og(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Ju,r)}function ag(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||$u,r)}function lg(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Zu,r)}function cg(n){switch(n){case 5126:return W0;case 35664:return X0;case 35665:return q0;case 35666:return Y0;case 35674:return Z0;case 35675:return J0;case 35676:return $0;case 5124:case 35670:return K0;case 35667:case 35671:return j0;case 35668:case 35672:return Q0;case 35669:case 35673:return tg;case 5125:return eg;case 36294:return ng;case 36295:return ig;case 36296:return rg;case 35678:case 36198:case 36298:case 36306:case 35682:return sg;case 35679:case 36299:case 36307:return og;case 35680:case 36300:case 36308:case 36293:return ag;case 36289:case 36303:case 36311:case 36292:return lg}}function ug(n,t){n.uniform1fv(this.addr,t)}function hg(n,t){const e=mr(t,this.size,2);n.uniform2fv(this.addr,e)}function fg(n,t){const e=mr(t,this.size,3);n.uniform3fv(this.addr,e)}function dg(n,t){const e=mr(t,this.size,4);n.uniform4fv(this.addr,e)}function pg(n,t){const e=mr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function mg(n,t){const e=mr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function gg(n,t){const e=mr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function _g(n,t){n.uniform1iv(this.addr,t)}function vg(n,t){n.uniform2iv(this.addr,t)}function xg(n,t){n.uniform3iv(this.addr,t)}function Mg(n,t){n.uniform4iv(this.addr,t)}function yg(n,t){n.uniform1uiv(this.addr,t)}function Sg(n,t){n.uniform2uiv(this.addr,t)}function Eg(n,t){n.uniform3uiv(this.addr,t)}function Tg(n,t){n.uniform4uiv(this.addr,t)}function bg(n,t,e){const i=this.cache,r=t.length,s=Mo(e,r);be(i,s)||(n.uniform1iv(this.addr,s),Ae(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Yu,s[o])}function Ag(n,t,e){const i=this.cache,r=t.length,s=Mo(e,r);be(i,s)||(n.uniform1iv(this.addr,s),Ae(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Ju,s[o])}function wg(n,t,e){const i=this.cache,r=t.length,s=Mo(e,r);be(i,s)||(n.uniform1iv(this.addr,s),Ae(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||$u,s[o])}function Cg(n,t,e){const i=this.cache,r=t.length,s=Mo(e,r);be(i,s)||(n.uniform1iv(this.addr,s),Ae(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Zu,s[o])}function Rg(n){switch(n){case 5126:return ug;case 35664:return hg;case 35665:return fg;case 35666:return dg;case 35674:return pg;case 35675:return mg;case 35676:return gg;case 5124:case 35670:return _g;case 35667:case 35671:return vg;case 35668:case 35672:return xg;case 35669:case 35673:return Mg;case 5125:return yg;case 36294:return Sg;case 36295:return Eg;case 36296:return Tg;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return Ag;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Cg}}class Pg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=cg(e.type)}}class Lg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Rg(e.type)}}class Dg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const sa=/(\w+)(\])?(\[|\.)?/g;function Ic(n,t){n.seq.push(t),n.map[t.id]=t}function Fg(n,t,e){const i=n.name,r=i.length;for(sa.lastIndex=0;;){const s=sa.exec(i),o=sa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ic(e,c===void 0?new Pg(a,n,t):new Lg(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new Dg(a),Ic(e,h)),e=h}}}class to{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Fg(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function Uc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Ig=37297;let Ug=0;function Ng(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Nc=new $t;function Og(n){ne._getMatrix(Nc,ne.workingColorSpace,n);const t=`mat3( ${Nc.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(n)){case so:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Oc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Ng(n.getShaderSource(t),a)}else return s}function Bg(n,t){const e=Og(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function zg(n,t){let e;switch(t){case Wh:e="Linear";break;case Xh:e="Reinhard";break;case qh:e="Cineon";break;case Yh:e="ACESFilmic";break;case Jh:e="AgX";break;case $h:e="Neutral";break;case Zh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const qs=new w;function kg(){ne.getLuminanceCoefficients(qs);const n=qs.x.toFixed(4),t=qs.y.toFixed(4),e=qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dr).join(`
`)}function Vg(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Gg(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Dr(n){return n!==""}function Bc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Wg=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(n){return n.replace(Wg,qg)}const Xg=new Map;function qg(n,t){let e=Jt[t];if(e===void 0){const i=Xg.get(t);if(i!==void 0)e=Jt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return el(e)}const Yg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kc(n){return n.replace(Yg,Zg)}function Zg(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hc(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Jg(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===al?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Eh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function $g(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Qi:case tr:t="ENVMAP_TYPE_CUBE";break;case go:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Kg(n){let t="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===tr&&(t="ENVMAP_MODE_REFRACTION"),t}function jg(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case lu:t="ENVMAP_BLENDING_MULTIPLY";break;case Vh:t="ENVMAP_BLENDING_MIX";break;case Gh:t="ENVMAP_BLENDING_ADD";break}return t}function Qg(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function t_(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Jg(e),c=$g(e),u=Kg(e),h=jg(e),f=Qg(e),p=Hg(e),g=Vg(s),_=r.createProgram();let m,d,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Dr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Dr).join(`
`),d.length>0&&(d+=`
`)):(m=[Hc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),d=[Hc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hn?"#define TONE_MAPPING":"",e.toneMapping!==Hn?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Hn?zg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,Bg("linearToOutputTexel",e.outputColorSpace),kg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Dr).join(`
`)),o=el(o),o=Bc(o,e),o=zc(o,e),a=el(a),a=Bc(a,e),a=zc(a,e),o=kc(o),a=kc(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=T+m+o,x=T+d+a,P=Uc(r,r.VERTEX_SHADER,E),R=Uc(r,r.FRAGMENT_SHADER,x);r.attachShader(_,P),r.attachShader(_,R),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function L(C){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(_)||"",O=r.getShaderInfoLog(P)||"",k=r.getShaderInfoLog(R)||"",V=U.trim(),H=O.trim(),nt=k.trim();let G=!0,st=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,P,R);else{const gt=Oc(r,P,"vertex"),yt=Oc(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+V+`
`+gt+`
`+yt)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(H===""||nt==="")&&(st=!1);st&&(C.diagnostics={runnable:G,programLog:V,vertexShader:{log:H,prefix:m},fragmentShader:{log:nt,prefix:d}})}r.deleteShader(P),r.deleteShader(R),D=new to(r,_),y=Gg(r,_)}let D;this.getUniforms=function(){return D===void 0&&L(this),D};let y;this.getAttributes=function(){return y===void 0&&L(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,Ig)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ug++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=R,this}let e_=0;class n_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new i_(t),e.set(t,i)),i}}class i_{constructor(t){this.id=e_++,this.code=t,this.usedTimes=0}}function r_(n,t,e,i,r,s,o){const a=new gl,l=new n_,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,C,U,O){const k=U.fog,V=O.geometry,H=y.isMeshStandardMaterial?U.environment:null,nt=(y.isMeshStandardMaterial?e:t).get(y.envMap||H),G=nt&&nt.mapping===go?nt.image.height:null,st=g[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const gt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,yt=gt!==void 0?gt.length:0;let kt=0;V.morphAttributes.position!==void 0&&(kt=1),V.morphAttributes.normal!==void 0&&(kt=2),V.morphAttributes.color!==void 0&&(kt=3);let tt,At,Tt,X;if(st){const ie=xn[st];tt=ie.vertexShader,At=ie.fragmentShader}else tt=y.vertexShader,At=y.fragmentShader,l.update(y),Tt=l.getVertexShaderID(y),X=l.getFragmentShaderID(y);const K=n.getRenderTarget(),vt=n.state.buffers.depth.getReversed(),Lt=O.isInstancedMesh===!0,Ct=O.isBatchedMesh===!0,Kt=!!y.map,j=!!y.matcap,b=!!nt,Y=!!y.aoMap,J=!!y.lightMap,Q=!!y.bumpMap,et=!!y.normalMap,pt=!!y.displacementMap,at=!!y.emissiveMap,mt=!!y.metalnessMap,qt=!!y.roughnessMap,Xt=y.anisotropy>0,A=y.clearcoat>0,v=y.dispersion>0,z=y.iridescence>0,Z=y.sheen>0,ot=y.transmission>0,$=Xt&&!!y.anisotropyMap,Ut=A&&!!y.clearcoatMap,dt=A&&!!y.clearcoatNormalMap,Dt=A&&!!y.clearcoatRoughnessMap,Ft=z&&!!y.iridescenceMap,lt=z&&!!y.iridescenceThicknessMap,bt=Z&&!!y.sheenColorMap,Gt=Z&&!!y.sheenRoughnessMap,Ot=!!y.specularMap,Mt=!!y.specularColorMap,Zt=!!y.specularIntensityMap,I=ot&&!!y.transmissionMap,ht=ot&&!!y.thicknessMap,_t=!!y.gradientMap,Rt=!!y.alphaMap,ct=y.alphaTest>0,it=!!y.alphaHash,It=!!y.extensions;let Yt=Hn;y.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Yt=n.toneMapping);const fe={shaderID:st,shaderType:y.type,shaderName:y.name,vertexShader:tt,fragmentShader:At,defines:y.defines,customVertexShaderID:Tt,customFragmentShaderID:X,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Ct,batchingColor:Ct&&O._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&O.instanceColor!==null,instancingMorph:Lt&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:er,alphaToCoverage:!!y.alphaToCoverage,map:Kt,matcap:j,envMap:b,envMapMode:b&&nt.mapping,envMapCubeUVHeight:G,aoMap:Y,lightMap:J,bumpMap:Q,normalMap:et,displacementMap:f&&pt,emissiveMap:at,normalMapObjectSpace:et&&y.normalMapType===tf,normalMapTangentSpace:et&&y.normalMapType===_u,metalnessMap:mt,roughnessMap:qt,anisotropy:Xt,anisotropyMap:$,clearcoat:A,clearcoatMap:Ut,clearcoatNormalMap:dt,clearcoatRoughnessMap:Dt,dispersion:v,iridescence:z,iridescenceMap:Ft,iridescenceThicknessMap:lt,sheen:Z,sheenColorMap:bt,sheenRoughnessMap:Gt,specularMap:Ot,specularColorMap:Mt,specularIntensityMap:Zt,transmission:ot,transmissionMap:I,thicknessMap:ht,gradientMap:_t,opaque:y.transparent===!1&&y.blending===Ji&&y.alphaToCoverage===!1,alphaMap:Rt,alphaTest:ct,alphaHash:it,combine:y.combine,mapUv:Kt&&_(y.map.channel),aoMapUv:Y&&_(y.aoMap.channel),lightMapUv:J&&_(y.lightMap.channel),bumpMapUv:Q&&_(y.bumpMap.channel),normalMapUv:et&&_(y.normalMap.channel),displacementMapUv:pt&&_(y.displacementMap.channel),emissiveMapUv:at&&_(y.emissiveMap.channel),metalnessMapUv:mt&&_(y.metalnessMap.channel),roughnessMapUv:qt&&_(y.roughnessMap.channel),anisotropyMapUv:$&&_(y.anisotropyMap.channel),clearcoatMapUv:Ut&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:dt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Dt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&_(y.sheenRoughnessMap.channel),specularMapUv:Ot&&_(y.specularMap.channel),specularColorMapUv:Mt&&_(y.specularColorMap.channel),specularIntensityMapUv:Zt&&_(y.specularIntensityMap.channel),transmissionMapUv:I&&_(y.transmissionMap.channel),thicknessMapUv:ht&&_(y.thicknessMap.channel),alphaMapUv:Rt&&_(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(et||Xt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&(Kt||Rt),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:vt,skinning:O.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:kt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Yt,decodeVideoTexture:Kt&&y.map.isVideoTexture===!0&&ne.getTransfer(y.map.colorSpace)===le,decodeVideoTextureEmissive:at&&y.emissiveMap.isVideoTexture===!0&&ne.getTransfer(y.emissiveMap.colorSpace)===le,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===je,flipSided:y.side===We,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:It&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&y.extensions.multiDraw===!0||Ct)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return fe.vertexUv1s=c.has(1),fe.vertexUv2s=c.has(2),fe.vertexUv3s=c.has(3),c.clear(),fe}function d(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const C in y.defines)M.push(C),M.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(T(M,y),E(M,y),M.push(n.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function T(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function E(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){const M=g[y.type];let C;if(M){const U=xn[M];C=Yf.clone(U.uniforms)}else C=y.uniforms;return C}function P(y,M){let C;for(let U=0,O=u.length;U<O;U++){const k=u[U];if(k.cacheKey===M){C=k,++C.usedTimes;break}}return C===void 0&&(C=new t_(n,M,y,s),u.push(C)),C}function R(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function L(y){l.remove(y)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:P,releaseProgram:R,releaseShaderCache:L,programs:u,dispose:D}}function s_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function o_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Vc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Gc(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(h,f,p,g,_,m){let d=n[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),t++,d}function a(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):e.push(d)}function l(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||o_),i.length>1&&i.sort(f||Vc),r.length>1&&r.sort(f||Vc)}function u(){for(let h=t,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function a_(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Gc,n.set(i,[o])):r>=s.length?(o=new Gc,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function l_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new zt};break;case"SpotLight":e={position:new w,direction:new w,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new w,halfWidth:new w,halfHeight:new w};break}return n[t.id]=e,e}}}function c_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let u_=0;function h_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function f_(n){const t=new l_,e=c_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new w);const r=new w,s=new re,o=new re;function a(c){let u=0,h=0,f=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,T=0,E=0,x=0,P=0,R=0,L=0;c.sort(h_);for(let y=0,M=c.length;y<M;y++){const C=c[y],U=C.color,O=C.intensity,k=C.distance,V=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=U.r*O,h+=U.g*O,f+=U.b*O;else if(C.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(C.sh.coefficients[H],O);L++}else if(C.isDirectionalLight){const H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const nt=C.shadow,G=e.get(C);G.shadowIntensity=nt.intensity,G.shadowBias=nt.bias,G.shadowNormalBias=nt.normalBias,G.shadowRadius=nt.radius,G.shadowMapSize=nt.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=V,i.directionalShadowMatrix[p]=C.shadow.matrix,T++}i.directional[p]=H,p++}else if(C.isSpotLight){const H=t.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(U).multiplyScalar(O),H.distance=k,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,i.spot[_]=H;const nt=C.shadow;if(C.map&&(i.spotLightMap[P]=C.map,P++,nt.updateMatrices(C),C.castShadow&&R++),i.spotLightMatrix[_]=nt.matrix,C.castShadow){const G=e.get(C);G.shadowIntensity=nt.intensity,G.shadowBias=nt.bias,G.shadowNormalBias=nt.normalBias,G.shadowRadius=nt.radius,G.shadowMapSize=nt.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=V,x++}_++}else if(C.isRectAreaLight){const H=t.get(C);H.color.copy(U).multiplyScalar(O),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=H,m++}else if(C.isPointLight){const H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){const nt=C.shadow,G=e.get(C);G.shadowIntensity=nt.intensity,G.shadowBias=nt.bias,G.shadowNormalBias=nt.normalBias,G.shadowRadius=nt.radius,G.shadowMapSize=nt.mapSize,G.shadowCameraNear=nt.camera.near,G.shadowCameraFar=nt.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=C.shadow.matrix,E++}i.point[g]=H,g++}else if(C.isHemisphereLight){const H=t.get(C);H.skyColor.copy(C.color).multiplyScalar(O),H.groundColor.copy(C.groundColor).multiplyScalar(O),i.hemi[d]=H,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_FLOAT_1,i.rectAreaLTC2=xt.LTC_FLOAT_2):(i.rectAreaLTC1=xt.LTC_HALF_1,i.rectAreaLTC2=xt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const D=i.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==d||D.numDirectionalShadows!==T||D.numPointShadows!==E||D.numSpotShadows!==x||D.numSpotMaps!==P||D.numLightProbes!==L)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=x+P-R,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=L,D.directionalLength=p,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=d,D.numDirectionalShadows=T,D.numPointShadows=E,D.numSpotShadows=x,D.numSpotMaps=P,D.numLightProbes=L,i.version=u_++)}function l(c,u){let h=0,f=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let d=0,T=c.length;d<T;d++){const E=c[d];if(E.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(E.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Wc(n){const t=new f_(n),e=[],i=[];function r(u){c.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function d_(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Wc(n),t.set(r,[a])):s>=o.length?(a=new Wc(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const p_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m_=`uniform sampler2D shadow_pass;
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
}`;function g_(n,t,e){let i=new _l;const r=new ft,s=new ft,o=new ue,a=new Bd({depthPacking:Qh}),l=new zd,c={},u=e.maxTextureSize,h={[wn]:We,[We]:wn,[je]:je},f=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:p_,fragmentShader:m_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Le;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new te(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=al;let d=this.type;this.render=function(R,L,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const y=n.getRenderTarget(),M=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),U=n.state;U.setBlending(ti),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=d!==On&&this.type===On,k=d===On&&this.type!==On;for(let V=0,H=R.length;V<H;V++){const nt=R[V],G=nt.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const st=G.getFrameExtents();if(r.multiply(st),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/st.x),r.x=s.x*st.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/st.y),r.y=s.y*st.y,G.mapSize.y=s.y)),G.map===null||O===!0||k===!0){const yt=this.type!==On?{minFilter:ke,magFilter:ke}:{};G.map!==null&&G.map.dispose(),G.map=new Si(r.x,r.y,yt),G.map.texture.name=nt.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const gt=G.getViewportCount();for(let yt=0;yt<gt;yt++){const kt=G.getViewport(yt);o.set(s.x*kt.x,s.y*kt.y,s.x*kt.z,s.y*kt.w),U.viewport(o),G.updateMatrices(nt,yt),i=G.getFrustum(),x(L,D,G.camera,nt,this.type)}G.isPointLightShadow!==!0&&this.type===On&&T(G,D),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(y,M,C)};function T(R,L){const D=t.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Si(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(L,null,D,f,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(L,null,D,p,_,null)}function E(R,L,D,y){let M=null;const C=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)M=C;else if(M=D.isPointLight===!0?l:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const U=M.uuid,O=L.uuid;let k=c[U];k===void 0&&(k={},c[U]=k);let V=k[O];V===void 0&&(V=M.clone(),k[O]=V,L.addEventListener("dispose",P)),M=V}if(M.visible=L.visible,M.wireframe=L.wireframe,y===On?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:h[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=n.properties.get(M);U.light=D}return M}function x(R,L,D,y,M){if(R.visible===!1)return;if(R.layers.test(L.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===On)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const O=t.update(R),k=R.material;if(Array.isArray(k)){const V=O.groups;for(let H=0,nt=V.length;H<nt;H++){const G=V[H],st=k[G.materialIndex];if(st&&st.visible){const gt=E(R,st,y,M);R.onBeforeShadow(n,R,L,D,O,gt,G),n.renderBufferDirect(D,null,O,gt,R,G),R.onAfterShadow(n,R,L,D,O,gt,G)}}}else if(k.visible){const V=E(R,k,y,M);R.onBeforeShadow(n,R,L,D,O,V,null),n.renderBufferDirect(D,null,O,V,R,null),R.onAfterShadow(n,R,L,D,O,V,null)}}const U=R.children;for(let O=0,k=U.length;O<k;O++)x(U[O],L,D,y,M)}function P(R){R.target.removeEventListener("dispose",P);for(const D in c){const y=c[D],M=R.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const __={[fa]:da,[pa]:_a,[ma]:va,[ji]:ga,[da]:fa,[_a]:pa,[va]:ma,[ga]:ji};function v_(n,t){function e(){let I=!1;const ht=new ue;let _t=null;const Rt=new ue(0,0,0,0);return{setMask:function(ct){_t!==ct&&!I&&(n.colorMask(ct,ct,ct,ct),_t=ct)},setLocked:function(ct){I=ct},setClear:function(ct,it,It,Yt,fe){fe===!0&&(ct*=Yt,it*=Yt,It*=Yt),ht.set(ct,it,It,Yt),Rt.equals(ht)===!1&&(n.clearColor(ct,it,It,Yt),Rt.copy(ht))},reset:function(){I=!1,_t=null,Rt.set(-1,0,0,0)}}}function i(){let I=!1,ht=!1,_t=null,Rt=null,ct=null;return{setReversed:function(it){if(ht!==it){const It=t.get("EXT_clip_control");it?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),ht=it;const Yt=ct;ct=null,this.setClear(Yt)}},getReversed:function(){return ht},setTest:function(it){it?K(n.DEPTH_TEST):vt(n.DEPTH_TEST)},setMask:function(it){_t!==it&&!I&&(n.depthMask(it),_t=it)},setFunc:function(it){if(ht&&(it=__[it]),Rt!==it){switch(it){case fa:n.depthFunc(n.NEVER);break;case da:n.depthFunc(n.ALWAYS);break;case pa:n.depthFunc(n.LESS);break;case ji:n.depthFunc(n.LEQUAL);break;case ma:n.depthFunc(n.EQUAL);break;case ga:n.depthFunc(n.GEQUAL);break;case _a:n.depthFunc(n.GREATER);break;case va:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Rt=it}},setLocked:function(it){I=it},setClear:function(it){ct!==it&&(ht&&(it=1-it),n.clearDepth(it),ct=it)},reset:function(){I=!1,_t=null,Rt=null,ct=null,ht=!1}}}function r(){let I=!1,ht=null,_t=null,Rt=null,ct=null,it=null,It=null,Yt=null,fe=null;return{setTest:function(ie){I||(ie?K(n.STENCIL_TEST):vt(n.STENCIL_TEST))},setMask:function(ie){ht!==ie&&!I&&(n.stencilMask(ie),ht=ie)},setFunc:function(ie,Ln,vn){(_t!==ie||Rt!==Ln||ct!==vn)&&(n.stencilFunc(ie,Ln,vn),_t=ie,Rt=Ln,ct=vn)},setOp:function(ie,Ln,vn){(it!==ie||It!==Ln||Yt!==vn)&&(n.stencilOp(ie,Ln,vn),it=ie,It=Ln,Yt=vn)},setLocked:function(ie){I=ie},setClear:function(ie){fe!==ie&&(n.clearStencil(ie),fe=ie)},reset:function(){I=!1,ht=null,_t=null,Rt=null,ct=null,it=null,It=null,Yt=null,fe=null}}}const s=new e,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,T=null,E=null,x=null,P=null,R=null,L=new zt(0,0,0),D=0,y=!1,M=null,C=null,U=null,O=null,k=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,nt=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=nt>=1):G.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=nt>=2);let st=null,gt={};const yt=n.getParameter(n.SCISSOR_BOX),kt=n.getParameter(n.VIEWPORT),tt=new ue().fromArray(yt),At=new ue().fromArray(kt);function Tt(I,ht,_t,Rt){const ct=new Uint8Array(4),it=n.createTexture();n.bindTexture(I,it),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let It=0;It<_t;It++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ht,0,n.RGBA,1,1,Rt,0,n.RGBA,n.UNSIGNED_BYTE,ct):n.texImage2D(ht+It,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ct);return it}const X={};X[n.TEXTURE_2D]=Tt(n.TEXTURE_2D,n.TEXTURE_2D,1),X[n.TEXTURE_CUBE_MAP]=Tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[n.TEXTURE_2D_ARRAY]=Tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),X[n.TEXTURE_3D]=Tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(n.DEPTH_TEST),o.setFunc(ji),Q(!1),et(Nl),K(n.CULL_FACE),Y(ti);function K(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function vt(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Lt(I,ht){return h[I]!==ht?(n.bindFramebuffer(I,ht),h[I]=ht,I===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ht),I===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ht),!0):!1}function Ct(I,ht){let _t=p,Rt=!1;if(I){_t=f.get(ht),_t===void 0&&(_t=[],f.set(ht,_t));const ct=I.textures;if(_t.length!==ct.length||_t[0]!==n.COLOR_ATTACHMENT0){for(let it=0,It=ct.length;it<It;it++)_t[it]=n.COLOR_ATTACHMENT0+it;_t.length=ct.length,Rt=!0}}else _t[0]!==n.BACK&&(_t[0]=n.BACK,Rt=!0);Rt&&n.drawBuffers(_t)}function Kt(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const j={[mi]:n.FUNC_ADD,[bh]:n.FUNC_SUBTRACT,[Ah]:n.FUNC_REVERSE_SUBTRACT};j[wh]=n.MIN,j[Ch]=n.MAX;const b={[Rh]:n.ZERO,[Ph]:n.ONE,[Lh]:n.SRC_COLOR,[ua]:n.SRC_ALPHA,[Oh]:n.SRC_ALPHA_SATURATE,[Uh]:n.DST_COLOR,[Fh]:n.DST_ALPHA,[Dh]:n.ONE_MINUS_SRC_COLOR,[ha]:n.ONE_MINUS_SRC_ALPHA,[Nh]:n.ONE_MINUS_DST_COLOR,[Ih]:n.ONE_MINUS_DST_ALPHA,[Bh]:n.CONSTANT_COLOR,[zh]:n.ONE_MINUS_CONSTANT_COLOR,[kh]:n.CONSTANT_ALPHA,[Hh]:n.ONE_MINUS_CONSTANT_ALPHA};function Y(I,ht,_t,Rt,ct,it,It,Yt,fe,ie){if(I===ti){_===!0&&(vt(n.BLEND),_=!1);return}if(_===!1&&(K(n.BLEND),_=!0),I!==Th){if(I!==m||ie!==y){if((d!==mi||x!==mi)&&(n.blendEquation(n.FUNC_ADD),d=mi,x=mi),ie)switch(I){case Ji:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ca:n.blendFunc(n.ONE,n.ONE);break;case Ol:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ji:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ca:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ol:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}T=null,E=null,P=null,R=null,L.set(0,0,0),D=0,m=I,y=ie}return}ct=ct||ht,it=it||_t,It=It||Rt,(ht!==d||ct!==x)&&(n.blendEquationSeparate(j[ht],j[ct]),d=ht,x=ct),(_t!==T||Rt!==E||it!==P||It!==R)&&(n.blendFuncSeparate(b[_t],b[Rt],b[it],b[It]),T=_t,E=Rt,P=it,R=It),(Yt.equals(L)===!1||fe!==D)&&(n.blendColor(Yt.r,Yt.g,Yt.b,fe),L.copy(Yt),D=fe),m=I,y=!1}function J(I,ht){I.side===je?vt(n.CULL_FACE):K(n.CULL_FACE);let _t=I.side===We;ht&&(_t=!_t),Q(_t),I.blending===Ji&&I.transparent===!1?Y(ti):Y(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const Rt=I.stencilWrite;a.setTest(Rt),Rt&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),at(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):vt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Q(I){M!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),M=I)}function et(I){I!==yh?(K(n.CULL_FACE),I!==C&&(I===Nl?n.cullFace(n.BACK):I===Sh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):vt(n.CULL_FACE),C=I}function pt(I){I!==U&&(H&&n.lineWidth(I),U=I)}function at(I,ht,_t){I?(K(n.POLYGON_OFFSET_FILL),(O!==ht||k!==_t)&&(n.polygonOffset(ht,_t),O=ht,k=_t)):vt(n.POLYGON_OFFSET_FILL)}function mt(I){I?K(n.SCISSOR_TEST):vt(n.SCISSOR_TEST)}function qt(I){I===void 0&&(I=n.TEXTURE0+V-1),st!==I&&(n.activeTexture(I),st=I)}function Xt(I,ht,_t){_t===void 0&&(st===null?_t=n.TEXTURE0+V-1:_t=st);let Rt=gt[_t];Rt===void 0&&(Rt={type:void 0,texture:void 0},gt[_t]=Rt),(Rt.type!==I||Rt.texture!==ht)&&(st!==_t&&(n.activeTexture(_t),st=_t),n.bindTexture(I,ht||X[I]),Rt.type=I,Rt.texture=ht)}function A(){const I=gt[st];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ot(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ut(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Dt(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ft(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function lt(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(I){tt.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),tt.copy(I))}function Gt(I){At.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),At.copy(I))}function Ot(I,ht){let _t=c.get(ht);_t===void 0&&(_t=new WeakMap,c.set(ht,_t));let Rt=_t.get(I);Rt===void 0&&(Rt=n.getUniformBlockIndex(ht,I.name),_t.set(I,Rt))}function Mt(I,ht){const Rt=c.get(ht).get(I);l.get(ht)!==Rt&&(n.uniformBlockBinding(ht,Rt,I.__bindingPointIndex),l.set(ht,Rt))}function Zt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},st=null,gt={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,T=null,E=null,x=null,P=null,R=null,L=new zt(0,0,0),D=0,y=!1,M=null,C=null,U=null,O=null,k=null,tt.set(0,0,n.canvas.width,n.canvas.height),At.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:K,disable:vt,bindFramebuffer:Lt,drawBuffers:Ct,useProgram:Kt,setBlending:Y,setMaterial:J,setFlipSided:Q,setCullFace:et,setLineWidth:pt,setPolygonOffset:at,setScissorTest:mt,activeTexture:qt,bindTexture:Xt,unbindTexture:A,compressedTexImage2D:v,compressedTexImage3D:z,texImage2D:Ft,texImage3D:lt,updateUBOMapping:Ot,uniformBlockBinding:Mt,texStorage2D:dt,texStorage3D:Dt,texSubImage2D:Z,texSubImage3D:ot,compressedTexSubImage2D:$,compressedTexSubImage3D:Ut,scissor:bt,viewport:Gt,reset:Zt}}function x_(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,v){return p?new OffscreenCanvas(A,v):ao("canvas")}function _(A,v,z){let Z=1;const ot=Xt(A);if((ot.width>z||ot.height>z)&&(Z=z/Math.max(ot.width,ot.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const $=Math.floor(Z*ot.width),Ut=Math.floor(Z*ot.height);h===void 0&&(h=g($,Ut));const dt=v?g($,Ut):h;return dt.width=$,dt.height=Ut,dt.getContext("2d").drawImage(A,0,0,$,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+$+"x"+Ut+")."),dt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),A;return A}function m(A){return A.generateMipmaps}function d(A){n.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(A,v,z,Z,ot=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=v;if(v===n.RED&&(z===n.FLOAT&&($=n.R32F),z===n.HALF_FLOAT&&($=n.R16F),z===n.UNSIGNED_BYTE&&($=n.R8)),v===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.R8UI),z===n.UNSIGNED_SHORT&&($=n.R16UI),z===n.UNSIGNED_INT&&($=n.R32UI),z===n.BYTE&&($=n.R8I),z===n.SHORT&&($=n.R16I),z===n.INT&&($=n.R32I)),v===n.RG&&(z===n.FLOAT&&($=n.RG32F),z===n.HALF_FLOAT&&($=n.RG16F),z===n.UNSIGNED_BYTE&&($=n.RG8)),v===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.RG8UI),z===n.UNSIGNED_SHORT&&($=n.RG16UI),z===n.UNSIGNED_INT&&($=n.RG32UI),z===n.BYTE&&($=n.RG8I),z===n.SHORT&&($=n.RG16I),z===n.INT&&($=n.RG32I)),v===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.RGB8UI),z===n.UNSIGNED_SHORT&&($=n.RGB16UI),z===n.UNSIGNED_INT&&($=n.RGB32UI),z===n.BYTE&&($=n.RGB8I),z===n.SHORT&&($=n.RGB16I),z===n.INT&&($=n.RGB32I)),v===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.RGBA8UI),z===n.UNSIGNED_SHORT&&($=n.RGBA16UI),z===n.UNSIGNED_INT&&($=n.RGBA32UI),z===n.BYTE&&($=n.RGBA8I),z===n.SHORT&&($=n.RGBA16I),z===n.INT&&($=n.RGBA32I)),v===n.RGB&&(z===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),v===n.RGBA){const Ut=ot?so:ne.getTransfer(Z);z===n.FLOAT&&($=n.RGBA32F),z===n.HALF_FLOAT&&($=n.RGBA16F),z===n.UNSIGNED_BYTE&&($=Ut===le?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function x(A,v){let z;return A?v===null||v===yi||v===Vr?z=n.DEPTH24_STENCIL8:v===En?z=n.DEPTH32F_STENCIL8:v===Hr&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===yi||v===Vr?z=n.DEPTH_COMPONENT24:v===En?z=n.DEPTH_COMPONENT32F:v===Hr&&(z=n.DEPTH_COMPONENT16),z}function P(A,v){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==ke&&A.minFilter!==Sn?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function R(A){const v=A.target;v.removeEventListener("dispose",R),D(v),v.isVideoTexture&&u.delete(v)}function L(A){const v=A.target;v.removeEventListener("dispose",L),M(v)}function D(A){const v=i.get(A);if(v.__webglInit===void 0)return;const z=A.source,Z=f.get(z);if(Z){const ot=Z[v.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&y(A),Object.keys(Z).length===0&&f.delete(z)}i.remove(A)}function y(A){const v=i.get(A);n.deleteTexture(v.__webglTexture);const z=A.source,Z=f.get(z);delete Z[v.__cacheKey],o.memory.textures--}function M(A){const v=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let ot=0;ot<v.__webglFramebuffer[Z].length;ot++)n.deleteFramebuffer(v.__webglFramebuffer[Z][ot]);else n.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[Z]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const z=A.textures;for(let Z=0,ot=z.length;Z<ot;Z++){const $=i.get(z[Z]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(z[Z])}i.remove(A)}let C=0;function U(){C=0}function O(){const A=C;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),C+=1,A}function k(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function V(A,v){const z=i.get(A);if(A.isVideoTexture&&mt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){const Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(z,A,v);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+v)}function H(A,v){const z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){X(z,A,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+v)}function nt(A,v){const z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){X(z,A,v);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+v)}function G(A,v){const z=i.get(A);if(A.version>0&&z.__version!==A.version){K(z,A,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+v)}const st={[ro]:n.REPEAT,[vi]:n.CLAMP_TO_EDGE,[ya]:n.MIRRORED_REPEAT},gt={[ke]:n.NEAREST,[Kh]:n.NEAREST_MIPMAP_NEAREST,[xs]:n.NEAREST_MIPMAP_LINEAR,[Sn]:n.LINEAR,[bo]:n.LINEAR_MIPMAP_NEAREST,[xi]:n.LINEAR_MIPMAP_LINEAR},yt={[rf]:n.NEVER,[uf]:n.ALWAYS,[sf]:n.LESS,[vu]:n.LEQUAL,[of]:n.EQUAL,[cf]:n.GEQUAL,[af]:n.GREATER,[lf]:n.NOTEQUAL};function kt(A,v){if(v.type===En&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Sn||v.magFilter===bo||v.magFilter===xs||v.magFilter===xi||v.minFilter===Sn||v.minFilter===bo||v.minFilter===xs||v.minFilter===xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,st[v.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,st[v.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,st[v.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,gt[v.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,gt[v.minFilter]),v.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,yt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ke||v.minFilter!==xs&&v.minFilter!==xi||v.type===En&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function tt(A,v){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",R));const Z=v.source;let ot=f.get(Z);ot===void 0&&(ot={},f.set(Z,ot));const $=k(v);if($!==A.__cacheKey){ot[$]===void 0&&(ot[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ot[$].usedTimes++;const Ut=ot[A.__cacheKey];Ut!==void 0&&(ot[A.__cacheKey].usedTimes--,Ut.usedTimes===0&&y(v)),A.__cacheKey=$,A.__webglTexture=ot[$].texture}return z}function At(A,v,z){return Math.floor(Math.floor(A/z)/v)}function Tt(A,v,z,Z){const $=A.updateRanges;if($.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,z,Z,v.data);else{$.sort((lt,bt)=>lt.start-bt.start);let Ut=0;for(let lt=1;lt<$.length;lt++){const bt=$[Ut],Gt=$[lt],Ot=bt.start+bt.count,Mt=At(Gt.start,v.width,4),Zt=At(bt.start,v.width,4);Gt.start<=Ot+1&&Mt===Zt&&At(Gt.start+Gt.count-1,v.width,4)===Mt?bt.count=Math.max(bt.count,Gt.start+Gt.count-bt.start):(++Ut,$[Ut]=Gt)}$.length=Ut+1;const dt=n.getParameter(n.UNPACK_ROW_LENGTH),Dt=n.getParameter(n.UNPACK_SKIP_PIXELS),Ft=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let lt=0,bt=$.length;lt<bt;lt++){const Gt=$[lt],Ot=Math.floor(Gt.start/4),Mt=Math.ceil(Gt.count/4),Zt=Ot%v.width,I=Math.floor(Ot/v.width),ht=Mt,_t=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Zt),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),e.texSubImage2D(n.TEXTURE_2D,0,Zt,I,ht,_t,z,Z,v.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,dt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Dt),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ft)}}function X(A,v,z){let Z=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=n.TEXTURE_3D);const ot=tt(A,v),$=v.source;e.bindTexture(Z,A.__webglTexture,n.TEXTURE0+z);const Ut=i.get($);if($.version!==Ut.__version||ot===!0){e.activeTexture(n.TEXTURE0+z);const dt=ne.getPrimaries(ne.workingColorSpace),Dt=v.colorSpace===Mn?null:ne.getPrimaries(v.colorSpace),Ft=v.colorSpace===Mn||dt===Dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let lt=_(v.image,!1,r.maxTextureSize);lt=qt(v,lt);const bt=s.convert(v.format,v.colorSpace),Gt=s.convert(v.type);let Ot=E(v.internalFormat,bt,Gt,v.colorSpace,v.isVideoTexture);kt(Z,v);let Mt;const Zt=v.mipmaps,I=v.isVideoTexture!==!0,ht=Ut.__version===void 0||ot===!0,_t=$.dataReady,Rt=P(v,lt);if(v.isDepthTexture)Ot=x(v.format===Wr,v.type),ht&&(I?e.texStorage2D(n.TEXTURE_2D,1,Ot,lt.width,lt.height):e.texImage2D(n.TEXTURE_2D,0,Ot,lt.width,lt.height,0,bt,Gt,null));else if(v.isDataTexture)if(Zt.length>0){I&&ht&&e.texStorage2D(n.TEXTURE_2D,Rt,Ot,Zt[0].width,Zt[0].height);for(let ct=0,it=Zt.length;ct<it;ct++)Mt=Zt[ct],I?_t&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,Mt.width,Mt.height,bt,Gt,Mt.data):e.texImage2D(n.TEXTURE_2D,ct,Ot,Mt.width,Mt.height,0,bt,Gt,Mt.data);v.generateMipmaps=!1}else I?(ht&&e.texStorage2D(n.TEXTURE_2D,Rt,Ot,lt.width,lt.height),_t&&Tt(v,lt,bt,Gt)):e.texImage2D(n.TEXTURE_2D,0,Ot,lt.width,lt.height,0,bt,Gt,lt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){I&&ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,Ot,Zt[0].width,Zt[0].height,lt.depth);for(let ct=0,it=Zt.length;ct<it;ct++)if(Mt=Zt[ct],v.format!==pn)if(bt!==null)if(I){if(_t)if(v.layerUpdates.size>0){const It=Mc(Mt.width,Mt.height,v.format,v.type);for(const Yt of v.layerUpdates){const fe=Mt.data.subarray(Yt*It/Mt.data.BYTES_PER_ELEMENT,(Yt+1)*It/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,Yt,Mt.width,Mt.height,1,bt,fe)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,Mt.width,Mt.height,lt.depth,bt,Mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ct,Ot,Mt.width,Mt.height,lt.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?_t&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,Mt.width,Mt.height,lt.depth,bt,Gt,Mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ct,Ot,Mt.width,Mt.height,lt.depth,0,bt,Gt,Mt.data)}else{I&&ht&&e.texStorage2D(n.TEXTURE_2D,Rt,Ot,Zt[0].width,Zt[0].height);for(let ct=0,it=Zt.length;ct<it;ct++)Mt=Zt[ct],v.format!==pn?bt!==null?I?_t&&e.compressedTexSubImage2D(n.TEXTURE_2D,ct,0,0,Mt.width,Mt.height,bt,Mt.data):e.compressedTexImage2D(n.TEXTURE_2D,ct,Ot,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?_t&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,Mt.width,Mt.height,bt,Gt,Mt.data):e.texImage2D(n.TEXTURE_2D,ct,Ot,Mt.width,Mt.height,0,bt,Gt,Mt.data)}else if(v.isDataArrayTexture)if(I){if(ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,Ot,lt.width,lt.height,lt.depth),_t)if(v.layerUpdates.size>0){const ct=Mc(lt.width,lt.height,v.format,v.type);for(const it of v.layerUpdates){const It=lt.data.subarray(it*ct/lt.data.BYTES_PER_ELEMENT,(it+1)*ct/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,it,lt.width,lt.height,1,bt,Gt,It)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,bt,Gt,lt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ot,lt.width,lt.height,lt.depth,0,bt,Gt,lt.data);else if(v.isData3DTexture)I?(ht&&e.texStorage3D(n.TEXTURE_3D,Rt,Ot,lt.width,lt.height,lt.depth),_t&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,bt,Gt,lt.data)):e.texImage3D(n.TEXTURE_3D,0,Ot,lt.width,lt.height,lt.depth,0,bt,Gt,lt.data);else if(v.isFramebufferTexture){if(ht)if(I)e.texStorage2D(n.TEXTURE_2D,Rt,Ot,lt.width,lt.height);else{let ct=lt.width,it=lt.height;for(let It=0;It<Rt;It++)e.texImage2D(n.TEXTURE_2D,It,Ot,ct,it,0,bt,Gt,null),ct>>=1,it>>=1}}else if(Zt.length>0){if(I&&ht){const ct=Xt(Zt[0]);e.texStorage2D(n.TEXTURE_2D,Rt,Ot,ct.width,ct.height)}for(let ct=0,it=Zt.length;ct<it;ct++)Mt=Zt[ct],I?_t&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,bt,Gt,Mt):e.texImage2D(n.TEXTURE_2D,ct,Ot,bt,Gt,Mt);v.generateMipmaps=!1}else if(I){if(ht){const ct=Xt(lt);e.texStorage2D(n.TEXTURE_2D,Rt,Ot,ct.width,ct.height)}_t&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,bt,Gt,lt)}else e.texImage2D(n.TEXTURE_2D,0,Ot,bt,Gt,lt);m(v)&&d(Z),Ut.__version=$.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function K(A,v,z){if(v.image.length!==6)return;const Z=tt(A,v),ot=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+z);const $=i.get(ot);if(ot.version!==$.__version||Z===!0){e.activeTexture(n.TEXTURE0+z);const Ut=ne.getPrimaries(ne.workingColorSpace),dt=v.colorSpace===Mn?null:ne.getPrimaries(v.colorSpace),Dt=v.colorSpace===Mn||Ut===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);const Ft=v.isCompressedTexture||v.image[0].isCompressedTexture,lt=v.image[0]&&v.image[0].isDataTexture,bt=[];for(let it=0;it<6;it++)!Ft&&!lt?bt[it]=_(v.image[it],!0,r.maxCubemapSize):bt[it]=lt?v.image[it].image:v.image[it],bt[it]=qt(v,bt[it]);const Gt=bt[0],Ot=s.convert(v.format,v.colorSpace),Mt=s.convert(v.type),Zt=E(v.internalFormat,Ot,Mt,v.colorSpace),I=v.isVideoTexture!==!0,ht=$.__version===void 0||Z===!0,_t=ot.dataReady;let Rt=P(v,Gt);kt(n.TEXTURE_CUBE_MAP,v);let ct;if(Ft){I&&ht&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,Zt,Gt.width,Gt.height);for(let it=0;it<6;it++){ct=bt[it].mipmaps;for(let It=0;It<ct.length;It++){const Yt=ct[It];v.format!==pn?Ot!==null?I?_t&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,It,0,0,Yt.width,Yt.height,Ot,Yt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,It,Zt,Yt.width,Yt.height,0,Yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,It,0,0,Yt.width,Yt.height,Ot,Mt,Yt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,It,Zt,Yt.width,Yt.height,0,Ot,Mt,Yt.data)}}}else{if(ct=v.mipmaps,I&&ht){ct.length>0&&Rt++;const it=Xt(bt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,Zt,it.width,it.height)}for(let it=0;it<6;it++)if(lt){I?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,bt[it].width,bt[it].height,Ot,Mt,bt[it].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Zt,bt[it].width,bt[it].height,0,Ot,Mt,bt[it].data);for(let It=0;It<ct.length;It++){const fe=ct[It].image[it].image;I?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,It+1,0,0,fe.width,fe.height,Ot,Mt,fe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,It+1,Zt,fe.width,fe.height,0,Ot,Mt,fe.data)}}else{I?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ot,Mt,bt[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Zt,Ot,Mt,bt[it]);for(let It=0;It<ct.length;It++){const Yt=ct[It];I?_t&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,It+1,0,0,Ot,Mt,Yt.image[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,It+1,Zt,Ot,Mt,Yt.image[it])}}}m(v)&&d(n.TEXTURE_CUBE_MAP),$.__version=ot.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function vt(A,v,z,Z,ot,$){const Ut=s.convert(z.format,z.colorSpace),dt=s.convert(z.type),Dt=E(z.internalFormat,Ut,dt,z.colorSpace),Ft=i.get(v),lt=i.get(z);if(lt.__renderTarget=v,!Ft.__hasExternalTextures){const bt=Math.max(1,v.width>>$),Gt=Math.max(1,v.height>>$);ot===n.TEXTURE_3D||ot===n.TEXTURE_2D_ARRAY?e.texImage3D(ot,$,Dt,bt,Gt,v.depth,0,Ut,dt,null):e.texImage2D(ot,$,Dt,bt,Gt,0,Ut,dt,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),at(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,ot,lt.__webglTexture,0,pt(v)):(ot===n.TEXTURE_2D||ot>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,ot,lt.__webglTexture,$),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Lt(A,v,z){if(n.bindRenderbuffer(n.RENDERBUFFER,A),v.depthBuffer){const Z=v.depthTexture,ot=Z&&Z.isDepthTexture?Z.type:null,$=x(v.stencilBuffer,ot),Ut=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=pt(v);at(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt,$,v.width,v.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,$,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,$,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ut,n.RENDERBUFFER,A)}else{const Z=v.textures;for(let ot=0;ot<Z.length;ot++){const $=Z[ot],Ut=s.convert($.format,$.colorSpace),dt=s.convert($.type),Dt=E($.internalFormat,Ut,dt,$.colorSpace),Ft=pt(v);z&&at(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ft,Dt,v.width,v.height):at(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ft,Dt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Dt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ct(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(v.depthTexture);Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V(v.depthTexture,0);const ot=Z.__webglTexture,$=pt(v);if(v.depthTexture.format===Gr)at(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ot,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ot,0);else if(v.depthTexture.format===Wr)at(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ot,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function Kt(A){const v=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){const ot=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",ot)};Z.addEventListener("dispose",ot),v.__depthDisposeCallback=ot}v.__boundDepthTexture=Z}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const Z=A.texture.mipmaps;Z&&Z.length>0?Ct(v.__webglFramebuffer[0],A):Ct(v.__webglFramebuffer,A)}else if(z){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=n.createRenderbuffer(),Lt(v.__webglDepthbuffer[Z],A,!1);else{const ot=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,$)}}else{const Z=A.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Lt(v.__webglDepthbuffer,A,!1);else{const ot=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,$)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function j(A,v,z){const Z=i.get(A);v!==void 0&&vt(Z.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Kt(A)}function b(A){const v=A.texture,z=i.get(A),Z=i.get(v);A.addEventListener("dispose",L);const ot=A.textures,$=A.isWebGLCubeRenderTarget===!0,Ut=ot.length>1;if(Ut||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=v.version,o.memory.textures++),$){z.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer[dt]=[];for(let Dt=0;Dt<v.mipmaps.length;Dt++)z.__webglFramebuffer[dt][Dt]=n.createFramebuffer()}else z.__webglFramebuffer[dt]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer=[];for(let dt=0;dt<v.mipmaps.length;dt++)z.__webglFramebuffer[dt]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Ut)for(let dt=0,Dt=ot.length;dt<Dt;dt++){const Ft=i.get(ot[dt]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&at(A)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let dt=0;dt<ot.length;dt++){const Dt=ot[dt];z.__webglColorRenderbuffer[dt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[dt]);const Ft=s.convert(Dt.format,Dt.colorSpace),lt=s.convert(Dt.type),bt=E(Dt.internalFormat,Ft,lt,Dt.colorSpace,A.isXRRenderTarget===!0),Gt=pt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Gt,bt,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,z.__webglColorRenderbuffer[dt])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Lt(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),kt(n.TEXTURE_CUBE_MAP,v);for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0)for(let Dt=0;Dt<v.mipmaps.length;Dt++)vt(z.__webglFramebuffer[dt][Dt],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Dt);else vt(z.__webglFramebuffer[dt],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(v)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let dt=0,Dt=ot.length;dt<Dt;dt++){const Ft=ot[dt],lt=i.get(Ft);let bt=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(bt=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(bt,lt.__webglTexture),kt(bt,Ft),vt(z.__webglFramebuffer,A,Ft,n.COLOR_ATTACHMENT0+dt,bt,0),m(Ft)&&d(bt)}e.unbindTexture()}else{let dt=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(dt=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(dt,Z.__webglTexture),kt(dt,v),v.mipmaps&&v.mipmaps.length>0)for(let Dt=0;Dt<v.mipmaps.length;Dt++)vt(z.__webglFramebuffer[Dt],A,v,n.COLOR_ATTACHMENT0,dt,Dt);else vt(z.__webglFramebuffer,A,v,n.COLOR_ATTACHMENT0,dt,0);m(v)&&d(dt),e.unbindTexture()}A.depthBuffer&&Kt(A)}function Y(A){const v=A.textures;for(let z=0,Z=v.length;z<Z;z++){const ot=v[z];if(m(ot)){const $=T(A),Ut=i.get(ot).__webglTexture;e.bindTexture($,Ut),d($),e.unbindTexture()}}}const J=[],Q=[];function et(A){if(A.samples>0){if(at(A)===!1){const v=A.textures,z=A.width,Z=A.height;let ot=n.COLOR_BUFFER_BIT;const $=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ut=i.get(A),dt=v.length>1;if(dt)for(let Ft=0;Ft<v.length;Ft++)e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer);const Dt=A.texture.mipmaps;Dt&&Dt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Ft=0;Ft<v.length;Ft++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ot|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ot|=n.STENCIL_BUFFER_BIT)),dt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ut.__webglColorRenderbuffer[Ft]);const lt=i.get(v[Ft]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,lt,0)}n.blitFramebuffer(0,0,z,Z,0,0,z,Z,ot,n.NEAREST),l===!0&&(J.length=0,Q.length=0,J.push(n.COLOR_ATTACHMENT0+Ft),A.depthBuffer&&A.resolveDepthBuffer===!1&&(J.push($),Q.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Q)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,J))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),dt)for(let Ft=0;Ft<v.length;Ft++){e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.RENDERBUFFER,Ut.__webglColorRenderbuffer[Ft]);const lt=i.get(v[Ft]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ft,n.TEXTURE_2D,lt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const v=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function pt(A){return Math.min(r.maxSamples,A.samples)}function at(A){const v=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function mt(A){const v=o.render.frame;u.get(A)!==v&&(u.set(A,v),A.update())}function qt(A,v){const z=A.colorSpace,Z=A.format,ot=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==er&&z!==Mn&&(ne.getTransfer(z)===le?(Z!==pn||ot!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),v}function Xt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=U,this.setTexture2D=V,this.setTexture2DArray=H,this.setTexture3D=nt,this.setTextureCube=G,this.rebindTextures=j,this.setupRenderTarget=b,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=at}function M_(n,t){function e(i,r=Mn){let s;const o=ne.getTransfer(r);if(i===Cn)return n.UNSIGNED_BYTE;if(i===cl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ul)return n.UNSIGNED_SHORT_5_5_5_1;if(i===fu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===du)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===uu)return n.BYTE;if(i===hu)return n.SHORT;if(i===Hr)return n.UNSIGNED_SHORT;if(i===ll)return n.INT;if(i===yi)return n.UNSIGNED_INT;if(i===En)return n.FLOAT;if(i===ls)return n.HALF_FLOAT;if(i===pu)return n.ALPHA;if(i===mu)return n.RGB;if(i===pn)return n.RGBA;if(i===Gr)return n.DEPTH_COMPONENT;if(i===Wr)return n.DEPTH_STENCIL;if(i===_o)return n.RED;if(i===hl)return n.RED_INTEGER;if(i===gu)return n.RG;if(i===fl)return n.RG_INTEGER;if(i===dl)return n.RGBA_INTEGER;if(i===$s||i===Ks||i===js||i===Qs)if(o===le)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===$s)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===$s)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ks)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===js)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sa||i===Ea||i===Ta||i===ba)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Sa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ea)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ta)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ba)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Aa||i===wa||i===Ca)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Aa||i===wa)return o===le?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ca)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ra||i===Pa||i===La||i===Da||i===Fa||i===Ia||i===Ua||i===Na||i===Oa||i===Ba||i===za||i===ka||i===Ha||i===Va)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ra)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pa)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===La)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Da)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fa)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ia)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ua)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Na)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Oa)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ba)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===za)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ka)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ha)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Va)return o===le?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ga||i===Wa||i===Xa)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Ga)return o===le?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qa||i===Ya||i===Za||i===Ja)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===qa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ya)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Za)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ja)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const y_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S_=`
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

}`;class E_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Iu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ei({vertexShader:y_,fragmentShader:S_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new te(new pr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class T_ extends ur{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new E_,d={},T=e.getContextAttributes();let E=null,x=null;const P=[],R=[],L=new ft;let D=null;const y=new Ge;y.viewport=new ue;const M=new Ge;M.viewport=new ue;const C=[y,M],U=new Wd;let O=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let K=P[X];return K===void 0&&(K=new qo,P[X]=K),K.getTargetRaySpace()},this.getControllerGrip=function(X){let K=P[X];return K===void 0&&(K=new qo,P[X]=K),K.getGripSpace()},this.getHand=function(X){let K=P[X];return K===void 0&&(K=new qo,P[X]=K),K.getHandSpace()};function V(X){const K=R.indexOf(X.inputSource);if(K===-1)return;const vt=P[K];vt!==void 0&&(vt.update(X.inputSource,X.frame,c||o),vt.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",nt);for(let X=0;X<P.length;X++){const K=R[X];K!==null&&(R[X]=null,P[X].disconnect(K))}O=null,k=null,m.reset();for(const X in d)delete d[X];t.setRenderTarget(E),p=null,f=null,h=null,r=null,x=null,Tt.stop(),i.isPresenting=!1,t.setPixelRatio(D),t.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(r,e)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(E=t.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",H),r.addEventListener("inputsourceschange",nt),T.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(L),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Lt=null,Ct=null;T.depth&&(Ct=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=T.stencil?Wr:Gr,Lt=T.stencil?Vr:yi);const Kt={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Kt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new Si(f.textureWidth,f.textureHeight,{format:pn,type:Cn,depthTexture:new Fu(f.textureWidth,f.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const vt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,vt),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Si(p.framebufferWidth,p.framebufferHeight,{format:pn,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Tt.setContext(r),Tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt(X){for(let K=0;K<X.removed.length;K++){const vt=X.removed[K],Lt=R.indexOf(vt);Lt>=0&&(R[Lt]=null,P[Lt].disconnect(vt))}for(let K=0;K<X.added.length;K++){const vt=X.added[K];let Lt=R.indexOf(vt);if(Lt===-1){for(let Kt=0;Kt<P.length;Kt++)if(Kt>=R.length){R.push(vt),Lt=Kt;break}else if(R[Kt]===null){R[Kt]=vt,Lt=Kt;break}if(Lt===-1)break}const Ct=P[Lt];Ct&&Ct.connect(vt)}}const G=new w,st=new w;function gt(X,K,vt){G.setFromMatrixPosition(K.matrixWorld),st.setFromMatrixPosition(vt.matrixWorld);const Lt=G.distanceTo(st),Ct=K.projectionMatrix.elements,Kt=vt.projectionMatrix.elements,j=Ct[14]/(Ct[10]-1),b=Ct[14]/(Ct[10]+1),Y=(Ct[9]+1)/Ct[5],J=(Ct[9]-1)/Ct[5],Q=(Ct[8]-1)/Ct[0],et=(Kt[8]+1)/Kt[0],pt=j*Q,at=j*et,mt=Lt/(-Q+et),qt=mt*-Q;if(K.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(qt),X.translateZ(mt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ct[10]===-1)X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Xt=j+mt,A=b+mt,v=pt-qt,z=at+(Lt-qt),Z=Y*b/A*Xt,ot=J*b/A*Xt;X.projectionMatrix.makePerspective(v,z,Z,ot,Xt,A),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function yt(X,K){K===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(K.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let K=X.near,vt=X.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),U.near=M.near=y.near=K,U.far=M.far=y.far=vt,(O!==U.near||k!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),O=U.near,k=U.far),U.layers.mask=X.layers.mask|6,y.layers.mask=U.layers.mask&3,M.layers.mask=U.layers.mask&5;const Lt=X.parent,Ct=U.cameras;yt(U,Lt);for(let Kt=0;Kt<Ct.length;Kt++)yt(Ct[Kt],Lt);Ct.length===2?gt(U,y,M):U.projectionMatrix.copy(y.projectionMatrix),kt(X,U,Lt)};function kt(X,K,vt){vt===null?X.matrix.copy(K.matrixWorld):(X.matrix.copy(vt.matrixWorld),X.matrix.invert(),X.matrix.multiply(K.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=nr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(X){return d[X]};let tt=null;function At(X,K){if(u=K.getViewerPose(c||o),g=K,u!==null){const vt=u.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let Lt=!1;vt.length!==U.cameras.length&&(U.cameras.length=0,Lt=!0);for(let b=0;b<vt.length;b++){const Y=vt[b];let J=null;if(p!==null)J=p.getViewport(Y);else{const et=h.getViewSubImage(f,Y);J=et.viewport,b===0&&(t.setRenderTargetTextures(x,et.colorTexture,et.depthStencilTexture),t.setRenderTarget(x))}let Q=C[b];Q===void 0&&(Q=new Ge,Q.layers.enable(b),Q.viewport=new ue,C[b]=Q),Q.matrix.fromArray(Y.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Y.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(J.x,J.y,J.width,J.height),b===0&&(U.matrix.copy(Q.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Lt===!0&&U.cameras.push(Q)}const Ct=r.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){h=i.getBinding();const b=h.getDepthInformation(vt[0]);b&&b.isValid&&b.texture&&m.init(b,r.renderState)}if(Ct&&Ct.includes("camera-access")&&_){t.state.unbindTexture(),h=i.getBinding();for(let b=0;b<vt.length;b++){const Y=vt[b].camera;if(Y){let J=d[Y];J||(J=new Iu,d[Y]=J);const Q=h.getCameraImage(Y);J.sourceTexture=Q}}}}for(let vt=0;vt<P.length;vt++){const Lt=R[vt],Ct=P[vt];Lt!==null&&Ct!==void 0&&Ct.update(Lt,K,c||o)}tt&&tt(X,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}const Tt=new qu;Tt.setAnimationLoop(At),this.setAnimationLoop=function(X){tt=X},this.dispose=function(){}}}const fi=new Xn,b_=new re;function A_(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,bu(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,T,E,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,T,E):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===We&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===We&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const T=t.get(d),E=T.envMap,x=T.envMapRotation;E&&(m.envMap.value=E,fi.copy(x),fi.x*=-1,fi.y*=-1,fi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),m.envMapRotation.value.setFromMatrix4(b_.makeRotationFromEuler(fi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,T,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*T,m.scale.value=E*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,T){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===We&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const T=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function w_(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){const x=E.program;i.uniformBlockBinding(T,x)}function c(T,E){let x=r[T.id];x===void 0&&(g(T),x=u(T),r[T.id]=x,T.addEventListener("dispose",m));const P=E.program;i.updateUBOMapping(T,P);const R=t.render.frame;s[T.id]!==R&&(f(T),s[T.id]=R)}function u(T){const E=h();T.__bindingPointIndex=E;const x=n.createBuffer(),P=T.__size,R=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,P,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,x),x}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const E=r[T.id],x=T.uniforms,P=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let R=0,L=x.length;R<L;R++){const D=Array.isArray(x[R])?x[R]:[x[R]];for(let y=0,M=D.length;y<M;y++){const C=D[y];if(p(C,R,y,P)===!0){const U=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let k=0;for(let V=0;V<O.length;V++){const H=O[V],nt=_(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,U+k,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,k),k+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(T,E,x,P){const R=T.value,L=E+"_"+x;if(P[L]===void 0)return typeof R=="number"||typeof R=="boolean"?P[L]=R:P[L]=R.clone(),!0;{const D=P[L];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return P[L]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(T){const E=T.uniforms;let x=0;const P=16;for(let L=0,D=E.length;L<D;L++){const y=Array.isArray(E[L])?E[L]:[E[L]];for(let M=0,C=y.length;M<C;M++){const U=y[M],O=Array.isArray(U.value)?U.value:[U.value];for(let k=0,V=O.length;k<V;k++){const H=O[k],nt=_(H),G=x%P,st=G%nt.boundary,gt=G+st;x+=st,gt!==0&&P-gt<nt.storage&&(x+=P-gt),U.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=nt.storage}}}const R=x%P;return R>0&&(x+=P-R),T.__size=x,T.__cache={},this}function _(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){const E=T.target;E.removeEventListener("dispose",m);const x=o.indexOf(E.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function d(){for(const T in r)n.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class C_{constructor(t={}){const{canvas:e=wf(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const T=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let P=!1;this._outputColorSpace=$e;let R=0,L=0,D=null,y=-1,M=null;const C=new ue,U=new ue;let O=null;const k=new zt(0);let V=0,H=e.width,nt=e.height,G=1,st=null,gt=null;const yt=new ue(0,0,H,nt),kt=new ue(0,0,H,nt);let tt=!1;const At=new _l;let Tt=!1,X=!1;const K=new re,vt=new w,Lt=new ue,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Kt=!1;function j(){return D===null?G:1}let b=i;function Y(S,N){return e.getContext(S,N)}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ol}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",ct,!1),b===null){const N="webgl2";if(b=Y(N,S),b===null)throw Y(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let J,Q,et,pt,at,mt,qt,Xt,A,v,z,Z,ot,$,Ut,dt,Dt,Ft,lt,bt,Gt,Ot,Mt,Zt;function I(){J=new B0(b),J.init(),Ot=new M_(b,J),Q=new L0(b,J,t,Ot),et=new v_(b,J),Q.reversedDepthBuffer&&f&&et.buffers.depth.setReversed(!0),pt=new H0(b),at=new s_,mt=new x_(b,J,et,at,Q,Ot,pt),qt=new F0(x),Xt=new O0(x),A=new Yd(b),Mt=new R0(b,A),v=new z0(b,A,pt,Mt),z=new G0(b,v,A,pt),lt=new V0(b,Q,mt),dt=new D0(at),Z=new r_(x,qt,Xt,J,Q,Mt,dt),ot=new A_(x,at),$=new a_,Ut=new d_(J),Ft=new C0(x,qt,Xt,et,z,p,l),Dt=new g_(x,z,Q),Zt=new w_(b,pt,Q,et),bt=new P0(b,J,pt),Gt=new k0(b,J,pt),pt.programs=Z.programs,x.capabilities=Q,x.extensions=J,x.properties=at,x.renderLists=$,x.shadowMap=Dt,x.state=et,x.info=pt}I();const ht=new T_(x,b);this.xr=ht,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const S=J.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=J.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(S){S!==void 0&&(G=S,this.setSize(H,nt,!1))},this.getSize=function(S){return S.set(H,nt)},this.setSize=function(S,N,W=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=S,nt=N,e.width=Math.floor(S*G),e.height=Math.floor(N*G),W===!0&&(e.style.width=S+"px",e.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(H*G,nt*G).floor()},this.setDrawingBufferSize=function(S,N,W){H=S,nt=N,G=W,e.width=Math.floor(S*W),e.height=Math.floor(N*W),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(C)},this.getViewport=function(S){return S.copy(yt)},this.setViewport=function(S,N,W,q){S.isVector4?yt.set(S.x,S.y,S.z,S.w):yt.set(S,N,W,q),et.viewport(C.copy(yt).multiplyScalar(G).round())},this.getScissor=function(S){return S.copy(kt)},this.setScissor=function(S,N,W,q){S.isVector4?kt.set(S.x,S.y,S.z,S.w):kt.set(S,N,W,q),et.scissor(U.copy(kt).multiplyScalar(G).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(S){et.setScissorTest(tt=S)},this.setOpaqueSort=function(S){st=S},this.setTransparentSort=function(S){gt=S},this.getClearColor=function(S){return S.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor(...arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,W=!0){let q=0;if(S){let B=!1;if(D!==null){const ut=D.texture.format;B=ut===dl||ut===fl||ut===hl}if(B){const ut=D.texture.type,St=ut===Cn||ut===yi||ut===Hr||ut===Vr||ut===cl||ut===ul,Pt=Ft.getClearColor(),wt=Ft.getClearAlpha(),Vt=Pt.r,Wt=Pt.g,Bt=Pt.b;St?(g[0]=Vt,g[1]=Wt,g[2]=Bt,g[3]=wt,b.clearBufferuiv(b.COLOR,0,g)):(_[0]=Vt,_[1]=Wt,_[2]=Bt,_[3]=wt,b.clearBufferiv(b.COLOR,0,_))}else q|=b.COLOR_BUFFER_BIT}N&&(q|=b.DEPTH_BUFFER_BIT),W&&(q|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),Ft.dispose(),$.dispose(),Ut.dispose(),at.dispose(),qt.dispose(),Xt.dispose(),z.dispose(),Mt.dispose(),Zt.dispose(),Z.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",vn),ht.removeEventListener("sessionend",Pl),si.stop()};function _t(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const S=pt.autoReset,N=Dt.enabled,W=Dt.autoUpdate,q=Dt.needsUpdate,B=Dt.type;I(),pt.autoReset=S,Dt.enabled=N,Dt.autoUpdate=W,Dt.needsUpdate=q,Dt.type=B}function ct(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function it(S){const N=S.target;N.removeEventListener("dispose",it),It(N)}function It(S){Yt(S),at.remove(S)}function Yt(S){const N=at.get(S).programs;N!==void 0&&(N.forEach(function(W){Z.releaseProgram(W)}),S.isShaderMaterial&&Z.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,W,q,B,ut){N===null&&(N=Ct);const St=B.isMesh&&B.matrixWorld.determinant()<0,Pt=mh(S,N,W,q,B);et.setMaterial(q,St);let wt=W.index,Vt=1;if(q.wireframe===!0){if(wt=v.getWireframeAttribute(W),wt===void 0)return;Vt=2}const Wt=W.drawRange,Bt=W.attributes.position;let Qt=Wt.start*Vt,ae=(Wt.start+Wt.count)*Vt;ut!==null&&(Qt=Math.max(Qt,ut.start*Vt),ae=Math.min(ae,(ut.start+ut.count)*Vt)),wt!==null?(Qt=Math.max(Qt,0),ae=Math.min(ae,wt.count)):Bt!=null&&(Qt=Math.max(Qt,0),ae=Math.min(ae,Bt.count));const _e=ae-Qt;if(_e<0||_e===1/0)return;Mt.setup(B,q,Pt,W,wt);let de,he=bt;if(wt!==null&&(de=A.get(wt),he=Gt,he.setIndex(de)),B.isMesh)q.wireframe===!0?(et.setLineWidth(q.wireframeLinewidth*j()),he.setMode(b.LINES)):he.setMode(b.TRIANGLES);else if(B.isLine){let Ht=q.linewidth;Ht===void 0&&(Ht=1),et.setLineWidth(Ht*j()),B.isLineSegments?he.setMode(b.LINES):B.isLineLoop?he.setMode(b.LINE_LOOP):he.setMode(b.LINE_STRIP)}else B.isPoints?he.setMode(b.POINTS):B.isSprite&&he.setMode(b.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Xr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),he.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))he.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ht=B._multiDrawStarts,pe=B._multiDrawCounts,ee=B._multiDrawCount,qe=wt?A.get(wt).bytesPerElement:1,Ai=at.get(q).currentProgram.getUniforms();for(let Ye=0;Ye<ee;Ye++)Ai.setValue(b,"_gl_DrawID",Ye),he.render(Ht[Ye]/qe,pe[Ye])}else if(B.isInstancedMesh)he.renderInstances(Qt,_e,B.count);else if(W.isInstancedBufferGeometry){const Ht=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,pe=Math.min(W.instanceCount,Ht);he.renderInstances(Qt,_e,pe)}else he.render(Qt,_e)};function fe(S,N,W){S.transparent===!0&&S.side===je&&S.forceSinglePass===!1?(S.side=We,S.needsUpdate=!0,vs(S,N,W),S.side=wn,S.needsUpdate=!0,vs(S,N,W),S.side=je):vs(S,N,W)}this.compile=function(S,N,W=null){W===null&&(W=S),d=Ut.get(W),d.init(N),E.push(d),W.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),S!==W&&S.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),d.setupLights();const q=new Set;return S.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ut=B.material;if(ut)if(Array.isArray(ut))for(let St=0;St<ut.length;St++){const Pt=ut[St];fe(Pt,W,B),q.add(Pt)}else fe(ut,W,B),q.add(ut)}),d=E.pop(),q},this.compileAsync=function(S,N,W=null){const q=this.compile(S,N,W);return new Promise(B=>{function ut(){if(q.forEach(function(St){at.get(St).currentProgram.isReady()&&q.delete(St)}),q.size===0){B(S);return}setTimeout(ut,10)}J.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let ie=null;function Ln(S){ie&&ie(S)}function vn(){si.stop()}function Pl(){si.start()}const si=new qu;si.setAnimationLoop(Ln),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(S){ie=S,ht.setAnimationLoop(S),S===null?si.stop():si.start()},ht.addEventListener("sessionstart",vn),ht.addEventListener("sessionend",Pl),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(N),N=ht.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,N,D),d=Ut.get(S,E.length),d.init(N),E.push(d),K.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),At.setFromProjectionMatrix(K,Tn,N.reversedDepth),X=this.localClippingEnabled,Tt=dt.init(this.clippingPlanes,X),m=$.get(S,T.length),m.init(),T.push(m),ht.enabled===!0&&ht.isPresenting===!0){const ut=x.xr.getDepthSensingMesh();ut!==null&&Eo(ut,N,-1/0,x.sortObjects)}Eo(S,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(st,gt),Kt=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,Kt&&Ft.addToRenderList(m,S),this.info.render.frame++,Tt===!0&&dt.beginShadows();const W=d.state.shadowsArray;Dt.render(W,S,N),Tt===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,B=m.transmissive;if(d.setupLights(),N.isArrayCamera){const ut=N.cameras;if(B.length>0)for(let St=0,Pt=ut.length;St<Pt;St++){const wt=ut[St];Dl(q,B,S,wt)}Kt&&Ft.render(S);for(let St=0,Pt=ut.length;St<Pt;St++){const wt=ut[St];Ll(m,S,wt,wt.viewport)}}else B.length>0&&Dl(q,B,S,N),Kt&&Ft.render(S),Ll(m,S,N);D!==null&&L===0&&(mt.updateMultisampleRenderTarget(D),mt.updateRenderTargetMipmap(D)),S.isScene===!0&&S.onAfterRender(x,S,N),Mt.resetDefaultState(),y=-1,M=null,E.pop(),E.length>0?(d=E[E.length-1],Tt===!0&&dt.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Eo(S,N,W,q){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||At.intersectsSprite(S)){q&&Lt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(K);const St=z.update(S),Pt=S.material;Pt.visible&&m.push(S,St,Pt,W,Lt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||At.intersectsObject(S))){const St=z.update(S),Pt=S.material;if(q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Lt.copy(S.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Lt.copy(St.boundingSphere.center)),Lt.applyMatrix4(S.matrixWorld).applyMatrix4(K)),Array.isArray(Pt)){const wt=St.groups;for(let Vt=0,Wt=wt.length;Vt<Wt;Vt++){const Bt=wt[Vt],Qt=Pt[Bt.materialIndex];Qt&&Qt.visible&&m.push(S,St,Qt,W,Lt.z,Bt)}}else Pt.visible&&m.push(S,St,Pt,W,Lt.z,null)}}const ut=S.children;for(let St=0,Pt=ut.length;St<Pt;St++)Eo(ut[St],N,W,q)}function Ll(S,N,W,q){const B=S.opaque,ut=S.transmissive,St=S.transparent;d.setupLightsView(W),Tt===!0&&dt.setGlobalState(x.clippingPlanes,W),q&&et.viewport(C.copy(q)),B.length>0&&_s(B,N,W),ut.length>0&&_s(ut,N,W),St.length>0&&_s(St,N,W),et.buffers.depth.setTest(!0),et.buffers.depth.setMask(!0),et.buffers.color.setMask(!0),et.setPolygonOffset(!1)}function Dl(S,N,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[q.id]===void 0&&(d.state.transmissionRenderTarget[q.id]=new Si(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?ls:Cn,minFilter:xi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const ut=d.state.transmissionRenderTarget[q.id],St=q.viewport||C;ut.setSize(St.z*x.transmissionResolutionScale,St.w*x.transmissionResolutionScale);const Pt=x.getRenderTarget(),wt=x.getActiveCubeFace(),Vt=x.getActiveMipmapLevel();x.setRenderTarget(ut),x.getClearColor(k),V=x.getClearAlpha(),V<1&&x.setClearColor(16777215,.5),x.clear(),Kt&&Ft.render(W);const Wt=x.toneMapping;x.toneMapping=Hn;const Bt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),d.setupLightsView(q),Tt===!0&&dt.setGlobalState(x.clippingPlanes,q),_s(S,W,q),mt.updateMultisampleRenderTarget(ut),mt.updateRenderTargetMipmap(ut),J.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let ae=0,_e=N.length;ae<_e;ae++){const de=N[ae],he=de.object,Ht=de.geometry,pe=de.material,ee=de.group;if(pe.side===je&&he.layers.test(q.layers)){const qe=pe.side;pe.side=We,pe.needsUpdate=!0,Fl(he,W,q,Ht,pe,ee),pe.side=qe,pe.needsUpdate=!0,Qt=!0}}Qt===!0&&(mt.updateMultisampleRenderTarget(ut),mt.updateRenderTargetMipmap(ut))}x.setRenderTarget(Pt,wt,Vt),x.setClearColor(k,V),Bt!==void 0&&(q.viewport=Bt),x.toneMapping=Wt}function _s(S,N,W){const q=N.isScene===!0?N.overrideMaterial:null;for(let B=0,ut=S.length;B<ut;B++){const St=S[B],Pt=St.object,wt=St.geometry,Vt=St.group;let Wt=St.material;Wt.allowOverride===!0&&q!==null&&(Wt=q),Pt.layers.test(W.layers)&&Fl(Pt,N,W,wt,Wt,Vt)}}function Fl(S,N,W,q,B,ut){S.onBeforeRender(x,N,W,q,B,ut),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),B.onBeforeRender(x,N,W,q,S,ut),B.transparent===!0&&B.side===je&&B.forceSinglePass===!1?(B.side=We,B.needsUpdate=!0,x.renderBufferDirect(W,N,q,B,S,ut),B.side=wn,B.needsUpdate=!0,x.renderBufferDirect(W,N,q,B,S,ut),B.side=je):x.renderBufferDirect(W,N,q,B,S,ut),S.onAfterRender(x,N,W,q,B,ut)}function vs(S,N,W){N.isScene!==!0&&(N=Ct);const q=at.get(S),B=d.state.lights,ut=d.state.shadowsArray,St=B.state.version,Pt=Z.getParameters(S,B.state,ut,N,W),wt=Z.getProgramCacheKey(Pt);let Vt=q.programs;q.environment=S.isMeshStandardMaterial?N.environment:null,q.fog=N.fog,q.envMap=(S.isMeshStandardMaterial?Xt:qt).get(S.envMap||q.environment),q.envMapRotation=q.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Vt===void 0&&(S.addEventListener("dispose",it),Vt=new Map,q.programs=Vt);let Wt=Vt.get(wt);if(Wt!==void 0){if(q.currentProgram===Wt&&q.lightsStateVersion===St)return Ul(S,Pt),Wt}else Pt.uniforms=Z.getUniforms(S),S.onBeforeCompile(Pt,x),Wt=Z.acquireProgram(Pt,wt),Vt.set(wt,Wt),q.uniforms=Pt.uniforms;const Bt=q.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Bt.clippingPlanes=dt.uniform),Ul(S,Pt),q.needsLights=_h(S),q.lightsStateVersion=St,q.needsLights&&(Bt.ambientLightColor.value=B.state.ambient,Bt.lightProbe.value=B.state.probe,Bt.directionalLights.value=B.state.directional,Bt.directionalLightShadows.value=B.state.directionalShadow,Bt.spotLights.value=B.state.spot,Bt.spotLightShadows.value=B.state.spotShadow,Bt.rectAreaLights.value=B.state.rectArea,Bt.ltc_1.value=B.state.rectAreaLTC1,Bt.ltc_2.value=B.state.rectAreaLTC2,Bt.pointLights.value=B.state.point,Bt.pointLightShadows.value=B.state.pointShadow,Bt.hemisphereLights.value=B.state.hemi,Bt.directionalShadowMap.value=B.state.directionalShadowMap,Bt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Bt.spotShadowMap.value=B.state.spotShadowMap,Bt.spotLightMatrix.value=B.state.spotLightMatrix,Bt.spotLightMap.value=B.state.spotLightMap,Bt.pointShadowMap.value=B.state.pointShadowMap,Bt.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=Wt,q.uniformsList=null,Wt}function Il(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=to.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Ul(S,N){const W=at.get(S);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function mh(S,N,W,q,B){N.isScene!==!0&&(N=Ct),mt.resetTextureUnits();const ut=N.fog,St=q.isMeshStandardMaterial?N.environment:null,Pt=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:er,wt=(q.isMeshStandardMaterial?Xt:qt).get(q.envMap||St),Vt=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Wt=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Bt=!!W.morphAttributes.position,Qt=!!W.morphAttributes.normal,ae=!!W.morphAttributes.color;let _e=Hn;q.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(_e=x.toneMapping);const de=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,he=de!==void 0?de.length:0,Ht=at.get(q),pe=d.state.lights;if(Tt===!0&&(X===!0||S!==M)){const Ne=S===M&&q.id===y;dt.setState(q,S,Ne)}let ee=!1;q.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==pe.state.version||Ht.outputColorSpace!==Pt||B.isBatchedMesh&&Ht.batching===!1||!B.isBatchedMesh&&Ht.batching===!0||B.isBatchedMesh&&Ht.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ht.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ht.instancing===!1||!B.isInstancedMesh&&Ht.instancing===!0||B.isSkinnedMesh&&Ht.skinning===!1||!B.isSkinnedMesh&&Ht.skinning===!0||B.isInstancedMesh&&Ht.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ht.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ht.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ht.instancingMorph===!1&&B.morphTexture!==null||Ht.envMap!==wt||q.fog===!0&&Ht.fog!==ut||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==dt.numPlanes||Ht.numIntersection!==dt.numIntersection)||Ht.vertexAlphas!==Vt||Ht.vertexTangents!==Wt||Ht.morphTargets!==Bt||Ht.morphNormals!==Qt||Ht.morphColors!==ae||Ht.toneMapping!==_e||Ht.morphTargetsCount!==he)&&(ee=!0):(ee=!0,Ht.__version=q.version);let qe=Ht.currentProgram;ee===!0&&(qe=vs(q,N,B));let Ai=!1,Ye=!1,_r=!1;const me=qe.getUniforms(),tn=Ht.uniforms;if(et.useProgram(qe.program)&&(Ai=!0,Ye=!0,_r=!0),q.id!==y&&(y=q.id,Ye=!0),Ai||M!==S){et.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),me.setValue(b,"projectionMatrix",S.projectionMatrix),me.setValue(b,"viewMatrix",S.matrixWorldInverse);const He=me.map.cameraPosition;He!==void 0&&He.setValue(b,vt.setFromMatrixPosition(S.matrixWorld)),Q.logarithmicDepthBuffer&&me.setValue(b,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&me.setValue(b,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,Ye=!0,_r=!0)}if(B.isSkinnedMesh){me.setOptional(b,B,"bindMatrix"),me.setOptional(b,B,"bindMatrixInverse");const Ne=B.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),me.setValue(b,"boneTexture",Ne.boneTexture,mt))}B.isBatchedMesh&&(me.setOptional(b,B,"batchingTexture"),me.setValue(b,"batchingTexture",B._matricesTexture,mt),me.setOptional(b,B,"batchingIdTexture"),me.setValue(b,"batchingIdTexture",B._indirectTexture,mt),me.setOptional(b,B,"batchingColorTexture"),B._colorsTexture!==null&&me.setValue(b,"batchingColorTexture",B._colorsTexture,mt));const en=W.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&lt.update(B,W,qe),(Ye||Ht.receiveShadow!==B.receiveShadow)&&(Ht.receiveShadow=B.receiveShadow,me.setValue(b,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(tn.envMap.value=wt,tn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&N.environment!==null&&(tn.envMapIntensity.value=N.environmentIntensity),Ye&&(me.setValue(b,"toneMappingExposure",x.toneMappingExposure),Ht.needsLights&&gh(tn,_r),ut&&q.fog===!0&&ot.refreshFogUniforms(tn,ut),ot.refreshMaterialUniforms(tn,q,G,nt,d.state.transmissionRenderTarget[S.id]),to.upload(b,Il(Ht),tn,mt)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(to.upload(b,Il(Ht),tn,mt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&me.setValue(b,"center",B.center),me.setValue(b,"modelViewMatrix",B.modelViewMatrix),me.setValue(b,"normalMatrix",B.normalMatrix),me.setValue(b,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Ne=q.uniformsGroups;for(let He=0,To=Ne.length;He<To;He++){const oi=Ne[He];Zt.update(oi,qe),Zt.bind(oi,qe)}}return qe}function gh(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function _h(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(S,N,W){const q=at.get(S);q.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),at.get(S.texture).__webglTexture=N,at.get(S.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:W,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){const W=at.get(S);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0};const vh=b.createFramebuffer();this.setRenderTarget=function(S,N=0,W=0){D=S,R=N,L=W;let q=!0,B=null,ut=!1,St=!1;if(S){const wt=at.get(S);if(wt.__useDefaultFramebuffer!==void 0)et.bindFramebuffer(b.FRAMEBUFFER,null),q=!1;else if(wt.__webglFramebuffer===void 0)mt.setupRenderTarget(S);else if(wt.__hasExternalTextures)mt.rebindTextures(S,at.get(S.texture).__webglTexture,at.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Bt=S.depthTexture;if(wt.__boundDepthTexture!==Bt){if(Bt!==null&&at.has(Bt)&&(S.width!==Bt.image.width||S.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");mt.setupDepthRenderbuffer(S)}}const Vt=S.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(St=!0);const Wt=at.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Wt[N])?B=Wt[N][W]:B=Wt[N],ut=!0):S.samples>0&&mt.useMultisampledRTT(S)===!1?B=at.get(S).__webglMultisampledFramebuffer:Array.isArray(Wt)?B=Wt[W]:B=Wt,C.copy(S.viewport),U.copy(S.scissor),O=S.scissorTest}else C.copy(yt).multiplyScalar(G).floor(),U.copy(kt).multiplyScalar(G).floor(),O=tt;if(W!==0&&(B=vh),et.bindFramebuffer(b.FRAMEBUFFER,B)&&q&&et.drawBuffers(S,B),et.viewport(C),et.scissor(U),et.setScissorTest(O),ut){const wt=at.get(S.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+N,wt.__webglTexture,W)}else if(St){const wt=N;for(let Vt=0;Vt<S.textures.length;Vt++){const Wt=at.get(S.textures[Vt]);b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0+Vt,Wt.__webglTexture,W,wt)}}else if(S!==null&&W!==0){const wt=at.get(S.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,wt.__webglTexture,W)}y=-1},this.readRenderTargetPixels=function(S,N,W,q,B,ut,St,Pt=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=at.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&St!==void 0&&(wt=wt[St]),wt){et.bindFramebuffer(b.FRAMEBUFFER,wt);try{const Vt=S.textures[Pt],Wt=Vt.format,Bt=Vt.type;if(!Q.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-q&&W>=0&&W<=S.height-B&&(S.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Pt),b.readPixels(N,W,q,B,Ot.convert(Wt),Ot.convert(Bt),ut))}finally{const Vt=D!==null?at.get(D).__webglFramebuffer:null;et.bindFramebuffer(b.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(S,N,W,q,B,ut,St,Pt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=at.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&St!==void 0&&(wt=wt[St]),wt)if(N>=0&&N<=S.width-q&&W>=0&&W<=S.height-B){et.bindFramebuffer(b.FRAMEBUFFER,wt);const Vt=S.textures[Pt],Wt=Vt.format,Bt=Vt.type;if(!Q.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qt=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Qt),b.bufferData(b.PIXEL_PACK_BUFFER,ut.byteLength,b.STREAM_READ),S.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Pt),b.readPixels(N,W,q,B,Ot.convert(Wt),Ot.convert(Bt),0);const ae=D!==null?at.get(D).__webglFramebuffer:null;et.bindFramebuffer(b.FRAMEBUFFER,ae);const _e=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await Cf(b,_e,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Qt),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,ut),b.deleteBuffer(Qt),b.deleteSync(_e),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,W=0){const q=Math.pow(2,-W),B=Math.floor(S.image.width*q),ut=Math.floor(S.image.height*q),St=N!==null?N.x:0,Pt=N!==null?N.y:0;mt.setTexture2D(S,0),b.copyTexSubImage2D(b.TEXTURE_2D,W,0,0,St,Pt,B,ut),et.unbindTexture()};const xh=b.createFramebuffer(),Mh=b.createFramebuffer();this.copyTextureToTexture=function(S,N,W=null,q=null,B=0,ut=null){ut===null&&(B!==0?(Xr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ut=B,B=0):ut=0);let St,Pt,wt,Vt,Wt,Bt,Qt,ae,_e;const de=S.isCompressedTexture?S.mipmaps[ut]:S.image;if(W!==null)St=W.max.x-W.min.x,Pt=W.max.y-W.min.y,wt=W.isBox3?W.max.z-W.min.z:1,Vt=W.min.x,Wt=W.min.y,Bt=W.isBox3?W.min.z:0;else{const en=Math.pow(2,-B);St=Math.floor(de.width*en),Pt=Math.floor(de.height*en),S.isDataArrayTexture?wt=de.depth:S.isData3DTexture?wt=Math.floor(de.depth*en):wt=1,Vt=0,Wt=0,Bt=0}q!==null?(Qt=q.x,ae=q.y,_e=q.z):(Qt=0,ae=0,_e=0);const he=Ot.convert(N.format),Ht=Ot.convert(N.type);let pe;N.isData3DTexture?(mt.setTexture3D(N,0),pe=b.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(mt.setTexture2DArray(N,0),pe=b.TEXTURE_2D_ARRAY):(mt.setTexture2D(N,0),pe=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,N.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,N.unpackAlignment);const ee=b.getParameter(b.UNPACK_ROW_LENGTH),qe=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Ai=b.getParameter(b.UNPACK_SKIP_PIXELS),Ye=b.getParameter(b.UNPACK_SKIP_ROWS),_r=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,de.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,de.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Vt),b.pixelStorei(b.UNPACK_SKIP_ROWS,Wt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Bt);const me=S.isDataArrayTexture||S.isData3DTexture,tn=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){const en=at.get(S),Ne=at.get(N),He=at.get(en.__renderTarget),To=at.get(Ne.__renderTarget);et.bindFramebuffer(b.READ_FRAMEBUFFER,He.__webglFramebuffer),et.bindFramebuffer(b.DRAW_FRAMEBUFFER,To.__webglFramebuffer);for(let oi=0;oi<wt;oi++)me&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,at.get(S).__webglTexture,B,Bt+oi),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,at.get(N).__webglTexture,ut,_e+oi)),b.blitFramebuffer(Vt,Wt,St,Pt,Qt,ae,St,Pt,b.DEPTH_BUFFER_BIT,b.NEAREST);et.bindFramebuffer(b.READ_FRAMEBUFFER,null),et.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(B!==0||S.isRenderTargetTexture||at.has(S)){const en=at.get(S),Ne=at.get(N);et.bindFramebuffer(b.READ_FRAMEBUFFER,xh),et.bindFramebuffer(b.DRAW_FRAMEBUFFER,Mh);for(let He=0;He<wt;He++)me?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,en.__webglTexture,B,Bt+He):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,en.__webglTexture,B),tn?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ne.__webglTexture,ut,_e+He):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Ne.__webglTexture,ut),B!==0?b.blitFramebuffer(Vt,Wt,St,Pt,Qt,ae,St,Pt,b.COLOR_BUFFER_BIT,b.NEAREST):tn?b.copyTexSubImage3D(pe,ut,Qt,ae,_e+He,Vt,Wt,St,Pt):b.copyTexSubImage2D(pe,ut,Qt,ae,Vt,Wt,St,Pt);et.bindFramebuffer(b.READ_FRAMEBUFFER,null),et.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else tn?S.isDataTexture||S.isData3DTexture?b.texSubImage3D(pe,ut,Qt,ae,_e,St,Pt,wt,he,Ht,de.data):N.isCompressedArrayTexture?b.compressedTexSubImage3D(pe,ut,Qt,ae,_e,St,Pt,wt,he,de.data):b.texSubImage3D(pe,ut,Qt,ae,_e,St,Pt,wt,he,Ht,de):S.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,ut,Qt,ae,St,Pt,he,Ht,de.data):S.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,ut,Qt,ae,de.width,de.height,he,de.data):b.texSubImage2D(b.TEXTURE_2D,ut,Qt,ae,St,Pt,he,Ht,de);b.pixelStorei(b.UNPACK_ROW_LENGTH,ee),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,qe),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ai),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ye),b.pixelStorei(b.UNPACK_SKIP_IMAGES,_r),ut===0&&N.generateMipmaps&&b.generateMipmap(pe),et.unbindTexture()},this.initRenderTarget=function(S){at.get(S).__webglFramebuffer===void 0&&mt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?mt.setTextureCube(S,0):S.isData3DTexture?mt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?mt.setTexture2DArray(S,0):mt.setTexture2D(S,0),et.unbindTexture()},this.resetState=function(){R=0,L=0,D=null,et.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}const Cr=new w;function rn(n,t,e,i,r,s){const o=2*Math.PI*r/4,a=Math.max(s-2*r,0),l=Math.PI/4;Cr.copy(t),Cr[i]=0,Cr.normalize();const c=.5*o/(o+a),u=1-Cr.angleTo(n)/l;return Math.sign(Cr[e])===1?u*c:a/(o+a)+c+c*(1-u)}class Al extends Xe{constructor(t=1,e=1,i=1,r=2,s=.1){const o=r*2+1;if(s=Math.min(t/2,e/2,i/2,s),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:r,radius:s},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new w,c=new w,u=new w(t,e,i).divideScalar(2).subScalar(s),h=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,g=h.length/6,_=new w,m=.5/o;for(let d=0,T=0;d<h.length;d+=3,T+=2)switch(l.fromArray(h,d),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),h[d+0]=u.x*Math.sign(l.x)+c.x*s,h[d+1]=u.y*Math.sign(l.y)+c.y*s,h[d+2]=u.z*Math.sign(l.z)+c.z*s,f[d+0]=c.x,f[d+1]=c.y,f[d+2]=c.z,Math.floor(d/g)){case 0:_.set(1,0,0),p[T+0]=rn(_,c,"z","y",s,i),p[T+1]=1-rn(_,c,"y","z",s,e);break;case 1:_.set(-1,0,0),p[T+0]=1-rn(_,c,"z","y",s,i),p[T+1]=1-rn(_,c,"y","z",s,e);break;case 2:_.set(0,1,0),p[T+0]=1-rn(_,c,"x","z",s,t),p[T+1]=rn(_,c,"z","x",s,i);break;case 3:_.set(0,-1,0),p[T+0]=1-rn(_,c,"x","z",s,t),p[T+1]=1-rn(_,c,"z","x",s,i);break;case 4:_.set(0,0,1),p[T+0]=1-rn(_,c,"x","y",s,t),p[T+1]=1-rn(_,c,"y","x",s,e);break;case 5:_.set(0,0,-1),p[T+0]=rn(_,c,"x","y",s,t),p[T+1]=1-rn(_,c,"y","x",s,e);break}}static fromJSON(t){return new Al(t.width,t.height,t.depth,t.segments,t.radius)}}const Kr=new w(0,1,0),Xc=[.45,.72,1];let oa=null;function R_(){if(oa)return oa;const n=new Uint8Array(Xc.map(e=>Math.round(e*255))),t=new Lu(n,Xc.length,1,_o);return t.minFilter=t.magFilter=ke,t.colorSpace=Mn,t.needsUpdate=!0,oa=t}function P_(n){const t=e=>`${e}
		directLight.color *= step( 0.0, dot( geometryNormal, directLight.direction ) );`;n.fragmentShader=n.fragmentShader.replace("#include <lights_fragment_begin>",Jt.lights_fragment_begin.replace("getPointLightInfo( pointLight, geometryPosition, directLight );",t("getPointLightInfo( pointLight, geometryPosition, directLight );")).replace("getSpotLightInfo( spotLight, geometryPosition, directLight );",t("getSpotLightInfo( spotLight, geometryPosition, directLight );")))}function Et(n,t={}){const e=new Od({color:n,gradientMap:R_(),map:t.map??null,alphaMap:t.alphaMap??null,side:t.side??wn,transparent:!!t.transparent,opacity:t.opacity??1});return e.onBeforeCompile=P_,t.emissive&&(e.emissive=new zt(t.emissive),e.emissiveIntensity=t.emissiveIntensity??1,t.emissiveMap&&(e.emissiveMap=t.emissiveMap)),e}function kn(n,t={}){return new fr({color:n,map:t.map??null,side:t.side??wn,transparent:!!t.transparent,opacity:t.opacity??1,toneMapped:t.toneMapped??!0})}function Rn(n,t){return n.castShadow=t.cast??!0,n.receiveShadow=t.receive??!0,n}const L_=.06;function rt(n,t,e,i,r,s,o,a,l={}){const c=e-t,u=r-i,h=o-s,f=l.sharp?0:Math.min(l.r??L_,c/2.001,h/2.001,u/2.001),p=f>0?new Al(c,h,u,l.seg??(f>.3?5:3),f):new Xe(c,h,u),g=new te(p,a);return g.position.set((t+e)/2,(s+o)/2,(i+r)/2),n.add(Rn(g,l)),g}function ce(n,t,e,i,r,s,o,a={}){const l=new dr(a.rTop??i,i,s-r,a.seg??32),c=new te(l,o);return c.position.set(t,(r+s)/2,e),n.add(Rn(c,a)),c}function jr(n,t,e,i,r,s,o,a={}){const l=new dr(s,s,e-t,a.seg??20),c=new te(l,o);return c.rotation.z=Math.PI/2,c.position.set((t+e)/2,i,r),n.add(Rn(c,a)),c}function sr(n,t,e,i,r,s,o,a={}){const l=new dr(s,s,e-t,a.seg??20),c=new te(l,o);return c.rotation.x=Math.PI/2,c.position.set(i,r,(t+e)/2),n.add(Rn(c,a)),c}function ve(n,t,e,i,r,s,o={}){const a=o.seg??28,l=o.seg?Math.round(o.seg*.7):20,c=new te(new Ti(r,a,l,o.phiStart??0,o.phiLength??Math.PI*2,o.thetaStart??0,o.thetaLength??Math.PI),s);return c.position.set(t,e,i),o.scale&&c.scale.set(...o.scale),o.rot&&c.rotation.set(...o.rot),n.add(Rn(c,o)),c}function ye(n,t,e,i,r,s={}){const o=new w().subVectors(e,t);if(s.rb!==void 0&&s.rb!==i){const c=s.rb,u=o.length(),h=new Re;h.position.copy(t),h.quaternion.setFromUnitVectors(Kr,o.clone().normalize());const f=new te(new dr(c,i,u,20,1,!0),r);f.position.y=u/2;const p=new te(new Ti(i,20,14),r),g=new te(new Ti(c,20,14),r);g.position.y=u;for(const _ of[f,p,g])h.add(Rn(_,s));return n.add(h),h}const a=Math.max(.01,o.length()-2*i),l=new te(new vl(i,a,8,20),r);return l.position.copy(t).addScaledVector(o,.5),l.quaternion.setFromUnitVectors(Kr,o.normalize()),n.add(Rn(l,s)),l}function D_(n,t,e,i={}){const r=i.seg??36,s=i.rings??32,o=new co(t.map(m=>new w(m.y,m.w,m.d)),!1,"centripetal"),a=new co(t.map(m=>new w(m.x??0,m.z??0,m.n??2.3)),!1,"centripetal"),l=[],c=[],u=new w,h=new w;for(let m=0;m<=s;m++){o.getPoint(m/s,u),a.getPoint(m/s,h);const d=2/h.z;for(let T=0;T<r;T++){const E=T/r*Math.PI*2,x=Math.cos(E),P=Math.sin(E);l.push(h.x+u.y*Math.sign(x)*Math.pow(Math.abs(x),d),u.x,h.y+u.z*Math.sign(P)*Math.pow(Math.abs(P),d))}}for(let m=0;m<s;m++)for(let d=0;d<r;d++){const T=m*r+d,E=m*r+(d+1)%r,x=T+r,P=E+r;c.push(T,x,E,E,x,P)}const f=l.length/3;o.getPoint(0,u),a.getPoint(0,h),l.push(h.x,u.x,h.y);const p=f+1;o.getPoint(1,u),a.getPoint(1,h),l.push(h.x,u.x,h.y);for(let m=0;m<r;m++)c.push(f,m,(m+1)%r),c.push(p,s*r+(m+1)%r,s*r+m);const g=new Le;g.setAttribute("position",new se(l,3)),g.setIndex(c),g.computeVertexNormals();const _=new te(g,e);return n.add(Rn(_,i)),_}function Qr(n,t,e,i,r,s,o,a={}){const l=new te(new yl(r,s,a.tube??10,a.seg??32,a.arc??Math.PI*2),o);return l.position.set(t,e,i),a.axis==="x"?l.rotation.y=Math.PI/2:a.axis==="y"&&(l.rotation.x=Math.PI/2),a.rotZ&&(l.rotation.z=a.rotZ),n.add(Rn(l,a)),l}function ho(n,t,e,i,r={}){const s=new co(t,!!r.closed,"centripetal",r.tension??.5),o=new te(new Sl(s,r.seg??160,e,r.radial??12,!!r.closed),i);return n.add(Rn(o,r)),{mesh:o,curve:s}}function on(n,t,e,i,r,s,o,a,l={}){const c=new pr(r-i,o-s),u=new te(c,a),h=(i+r)/2,f=(s+o)/2;switch(t){case"+x":u.rotation.y=Math.PI/2,u.position.set(e,f,h);break;case"-x":u.rotation.y=-Math.PI/2,u.position.set(e,f,h);break;case"+z":u.position.set(h,f,e);break;case"-z":u.rotation.y=Math.PI,u.position.set(h,f,e);break;case"+y":u.rotation.x=-Math.PI/2,u.position.set(h,e,f);break}return u.castShadow=l.cast??!1,u.receiveShadow=l.receive??!1,l.renderOrder&&(u.renderOrder=l.renderOrder),n.add(u),u}function hs(n,t,e,i,r,s){const o=new Re;return o.position.set(t,e,i),o.rotation[r]=s,n.add(o),o}function ts(n,t,e,i,r={}){const s=new Du(t,e,i);s.castShadow=r.cast??!0,s.receiveShadow=r.receive??!0;const o=new re,a=new w,l=new Wn,c=new w,u=new zt;let h=0;return n.add(s),{mesh:s,place(f,p,g,_=1,m=1,d=1,T=null,E=0){h>=i||(a.set(f,p,g),c.set(_,m,d),l.setFromAxisAngle(Kr,E),s.setMatrixAt(h,o.compose(a,l,c)),T&&s.setColorAt(h,u.set(T)),h++)},done(){s.count=h,s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0)}}}const F_=2;function Ue(n,t,e,i={}){const r=document.createElement("canvas"),s=i.q??F_;r.width=n*s,r.height=t*s;const o=r.getContext("2d");o.scale(s,s),e(o,n,t);const a=new sd(r);return a.colorSpace=i.linear?Mn:$e,a.anisotropy=i.anisotropy??16,i.repeat&&(a.wrapS=a.wrapT=ro),i.nearest&&(a.magFilter=ke),a}let I_=null;function U_(){return I_??=Ue(256,256,(n,t,e)=>{n.clearRect(0,0,t,e),n.fillStyle="rgba(255,255,255,.22)",n.beginPath(),n.arc(t/2,e/2,t*.5,0,Math.PI*2),n.fill()})}function fs(n,t,e,i,r,s,o){const a=new Ru({map:U_(),color:s,transparent:!0,opacity:0,depthWrite:!1,blending:ca});Se(a,"opacity",0,o);const l=new td(a);return l.position.set(t,e,i),l.scale.set(r,r,1),n.add(l),l}const Ku=[];function Se(n,t,e,i){return Ku.push({target:n,key:t,day:e,night:i,color:e instanceof zt}),n}function ju(n){for(const t of Ku)t.color?t.target[t.key].copy(t.day).lerp(t.night,n):t.target[t.key]=t.day+(t.night-t.day)*n}const qc=n=>new zt(n),nl=.3;function ni(n,t,e,i,r,s,o=0){const a=new Vd(r,0,o,2);return a.position.set(t,e,i),Se(a,"intensity",0,s*nl),n.add(a),a}function Ki(n,t,e,i={}){return n.emissive=qc(t),n.emissiveIntensity=0,Se(n,"emissiveIntensity",0,e),i.dark&&Se(n,"color",n.color.clone(),qc(i.dark)),i.opacity!==void 0&&(n.transparent=!0,n.opacity=i.opacity,Se(n,"opacity",i.opacity,i.nightOpacity??1)),n}let N_=null;function O_(){return N_??=Ue(256,256,(n,t,e)=>{n.clearRect(0,0,t,e),n.fillStyle="rgba(0,0,0,1)",n.beginPath(),n.roundRect(40,40,t-80,e-80,36),n.fill()})}function ln(n,t,e,i,r,s=.32,o=.025){const a=new fr({map:O_(),color:"#3A3028",transparent:!0,opacity:s*.55,depthWrite:!1,toneMapped:!1}),l=Math.min(e-t,r-i)*.3;return on(n,"+y",o,t-l,e+l,i-l,r+l,a,{renderOrder:1})}const Fr=(n,t,e)=>n+(t-n)*e,es=(n,t=0,e=1)=>Math.min(e,Math.max(t,n)),fo=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,il="Inter, system-ui, sans-serif";function Gn(n,t,e,i,r,s){n.beginPath(),n.moveTo(t+s,e),n.arcTo(t+i,e,t+i,e+r,s),n.arcTo(t+i,e+r,t,e+r,s),n.arcTo(t,e+r,t,e,s),n.arcTo(t,e,t+i,e,s),n.closePath()}function ds(n){let t=n*9301+49297;return()=>(t=(t*9301+49297)%233280,t/233280)}function B_(){return Ue(512,512,(n,t,e)=>{n.fillStyle="#E2D9CB",n.fillRect(0,0,t,e),n.fillStyle="#CFC5B5",n.fillRect(0,0,t,6),n.fillRect(0,0,6,e)},{repeat:!0,anisotropy:16})}function z_(){return Ue(128,128,(n,t,e)=>{n.fillStyle="#8A6E4E",n.fillRect(0,0,t,e);for(let i=0;i<e;i+=16)for(let r=0;r<t;r+=16)n.fillStyle=(r+i)/16%2?"#A3845F":"#75593C",n.fillRect(r+1,i+1,14,14)},{repeat:!0})}function k_(){return Ue(512,320,(n,t,e)=>{const i=n.createRadialGradient(t*.2,0,0,t*.2,0,t*1.1);i.addColorStop(0,"#F3EEE6"),i.addColorStop(.55,"#E4DDD1"),i.addColorStop(1,"#D6CEC1"),n.fillStyle=i,n.fillRect(0,0,t,e),n.fillStyle="rgba(255,255,255,.55)",n.fillRect(0,0,t,12);const r=22,s=26,o=t-44,a=e-46;n.fillStyle="rgba(40,30,20,.16)",Gn(n,r,s+6,o,a,10),n.fill(),n.fillStyle="#FFFFFF",Gn(n,r,s,o,a,10),n.fill(),n.fillStyle="#FAF9F7",n.fillRect(r+6,s,o-12,22),n.fillStyle="rgba(29,29,33,.09)",n.fillRect(r,s+22,o,1),["#FF5F57","#FEBC2E","#28C840"].forEach((u,h)=>{n.fillStyle=u,n.beginPath(),n.arc(r+14+h*11,s+11,3.5,0,Math.PI*2),n.fill()}),n.fillStyle="#1D1D21",n.fillRect(r+52,s+9,44,5);const l=(o-48)/3,c=(a-23-36)/2;for(let u=0;u<2;u++)for(let h=0;h<3;h++){if(u===1&&h===2)continue;const f=r+12+h*(l+12),p=s+23+12+u*(c+12);n.fillStyle="#F6F4F0",Gn(n,f,p,l,c,8),n.fill(),n.fillStyle="#9A968E",n.fillRect(f+10,p+10,24,4),n.fillStyle="#1D1D21",n.fillRect(f+10,p+c-30,l*.55,6),n.fillStyle="#A09C95",n.fillRect(f+10,p+c-18,l*.7,4)}})}function H_(){return Ue(512,352,(n,t,e)=>{n.fillStyle="#C9CBCF",n.fillRect(0,0,t,e);const i=36,r=(t-72)/14,s=26;for(let o=0;o<6;o++)for(let a=0;a<14;a++){if(o===5&&a>3&&a<9){a===4&&(Gn(n,i+4*r+2,166,5*r-4,s-4,3),n.fillStyle="#1E1E22",n.fill());continue}Gn(n,i+a*r+2,14+o*30+2,r-4,s-4,3),n.fillStyle="#1E1E22",n.fill(),n.fillStyle="rgba(255,255,255,.07)",n.fillRect(i+a*r+4,14+o*30+4,r-8,2)}Gn(n,t/2-110,204,220,128,8),n.fillStyle="#B9BBC0",n.fill(),n.strokeStyle="rgba(0,0,0,.12)",n.lineWidth=2,n.stroke()})}function V_(){return Ue(480,320,(n,t,e)=>{n.fillStyle="#1E1F26",n.fillRect(0,0,t,e),n.fillStyle="#2A2B33",n.fillRect(0,0,t,24),n.fillRect(0,24,34,e),n.fillStyle="#3A3B45",n.fillRect(0,24,120,e);const i=ds(3),r=["#C792EA","#82AAFF","#C3E88D","#F78C6C","#89DDFF","#EEFFFF"];for(let s=0;s<18;s++){const o=38+s*15;let a=134+Math.floor(i()*3)*16;const l=1+Math.floor(i()*4);for(let c=0;c<l;c++){const u=18+i()*70;if(n.fillStyle=r[Math.floor(i()*r.length)],n.fillRect(a,o,u,6),a+=u+9,a>t-30)break}}for(let s=0;s<12;s++)n.fillStyle=s===3?"#E0E0E8":"#8A8B95",n.fillRect(14,40+s*20,70+s*29%30,6)})}function G_(){return Ue(640,360,(n,t,e)=>{n.fillStyle="#1B1C22",n.fillRect(0,0,t,e),n.fillStyle="#262730",n.fillRect(0,0,t,22);for(let a=0;a<3;a++)n.fillStyle=["#FF5F56","#FFBD2E","#28C840"][a],n.beginPath(),n.arc(14+a*14,11,4,0,Math.PI*2),n.fill();n.fillStyle="#2E2F39",n.fillRect(0,22,30,e);const i=ds(21),r=["#C792EA","#82AAFF","#C3E88D","#F78C6C","#89DDFF","#EEFFFF"];for(let a=0;a<15;a++){const l=36+a*14;let c=44+Math.floor(i()*3)*14;const u=1+Math.floor(i()*4);for(let h=0;h<u;h++){const f=16+i()*64;if(n.fillStyle=r[Math.floor(i()*r.length)],n.fillRect(c,l,f,5),c+=f+8,c>380)break}n.fillStyle="#5A5C68",n.fillRect(10,l,12,5)}n.fillStyle="#111217",n.fillRect(0,250,410,e-250),n.fillStyle="#2E2F39",n.fillRect(0,250,410,2),n.font=`12px ${il}`,n.textBaseline="alphabetic",[["#7FD8A6","$ make deploy"],["#B9BBC6","build  ok   312 tests passed"],["#B9BBC6","canary 1%  p99 41ms  errors 0"],["#F2C230","promote? y"],["#7FD8A6","$ _"]].forEach(([a,l],c)=>{n.fillStyle=a,n.fillText(l,12,272+c*17)}),n.fillStyle="#23242C",n.fillRect(410,22,t-410,e-22),n.fillStyle="#B9BBC6",n.font=`11px ${il}`,["latency","throughput","errors","queue"].forEach((a,l)=>{const c=44+l*80;n.fillStyle="#B9BBC6",n.fillText(a.toUpperCase(),424,c),n.fillStyle="#2E2F39",n.fillRect(424,c+8,t-440,50),n.strokeStyle=["#82AAFF","#C3E88D","#F78C6C","#C792EA"][l],n.lineWidth=2,n.beginPath();for(let u=0;u<=20;u++){const h=424+u*(t-440)/20,f=c+50-6-i()*32;u?n.lineTo(h,f):n.moveTo(h,f)}n.stroke()})})}function W_(){return Ue(128,272,(n,t,e)=>{n.fillStyle="#0E0E11",n.fillRect(0,0,t,e),n.fillStyle="#EDEAE4",n.fillRect(10,8,16,4),n.fillStyle="#2C2C33",n.beginPath(),n.arc(18,28,7,0,Math.PI*2),n.fill(),n.fillStyle="#EDEAE4",n.fillRect(30,24,36,4),n.fillStyle="rgba(237,234,228,.08)",n.fillRect(0,42,t,1);for(const[i,r]of[[52,58],[74,88]])n.fillStyle="#26262D",Gn(n,8,i,r,18,8),n.fill();n.fillStyle="rgba(237,234,228,.08)",n.fillRect(0,e-62,t,1);for(let i=0;i<2;i++)for(let r=0;r<2;r++)n.fillStyle="rgba(237,234,228,.1)",Gn(n,8+r*58,e-54+i*24,54,19,6),n.fill()})}function X_(){return Ue(960,540,(n,t,e)=>{const i=n.createLinearGradient(0,0,t*.4,e);i.addColorStop(0,"#6FC1E8"),i.addColorStop(.5,"#2F7FC8"),i.addColorStop(1,"#1C4F9A"),n.fillStyle=i,n.fillRect(0,0,t,e);const r=t*.6,s=t*.98,o=t*.8,a=e*.7,l=e*1.02;n.fillStyle="#E04A2A",n.beginPath(),n.moveTo(r,l),n.lineTo(o,a),n.lineTo(o,l),n.fill(),n.fillStyle="#B83A22",n.beginPath(),n.moveTo(o,a),n.lineTo(s,l),n.lineTo(o,l),n.fill(),n.strokeStyle="#D9843A",n.lineWidth=9,n.lineCap="round",n.beginPath(),n.moveTo(r-10,l),n.lineTo(o,a-2),n.lineTo(s+10,l),n.stroke(),n.strokeStyle="#1A1A1A",n.lineWidth=4,n.beginPath(),n.moveTo(r-14,l),n.lineTo(o,a-8),n.lineTo(s+14,l),n.stroke();const c=o+10,u=a-6;n.fillStyle="#FBFAF4",n.strokeStyle="#1A1A1A",n.lineWidth=5,n.lineJoin="round",n.beginPath(),n.ellipse(c,u-58,44,62,0,0,Math.PI*2),n.fill(),n.stroke(),n.beginPath(),n.ellipse(c+46,u-10,26,14,0,0,Math.PI*2),n.fill(),n.stroke(),n.beginPath(),n.ellipse(c-26,u-4,20,10,0,0,Math.PI*2),n.fill(),n.stroke(),n.beginPath(),n.ellipse(c-2,u-136,40,36,-.25,0,Math.PI*2),n.fill(),n.stroke(),n.beginPath(),n.ellipse(c-54,u-170,52,24,-.72,0,Math.PI*2),n.fill(),n.stroke(),n.beginPath(),n.ellipse(c-80,u-194,14,10,-.7,0,Math.PI*2),n.fillStyle="#1A1A1A",n.fill(),n.beginPath(),n.ellipse(c-44,u-152,22,7,-.72,0,Math.PI*2),n.fill(),n.beginPath(),n.ellipse(c+30,u-120,16,36,.35,0,Math.PI*2),n.fill(),n.beginPath(),n.arc(c-22,u-150,4,0,Math.PI*2),n.fill(),n.strokeStyle="#1A1A1A",n.lineWidth=4,n.beginPath(),n.moveTo(c-60,u-194),n.lineTo(c-70,u-206),n.stroke();const h=r+54,f=l-46;n.fillStyle="#F6D13A",n.strokeStyle="#1A1A1A",n.lineWidth=4,n.beginPath(),n.ellipse(h,f-16,20,18,0,0,Math.PI*2),n.fill(),n.stroke(),n.beginPath(),n.ellipse(h+8,f-44,16,15,0,0,Math.PI*2),n.fill(),n.stroke();for(const[D,y]of[[-6,-62],[2,-66],[10,-64],[16,-60]])n.beginPath(),n.moveTo(h+8,f-56),n.lineTo(h+D,f+y),n.stroke();n.beginPath(),n.moveTo(h+20,f-46),n.lineTo(h+34,f-50),n.lineTo(h+22,f-40),n.closePath(),n.fillStyle="#F3A33B",n.fill(),n.stroke(),n.fillStyle="#1A1A1A",n.beginPath(),n.arc(h+12,f-48,2.5,0,Math.PI*2),n.fill(),n.strokeStyle="#F3A33B",n.lineWidth=3,n.beginPath(),n.moveTo(h-6,f+2),n.lineTo(h-6,f+14),n.moveTo(h+6,f+2),n.lineTo(h+6,f+14),n.stroke();const p=t*.09,g=e*.09,_=t*.46,m=e*.46;n.fillStyle="#FBFAF4",n.strokeStyle="#1A1A1A",n.lineWidth=5;const d=14,T=_/2,E=m/2,x=p+T,P=g+E;n.beginPath(),n.moveTo(x+T,P);for(let D=1;D<=d;D++){const y=D/d*Math.PI*2,M=y-Math.PI/d;n.quadraticCurveTo(x+Math.cos(M)*(T+16),P+Math.sin(M)*(E+14),x+Math.cos(y)*T,P+Math.sin(y)*E)}n.closePath(),n.fill(),n.stroke();for(let D=0;D<3;D++){const y=16-D*4,M=p+_*.78+D*46,C=g+m+22+D*40;n.beginPath(),n.arc(M,C,y,0,Math.PI*2),n.fill(),n.stroke()}n.fillStyle="#1A1A1A",n.textAlign="center",n.textBaseline="middle",n.font=`bold 46px ${il}`,["KEEP LOOKING","UP.. THAT'S THE","SECRET OF","LIFE..."].forEach((D,y)=>n.fillText(D,p+_/2,g+m*.22+y*52));const L=n.createRadialGradient(t/2,e/2,e*.3,t/2,e/2,t*.75);L.addColorStop(0,"rgba(0,0,0,0)"),L.addColorStop(1,"rgba(0,0,0,.18)"),n.fillStyle=L,n.fillRect(0,0,t,e)},{anisotropy:16})}const Yc=[["#D8A090","#B86E5C"],["#8FA7C2","#4F6A8A"],["#C9C3B6","#8E8679"],["#E0B452","#B0802A"],["#7E9C8A","#4E6E5C"],["#B98B5E","#80592F"],["#9C8AB8","#64527F"],["#D9C9A8","#A48F6C"],["#D96A5A","#9C3B2E"],["#5F86A8","#2F4F6B"],["#C8302F","#7A1D1A"],["#2E3A5E","#1A2238"]];function q_(n){return Ue(128,160,(t,e,i)=>{const[r,s]=Yc[n%Yc.length],o=ds(n+40);t.fillStyle="#FAF8F2",t.fillRect(0,0,e,i);const a=t.createLinearGradient(0,0,0,i);if(a.addColorStop(0,r),a.addColorStop(1,s),t.fillStyle=a,t.fillRect(6,6,e-12,i-12),n%3===0)t.fillStyle=s,t.beginPath(),t.ellipse(e/2,i*.42,e*.16,i*.14,0,0,Math.PI*2),t.fill(),t.fillRect(e*.3,i*.55,e*.4,i*.4);else if(n%3===1)t.fillStyle="rgba(255,255,255,.55)",t.fillRect(6,i*.5,e-12,4),t.fillStyle=s,t.beginPath(),t.arc(e*.3+o()*e*.4,i*.35,12,0,Math.PI*2),t.fill();else{t.fillStyle="rgba(0,0,0,.25)";for(let l=0;l<4;l++)t.fillRect(10+l*28,i*.3+l%2*30,18,i*.5)}})}function Zc(n=!1){return Ue(256,160,(t,e,i)=>{const r=t.createLinearGradient(0,0,0,i);n?(r.addColorStop(0,"#F6F4F0"),r.addColorStop(1,"#E9E6E0")):(r.addColorStop(0,"#FFE2AE"),r.addColorStop(1,"#FFB764")),t.fillStyle=r,t.fillRect(0,0,e,i),t.strokeStyle=n?"#FDFCFA":"#FFF4DE",t.lineWidth=8,Gn(t,e*.08,i*.12,e*.84,i*.76,22),t.stroke(),t.strokeStyle=n?"#B9B6B0":"#7A3C1C",t.lineWidth=8,t.lineJoin="round",t.lineCap="round",t.beginPath(),t.moveTo(e*.2,i*.58),t.lineTo(e*.32,i*.4),t.lineTo(e*.42,i*.62),t.lineTo(e*.52,i*.38),t.lineTo(e*.62,i*.62),t.lineTo(e*.72,i*.42),t.lineTo(e*.8,i*.56),t.stroke()})}function Y_(){return Ue(512,512,(n,t,e)=>{n.clearRect(0,0,t,e);const i=t/2,r=e/2,s=t/2-4;for(let a=s,l=0;a>0;a-=14,l++)n.beginPath(),n.arc(i,r,a,0,Math.PI*2),n.fillStyle=l%2?"#C9B28C":"#B89D74",n.fill();const o=ds(23);n.strokeStyle="rgba(80,60,30,.18)",n.lineWidth=1.5;for(let a=0;a<2400;a++){const l=o()*Math.PI*2,c=o()*(s-6),u=i+Math.cos(l)*c,h=r+Math.sin(l)*c;n.beginPath(),n.moveTo(u,h),n.lineTo(u+Math.cos(l+1.57)*5,h+Math.sin(l+1.57)*5),n.stroke()}n.strokeStyle="rgba(255,255,255,.25)",n.lineWidth=2;for(let a=s-7;a>0;a-=28)n.beginPath(),n.arc(i,r,a,0,Math.PI*2),n.stroke()},{anisotropy:16})}function Z_(){const n=(1+Math.sqrt(5))/2,t=[];for(const a of[-1,1])for(const l of[-1,1])t.push([0,a,l*n],[a,l*n,0],[l*n,0,a]);const e=a=>{const l=Math.hypot(...a);return a.map(c=>c/l)},i=(a,l)=>Math.hypot(a[0]-l[0],a[1]-l[1],a[2]-l[2]),r=t.map(a=>({v:e(a),w:1/(20.07*Math.PI/180)}));for(let a=0;a<12;a++)for(let l=a+1;l<12;l++)for(let c=l+1;c<12;c++)Math.abs(i(t[a],t[l])-2)<1e-6&&Math.abs(i(t[l],t[c])-2)<1e-6&&Math.abs(i(t[a],t[c])-2)<1e-6&&r.push({v:e([t[a][0]+t[l][0]+t[c][0],t[a][1]+t[l][1]+t[c][1],t[a][2]+t[l][2]+t[c][2]]),w:1/(23.8*Math.PI/180)});return Ue(512,256,(a,l,c)=>{const u=a.createImageData(l,c),h=u.data;for(let f=0;f<c;f++){const p=Math.PI/2-(f+.5)/c*Math.PI,g=Math.cos(p),_=Math.sin(p);for(let m=0;m<l;m++){const d=(m+.5)/l*2*Math.PI-Math.PI,T=g*Math.cos(d),E=_,x=g*Math.sin(d);let P=1e9,R=1e9,L=!1;for(const U of r){const O=Math.min(1,Math.max(-1,T*U.v[0]+E*U.v[1]+x*U.v[2])),k=Math.acos(O)*U.w;k<P?(R=P,P=k,L=U.w>2.6):k<R&&(R=k)}const D=Math.max(0,1-(R-P)/.07),y=L?[28,28,34]:[246,244,238],M=L?[12,12,16]:[150,146,136],C=(f*l+m)*4;h[C]=y[0]+(M[0]-y[0])*D,h[C+1]=y[1]+(M[1]-y[1])*D,h[C+2]=y[2]+(M[2]-y[2])*D,h[C+3]=255}}a.putImageData(u,0,0)},{q:1,anisotropy:16})}function J_(){return Ue(128,512,(n,t,e)=>{const i=n.createLinearGradient(0,0,0,e);i.addColorStop(0,"#F3E6C8"),i.addColorStop(.75,"#E6D7B4"),i.addColorStop(1,"#CDBD98"),n.fillStyle=i,n.fillRect(0,0,t,e),n.fillStyle="#B9A98A",n.fillRect(0,e-26,t,6),n.fillStyle="#D9CDB3",n.fillRect(0,e-20,t,20),n.fillStyle="rgba(255,255,255,.35)",n.fillRect(t*.3,e*.1,t*.25,e*.5)})}function $_(){return Ue(780,540,(n,t,e)=>{n.fillStyle="#F7F1E4",n.fillRect(0,0,t,e),n.fillStyle="#E6DDCB",n.fillRect(t/2-3,0,6,e),n.fillStyle="#E3D9C6";for(let s=70;s<e-30;s+=26)n.fillRect(30,s,t/2-60,2),n.fillRect(t/2+30,s,t/2-60,2);n.fillStyle="#FBF8F1",n.fillRect(48,52,150,186),n.fillStyle="#B98B6E",n.fillRect(58,62,130,150),n.fillStyle="#7A5A48",n.fillRect(98,92,50,56),n.fillRect(84,150,78,62),n.fillStyle="rgba(236,226,196,.85)",n.fillRect(98,42,52,20),n.font="600 30px Inter, sans-serif",n.fillStyle="#2A2A30",n.fillText("About",222,92);const i=ds(77),r=(s,o,a,l)=>{n.fillStyle="#4A4A58";for(let c=a;c<l;c+=26){let u=s;for(;u<o-30;){const h=14+i()*46;n.fillRect(u,c-9,Math.min(h,o-u),4),u+=h+8}}};r(222,t/2-40,122,240),r(48,t/2-40,278,e-40),n.font="600 30px Inter, sans-serif",n.fillStyle="#2A2A30",n.fillText("Accolades",t/2+40,92),r(t/2+40,t-48,122,e-40)})}const xe={L:44,H:32,SLAB:5,CENTRE:new w(22,10,22)},Qu="#EFE7DB",Ys=6.6,Jc={x0:6,x1:12,y0:6.5,y1:26,z:44},$c={battle:{rect:[0,22,0,17]},rack:{rect:[22,44,0,17]},door:{rect:[0,14,17,44]},bed:{rect:[14,44,17,44]}},th=[{section:"about",piece:"battle",at:[3.2,8.75,3],side:"bottom",via:[8.5,21,9.5],fov:36},{section:"projects",piece:"battle",at:[1.2,10.3,7.5],side:"left",via:[11,18.5,11],fov:36},{section:"work",piece:"battle",at:[7.75,10.9,1.75],side:"top",via:[9,18.5,11],fov:36},{section:"skills",piece:"battle",at:[13.5,11.8,3.6],side:"right",via:[13.5,20,9.4],fov:52},{section:"contact",piece:"bed",at:[18.4,7.05,32.6],side:"right",via:[22,20,37],fov:36}],ps={},Nt=(n,t,e)=>new w(n,t,e),wl=n=>{let t=n*9301+49297;return()=>(t=(t*9301+49297)%233280,t/233280)};let F=null;function K_(n){return n.weave.repeat.set(3,2),{wall:Et(Qu),slab:Et("#D6CCBC"),slabBottom:Et("#C2B6A3"),base:Et("#E3DBCD"),baseLip:Et("#F2ECE0"),black:Et("#454552"),deskBlack:Et("#4A4A58"),darkm:Et("#6E6E7A"),grey:Et("#B7B5B0"),silver:Et("#CDCFD4"),white:Et("#F3F0E8"),cream:Et("#ECE4D3"),bedframe:Et("#9E7E68"),shelfWood:Et("#D6B993"),sheet:Et("#F4E8E1"),blanket:Et("#AEB3C1"),pillow:Et("#FAF7F1"),leather:Et("#6E4D47"),leatherHi:Et("#846259"),mesh:Et("#525262"),metal:Et("#9A9CA6"),chrome:Et("#C4C7CF"),skin:Et("#D8B08C"),skinShade:Et("#C9A07C"),hair:Et("#3A2B22"),beard:Et("#3E2E25",{side:je}),eyeWhite:Et("#F3EFE7"),iris:Et("#3B2719"),lip:Et("#9A5A58"),rim:Et("#8D9096",{transparent:!0,opacity:.82}),lens:Et("#E6EEF5",{transparent:!0,opacity:.22,side:je}),jersey:Et("#F4F1EA"),maroon:Et("#9A4652"),jeans:Et("#5C6A8C"),psWhite:Et("#F2F0EA"),psBlack:Et("#3C3C48"),maple:Et("#E0C494"),fretboard:Et("#6E5240"),guitar:Et("#34343F"),pickguard:Et("#F0EEE8"),terracotta:Et("#D29C78"),green:Et("#8DB07E"),frameNavy:Et("#4C5A7A"),doorFrame:Et("#ECE3CF"),door:Et("#F1EADB"),corridorFloor:Et("#DCD1BA"),shadeFabric:Ki(Et("#F6ECDB"),"#FFB45A",1.6),bulb:Ki(Et("#F4F1EA"),"#FFE2A8",3,{opacity:.85}),candle:Et("#F4F2EC"),flame:Ki(Et("#FFD27A"),"#FFB040",3,{opacity:0}),weave:Et("#FFFFFF",{map:n.weave}),rubik:["#E07A66","#F2A65A","#F4F1EA","#F0D070","#6C8BC8","#7FB58A"].map(t=>Et(t)),shirt:{grey:Et("#A9A9B0"),navy:Et("#4F5D80"),red:Et("#C45B57"),hoodie:Et("#575762"),spain:Et("#F3F1EA")},key:Et("#FFFFFF"),book:Et("#FFFFFF")}}function j_(n,[t,e,i,r],s){const o=t===0?-2:t,a=i===0?-2:i,l=s.tiles.clone();l.repeat.set((e-o)/Ys,(r-a)/Ys),l.offset.set(o/Ys,-r/Ys),l.needsUpdate=!0;const c=Et("#FFFFFF",{map:l});rt(n,o,e,a,r,-5,0,[F.slab,F.slab,c,F.slabBottom,F.slab,F.slab],{sharp:!0})}function eo(n,t,e,i){t==="z"?(rt(n,0,.3,e,i,0,1,F.base,{sharp:!0}),rt(n,0,.34,e,i,1,1.15,F.baseLip,{sharp:!0,cast:!1})):(rt(n,e,i,0,.3,0,1,F.base,{sharp:!0}),rt(n,e,i,0,.34,1,1.15,F.baseLip,{sharp:!0,cast:!1}))}function Kc(n,t,e,i,{doorway:r=!1}={}){const s=t===0?-2:t,o=(p,g,_,m)=>rt(n,-2,0,p,g,_,m,F.wall,{sharp:!0});if(!r){o(s,e,0,xe.H),eo(n,"z",Math.max(0,s),e);return}const a=23.6,l=32.6,c=23,u=.8;o(s,a-u,0,xe.H),o(l+u,e,0,xe.H),o(a-u,l+u,c+u,xe.H),eo(n,"z",s,a-u),eo(n,"z",l+u,e),rt(n,-2,.25,a-u,a,0,c+u,F.doorFrame,{sharp:!0}),rt(n,-2,.25,l,l+u,0,c+u,F.doorFrame,{sharp:!0}),rt(n,-2,.25,a,l,c,c+u,F.doorFrame,{sharp:!0});const h=kn("#FFFFFF",{map:i.corridor});Se(h,"color",new zt("#FFFFFF"),new zt("#5E4E3E")),on(n,"+x",-1.96,a,l,0,c,h),rt(n,-2,.1,a,l,-.3,.05,F.corridorFloor,{sharp:!0,cast:!1}),rt(n,-.1,.1,a,l,.05,.14,F.metal,{sharp:!0,cast:!1});const f=hs(n,-1.1,0,l-.15,"y",cs.degToRad(78));rt(f,-.2,.2,-8.7,0,.1,c-.25,F.door,{r:.05});for(const[p,g]of[[c*.56,c-1.7],[1.5,c*.47]])rt(f,-.28,-.2,-7.5,-1.2,p,g,F.doorFrame,{sharp:!0,cast:!1});jr(f,-1.3,-.3,10.8,-1.1,.1,F.chrome,{cast:!1}),ce(f,-.45,-1.1,.22,10.5,10.85,F.chrome,{cast:!1}).rotation.z=Math.PI/2,rt(n,0,.35,l+1.6,l+3,11.6,13,F.white,{r:.06,cast:!1}),rt(n,.35,.42,l+1.95,l+2.65,12,12.6,F.grey,{sharp:!0,cast:!1})}function jc(n,t,e){const i=t===0?0:t;rt(n,i,e,-2,0,0,xe.H,F.wall,{sharp:!0}),eo(n,"x",i,e)}function eh(n,{x:t,y:e,z:i,yaw:r=0,w:s,d:o,lid:a,body:l,screen:c,deck:u=null,tilt:h=20,r:f=.1,section:p=null}){const g=new Re;g.position.set(t,e,i),g.rotation.y=r,n.add(g),rt(g,-s/2,s/2,0,o,0,.22,l,{r:f}),u?on(g,"+y",.221,-s/2+.12,s/2-.12,.08,o-.08,kn("#FFFFFF",{map:u})):(on(g,"+y",.221,-s/2+.3,s/2-.3,.2,o*.6,kn("#1E1E22")),on(g,"+y",.221,-s*.22,s*.22,o*.66,o-.15,kn("#3A3A40")));const _=hs(g,0,.22,.06,"x",-cs.degToRad(h));rt(_,-s/2,s/2,-.16,0,0,a,l,{r:f});const m=on(_,"+z",.006,-s/2+.14,s/2-.14,.14,a-.14,kn("#FFFFFF",{map:c}));return p&&(ps[p]=m),ni(_,0,a*.5,.9,"#FFE2C0",3.2,6),g}function Q_(n,t){const[e,i,r]=[.8,14.2,8.5];rt(n,0,5.4,e,i,r-.45,r,F.deskBlack,{r:.12});for(const s of[2,12.4])rt(n,.3,4.7,s,s+.45,r-.85,r-.45,F.black,{r:.04}),rt(n,.3,.75,s,s+.45,r-5.4,r-.45,F.black,{r:.04}),ye(n,Nt(.75,r-5.2,s+.22),Nt(4.5,r-.9,s+.22),.16,F.black);ln(n,.4,5.4,e,i,.18),eh(n,{x:1.1,y:r,z:7.5,yaw:Math.PI/2,w:3.45,d:2.45,lid:2.25,body:F.silver,screen:t.mac,deck:t.deck,r:.08,section:"projects"}),tv(n,t,r),sr(n,1.3,3.7,4.95,r+.09,.09,F.black,{cast:!1}),ce(n,4.3,11.3,.48,r,r+1,F.white),Qr(n,4.3,r+.55,11.95,.38,.08,F.white,{axis:"x",seg:20,cast:!1})}function tv(n,t,e){const i=new Re;i.position.set(3.2,e,3),i.rotation.y=Math.PI/2,n.add(i);const r=3.9,s=2.7;rt(i,-r/2-.12,r/2+.12,-s/2-.12,s/2+.12,0,.06,Et("#4C5A7A"),{r:.03}),rt(i,-r/2,-.02,-s/2,s/2,.06,.2,F.pillow,{r:.03,cast:!1}),rt(i,.02,r/2,-s/2,s/2,.06,.2,F.pillow,{r:.03,cast:!1}),ps.about=on(i,"+y",.205,-r/2,r/2,-s/2,s/2,kn("#FFFFFF",{map:t.journal})),ln(n,1.6,4.8,.9,5.1,.16,e+.01)}function ev(n,t){const[e,i,r,s]=[2.6,12.6,12.8,19.5];rt(n,0,.45,e,i,r,s,F.frameNavy,{r:.03}),on(n,"+x",.46,e+.35,i-.35,r+.35,s-.35,Et("#FFFFFF",{map:t.snoopy}))}function nv(n,t){const[e,i,r]=[10.7,13.7,8.5];rt(n,.12,.62,e,i,r,r+1.9,F.black,{r:.05}),rt(n,.62,.72,e+.15,i-.15,r+.15,r+1.75,F.white,{sharp:!0,cast:!1});const s=Et("#FFFFFF",{map:t.neonOff,emissiveMap:t.neon,emissive:"#FFFFFF",emissiveIntensity:0});Ki(s,"#FFFFFF",1.3,{dark:"#17130F"}),on(n,"+x",.73,e+.2,i-.2,r+.2,r+1.7,s),ni(n,1.4,r+1,12.2,"#FFC46A",12,11),fs(n,.9,r+.95,12.2,2.6,"#FFD48A",.22)}function iv(n){const e=[[.42,.11],[.58,.03],[.76,.1],[.74,.24],[.56,.28],[.34,.3],[.16,.4],[.22,.52],[.5,.58],[.78,.64],[.84,.76],[.66,.86],[.4,.9],[.2,.97],[.08,1]].map(([a,l])=>Nt(.8+a*6,24.5-l*12,.55)),i=a=>{const l=Et("#F4F2EE");return Ki(l,a,1,{dark:"#0A0702",opacity:.8})},r=i("#FFAE1E"),s=i("#FFE59A"),{curve:o}=ho(n,e,.17,r,{seg:260,radial:12,cast:!1});ho(n,e.map(a=>Nt(a.x+.03,a.y+.02,a.z+.1)),.075,s,{seg:260,radial:8,cast:!1});for(const a of[0,1]){const l=o.getPoint(a);ve(n,l.x,l.y,l.z,.17,r,{cast:!1,seg:12})}for(const a of[.07,.3,.52,.74,.95]){const l=o.getPoint(a);sr(n,0,l.z,l.x,l.y,.06,F.metal,{cast:!1,seg:8})}for(const a of[.12,.4,.65,.9]){const l=o.getPoint(a);ni(n,l.x,l.y,1.7,"#FFB236",15,22)}for(const a of[.08,.26,.44,.62,.8,.96]){const l=o.getPoint(a);fs(n,l.x,l.y,l.z+.4,2.4,"#FFB030",.14)}}function rv(n,t){const[e,i,r,s,o]=[5.2,21.2,.4,8.2,8.5],a=Et("#3E3E4A");rt(n,e,i,r,s,o-.5,o,a,{r:.14}),rt(n,e+.5,i-.5,r+.5,s-.5,o-.9,o-.5,F.black,{r:.06});for(const c of[e+.6,i-1.3])rt(n,c,c+.7,3.95,4.65,.4,o-.9,F.black,{r:.06}),rt(n,c-.15,c+.85,r+.7,s-.7,0,.55,F.black,{r:.12}),rt(n,c-.05,c+.75,r+.9,s-.9,o-1.1,o-.9,F.black,{r:.05});rt(n,e+1.3,i-1.3,r+1,r+1.5,1.9,2.4,F.black,{r:.06}),ln(n,e,i,r,s,.2),rt(n,5.9,9.6,1.4,4.6,o,o+1,F.darkm,{r:.1}),eh(n,{x:7.75,y:o+1,z:2,w:3.5,d:2.4,lid:2.3,body:F.darkm,screen:t.code,section:"work"});const l=13.5;rt(n,l-1.8,l+1.8,3.4,5.6,o,o+.25,F.black,{r:.1}),rt(n,l-.45,l+.45,3.9,4.6,o+.25,o+2,F.black,{r:.06}),rt(n,l-3.65,l+3.65,3.2,3.55,o+1.2,o+5.45,F.black,{r:.08}),ps.skills=on(n,"+z",3.56,l-3.45,l+3.45,o+1.4,o+5.25,kn("#FFFFFF",{map:t.dev})),rt(n,l-2.2,l+2.2,2.9,3.2,o+2,o+4.6,F.darkm,{r:.1}),ni(n,l,o+3.3,5.6,"#FFDDB0",9,13),lv(n,10.6,15.5,5.45,7,o),rt(n,16.4,17.5,5.6,6.6,o,o+.4,F.grey,{r:.22}),sr(n,3.6,5.5,17,o+.08,.05,F.black,{cast:!1}),sv(n,19.4,2.7,o),av(n,19.3,5.6,o),rt(n,8.2,11.4,1,1.9,0,.5,F.white,{r:.08});for(const c of[8.8,9.8,10.8])rt(n,c-.25,c+.25,1.1,1.75,.5,.56,F.darkm,{sharp:!0,cast:!1});ho(n,[Nt(11.3,.3,1.4),Nt(13,.35,1.3),Nt(15.5,1.2,1.2),Nt(17.4,4.5,1.1),Nt(18.6,o-.95,1.3)],.08,F.black,{seg:40,radial:6,cast:!1}),ho(n,[Nt(8.4,.3,1.5),Nt(6.2,.3,1.7),Nt(5.6,2,1.9),Nt(5.8,o-.95,2.6)],.08,F.black,{seg:30,radial:6,cast:!1})}function sv(n,t,e,i){ce(n,t,e,1.05,i,i+.12,F.psBlack,{seg:36}),rt(n,t-.38,t+.38,e-2.9/2+.1,e+2.9/2-.1,i+.12,i+4.3-.35,F.psBlack,{r:.08});for(const o of[-1,1]){const a=hs(n,t+o*.4,i+.12,e,"z",-o*.055);rt(a,o>0?0:-.17,o>0?.17:0,-2.9/2,2.9/2,0,4.3-.12,F.psWhite,{r:.1}),rt(a,o>0?-.02:-.15,o>0?.15:.02,-2.9/2+.3,2.9/2-.3,4.3-.12,4.3+.1,F.psWhite,{r:.08})}rt(n,t-.2,t+.2,e+2.9/2-.14,e+2.9/2-.02,i+1.2,i+1.45,F.darkm,{sharp:!0,cast:!1}),ln(n,t-1.1,t+1.1,e-1.1,e+1.1,.22,i+.01)}function ov(n,t,e,i,r,s,o){const a=kn("#E9E7E2");return Se(a,"color",new zt("#E9E7E2"),new zt("#FFE6C2")),rt(n,t,e,i,r,s,o,a,{sharp:!0,cast:!1})}function av(n,t,e,i){rt(n,t-1,t+1,e-.55,e+.55,i,i+.5,F.psWhite,{r:.22}),rt(n,t-.78,t+.78,e-.5,e+.45,i+.5,i+.56,F.psBlack,{r:.06,cast:!1}),rt(n,t-.34,t+.34,e-.42,e+.02,i+.56,i+.6,F.darkm,{r:.05,cast:!1});for(const r of[-1,1])ye(n,Nt(t+r*.72,i+.25,e+.2),Nt(t+r*.95,i+.22,e+1.15),.28,F.psWhite),ce(n,t+r*.42,e+.3,.13,i+.56,i+.8,F.psBlack,{seg:14,cast:!1});ov(n,t-.34,t+.34,e-.55,e-.4,i+.5,i+.62),ln(n,t-1.1,t+1.1,e-.7,e+1.3,.2,i+.01)}function lv(n,t,e,i,r,s){rt(n,t,e,i,r,s,s+.32,F.black,{r:.08});const o=14,a=5,l=(e-t-.3)/o,c=(r-i-.3)/a,u=ts(n,new Xe(l-.07,.14,c-.07),F.key,o*a);for(let h=0;h<a;h++)for(let f=0;f<o;f++){const p=h===a-1&&(f<3||f>9),g=h===a-1&&f>=4&&f<=9;if(g&&f>4)continue;const _=g?6:1;u.place(t+.15+(f+_/2)*l,s+.39,i+.15+(h+.5)*c,_,1,1,p||g?"#4A4A52":h===0?"#3A3A42":"#2C2C33")}u.done()}function cv(n){const r=new qr,s=[[0,0],[1.9,.3],[2.7,1.6],[2.6,3.2],[1.9,4.3],[2,5.3],[2.6,6.3],[2.2,7.3],[1.2,7],[.5,6.4],[-.5,6.4],[-1.3,7.2],[-2,8.2],[-2.5,7.6],[-2.6,6.2],[-2.1,4.6],[-2.7,3.3],[-2.8,1.8],[-2,.4]].map(([f,p])=>new ft(f*.6,p*.6));r.moveTo(0,0),r.splineThru(s.slice(1)),r.lineTo(0,0);const o=new te(new $r(r,{depth:.55,bevelEnabled:!0,bevelThickness:.08,bevelSize:.08,bevelSegments:3,curveSegments:24}),F.guitar);o.position.set(13.5,15.8,.45),o.castShadow=o.receiveShadow=!0,n.add(o);const a=new qr;[[.3,.9],[1.9,1.4],[2.1,3],[1.6,4.4],[.6,5.6],[-.4,5.4],[-.9,4],[-.9,2.4],[-.3,1.1]].forEach(([f,p],g)=>g?a.lineTo(f*.6,p*.6):a.moveTo(f*.6,p*.6));const l=new te(new $r(a,{depth:.06,bevelEnabled:!1}),F.pickguard);l.position.set(13.5,15.8,1.08),n.add(l);const c=1.08;for(const f of[15.8+1.9,15.8+2.75,15.8+3.6])rt(n,13.5-.35,13.5+.35,c,c+.18,f,f+.22,F.darkm,{r:.04});rt(n,13.5-.42,13.5+.42,c,c+.14,15.8+1.15,15.8+1.45,F.chrome,{r:.03});for(const f of[-.3,.3])ce(n,13.5+f*2.2,c+.1,.08,15.8+2.2,15.8+2.3,F.chrome,{cast:!1,seg:10}).rotation.x=Math.PI/2;rt(n,13.5-.3,13.5+.3,.65,.95,15.8+4.2,15.8+9.4,F.maple,{r:.08}),rt(n,13.5-.3,13.5+.3,.95,1.02,15.8+4.2,15.8+9.4,F.fretboard,{sharp:!0,cast:!1});const u=ts(n,new Xe(.6,.05,.05),F.chrome,20,{cast:!1});for(let f=0;f<20;f++)u.place(13.5,15.8+4.45+f*.26*(1-f*.012),1.03,1,1,1);u.done(),rt(n,13.5-.5,13.5+.5,.65,.95,15.8+9.4,15.8+11,F.guitar,{r:.1});for(let f=0;f<6;f++){const p=f-2.5;ce(n,13.5+(p<0?-.62:.62),.8,.07,15.8+9.7+f%3*.4,15.8+9.75+f%3*.4,F.chrome,{cast:!1,seg:8}).rotation.z=Math.PI/2}const h=ts(n,new Xe(.025,1,.025),F.chrome,6,{cast:!1});for(let f=0;f<6;f++)h.place(13.5-.25+f*.1,15.8+5.95,1.06,1,9.5,1);h.done(),rt(n,13.5-.3,13.5+.3,.2,.65,15.8+10.2,15.8+10.6,F.metal,{r:.06})}function uv(n){for(let tt=0;tt<5;tt++){const At=tt*Math.PI*2/5+.3,Tt=13.2+Math.cos(At)*2.9,X=12.4+Math.sin(At)*2.9;ye(n,Nt(13.2,.6,12.4),Nt(Tt,.5,X),.22,F.black),ve(n,Tt,.32,X,.32,F.darkm,{seg:14})}ce(n,13.2,12.4,.6,.3,1,F.black),ce(n,13.2,12.4,.32,1,4.2,F.chrome),rt(n,13.2-1.3,13.2+1.3,12.4-1,12.4+1,4.2,4.7,F.black,{r:.1}),rt(n,13.2-2.4,13.2+2.4,12.4-2.4,12.4+2.2,4.7,5.7,F.leather,{r:.45});for(const tt of[13.2-2.4,13.2+1.6])rt(n,tt,tt+.8,12.4-2.2,12.4+2,5.7,6.4,F.leather,{r:.3});const i=hs(n,13.2,5.2,12.4+2.3,"x",.1);rt(i,-2.3,2.3,0,1,0,9.4,F.leather,{r:.45}),rt(i,-1.4,1.4,-.06,.02,1.2,8.6,F.leatherHi,{r:.05,cast:!1});for(const tt of[-2.6,1.9])rt(i,tt,tt+.7,-.5,.6,5.6,9,F.leather,{r:.25});rt(i,-1.6,1.6,-.9,.05,8,9.2,F.leather,{r:.4}),rt(i,-1.7,1.7,-.7,.05,1.6,2.8,F.leather,{r:.35});for(const tt of[13.2-3.2,13.2+2.5])rt(n,tt+.15,tt+.55,12.4-.6,12.4+.4,5.2,7.4,F.black,{r:.08}),rt(n,tt,tt+.75,12.4-1.8,12.4+1,7.4,7.85,F.black,{r:.2});const r=new Re;r.position.set(13.2,0,12.4+.5),n.add(r),ve(r,0,6.55,.15,1,F.jeans,{scale:[2,.95,1.45],seg:28}),D_(r,[{y:6.45,w:2.08,d:1.5,z:.12},{y:7.3,w:1.98,d:1.34,z:.06},{y:8.5,w:1.9,d:1.26},{y:9.8,w:2.04,d:1.3},{y:11,w:2.3,d:1.38},{y:11.9,w:2.42,d:1.32},{y:12.45,w:1.95,d:1.1},{y:12.9,w:1.05,d:.86,z:-.04},{y:13.1,w:.8,d:.74,z:-.04}],F.jersey);const s=[2.28,12.05,.05];for(const tt of[-1,1])ve(r,tt*s[0],s[1],s[2],.68,F.jersey,{scale:[1,.95,.95],seg:22}),ve(r,tt*s[0],s[1],s[2],.7,F.maroon,{scale:[1,.95,.95],seg:22,thetaLength:.75,cast:!1});ce(r,0,-.04,.86,12.95,13.25,F.maroon,{rTop:.8}),ce(r,0,-.04,.74,12.5,13.75,F.skin);for(const tt of[-1,1]){const At=Nt(13.2+tt*1,6.5,13),Tt=Nt(13.2+tt*1.25,6.3,12.4-4.4),X=Nt(13.2+tt*1.3,1.05,12.4-4.1);ye(n,At,Tt,.9,F.jeans,{rb:.74}),ve(n,Tt.x,Tt.y,Tt.z,.76,F.jeans,{seg:18}),ye(n,Tt,X,.7,F.jeans,{rb:.5});const K=new Re;K.position.set(X.x,0,X.z),n.add(K),rt(K,-.62,.62,-2.25,.85,.3,1.1,F.white,{r:.34}),rt(K,-.64,.64,-2.3,.9,0,.32,F.darkm,{r:.12,cast:!1}),rt(K,-.3,.3,-1.6,-.1,1.1,1.17,F.maroon,{sharp:!0,cast:!1})}const o=3.85,a=3.2,l=[];for(const tt of[-1,1]){const At=new Re;n.add(At),ce(At,0,0,.6,0,o*.52,F.jersey,{rTop:.56}),ce(At,0,0,.58,o*.52-.18,o*.52+.04,F.maroon,{cast:!1}),ce(At,0,0,.55,o*.52,o,F.skin,{rTop:.48}),ve(At,0,o,0,.5,F.skin,{seg:18});const Tt=new Re;n.add(Tt),ce(Tt,0,0,.49,0,a,F.skin,{rTop:.4}),ve(Tt,0,a,0,.4,F.skin,{seg:16});const X=Nt(13.2+tt*1.15,9.4,7.9);ve(n,X.x-tt*.05,X.y-.12,X.z-.68,1,F.skin,{scale:[.5,.2,.62],seg:18});for(let K=0;K<4;K++){const vt=X.x-tt*.05+(K-1.5)*.25,Lt=Nt(vt,9.26,6.68),Ct=Nt(vt+(K-1.5)*.02,8.98,6.1);ye(n,Lt,Ct,.115,F.skin,{rb:.1})}ye(n,Nt(X.x-tt*.42,9.28,7.4),Nt(X.x-tt*.88,9.03,6.95),.13,F.skin,{rb:.11}),l.push({upper:At,fore:Tt,shoulder:Nt(tt*s[0],s[1],s[2]),wrist:X,pole:Nt(tt*.55,-1,.25).normalize()})}const c=new w,u=new w,h=new w,f=new w,p=new w;function g(){r.updateMatrix();for(const tt of l){c.copy(tt.shoulder).applyMatrix4(r.matrix),u.subVectors(tt.wrist,c);const At=Math.min(u.length(),o+a-.02);u.normalize();const Tt=es((o*o+At*At-a*a)/(2*o*At),-1,1),X=Math.sqrt(1-Tt*Tt);h.copy(tt.pole).addScaledVector(u,-tt.pole.dot(u)).normalize(),f.copy(c).addScaledVector(u,o*Tt).addScaledVector(h,o*X),tt.upper.position.copy(c),tt.upper.quaternion.setFromUnitVectors(Kr,p.subVectors(f,c).normalize()),p.subVectors(tt.wrist,f);const K=p.length();tt.fore.position.copy(f),tt.fore.quaternion.setFromUnitVectors(Kr,p.normalize()),tt.fore.scale.set(1,K/a,1)}}g();const _=new Re;_.position.set(13.2,13.6,12.4+.45),_.rotation.order="YXZ",n.add(_);const m=1.08,d=1.12,T=[1,1.14,1.05];ve(_,0,m,0,d,F.skin,{scale:T,seg:40});for(const tt of[-1,1])ve(_,tt*1.1,m-.02,-.02,.32,F.skin,{seg:14,scale:[.42,1,.78]});for(const tt of[-1,1]){ve(_,tt*.42,m+.1,-1,.15,F.eyeWhite,{seg:14,scale:[1,.8,.7]}),ve(_,tt*.42,m+.1,-1.1,.075,F.iris,{seg:12}),ye(_,Nt(tt*.18,m+.5,-1.06),Nt(tt*.74,m+.46,-.9),.07,F.hair,{rb:.05,cast:!1}),Qr(_,tt*.47,m+.09,-1.2,.33,.032,F.rim,{axis:"z",seg:40,cast:!1}).scale.set(1,.94,1);const Tt=new te(new vo(.31,32),F.lens);Tt.position.set(tt*.47,m+.09,-1.2),Tt.scale.set(1,.94,1),_.add(Tt),ye(_,Nt(tt*.8,m+.12,-1.17),Nt(tt*1.12,m+.16,-.2),.03,F.rim,{cast:!1})}jr(_,-.15,.15,m+.14,-1.22,.03,F.rim,{cast:!1}),ye(_,Nt(0,m+.12,-1.12),Nt(0,m-.2,-1.3),.1,F.skinShade,{rb:.14,cast:!1});const E=Math.PI*1.5,x=d+.045;ve(_,0,m,0,x,F.beard,{scale:T,seg:40,phiStart:E-.78,phiLength:1.56,thetaStart:2,thetaLength:.82,cast:!1});for(const tt of[-1,1])ve(_,0,m,0,x,F.beard,{scale:T,seg:24,phiStart:E+(tt>0?.62:-1.72),phiLength:1.1,thetaStart:1.72,thetaLength:1,cast:!1});for(const tt of[-1,1])ye(_,Nt(0,m-.3,-1.17),Nt(tt*.4,m-.42,-1.06),.09,F.beard,{rb:.07,cast:!1});ye(_,Nt(-.2,m-.46,-1.13),Nt(.2,m-.46,-1.13),.03,F.lip,{cast:!1});const P=Nt(0,m+.08,.08),R=.48,L=1.72,D=new Ti(d+.09,40,28,0,Math.PI*2,0,L);D.rotateX(R);const y=new te(D,F.hair);y.position.copy(P),y.scale.set(...T),y.castShadow=y.receiveShadow=!0,_.add(y);const M=new Du(new Ti(1,10,7),F.hair,120);M.castShadow=M.receiveShadow=!0,_.add(M);const C=wl(23),U=Nt(0,Math.cos(R),Math.sin(R)),O=Nt(0,.8,.6).normalize(),k=new re,V=new Wn,H=new Wn,nt=new w,G=new w,st=new w,gt=new w;let yt=0;for(let tt=0;tt<300&&yt<120;tt++){const At=1-(tt+.5)/300*2,Tt=Math.sqrt(1-At*At),X=tt*2.399963,K=Nt(Math.cos(X)*Tt,At,Math.sin(X)*Tt);if(K.angleTo(U)>L*.95||(G.set(K.x/T[0],K.y/T[1],K.z/T[2]).normalize(),st.subVectors(K,O),st.addScaledVector(G,-st.dot(G)),st.lengthSq()<1e-4))continue;st.normalize(),gt.crossVectors(st,G).normalize(),V.setFromRotationMatrix(k.makeBasis(gt,st,G)).multiply(H.setFromAxisAngle(new w(0,0,1),(C()-.5)*.9));const vt=Nt(K.x*T[0],K.y*T[1],K.z*T[2]).multiplyScalar(d+.1).add(P);M.setMatrixAt(yt++,k.compose(vt,V,nt.set(.17+C()*.08,.34+C()*.22,.12+C()*.06)))}M.count=yt,M.instanceMatrix.needsUpdate=!0;const kt=(tt,At)=>-1.176*Math.sqrt(Math.max(0,1-(tt/1.12)**2-(At/1.28)**2));for(const[tt,At,Tt]of[[-.62,.36,-.12],[-.38,.64,-.08],[-.14,.74,-.03],[.1,.5,.06],[.34,.66,.1],[.56,.4,.15]])ye(_,Nt(tt,m+.62,kt(tt,.62)+.04),Nt(tt+Tt,m+.62-At,kt(tt+Tt,.62-At)+.12),.11,F.hair,{rb:.07,cast:!1});for(const tt of[-1,1])for(const[At,Tt]of[[-.42,.6],[-.1,.7],[.2,.55]])ye(_,Nt(tt*1.02,m+.3,At),Nt(tt*1.2,m+.3-Tt,At+.02),.13,F.hair,{rb:.08,cast:!1});for(const[tt,At,Tt]of[[-.9,.9,.62],[-.62,1.15,.82],[-.32,1.35,.95],[0,1.45,1],[.3,1.35,.95],[.6,1.2,.82],[.88,.95,.62]])ye(_,Nt(tt,m-.45,Tt+.12),Nt(tt*1.05,m-.45-At,.88),.2,F.hair,{rb:.09});for(const[tt,At,Tt]of[[-.78,.62,.74],[-.42,.78,.96],[0,.85,1.04],[.42,.78,.96],[.78,.62,.74]])ye(_,Nt(tt,m-.22,Tt+.16),Nt(tt*1.05,m-.22-At,Tt+.06),.18,F.hair,{rb:.1,cast:!1});return ln(n,13.2-2.6,13.2+2.6,12.4-2.6,12.4+2.6,.16),{head:_,torso:r,solveArms:g,at:Nt(13.2,14.65,12.4+.45)}}function hv(n){for(const i of[16.5,21.5])rt(n,23,28,0,2.3,i,i+.5,F.black,{r:.06});const[t,e]=[23.5,.9];for(let i=0;i<3;i++)for(let r=0;r<3;r++)for(let s=0;s<3;s++){if(i&&r&&s&&i<2&&r<2&&s<2)continue;const o=[F.rubik[(i+r)%6],F.rubik[(r+s+2)%6],F.rubik[(i*2+s)%6],F.rubik[(i+s+3)%6],F.rubik[(i+r*2+1)%6],F.rubik[(r+4)%6]];rt(n,t+i*e/3,t+(i+1)*e/3-.03,.6+s*e/3,.6+(s+1)*e/3-.03,17+r*e/3,17+(r+1)*e/3-.03,o,{sharp:!0,cast:!1})}ce(n,26.6,1.2,.5,17,18.1,F.terracotta,{rTop:.58}),ce(n,26.6,1.2,.3,18.1,19.4,F.green);for(const[i,r,s]of[[0,1.5,0],[.45,1,.2],[-.4,1.1,-.1],[.1,.7,.45]])ve(n,26.6+i,18.1+r,1.2+s,.36,F.green,{seg:12,scale:[1.3,.8,1]});rt(n,25,25.6,.5,1.7,17,18.6,F.white,{r:.04}),ce(n,24,1.1,.45,22,24.2,F.candle),ve(n,24,24.45,1.1,.12,F.flame,{cast:!1,seg:8}),ni(n,24,24.7,1.3,"#FFA040",3.5,9),fs(n,24,24.5,1.4,1.2,"#FFB060",.12),ce(n,26.4,1.1,.7,22,23.7,F.white,{rTop:.62}),rt(n,25,25.7,1.3,1.6,22,23.4,F.darkm,{r:.04})}function fv(n){const[t,e,i,r,s]=[23,28.6,.8,6.2,13.2];rt(n,t,e,i,i+.5,0,s,F.shelfWood,{r:.04}),rt(n,t,t+.45,i,r,0,s,F.shelfWood,{r:.04}),rt(n,e-.45,e,i,r,0,s,F.shelfWood,{r:.04});for(const[u,h]of[[0,.6],[4.4,4.9],[8.8,9.3],[s-.5,s]])rt(n,t,e,i,r,u,h,F.shelfWood,{r:.04});ln(n,t,e,i,r,.26);const o=ts(n,new Xe(1,1,1),F.book,14),a=wl(5),l=["#C8302F","#2E3A5E","#E0B452","#4F79B8","#7E9C8A","#F2F0EA","#9C8AB8","#D96A5A","#2A2A30"];let c=t+.7;for(let u=0;u<14&&c<e-1;u++){const h=.3+a()*.35,f=2.3+a()*1.1,p=1.7+a()*.4;o.place(c+h/2,9.3+f/2,r-.5-p/2,h,f,p,l[Math.floor(a()*l.length)]),c+=h+.04}o.done(),rt(n,t+.8,e-1.6,i+1,r-.9,4.9,7.6,F.grey,{r:.08}),rt(n,t+.9,e-.9,i+1,r-.8,.6,3.6,F.weave,{r:.25}),rt(n,t+.5,t+3.1,i+.7,r-1.4,s,s+2.4,F.white,{r:.08})}function dv(n,t){const e=new qr;if([[-2.6,0],[2.6,0],[2.6,8.6],[4.6,9.6],[4.1,12.4],[2.8,11.9],[2.8,13.9],[.9,14.7],[0,14.1],[-.9,14.7],[-2.8,13.9],[-2.8,11.9],[-4.1,12.4],[-4.6,9.6],[-2.6,8.6]].forEach(([r,s],o)=>o?e.lineTo(r*t,s*t):e.moveTo(r*t,s*t)),e.closePath(),n){const r=new qr;return r.absellipse(0,14.6*t,2.4*t,1.6*t,0,Math.PI*2,!1,0),[e,r]}return[e]}function pv(n){const[t,e,i,r]=[30.6,40.6,5.6,17.8];for(const a of[t,e-.5]){rt(n,a,a+.5,i-1.9,i+1.9,0,.45,F.metal,{r:.1}),ce(n,a+.25,i,.2,.45,r-.2,F.metal);for(const l of[-1.7,1.7])ve(n,a+.25,.2,i+l,.2,F.black,{seg:10})}jr(n,t,e,r,i,.2,F.metal),jr(n,t+.25,e-.25,1.6,i,.12,F.metal,{cast:!1});const s=["grey","navy","red","hoodie","spain"],o=.55;s.forEach((a,l)=>{const c=31.9+l*1.9,u=new $r(dv(a==="hoodie",o),{depth:.3,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:3}),h=new te(u,F.shirt[a]);h.rotation.y=Math.PI/2,h.position.set(c,r-8.5,i),h.castShadow=h.receiveShadow=!0,n.add(h);const f=r-8.5+14.7*o;for(const p of[-2.4,2.4])ye(n,Nt(c+.15,f-.1,i+p),Nt(c+.15,r-.5,i),.06,F.metal,{cast:!1});if(sr(n,i-2.4,i+2.4,c+.15,f-.1,.06,F.metal,{cast:!1}),Qr(n,c+.15,r-.1,i,.32,.05,F.metal,{axis:"x",arc:Math.PI*1.5,rotZ:Math.PI*.75,cast:!1}),a==="spain"){rt(n,c+.3,c+.42,i-.55,i+.55,f-.9,f-.3,F.maroon,{sharp:!0,cast:!1});for(const p of[-1,1])rt(n,c+.3,c+.42,i+p*2.25-.35,i+p*2.25+.35,f-2.8,f-1.3,F.maroon,{sharp:!0,cast:!1})}})}function mv(n,t){ve(n,29.5,1.22,11.5,1.22,Et("#FFFFFF",{map:t.ball}),{seg:56}).rotation.set(.4,.6,.2),ln(n,28.4,30.6,10.4,12.6,.3)}function Qc(n,t,e,i,r){const s=wl(r);let o=0;for(let a=0;a<4;a++)for(let l=0;l<3;l++,o++){const c=t+(l-1)*1.55+(s()-.5)*.3,u=e+(1.5-a)*1.95+(s()-.5)*.3,h=on(n,"+x",.06+o%3*.004,c-.55,c+.55,u-.72,u+.72,Et("#FFFFFF",{map:i.photos[(o+r)%12]}));h.rotation.x=(s()-.5)*.14}}function gv(n){const i=Ki(Et("#F4F1EC"),"#FF4A22",2.2,{dark:"#5A2A20",opacity:.8});sr(n,17.4,34,.75,25.6,.3,i,{cast:!1});for(const r of[16.9,34])sr(n,r,r+.5,.75,25.6,.36,F.black,{cast:!1});for(const r of[19,25.7,32.4])jr(n,0,.75,25.6,r,.07,F.metal,{cast:!1});for(const r of[20.2,25.7,31.2])ni(n,2.4,25.6-.3,r,"#FF5A2A",24,30);for(const r of[19.5,25.7,31.9])fs(n,1.4,25.6,r,7,"#FF6A3A",.12)}function _v(n){const[t,e,i,r]=[.9,4.9,39.6,43.6];for(const[f,p]of[[t,i],[e-.4,i],[t,r-.4],[e-.4,r-.4]])rt(n,f,f+.4,p,p+.4,0,17.4,F.black,{r:.05});for(const f of[.5,6.4,12.3])rt(n,t,e,i,r,f,f+.5,F.black,{r:.05});ln(n,t,e,i,r,.3),rt(n,t+.5,e-.5,i+.6,r-.6,6.9,9.4,F.darkm,{r:.15}),ce(n,t+2,r-.58,.8,8.15,8.25,F.black,{cast:!1}).rotation.x=Math.PI/2,ce(n,t+2,r-.58,.3,8.15,8.28,F.grey,{cast:!1}).rotation.x=Math.PI/2;const s=ts(n,new Xe(1,1,1),F.book,7),o=["#C8302F","#4F79B8","#E0B452","#2A2A30","#7E9C8A","#F2F0EA","#9C8AB8"];let a=t+.6;for(let f=0;f<7;f++){const p=.35+f%3*.12,g=2.2+f%4*.3;s.place(a+p/2,1+g/2,i+2,p,g,2.6,o[f]),a+=p+.05}s.done(),ce(n,t+2,i+2,.55,12.8,13.4,F.white),ce(n,t+2,i+2,.25,13.4,14.3,F.green);for(const[f,p,g]of[[0,1.1,0],[.4,.8,.2],[-.4,.9,-.2]])ve(n,t+2+f,13.4+p,i+2+g,.32,F.green,{seg:12,scale:[1.3,.7,1]});const l=(t+e)/2,c=(i+r)/2;ce(n,l,c,2.5,17.4,21.9,F.shadeFabric,{seg:40,cast:!1,receive:!1}),Qr(n,l,17.45,c,2.5,.06,F.black,{axis:"y",seg:40,cast:!1}),Qr(n,l,21.85,c,2.5,.06,F.black,{axis:"y",seg:40,cast:!1}),ce(n,l,c,.25,17.4,19.1,F.black,{cast:!1}),ve(n,l,19.6,c,.55,F.bulb,{cast:!1,seg:16});const u=new gc("#FFB85A",0,70,1.25,.55,2);u.position.set(l,19.4,c),u.target.position.set(l,0,c),u.castShadow=!0,u.shadow.mapSize.set(1024,1024),u.shadow.bias=-.003,u.shadow.normalBias=.04,u.shadow.camera.near=2,u.shadow.camera.far=60,Se(u,"intensity",0,420*nl),n.add(u,u.target);const h=new gc("#FFC070",0,40,1.1,.6,2);h.position.set(l,19.8,c),h.target.position.set(l,40,c),Se(h,"intensity",0,160*nl),n.add(h,h.target),ni(n,l,19.6,c,"#FFB85A",90,40),fs(n,l,19.6,c,7,"#FFC46A",.2)}function vv(n,t){const e=new te(new vo(4.2,64),Et("#FFFFFF",{map:t.rug,transparent:!0}));e.rotation.x=-Math.PI/2,e.position.set(7.8,.05,27),e.receiveShadow=!0,n.add(e)}function xv(n,t){const[e,i,r,s]=[14,38,29,44];rt(n,e,i,r,s,0,3,F.bedframe,{r:.25}),rt(n,e-.3,e+.3,r-.3,s+.3,0,7.6,F.bedframe,{r:.15}),rt(n,e+.5,i-.5,r+.5,s-.5,3,5.4,F.sheet,{r:.6}),ln(n,e,i,r,s,.3),rt(n,22,i-.6,r+.8,s-.3,5.4,6.6,F.blanket,{r:.55}),rt(n,22,24.6,r+.8,s-.3,6.6,7.3,F.blanket,{r:.35}),rt(n,22,i-.6,s-.5,s+.2,3.4,5.6,F.blanket,{r:.3});for(const[a,l]of[[r+1.2,r+7],[r+7.8,r+13.8]])rt(n,e+1,e+7,a,l,5.4,6.8,F.pillow,{r:.7});const o=new Re;o.position.set(18.4,6.8,32.6),o.rotation.y=-.22,n.add(o),rt(o,-.8,.8,-1.6,1.6,0,.2,F.psBlack,{r:.08}),ps.contact=on(o,"+y",.205,-.7,.7,-1.5,1.5,kn("#FFFFFF",{map:t.phone})),ni(o,0,.8,0,"#FFD9A8",4,7)}function Mv(n){for(let r=0;r<5;r++){const s=r*Math.PI*2/5+.7,o=31+Math.cos(s)*2.6,a=20.6+Math.sin(s)*2.6;ye(n,Nt(31,.55,20.6),Nt(o,.45,a),.2,F.black),ve(n,o,.3,a,.3,F.darkm,{seg:14})}ce(n,31,20.6,.3,.5,4.3,F.chrome),rt(n,31-2.1,31+2.1,20.6-2.1,20.6+2,4.3,5.2,F.black,{r:.4});const i=hs(n,31,5,20.6+2,"x",.12);rt(i,-2,2,0,.5,0,5.8,F.mesh,{r:.3}),rt(i,-2.05,2.05,.05,.45,0,5.8,F.black,{r:.1,cast:!1}),rt(i,-1.9,1.9,.5,.9,.3,1.2,F.black,{r:.1}),rt(i,-.3,.3,.1,.4,5.8,6.5,F.black,{sharp:!0}),rt(i,-1.3,1.3,-.2,.5,6.5,8,F.black,{r:.3});for(const r of[31-2.7,31+2.1])rt(n,r+.15,r+.45,20.6-.5,20.6+.3,5.2,6.9,F.black,{r:.06}),rt(n,r,r+.6,20.6-1.5,20.6+1,6.9,7.25,F.black,{r:.15});ln(n,31-2.4,31+2.4,20.6-2.4,20.6+2.4,.18)}function yv(n){for(const[t,e,i]of[[17,26.4,.1],[18.8,26.6,-.08]]){const r=new Re;r.position.set(t,0,e),r.rotation.y=i,n.add(r),rt(r,-.65,.65,-1.5,1.5,0,.35,F.grey,{r:.2}),rt(r,-.6,.6,-1.3,-.2,.35,.95,F.darkm,{r:.3})}rt(n,39.6,42,29.6,31.4,0,4.8,F.black,{r:.5}),rt(n,39.4,42.2,29.4,31.6,4.8,5.6,F.darkm,{r:.4}),rt(n,40,41.6,31.4,31.7,1,2.2,F.darkm,{r:.1,cast:!1}),ye(n,Nt(39.8,5.4,30.5),Nt(40.3,6.6,30.5),.12,F.darkm),ye(n,Nt(41.8,5.4,30.5),Nt(41.3,6.6,30.5),.12,F.darkm),ln(n,39.6,42,29.6,31.4,.3),ce(n,36.5,24,.4,0,2.6,Et("#6C8BC8")),ce(n,36.5,24,.3,2.6,3,F.white)}let Ir=null;function Sv(n){const t=new fr({colorWrite:!1,depthWrite:!1,side:je}),e=()=>{const i=new te(new pr(1,1),t);return i.castShadow=!0,i.receiveShadow=!1,i.frustumCulled=!1,i.userData.noPick=!0,n.add(i),i};Ir={strips:[e(),e(),e(),e()],bars:[e(),e()]},Ev(0)}function Ev(n){if(!Ir)return;const{x0:t,x1:e,y0:i,y1:r}=Jc,s=Jc.z+.6,o=120,a=(t+e)/2,l=(i+r)/2,c=(e-t)/2+n*o,u=(r-i)/2+n*o,h=(T,E,x,P,R)=>{T.position.set((E+x)/2,(P+R)/2,s),T.scale.set(Math.max(.001,x-E),Math.max(.001,R-P),1)},[f,p,g,_]=Ir.strips;h(f,a-o,a-c,l-o,l+o),h(p,a+c,a+o,l-o,l+o),h(g,a-c,a+c,l+u,l+o),h(_,a-c,a+c,l-o,l-u);const m=.3*(1-n);h(Ir.bars[0],a-m,a+m,l-u,l+u);const d=i+(r-i)*.64;h(Ir.bars[1],a-c,a+c,d-m,d+m)}const Zs=()=>new Promise(n=>requestAnimationFrame(()=>n()));async function Tv(n){const t={tiles:B_(),weave:z_(),mac:k_(),deck:H_(),code:V_(),dev:G_(),phone:W_(),snoopy:X_(),neon:Zc(),neonOff:Zc(!0),rug:Y_(),ball:Z_(),corridor:J_(),photos:Array.from({length:12},(s,o)=>q_(o)),journal:$_()};F=K_(t),await Zs();const e={};for(const s of Object.keys($c)){const o=$c[s].rect,[a,l,c,u]=o,h=new Re;h.name=s;const f=new w((a+l)/2,0,(c+u)/2);h.position.copy(f);const p=new Re;p.position.copy(f).negate(),h.add(p),j_(p,o,t),e[s]={name:s,rect:o,centre:f,g:h,inner:p,lift:0,liftGoal:0},n.add(h)}const i=e;Kc(i.battle.inner,0,17,t),jc(i.battle.inner,0,22),ev(i.battle.inner,t),nv(i.battle.inner,t),Q_(i.battle.inner,t),iv(i.battle.inner),rv(i.battle.inner,t),cv(i.battle.inner);const r=uv(i.battle.inner);return await Zs(),jc(i.rack.inner,22,44),hv(i.rack.inner),fv(i.rack.inner),pv(i.rack.inner),mv(i.rack.inner,t),await Zs(),Kc(i.door.inner,17,44,t,{doorway:!0}),Qc(i.door.inner,20,19.5,t,0),Qc(i.door.inner,37.8,19.5,t,4),gv(i.door.inner),_v(i.door.inner),vv(i.door.inner,t),await Zs(),xv(i.bed.inner,t),Mv(i.bed.inner),yv(i.bed.inner),Sv(i.door.inner),{pieces:e,figure:r}}const bv=matchMedia("(prefers-reduced-motion: reduce)").matches,jn=n=>new Promise(t=>setTimeout(t,bv?0:n)),Ce=(n,t,e)=>{const i=document.createElement(n);return t&&(i.className=t),e!==void 0&&(i.textContent=e),i},kr=["about","work","projects","skills","contact"];function Av({go:n,theme:t,clock:e}){const i=document.getElementById("screens"),r=Object.fromEntries(kr.map(j=>[j,i.querySelector(`[data-screen="${j}"]`)])),s=j=>r[j];for(const j of i.querySelectorAll("[data-go]"))j.addEventListener("click",()=>n(j.dataset.go));const o=new Set,a=()=>{const j=e();for(const b of document.querySelectorAll("[data-clock]"))b.textContent=j};a(),setInterval(a,15e3);const l=s("about"),c=l.querySelector(".pages"),u=l.querySelector(".folio"),h=Math.ceil(c.querySelectorAll(".page").length/2);let f=0,p=!1;function g(j){f=j;for(const b of c.querySelectorAll(".page"))b.hidden=Math.floor(+b.dataset.page/2)!==j;u.textContent=`${j+1} / ${h}`,l.querySelector('[data-turn="-1"]').disabled=j===0,l.querySelector('[data-turn="1"]').disabled=j===h-1}async function _(j){const b=f+j;if(p||b<0||b>=h)return;p=!0;const Y=[...c.querySelectorAll(".page")].filter(at=>!at.hidden),J=Ce("div",`leaf ${j>0?"fwd":"back"}`),Q=Ce("div","face front"),et=Ce("div","face back");Q.append((j>0?Y[1]:Y[0]).cloneNode(!0)),g(b);const pt=[...c.querySelectorAll(".page")].filter(at=>!at.hidden);et.append((j>0?pt[0]:pt[1]).cloneNode(!0));for(const at of[Q,et])for(const mt of at.querySelectorAll(".page"))mt.hidden=!1;J.append(Q,et),c.append(J),await jn(620),J.remove(),p=!1}l.querySelectorAll("[data-turn]").forEach(j=>j.addEventListener("click",()=>_(+j.dataset.turn))),g(0);const m=s("work"),d=[...m.querySelectorAll(".file")];function T(j){d.forEach((b,Y)=>b.toggleAttribute("aria-current",Y===j));for(const b of m.querySelectorAll(".doc"))b.classList.toggle("on",+b.dataset.f===j);m.querySelector("#ed-tab").textContent=d[j].textContent,m.querySelector("#ed-status").textContent=d[j].textContent,m.querySelector(".docs").scrollTop=0}d.forEach((j,b)=>j.addEventListener("click",()=>T(b))),m.addEventListener("keydown",j=>{if(j.key!=="ArrowDown"&&j.key!=="ArrowUp")return;const Y=(d.findIndex(J=>J.hasAttribute("aria-current"))+(j.key==="ArrowDown"?1:d.length-1))%d.length;T(Y),d[Y].focus({preventScroll:!0}),j.preventDefault()});const E=s("projects"),x=E.querySelector(".grid"),P=E.querySelector(".win-back"),R=E.querySelector(".win-title"),L=E.querySelector(".win-count");function D(j){x.hidden=j!==null,P.hidden=j===null,L.hidden=j!==null;for(const b of E.querySelectorAll(".detail"))b.hidden=+b.dataset.p!==j;R.textContent=j===null?"Projects":E.querySelector(`.detail[data-p="${j}"] h2`).textContent,E.querySelector(".win-body").scrollTop=0,(j===null?x.querySelector(".card"):P).focus({preventScroll:!0})}E.querySelectorAll(".card").forEach(j=>j.addEventListener("click",()=>D(+j.dataset.p))),P.addEventListener("click",()=>D(null));const y=s("skills"),M=y.querySelector("#term-out"),C=y.querySelector("#term-input"),U=y.querySelector(".term"),O=[];let k=0,V=!1;const H=(j,b="")=>{const Y=Ce("p",`tl ${b}`,j);return M.append(Y),U.scrollTop=U.scrollHeight,Y},nt=j=>{const b=Ce("p","tl cmd");b.append(Ce("span","ps","mihir@room ~ %"),document.createTextNode(" "+j)),M.append(b)},G=[["languages","Python · TypeScript · JavaScript · SQL · C/C++ · Java"],["frameworks","React · Next.js · Node.js · Flask · FastAPI · REST APIs"],["cloud","AWS · GCP · Docker · CI/CD · GitHub Actions"],["ai & agents","LangChain · LangGraph · MCP · Context engineering · Fine-tuning · Claude Code · Cursor · Kiro"]],st={help:()=>{H("commands","head");for(const[j,b]of[["skills","what I work with"],["whoami","one line about me"],["ls","what is in this room"],["open <name>","go to it: about, work, projects, contact"],["theme day | night","switch the lights"],["date","the time here"],["clear","clear the screen"],["exit","back to the room"]]){const Y=Ce("p","tl row");Y.append(Ce("span","k",j),Ce("span","v",b)),M.append(Y)}},skills:async()=>{for(const[j,b]of G){const Y=Ce("p","tl row");Y.append(Ce("span","k",j),Ce("span","v",b)),M.append(Y),U.scrollTop=U.scrollHeight,await jn(90)}},whoami:()=>H("mihir okte. software engineer at amazon, bengaluru. iit delhi, maths and computing, 2023."),ls:()=>H("about/journal    work/laptop    projects/macbook    skills/this-monitor    contact/phone"),date:()=>H(`${e()} in bengaluru`),clear:()=>{M.textContent=""},exit:()=>n("room"),room:()=>n("room"),sudo:()=>H("nice try.")};async function gt(j){const b=j.trim().replace(/\s+/g," ");if(nt(b),!b)return;O.push(b),k=O.length;const[Y,...J]=b.toLowerCase().split(" ");if(Y==="open"||Y==="cd"||Y==="cat"){const Q=(J[0]||"").replace(/\/.*$/,"");kr.includes(Q)&&Q!=="skills"?(H(`opening ${Q}`),await jn(260),n(Q)):H(Q==="skills"?"you are looking at it.":"usage: open about | work | projects | contact")}else Y==="theme"?J[0]==="day"||J[0]==="night"?(t(J[0]),H(`lights: ${J[0]}`)):H("usage: theme day | night"):st[Y]?await st[Y](J):H(`zsh: command not found: ${Y}. try help`,"err");U.scrollTop=U.scrollHeight}async function yt(j){V=!0,C.value="";for(const b of j)C.value+=b,await jn(55);await jn(140),C.value="",await gt(j),V=!1}C.addEventListener("keydown",j=>{if(V){j.preventDefault();return}if(j.key==="Enter"){const b=C.value;C.value="",gt(b)}else j.key==="ArrowUp"&&O.length?(k=Math.max(0,k-1),C.value=O[k],j.preventDefault()):j.key==="ArrowDown"&&O.length&&(k=Math.min(O.length,k+1),C.value=O[k]??"",j.preventDefault());j.stopPropagation()}),y.addEventListener("click",j=>{!j.target.closest("button, a")&&!getSelection().toString()&&C.focus({preventScroll:!0})}),y.querySelectorAll("[data-cmd]").forEach(j=>j.addEventListener("click",()=>{V||yt(j.dataset.cmd)}));const kt=s("contact"),tt=kt.querySelector("#thread"),At=kt.querySelector("#chat-state"),Tt=kt.querySelector("#replies"),X=(j,b)=>{const Y=Ce("li",`msg ${j}`);return Y.append(b),tt.append(Y),tt.scrollTop=tt.scrollHeight,Y};async function K(j,{link:b=null}={}){At.textContent="Typing…";const Y=X("them typing",Ce("span","dots"));if(Y.firstChild.append(Ce("i"),Ce("i"),Ce("i")),await jn(520+Math.min(900,j.length*14)),Y.remove(),At.textContent="Online",b){const J=Ce("a","link",j);J.href=b,b.startsWith("mailto:")||(J.target="_blank",J.rel="noopener"),X("them",J)}else X("them",document.createTextNode(j))}let vt=!1;Tt.querySelectorAll("button").forEach(j=>j.addEventListener("click",async()=>{vt||(vt=!0,j.setAttribute("aria-pressed","true"),X("me",document.createTextNode(j.textContent)),await jn(200),await K(j.dataset.text,{link:j.dataset.href}),vt=!1)}));async function Lt(j){const b=s(j),Y=!o.has(j);o.add(j),b.classList.remove("awake"),b.classList.add("booting"),await jn(Y?520:160),b.classList.remove("booting"),b.classList.add("awake"),j==="skills"?(C.focus({preventScroll:!0}),Y&&(H("last login: today, on the monitor in my room","dim"),await yt("skills"),H("type help, or pick a command below.","dim"))):j==="contact"?(Y&&(vt=!0,await K("Hey, I'm Mihir."),await K("Quickest way to reach me is email. Pick one and I'll send it over."),vt=!1),Tt.querySelector("button")?.focus({preventScroll:!0})):j==="work"?m.querySelector(".file[aria-current]")?.focus({preventScroll:!0}):j==="projects"?(x.hidden?P:x.querySelector(".card")).focus({preventScroll:!0}):l.querySelector('[data-turn="1"]').focus({preventScroll:!0})}function Ct(j){s(j)?.classList.remove("awake","booting")}function Kt(){for(const j of kr)Lt(j)}return{boot:Lt,sleep:Ct,bootAll:Kt,element:s}}const wv="#F3EEE4",tu=cs.degToRad(45),aa=Math.atan(1/Math.SQRT2),nh=12,Cv=36,Rv=new w(22,12,22),Pv=[.05,.95,.09,.93],Lv=[.04,.96,.08,.62],Dv={w:.8,h:.74,y:.47},Fv={w:.94,h:.7,y:.45},Iv=2.1,Uv=1.6,Nv=1.7,eu={yaw:.05,pitch:.028},nu=150,Ov=.09,Bv=-2,zv=-.42,no=matchMedia("(prefers-reduced-motion: reduce)").matches,ns=new URLSearchParams(location.search),or=ns.has("still"),po=ns.has("look")?es(+ns.get("look")):null;or&&document.body.classList.add("still");const ii=n=>document.getElementById(n),ar=ii("stage"),kv=ii("view"),Hv=ii("pins"),Rr=ii("loader"),ih=ii("nav");await Promise.race([Promise.all(["400 16px Inter","600 16px Inter"].map(n=>document.fonts.load(n))),new Promise(n=>setTimeout(n,1500))]);const Vv=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Kolkata",hour:"2-digit",minute:"2-digit",hour12:!1}),Gv=()=>Vv.format(new Date),rl=ii("theme"),Wv=ns.has("theme")?ns.get("theme")==="day"?0:1:null;let zn=Wv??(document.documentElement.dataset.theme==="day"?0:1),qi=zn;function Cl(n,t=!0){if(zn=n,document.documentElement.dataset.theme=n?"night":"day",rl.querySelector("span").textContent=n?"Night":"Day",rl.setAttribute("aria-label",n?"switch to day":"switch to night"),t)try{localStorage.setItem("theme",n?"night":"day")}catch{}}Cl(zn,!1);rl.addEventListener("click",()=>Cl(zn?0:1));const ms=Av({go:n=>n==="room"?gr():gs(n),theme:n=>Cl(n==="night"?1:0),clock:Gv});let iu=!1,Qe=null;try{Qe=new C_({canvas:kv,antialias:!0,alpha:!0,stencil:!0,powerPreference:"high-performance"})}catch(n){console.warn("WebGL unavailable, falling back to the screens as a page",n)}const _n=!!Qe;_n||(document.body.classList.add("nogl","ready"),ms.bootAll(),dh());_n&&(Qe.setPixelRatio(Math.min(devicePixelRatio,2)),Qe.shadowMap.enabled=!0,Qe.shadowMap.type=al,Qe.toneMapping=Hn,Qe.setClearColor(wv,0));const ri=new Cu,Ee=new Ge(nh,1,1,2e3),Xv=new w(Math.sin(tu)*Math.cos(aa),Math.sin(aa),Math.cos(tu)*Math.cos(aa)),is=new Xu("#FFF6EA",.95);Se(is,"intensity",.95,.34);Se(is,"color",new zt("#FFF6EA"),new zt("#5C6A8C"));ri.add(is);const bn=new Tl("#FFFFFF",2);bn.position.set(-.5,.85,.25).multiplyScalar(100).add(new w(22,0,22));bn.target.position.set(22,0,22);Se(bn,"intensity",2,.46);Se(bn,"color",new zt("#FFFFFF"),new zt("#6E7A9A"));ri.add(bn,bn.target);const qv=new w(-.358,.53,.769),gn=new Tl("#FFF0DA",2.8);gn.position.copy(qv).multiplyScalar(130).add(new w(22,0,22));gn.target.position.set(22,0,22);gn.castShadow=!0;gn.shadow.mapSize.set(3072,3072);Object.assign(gn.shadow.camera,{left:-80,right:80,top:70,bottom:-70,near:20,far:320});gn.shadow.bias=-2e-4;gn.shadow.normalBias=.04;Se(gn,"intensity",2.8,.2);Se(gn,"color",new zt("#FFF0DA"),new zt("#7E94C2"));ri.add(gn,gn.target);const{pieces:rh,figure:Mi}=_n?await Tv(ri):{pieces:{},figure:null},Yv={x:-2,y:-5,z:-2,w:xe.L+2,h:xe.H+xe.SLAB},Pr={back:6,down:6,gap:.9,depth:1.15},sh=new Cu,Zv=(()=>{const{x:n,y:t,z:e,w:i,h:r}=Yv,s=n+i,o=t+r,a=e+i,l=Pr.gap,c=i+l,u=r+l,h=n-Pr.back*c,f=e-Pr.back*c,p=t-Pr.down*u,g={stencilWrite:!0,stencilRef:1,stencilFunc:nf,stencilFail:Bn,stencilZFail:Bn,stencilZPass:Bn},_=Object.assign(Et(Qu),g),m=new Re,d=[],T=[],E=(C,U,O,k,V,H)=>C.push([U,O,k,U,k,V,H]),x=[];for(let C=-6;C<=0;C++)for(let U=-6;U<=0;U++)for(let O=-6;O<=0;O++){if(C===0&&U===0&&O===0||C!==0&&U!==0&&O!==0)continue;x.push([C,U,O,n+C*c,n+C*c+i,t+U*u,t+U*u+r,e+O*c,e+O*c+i]);const k=n+C*c,V=k+i,H=t+U*u,nt=H+r,G=e+O*c,st=G+i;E(C===0?d:T,[V,H,st],[V,H,G],[V,nt,G],[V,nt,st],[1,0,0]),E(U===0?d:T,[k,nt,st],[V,nt,st],[V,nt,G],[k,nt,G],[0,1,0]),E(O===0?d:T,[k,H,st],[V,H,st],[V,nt,st],[k,nt,st],[0,0,1])}const P=(C,U)=>{const O=[],k=[];for(const[H,nt,G,st,gt,yt,kt]of C)for(const tt of[H,nt,G,st,gt,yt])O.push(...tt),k.push(...kt);const V=new Le;return V.setAttribute("position",new se(O,3)),V.setAttribute("normal",new se(k,3)),new te(V,U)},R=Object.assign(Et("#FFFFFF"),g);Se(R,"color",new zt("#8E867A"),new zt("#0C0C0F")),m.add(P(d,_),P(T,R));const L=Pr.depth;for(const[C,U,O,k,V,H]of[[h,n,p,o,f,a],[n,s,p,o,f,e],[n,s,p,t,e,a]]){const nt=new te(new Xe(1,1,1),R),G=U-(U===s?L:0),st=k-(k===o?L:0),gt=H-(H===a?L:0);nt.scale.set(G-C,st-O,gt-V),nt.position.set((C+G)/2,(O+st)/2,(V+gt)/2),m.add(nt)}for(const C of m.children)C.frustumCulled=!1;const D=new Xu(is.color,is.intensity);Se(D,"intensity",.95,.34),Se(D,"color",new zt("#FFF6EA"),new zt("#5C6A8C"));const y=new Tl(bn.color,bn.intensity);y.position.copy(bn.position),y.target.position.copy(bn.target.position),Se(y,"intensity",2,.46),Se(y,"color",new zt("#FFFFFF"),new zt("#6E7A9A")),sh.add(m,D,y,y.target);const M=new te(new Xe(i+.04,r+.04,i+.04),new fr({colorWrite:!1,depthWrite:!1,depthTest:!1,side:je,stencilWrite:!0,stencilRef:1,stencilFunc:$a,stencilZPass:ef}));return M.position.set(n+i/2,t+r/2,e+i/2),M.renderOrder=-10,{group:m,mark:M,boxes:x,mine:[n,s,t,o,e,a]}})();_n&&ri.add(Zv.mark);ju(qi);const yn={};if(_n){ri.updateMatrixWorld(!0);for(const n of kr){const t=ps[n],e=new w,i=new Wn,r=new w;t.matrixWorld.decompose(e,i,r);const{width:s,height:o}=t.geometry.parameters,a=new w(0,0,1).applyQuaternion(i),l={section:n,mesh:t,centre:e,quat:i,right:new w(1,0,0).applyQuaternion(i),up:new w(0,1,0).applyQuaternion(i),out:a,w:s*r.x,h:o*r.y};l.aspect=l.w/l.h,l.el=ms.element(n);const c=th.find(u=>u.section===n);l.via=new w(...c.via),l.fov=c.fov,yn[n]=l}}const oh=(_n?th:[]).map(n=>{const t=document.createElement("button");return t.className="pin",t.type="button",t.dataset.section=n.section,t.dataset.side=n.side,t.innerHTML=`<i></i><span>${n.section[0].toUpperCase()+n.section.slice(1)}</span>`,t.setAttribute("aria-label",`go to ${n.section}`),t.addEventListener("click",e=>{e.stopPropagation(),gs(n.section)}),Hv.appendChild(t),{el:t,pin:n,local:new w(...n.at),piece:rh[n.piece]}});ih.querySelectorAll("[data-to]").forEach(n=>n.addEventListener("click",t=>{t.stopPropagation();const e=n.dataset.to;e==="room"?gr():gs(e)}));let mn=0,ze=0,io=!1,Pe=null,lr=!1,la=kr.includes(location.hash.slice(1))?location.hash.slice(1):null,yo=!1,rs=!0,ss=null,_i=0,Qn=0;const os=new ft(-1,-1),ru=new ft,Ve={x:0,y:0,gx:0,gy:0},dn=new w,su=new Xd;let sl=null,Ke=null;const as=n=>n.pos??n.aim.clone().addScaledVector(n.dir,n.dist);function cr(n){const t=as(n);sl={pos:t,aim:n.aim.clone(),up:n.up.clone(),fov:n.fov,clip:n.clip},Ee.position.copy(t),Ee.up.copy(n.up),Ee.lookAt(n.aim),Ee.fov=n.fov,Ee.aspect=mn/ze;const e=t.distanceTo(n.aim);Ee.near=Math.max(.02,e*.02,n.clip??0),Ee.far=e*4+400,Ee.updateProjectionMatrix(),Ee.updateMatrixWorld(),rs=!0}function Jv(n,[t,e,i,r],s,o){const a=t*2-1,l=e*2-1,c=1-r*2,u=1-i*2,h={aim:Rv.clone(),dir:s.clone(),dist:300,up:new w(0,1,0),fov:o},f=new w,p=new w;for(let g=0;g<10;g++){cr(h);let _=1e9,m=-1e9,d=1e9,T=-1e9;for(const P of n)dn.copy(P).project(Ee),_=Math.min(_,dn.x),m=Math.max(m,dn.x),d=Math.min(d,dn.y),T=Math.max(T,dn.y);const E=h.dist*Math.tan(cs.degToRad(o/2)),x=E*Ee.aspect;f.setFromMatrixColumn(Ee.matrixWorld,0),p.setFromMatrixColumn(Ee.matrixWorld,1),h.aim.addScaledVector(f,((_+m)/2-(a+l)/2)/2*x).addScaledVector(p,((d+T)/2-(c+u)/2)/2*E),h.dist*=Math.max((m-_)/(l-a),(T-d)/(u-c))}return h}const Xi=2.6,$v=[[-2,xe.H,-2],[-2,xe.H,xe.L],[xe.L,xe.H,-2],[-2,-5,xe.L],[xe.L,-5,-2],[xe.L,-5,xe.L],[-2+Xi,-5-.6,xe.L+Xi],[xe.L+Xi,-5-.6,-2+Xi],[xe.L+Xi,-5-.6,xe.L+Xi]].map(n=>new w(...n));let Ur=null;function Rl(){const n={...Ur,aim:Ur.aim.clone(),up:Ur.up.clone()};n.dir=Ur.dir.clone().applyAxisAngle(new w(0,1,0),Ve.x*eu.yaw);const t=new w().crossVectors(n.dir,n.up).normalize();return n.dir.applyAxisAngle(t,Ve.y*eu.pitch),n}function mo(n){const t=io?Fv:Dv,e=Math.floor(Math.min(t.w*mn,t.h*ze*n.aspect)),i=Math.round(e/n.aspect),r=n.fov??Cv,s=Math.tan(cs.degToRad(r/2)),o=n.w*ze/(2*s*e),a=e/n.w,l=mn/2-e/2,c=t.y*ze-i/2,u=Math.round(l)-l,h=Math.round(c)-c;return{pose:{aim:n.centre.clone().addScaledVector(n.up,(t.y-.5)*ze/a).addScaledVector(n.right,-u/a).addScaledVector(n.up,h/a),dir:n.out.clone(),dist:o,up:n.up.clone(),fov:r,clip:Math.max(0,o-2.4)},rect:{left:Math.round(l),top:Math.round(c),width:e,height:i}}}const Kv=(n,t,e,i)=>{const r=as(n),s=as(t),o=Array.isArray(e);return{P0:r,P1:o?e[0].clone():e?e.clone():r.clone().lerp(s,.5),Q1:o?e[1].clone():null,P2:s,A0:n.aim.clone(),A2:t.aim.clone(),U0:n.up.clone(),U2:t.up.clone(),F0:n.fov,F2:t.fov,C0:n.clip??0,C2:t.clip??0,kind:i}};function ah(n,t,{via:e,kind:i="in",then:r=null}={}){if(no||or||!sl){cr(n),Ke=null,r?.();return}Ke={...Kv(sl,n,e,i),t0:performance.now(),ms:t*1e3,then:r}}const Js=(n,t,e)=>{const i=es((e-n)/(t-n));return i*i*(3-2*i)};function jv(n,t){const e=fo(t),i=1-e,r=n.Q1?n.P0.clone().multiplyScalar(i*i*i).addScaledVector(n.P1,3*i*i*e).addScaledVector(n.Q1,3*i*e*e).addScaledVector(n.P2,e*e*e):n.P0.clone().multiplyScalar(i*i).addScaledVector(n.P1,2*i*e).addScaledVector(n.P2,e*e),s=n.kind==="in"?1-Math.pow(1-e,3):n.kind==="out"?Math.pow(e,3):e,o=n.kind==="in"?Js(.5,1,e):n.kind==="out"?Js(0,.5,e):e,a=n.A0.clone().lerp(n.A2,s),l=new w().subVectors(a,r).normalize(),c=n.U0.clone().lerp(n.U2,o);c.addScaledVector(l,-c.dot(l)),c.lengthSq()<1e-6&&c.copy(n.U2),c.normalize();const u=n.C0*(1-Js(0,.4,e))+n.C2*Js(.6,1,e);return t>=1?{pos:n.P2.clone(),aim:n.A2.clone(),up:n.U2.clone(),fov:n.F2,clip:n.C2}:{pos:r,aim:a,up:c,fov:Fr(n.F0,n.F2,e),clip:u}}function Qv(n){if(!Ke)return!1;const t=Math.min(1,(n-Ke.t0)/Ke.ms);if(cr(jv(Ke,t)),t>=1){const e=Ke.then;Ke=null,e?.()}return!0}const ou=new w(0,11,0),tx=(n,t)=>[as(mo(n).pose).addScaledVector(n.out,2).add(ou),as(mo(t).pose).addScaledVector(t.out,2).add(ou)];function So(n,t=null){for(const e of Object.values(yn)){const i=e.section===n;e.el.classList.toggle("live",i),i&&Object.assign(e.el.style,{left:`${t.left}px`,top:`${t.top}px`,width:`${t.width}px`,height:`${t.height}px`})}}function gs(n){if(!_n||!yn[n]||Pe===n&&(lr||Ke))return;const t=Pe;t&&(ms.sleep(t),So(null)),Pe=n,lr=!1,document.body.classList.add("visiting"),document.body.dataset.at=n,ch(n),history.replaceState(null,"","#"+n);const{pose:e,rect:i}=mo(yn[n]),r=t?tx(yn[t],yn[n]):yn[n].via;ah(e,t?Nv:Iv,{via:r,kind:t?"across":"in",then:()=>lh(n,i)})}function lh(n,t){Pe===n&&(lr=!0,So(n,t),document.body.classList.add("landed"),ms.boot(n))}function gr(){if(!Pe)return;const n=Pe;ms.sleep(Pe),So(null),Pe=null,lr=!1,document.body.classList.remove("landed"),ch(null),history.replaceState(null,"",location.pathname+location.search),ah(Rl(),Uv,{via:yn[n].via,kind:"out",then:()=>{Pe||document.body.classList.remove("visiting")}})}function ch(n){ih.querySelectorAll("[data-to]").forEach(t=>t.toggleAttribute("aria-current",t.dataset.to===(n??"room"))),oh.forEach(({el:t})=>t.toggleAttribute("aria-current",t.dataset.section===n))}function uh(){if(mn=innerWidth,ze=innerHeight,io=mn<820,document.body.classList.toggle("compact",io),!!_n)if(ze=Math.round(ar.getBoundingClientRect().height)||ze,Qe.setSize(mn,ze,!1),Ur=Jv($v,io?Lv:Pv,Xv,nh),Ke=null,Pe){const{pose:n,rect:t}=mo(yn[Pe]);cr(n),lr?So(Pe,t):lh(Pe,t)}else cr(Rl())}function ex(){for(const{el:n,pin:t,local:e,piece:i}of oh){i.inner.localToWorld(dn.copy(e)).project(Ee);const r=(dn.x+1)/2*mn,s=(1-dn.y)/2*ze;let o=t.side;o==="left"&&r<nu?o="right":o==="right"&&r>mn-nu?o="left":o==="top"&&s<70?o="bottom":o==="bottom"&&s>ze-80&&(o="top"),n.dataset.side!==o&&(n.dataset.side=o),n.style.transform=`translate3d(${r.toFixed(1)}px, ${s.toFixed(1)}px, 0)`,n.classList.toggle("hot",ss===t.section)}}function hh(){if(!_n||Pe||Ke||!yo)return null;ru.set(os.x/mn*2-1,1-os.y/ze*2),su.setFromCamera(ru,Ee);let n=null,t=1e9;for(const e of Object.values(yn)){const i=su.intersectObject(e.mesh,!1)[0];i&&i.distance<t&&(t=i.distance,n=e.section)}return n}function nx(){if(!Mi)return;if(po!==null){Qn=po;return}if(!yo||Pe||Ke){Qn=0;return}rh.battle.inner.localToWorld(dn.copy(Mi.at)).project(Ee);const n=(dn.x+1)/2*mn,t=(1-dn.y)/2*ze;Qn=Math.hypot(os.x-n,os.y-t)<Ov*ze?1:0}function fh(n){Mi.head.rotation.set(.1*n,Bv*n,-.05*n),Mi.torso.rotation.y=zv*n,Mi.solveArms()}function dh(){if(iu)return;iu=!0;const n=or?0:Math.max(0,400-performance.now());setTimeout(()=>{Rr.classList.add("out"),or?Rr.classList.add("gone"):(Rr.addEventListener("transitionend",()=>Rr.classList.add("gone"),{once:!0}),setTimeout(()=>Rr.classList.add("gone"),900))},n)}ii("mark").addEventListener("click",n=>{n.preventDefault(),gr()});ii("back").addEventListener("click",n=>{n.stopPropagation(),gr()});addEventListener("keydown",n=>{n.key==="Escape"&&gr()},!0);addEventListener("resize",uh);ar.addEventListener("pointermove",n=>{os.set(n.clientX,n.clientY),yo=!0,Ve.gx=es(n.clientX/mn*2-1,-1,1),Ve.gy=es(n.clientY/ze*2-1,-1,1);const t=hh();t!==ss&&(ss=t,ar.classList.toggle("pointing",!!t),rs=!0)});ar.addEventListener("pointerleave",()=>{yo=!1,Ve.gx=Ve.gy=0,ss&&(ss=null,ar.classList.remove("pointing"),rs=!0)});ar.addEventListener("click",n=>{if(n.target.closest(".chrome, .pin, .scr, .nav, .back"))return;if(Pe){lr&&gr();return}const t=hh();t&&gs(t)});let au=performance.now();function ph(n){if(!_n)return;requestAnimationFrame(ph);const t=Math.min(.05,(n-au)/1e3);au=n;let e=rs||Qv(n);if(!Pe&&!Ke&&!no&&!or){const i=1-Math.pow(.94,t*60),r=Fr(Ve.x,Ve.gx,i),s=Fr(Ve.y,Ve.gy,i);Math.abs(r-Ve.x)+Math.abs(s-Ve.y)>1e-4&&(Ve.x=r,Ve.y=s,cr(Rl()),e=!0)}if(nx(),Mi&&_i!==Qn&&(_i=no||Math.abs(Qn-_i)<.002?Qn:Fr(_i,Qn,1-Math.pow(1-.065,t*60)),fh(fo(_i)),e=!0),qi!==zn&&(qi=no||Math.abs(zn-qi)<.003?zn:Fr(qi,zn,1-Math.pow(1-.1,t*60)),ju(fo(qi)),e=!0),e&&(rs=!1,Qe.render(ri,Ee),Qe.autoClear=!1,Qe.render(sh,Ee),Qe.autoClear=!0,ex(),document.body.classList.contains("ready")||(document.body.classList.add("ready"),dh()),la)){const i=la;la=null,setTimeout(()=>gs(i),or?0:350)}}uh();po!==null&&Mi&&(_i=po,fh(fo(_i)));if(_n)try{await Qe.compileAsync(ri,Ee)}catch(n){console.warn("shader precompile skipped",n)}ph(performance.now());
