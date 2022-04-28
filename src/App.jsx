import { useEffect } from "react";
import * as flsFunctions from "./js/files/functions";
import * as flsScroll from "./js/files/scroll/scroll.js";
import dynamicAdaptive from "./js/libs/dynamic_adapt";
import { Header, Footer, MainScreen, About, Special, Believe, Video, Laurels, Gallery } from "./_containers";

const App = () => {
    useEffect(() => {
        flsFunctions.menuInit();
        flsScroll.pageNavigation();
        dynamicAdaptive();
    }, []);

    return (
        <>
            <Header />
            <main className="page">
                <MainScreen />
                <About />
                <Special />
                <Believe />
                <Video />
                <Laurels />
                <Gallery />
            </main>
            <Footer />
        </>
    );
};

export default App;
