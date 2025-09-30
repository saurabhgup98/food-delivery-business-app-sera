import React from 'react';
import { User } from '../../data/usersData';
import ListPrimaryFooter from '../Footer/ListPrimaryFooter';
import { TABLE_HEADERS, STATUS_COLORS, ROLE_COLORS, TABLE_STYLES } from './config/UserListConfig';
import ActionButtons from './ActionButtons';

interface UserListProps {
    users: User[];
    onViewUser?: (user: User) => void;
    onEditUser?: (user: User) => void;
    onDeleteUser?: (user: User) => void;
    // Pagination props
    currentPage?: number;
    totalPages?: number;
    totalItems?: number;
    onPreviousPage?: () => void;
    onNextPage?: () => void;
    onPageChange?: (page: number) => void;
    className?: string;
}

const UserList: React.FC<UserListProps> = ({
    users,
    onViewUser,
    onEditUser,
    onDeleteUser,
    currentPage = 1,
    totalPages = 1,
    totalItems = users.length,
    onPreviousPage,
    onNextPage,
    onPageChange,
    className = ''
}) => {
    const getStatusColor = (status: string) => {
        return STATUS_COLORS[status as keyof typeof STATUS_COLORS] || STATUS_COLORS.default;
    };

    const getRoleColor = (role: string) => {
        return ROLE_COLORS[role as keyof typeof ROLE_COLORS] || ROLE_COLORS.default;
    };


    return (
        <div className={`${TABLE_STYLES.container} ${className}`}>
            {/* Table Content with Horizontal Scroll */}
            <div className="flex flex-col h-96">
                {/* Scrollable Table Container */}
                <div className="flex-1 overflow-auto custom-scrollbar">
                    <table className="w-full min-w-max">
                        {/* Fixed Table Header */}
                        <thead className={TABLE_STYLES.header}>
                            <tr>
                                {TABLE_HEADERS.map((header) => (
                                    <th key={header.key} className={TABLE_STYLES.headerCell}>
                                        {header.label}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className={TABLE_STYLES.body}>
                            {users.map((user) => (
                                <tr key={user.id} className={TABLE_STYLES.row}>
                                    <td className={TABLE_STYLES.cell}>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 bg-gradient-to-br from-sera-pink/30 to-sera-orange/20 rounded-full flex items-center justify-center text-white font-semibold">
                                                {user.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="text-white font-medium">{user.name}</div>
                                                <div className="text-gray-400 text-sm">{user.email}</div>
                                                <div className="text-gray-500 text-xs">{user.location}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={TABLE_STYLES.cell}>
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(user.status)}`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className={TABLE_STYLES.cell}>
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${getRoleColor(user.role)}`}>
                                            {user.role.replace('_', ' ')}
                                        </span>
                                    </td>
                                    <td className={`${TABLE_STYLES.cell} text-white font-medium`}>{user.totalOrders}</td>
                                    <td className={`${TABLE_STYLES.cell} text-white font-medium`}>${user.totalSpent.toFixed(2)}</td>
                                    <td className={`${TABLE_STYLES.cell} text-gray-400 text-sm`}>{user.lastActive}</td>
                                    <td className={TABLE_STYLES.cell}>
                                        <ActionButtons
                                            user={user}
                                            onViewUser={onViewUser}
                                            onEditUser={onEditUser}
                                            onDeleteUser={onDeleteUser}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Table Footer */}
            <ListPrimaryFooter
                currentPage={currentPage}
                totalPages={totalPages}
                totalItems={totalItems}
                filteredItems={users.length}
                onPreviousPage={onPreviousPage || (() => { })}
                onNextPage={onNextPage || (() => { })}
                onPageChange={onPageChange || (() => { })}
            />
        </div>
    );
};

export default UserList;