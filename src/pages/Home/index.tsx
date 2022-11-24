import SideBar from '../../components/SideBar';
import Tasks from '../../components/Tasks';

import './styles.scss';

export default function Home() {
  return (
    <div className="home-container">
      <SideBar />
      <Tasks />
    </div>
  );
}