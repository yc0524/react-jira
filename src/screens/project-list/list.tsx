/*
 * @Description:
 * @Author: YanCheng
 * @Date: 2021-04-21 15:15:54
 * @LastEditTime: 2021-04-21 18:00:15
 */
import React from "react";
import { User, Project } from "./data";

interface ListProps {
  list: Project[];
  users: User[];
}

const List = ({ list, users }: ListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project) => {
          return (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>
                {users.find((user) => user.id === project.personId)?.name ||
                  "未知"}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default List;
