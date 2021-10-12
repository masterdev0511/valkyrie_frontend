
import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import styles from './style';

const useStyles = makeStyles(styles);

export default function PolicyPage() {
  const classes = useStyles();

  const [isPolicy, setIsPolicy] = React.useState(true);

  return (
    <>
      <div className={classes.hero}>
        { isPolicy && (
          <div>
            <h3>Privacy Policy</h3>
            <h4>Valkyrie Intelligence LLC – Privacy Policy Effective Date: December 2019</h4>
            <p>
              Valkyrie Intelligence LLC (“Valkyrie”) complies with the EU-U.S. Privacy Shield Framework and the Swiss-U.S. Privacy Shield Framework as set forth by the U.S. Department of Commerce regarding the collection, use, and retention of personal information transferred from the European Union and Switzerland to the United States. 
              <br/><br/>
              Valkyrie Intelligence LLC has certified to the Department of Commerce that it adheres to the Privacy Shield Principles. If there is any conflict between the terms in this privacy policy and the Privacy Shield Principles, the Privacy Shield Principles shall govern.  To learn more about the Privacy Shield program, view our certification, and access the Privacy Shield List, please visit Privacy Shield and Privacy Shield List. 
              <br/><br/>
              The purpose(s) for which Valkyrie Intelligence LLC processes personal data varies based on the business demands of our clients. Similarly, the type(s) of personal data processed by Valkyrie varies based on the nature of our clients and their product(s). When possible, Valkyrie's default practice is to have the primary data collector obscure and/or anonymize any Personally Identifiable Information prior to delivery to Valkyrie for sub-processing.
              <br/><br/>
              The Federal Trade Commission has jurisdiction over Valkyrie Intelligence LLC’s compliance with the Privacy Shield.
              <br/><br/>
              Valkyrie Intelligence LLC commits to cooperate with the panel established by the EU Data Protection Authorities (DPAs) and the Swiss Federal Data Protection and Information Commissioner (FDPIC) and comply with the advice given by the panel and/or Commissioner with regard to both Human Resources (HR) and non-HR data transferred from the EU and Switzerland, respectively.
              <br/><br/>
              In compliance with the Privacy Shield Principles, Valkyrie Intelligence LLC commits to resolve complaints about our collection or use of your personal information and acknowledges that individuals have the right to access and limit the use and disclosure of their personal data.  European Union and Swiss individuals with inquiries or complaints regarding our Privacy Shield policy should first contact the Information Security Team at: infosec@valkyrie.ai
              <br/><br/>
              An individual has the possibility, under certain conditions, to invoke binding arbitration for complaints regarding Privacy Shield compliance not resolved by any of the other Privacy Shield mechanisms. Refer to Annex I for additional information.
              <br/><br/>
              Valkyrie Intelligence LLC does not plan to transfer personal information to third parties. Therefore, the provision regarding liability for the actions of agent processors does not apply. If we change this policy in the future, Valkyrie Intelligence LLC shall remain liable under the Principles if its agent processes such personal information in a manner inconsistent with the Principles, unless the organization proves that it is not responsible for the event giving rise to the damage.
              <br/><br/>
              Note that Valkyrie Intelligence LLC acknowledges the requirement to disclose personal information in response to lawful requests by public authorities, including to meet national security or law enforcement requirements.
            </p>
          </div>
        )}
        { !isPolicy && (
          <div>
            <h3>Data Governance</h3>
            <h4>Valkyrie Intelligence LLC – Data Governance Effective Date: December 2019</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br/><br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br/><br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              <br/><br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br/><br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br/><br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        )}
        <div>
          <Button onClick={() => setIsPolicy(true)} style={!isPolicy ? { opacity: '0.5' } : {}}>Privacy Policy</Button>
          <div />
          <Button onClick={() => setIsPolicy(false)} style={isPolicy ? { opacity: '0.5' } : {}}>Data Governance</Button>
        </div>
      </div>
    </>
  );
}
