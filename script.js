// select buttons 
const sortDateBtn = document.getElementById("sort-date");
const sortTimeBtn = document.getElementById("sort-time");
const sortPlaceBtn = document.getElementById("sort-place");

//active filter buttons 
function setActiveFilter(btn){
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
}

// select the card container 
const container = document.querySelector("main");

// get all cards 
function getCards(){
    return Array.from(container.querySelectorAll(".card"));
}

// SORT BY DATE 
sortDateBtn.addEventListener("click", () =>{
    setActiveFilter(sortDateBtn);
    const cards = getCards();

    cards.sort((a, b) => {
        const dateA = new Date(a.querySelector("p").textContent.replace("Date:", ""));
        const sortB = new Date(b.querySelector("p").textContent.replace("Date:", ""));
        return dateB - dateA;
    });

    container.append(...cards);
});

// SORT BY TIME
sortTimeBtn.addEventListener("click", () => {
    setActiveFilter(sortTimeBtn);

    const cards = getCards();

    cards.sort((a, b) => {
    const timeA = a.querySelectorAll("p")[1].textContent.replace("Time:", "").trim();
    const timeB = b.querySelectorAll("p")[1].textContent.replace("Time:", "").trim();
    const [minA, secA] = timeA.split(":").map(parseFloat);
    const [minB, secB] = timeB.split(":").map(parseFloat);
    return (minA * 60 + secA) - (minB * 60 + secB);
});

    container.append(...cards);
});

// SORT BY PLACE
sortPlaceBtn.addEventListener("click", () => {
    setActiveFilter(sortPlaceBtn);

    const cards = getCards();

    cards.sort((a, b) => {
        const placeA = parseInt(a.querySelectorAll("p")[2].textContent.replace("Place:", ""));
        const placeB = parseInt(b.querySelectorAll("p")[2].textContent.replace("Place:", ""));
        return placeA - placeB;
    });

    container.append(...cards);
});