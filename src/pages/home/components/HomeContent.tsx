import ContentLayout from "@cloudscape-design/components/content-layout";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";

const HomeContent = () => {
  return (
    <ContentLayout
      defaultPadding
      header={
        <SpaceBetween size="m">
          <Header
            variant="h1"
            description="This is the landing page for the cloudscape-form-builder"
          >
            Welcome
          </Header>
        </SpaceBetween>
      }
    >
    </ContentLayout>
  );
}

export default HomeContent;