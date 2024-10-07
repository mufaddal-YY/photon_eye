export default {
    name: "locations",
    title: "Locations",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "address",
        title: "Address",
        type: "string",
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true, // <-- Defaults to false
        },
      },
      {
        name: "link",
        title: "link",
        type: "string",
      },
    ],
  };
  