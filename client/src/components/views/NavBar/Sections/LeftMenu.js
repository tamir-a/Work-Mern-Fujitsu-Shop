import React from "react";
import { Menu } from "antd";
/*const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;*/

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <a href="/">Нүүр</a>
      </Menu.Item>
      <Menu.Item key="about">
        <a href="/about">Бидний тухай</a>
      </Menu.Item>
      <Menu.Item key="contact">
        <a href="/contact">Холбоо барих</a>
      </Menu.Item>

      {/* <SubMenu title={<span>Blogs</span>}>
        <MenuItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
        </MenuItemGroup>
      </SubMenu> */}
    </Menu>
  );
}

export default LeftMenu;
