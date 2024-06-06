import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div className="container">
      <div className="content">
        {/* ログイン状態に応じて表示を切り替える */}
      </div>
    </div>
 );
}

export default App;
