import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined } from '@ant-design/icons';
const { Header, Sider, Content, Footer } = Layout;
import styles from  './index.css';

const BasicLayout: React.FC = props => {
  const [collaspd, setCollaspd] = useState(false);
  
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
        <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" >
            Request Hooks
          </Menu.Item>
          <Menu.Item key="2" >
            Content Hooks
          </Menu.Item>
           <Menu.Item key="3" >
            Data Hooks
          </Menu.Item>
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
