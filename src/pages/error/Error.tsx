import { AppLayout } from "@cloudscape-design/components";
import TopNavigation from "../../components/TopNavigation";
import Breadcrumbs from "../../components/Breadcrumbs";
import Navigation from "../../components/Navigation";
import HelpPanelContent from "../../components/HelpPanelContent";
import ErrorContent from "./components/ErrorContent";

function ErrorPage() {
  return (
    <>
      <TopNavigation />
      <AppLayout
        headerSelector="#top-nav"
        content={<ErrorContent />}
        breadcrumbs={<Breadcrumbs action="Home" href="/" type="Return home" />}
        navigation={<Navigation />}
        tools={<HelpPanelContent />}
      />
    </>
  );
}

export default ErrorPage;
