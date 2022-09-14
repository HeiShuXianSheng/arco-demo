import { Pagination } from "@arco-design/web-react";
import './App.css';

function App() {
  return (
    <div className="App">
      {/* empty 的作用是将 Pagination 组件撑到页面的下方。 */}
      <div className='empty'></div>

      {/* 发现 Pagination 组件位于页面下半部分时，页面上改变每页展示条目(PageSize)时会闪现页面右侧滚动条 */}
      <Pagination total={50} showTotal showJumper sizeCanChange />
    </div>
  );
}

export default App;
