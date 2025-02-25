// const cardInput = document.getElementById("cardInput");
// const card = document.querySelector(".todo-card");

// function createCard() {
//   if (cardInput.value == "") {
//     alert("Task Entry Empty");
//     return;
//   }

//   let checkList = `<div class="checkList"><input type="checkbox" /></div>`;

//   let todoCardMain = `<div class="todo-card-main">
//             <div class="title">${cardInput.value}</div>
//             <div class="edit-icon">
//               <button class="edit-btn">
//                 <svg
//                 height="20px"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//               >
//                 <title>pencil</title>
//                 <path
//                   d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"
//                 />
//               </svg>
//               </button>
//             </div>
//             <div class="close-icon">
//               <button class="close-btn">
//                 <svg
//                   height="20px"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                 >
//                   <title>close-thick</title>
//                   <path
//                     d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>`;

//   var div = document.createElement("div");
//   div.classList.add("card");
//   card.appendChild(div);
//   div.appendChild(checkList);
//   div.document.body.append(todoCardMain);

//   // card.innerHTML += `<div class="card" >
//   //         <div class="checkList"><input type="checkbox" /></div>
//   //         <div class="todo-card-main">
//   //           <div class="title">${cardInput.value}</div>
//   //           <div class="edit-icon">
//   //             <button class="edit-btn">
//   //               <svg
//   //               height="20px"
//   //               xmlns="http://www.w3.org/2000/svg"
//   //               viewBox="0 0 24 24"
//   //             >
//   //               <title>pencil</title>
//   //               <path
//   //                 d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"
//   //               />
//   //             </svg>
//   //             </button>
//   //           </div>
//   //           <div class="close-icon">
//   //             <button class="close-btn">
//   //               <svg
//   //                 height="20px"
//   //                 xmlns="http://www.w3.org/2000/svg"
//   //                 viewBox="0 0 24 24"
//   //               >
//   //                 <title>close-thick</title>
//   //                 <path
//   //                   d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z"
//   //                 />
//   //               </svg>
//   //             </button>
//   //           </div>
//   //         </div>
//   //       </div>`;
// }

// export default createCard;

const cardInput = document.getElementById("cardInput");
const listContainer = document.querySelector(".todo-list-container");

function addTask() {
  if (cardInput.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = cardInput.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  cardInput.value = '';
  saveList();
}

listContainer.addEventListener("click" , (e)=>{
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveList();
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveList();
  }
} , false)

function saveList(){
  localStorage.setItem("data" , listContainer.innerHTML);
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

export default addTask;
