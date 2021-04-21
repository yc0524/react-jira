/*
 * @Description:
 * @Author: YanCheng
 * @Date: 2021-04-21 15:14:32
 * @LastEditTime: 2021-04-21 18:06:21
 */
import { useState, useEffect } from "react";
import SearchPanel from "./search-panel";
import List from "./list";
import { cleanObject } from "../../utils";
import * as qs from "qs";
import { useDebounce } from "../../hooks/index";
import { User, Project } from "./data";

const ProjectListScreen = () => {
  const [list, setList] = useState<Project[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const debouncedParam = useDebounce(param, 2000);
  const apiUrl = process.env.REACT_APP_API_URL;
  useEffect(() => {
    fetch(
      `${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`
    ).then(async (res) => {
      if (res.ok) {
        setList(await res.json());
      }
    });
  }, [debouncedParam, apiUrl]);

  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  }, [apiUrl]);

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  );
};

export default ProjectListScreen;