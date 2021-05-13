/*
 * @Description:
 * @Author: YanCheng
 * @Date: 2021-04-21 15:14:32
 * @LastEditTime: 2021-05-13 14:33:55
 */
import { useState, useEffect } from "react";
import SearchPanel from "./search-panel";
import { List } from "./list";
import { cleanObject } from "../../utils";
import { useDebounce } from "../../hooks/index";
import { User, Project } from "./data";
import { useHttp } from "../../utils/http";

export const ProjectListScreen = () => {
  const [list, setList] = useState<Project[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const debouncedParam = useDebounce(param, 500);
  const client = useHttp();

  useEffect(() => {
    client("projects", { data: cleanObject(debouncedParam) }).then((res) =>
      setList(res)
    );
    // eslint-disable-next-line
  }, [debouncedParam]);

  useEffect(() => {
    client("users").then((res) => {
      setUsers(res);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  );
};
