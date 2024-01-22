//项目的根组件
//App -> index.js -> public/index.html(root)

const count = 100;
const list = [
  { id: 1001, name: "Vue" },
  { id: 1002, name: "React" },
  { id: 1003, name: "Angular" },
];
const isLogin = true;
const articleType = 1;
function getName() {
  return "jack";
}
function getArticleTem() {
  if (articleType === 0) {
    return <div>我是无图模式</div>;
  } else if (articleType === 1) {
    return <div>我是单图模式</div>;
  } else {
    return <div>我是三图模式</div>;
  }
}
function App() {
  return (
    <div className="App">
      this is App
      {"this is message"}
      {count}
      {getName()}
      {new Date().getDate()}
      <div style={{ color: "red" }}>this is div</div>
      {/* 渲染列表 */}
      {/* map 循环哪个结构 return结构 */}
      {/* 注意事项:加上一个独一无二的key 字符串或者number id*/}
      {/* key的作用:React框架内部使用 提升更新性能的 */}
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      {/* 条件渲染 */}
      {isLogin && <span>this is span</span>}
      {isLogin ? <span>jack</span> : <span>loading....</span>}
      {/* 调用函数显示不同的模板 */}
      {getArticleTem()}
    </div>
  );
}

export default App;
