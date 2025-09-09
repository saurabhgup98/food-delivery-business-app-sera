import React, { useState, useEffect } from 'react';
import AdminConsoleHeader from '../AdminConsole/AdminConsoleHeader';
import UsersTable from '../AdminConsole/UsersTable';
import CreateAdminModal from '../AdminConsole/CreateAdminModal';

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: string;
  isActive: boolean;
  emailVerified: boolean;
  appRegistered: Array<{
    name: string;
    role: string;
  }>;
}

interface NewAdminForm {
  name: string;
  email: string;
  password: string;
}

const AdminConsole: React.FC = () => {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<AdminUser[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [showNewAdminForm, setShowNewAdminForm] = useState(false);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      // TODO: Replace with actual API call
      const response = await fetch('/api/admin/users');
      const data = await response.json();
      setUsers(data.users || []);
    } catch (error) {
      console.error('Error fetching users:', error);
      // Mock data for now
      setUsers([
        {
          id: '1',
          name: 'John Doe',
          email: 'john@example.com',
          role: 'business-user',
          isActive: true,
          emailVerified: true,
          appRegistered: [
            { name: 'https://food-delivery-business-app-sera.vercel.app', role: 'business-user' }
          ]
        },
        {
          id: '2',
          name: 'Jane Smith',
          email: 'jane@example.com',
          role: 'admin',
          isActive: true,
          emailVerified: true,
          appRegistered: [
            { name: 'https://food-delivery-business-app-sera.vercel.app', role: 'admin' }
          ]
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Filter users based on search term
  useEffect(() => {
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [users, searchTerm]);

  useEffect(() => {
    fetchUsers();
  }, []);

  // Promote user to admin
  const promoteToAdmin = async (userId: string) => {
    try {
      const response = await fetch(`/api/admin/promote/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        await fetchUsers(); // Refresh the list
      }
    } catch (error) {
      console.error('Error promoting user:', error);
    }
  };

  // Remove admin access
  const removeAdminAccess = async (userId: string) => {
    try {
      const response = await fetch(`/api/admin/demote/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        await fetchUsers(); // Refresh the list
      }
    } catch (error) {
      console.error('Error removing admin access:', error);
    }
  };

  // Create new admin
  const createNewAdmin = async (formData: NewAdminForm) => {
    try {
      const response = await fetch('/api/admin/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        await fetchUsers(); // Refresh the list
      }
    } catch (error) {
      console.error('Error creating admin:', error);
    }
  };


  return (
    <div className="min-h-screen bg-dark-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Search and Create Button */}
        <AdminConsoleHeader
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onCreateAdminClick={() => setShowNewAdminForm(true)}
        />

        {/* Users Table */}
        <UsersTable
          users={filteredUsers}
          isLoading={isLoading}
          onPromoteToAdmin={promoteToAdmin}
          onRemoveAdminAccess={removeAdminAccess}
        />

        {/* Create Admin Modal */}
        <CreateAdminModal
          isOpen={showNewAdminForm}
          onClose={() => setShowNewAdminForm(false)}
          onCreateAdmin={createNewAdmin}
        />
      </div>
    </div>
  );
};

export default AdminConsole;
