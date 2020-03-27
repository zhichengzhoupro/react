* non-null assertion operator
```typescript
let y = some.expr!.thing;
```
这个expr变量肯定是不为null的 断言


* optional operator
```typescript
interface ArticleState {
    titleHelp?: string
    validateStatus?: any
    editorState?: any
    article?: Article
}
```
有的参数不是必须的
* strictNullChecks
```typescript
let x: number;
let y: number | null;
let z: number | undefined;
x;  // Error, reference not preceded by assignment
y;  // Error, reference not preceded by assignment
z;  // Ok
x = 1;
y = null;
x;  // Ok
y;  // Ok
```