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
      //console.log(data);
      appendData(data.data);
    } catch (err) {
      console.log(err);
    }
  }