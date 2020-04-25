import gql from 'graphql-tag'
import { Mutation } from 'core/graphql/graphql.types'
import { AuthResponse } from './auth.types'

export const login: Mutation<AuthResponse> = {
	gql: gql`
		mutation login($username: String!, $password: String!) {
			login(username: $username, password: $password) {
				user {
					id
					username
					email
					role
				}
			}
		}
	`,
	selector: ['login'],
}

export const getRefreshTokenMutation: Mutation<{
	accessToken: string
}> = {
	gql: gql`
		mutation getAccessToken($email: String!, $refreshToken: String!) {
			getAccessToken(email: $email, refreshToken: $refreshToken) {
				accessToken
			}
		}
	`,
	selector: ['getAccessToken'],
}