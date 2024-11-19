// import React, { useRef, useState } from "react";
// import "./css/Toolbar.css";


// const DiaryEditor = () => {
//   const editorRef = useRef(null);
//   const [lastInsertedImage, setLastInsertedImage] = useState(null);

//   // Execute text formatting commands
//   const formatText = (command, value = null) => {
//     document.execCommand(command, false, value);
//   };

//   // Handle font size change
//   const handleFontSizeChange = (e) => {
//     formatText("fontSize", e.target.value);
//   };

//   // Handle font name change
//   const handleFontNameChange = (e) => {
//     formatText("fontName", e.target.value);
//   };

//   // Handle font color change
//   const handleFontColorChange = (e) => {
//     formatText("foreColor", e.target.value);
//   };

//   // Handle image upload
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         const img = document.createElement("img");
//         img.src = event.target.result;
//         img.style.width = "100%";
//         img.style.position = "absolute";
//         img.style.cursor = "move";

//         // Add drag events
//         img.draggable = true;
//         img.addEventListener("dragstart", startDrag);
//         img.addEventListener("dragend", endDrag);

//         editorRef.current.appendChild(img);
//         setLastInsertedImage(img);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle image size change
//   const handleImageSizeChange = (e) => {
//     if (lastInsertedImage) {
//       lastInsertedImage.style.width = e.target.value;
//     }
//   };

//   // Drag start handler
//   const startDrag = (e) => {
//     const img = e.target;
//     img.style.opacity = "0.5";
//     img.dataset.startX = e.clientX - img.offsetLeft;
//     img.dataset.startY = e.clientY - img.offsetTop;
//   };

//   // Drag end handler
//   const endDrag = (e) => {
//     const img = e.target;
//     img.style.opacity = "1";
//     img.style.left = `${e.clientX - img.dataset.startX}px`;
//     img.style.top = `${e.clientY - img.dataset.startY}px`;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(editorRef.current.innerHTML); // Capture the editor content
//   };

//   return (
//     <div>
//       <div className="toolbar">
//         <select onChange={handleFontNameChange}>
//           <option value="Arial">Arial</option>
//           <option value="Courier New">Courier New</option>
//           <option value="Georgia">Georgia</option>
//           <option value="Times New Roman">Times New Roman</option>
//           <option value="Verdana">Verdana</option>
//         </select>

//         <select onChange={handleFontSizeChange}>
//           <option value="3">14px</option>
//           <option value="4">18px</option>
//           <option value="5">24px</option>
//         </select>

//         <button onClick={() => formatText("bold")}>
//           <b>B</b>
//         </button>
//         <button onClick={() => formatText("italic")}>
//           <i>I</i>
//         </button>
//         <button onClick={() => formatText("underline")}>
//           <u>U</u>
//         </button>
//         <button onClick={() => formatText("superscript")}>x<sup>2</sup></button>
//         <button onClick={() => formatText("subscript")}>x<sub>2</sub></button>
//         <button onClick={() => formatText("justifyLeft")}>Left</button>
//         <button onClick={() => formatText("justifyCenter")}>Center</button>
//         <button onClick={() => formatText("justifyRight")}>Right</button>
//         <button onClick={() => formatText("justifyFull")}>Justify</button>
//         <input type="color" onChange={handleFontColorChange} />
//         <input type="file" accept="image/*" onChange={handleImageUpload} />
//         <select onChange={handleImageSizeChange}>
//           <option value="100%">100%</option>
//           <option value="50%">50%</option>
//           <option value="25%">25%</option>
//         </select>
//       </div>

//       <form onSubmit={handleSubmit}>
//         <div
//           className="editor"
//           contentEditable="true"
//           ref={editorRef}
//           style={{
//             width: "100%",
//             height: "400px",
//             padding: "10px",
//             fontSize: "16px",
//             border: "1px solid #ccc",
//             outline: "none",
//             marginTop: "10px",
//             position: "relative",
//           }}
//         >
//           เขียนไดอารี่ของคุณที่นี่...
//         </div>
//         <button type="submit">Save</button>
//       </form>
//     </div>
//   );
// };

// export default DiaryEditor;
