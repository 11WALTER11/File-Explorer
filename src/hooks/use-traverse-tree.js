const useTraverseTree = () => {
  const insertNode = function (tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder: isFolder,
        items: [],
      });

      return tree;
    }

    let latestNode = [];
    latestNode = tree.items.map((ob) => {
      return insertNode(ob, folderId, item, isFolder);
    });

    return { ...tree, items: latestNode };
  };

  const deleteNode = function (tree, folderId) {
    if (tree.id === folderId) {
      return null;
    }

    const items = tree.items
      .map((item) => deleteNode(item, folderId))
      .filter((item) => item !== null);

    return { ...tree, items };
  };

  const renameNode = () => {};

  return { insertNode, deleteNode, renameNode };
};

export default useTraverseTree;
