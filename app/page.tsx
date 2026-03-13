import HomeOverview from "@/components/home/HomeOverview";
import { LoadShifts } from "@/components/pseudo/LoadShifts";
import { AppPageContainer } from "@/components/shared/AppPageContainer";

const Home = () => {

  return <AppPageContainer title="Vaktbok">
    <LoadShifts />
    <HomeOverview />
  </AppPageContainer>;
};

export default Home;