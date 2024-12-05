import { NavBar } from "../components/Navbar/index";
import {Footer} from "@/components/Footer"
import Hero from "@/components/Hero";
import Cta from "@/components/Cta";
import BolosCategoria from '@/components/BolosCategoria'

export default function Home() {

  return (
    <div className="">
      <NavBar/>
      <Hero className="mt-12"/>
      <BolosCategoria />
      <Cta/>
      <Footer/>
    </div>
  );
}
