import { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Login from './pages/Login';
import Route from './components/navigation/Route';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import NavigationProvider from './context/navigation';
import ClientsPage from './pages/ClientsPage';

const App: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavigationProvider>
      <Nav />
      <div className="min-h-screen">
        <Login />
        
        <Route path='/'>
          <HomePage />
        </Route>
        <Route path='/users'>
          <UsersPage />
        </Route>
        <Route path='/clients'>
          <ClientsPage />
        </Route>
      </div>
      <Footer />
      </NavigationProvider>
    </>

  )
}

export default App
