import { useLocation } from "react-router-dom";
import { SideNavigation } from "@cloudscape-design/components";
import useLink from "../helpers/UseLink";

function Navigation() {
  const location = useLocation();
  const { handleFollow } = useLink();

  return (
    <SideNavigation
      activeHref={location.pathname}
      header={{ href: "/", text: "cloudscape-form-builder" }}
      onFollow={handleFollow}
      items={[
        { type: "link", text: "Welcome", href: "/home" },
        { type: "link", text: "Form Playground", href: "/form" },
        { type: "divider" },
        {
          type: "link",
          text: "Documentation",
          href: "https://github.com/aws-samples/webapp-form-builder",
          external: true
        }
      ]}
    />
  );
}

export default Navigation;
