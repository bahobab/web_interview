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

// const labelCN = cntl`
//   flex
//   mb-2
//   text-base
//   text-gray-200
// `;

// options for dropdown elements
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

  // handle all state changes
  const masterChange = (val, func) => {
    func(val);
  };

  const handleBtnClick = (evt) => {
    // We should check here if any required fields is provided
    // Otherwise abort submision and inform user (in the current test print/console.log a message)

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
    console.log({ submitObj }); // not recommended in production code
    // clear form fields
  };

  // utility function to make the Subscription dropdown required
  // const setRequiredField = (fieldLabel) => {
  //   return (
  //     fieldLabel && (
  //       <div className={labelCN}>
  //         <p>{fieldLabel}</p>
  //         {true && (
  //           <>
  //             <p className="text-brandGreen text-sm">*</p>
  //             <p className="text-brandRed italic ml-2">Required</p>
  //           </>
  //         )}
  //       </div>
  //     )
  //   );
  // };

  return (
    <div className="bg-black h-full w-full flex justify-center overflow-auto">
      <div className="p-10 w-1/3 lg:w-2/3">
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
        {/* wrapping elements in form element just in case we need to take advantage of some form props */}
        <form noValidate className="w-full">
          <div className={containerCN}>
            <CollapsibleSection title="Overview">
              <div className="lg:grid lg:grid-cols-2 lg:gap-x-4">
                <Dropdown
                  className="mb-4"
                  label="Company Name"
                  options={companyOptions}
                  onChange={(val) => masterChange(val, setCompany)}
                  value={companyName}
                />
                <Input
                  className="mb-4"
                  label="eSpace Name"
                  placeholder="Space Name"
                  onChange={(val) => masterChange(val, setSpaceName)}
                  value={eSpaceName}
                  isRequired
                />
                <Dropdown
                  className="mb-4"
                  // label={setRequiredField("Subscription")}
                  label="Subscription*"
                  options={subscriptionOptions}
                  onChange={(val) => masterChange(val, setSubscription)}
                  value={subscription}
                  isRequired
                />
              </div>
            </CollapsibleSection>
          </div>
          <div className={containerCN}>
            <CollapsibleSection title="Owner Information">
              <div className="lg:grid lg:grid-cols-2 lg:gap-x-4">
                <Input
                  className="mb-4"
                  label="Primary Owner"
                  placeholder="Primary Owner"
                  onChange={(val) => masterChange(val, setName)}
                  value={name}
                  isRequired
                />
                <Input
                  // Proper and valid email address format should be required
                  className="mb-4"
                  label="Primary Owner Email"
                  placeholder="Primary Email"
                  onChange={(val) => masterChange(val, setEmail)}
                  value={email}
                  isRequired
                />
                <Input
                  // Phone number format may be needed
                  className="mb-4"
                  label="Primary Owner Phone"
                  placeholder="Primary Phone"
                  onChange={(val) => masterChange(val, setPhone)}
                  value={phone}
                  isRequired
                />
              </div>
            </CollapsibleSection>
          </div>
          <div className={containerCN}>
            <CollapsibleSection title="Location Information">
              <div className="lg:grid lg:grid-cols-2 lg:gap-x-4">
                <Input
                  className="mb-4"
                  label="Street Address"
                  placeholder="Street Address"
                  value={street}
                  onChange={(val) => masterChange(val, setStreet)}
                  isRequired
                />
                <Input
                  className="mb-4"
                  label="City"
                  placeholder="City"
                  value={city}
                  onChange={(val) => masterChange(val, setCity)}
                  isRequired
                />
                <Input
                  className="mb-4"
                  label="Suite/Unit"
                  placeholder="Suite/Unit"
                  value={suite}
                  onChange={(val) => masterChange(val, setSuite)}
                />
                <Dropdown
                  className="mb-4"
                  label="Country"
                  options={stateOptions}
                  value={country}
                  onChange={(val) => masterChange(val, setCountry)}
                />
                <Input
                  // Postal Code format may be needed
                  className="mb-4"
                  label="Postal Code"
                  placeholder="Postal Code"
                  value={postalCode}
                  onChange={(val) => masterChange(val, setPostalCode)}
                  isRequired
                />
              </div>
            </CollapsibleSection>
          </div>
          <div className={containerCN}>
            <Button title="Button" onClick={handleBtnClick} type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
