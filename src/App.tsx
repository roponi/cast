import "./App.css";
import ResponsiveAppBar from "./components/Appbar/Appbar";
import ButtonGroup from "./components/ButtonGroup/ButtonGroup";
import Carousel from "./components/Carousel/Carousel";
import ContentArea from "./components/ContentArea/ContentArea";
import Footer from "./components/Footer/Footer";
import ImageCards from "./components/ImageCard/ImageCards";
import MainRoute from "./components/Routes/MainRoute";

function App() {
  const buttonData = [
    {
      onClick: () => {
        console.log("test1");
      },
      text: "Antarctic",
    },
    {
      onClick: () => {
        console.log("test1");
      },
      text: "Remote",
    },
    {
      onClick: () => {
        console.log("test1");
      },
      text: "Maritime",
    },
    {
      onClick: () => {
        console.log("test1");
      },
      text: "Space",
    },
  ];

  const contentAreaData = [
    `The Centre for Antarctic and Southern Ocean Technology (CAST) aims to advance
    collaborative Antarctic and Southern Ocean research through the Australian Antarctic
    Division (AAD), CSIRO and the University of Tasmania (UTAS). A Memorandum of Understanding (MOU) between the three organisations, signed
    on 22 April 2021, will enhance: `,
    <ul>
      <li>collaboration and innovation in areas of 
        technology and engineering to achieve greater safety, effectiveness, 
        efficiency, opportunities and outcomes;
        </li> <li>the pooling of expertise among partners to create new opportunities,
        gain greater efficiency and support existing work programs;
        </li> <li>educational opportunities and training, especially in the STEM
           fields relating to Antarctica and the Southern Ocean.
        </li>
      
    </ul>,
    <ul>
      The Centre and its MOU reflect the unique concentration of the Antarctic and Southern
      Ocean expertise in Tasmania. They formalise the already high levels of cooperation between
      the AAD, CSIRO and UTAS, and will provide further opporunities to work with other 
      national and international project partners.
    </ul>,
  ];

  return (
    <div>
      <ResponsiveAppBar />
      {/* <MainRoute /> */}
      <Carousel autoPlay infiniteLoop />
      {/* <ButtonGroup
        style={{ marginTop: "-200px", position: "relative", zIndex: 1 }}
        data={buttonData}
      /> */}
      <ContentArea style={{ marginTop: "-56px" }} text={contentAreaData} />
      <ImageCards />
      <div style={{ marginTop: "70px" }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
