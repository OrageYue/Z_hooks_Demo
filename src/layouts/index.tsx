import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;

import { menus } from './menu';
import styles from  './index.css';


const rootSubmenuKeys = ['StateHooks', 'RequestHooks', 'ContentHooks' ];


const BasicLayout: React.FC = props => {

  const [collaspd, setCollaspd] = useState(false);
  const [openMeunKeys, setOpenMeunKeys] = useState(['StateHooks']);
  const [selectMenuKey, setSelectMenuKey] = useState('0');

  const openMenuChange = (keys:any) => {
    const lastOpenKey = keys.find((item: any) => openMeunKeys.indexOf(item) === -1);
    if (rootSubmenuKeys.indexOf(lastOpenKey) === -1) {
      setOpenMeunKeys(keys);
    } else {
      setOpenMeunKeys(lastOpenKey ? [lastOpenKey] : []);
    }
  };

  const handleMenuClick = (e:any) => {
    setSelectMenuKey(e.key)
  }

  const renderMenu = () => {
    // menus.map(item => {
    //   return (
        
    //   )
    // })
  }
  return (
    <Layout>
      <Sider theme="light" trigger={null} collapsible collapsed={collaspd} >
        <div className={styles.logo} >
          {collaspd ?
            'Z'
            :
            'Z-Hooks'
          }
        </div>
        <Menu onClick={handleMenuClick} selectedKeys={[selectMenuKey]} theme="light" mode="inline" openKeys={openMeunKeys} onOpenChange={openMenuChange}>
          {menus.map((item :any) => {
            return (
              <SubMenu key={item.key} title={item.title}>
                {item.children.map((child: any) => {
                  return (
                    <Menu.Item key={child.key}>
                      {child.title}
                    </Menu.Item>
                  )
                })}
              </SubMenu>
            )
          })}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 ,background:"#fff"}}>
          {collaspd ?
            <MenuUnfoldOutlined
              onClick={() => setCollaspd(false)}
            />
            :
            <MenuFoldOutlined
               onClick={() => setCollaspd(true)}
            />
          }
        </Header>
        <Content className={styles.content} style={{minHeight:window.innerHeight*.7}}>
           {props.children}
        </Content>
        <Footer className={styles.footer} >Design by <a style={{fontSize:'18px'}} href="https://github.com/yun-cheng-yue">yun-cheng</a></Footer>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
