import { defFlex } from "./styles/coinedStyle";
import { c } from "./helpers/styleHelper";
import WebHeader from "./components/web_components/header";
import MainContainer from "./components/web_components/Container";
import { CarouselComponent } from "./components/web_components/CarouselComponent";

function App() {
  return (
          <MainContainer>
            <WebHeader />
            <div className={c(defFlex, "w-full align-middle text-bold text-[2.5vw] min-h-100")}>
              <div className={c(defFlex, "text-unb w-5/12 leading-[10vh] p-5 pl-12 tracking-wide")}>
                <p className="mb-2">
                  Modern Solution for your Modern Website.   
                </p> 
                <p className="mb-2">
                  No more bloated  <br /> <span className="text-code text-4xl leading-[10.5vh]">old orientation and mindset. </span> 
                <p className="mb-2">
                  We use procedural programming - the new industry standard.</p>
                </p>
              </div>
              <div className={c(defFlex, "w-7/12 h-full justify-center pl-0")}>
                <CarouselComponent />
              </div>
            </div>
          </MainContainer>
  );
}

export default App;
