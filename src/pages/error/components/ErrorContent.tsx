import { useRouteError } from "react-router-dom";
import {
  ContentLayout,
  Container,
  Header,
} from "@cloudscape-design/components";

function ErrorContent() {
  const error = useRouteError();
  console.error(error);

  return (
    <ContentLayout header={<Header variant="h1">Hmm..</Header>}>
      <Container>
        {" "}
        <div id="error-page">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </Container>
    </ContentLayout>
  );
}

export default ErrorContent;
