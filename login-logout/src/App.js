import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  // ログイン状態にする関数
  const handleLogin = () => {
    setLoggedIn(true);
  };
  
  // ログアウト状態にする関数
  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="container">
      <div className="content">
        {/* ログイン状態に応じて表示を切り替える */}
        {isLoggedIn ? (
          // ログイン状態の場合
          <div>
            <h1 className="title">ログイン済みです</h1>
            <button className="button" onClick={handleLogout}>
              ログアウト
            </button>
          </div>
          ) : (
          // ログアウト状態の場合
          <div>
            <h1 className="title">ログインしてください</h1>
            <button className="button" onClick={handleLogin}>
              ログイン
            </button>
          </div>
        )}
        <span>isLoggeIn: {isLoggedIn.toString()}</span>
      </div>
    </div>
 );
}

export default App;
