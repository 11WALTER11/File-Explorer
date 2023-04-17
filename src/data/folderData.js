const explorer = {
  id: "1",
  name: "",
  isFolder: true,
  items: [
    {
      id: "2",
      name: "person",
      isFolder: true,
      items: [
        {
          id: "3",
          name: "name",
          isFolder: true,
          items: [
            {
              id: "4",
              name: "firstname",
              isFolder: true,
              items: []
            },
            {
              id: "5",
              name: "lastname",
              isFolder: true,
              items: []
            }
          ]
        },
        {
          id: "6",
          name: "age",
          isFolder: true,
          items: []
        }
      ]
    },
    {
      id: "7",
      name: "order",
      isFolder: true,
      items: []
    },
    {
      id: "8",
      name: "class",
      isFolder: true,
      items: []
    }
  ]
};

export default explorer;
