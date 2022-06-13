const contacts = document.getElementsByClassName("contacts")[0];
const stickyHeader = document.getElementsByClassName("stickyHeader")[0];
const contactHeight = 18;
function addContacts(n, start) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < n; i++) {
    const child = document.createElement("div");
    child.textContent = start + i;
    child.classList.add("contact");
    fragment.appendChild(child);
  }
  
  contacts.appendChild(fragment);
}

contacts.addEventListener("scroll", () => {
  const items = contacts.getElementsByClassName("contact").length;
  
  let topItemIndex = Math.floor(contacts.scrollTop / contactHeight);
  //Условие подгрузки новых контактов
  if(topItemIndex + 20 > items){
     addContacts(20, items);
  }
  
  if (topItemIndex !== -1) {
    stickyHeader.textContent = topItemIndex;
  }
});

addContacts(40, 0);
