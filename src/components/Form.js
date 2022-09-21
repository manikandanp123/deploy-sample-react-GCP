import React, { useState } from "react";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import { Calendar } from "primereact/calendar";
import { CascadeSelect } from "primereact/cascadeselect";
import { Dropdown } from 'primereact/dropdown';
 
const Form = () => {
  const [date, setDate] = useState("");
  const [selectedCity, setSelectedCity1] = useState("");
  const [selectedCountry,setSelectedCountry]=useState('');

  console.log(date);
  console.log(selectedCity);
  console.log(selectedCountry);

  const countries = [
    {
      name: "Australia",
      code: "AU",
      states: [
        {
          name: "New South Wales",
          cities: [
            { cname: "Sydney", code: "A-SY" },
            { cname: "Newcastle", code: "A-NE" },
            { cname: "Wollongong", code: "A-WO" },
          ],
        },
        {
          name: "Queensland",
          cities: [
            { cname: "Brisbane", code: "A-BR" },
            { cname: "Townsville", code: "A-TO" },
          ],
        },
      ],
    },
    {
      name: "Canada",
      code: "CA",
      states: [
        {
          name: "Quebec",
          cities: [
            { cname: "Montreal", code: "C-MO" },
            { cname: "Quebec City", code: "C-QU" },
          ],
        },
        {
          name: "Ontario",
          cities: [
            { cname: "Ottawa", code: "C-OT" },
            { cname: "Toronto", code: "C-TO" },
          ],
        },
      ],
    },
    {
      name: "United States",
      code: "US",
      states: [
        {
          name: "California",
          cities: [
            { cname: "Los Angeles", code: "US-LA" },
            { cname: "San Diego", code: "US-SD" },
            { cname: "San Francisco", code: "US-SF" },
          ],
        },
        {
          name: "Florida",
          cities: [
            { cname: "Jacksonville", code: "US-JA" },
            { cname: "Miami", code: "US-MI" },
            { cname: "Tampa", code: "US-TA" },
            { cname: "Orlando", code: "US-OR" },
          ],
        },
        {
          name: "Texas",
          cities: [
            { cname: "Austin", code: "US-AU" },
            { cname: "Dallas", code: "US-DA" },
            { cname: "Houston", code: "US-HO" },
          ],
        },
      ],
    },
  ];

  return (
    <div>
        <h2>Form</h2>
      <Button>SUBMIT</Button>
      <Calendar value={date} onChange={(e) => setDate(e.value)}></Calendar>

      <CascadeSelect
        value={selectedCity}
        options={countries}
        optionLabel={"cname"}
        optionGroupLabel={"name"}
        optionGroupChildren={["states", "cities"]}
        style={{ minWidth: "14rem" }}
        placeholder={"Select a City"}
        onChange={(event) => setSelectedCity1(event.value)}
      />

      <Dropdown
        value={selectedCountry}
        options={countries}
        onChange={(e) => setSelectedCountry(e.value)}
        optionLabel="name"
        filter
        showClear
        filterBy="name"
        placeholder="Select a Country"
        // itemTemplate={countryOptionTemplate}
      />
    </div>
  );
};

export default Form;
