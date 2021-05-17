/*
 * @Description:
 * @Author: YanCheng
 * @Date: 2021-04-21 15:17:03
 * @LastEditTime: 2021-05-17 16:59:23
 */
import React from "react";
import { User } from "./data";
import { Input, Select } from "antd";

interface SearchPanelProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPanelProps["param"]) => void;
}

const SearchPanel = (props: SearchPanelProps) => {
  const { param, setParam, users } = props;

  return (
    <form>
      <div>
        <Input
          value={param.name}
          onChange={(event) => {
            setParam &&
              setParam({
                ...param,
                name: event.target.value,
              });
          }}
        />

        <Select
          value={param.personId}
          onChange={(value) => {
            setParam &&
              setParam({
                ...param,
                personId: value,
              });
          }}
        >
          <Select.Option value={""}>负责人</Select.Option>
          {users.map((user) => {
            return (
              <Select.Option key={user.id} value={user.id}>
                {user.name}
              </Select.Option>
            );
          })}
        </Select>
      </div>
    </form>
  );
};

export default SearchPanel;
