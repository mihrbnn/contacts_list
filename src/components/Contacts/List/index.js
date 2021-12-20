import {useState} from "react"
function List({ contacts }) {
    const [filterText, setFilterText] = useState("")
    const [mouseHandler, setMouseHandler] = useState(false)
    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key]
                .toString()
                .toLowerCase()
                .includes(filterText.toLowerCase())
        );
    });

      
  return (
      <div>
        <input placeholder="Filter Contact" value={filterText} onChange={(e)=>setFilterText(e.target.value)} />
        <ul className="list">
            {filtered.map((contact, i) => (
                <li key={i} onMouseEnter={() => setMouseHandler(true)} onMouseLeave={() => setMouseHandler(false)}>
                    <span className="list-item">{contact.fullname}</span>
                    {mouseHandler && (
                    <span>{contact.phone_number}</span>)}
                </li>
            ))}
        </ul>
        <p>Total contacts: {filtered.length}</p>  
    </div>
  );
}

export default List;
