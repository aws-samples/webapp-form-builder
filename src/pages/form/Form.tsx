import React, { useState } from "react";
// Helper Config
import { helpPanels } from "../../components/customHelpPanels";
// UI Components
import { AppLayout } from "@cloudscape-design/components";
import Breadcrumbs from "../../components/Breadcrumbs";
import Navigation from "../../components/Navigation";
import FormContent from "./components/FormContent";

function FormPage() {
  // State for opening tools
  const [toolsIndex, setToolsIndex] = useState(0);
  const [toolsOpen, setToolsOpen] = useState(false);

  // Helper functions
  function loadHelpPanelContent(index: number) {
    setToolsIndex(index);
    setToolsOpen(true);
  }

  return (
    <>
      <AppLayout
        headerSelector="#top-nav"
        breadcrumbs={<Breadcrumbs action="Home" href="/" type="Return home" />}
        navigation={<Navigation />}
        content={<FormContent helpPanelFn={loadHelpPanelContent} />}
        tools={helpPanels[toolsIndex]}
        toolsOpen={toolsOpen}
        onToolsChange={({ detail }) => setToolsOpen(detail.open)}
      />
    </>
  );
}

export default FormPage;
