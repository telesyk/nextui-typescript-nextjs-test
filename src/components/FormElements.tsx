"use client";

import { useState } from "react";
import {
  Autocomplete,
  AutocompleteItem,
  Checkbox,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Slider,
  SliderValue,
} from "@nextui-org/react";
// import { FaPlus } from "react-icons/fa";

const animals = [
  {
    label: "Cat",
    value: "cat",
    description: "The second most popular pet in the world",
  },
  {
    label: "Dog",
    value: "dog",
    description: "The most popular pet in the world",
  },
  {
    label: "Elephant",
    value: "elephant",
    description: "The largest land animal",
  },
  { label: "Lion", value: "lion", description: "The king of the jungle" },
  { label: "Tiger", value: "tiger", description: "The largest cat species" },
  {
    label: "Giraffe",
    value: "giraffe",
    description: "The tallest land animal",
  },
  {
    label: "Dolphin",
    value: "dolphin",
    description: "A widely distributed and diverse group of aquatic mammals",
  },
  {
    label: "Penguin",
    value: "penguin",
    description: "A group of aquatic flightless birds",
  },
  {
    label: "Zebra",
    value: "zebra",
    description: "A several species of African equids",
  },
  {
    label: "Shark",
    value: "shark",
    description:
      "A group of elasmobranch fish characterized by a cartilaginous skeleton",
  },
  {
    label: "Whale",
    value: "whale",
    description: "Diverse group of fully aquatic placental marine mammals",
  },
  {
    label: "Otter",
    value: "otter",
    description: "A carnivorous mammal in the subfamily Lutrinae",
  },
  {
    label: "Crocodile",
    value: "crocodile",
    description: "A large semiaquatic reptile",
  },
];

export default function FormElements() {
  const [isSelected, setIsSelected] = useState(false);
  const [radioSelected, setRadioSelected] = useState("london");
  const [sliderValue, setSliderValue] = useState<SliderValue>(25);

  return (
    <>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Autocomplete
          label="Favorite Animal"
          placeholder="Search an animal"
          className="max-w-xs"
          defaultItems={animals}
        >
          {(item) => (
            <AutocompleteItem
              className="text-gray-800 dark:text-gray-200"
              key={item.value}
            >
              {item.label}
            </AutocompleteItem>
          )}
        </Autocomplete>
        <Select
          label="Favorite Animal"
          placeholder="Select an animal"
          selectionMode="multiple"
          className="max-w-xs"
        >
          {animals.map((animal) => (
            <SelectItem key={animal.value} value={animal.value}>
              {animal.label}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="flex flex-wrap gap-4">
        <div className="p-2 min-w-min rounded-lg bg-slate-100/10">
          {/* <Checkbox defaultSelected icon={<FaPlus />} color="warning">
            Option
          </Checkbox> */}
          <div className="my-2">
            <Checkbox defaultSelected lineThrough>
              Option
            </Checkbox>
          </div>
          <div className="my-2">
            <Checkbox isSelected={isSelected} onValueChange={setIsSelected}>
              Subscribe (controlled)
            </Checkbox>
            <p className="text-default-500">
              Selected: {isSelected ? "true" : "false"}
            </p>
          </div>
        </div>
        <div className="p-2 min-w-min rounded-lg bg-slate-100/10">
          <RadioGroup
            color="success"
            label="Select your favorite city"
            value={radioSelected}
            onValueChange={setRadioSelected}
          >
            <Radio value="buenos-aires">Buenos Aires</Radio>
            <Radio value="sydney">Sydney</Radio>
            <Radio value="san-francisco">San Francisco</Radio>
            <Radio value="london">London</Radio>
            <Radio value="tokyo">Tokyo</Radio>
          </RadioGroup>
          <p className="text-default-500 text-small">
            Selected: {radioSelected}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full items-start justify-center">
        <Slider
          aria-label="Volume"
          size="lg"
          color="secondary"
          defaultValue={70}
          onChangeEnd={setSliderValue}
          className="max-w-md"
        />
        <p className="text-default-500 font-medium text-small">
          Current volume: {sliderValue}
        </p>
      </div>
    </>
  );
}
