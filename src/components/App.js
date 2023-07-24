import Profile from 'components/Profile/Profile';
import profileData from '../data/user.json';
import statsData from '../data/data.json';
import friendListData from '../data/friends.json';
import transactionData from '../data/transactions.json';
import Statistics from 'components/Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <>
      <Profile
        username={profileData.username}
        tag={profileData.tag}
        location={profileData.location}
        avatar={profileData.avatar}
        stats={profileData.stats}
      />

      <Statistics title={'Title'} stats={statsData} />
      <Statistics stats={statsData} />

      <FriendList friends={friendListData} />

      <TransactionHistory items={transactionData} />
    </>
  );
}
