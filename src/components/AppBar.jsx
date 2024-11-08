// components/Header.tsx
const StickyHeader = () => {
  return (
    <div className="bg-indigo-500 text-indigo-50 sticky top-0">
      <header>
        <ul className="list-none flex justify-center gap-4">
          <li className="p-2">Home</li>
          <li className="p-2">Blog</li>
          <li className="p-2">About</li>
          <li className="p-2">Contact</li>
        </ul>
      </header>
    </div>
  );
};

export default StickyHeader;
