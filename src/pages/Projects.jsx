import { defFlex } from "../styles/coinedStyle";
import { c } from "../helpers/styleHelper";
import WebHeader from "../components/web_components/header";
import MainContainer from "../components/web_components/Container";
import { CarouselComponent } from "../components/web_components/CarouselComponent";
import { visionStructure } from "../structures/VisionStructures";

function Projects() {
  return (
          <MainContainer>
            <WebHeader />
            <div className={c(defFlex, "w-full align-middle text-bold text-[2.5vw] min-h-[80vh]")}>
              <div className={c(defFlex, "text-unb w-5/12 leading-[10vh] p-5 pl-12 pt-0 tracking-wide align-middle h-auto")}>
                <p className="relative w-full my-auto">
                  Build the website you want, with our best service.
                </p> 
              </div>
              <div className={c(defFlex, "w-7/12 h-[100%] justify-center pl-8")}>
                <CarouselComponent />
              </div>
            </div>
            <div className={c(defFlex, "w-full align-middle text-bold text-[2.5vw] min-h-[50vh] bg-white")}>
              <div className="mt-10 w-[100%] text-center text-[4vw] tracking-widest text-hw text-black">
                <p>ONGOING PROJECTS</p>
              </div>
              <div className={c(defFlex, "w-full min-h-[50vh] justify-center align-middle px-20")}>
                <div className={c(defFlex, "align-middle justify-center py-40 w-full")}>
                  {
                    visionStructure.map((item, index) => {
                      return (
                          <div className={c(defFlex, "w-1/3 h-72 pl-10")}>
                            <div className={c(defFlex, "text-black border rounded-3xl border-black w-full text-sm h-full")}>
                              <p className={c("h-auto my-auto mx-auto text-center text-schr px-8 text-[2.5vh] tracking-widest leading-6")}>
                                {item.statement}
                              </p>
                            </div>
                          </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
            <div className={c(defFlex, "w-full align-middle text-bold text-[2.5vw] min-h-[50vh] bg-white")}>
              <div className="mt-10 w-[100%] text-center text-[4vw] tracking-widest text-hw text-black">
                <p>MVP</p>
              </div>
              <div className={c(defFlex, "w-full min-h-[50vh] justify-center align-middle px-20")}>
                <div className={c(defFlex, "align-middle justify-center py-40 w-full")}>
                  {
                    visionStructure.map((item, index) => {
                      return (
                          <div className={c(defFlex, "w-1/3 h-72 pl-10")}>
                            <div className={c(defFlex, "text-black border rounded-3xl border-black w-full text-sm h-full")}>
                              <p className={c("h-auto my-auto mx-auto text-center text-schr px-8 text-[2.5vh] tracking-widest leading-6")}>
                                {item.statement}
                              </p>
                            </div>
                          </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </MainContainer>
  );
}

export default Projects;
