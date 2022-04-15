let arr;
async function Getdata() {
  try {
    let res = await fetch(
      "https://api.imgur.com/3/gallery/hot/viral/month/2?showViral=true&mature=true&album_previews=true",
      {
        method: "GET", // or 'PUT'
        headers: {
          Authorization: "Client-ID b9904d4c9dea809",
        },
      }
    );
    let data = await res.json();
    console.log(data);
    // appendData2(data.data);
    arr = data.data;
    loadData();
  } catch (err) {
    console.log(err);
  }
}
Getdata();
let i = 0;
function loadData() {
  let x = 1;
  while (x <= 24 && i < arr.length) {
    appendData2(arr[i]);
    i++;
    x++;
  }
}

function appendData2(ele) {
  let div = document.createElement("div");
  div.className = "box";
  let img =
    ele.images && ele.images[0].link.includes(".mp4")
      ? document.createElement("video")
      : ele.link.includes(".mp4")
      ? document.createElement("video")
      : document.createElement("img");
  img.src = ele.images ? ele.images[0].link : ele.link;

  img.setAttribute("loading", "lazy");

  img.muted = true;
  img.setAttribute("autoplay", false);

  img.alt = "image";
  let p = document.createElement("p");
  p.innerText = ele.title;
  let upp = document.createElement("p");
  upp.innerText = ele.ups;
  let downp = document.createElement("p");
  downp.innerText = ele.downs;
  let views = document.createElement("p");
  views.innerText =
    ele.views > 10000 ? Math.floor(ele.views / 1000) + "K" : ele.views;
  let up = document.createElement("img");

  up.src =
    "https://img.icons8.com/external-those-icons-fill-those-icons/24/000000/external-up-arrows-those-icons-fill-those-icons-2.png";
  up.setAttribute("class", "icon");
  let down = document.createElement("img");
  down.src = "https://img.icons8.com/metro/26/000000/down--v1.png";
  down.setAttribute("class", "icon");
  let eye = document.createElement("img");
  eye.src = "https://img.icons8.com/material-rounded/24/000000/visible.png";
  eye.setAttribute("class", "icon");
  let div2 = document.createElement("div");
  let div3 = document.createElement("div");
  div3.append(p, div2);
  div3.setAttribute("class", "desc");

  div2.style.display = "flex";
  div2.append(up, upp, down, downp, eye, views);
  div.append(img, div3);
  document.querySelector(".grid").append(div);
}

function debounce(dc, delay) {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb();
    }, delay);
  };
}

window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    debounce(loadData, 1000);
  }
});
