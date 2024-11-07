import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SelectBudgetOptions, SelectTravelsList } from "@/constants/Options";
import React, { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const CreateTrip = () => {
  const [place, setPlace] = useState();
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className=" font-bold text-3xl"> Tell us your travel preferences</h2>
      <p className="text-gray-500 text-xl mt-3">
        Just provide some basic information, and our trip Planner will generate
        a customized Itinerary based on your preferences.
      </p>
      <div className=" mt-20 flex flex-col gap-15">
        <div>
          <h2 className=" text-xl my-3 font-medium">
            what is the Destination of Choice?
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => {
                setPlace(v);
                console.log(v);
              },
            }}
          />
        </div>
      </div>
      <div className="gap-20">
        <h1 className="text-xl my-3 font-medium">
          How many days are you planning your trip
        </h1>
        <Input placeholder={"Ex. 3 Days"} type="number" />
      </div>
      <div className="gap-20">
        <h1 className="text-xl my-3 font-medium">What is your Budget?</h1>
        <div className="grid grid-cols-3  gap-5 mt-5">
          {SelectBudgetOptions.map((item, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg hover:shadow-lg cursor-pointer"
            >
              <h2>{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="gap-20">
        <h1 className="text-xl my-3 font-medium">
          Who do you Plan on travelling with on your next Adventure
        </h1>
        <div className="grid grid-cols-3  gap-5 mt-5">
          {SelectTravelsList.map((item, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg hover:shadow-lg cursor-pointer"
            >
              <h2>{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="my-10 flex justify-end">
        <Button> ✅ Generate Trip</Button>
      </div>
    </div>
  );
};

export default CreateTrip;
