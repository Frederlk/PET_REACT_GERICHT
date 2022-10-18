import { useEffect } from "react";
import * as flsFunctions from "./js/functions";
import dynamicAdaptive from "./js/dynamic_adapt";
import { Header, Footer, MainScreen, About, Special, Believe, Video, Laurels, Gallery } from "./_containers";

const App = () => {
    useEffect(() => {
        flsFunctions.menuInit();
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
