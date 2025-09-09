import React from 'react';
import { ShieldIcon, ShieldCheckIcon, ShieldXIcon, UsersIcon } from '../Icons';

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

interface UsersTableProps {
  users: AdminUser[];
  isLoading: boolean;
  onPromoteToAdmin: (userId: string) => void;
  onRemoveAdminAccess: (userId: string) => void;
}

const UsersTable: React.FC<UsersTableProps> = ({
  users,
  isLoading,
  onPromoteToAdmin,
  onRemoveAdminAccess
}) => {
  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'superadmin':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'admin':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'business-user':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'superadmin':
        return <ShieldIcon className="w-4 h-4" />;
      case 'admin':
        return <ShieldCheckIcon className="w-4 h-4" />;
      case 'business-user':
        return <UsersIcon className="w-4 h-4" />;
      default:
        return <UsersIcon className="w-4 h-4" />;
    }
  };

  if (isLoading) {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden">
        <div className="px-6 py-5 border-b border-white/20">
          <h2 className="text-xl font-bold text-white">Users Management</h2>
        </div>
        <div className="p-8 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400 mx-auto"></div>
          <p className="mt-2 text-gray-300">Loading users...</p>
        </div>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden">
        <div className="px-6 py-5 border-b border-white/20">
          <h2 className="text-xl font-bold text-white">Users Management</h2>
        </div>
        <div className="p-8 text-center text-gray-300">
          <UsersIcon className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <p className="text-lg font-medium">No users found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden">
      {/* Enhanced Header */}
      <div className="px-6 py-4 border-b border-white/20 bg-gradient-to-r from-white/5 to-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-white">Users Management</h2>
          </div>
          <div className="text-sm text-gray-300">
            {users.length} {users.length === 1 ? 'user' : 'users'}
          </div>
        </div>
      </div>

      {/* Scrollable Table Container */}
      <div className="max-h-96 overflow-y-auto">
        <table className="w-full">
          <thead className="bg-white/5 sticky top-0 z-10">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-200 uppercase tracking-wider bg-white/10">
                User
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-200 uppercase tracking-wider bg-white/10">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-200 uppercase tracking-wider bg-white/10">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-200 uppercase tracking-wider bg-white/10">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white/5 divide-y divide-white/10">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-white/10 transition-colors duration-200">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-semibold text-white">{user.name}</div>
                    <div className="text-sm text-gray-300">{user.email}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border ${getRoleBadgeColor(user.role)}`}>
                    {getRoleIcon(user.role)}
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-3 py-1.5 text-xs font-semibold rounded-full ${
                    user.isActive ? 'bg-green-100/20 text-green-300 border border-green-300/30' : 'bg-red-100/20 text-red-300 border border-red-300/30'
                  }`}>
                    {user.isActive ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex gap-2">
                    {user.role === 'business-user' && (
                      <button
                        onClick={() => onPromoteToAdmin(user.id)}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 rounded-lg hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-200 border border-purple-400/30 hover:border-purple-400/50 shadow-sm hover:shadow-md"
                      >
                        <ShieldCheckIcon className="w-4 h-4" />
                        <span className="font-medium">Make Admin</span>
                      </button>
                    )}
                    {user.role === 'admin' && (
                      <button
                        onClick={() => onRemoveAdminAccess(user.id)}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 text-red-300 rounded-lg hover:from-red-500/30 hover:to-pink-500/30 transition-all duration-200 border border-red-400/30 hover:border-red-400/50 shadow-sm hover:shadow-md"
                      >
                        <ShieldXIcon className="w-4 h-4" />
                        <span className="font-medium">Remove Admin</span>
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
