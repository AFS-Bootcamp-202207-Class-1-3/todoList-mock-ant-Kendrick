import { Menu } from "antd";
import { Link, Outlet } from "react-router-dom";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const AntMenu = () => (
  <Menu mode="horizontal" defaultSelectedKeys={["mail"]}>
    <Menu.Item key="mail" icon={<MailOutlined />}>
      <Link to="/">home</Link>
    </Menu.Item>
    <Menu.SubMenu
      key="SubMenu"
      title="Navigation Two - Submenu"
      icon={<SettingOutlined />}
    >
      <Menu.Item key="two" icon={<AppstoreOutlined />}>
        <Link to="/about">about</Link>
      </Menu.Item>
      <Menu.Item key="three" icon={<AppstoreOutlined />}>
        <Link to="/done">done</Link>
      </Menu.Item>
      <Menu.ItemGroup title="Item Group">
        <Menu.Item key="four" icon={<AppstoreOutlined />}>
          Navigation Four
        </Menu.Item>
        <Menu.Item key="five" icon={<AppstoreOutlined />}>
          Navigation Five
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu.SubMenu>
  </Menu>
);

export default AntMenu;
