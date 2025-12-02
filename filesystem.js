// filesystem.js
// Render the nested fileSystem object as a tree using DOM methods

const container = document.getElementById("file-system-root");

function renderNode(node) {
  const li = document.createElement("li");
  li.classList.add(node.type);

  if (node.type === "folder") {
    const title = document.createElement("span");
    title.textContent = node.name;
    title.classList.add("folder-name");


    title.addEventListener("click", () => {
      ul.style.display = ul.style.display === "none" ? "block" : "none";
    });

    li.appendChild(title);

    const ul = document.createElement("ul");
    node.children?.forEach(child => {
      ul.appendChild(renderNode(child));
    });

    li.appendChild(ul);
  } else {
    
    li.textContent = node.name;
  }

  return li;
}

function renderFileSystem(rootData) {
  const ul = document.createElement("ul");
  ul.appendChild(renderNode(rootData));
  container.appendChild(ul);
}

renderFileSystem(fileSystem);
