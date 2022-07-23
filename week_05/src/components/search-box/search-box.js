export function SearchBox({ onChange, value}) {
  return (
    <div className="searchbox">
      <input
        
        className="searchbox-input"
        placeholder="Ürünlerde veya kategorilerde ara..."
        onChange={onChange}
      />
      <span className="material-symbols-outlined">search</span>
    </div>
  )
}