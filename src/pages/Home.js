import { Cine } from "../components/Cine";

import { Footer } from "../components/Footer";
import { Cartillas } from "../components/Cartillas";
import { Eventos } from "../components/Eventos/Eventos";
import { SliderArtistas } from "../components/SliderArtistas/SliderArtistas";
import { Promociones } from "../components/Promociones";
import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";
import { SliderInfo } from "../components/SliderInfo";
import { Show_infantiles } from "../components/show_infantiles/Show_infantiles";
import { Restaurantes } from "../components/Restaurantes";
import { Conciertos } from "../components/Conciertos";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Cartillas />
      <Promociones />
      <Conciertos />
      <SliderInfo />

      <Cine />
      <Restaurantes />
      <Footer />
    </div>
  );
}

export default Home;
