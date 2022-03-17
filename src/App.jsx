import React, { useState } from "react";
import ReactDOM from "react-dom";
import cntl from "cntl";
import Button from "./stories/Components/Button/Button";
import CollapsibleSection from "./stories/Components/CollapsibleSection/CollapsibleSection";
import Input from "./stories/Components/Input/Input";
import Dropdown from "./stories/Components/Dropdown/Dropdown";
import ProgressTracker from "./stories/Components/ProgressTracker/ProgressTracker";
import NavBar from "./stories/Components/NavBar/NavBar";

const containerCN = cntl`
  mt-3
  p-3
  border
  rounded
`;

const companyOptions = [
  { label: "Sea Green", value: "Sea Green Corp." },
  { label: "Sky Blue", value: "Sky Blue Inc." },
  { label: "Big Plain", value: "Big Plain, llc" },
];

const subscriptionOptions = [
  { label: "Elite", value: "Elite" },
  { label: "Premium", value: "Premium" },
  { label: "Normal", value: "Normal" },
];

const stateOptions = [
  { label: "United States", value: "United States" },
  { label: "Mexico", value: "Mexico" },
  { label: "Canada", value: "Canada" },
];

const App = () => {
  // company states
  const [companyName, setCompany] = useState(null);
  const [eSpaceName, setSpaceName] = useState("");
  const [subscription, setSubscription] = useState(null);

  // owner states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // location states
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [suite, setSuite] = useState("");
  const [country, setCountry] = useState(null);
  const [postalCode, setPostalCode] = useState("");

  const masterChange = (val, func) => {
    func(val);
  };

  const handleBtnClick = (evt) => {
    const submitObj = {
      eSpaceName,
      companyName: companyName.value,
      subscription: subscription.value,
      owner: {
        name,
        phone,
        email,
      },
      location: {
        street,
        suite,
        city,
        country: country.value,
        postalCode,
      },
    };
    evt.preventDefault();
    console.log({ submitObj });
  };

  return (
    <div className="bg-black h-full w-full flex justify-center overflow-auto">
      <div className="p-10 w-1/3">
        <p>Create a screen here!</p>
        <p>
          Below are the provided Components that will be needed. You won&apos;t
          be expected to modify these Components at all, but you may need to
          study them and pass props.
        </p>
        <div className={containerCN}>
          <p>Nav bar</p>
          <NavBar />
        </div>
        <div className={containerCN}>
          <p>Progress Tracker</p>
          <ProgressTracker
            steps={Array(5)
              .fill()
              .map((a, index) => `Step ${index + 1}`)}
          />
        </div>
        <div className={containerCN}>
          <CollapsibleSection title="Overview">
            <>
              <Dropdown
                label="Company Name"
                options={companyOptions}
                onChange={(val) => masterChange(val, setCompany)}
                value={companyName}
              />
              <Input
                label="Space Name*"
                placeholder="Space Name"
                onChange={(val) => masterChange(val, setSpaceName)}
                value={eSpaceName}
              />
              <Dropdown
                label="Subscription*"
                options={subscriptionOptions}
                onChange={(val) => masterChange(val, setSubscription)}
                value={subscription}
              />
            </>
          </CollapsibleSection>
        </div>
        <div className={containerCN}>
          <CollapsibleSection title="Owner Information">
            <>
              <Input
                label="Primary Owner*"
                placeholder="Primary Owner"
                onChange={(val) => masterChange(val, setName)}
                value={name}
              />
              <Input
                label="Primary Owner Email*"
                placeholder="Primary Email"
                onChange={(val) => masterChange(val, setEmail)}
                value={email}
              />
              <Input
                label="Primary Owner Phone"
                placeholder="Primary Phone"
                onChange={(val) => masterChange(val, setPhone)}
                value={phone}
              />
            </>
          </CollapsibleSection>
        </div>
        <div className={containerCN}>
          <CollapsibleSection title="Location Information">
            <>
              <Input
                label="Street Address*"
                placeholder="Street Address"
                value={street}
                onChange={(val) => masterChange(val, setStreet)}
              />
              <Input
                label="City*"
                placeholder="City"
                value={city}
                onChange={(val) => masterChange(val, setCity)}
              />
              <Input
                label="Suite/Unit"
                placeholder="Suite/Unit"
                value={suite}
                onChange={(val) => masterChange(val, setSuite)}
              />
              <Dropdown
                label="Country"
                options={stateOptions}
                value={country}
                onChange={(val) => masterChange(val, setCountry)}
              />
              <Input
                label="Postal Code*"
                placeholder="Postal Code"
                value={postalCode}
                onChange={(val) => masterChange(val, setPostalCode)}
              />
            </>
          </CollapsibleSection>
        </div>
        <div className={containerCN}>
          <Button title="Button" onClick={handleBtnClick} />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
