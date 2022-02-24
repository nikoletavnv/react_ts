import React from "react";

import Editor from "@monaco-editor/react";

const App = (): any => {
  return (
    <div>
      <h1>Hello World</h1>
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
      />
    </div>
  );
};

export default App;
