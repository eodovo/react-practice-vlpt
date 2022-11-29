import { useRef, useState, useMemo, useCallback } from "react";
import UserList from "./components/UserList";
import CreateUser from "./components/CreateUser";
import Ex from "./components/ex";

function countActiveUsers(users) {
  console.log("활성 사용자 찾는 중..");
  return users.filter((user) => user.active).length;
}

function App() {
  const [input, setInput] = useState({
    username: "",
    email: "",
  });
  const { username, email } = input;
  const onChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      setInput({
        ...input,
        [name]: value,
      });
    },
    [input]
  );

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ]);
  const nextID = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextID.current,
      username,
      email,
    };
    setUsers([...users, user]);
    setInput({
      username: "",
      email: "",
    });
    nextID.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(users.map((user) => (user.id === id ? { ...user, active: !user.active } : user)));
  };

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <div>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수 :{count}</div>
      <Ex />
    </div>
  );
}

export default App;
