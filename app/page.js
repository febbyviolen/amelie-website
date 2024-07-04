import BookAppointment from "./(component)/BookAppointment";
import Contacts from "./(component)/Contacts";
import Facilites from "./(component)/Facilites";
import Hero from "./(component)/Hero";
import Services from "./(component)/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Facilites />
      <BookAppointment />
      <Contacts />
    </div>
  );
}
