import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                imageSrc={AlexaImage}
                description="Amazon product"
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                imageSrc={CortanaImage}
                description="Microsoft product"
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Sira"
                handle="@siri01"
                imageSrc={SiriImage}
                description="Apple product"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
