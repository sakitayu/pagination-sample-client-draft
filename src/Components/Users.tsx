import React, { useEffect, useState, FC } from 'react';
import { User } from '../Domain/Entity/User';
import { UserRepository } from '../Domain/Repository/UserRepository';
import { Container, Table } from 'react-bootstrap';

const Users: FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [totalPages, setTotalPages] = useState<number>();

    useEffect(() => {
        UserRepository.index().then(res => {
            setUsers(res.data);
            setTotalPages(res.totalPages);
        });
    }, []);

    const trs = users.map(user => {
        return (
            <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
            </tr>
        );
    });

    return (
        <Container className='mx-auto my-5'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>{trs}</tbody>
            </Table>
        </Container>
    );
};

export default Users;
