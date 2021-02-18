/* eslint-disable no-console */
import React, { useState } from "react";
import { action } from "@storybook/addon-actions";

import "./demo.less";
import "../src/assets/index.less";
import AutoComplete from "../src";

// This default export determines where your story goes in the story list
export default {
  title: "AutoComplete",
  component: AutoComplete,
};

const mockVal = (str: string, repeat = 1) => {
  return {
    value: str.repeat(repeat),
  };
};

export function APIShow() {
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const [value, setValue] = useState<number | string>("");

  const onSearch = (searchText: string) => {
    action("onSearch")(searchText);
    setOptions(
      !searchText
        ? []
        : [
            mockVal(searchText),
            mockVal(searchText, 2),
            mockVal(searchText, 3),
            mockVal(searchText, 4),
            mockVal(searchText, 5),
          ]
    );
  };

  const onSelect = (data: string | number) => {
    action("onSelect")(data);
    console.log("onSelect", data);
  };

  const onChange = (data: string | number) => {
    action("onChange")(data);
    setValue(data);
  };

  return (
    <div>
      <div>
        <label>allowClear</label>
        <AutoComplete
          allowClear
          options={options}
          style={{ width: 200 }}
          onSearch={onSearch}
          onSelect={onSelect}
          onChange={onChange}
          placeholder="input here"
        />
      </div>
      <br />
      <div>
        <label>autoFocus</label>
        <AutoComplete
          autoFocus
          options={[{ label: 1, value: 1 }]}
          style={{ width: 200 }}
          onSearch={onSearch}
          onSelect={onSelect}
          onChange={onChange}
          placeholder="input here"
        />
      </div>
      <br />
      <div>
        <label>defaultActiveFirstOption:false</label>
        <AutoComplete
          defaultActiveFirstOption={false}
          options={options}
          style={{ width: 200 }}
          onSearch={onSearch}
          onSelect={onSelect}
          onChange={onChange}
          placeholder="input here"
        />
      </div>
      <br />
      <div>
        <label>defaultValue: 2</label>
        <AutoComplete
          options={options}
          defaultValue="2"
          style={{ width: 200 }}
          onSearch={onSearch}
          onSelect={onSelect}
          onChange={onChange}
          placeholder="input here"
        />
      </div>
      <br />
      <div>
        <label>disabled:true</label>
        <AutoComplete
          disabled
          options={[{ label: 1, value: 1 }]}
          style={{ width: 200 }}
          onSearch={onSearch}
          onSelect={onSelect}
          onChange={onChange}
          placeholder="input here"
        />
      </div>
      <br />
      <div>
        <label>dropdownClassName:test-a</label>
        <AutoComplete
          dropdownClassName="test-a"
          options={[{ label: 1, value: 1 }]}
          style={{ width: 200 }}
          onSearch={onSearch}
          onSelect={onSelect}
          onChange={onChange}
          placeholder="input here"
        />
      </div>
      <br />
      <div>
        <label>dropdownMatchSelectWidth:false</label>
        <AutoComplete
          dropdownMatchSelectWidth={false}
          options={options}
          style={{ width: 100 }}
          onSearch={onSearch}
          onSelect={onSelect}
          onChange={onChange}
          placeholder="input here"
        />
        <label>dropdownMatchSelectWidth:200</label>
        <AutoComplete
          dropdownMatchSelectWidth={200}
          options={options}
          style={{ width: 100 }}
          onSearch={onSearch}
          onSelect={onSelect}
          onChange={onChange}
          placeholder="input here"
        />
      </div>
      <br />
      <div>
        <label>defaultOpen:true</label>
        <AutoComplete
          defaultOpen
          options={[
            { label: 1, value: 1 },
            { label: 2, value: 2 },
          ]}
          style={{ width: 200 }}
          onSearch={onSearch}
          onSelect={onSelect}
          onChange={onChange}
          placeholder="input here"
        />
      </div>
      <br />
    </div>
  );
}

APIShow.storyName = "部分API展示";
APIShow.parameters = {
  controls: { hideNoControlsWarning: true },
};
