import BreadcrumbGroup from "@cloudscape-design/components/breadcrumb-group";
import useLink from "../helpers/UseLink";

type BreadcrumbsProps = {
  action: string;
  href: string;
  type: string;
};

function Breadcrumbs(props: BreadcrumbsProps) {
  const { handleFollow } = useLink();
  return (
    <BreadcrumbGroup
      items={[
        { text: "cloudscape-form-builder", href: "/" },
        { text: props.action, href: props.href },
        {
          text: props.type,
          href: `#components/${props.type}`
        },
      ]}
      ariaLabel="Breadcrumbs"
      onFollow={handleFollow}
    />
  );
}

export default Breadcrumbs;
