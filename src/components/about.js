import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="aboutcontainer">
          <div className="column">
            <h1 class="aboutTitle">About This Project</h1>
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
                you may be, you can get a surprise box of Miami flavors
                delivered right to your door and instantly feel like you’re back
                home.
              </h2>
              <h2 class="abouttext final">Made by IronhackFtw</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
