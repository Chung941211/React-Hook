import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub" title="hook">
              <Menu.Item key="1">useUpdateHook</Menu.Item>
              <Menu.Item key="2">useAntiShake</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route exact path="/" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  )
}

export default App
