import { useState } from "react";

function Folder({ handleInsertNode = () => {}, handleDeleteNode = () => {}, explorer }) {
  const [expand, setExpand] = useState(true);
  const [selected, setSelected] = useState("");
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false
  });
  const [disableAddOption, setDisableAddOption] = useState(true);

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder
    });
  };

  const SelectHandler = (e) => {
    setSelected(e.target.value);
    if (e.target.value !== "Object") {
      setDisableAddOption(true);
    } else {
      setDisableAddOption(false);
    }
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  const onDeleteFolder = (e) => {
    e.stopPropagation();
    handleDeleteNode(explorer.id);
  };

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        
        <div onClick={() => setExpand(!expand)} className="folder">
          <span>📁 {explorer.name}</span>

          <div>
            <input type="checkbox" />
            
            <select onChange={SelectHandler}>
              <option>String</option>
              <option>Object</option>
              <option>Boolean</option>
            </select>
        
            <button onClick={(e) => handleNewFolder(e, true)} disabled={disableAddOption}>
              +
            </button>
            
            <button onClick={onDeleteFolder}>Delete</button>
          </div>
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁" : "📄"}</span> 
              <input
                type="text"
                className="inputContainer__input"
                autoFocus
                onKeyDown={onAddFolder}
                onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
            </div>
          )}

          {explorer.items.map((exp) => {
            return (
              <>
            
              <Folder
                handleInsertNode={handleInsertNode}
                handleDeleteNode={handleDeleteNode}
                key={exp.id}
                explorer={exp}
              />
              
              </>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄 {explorer.name}</span>;
  }
}

export default Folder;
