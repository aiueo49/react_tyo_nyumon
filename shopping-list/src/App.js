import './App.css';

function App() {
  // ショッピングリスト
  const shoppingList = [
    { id: 1, name: 'Reactシューズ 20XX限定バージョン'},
    { id: 2, name: 'Reactソーダ React Tシャツ オレンジ味'},
    { id: 3, name: 'React Tシャツ Mondayモデル'},
  ];
  // map関数
  const listItems = shoppingList.map((item) => (
    <li key={item.id}>{item.name}</li>
  ));

  return (
    <div className="container">
      <ul>{listItems}</ul>
    </div>
 );
}

export default App;
