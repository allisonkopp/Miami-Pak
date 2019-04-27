import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1>About This Project</h1>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <h2 class="abouttext">
              MiamiPak Miami’s food is its staple, a perfect example of the
              beautiful, colorful melting pot of cultures that make the city
              come to life. We know from experience that leaving Miami is not
              easy, and the culture you become accustomed to as a native isn’t
              found anywhere else. It’s the little things that make Miami,
              Miami; and with MiamiPak we hope we can bring Miami to you.
              Something as simple as a cafecito, or adobo seasoning makes all
              the difference when you’re missing home. Our goal is to support
              local companies, by bringing their specialties to you. Wherever
              you may be, you can get a surprise box of Miami flavors delivered
              right to your door and instantly feel like you’re back home.
            </h2>
            <h2 class="abouttext">Made by IronhackFtw</h2>
          </div>
        </div>
        <div class="columns logohold">
          <column>
            <a href="https://github.com/jvelez523">
              <img
                class="abtimg"
                src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/github_circle_color-512.png"
              />
            </a>
          </column>
          <column>
            <a href="https://www.linkedin.com/in/justinvelez23/">
              <img
                class="abtimg"
                src="https://cdn2.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-22-512.png"
              />
            </a>
          </column>
        </div>
      </div>
    );
  }
}
export default About;
