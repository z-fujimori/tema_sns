import { Controller, UseGuards } from '@nestjs/common';
// import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { Get } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '../auth/auth.guard';

// @ApiTags('users')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @UseGuards(AuthGuard)
    @Get('/all')
//   @ApiResponse({
//     status: 200,
//     description: 'ユーザを一覧表示',
//     content: {
//         'application/json': {
//             example: [
//             {
//                 id: 1,
//                 name: 'テストユーザゼロイチ',
//                 employee_number: '00000001',
//                 email: 'test_user_01@example.com',
//                 is_active: true,
//                 createdAt: '2024-03-08T00:33:27.790Z',
//                 updatedAt: '2024-03-08T00:33:27.790Z',
//             },
//             ],
//         },
//     },
//   })
    findAll() {
        return this.userService.findAll();
    }
}
