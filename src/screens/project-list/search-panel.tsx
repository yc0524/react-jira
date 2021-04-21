/*
 * @Description:
 * @Author: YanCheng
 * @Date: 2021-04-21 15:17:03
 * @LastEditTime: 2021-04-21 18:06:13
 */
import React from "react";
import { User } from "./data";

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
        <input
          value={param.name}
          onChange={(event) => {
            setParam &&
              setParam({
                ...param,
                name: event.target.value,
              });
          }}
        />

        <select
          value={param.personId}
          onChange={(event) => {
            setParam &&
              setParam({
                ...param,
                personId: event.target.value,
              });
          }}
        >
          <option value={""}>负责人</option>
          {users.map((user) => {
            return (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            );
          })}
        </select>
      </div>
    </form>
  );
};

export default SearchPanel;
