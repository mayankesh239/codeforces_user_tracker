// import logo from './logo.svg';
import './App.css';
import './MyComponents/style1.css';
import Header from "./MyComponents/Header";
import About from "./MyComponents/About";
// import Home from "./MyComponents/Home";
import Layout from "./MyComponents/Layout";
import Footer from "./MyComponents/Footer";
import Rating_Change from "./MyComponents/RatingChange";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  let a, val, url, pic, html, url_rating_chanege, html_rating_change;
  function myfunction() {
    a = document.getElementById('nameid').value;
    if (a == "") {
      alert("Please enter the user handle");
    }
    else {
      url = "https://codeforces.com/api/user.info?handles=";
      val = (url + a);
      url_rating_chanege = "https://codeforces.com/api/user.rating?handle=" + a;
      getData();
    }

  }

  function getData() {
    fetch(val).then((response) => {
      return response.json();
    }).then((data) => {
      // console.log(data.result[0].rating);
      displayData(data);
    })
    fetch(url_rating_chanege).then((response) => {
      return response.json();
    }).then((data_rating_change) => {
      console.log(data_rating_change.result[data_rating_change.result.length - 1].oldRating);
      // console.log(url_rating_chanege)
      // displayData(data);
      RatingChange(data_rating_change)
    })
  }
  function displayData(data) {
    pic = data.result[0].titlePhoto;
    // console.log(pic)
    html = "<img src=\"" + pic + '\"width="300" height="169"></img><br>'
      + "Rating: " + data.result[0].rating + "<br>"
      + "Friends: " + data.result[0].friendOfCount + "<br>"
      + "Handle: " + data.result[0].handle + "<br>"
      + "Nmae: " + data.result[0].firstName + " " + data.result[0].lastName + "<br>"
      + "Contribution: " + data.result[0].contribution + "<br>"
      + "Rank: " + data.result[0].rank + "<br>"
      + "Max Rating: " + data.result[0].maxRating + "<br>"
      + "Max Rank: " + data.result[0].maxRank + "<br>"
    document.getElementById("info").innerHTML = html;
  }


  function RatingChange(data_rating_change) {
    html_rating_change = "<h4> Rating Change In The Previous 5 Contests</h4><br>"
      + "<table>"
      + "<tr>"
      + "<th>Contest Name</th>"
      + "<th>Username</th>"
      + "<th>Old Rating</th>"
      + "<th>New Rating</th>"
      + "</tr>"
      + "<tr>"
      + "<td>" + data_rating_change.result[data_rating_change.result.length - 1].contestName + "</td>"
      + "<td>" + data_rating_change.result[data_rating_change.result.length - 1].handle + "</td>"
      + "<td>" + data_rating_change.result[data_rating_change.result.length - 1].oldRating + "</td>"
      + "<td>" + data_rating_change.result[data_rating_change.result.length - 1].newRating + "</td>"
      + "</tr>"
      + "<tr>"
      + "<td>" + data_rating_change.result[data_rating_change.result.length - 2].contestName + "</td>"
      + "<td>" + data_rating_change.result[data_rating_change.result.length - 2].handle + "</td>"
      + "<td>" + data_rating_change.result[data_rating_change.result.length - 2].oldRating + "</td>"
      + "<td>" + data_rating_change.result[data_rating_change.result.length - 2].newRating + "</td>"
      + "</tr>"
      + " <tr>"
      + "<td>" + data_rating_change.result[data_rating_change.result.length - 3].contestName + "</td>"
      + "<td>" + data_rating_change.result[data_rating_change.result.length - 3].handle + "</td>"
      + "<td>" + data_rating_change.result[data_rating_change.result.length - 3].oldRating + "</td>"
      + "<td>" + data_rating_change.result[data_rating_change.result.length - 3].newRating + "</td>"
      + "</tr>"
      + " <tr>"
      + "<td>" + data_rating_change.result[data_rating_change.result.length - 4].contestName + "</td>"
      + "<td>" + data_rating_change.result[data_rating_change.result.length - 4].handle + "</td>"
      + "<td>" + data_rating_change.result[data_rating_change.result.length - 4].oldRating + "</td>"
      + "<td>" + data_rating_change.result[data_rating_change.result.length - 4].newRating + "</td>"
      + "</tr>"
      + " <tr>"
      + "<td>" + data_rating_change.result[data_rating_change.result.length - 5].contestName + "</td>"
      + "<td>" + data_rating_change.result[data_rating_change.result.length - 5].handle + "</td>"
      + "<td>" + data_rating_change.result[data_rating_change.result.length - 5].oldRating + "</td>"
      + "<td>" + data_rating_change.result[data_rating_change.result.length - 5].newRating + "</td>"
      + "</tr>"
      + "</table >"
    document.getElementById("rating_change").innerHTML = html_rating_change;
  }
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/" render={() => {
            return (
              <>
                <Layout myfunction={myfunction} />
                <Rating_Change />
              </>)
          }}>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
