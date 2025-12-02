// Simple nested file system model

const fileSystem = {
  type: "folder",
  name: "root",
  children: [
    {
      type: "folder",
      name: "Documents",
      children: [
        { type: "file", name: "resume.pdf" },
        { type: "file", name: "project-proposal.docx" }
      ]
    },
    {
      type: "folder",
      name: "Pictures",
      children: [
        { type: "file", name: "vacation.jpg" },
        { type: "file", name: "family.png" }
      ]
    },
    {
      type: "folder",
      name: "Code",
      children: [
        {
          type: "folder",
          name: "Web-design",
          children: [
            { type: "file", name: "index.html" },
            { type: "file", name: "styles.css" },
            { type: "file", name: "main.js" }
          ]
        }
      ]
    }
  ]
};
