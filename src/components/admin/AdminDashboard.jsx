import AddProject from './AddProject';
import AddClient from './AddClient';
import ViewContacts from './ViewContacts';
import ViewSubscribers from './ViewSubscriber';

export default function AdminDashboard() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold text-blue-700">Admin Panel</h1>
      <AddProject />
      <AddClient />
      <ViewContacts />
      <ViewSubscribers />
    </div>
  );
}