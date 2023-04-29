import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from 'path/to/user.json';
import data from 'path/to/data.json';
import friends from 'path/to/friends.json';
import transactions from 'path/to/transactions.json';

export const App = () => {
  return (
  <>
  <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />
  
  {data && data.length > 0 ? (
        <>
          {data.title && <Statistics title={data.title} stats={data} />}
          {!data.title && <Statistics stats={data} />}
        </>
      ) : null}

  <FriendList friends={friends} />

  <TransactionHistory items={transactions} />;
  </>
  );
};



