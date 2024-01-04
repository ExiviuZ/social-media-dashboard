import { useState } from "react";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const body = document.querySelector("body");
  if (isDarkMode) {
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
  }
  return (
    <>
      <div className={`pattern ${isDarkMode ? "dark" : "light"}`}></div>
      <main>
        <section className="social-media">
          <div className={`social-media top ${isDarkMode ? "dark" : "light"}`}>
            <div>
              <h1>Social Media Dashboard</h1>
              <p>Total Followers: 23,004</p>
            </div>
            <div>
              {/* <span>Dark Mode</span>
              <button onClick={() => setIsDarkMode(!isDarkMode)}>
                Trigger
              </button> */}
              <input
                type="checkbox"
                id="switch"
                onChange={() => setIsDarkMode(!isDarkMode)}
              />
              <label for="switch">Toggle</label>
            </div>
          </div>
          <div className="wrap">
            <div
              className={`social-media-card card facebook ${
                isDarkMode ? "dark" : "light"
              }`}
            >
              <div>
                <img src="images/icon-facebook.svg" />
                <span className={`username ${isDarkMode ? "dark" : "light"}`}>
                  @nathanf
                </span>
              </div>
              <div>
                <p className={`follows-count ${isDarkMode ? "dark" : "light"}`}>
                  1987
                </p>
                <p className={`label ${isDarkMode ? "dark" : "light"}`}>
                  Followers
                </p>
              </div>
              <div>
                <img src="images/icon-up.svg" />{" "}
                <span className="up">12 Today</span>
              </div>
            </div>
            <div
              className={`social-media-card card twitter ${
                isDarkMode ? "dark" : "light"
              }`}
            >
              <div>
                <img src="images/icon-twitter.svg" />
                <span className={`username ${isDarkMode ? "dark" : "light"}`}>
                  @nathanf
                </span>
              </div>
              <div>
                <p className={`follows-count ${isDarkMode ? "dark" : "light"}`}>
                  1044
                </p>
                <p className={`label ${isDarkMode ? "dark" : "light"}`}>
                  Followers
                </p>
              </div>
              <div>
                <img src="images/icon-up.svg" />{" "}
                <span className="up">99 Today</span>
              </div>
            </div>
            <div
              className={`social-media-card card instagram ${
                isDarkMode ? "dark" : "light"
              }`}
            >
              <div>
                <img src="images/icon-instagram.svg" />
                <span className={`username ${isDarkMode ? "dark" : "light"}`}>
                  @realnathanf
                </span>
              </div>
              <div>
                <p className={`follows-count ${isDarkMode ? "dark" : "light"}`}>
                  11k
                </p>
                <p className={`label ${isDarkMode ? "dark" : "light"}`}>
                  Followers
                </p>
              </div>
              <div>
                <img src="images/icon-up.svg" />{" "}
                <span className="up">1099 Today</span>
              </div>
            </div>
            <div
              className={`social-media-card card youtube ${
                isDarkMode ? "dark" : "light"
              }`}
            >
              <div>
                <img src="images/icon-youtube.svg" />
                <span className={`username ${isDarkMode ? "dark" : "light"}`}>
                  Nathan F.
                </span>
              </div>
              <div>
                <p className={`follows-count ${isDarkMode ? "dark" : "light"}`}>
                  8239
                </p>
                <p className={`label ${isDarkMode ? "dark" : "light"}`}>
                  Subscribers
                </p>
              </div>
              <div>
                <img src="images/icon-down.svg" />{" "}
                <span className="down">144 Today</span>
              </div>
            </div>
          </div>
        </section>
        <section className="statistics">
          <div className={`statistics top ${isDarkMode ? "dark" : "light"}`}>
            <h2>Overview - Today</h2>
          </div>
          <div className="wrap">
            <div
              className={`statistics-card card ${
                isDarkMode ? "dark" : "light"
              }`}
            >
              <div>
                <span
                  className={`overview-headings ${
                    isDarkMode ? "dark" : "light"
                  }`}
                >
                  Page Views
                </span>
                <img src="images/icon-facebook.svg" />
              </div>
              <div>
                <span
                  className={`statistics-count ${
                    isDarkMode ? "dark" : "light"
                  }`}
                >
                  87
                </span>
                <span>
                  <img src="images/icon-up.svg" />{" "}
                  <span className="up">3%</span>
                </span>
              </div>
            </div>
            <div
              className={`statistics-card card ${
                isDarkMode ? "dark" : "light"
              }`}
            >
              <div>
                <span
                  className={`overview-headings ${
                    isDarkMode ? "dark" : "light"
                  }`}
                >
                  Likes
                </span>
                <img src="images/icon-facebook.svg" />
              </div>
              <div>
                <span
                  className={`statistics-count ${
                    isDarkMode ? "dark" : "light"
                  }`}
                >
                  52
                </span>
                <span>
                  <img src="images/icon-down.svg" />{" "}
                  <span className="down">2%</span>
                </span>
              </div>
            </div>
            <div
              className={`statistics-card card ${
                isDarkMode ? "dark" : "light"
              }`}
            >
              <div>
                <span
                  className={`overview-headings ${
                    isDarkMode ? "dark" : "light"
                  }`}
                >
                  Likes
                </span>
                <img src="images/icon-instagram.svg" />
              </div>
              <div>
                <span
                  className={`statistics-count ${
                    isDarkMode ? "dark" : "light"
                  }`}
                >
                  5462
                </span>
                <span>
                  <img src="images/icon-up.svg" />{" "}
                  <span className="up">2257%</span>
                </span>
              </div>
            </div>
            <div
              className={`statistics-card card ${
                isDarkMode ? "dark" : "light"
              }`}
            >
              <div>
                <span
                  className={`overview-headings ${
                    isDarkMode ? "dark" : "light"
                  }`}
                >
                  Profile Views
                </span>
                <img src="images/icon-instagram.svg" />
              </div>
              <div>
                <span
                  className={`statistics-count ${
                    isDarkMode ? "dark" : "light"
                  }`}
                >
                  52k
                </span>
                <span>
                  <img src="images/icon-up.svg" />{" "}
                  <span className="up">1375%</span>
                </span>
              </div>
            </div>
            <div
              className={`statistics-card card ${
                isDarkMode ? "dark" : "light"
              }`}
            >
              <div>
                <span
                  className={`overview-headings ${
                    isDarkMode ? "dark" : "light"
                  }`}
                >
                  Retweets
                </span>
                <img src="images/icon-twitter.svg" />
              </div>
              <div>
                <span
                  className={`statistics-count ${
                    isDarkMode ? "dark" : "light"
                  }`}
                >
                  117
                </span>
                <span>
                  <img src="images/icon-up.svg" />{" "}
                  <span className="up">303%</span>
                </span>
              </div>
            </div>
            <div
              className={`statistics-card card ${
                isDarkMode ? "dark" : "light"
              }`}
            >
              <div>
                <span
                  className={`overview-headings ${
                    isDarkMode ? "dark" : "light"
                  }`}
                >
                  Likes
                </span>
                <img src="images/icon-twitter.svg" />
              </div>
              <div>
                <span
                  className={`statistics-count ${
                    isDarkMode ? "dark" : "light"
                  }`}
                >
                  507
                </span>
                <span>
                  <img src="images/icon-up.svg" />{" "}
                  <span className="up">553%</span>
                </span>
              </div>
            </div>
            <div
              className={`statistics-card card ${
                isDarkMode ? "dark" : "light"
              }`}
            >
              <div>
                <span
                  className={`overview-headings ${
                    isDarkMode ? "dark" : "light"
                  }`}
                >
                  Likes
                </span>
                <img src="images/icon-youtube.svg" />
              </div>
              <div>
                <span
                  className={`statistics-count ${
                    isDarkMode ? "dark" : "light"
                  }`}
                >
                  107
                </span>
                <span>
                  <img src="images/icon-down.svg" />{" "}
                  <span className="down">19%</span>
                </span>
              </div>
            </div>
            <div
              className={`statistics-card card ${
                isDarkMode ? "dark" : "light"
              }`}
            >
              <div>
                <span
                  className={`overview-headings ${
                    isDarkMode ? "dark" : "light"
                  }`}
                >
                  Total Views
                </span>
                <img src="images/icon-youtube.svg" />
              </div>
              <div>
                <span
                  className={`statistics-count ${
                    isDarkMode ? "dark" : "light"
                  }`}
                >
                  1407
                </span>
                <span>
                  <img src="images/icon-down.svg" />{" "}
                  <span className="down">12%</span>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
