import { useState } from "react";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/use-traverse-tree";
import "./styles.css";
import explorer from "./data/folderData";

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode, deleteNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  const handleDeleteNode = (folderId) => {
    const finalTree = deleteNode(explorerData, folderId);
    setExplorerData(finalTree);
  };

  return (
    <div className="App">
      <Folder
        handleInsertNode={handleInsertNode}
        handleDeleteNode={handleDeleteNode}
        explorer={explorerData}
      />
    </div>
  );
}
