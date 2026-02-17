import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            'id': 1,
            'name': 'John Doe',
            'email': 'johndoe@gmail.com',
            'role': 'ENGINEER'
        },
        {
            'id': 2,
            'name': 'Jane Smith',
            'email': 'janesmith.com',
            'role': 'INTERN'
        },
        {
            'id': 3,
            'name': 'Alice Johnson',
            'email': 'alicejohnson.tv',
            'role': 'ADMIN'
        }, 
        {
            'id': 4,
            'name': 'Bob Brown',
            'email': 'bobbrown.org',
            'role': 'ADMIN'
        }, 
        {
            'id': 5,
            'name': 'Charlie Davis',
            'email': 'charliedavis.net',
            'role': 'ENGINEER'
        }
    ]

    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        if (role) {
            const rolesArray = this.users.filter(user => user.role === role);
            if (rolesArray.length === 0) {
                throw new NotFoundException('No users found with the specified role');
            }
            return rolesArray;
        }
        return this.users;
    }

    findOne(id: number){
        const user = this.users.find(user => user.id === id)

        if (!user){ throw new NotFoundException('User not found') }
        return user  
    }

    create(createUserDto: CreateUserDto) {
        const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
        const newUser = {
            id: usersByHighestId[0].id + 1,
            ...createUserDto
        }
        this.users.push(newUser)
        return newUser
    }
    
    update(id: number, updateUserDto: UpdateUserDto){ 
        this.users = this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...updateUserDto };
            }
            return user; // Ensure the original user is returned if not updated
        }) 
        return this.findOne(id);
    }

    delete(id: number){
        const removedUser = this.findOne(id);

        this.users = this.users.filter(user => user.id !== id) 
         
        return removedUser; 
    }
    

}
