import AppLayout from "@cloudscape-design/components/app-layout";
import Breadcrumbs from "../../components/Breadcrumbs";
import Navigation from "../../components/Navigation";
import HelpPanelContent from "../../components/HelpPanelContent";
import HomeContent from "./components/HomeContent";

function Home() {
  return (
    <AppLayout
      headerSelector="#top-nav"
      content={<HomeContent />}
      breadcrumbs={
        <Breadcrumbs action="View" href="/home" type="Home" />
      }
      navigation={<Navigation />}
      tools={<HelpPanelContent />}
    />
  );
}

export default Home;
