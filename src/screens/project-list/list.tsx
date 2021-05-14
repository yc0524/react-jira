/*
 * @Description:
 * @Author: YanCheng
 * @Date: 2021-04-21 15:15:54
 * @LastEditTime: 2021-05-14 16:01:38
 */
import React from "react";
import { User, Project } from "./data";
import { Table } from "antd";

interface ListProps {
  list: Project[];
  users: User[];
}

export const List = ({ list, users }: ListProps) => {
  return (
    <Table
      pagination={false}
      rowKey="id"
      dataSource={list}
      columns={[
        {
          title: "名称",
          dataIndex: "name",
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: "负责人",
          dataIndex: "respobility",
          render(value, project) {
            return (
              <span>
                {users.find((user) => user.id === project.personId)?.name ||
                  "未知"}
              </span>
            );
          },
        },
      ]}
    />
  );
};
