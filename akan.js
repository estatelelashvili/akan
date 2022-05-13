fetch("./books.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });

function appendData(data) {
  const header = document.createElement("header");
  const heading = document.createElement("h1");
  const container = document.createElement("div");
  container.className = "container";
  heading.setAttribute("id", "heading");
  heading.innerHTML = "Collection of the Finest Books";
  let fragment = new DocumentFragment();
  header.append(heading);
  fragment.append(header);
  for (var i = 0; i < data.length; i++) {
    const wrapper = document.createElement("div");
    const info = document.createElement("div");
    const card = document.createElement("div");

    const image = document.createElement("img");
    const title = document.createElement("h4");
    const author = document.createElement("h5");
    const price = document.createElement("span");

    wrapper.className = "wrapper";
    info.className = "info";
    card.className = "card";
    price.className = "price";

    title.className = "title";
    author.className = "author";
    title.innerHTML = data[i].title;
    author.innerHTML = "Author: " + data[i].author;
    price.innerHTML = "price: " + data[i].price;
    image.src = data[i].imageLink;
    card.appendChild(image);
    info.appendChild(title);
    info.appendChild(author);
    info.appendChild(price);

    card.appendChild(info);
    wrapper.appendChild(card);
    container.appendChild(wrapper);
    fragment.append(container);
    document.body.append(fragment);
  }
}
