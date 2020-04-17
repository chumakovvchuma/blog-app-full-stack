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
const graphql_1 = require("@nestjs/graphql");
const user_model_1 = require("./user.model");
const user_provider_1 = require("./user.provider");
const graphql_guard_1 = require("../graphql/graphql.guard");
const current_user_1 = require("../graphql/decorators/current-user");
const auth_model_1 = require("../auth/auth.model");
let UserResolver = class UserResolver {
    constructor(userProvider) {
        this.userProvider = userProvider;
    }
    whoAmI(user) {
        return this.userProvider.findById(user.id);
    }
    async findById(id) {
        const user = await this.userProvider.findById(id);
        if (!user) {
            throw new common_1.NotFoundException(id);
        }
        return user;
    }
    async findByUsername(username) {
        const user = await this.userProvider.findByUsername(username);
        if (!user) {
            throw new common_1.NotFoundException(username);
        }
        return user;
    }
};
__decorate([
    graphql_1.Query(returns => user_model_1.User),
    common_1.UseGuards(graphql_guard_1.GqlAuthGuard),
    __param(0, current_user_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_model_1.AuthUser]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "whoAmI", null);
__decorate([
    graphql_1.Query(returns => user_model_1.User),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "findById", null);
__decorate([
    graphql_1.Query(returns => user_model_1.User),
    __param(0, graphql_1.Args('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "findByUsername", null);
UserResolver = __decorate([
    graphql_1.Resolver(of => user_model_1.User),
    __metadata("design:paramtypes", [user_provider_1.UserProvider])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map