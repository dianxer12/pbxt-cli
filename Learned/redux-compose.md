# 简单写法

```js
function compose(...funcs){
    return function(...args){
        return funcs.reduce((a,b) => {a(b(...args))});
    }
}
```
# 简便写法 #
## 一些解释 ##

*  第一步， a=f1, b=f2 经过reduce的计算， 
*  第二部， a为第一步的结果，就是（...args)=>{a(b(...args))}
   b 就是f3. 执行方法，f3(...args)就是原来a(b(...args))中的...args, 所以结果位f1(f2(f3(...args)))
*  后面以此类推
```js
function compose(...funcs){
    return funcs.reduce((a,b) => (...args) => {a(b(...args))});
}
```

# 普通写法
```js
function compose(...funcs){
    return function(...args){
        console.log(funcs);
        let result = 0;
        for(let i=funcs.length-1;i>=0;i--){
            console.log('i=',i);
            console.log('array length=',funcs.length-1);
            let func = funcs[i];
            i == funcs.length -1 ?
                result = func(...args):
                result = func(result);
        }
        return result;
    }
}
```