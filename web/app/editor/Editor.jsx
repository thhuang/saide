'use client';
import { useRef } from 'react';
import { Editor as MonacoEditor } from '@monaco-editor/react';
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';
import { MonacoBinding } from 'y-monaco';

function Editor() {
  const editorRef = useRef(null);

  function editorOnMount(editor) {
    editorRef.current = editor;

    const doc = new Y.Doc();
    const provider = new WebsocketProvider(
      'http://127.0.0.1:13701',
      'monaco-demo',
      doc
    );
    const type = doc.getText('monaco');

    new MonacoBinding(
      type,
      editorRef.current.getModel(),
      new Set([editorRef.current]),
      provider.awareness
    );
  }

  return (
    <MonacoEditor
      height="100vh"
      width="100vw"
      theme="vs-dark"
      defaultLanguage="python"
      onMount={editorOnMount}
    />
  );
}

export default Editor;
