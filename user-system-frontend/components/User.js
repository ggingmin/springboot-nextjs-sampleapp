import React from "react";

const User = ({ user }) => {
    return (
        <tr key={user.id}>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{user.lastName}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{user.firstName}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{user.emailId}</div>
            </td>
            <td className="text-right px-6 py-4 whitespace-nowrap">
                <a href="#" className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointe px-4">수정</a>
                <a href="#" className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">삭제</a>
            </td>
        </tr>
    );
};

export default User;