import HelpPanel from "@cloudscape-design/components/help-panel";
import Icon from "@cloudscape-design/components/icon";

export const helpPanels = [
  // Index 0
  <HelpPanel header={<h2>Cloudscape Form Builder Help</h2>}>
    <div>
      <p>
        Review the readme file on the aws-samples-github repo to learn more about the cloudscape-form-builder
      </p>
      <h5>
        Visit the github repo on AWS Samples{" "}
        <Icon name="external" />
      </h5>
      <ul>
        <li>
          <a
            href="https://github.com/aws-samples/webapp-form-builder"
            target="_blank"
          >
            Github
          </a>
        </li>
      </ul>
    </div>
  </HelpPanel>,
  // Index 1
  <HelpPanel header={<h2>Example Help Panel</h2>}>
    <p>
      This is an example help panel, you can add as many to this array as you need.
    </p>
    <p>
      <b>Notes</b>:{" "}
    </p>
    <ul>
      <li>List item 1</li>
      <li>List item 2</li>
    </ul>
  </HelpPanel>
];
