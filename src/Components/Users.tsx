import React, { useEffect, useState, FC } from 'react';
import { User } from '../Domain/Entity/User';
import { UserRepository } from '../Domain/Repository/UserRepository';

const Users: FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [totalPages, setTotalPages] = useState<number>();

    useEffect(() => {
        UserRepository.index().then(res => {
            setUsers(res.data);
            setTotalPages(res.totalPages);
        });
    }, []);

    return <>ここにユーザー一覧</>;
};

export default Users;
