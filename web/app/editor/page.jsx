import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('./Editor'), {
  ssr: false,
});

function Page() {
  return (
    <div>
      <Editor />
    </div>
  );
}

export default Page;
