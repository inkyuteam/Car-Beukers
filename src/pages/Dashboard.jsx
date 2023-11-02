import { useEffect, useState } from "react";
import { Home } from "../components/home/Home";
import { Header } from "../components/common/Header/Header";
import { Carousel } from "../components/carousel/Carousel"
import { About } from "../components/about/About"
import { Footer } from "../components/footer/Footer"
import { AutoMotors } from "../components/autoMotors/AutoMotors"
import { HorizontalScroll } from "../components/horizontalScroll/HorizontalScroll"

export const Dashboard = () => {
    const [menus, setMenus] = useState([]);
    useEffect(()=>{
      setMenus(["Collectie", "Classics", "Contact"]);
    }, []);
  return (
    <>
    <Header menus={menus} />
    <Home />
    <Carousel />
    <About />
    <AutoMotors />
    <HorizontalScroll />
    <Footer menus={menus}/>
    </>
  )
}
