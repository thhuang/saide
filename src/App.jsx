import { useRef } from 'react';
import Editor from '@monaco-editor/react';
import * as Y from 'yjs';
import { WebrtcProvider } from 'y-webrtc';
// import { WebsocketProvider } from 'y-websocket';
import { MonacoBinding } from 'y-monaco';

function App() {
  const editorRef = useRef(null);

  function editorOnMount(editor) {
    editorRef.current = editor;

    const doc = new Y.Doc();
    const provider = new WebrtcProvider('room-name', doc);
    // const provider = new WebsocketProvider('wss://demos.yjs.dev', 'monaco-demo', doc);
    const type = doc.getText('monaco');

    new MonacoBinding(
      type,
      editorRef.current.getModel(),
      new Set([editorRef.current]),
      provider.awareness
    );
  }

  return (
    <Editor
      height="100vh"
      width="100vw"
      theme="vs-dark"
      defaultLanguage="cpp"
      onMount={editorOnMount}
    />
  );
}

export default App;
