"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const user_model_1 = require("./user.model");
const typeorm_2 = require("@nestjs/typeorm");
const graphql_1 = require("@nestjs/graphql");
const user_enum_1 = require("./user.enum");
let UserProvider = class UserProvider {
    constructor(usersRepository, context) {
        this.usersRepository = usersRepository;
        this.context = context;
    }
    async findById(id) {
        console.log('received context: ', this.context);
        return this.usersRepository.findOne({ where: { id } });
    }
    async findByUsername(username) {
        return this.usersRepository.findOne({ where: { username } });
    }
    async createUser(username, hashedPassword) {
        const userObject = {
            username,
            password: hashedPassword,
            role: user_enum_1.UserRole.USER,
        };
        return this.usersRepository.save(userObject);
    }
};
UserProvider = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(user_entity_1.User)),
    __param(1, common_1.Inject(graphql_1.CONTEXT)),
    __metadata("design:paramtypes", [typeorm_1.Repository, Object])
], UserProvider);
exports.UserProvider = UserProvider;
//# sourceMappingURL=user.provider.js.map