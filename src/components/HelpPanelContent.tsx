import HelpPanel from "@cloudscape-design/components/help-panel";
import Icon from "@cloudscape-design/components/icon";

function HelpPanelContent() {
  return (
    <HelpPanel header={<h2>Global Help Panel</h2>}>
      <div>
        <b>Global:</b> This is the global help panel component that you can use in the application
        <h5>
          Learn more about the Cloudscape Design System <Icon name="external"/>
        </h5>
        <ul>
          <li>
            <a href="https://cloudscape.design/" target="_blank">AWS Cloudscape Design System</a>
          </li>
        </ul>
      </div>
    </HelpPanel>
  );
}

export default HelpPanelContent;
