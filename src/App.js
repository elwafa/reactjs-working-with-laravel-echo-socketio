import logo from './logo.svg';
import './App.css';
import testSocket from "use-socket.io-client";
function App() {

  const [socket] = testSocket('wss://abilitesbe.testenv.tech:6003',
      {
        autoConnect: false,
        //any other options
      })
  socket.emit(`subscribe`,{
    channel: `presence-Notifications.160100`,
    auth:{
    headers: {
      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMTEwZmJmYTI3NjgwZTNlOGRjZGQ1MGRhMTk5MjRiZTc3M2E3OTM0N2RmNjcxYjg4MWE4YzQ1MTRjM2Y4ODUwOTY5N2QwYjlhNWQ3YmQ4ZGQiLCJpYXQiOjE2NTE5NDUyNzIuNzk5MTY0LCJuYmYiOjE2NTE5NDUyNzIuNzk5MTY1LCJleHAiOjE2ODM0ODEyNzIuNzk2OTQsInN1YiI6IjE2MDEwMCIsInNjb3BlcyI6W119.IfhQE-hnJb8hLlZSEVsqKvkxSl3Y83MJ5Jf1PPsjxaHPq0upzdeT5vN_IAdixgws_9VMepi8niGNI5caUnA3Yt9qUAgggK1hAMrQmJm3pATOJyojFWH8qirypObRngwAv73ctcbKKO2jNM3us4pOzsvUXIh4NgWvOiN_N61bFz-_9F4aWlk7z6nm0y15XVEHjsb9c6g0j5gEMKucfWVwK2Nz3LXceeXCwBJ8vi4w4rj7Ey3Jm6FVer8hKzX-bkXpIE6IwqYtiiK5eBttjsJeuWu4qQICWA4imKNjmcWKckrbKW339QWs6PDBoOJVniwT2JAwUX7iXxPlRAOl9xIqlSsQUvRIc-h1omCOV4TAgF144AAltLj4mWwZZ3B2b3SBFE3lSpr_mMCCO9ENfZeQeviHSiR2VShjCi7dUvHd4e0QkyvCzAW8OUWdjLSVjPVQdsRDQACR8jWaPedFGucoAogse1dlRGztduN-iaYFZ85DW-U973lcYYVU_sxVBGdhNsC1ZkkJU2izDFj37BDFLAqh2QZGZSNDTZPts8A6MMrFzuCqunCbzR9CORjcJg5EapcKRkJJpAQiSiic3J4P2s9UCdx6oXOsiF-uEt5uPkWKvjMuZb8eKfCRZs1XZZmb8D2WwE_8mjvUjVDvJG73JblMwTVdG_vj-zJ3jJ2x5oo`
    }}
  })
  socket.connect()
  socket.on(`presence:subscribed`,function (here,data) {
    console.log(here,data,`for echo here`)
  })
  socket.on(`presence:joining`,function (here,data) {
    console.log(here,data,`for echo here`)
  })
  socket.on(`presence:leaving`,function (here,data) {
    console.log(here,data,`for echo here`)
  })
  socket.on(`UserNotificationsEvent`,(notify,data) => {
    console.log(notify,data,`for echo here listen to custom event`)
    });

  // for unsubscribe
  // socket.emit('unsubscribe', {
  //   channel: `presence-Notifications.160100`,
  //   auth:{
  //     headers: {
  //       Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMTEwZmJmYTI3NjgwZTNlOGRjZGQ1MGRhMTk5MjRiZTc3M2E3OTM0N2RmNjcxYjg4MWE4YzQ1MTRjM2Y4ODUwOTY5N2QwYjlhNWQ3YmQ4ZGQiLCJpYXQiOjE2NTE5NDUyNzIuNzk5MTY0LCJuYmYiOjE2NTE5NDUyNzIuNzk5MTY1LCJleHAiOjE2ODM0ODEyNzIuNzk2OTQsInN1YiI6IjE2MDEwMCIsInNjb3BlcyI6W119.IfhQE-hnJb8hLlZSEVsqKvkxSl3Y83MJ5Jf1PPsjxaHPq0upzdeT5vN_IAdixgws_9VMepi8niGNI5caUnA3Yt9qUAgggK1hAMrQmJm3pATOJyojFWH8qirypObRngwAv73ctcbKKO2jNM3us4pOzsvUXIh4NgWvOiN_N61bFz-_9F4aWlk7z6nm0y15XVEHjsb9c6g0j5gEMKucfWVwK2Nz3LXceeXCwBJ8vi4w4rj7Ey3Jm6FVer8hKzX-bkXpIE6IwqYtiiK5eBttjsJeuWu4qQICWA4imKNjmcWKckrbKW339QWs6PDBoOJVniwT2JAwUX7iXxPlRAOl9xIqlSsQUvRIc-h1omCOV4TAgF144AAltLj4mWwZZ3B2b3SBFE3lSpr_mMCCO9ENfZeQeviHSiR2VShjCi7dUvHd4e0QkyvCzAW8OUWdjLSVjPVQdsRDQACR8jWaPedFGucoAogse1dlRGztduN-iaYFZ85DW-U973lcYYVU_sxVBGdhNsC1ZkkJU2izDFj37BDFLAqh2QZGZSNDTZPts8A6MMrFzuCqunCbzR9CORjcJg5EapcKRkJJpAQiSiic3J4P2s9UCdx6oXOsiF-uEt5uPkWKvjMuZb8eKfCRZs1XZZmb8D2WwE_8mjvUjVDvJG73JblMwTVdG_vj-zJ3jJ2x5oo`
  //     }}
  // });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
