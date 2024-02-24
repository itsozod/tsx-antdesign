import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, Dropdown } from "antd";
import { Contents } from "./components/Content/Content";
import { useNavigate } from "react-router";
import Sider from "antd/es/layout/Sider";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useSelector, useDispatch } from "react-redux";
import { State, changeUserData } from "./store/userData/userDataSlice";
import { UseSelectTheme } from "./utils/themes";
import { changeTheme } from "./store/themeChanger/themeSlice";

const { Header, Content } = Layout;

const App = () => {
  const myTheme = useSelector((state) => state.theme.myTheme);
  const dispatch = useDispatch();
  const changeThemes = (theme: string) => {
    UseSelectTheme(theme);
    dispatch(changeTheme(theme));
    localStorage.setItem("theme", theme);
  };
  const items = [
    {
      key: "1",
      label: (
        <>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              width: 250,
              height: 150,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "5px",
                border: myTheme === "Red" ? "1px solid black" : "none",
                margin: "2px",
              }}
            >
              <img
                onClick={() => changeThemes("Red")}
                src="/Ellipse 86 (1).svg"
                alt=""
              />
              <img src="/Ellipse 86 (1).svg" alt="" />
              <img src="/Ellipse 86 (1).svg" alt="" />
              <img src="/Ellipse 86 (1).svg" alt="" />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "5px",
                border: myTheme === "Blue" ? "1px solid black" : "none",
                margin: "2px",
                // padding: 5
              }}
            >
              <img
                onClick={() => changeThemes("Blue")}
                src="/Ellipse 86 (2).svg"
                alt=""
              />
              <img src="/Ellipse 86 (2).svg" alt="" />
              <img src="/Ellipse 86 (2).svg" alt="" />
              <img src="/Ellipse 86 (2).svg" alt="" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "5px",
                // border: myTheme === theme ? "1px solid black" : "none",
                margin: "2px",
                // padding: 5
              }}
            >
              <img src="/Ellipse 86 (3).svg" alt="" />
              <img src="/Ellipse 86 (3).svg" alt="" />
              <img src="/Ellipse 86 (3).svg" alt="" />
              <img src="/Ellipse 86 (3).svg" alt="" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "5px",
                border: myTheme === "Green" ? "1px solid black" : "none",
                margin: "2px",
                // padding: 5
              }}
            >
              <img
                onClick={() => changeThemes("Green")}
                src="/Ellipse 86 (4).svg"
                alt=""
              />
              <img src="/Ellipse 86 (4).svg" alt="" />
              <img src="/Ellipse 86 (4).svg" alt="" />
              <img src="/Ellipse 86 (4).svg" alt="" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "5px",
                // border: myTheme === theme ? "1px solid black" : "none",
                margin: "2px",
                // padding: 5
              }}
            >
              <img src="/Ellipse 86 (5).svg" alt="" />
              <img src="/Ellipse 86 (5).svg" alt="" />
              <img src="/Ellipse 86 (5).svg" alt="" />
              <img src="/Ellipse 86 (5).svg" alt="" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "5px",
                // border: myTheme === theme ? "1px solid black" : "none",
                margin: "2px",
                // padding: 5
              }}
            >
              <img src="/Ellipse 86 (6).svg" alt="" />
              <img src="/Ellipse 86 (6).svg" alt="" />
              <img src="/Ellipse 86 (6).svg" alt="" />
              <img src="/Ellipse 86 (6).svg" alt="" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "5px",
                // border: myTheme === theme ? "1px solid black" : "none",
                margin: "2px",
                // padding: 5
              }}
            >
              <img src="/Ellipse 86 (6).svg" alt="" />
              <img src="/Ellipse 86 (6).svg" alt="" />
              <img src="/Ellipse 86 (6).svg" alt="" />
              <img src="/Ellipse 86 (6).svg" alt="" />
            </div>
          </div>
        </>
      ),
    },
  ];
  // const [colorBg, setColorBg] = useState<string>("red");
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(true);
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const isMediumDevice = useMediaQuery("only screen and (min-width : 768px)");

  const userData = useSelector((state: State) => state.userData);

  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Header
          style={{
            background: "#fff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1>Ant Design</h1>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>

        <div
          style={{
            width: "100%",
            height: "100vh",
            position: "absolute",
            top: "70px",
            left: 0,
            display: !collapsed && isSmallDevice ? "flex" : "none",
            justifyContent: "center",
          }}
        >
          <Menu
            style={{ margin: "10px" }}
            onClick={({ key }) => {
              if (key) {
                navigate(key);
                setCollapsed(true);
              }
            }}
            theme="light"
            mode="inline"
            defaultSelectedKeys={[window.location.pathname]}
            items={[
              {
                label: "Home",
                key: "1",
                icon: <PieChartOutlined />,
                children: [{ label: "Home1", key: "/" }],
              },
              {
                label: "Dashboard",
                key: "/dashboard",
                icon: <PieChartOutlined />,
              },
              {
                label: "Profile",
                key: "/profile",
                icon: <PieChartOutlined />,
              },
            ]}
          />
        </div>

        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            theme="light"
            style={{
              display: isMediumDevice ? "block" : "none",
            }}
          >
            <Menu
              style={{
                backgroundColor: UseSelectTheme(myTheme),
                height: "100vh",
              }}
              onClick={({ key }) => {
                if (key) {
                  navigate(key);
                  setCollapsed(true);
                }
              }}
              theme="light"
              mode="inline"
              defaultSelectedKeys={[window.location.pathname]}
              items={[
                {
                  label: "Home",
                  key: "1",
                  icon: <PieChartOutlined />,
                  children: [{ label: "Home1", key: "/" }],
                },
                {
                  label: "Dashboard",
                  key: "/dashboard",
                  icon: <PieChartOutlined />,
                },
                {
                  label: "Profile",
                  key: "/profile",
                  icon: <PieChartOutlined />,
                },
                {
                  label: (
                    <div className="dropdown">
                      <Dropdown placement={"topLeft"} menu={{ items }}>
                        <a>Dropwdown</a>
                      </Dropdown>
                    </div>
                  ),
                  key: "",
                  icon: <PieChartOutlined />,
                },
              ]}
            />
          </Sider>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: "grey",
              borderRadius: "grey",
            }}
          >
            <Contents />
            <input
              type="text"
              value={userData}
              onChange={(e) => dispatch(changeUserData(e.target.value))}
            />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default App;
