import TopNavigation from "@cloudscape-design/components/top-navigation";

export default () => {
  return (
    <TopNavigation
      identity={{
        href: "#",
        title: "cloudscape-form-builder",
      }}
      utilities={[
        {
          type: "button",
          text: "Link",
          href: "https://github.com/aws-samples/webapp-form-builder",
          external: true,
          externalIconAriaLabel: " (opens in a new tab)",
        },
      ]}
    />
  );
};
