import { Content } from "antd/es/layout/layout";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router";

export const Contents = () => {
  const myTheme = useSelector((state) => state.theme.myTheme);
  return (
    <Content style={{ background: myTheme }}>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/dashboard" element={<div>Dashboard</div>} />
        <Route path="/profile" element={<div>Profile</div>} />
      </Routes>
    </Content>
  );
};
