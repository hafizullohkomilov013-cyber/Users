import React from "react";

const users = [
  {
    id:1,
    img: "img/user1.jpg",
    name: "Ali",
    lastName: "Karimov",
    phone: "+998901234501",
    telegram: "https://t.me/alikarimov",
    instagram: "https://instagram.com/alikarimov",
  },
  {
    id: 2,
    img: "img/user2.jpg",
    name: "Vali",
    lastName: "Rustamov",
    phone: "+998901234502",
    telegram: "https://t.me/valirustamov",
    instagram: "https://instagram.com/valirustamov",
  },
  {
    id: 3,
    img: "img/user3.jpg",
    name: "Dilshod",
    lastName: "Islomov",
    phone: "+998901234503",
    telegram: "https://t.me/dilshodislomov",
    instagram: "https://instagram.com/dilshodislomov",
  },
  {
    id: 4,
    img: "img/user4.jpg",
    name: "Aziza",
    lastName: "Qodirova",
    phone: "+998901234504",
    telegram: "https://t.me/azizaqodirova",
    instagram: "https://instagram.com/azizaqodirova",
  },
  {
    id: 5,
    img: "img/user5.jpg",
    name: "Bekzod",
    lastName: "Tursunov",
    phone: "+998901234505",
    telegram: "https://t.me/bekzodtursunov",
    instagram: "https://instagram.com/bekzodtursunov",
  },
  {
    id: 6,
    img: "img/user6.jpg",
    name: "Malika",
    lastName: "Saidova",
    phone: "+998901234506",
    telegram: "https://t.me/malikasaidova",
    instagram: "https://instagram.com/malikasaidova",
  },
  {
    id: 7,
    img: "img/user7.jpg",
    name: "Jasur",
    lastName: "Nematov",
    phone: "+998901234507",
    telegram: "https://t.me/jasurnematov",
    instagram: "https://instagram.com/jasurnematov",
  },
  {
    id: 8,  
    img: "img/user8.jpg",
    name: "Nigina",
    lastName: "Abdullayeva",
    phone: "+998901234508",
    telegram: "https://t.me/niginaabdullayeva",
    instagram: "https://instagram.com/niginaabdullayeva",
  },
  {
    id: 9,
    img: "img/user9.jpg",
    name: "Sardor",
    lastName: "Usmonov",
    phone: "+998901234509",
    telegram: "https://t.me/sardorusmonov",
    instagram: "https://instagram.com/sardorusmonov",
  },
];

function Main() {
  return (
    <main>
      <h1 className="user-list-title">User List</h1>
      <ul className="user-list">
        {users.map((user, index) => (
          <li className="user-item" key={index}>
              <img
                className="user-img"
                src={user.img}
                alt={`${user.name} ${user.lastName}`}
              />
              <button id="delete__btn" className="user__delete--btn">
                <i className="fa-solid fa-broom"></i>
              </button>
            <h2>{`${user.name} ${user.lastName}`}</h2>
            <div>
              <p>Phone: {user.phone}</p>
              <p>
                Telegram: <a href={user.telegram}>{user.telegram}</a>
              </p>
              <p>
                Instagram: <a href={user.instagram}>{user.instagram}</a>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

document.addEventListener("click", (e) => {  
  if (e.target.tagName === "I") {
    e.preventDefault();
    console.log(e.target.parentElement.parentElement);
    
    e.target.parentElement.parentElement.classList.add("hidden");
  }
});

export default Main;
