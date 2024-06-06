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
      </div>
    </div>
 );
}

export default App;
