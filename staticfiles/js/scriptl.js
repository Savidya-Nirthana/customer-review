const itemData = JSON.parse(document.getElementById("item-data").textContent);

console.log(itemData);
//for display item from js object and back button functionality
function renderItems() {
  const itemsArea = document.querySelector(".itemsArea");
  itemsArea.innerHTML = "";

  itemData.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("itemSelectionArea");

    const imgElem = document.createElement("img");
    imgElem.src = item.imageUrl;
    imgElem.alt = item.itemName;
    imgElem.classList.add("itemPicture");

    const itemNameElem = document.createElement("span");
    itemNameElem.classList.add("itemName");
    itemNameElem.textContent = item.itemName;

    const lineBreak1 = document.createElement("br");
    const lineBreak2 = document.createElement("br");

    const itemDescriptionElem = document.createElement("span");
    itemDescriptionElem.classList.add("itemDescription");
    itemDescriptionElem.textContent = item.description;

    const commentCountElem = document.createElement("span");
    commentCountElem.classList.add("commentCount");
    commentCountElem.textContent = "Total Comments : " + item.commentCount;

    const commentTextarea = document.createElement("textarea");
    commentTextarea.classList.add("commentSection");
    commentTextarea.placeholder = "Enter Your Comment";

    const addReviewBtn = document.createElement("buttom");
    addReviewBtn.classList.add("addReview");
    addReviewBtn.textContent = "Add Review";
    addReviewBtn.onclick = () =>
      takeComment(item.id, commentTextarea.value, rangeInput.value);

    const addStatusBtn = document.createElement("button");
    addStatusBtn.classList.add("showStatus");
    addStatusBtn.textContent = "See Reviews";
    addStatusBtn.onclick = () =>
      showStatus(item.itemName, item.imageUrl, item.description);

    const rangeInput = document.createElement("input");
    rangeInput.classList.add("rangeMeter");
    rangeInput.type = "range";
    rangeInput.value = "50";

    itemDiv.appendChild(imgElem);
    itemDiv.appendChild(itemNameElem);
    itemDiv.appendChild(lineBreak1);
    itemDiv.appendChild(itemDescriptionElem);
    itemDiv.appendChild(lineBreak2);

    itemDiv.appendChild(commentCountElem);
    itemDiv.appendChild(commentTextarea);
    itemDiv.appendChild(addReviewBtn);
    itemDiv.appendChild(addStatusBtn);
    itemDiv.appendChild(rangeInput);

    itemsArea.appendChild(itemDiv);
  });
}

//add comment button
function takeComment(commentedId, comment, rangeVal) {
  itemData.forEach((item) => {
    if (item.id == commentedId) {
      item.commentCount++;
      alert("Thanks For Your Comment !");
      renderItems();

      item.reviewInfo.push({
        commentTxt: comment,
        value: rangeVal,
      });
    }
  });
}

//search button
function search() {
  const searchItm = document.getElementsByClassName("searchArea");
  searchItmValue = searchItm[0].value.toLowerCase();

  const itemsArea = document.querySelector(".itemsArea");
  itemsArea.innerHTML = "";

  itemData.forEach((item) => {
    if (item.itemName.toLowerCase() == searchItmValue) {
      console.log("ok");
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("itemSelectionArea");

      const imgElem = document.createElement("img");
      imgElem.src = item.imageUrl;
      imgElem.alt = item.itemName;
      imgElem.classList.add("itemPicture");

      const itemNameElem = document.createElement("span");
      itemNameElem.classList.add("itemName");
      itemNameElem.textContent = item.itemName;

      const lineBreak1 = document.createElement("br");
      const lineBreak2 = document.createElement("br");

      const itemDescriptionElem = document.createElement("span");
      itemDescriptionElem.classList.add("itemDescription");
      itemDescriptionElem.textContent = item.description;

      const commentCountElem = document.createElement("span");
      commentCountElem.classList.add("commentCount");
      commentCountElem.textContent = "Total Comments : " + item.commentCount;

      const commentTextarea = document.createElement("textarea");
      commentTextarea.classList.add("commentSection");
      commentTextarea.placeholder = "Enter Your Comment";

      const addReviewBtn = document.createElement("buttom");
      addReviewBtn.classList.add("addReview");
      addReviewBtn.textContent = "Add Review";
      addReviewBtn.onclick = () =>
        takeComment(item.id, commentTextarea.value, rangeInput.value);

      const addStatusBtn = document.createElement("button");
      addStatusBtn.classList.add("showStatus");
      addStatusBtn.textContent = "See Reviews";
      addStatusBtn.onclick = () =>
        showStatus(item.itemName, item.imageUrl, item.description);

      const rangeInput = document.createElement("input");
      rangeInput.classList.add("rangeMeter");
      rangeInput.type = "range";
      rangeInput.value = "50";

      itemDiv.appendChild(imgElem);
      itemDiv.appendChild(itemNameElem);
      itemDiv.appendChild(lineBreak1);
      itemDiv.appendChild(itemDescriptionElem);
      itemDiv.appendChild(lineBreak2);

      itemDiv.appendChild(commentCountElem);
      itemDiv.appendChild(commentTextarea);
      itemDiv.appendChild(addReviewBtn);
      itemDiv.appendChild(addStatusBtn);
      itemDiv.appendChild(rangeInput);

      itemsArea.appendChild(itemDiv);
      document.addEventListener("DOMContentLoaded", renderItems);
    }
  });
}

//show status button
function showStatus(name, url, description) {
  const itemsArea = document.querySelector(".itemsArea");
  itemsArea.innerHTML = "";

  const itemDiv = document.createElement("div");
  itemDiv.classList.add("itemSelectionAreaReview");

  const imgElem = document.createElement("img");
  imgElem.src = url;
  imgElem.alt = name;
  imgElem.classList.add("itemPicture");

  const itemNameElem = document.createElement("span");
  itemNameElem.classList.add("itemName");
  itemNameElem.textContent = name;

  const lineBreak1 = document.createElement("br");

  const itemDescriptionElem = document.createElement("span");
  itemDescriptionElem.classList.add("itemDescription");
  itemDescriptionElem.textContent = description;

  itemDiv.appendChild(imgElem);
  itemDiv.appendChild(itemNameElem);
  itemDiv.appendChild(lineBreak1);
  itemDiv.appendChild(itemDescriptionElem);
  itemsArea.appendChild(itemDiv);

  itemData.forEach((item) => {
    item.reviewInfo.forEach((reviewDet) => {
      const rendComments = document.createElement("div");
      rendComments.classList.add("rendComments");

      const CommentsTxt = document.createElement("span");
      CommentsTxt.classList.add("renderCommentsTxt");
      CommentsTxt.innerHTML = "Comment : <br /> " + reviewDet.commentTxt;

      const lineBreak2 = document.createElement("br");

      const CommentsVal = document.createElement("span");
      CommentsVal.classList.add("rendCommentsVal");
      CommentsVal.innerHTML = "Score : <br />" + reviewDet.value;

      itemsArea.appendChild(rendComments);
      rendComments.appendChild(CommentsTxt);
      rendComments.appendChild(lineBreak2);
      rendComments.appendChild(CommentsVal);
    });
  });
}

document.addEventListener("DOMContentLoaded", renderItems);
